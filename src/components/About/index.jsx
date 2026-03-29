import React from "react";
import aboutPhoto from "../../assets/about_anik.jpg";

import "./style.css";

const ABOUT_TEXT = {
  title: "About Me",
  desc: "I am a passionate Full Stack Developer with expertise in building modern, responsive, and accessible web applications...",
};

const About = () => {
  return (
    <section
      id="about"
      className="about-section w-full min-h-[60vh] flex items-center py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Image */}
        <div className="flex justify-center md:justify-start w-full md:w-1/3">
          <img
            src={aboutPhoto}
            alt="About Me"
            className="rounded-xl w-64 h-64 object-cover border-4 border-crimson shadow-lg"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 about-title">
            {ABOUT_TEXT.title}
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed about-desc">
            {ABOUT_TEXT.desc}
          </p>

          {/* Skills Badges */}
          <div className="flex flex-wrap gap-3 mb-6 about-badges">
            <span className="skill-badge badge-frontend px-3 rounded-lg">
              Frontend
            </span>
            <span className="skill-badge badge-backend px-3 rounded-lg">
              Backend
            </span>
            <span className="skill-badge badge-db px-3 rounded-lg">
              Database
            </span>
            <span className="skill-badge badge-dsa px-3 rounded-lg">
              Data Structure and Algorithms
            </span>
          </div>

          <a
            href="/cv"
            target="_blank"
            className="self-start px-6 py-3 rounded-lg font-semibold about-btn"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
