import React, { useState, useRef, useEffect, useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import "./Style.css";
import { ThemeContext } from "../Theme/ThemeContext";
import { menuItems } from "./navUtils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const particlesRef = useRef(null);

  useEffect(() => {
    const navbar = menuRef.current;
    if (!navbar) return;

    const particlesContainer = particlesRef.current;
    const particleCount = 30; // navbar area particles

    // create initial particles
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    function createParticle() {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      resetParticle(particle);
      particlesContainer.appendChild(particle);
      animateParticle(particle);
    }

    function resetParticle(particle) {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = "0";

      return { x: posX, y: posY };
    }

    function animateParticle(particle) {
      const pos = resetParticle(particle);
      const duration = Math.random() * 5 + 5;
      const delay = Math.random() * 3;

      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;

        const moveX = pos.x + (Math.random() * 10 - 5);
        const moveY = pos.y + (Math.random() * 10 - 5);

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        setTimeout(() => animateParticle(particle), duration * 1000);
      }, delay * 1000);
    }

    // Mouse move inside navbar only
    const handleMouseMove = (e) => {
      const rect = navbar.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
      const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

      // particle effect
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = "0.1";

      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.style.transition = "all 2s ease-out";
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = "0";

        setTimeout(() => particle.remove(), 2000);
      }, 10);
    };

    navbar.addEventListener("mousemove", handleMouseMove);

    return () => {
      navbar.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // end hover effect

  return (
    <header className="navbar top-0  w-full z-[9999] shadow-lg " ref={menuRef}>
      <div className="particles-container" ref={particlesRef}></div>

      <div className="container mx-auto flex justify-between items-center w-[90%] md:w-[80%] py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight logo flex">
          AN<p className="text-[crimson] font-bold px-2 text-3xl">i</p>K
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          {menuItems.map((item) => (
            <a key={item.name} href={item.link} className="nav-link">
              {item.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded-md theme-toggle"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden menu-btn"
          aria-label="Toggle Menu"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 mobile-menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-md theme-toggle"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
            </button>
          </li>
        </ul>
      </div>
      <span className="navbar-bg-animation"></span>
    </header>
  );
};

export default Navbar;
