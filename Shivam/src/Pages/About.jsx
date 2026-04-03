import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/hero.css";
import profile from "../assets/shi7.jpeg";

const About = () => {
    return (
        <section id="about" className="about-section py-5">
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-5">
                    <h2 className="gradient-text">About Me</h2>
                </div>

                <div className="row align-items-center">

                    {/* Left Side */}
                    <div className="col-lg-6 mb-4">
                        <div className="glass p-4">

                            {/* Intro */}
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

                            {/* Button */}
                            <a href="#" className="btn btn-primary mt-3">
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="profile-wrapper">
                            <img
                                src={profile}
                                alt="Shivam"
                                className="img-fluid rounded-circle"
                            />
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="row mt-5">
                    <h3 className="text-center mb-4">My Skills</h3>

                    <div className="col-md-3 col-6 mb-3">
                        <div className="skill-card">
                            <i className="fa fa-code"></i>
                            <p>React, HTML, CSS, Bootstrap</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-6 mb-3">
                        <div className="skill-card">
                            <i className="fa fa-server"></i>
                            <p>Node.js, Express</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-6 mb-3">
                        <div className="skill-card">
                            <i className="fa fa-database"></i>
                            <p>MongoDB</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-6 mb-3">
                        <div className="skill-card">
                            <i className="fa fa-tools"></i>
                            <p>Git, GitHub, VS Code, Postman, Vercel</p>
                        </div>
                    </div>
                </div>

                {/* Current Work */}
                <div className="text-center mt-5">
                    <div className="glass p-4">
                        <h4>What I'm Doing Now 🚀</h4>
                        <p>
                            Currently, I am focusing on learning new technologies, building
                            real-world projects, and improving my full-stack development
                            skills.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
