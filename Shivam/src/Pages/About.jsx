import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import profile from "../assets/me.jpeg";

const About = ({ data }) => {
  const { personal } = data || {};

  return (
    <section id="about" className="about-section py-5 text-white">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">About Me</h2>
        </motion.div>

        <div className="row align-items-center">
          <motion.div
            className="col-lg-6 mb-4"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass p-4 h-100">
              <h4 className="mb-3">Hi, I'm {personal?.name} 👋</h4>
              <p>{personal?.bio}</p>
              <p>{personal?.journey}</p>

              <a href={personal?.resume} className="btn btn-primary mt-3 me-4" target="_blank" rel="noreferrer" download>
                Download Resume
              </a>
              <a href={personal?.resume} className="btn btn-primary mt-3" target="_blank" rel="noreferrer">
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-6 text-center d-flex justify-content-center align-items-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="profile-wrapper shadow">
              <img src={personal?.profileImage || profile} alt={personal?.name} />
            </div>
          </motion.div>
        </div>

        <div className="row mt-5 text-center">
          <motion.h3
            className="mb-4 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            My Skills Highlights
          </motion.h3>

          {[
            { icon: <FaReact />, text: "React, HTML, CSS" },
            { icon: <FaNodeJs />, text: "Node.js, Express" },
            { icon: <FaDatabase />, text: "MongoDB" },
            { icon: <FaTools />, text: "Git, VS Code, Postman" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="col-6 col-md-3 mb-3"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="skill-card">
                <div className="icon text-info">{skill.icon}</div>
                <p className="text-secondary">{skill.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="glass p-4">
            <h4>What I'm Doing Now 🚀</h4>
            <p className="text-secondary">
              I am actively looking for internship and job opportunities where I can
              apply my skills, learn from real-world projects, and grow as a
              full-stack developer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;