import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScrollActive = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - window.innerHeight / 3;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScrollActive);
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${isMobile ? "mobile-nav" : ""}`}
      style={isMobile ? { maxWidth: "100vw", overflowX: "hidden" } : {}}
    >
      <div
        className={`${isMobile
            ? "container-fluid glass-navbar"
            : scrolled
              ? "container glass-navbar"
              : "container-fluid px-4"
          } d-flex align-items-center justify-content-between ${isMobile ? "flex-nowrap" : ""}`}
        style={isMobile ? { width: "100%", maxWidth: "100%", boxSizing: "border-box" } : {}}
      >
        <a className="navbar-brand fw-bold text-white text-nowrap" href="#">
          Shivam
        </a>

        <button
          className="navbar-toggler text-white border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <i className="fa fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="nav">
          <ul className="navbar-nav align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className={`nav-link text-white ${activeSection === "about" ? "active-link" : ""}`} href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-white ${activeSection === "skills" ? "active-link" : ""}`} href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-white ${activeSection === "projects" ? "active-link" : ""}`} href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-white ${activeSection === "contact" ? "active-link" : ""}`} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;