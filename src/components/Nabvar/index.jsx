import React, { useState, useRef, useEffect } from "react";

import "./Style.css";

import { menuItems } from "./navUtils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navbar = menuRef.current;
    const particlesContainer = particlesRef.current;
    if (!navbar || !particlesContainer) return;

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) createParticle();

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
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.opacity = "0";

      return { x, y };
    }

    function animateParticle(particle) {
      const pos = resetParticle(particle);

      const duration = Math.random() * 5 + 5;

      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;

        particle.style.left = `${pos.x + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${pos.y + (Math.random() * 10 - 5)}%`;

        setTimeout(() => animateParticle(particle), duration * 1000);
      }, Math.random() * 2000);
    }

    const handleMouseMove = (e) => {
      const rect = navbar.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      const particle = document.createElement("div");
      particle.className = "particle";

      particle.style.width = "4px";
      particle.style.height = "4px";
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.opacity = "0.2";

      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.style.transition = "all 1.5s ease-out";
        particle.style.opacity = "0";
        particle.style.transform = "scale(0.5)";
        particle.style.left = `${x + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${y + (Math.random() * 10 - 5)}%`;

        setTimeout(() => particle.remove(), 1500);
      }, 50);
    };

    navbar.addEventListener("mousemove", handleMouseMove);

    return () => {
      navbar.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-black/60 shadow-xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="particles-container" ref={particlesRef}></div>

      <div className="max-w-7xl mx-auto flex justify-between items-center w-[90%]">
        <h1 className="text-2xl font-bold text-white tracking-tight flex items-center">
          <span>AN</span>
          <span className="text-red-500 text-3xl px-1">i</span>
          <span>K</span>
        </h1>

        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="relative text-gray-300 hover:text-white transition duration-300 group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/80 backdrop-blur-lg`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white text-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
