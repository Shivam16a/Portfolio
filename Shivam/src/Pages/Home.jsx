import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "./Hero";
import About from "./About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
    </>
  )
}

export default Home