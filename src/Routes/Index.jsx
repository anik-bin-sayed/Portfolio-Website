import React, { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import Loader from "../components/Loader";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Nabvar";
import HeroSection from "../Pages/hero/HeroSection";
import ScrollToTop from "../components/ScrollToTop";

const About = lazy(() => import("../Pages/About"));
const Skill = lazy(() => import("../Pages/Skill"));
const Contract = lazy(() => import("../Pages/Contract"));
const Projects = lazy(() => import("../Pages/Projects"));
const Certificates = lazy(() => import("../Pages/Certificate"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));

const Index = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contract />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default Index;
