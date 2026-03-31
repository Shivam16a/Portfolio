import React, { useEffect, useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* Logo */}
        <h2 className="logo">Shivam</h2>

        {/* Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>

          {/* User Icon */}
          <li>
            <i className="fa fa-user"></i>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa fa-bars"></i>
        </div>
{/* update */}
      </div>
    </nav>
  );
};

export default Navbar;