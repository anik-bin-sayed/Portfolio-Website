import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Resume from './Resume'
import CurriculumVitae from './components/Curriculum-vitae';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="/cv" element={<CurriculumVitae />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>

  )
}

export default App