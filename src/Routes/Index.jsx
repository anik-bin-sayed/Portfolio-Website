import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";

const Resume = lazy(() => import("../Pages/Resume"));
const CurriculumVitae = lazy(() => import("../Pages/Curriculum-vitae"));

const Index = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/cv" element={<CurriculumVitae />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
