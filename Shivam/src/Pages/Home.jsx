import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skill";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
    </>
  )
}

export default Home