import React from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "HTML5", level: "Expert", icon: "fa-brands fa-html5 text-warning" },
    { name: "CSS3", level: "Expert", icon: "fa-brands fa-css3-alt text-primary" },
    { name: "JavaScript", level: "Advanced", icon: "fa-brands fa-js text-warning" },
    { name: "React", level: "Advanced", icon: "fa-brands fa-react text-info" },
    { name: "Node.js", level: "Intermediate", icon: "fa-brands fa-node text-success" },
    { name: "MongoDB", level: "Intermediate", icon: "fa-solid fa-database text-success" },
    { name: "Express.js", level: "Intermediate", icon: "fa-solid fa-server text-secondary" },
    { name: "Bootstrap CSS", level: "Advanced", icon: "fab fa-bootstrap text-info" },
];

const development = [
    { name: "VS Code", info: "Code Editor", icon: "fa-solid fa-code text-primary" },
    { name: "Git", info: "Version Control", icon: "fa-brands fa-git-alt text-danger" },
    { name: "GitHub", info: "Code Hosting", icon: "fa-brands fa-github text-light" },
    { name: "Postman", info: "API Testing", icon: "fa-solid fa-paper-plane text-warning" },
    { name: "npm", info: "package manager", icon: "fab fa-npm text-danger" }
];

const Skills = () => {
    return (
        <section className="py-5 text-white" id="skills" style={{ background: "#0f172a", color: "white" }}>
            <div className="container text-center">
                <h1 className="fw-bold mb-3">Skills & Tools</h1>
                <p className="text-secondary mb-5">
                    The technologies I use to build modern web applications.
                </p>

                {/* Bootstrap Grid  technical skill*/}
                <div className="row g-4">
                    <h2 style={{ textAlign: "left" }}><i className="fas fa-code me-3 text-success"></i>Techenical Skill</h2>
                    {skills.map((skill, index) => (
                        <div key={index} className="col-6 col-md-3">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.08 }}
                                className="card bg-secondary bg-opacity-10 border border-secondary rounded-4 p-4 shadow-lg h-100"
                            >
                                {/* ICON */}
                                <div className="mb-3">
                                    <i className={`${skill.icon} fa-3x`}></i>
                                </div>

                                {/* NAME */}
                                <h5 className="fw-semibold text-white">{skill.name}</h5>

                                {/* LEVEL */}
                                <span className="badge bg-secondary mt-2">
                                    {skill.level}
                                </span>
                            </motion.div>
                        </div>
                    ))}
                </div>
                {/* Development tools */}
                <div className="row g-4 py-5">
                    <h2 style={{ textAlign: "left" }}><i className="fas fa-toolbox me-3 text-info"></i>Development Tools</h2>
                    {development.map((skill, index) => (
                        <div key={index} className="col-6 col-md-3">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.08 }}
                                className="card bg-secondary bg-opacity-10 border border-secondary rounded-4 p-4 shadow-lg h-100"
                            >
                                {/* ICON */}
                                <div className="mb-3">
                                    <i className={`${skill.icon} fa-3x`}></i>
                                </div>

                                {/* NAME */}
                                <h5 className="fw-semibold text-white">{skill.name}</h5>

                                {/* LEVEL */}
                                <span className="badge bg-secondary mt-2">
                                    {skill.info}
                                </span>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;