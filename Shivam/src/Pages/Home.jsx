import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  )
}

export default Home