import React, { useEffect, useState } from "react";
import profileImage from "../../assets/anik.jpg";

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });

    // Track mouse
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Smooth trailing cursor
    useEffect(() => {
        let animationFrame;
        const follow = () => {
            setTrailingPosition((prev) => ({
                x: prev.x + (mousePosition.x - prev.x) * 0.1,
                y: prev.y + (mousePosition.y - prev.y) * 0.1,
            }));
            animationFrame = requestAnimationFrame(follow);
        };

        follow();
        return () => cancelAnimationFrame(animationFrame);
    }, [mousePosition]);

    return (
        <section
            id="home"
            className="relative flex flex-col md:flex-row items-center justify-evenly min-h-screen px-6 md:px-20 pt-20 md:pt-32 overflow-hidden hero-section"
        >
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
                    <a
                        href="https://github.com/anik-bin-sayed?tab=repositories"
                        target="_blank"
                        className="px-6 py-3 rounded-lg font-semibold hero-btn-primary"
                    >
                        Github
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-lg font-semibold hero-btn-secondary"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Right Image */}
            <div className="mt-10 md:mt-0 flex justify-center z-10">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="rounded-full w-64 h-64 object-cover border-4 border-crimson shadow-lg"
                />
            </div>

            {/* 🔹 Custom Cursor (small dot) */}
            <div
                className="fixed top-0 left-0 w-3 h-3 bg-crimson rounded-full pointer-events-none z-50"
                style={{
                    transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px)`,
                }}
            ></div>

            {/* 🔹 Trailing Cursor (big glow) */}
            <div
                className="fixed top-0 left-0 w-12 h-12 rounded-full bg-crimson/30 blur-2xl pointer-events-none z-40"
                style={{
                    transform: `translate(${trailingPosition.x - 24}px, ${trailingPosition.y - 24}px)`,
                }}
            ></div>
        </section>
    );
};

export default HeroSection;
