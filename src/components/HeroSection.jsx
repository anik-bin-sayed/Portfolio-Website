import React from 'react'
import profileImage from '../assets/anik.jpg';

const HeroSection = () => {
    return (
        <section
            id="home"
            className=" bg-gray-950 text-white flex flex-col md:flex-row items-center justify-evenly min-h-screen px-6 md:px-20 pt-20 md:pt-32"
        >
            {/* Left Content */}
            <div className="text-center md:text-left max-w-lg flex flex-col justify-center h-full">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Hi, I'm <span className="text-[crimson]">Anik</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mt-4">
                    I build exceptional and accessible digital experiences for the web. Focused on creating elegant solutions to complex problems.
                </p>
                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                        href="https://github.com/anik-bin-sayed?tab=repositories"
                        target='_blank'
                        className="bg-crimson text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
                    >
                        Github
                    </a>
                    <a
                        href="#contact"
                        className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Right Image */}
            <div className="mt-10 md:mt-0 flex justify-center">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="rounded-full w-64 h-64 object-cover border-4 border-crimson shadow-lg"
                />
            </div>
        </section>

    )
}

export default HeroSection