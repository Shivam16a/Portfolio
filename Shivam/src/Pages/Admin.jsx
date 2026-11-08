import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = ({ data, setData, GAS_URL }) => {
  const navigate = useNavigate();
  const [authInput, setAuthInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(() => sessionStorage.getItem("admin_logged_in") === "true");

  const [activeTab, setActiveTab] = useState("about");
  const [msg, setMsg] = useState("");

  const [newProj, setNewProj] = useState({ title: "", desc: "", tech: "", link: "", image: "" });
  const [newSkill, setNewSkill] = useState({ name: "", level: "", icon: "" });
  const [newTool, setNewTool] = useState({ name: "", info: "", icon: "" });
  const [profileImgInput, setProfileImgInput] = useState("");
  const [resumeFileInput, setResumeFileInput] = useState("");
  const [resumeFileName, setResumeFileName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const now = new Date();
    let matched = false;

    for (let i = -5; i <= 5; i++) {
      const checkDate = new Date(now.getTime() + i * 60000);
      let hours = checkDate.getHours();
      const minutes = String(checkDate.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;

      const timeStr = `${hours}:${minutes}${ampm}`;
      const expected = `shivam13042004${timeStr}`.toLowerCase();

      if (authInput.trim().toLowerCase() === expected) {
        matched = true;
        break;
      }
    }

    if (matched) {
      sessionStorage.setItem("admin_logged_in", "true");
      setIsLoggedIn(true);
      setMsg("Login Successful! Welcome Admin 🚀");
    } else {
      alert("Invalid security key or time expired!");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_logged_in");
    setIsLoggedIn(false);
    setAuthInput("");
  };

  const handleSave = async () => {
    setMsg("Syncing changes to Google Doc & Monitoring Sheet... ⏳");

    try {
      const res = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "save_portfolio",
          type: "Portfolio Full Update",
          data: data,
        }),
      });
      const result = await res.json();
      setMsg(`Changes published successfully to Cloud! Track ID: ${result.changeId || "Synced"} 💾🚀`);
    } catch (error) {
      console.error("GAS Sync Error:", error);
      setMsg("Cloud sync failed! ❌");
    }

    setTimeout(() => setMsg(""), 5000);
  };

  const addSkill = (e) => {
    e.preventDefault();
    const iconClass = newSkill.icon.trim() || "fa-solid fa-code text-info";
    setData({
      ...data,
      skills: [...data.skills, { name: newSkill.name, level: newSkill.level, icon: iconClass }]
    });
    setNewSkill({ name: "", level: "", icon: "" });
    setMsg("Technical skill added successfully! Click 'Publish Changes' to save.");
  };

  const deleteSkill = (index) => {
    setData({ ...data, skills: data.skills.filter((_, i) => i !== index) });
  };

  const addTool = (e) => {
    e.preventDefault();
    const iconClass = newTool.icon.trim() || "fa-solid fa-toolbox text-info";
    setData({
      ...data,
      developmentTools: [...data.developmentTools, { name: newTool.name, info: newTool.info, icon: iconClass }]
    });
    setNewTool({ name: "", info: "", icon: "" });
    setMsg("Development tool added successfully! Click 'Publish Changes' to save.");
  };

  const deleteTool = (index) => {
    setData({ ...data, developmentTools: data.developmentTools.filter((_, i) => i !== index) });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProj(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImgInput(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfileImage = async (e) => {
    e.preventDefault();
    if (!profileImgInput) return;
    setMsg("Uploading new profile picture to Google Drive... ⏳");

    try {
      const res = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "upload_file",
          fileData: profileImgInput,
          fileName: "profile_image.png",
          mimeType: "image/png"
        })
      });
      const result = await res.json();
      if (result.fileUrl) {
        setData({
          ...data,
          personal: { ...data.personal, profileImage: result.fileUrl }
        });
        setProfileImgInput("");
        setMsg("Profile picture updated successfully! Click 'Publish Changes' to save on Google Doc. 🚀");
      } else {
        setMsg("Failed to upload profile picture! ❌");
      }
    } catch (err) {
      console.error("Profile image upload error", err);
      setMsg("Error uploading profile image! ❌");
    }

    setTimeout(() => setMsg(""), 5000);
  };

  const handleResumeSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeFileInput(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateResume = async (e) => {
    e.preventDefault();
    if (!resumeFileInput) return;
    setMsg("Uploading new resume PDF to Google Drive... ⏳");

    try {
      const res = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "upload_file",
          fileData: resumeFileInput,
          fileName: resumeFileName || "Shivam_Resume.pdf",
          mimeType: "application/pdf"
        })
      });
      const result = await res.json();
      if (result.fileUrl) {
        setData({
          ...data,
          personal: { ...data.personal, resume: result.fileUrl }
        });
        setResumeFileInput("");
        setResumeFileName("");
        setMsg("Resume updated successfully! Click 'Publish Changes' to save on Google Doc. 🚀");
      } else {
        setMsg("Failed to upload resume! ❌");
      }
    } catch (err) {
      console.error("Resume upload error", err);
      setMsg("Error uploading resume! ❌");
    }

    setTimeout(() => setMsg(""), 5000);
  };

  const addProject = async (e) => {
    e.preventDefault();
    setMsg("Uploading image automatically to Google Drive folder... ⏳");
    const techArray = newProj.tech.split(",").map(t => t.trim());

    let imageUrl = newProj.image;
    try {
      const res = await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "upload_file",
          fileData: newProj.image,
          fileName: newProj.title + ".png",
          mimeType: "image/png"
        })
      });
      const result = await res.json();
      if (result.fileUrl) {
        imageUrl = result.fileUrl;
      }
    } catch (err) {
      console.log("Drive upload error", err);
    }

    setData({ ...data, projects: [...data.projects, { ...newProj, image: imageUrl, tech: techArray }] });
    setNewProj({ title: "", desc: "", tech: "", link: "", image: "" });
    setMsg("Project added & uploaded to Drive! Click 'Publish Changes' to save on Google Doc. 🚀");
    setTimeout(() => setMsg(""), 5000);
  };

  const deleteProject = (index) => {
    setData({ ...data, projects: data.projects.filter((_, i) => i !== index) });
  };

  if (!isLoggedIn) {
    return (
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="glass p-5 rounded-4 shadow-lg" style={{ width: "420px" }}>
          <h3 className="text-center mb-4 gradient-text">Admin Login 🔒</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label text-white">Security Key</label>
              <input
                type="text"
                className="form-control glass-input"
                placeholder="e.g. shivam1304200412:15AM"
                value={authInput}
                onChange={(e) => setAuthInput(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn w-100 glass-btn mt-3">Authorize Login 🚀</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5 text-white">
      {/* Responsive Header with Go to Home Button */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
        <h2 className="gradient-text text-center text-md-start m-0">Advanced Cloud Admin Center ⚡</h2>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <button className="btn btn-info fw-bold px-3 text-dark" onClick={() => navigate("/")}>Go to Home 🏠</button>
          <button className="btn btn-success fw-bold px-3" onClick={handleSave}>Publish Changes 💾</button>
          <button className="btn btn-danger fw-bold px-3" onClick={handleLogout}>Logout 🚪</button>
        </div>
      </div>

      {msg && <div className="alert alert-success">{msg}</div>}

      <ul className="nav nav-pills mb-4 gap-2 flex-wrap">
        <li className="nav-item"><button className={`nav-link ${activeTab === "about" ? "active bg-info text-dark" : "text-white"}`} onClick={() => setActiveTab("about")}>About / Personal</button></li>
        <li className="nav-item"><button className={`nav-link ${activeTab === "skills" ? "active bg-info text-dark" : "text-white"}`} onClick={() => setActiveTab("skills")}>Manage Skills & Tools</button></li>
        <li className="nav-item"><button className={`nav-link ${activeTab === "projects" ? "active bg-info text-dark" : "text-white"}`} onClick={() => setActiveTab("projects")}>Manage Projects</button></li>
      </ul>

      {activeTab === "about" && (
        <div>
          <div className="glass p-4 rounded-4 mb-4">
            <h4 className="mb-3">Edit Personal & Bio Info</h4>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control glass-input" value={data.personal.name} onChange={(e) => setData({ ...data, personal: { ...data.personal, name: e.target.value } })} />
            </div>
            <div className="mb-3">
              <label className="form-label">Main Bio</label>
              <textarea className="form-control glass-input" rows="3" value={data.personal.bio} onChange={(e) => setData({ ...data, personal: { ...data.personal, bio: e.target.value } })} />
            </div>
            <div className="mb-3">
              <label className="form-label">Journey Details</label>
              <textarea className="form-control glass-input" rows="4" value={data.personal.journey || ""} onChange={(e) => setData({ ...data, personal: { ...data.personal, journey: e.target.value } })} />
            </div>
          </div>

          {/* PROFILE PICTURE UPDATE SECTION */}
          <div className="glass p-4 rounded-4 mb-4">
            <h4 className="mb-3">Change Profile Picture</h4>
            <form onSubmit={updateProfileImage} className="row g-3 align-items-center">
              <div className="col-12 col-md-3 text-center">
                {data.personal.profileImage && (
                  <img src={data.personal.profileImage} alt="Profile" className="rounded-circle border border-info mb-2" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                )}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Upload New Profile Image</label>
                <input type="file" className="form-control glass-input" accept="image/*" onChange={handleProfileImageSelect} required />
              </div>
              <div className="col-12 col-md-3">
                <button type="submit" className="btn btn-primary w-100 mt-md-4">Update Picture 🖼️</button>
              </div>
            </form>
          </div>

          {/* RESUME UPDATE SECTION */}
          <div className="glass p-4 rounded-4">
            <h4 className="mb-3">Upload / Update Resume (PDF)</h4>
            <form onSubmit={updateResume} className="row g-3 align-items-center">
              <div className="col-12 col-md-9">
                <label className="form-label">Select New Resume PDF File</label>
                <input type="file" className="form-control glass-input" accept="application/pdf" onChange={handleResumeSelect} required />
                {data.personal.resume && (
                  <div className="mt-2">
                    <a href={data.personal.resume} target="_blank" rel="noopener noreferrer" className="text-info small">
                      📄 View Current Resume on Cloud
                    </a>
                  </div>
                )}
              </div>
              <div className="col-12 col-md-3">
                <button type="submit" className="btn btn-success w-100 mt-md-4">Upload Resume 📑</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {activeTab === "skills" && (
        <div>
          {/* 1. TECHNICAL SKILLS SECTION */}
          <div className="glass p-4 rounded-4 mb-4">
            <h4 className="mb-3">Add New Technical Skill</h4>
            <form onSubmit={addSkill} className="row g-3">
              <div className="col-12 col-md-4">
                <input type="text" className="form-control glass-input" placeholder="Skill Name (e.g. Python)" value={newSkill.name} onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })} required />
              </div>
              <div className="col-12 col-md-3">
                <input type="text" className="form-control glass-input" placeholder="Level (e.g. Intermediate)" value={newSkill.level} onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })} required />
              </div>
              <div className="col-12 col-md-3">
                <input type="text" className="form-control glass-input" placeholder="Icon Class (e.g. fab fa-python text-info)" value={newSkill.icon} onChange={(e) => setNewSkill({ ...newSkill, icon: e.target.value })} />
              </div>
              <div className="col-12 col-md-2">
                <button type="submit" className="btn btn-primary w-100">Add Skill ➕</button>
              </div>
            </form>
          </div>

          <div className="glass p-4 rounded-4 mb-4">
            <h4 className="mb-3">Existing Technical Skills</h4>
            <div className="row g-2">
              {data.skills.map((s, i) => (
                <div key={i} className="col-12 col-md-3 d-flex justify-content-between align-items-center bg-dark p-2 rounded border border-secondary">
                  <div><i className={`${s.icon || "fa-solid fa-code"} me-2`}></i><span>{s.name}</span></div>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteSkill(i)}>❌</button>
                </div>
              ))}
            </div>
          </div>

          {/* 2. DEVELOPMENT TOOLS SECTION */}
          <div className="glass p-4 rounded-4 mb-4">
            <h4 className="mb-3">Add New Development Tool</h4>
            <form onSubmit={addTool} className="row g-3">
              <div className="col-12 col-md-4">
                <input type="text" className="form-control glass-input" placeholder="Tool Name (e.g. Docker)" value={newTool.name} onChange={(e) => setNewTool({ ...newTool, name: e.target.value })} required />
              </div>
              <div className="col-12 col-md-3">
                <input type="text" className="form-control glass-input" placeholder="Info (e.g. Containerization)" value={newTool.info} onChange={(e) => setNewTool({ ...newTool, info: e.target.value })} required />
              </div>
              <div className="col-12 col-md-3">
                <input type="text" className="form-control glass-input" placeholder="Icon Class (e.g. fab fa-docker text-primary)" value={newTool.icon} onChange={(e) => setNewTool({ ...newTool, icon: e.target.value })} />
              </div>
              <div className="col-12 col-md-2">
                <button type="submit" className="btn btn-primary w-100">Add Tool ➕</button>
              </div>
            </form>
          </div>

          <div className="glass p-4 rounded-4">
            <h4 className="mb-3">Existing Development Tools</h4>
            <div className="row g-2">
              {data.developmentTools.map((t, i) => (
                <div key={i} className="col-12 col-md-3 d-flex justify-content-between align-items-center bg-dark p-2 rounded border border-secondary">
                  <div><i className={`${t.icon || "fa-solid fa-toolbox"} me-2`}></i><span>{t.name}</span></div>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteTool(i)}>❌</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "projects" && (
        <div className="glass p-4 rounded-4">
          <h4 className="mb-3">Add New Project</h4>
          <form onSubmit={addProject} className="row g-3 mb-4">
            <div className="col-12 col-md-6"><input type="text" className="form-control glass-input" placeholder="Project Title" value={newProj.title} onChange={(e) => setNewProj({ ...newProj, title: e.target.value })} required /></div>
            <div className="col-12 col-md-6"><input type="text" className="form-control glass-input" placeholder="Live URL" value={newProj.link} onChange={(e) => setNewProj({ ...newProj, link: e.target.value })} required /></div>
            <div className="col-12"><textarea className="form-control glass-input" placeholder="Description" rows="2" value={newProj.desc} onChange={(e) => setNewProj({ ...newProj, desc: e.target.value })} required /></div>
            <div className="col-12 col-md-6"><input type="text" className="form-control glass-input" placeholder="Tech Stack (comma separated)" value={newProj.tech} onChange={(e) => setNewProj({ ...newProj, tech: e.target.value })} required /></div>
            <div className="col-12 col-md-6"><input type="file" className="form-control glass-input" accept="image/*" onChange={handleImageChange} required /></div>
            <div className="col-12"><button type="submit" className="btn btn-primary w-100 mt-1">Add Project 🚀</button></div>
          </form>
          <h4>Existing Projects</h4>
          <div className="row g-3 mt-2">
            {data.projects.map((p, i) => (
              <div key={i} className="col-12 col-md-4">
                <div className="bg-dark p-3 rounded border border-secondary h-100 d-flex flex-column justify-content-between">
                  <div>
                    {p.image && <img src={p.image} alt={p.title} className="w-100 mb-2 rounded" style={{ height: "120px", objectFit: "cover" }} />}
                    <h5>{p.title}</h5>
                    <p className="text-secondary small">{p.desc}</p>
                  </div>
                  <button className="btn btn-sm btn-danger mt-2" onClick={() => deleteProject(i)}>Delete Project 🗑️</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;