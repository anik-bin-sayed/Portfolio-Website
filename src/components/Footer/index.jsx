import React, { useEffect, useState } from "react";
import SocialIcons from "../utils/SocialIcons/SocialIcons";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#0A0A0A] text-white overflow-hidden">
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* LEFT */}
          <div className="md:col-span-4 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center group cursor-default">
              AN
              <span className="text-red-500 text-4xl md:text-5xl px-1 transition-transform duration-300 group-hover:scale-110 inline-block">
                i
              </span>
              K
            </h1>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting modern digital experiences with precision and creativity.
              Let's build something extraordinary together.
            </p>

            <div className="flex items-center gap-3 text-gray-500 text-xs">
              <span className="inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Available for work
              </span>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>

            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {[
                { name: "Home", link: "#home" },
                { name: "About", link: "#about" },
                { name: "Skills", link: "#skills" },
                { name: "Projects", link: "#projects" },
                { name: "Contact", link: "#contact" },
                { name: "Resume", link: "#resume" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-red-500 transition-all duration-300 relative group inline-block text-sm"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h3>

            <div className="flex items-center gap-4 hover:scale-105 transition-transform origin-left">
              <SocialIcons />
            </div>

            <div className="pt-2">
              <a className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors text-sm group">
                <span className="w-8 h-px bg-gray-600 group-hover:bg-red-500 transition-colors"></span>
                anikhossen3422@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 text-gray-400 hover:text-red-500 transition-all text-sm bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-red-500/10 shadow-lg animate-fadeIn"
          >
            <span>Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 group-hover:-translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
