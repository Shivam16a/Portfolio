import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skill";
import Project from "./Project";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
    </>
  )
}

export default Home