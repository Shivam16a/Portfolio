import React from "react";
import { motion } from "framer-motion";
import project2 from "../assets/campusmart.png";
import project1 from "../assets/eventsphere.png";
import project3 from "../assets/yschika.png";
import project4 from "../assets/baatcheet.png";
import "../styles/project.css";


//project details
const projects = [
    {
        title: "EventSphere",
        desc: "EventSphere : Event management system (MERN stack)",
        tech: ["React", "Express", "Node.js","MongoDB","React Router","Bootstrap"],
        link: "https://eventsphare.vercel.app",
        image: project1,
    },
    {
        title: "CapmusMart",
        desc: "CampusMart : student resource exchange platform (MERN stack)",
        tech: ["MongoDB", "Express", "React", "Node","Postman"],
        link: "https://campus-marketplace-dusky.vercel.app",
        image: project2,
    },
    {
        title: "Yachika",
        desc: "Yachika : Leave Application Management System (MERN stack)",
        tech: ["React", "Node", "Express","Bootstrap","MongoDB"],
        link: "https://leave-application-management-system.vercel.app",
        image: project3,
    },
    {
        title:"baatcheet",
        desc:"Baatcheet : Random Chat Application (MERN Stack) under construction",
        tech:["React","Node","MongoDB","Express","Socket.io"],
        link:"#",
        image:project4,
    },
];

const Project = () => {
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
                            className="card project-card h-100 shadow-sm"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* 🔥 Image */}
                            <div className="project-img-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="card-img-top project-img"
                                />
                            </div>

                            <div className="card-body text-center">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.desc}</p>

                                <div className="mb-3">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="badge bg-dark me-1 mb-1">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline-info btn-sm"
                                >
                                    <i className="fa-solid fa-arrow-up-right-from-square me-1"></i>
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Project;