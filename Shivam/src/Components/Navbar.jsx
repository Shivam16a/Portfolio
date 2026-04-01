import React, { useEffect, useState } from "react";
import "../styles/navbar.css"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      
      <div
        className={`${
          scrolled ? "container glass-navbar" : "container-fluid px-4"
        } d-flex align-items-center justify-content-between`}
      >

        {/* Logo */}
        <a className="navbar-brand fw-bold text-white" href="#">
          Shivam
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <i className="fa fa-bars"></i>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="nav">
          <ul className="navbar-nav align-items-lg-center">

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

            <li className="nav-item ms-lg-3">
              <i className="fa fa-user text-white"></i>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;