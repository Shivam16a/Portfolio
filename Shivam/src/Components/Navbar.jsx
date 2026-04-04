import React, { useEffect, useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Scroll effect (only desktop)
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isMobile ? "mobile-nav" : ""}`}>

      <div
        className={`${isMobile
            ? "container-fluid glass-navbar"
            : scrolled
              ? "container glass-navbar"
              : "container-fluid px-4"
          } d-flex align-items-center justify-content-between`}
      >

        {/* Logo */}
        <a className="navbar-brand fw-bold text-white" href="#">
          Shivam
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <i className="fa fa-bars"></i>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="nav">
          <ul className="navbar-nav align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;