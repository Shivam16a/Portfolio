import React from "react";
import Navbar from "../Components/Navbar";
import "../styles/navbar.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1 className="gradient-text">Hi, I'm Shivam 👋</h1>
        <p>MERN Stack Developer</p>
      </section>

      <section id="about" className="section glass vh-100">
        <h2>About Me</h2>
        <p>
          I am a MERN Stack Developer passionate about building scalable web apps
          using MongoDB, Express, React and Node.js.
        </p>
      </section>

      <section id="skills" className="section vh-100">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
        </ul>
      </section>

      <section id="projects" className="section glass vh-100">
        <h2>Projects</h2>
        <div className="card">
          <h3>E-commerce Website</h3>
          <p>MERN stack project with authentication & payment</p>
        </div>
        <div className="card">
          <h3>Blog App</h3>
          <p>Full CRUD app with login/signup</p>
        </div>
      </section>

      <section id="contact" className="section vh-100">
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
        <p>GitHub: github.com/yourprofile</p>
      </section>
    </>
  )
}

export default Home