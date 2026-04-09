import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";

const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));
const Certificates = lazy(() => import("../Pages/Certificates"));
const HeroSection = lazy(() => import("../Pages/hero/HeroSection"));
const About = lazy(() => import("../Pages/About"));
const Skill = lazy(() => import("../Pages/Skill"));
const Projects = lazy(() => import("../Pages/Projects"));
const Contract = lazy(() => import("../Pages/Contract"));

const Index = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contract />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default Index;
