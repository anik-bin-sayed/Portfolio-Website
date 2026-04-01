import React from "react";

import Navbar from "../components/Nabvar";
import HeroSection from "../components/hero/HeroSection";
import About from "../components/About";
import Contract from "../components/Contract";
import Skill from "../components/Skill";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const Resume = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skill />
      <Projects />
      <Contract />
      <Footer />
    </>
  );
};

export default Resume;
