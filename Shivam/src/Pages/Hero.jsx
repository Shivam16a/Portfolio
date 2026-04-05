import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../styles/about.css";
import profile from "../assets/shi7.jpeg";

const Hero = () => {
  return (
    <section className="container min-vh-100 d-flex align-items-center">
      <div className="row w-100 align-items-center">

        {/* LEFT */}
        <div className="col-md-6 text-center text-md-start mb-5 mb-md-0">

          <h1 className="fw-bold">
            Hi, I am <span className="text-info">Shivam Kumar</span>
          </h1>

          <h3 className="mt-3">
            I am a{" "}
            <span className="text-success">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "Backend Developer",
                  "Frontend Developer",
                ]}
                loop
                cursor
                cursorStyle="|"
              />
            </span>
          </h3>

          {/* Icons */}
          <div className="mt-4">
            <i className="fa-brands fa-react me-3 fs-2 text-info"></i>
            <i className="fa-brands fa-node-js me-3 fs-2 text-success"></i>
            <i className="fa-brands fa-js me-3 fs-2 text-warning"></i>
            <i className="fa-solid fa-database fs-2 text-primary"></i>
          </div>

        </div>

        {/* RIGHT */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">

          <div className="profile-wrapper">
            <img src={profile} alt="Shivam" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;