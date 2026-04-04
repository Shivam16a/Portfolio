import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/hero.css";
import profile from "../assets/shi7.jpeg";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="about-section py-5">
            <div className="container">

                {/* Heading */}
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="gradient-text">About Me</h2>
                </motion.div>

                <div className="row align-items-center">

                    {/* Left Side */}
                    <motion.div
                        className="col-lg-6 mb-4"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="glass p-4 h-100">

                            <h4 className="mb-3">Hi, I'm Shivam 👋</h4>
                            <p>
                                I'm a B.Tech (CSE) 3rd year student from Sandip University,
                                Madhubani. I am a passionate MERN Stack Developer currently
                                exploring full-stack opportunities and learning AI Prompt
                                Engineering.
                            </p>

                            {/* Bio */}
                            <p>
                                I started my coding journey in my B.Tech 1st year (2nd semester)
                                with C language, as it helped me understand core programming
                                concepts like variables, loops, conditions, and functions.
                                After building a strong foundation, I moved to web development
                                and learned HTML, CSS, and JavaScript.
                            </p>

                            <p>
                                Later, I completed a MERN Stack internship in Kolkata where I
                                gained industrial experience and built a project called
                                <strong> RideIntelliX</strong>, a bike and scooter rental
                                platform. In this project, I implemented JWT authentication,
                                password hashing using bcryptjs, payment integration, and file
                                uploads using multer.
                            </p>

                            <p>
                                After that, I built multiple projects like Yachika (leave
                                management system), Batcheet (random chat app), EventSphere
                                (event management system), and CampusMart (student marketplace
                                platform).
                            </p>


                            <a href="#" className="btn btn-primary mt-3">
                                Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side Image */}
                    <motion.div
                        className="col-lg-6 text-center"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <img
                            src={profile}
                            alt="Shivam"
                            className=" shadow profile-img"
                        />
                    </motion.div>
                </div>

                {/* Skills */}
                <div className="row mt-5 text-center">

                    <motion.h3
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        My Skills
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
                                <div className="icon">{skill.icon}</div>
                                <p>{skill.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Current Work */}
                <motion.div
                    className="text-center mt-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <div className="glass p-4">
                        <h4>What I'm Doing Now </h4>
                        <p>
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