import React from "react";
import { motion } from "framer-motion";

const Skill = ({ data }) => {
  const { skills, developmentTools } = data || {};

  return (
    <section className="py-5 text-white" id="skills" style={{ background: "#0f172a", color: "white" }}>
      <div className="container text-center">
        <h1 className="fw-bold mb-3 gradient-text">Skills & Tools</h1>
        <p className="text-secondary mb-5">
          The technologies I use to build modern web applications.
        </p>

        {/* Technical Skills */}
        <div className="row g-4">
          <h2 style={{ textAlign: "left" }}><i className="fas fa-code me-3 text-success"></i>Technical Skills</h2>
          {skills?.map((skill, index) => (
            <div key={index} className="col-6 col-md-3">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="card bg-secondary bg-opacity-10 border border-secondary rounded-4 p-4 shadow-lg h-100 text-center"
              >
                <div className="mb-3">
                  <i className={`${skill.icon || "fa-solid fa-code"} fa-3x`}></i>
                </div>
                <h5 className="fw-semibold text-white">{skill.name}</h5>
                <span className="badge bg-secondary mt-2">
                  {skill.level}
                </span>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Development Tools */}
        <div className="row g-4 py-5">
          <h2 style={{ textAlign: "left" }}><i className="fas fa-toolbox me-3 text-info"></i>Development Tools</h2>
          {developmentTools?.map((tool, index) => (
            <div key={index} className="col-6 col-md-3">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="card bg-secondary bg-opacity-10 border border-secondary rounded-4 p-4 shadow-lg h-100 text-center"
              >
                <div className="mb-3">
                  <i className={`${tool.icon || "fa-solid fa-toolbox"} fa-3x`}></i>
                </div>
                <h5 className="fw-semibold text-white">{tool.name}</h5>
                <span className="badge bg-secondary mt-2">
                  {tool.info}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;