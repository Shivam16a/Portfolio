import React from "react";
import { motion } from "framer-motion";

const Project = ({ data }) => {
  const { projects } = data || {};

  return (
    <section className="project-section container py-5" id="projects">
      <motion.h2
        className="text-center mb-5 gradient-text"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <i className="fa-solid fa-diagram-project me-2"></i>
        My Projects
      </motion.h2>

      <div className="row g-4">
        {projects?.map((project, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4">
            <motion.div
              className="card project-card h-100 shadow-sm bg-dark border border-secondary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="project-img-wrapper" style={{ height: "180px", overflow: "hidden" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top project-img w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="card-body text-center d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-white">{project.title}</h5>
                  <p className="card-text text-secondary small">{project.desc}</p>
                </div>

                <div>
                  <div className="mb-3">
                    {project.tech?.map((t, i) => (
                      <span key={i} className="badge bg-secondary me-1 mb-1">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-info btn-sm w-100"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square me-1"></i>
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;