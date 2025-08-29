import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/HeroSection'
import About from './components/About'
import Projects from './components/projects'
import Contract from './components/Contract'
import Skill from './components/Skill'
import Footer from './components/Footer'
import ScrollProgressBar from './components/ScrollProgressBar'

const App = () => {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <HeroSection />
      <About />
      <Skill />
      <Projects />
      <Contract />
      <Footer />
    </>
  )
}

export default App