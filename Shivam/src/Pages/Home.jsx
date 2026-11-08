import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

const Home = ({ data }) => {
  return (
    <>
      <Navbar />
      <Hero data={data} />
      <About data={data} />
      <Skills data={data} />
      <Project data={data} />
      <Contact data={data} />
    </>
  );
};

export default Home;