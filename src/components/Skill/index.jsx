import React, { useEffect, useRef, useState } from "react";

import "./style.css";
import { skills } from "./skillData";

const Skill = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="skill-section min-h-[80vh] flex items-center py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center skill-title">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2 skill-name">
                {skill.name}
              </h3>
              <div className="w-full skill-bar-bg rounded-full h-3 bg-gray-200">
                <div
                  className={`${skill.color} h-3 rounded-full skill-bar-fill transition-all duration-1000 ease-out`}
                  style={{
                    width: inView ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
              <span className="mt-1 skill-level text-sm">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
