import React, { useEffect, useRef } from "react";
import profileImage from "../../assets/anik.jpg";
import "./hero.css";
import LinkTag from "../utils/Link/LinkTag";

const HeroSection = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return; // Ref not mounted yet

    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    function createParticle() {
      const particle = document.createElement("div");
      particle.className = "particle";

      // Random size
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Initial position
      const pos = resetParticle(particle);

      particlesContainer.appendChild(particle);
      animateParticle(particle, pos);
    }

    function resetParticle(particle) {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = "0";

      return { x: posX, y: posY };
    }

    function animateParticle(particle, pos) {
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;

        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        setTimeout(() => {
          const newPos = resetParticle(particle);
          animateParticle(particle, newPos);
        }, duration * 300);
      }, delay * 300);
    }
  }, []);
  return (
    <section
      id="home"
      className="hero-section flex flex-col md:flex-row items-center justify-evenly min-h-screen px-6 md:px-20 py-20 md:pt-32 md:pb-20 overflow-hidden"
    >
      <div className="particles-container" ref={particlesRef}></div>
      {/* Left Content */}
      <div className="text-center md:text-left max-w-lg flex flex-col justify-center h-full z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight hero-title">
          Hi, I'm <span className="text-[crimson]">Anik</span>
        </h1>
        <p className="text-lg md:text-xl mt-4 hero-desc">
          I build exceptional and accessible digital experiences for the web.
          Focused on creating elegant solutions to complex problems.
        </p>
        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <LinkTag url="https://github.com/anik-bin-sayed?tab=repositories">
            Github
          </LinkTag>

          <a
            href="#contact"
            className="btn2 relative flex items-center justify-center rounded-lg cursor-pointer overflow-hidden px-6 py-2 font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-image-liquid mt-10 md:mt-0 flex justify-center z-10">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-64 h-64 object-cover border-4 border-crimson shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
