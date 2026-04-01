import React from "react";
import aboutPhoto from "../../assets/about_anik.jpg";

const ABOUT_TEXT = {
  title: "About Me",
  desc: "I am a passionate Full Stack Developer focused on building modern, high-performance and scalable web applications. I love solving complex problems and creating smooth user experiences using React, Next.js, and backend technologies.",
};
const skills = [
  "Frontend",
  "Backend",
  "Database",
  "DSA",
  "REST API",
  "Authentication",
];
const About = () => {
  return (
    <section
      id="about"
      className="relative w-full  py-24 px-6 md:px-20 bg-[#050505] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 blur-xl rounded-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <img
              src={aboutPhoto}
              alt="About Anik"
              className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl border border-white/10 shadow-2xl transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute -bottom-4 -right-4 bg-red-600 px-3 py-1 text-xs rounded-full shadow-lg">
              Full Stack Dev
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              {ABOUT_TEXT.title}
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            {ABOUT_TEXT.desc}
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full hover:border-red-500 hover:bg-red-500/10 transition duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="pt-4">
            <a
              href="/cv.pdf"
              target="_blank"
              className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition font-semibold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
