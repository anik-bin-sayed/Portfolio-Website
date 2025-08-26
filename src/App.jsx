import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/projects'
import Contract from './components/Contract'
import Skill from './components/Skill'
import Footer from './components/Footer'

const App = () => {
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
  )
}

export default App