import React from 'react'
import aboutPhoto from "../assets/about_anik.jpg"

const About = () => {
    return (
        <section
            id="about"
            className="bg-gray-900 text-white py-20 px-6 md:px-20"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
                {/* Left Image / Illustration */}
                <div className="flex justify-center md:justify-start w-full md:w-1/3">
                    <img
                        src={aboutPhoto}
                        alt="About Me"
                        className="rounded-xl w-64 h-64 object-cover border-4 border-crimson shadow-lg"
                    />
                </div>

                {/* Right Text */}
                <div className="w-full md:w-2/3 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
                        I am a passionate Full Stack Developer with expertise in building modern, responsive, and accessible web applications. I enjoy turning complex problems into elegant solutions, writing clean code, and continuously learning new technologies.
                    </p>

                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">Frontend</span>
                        <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-medium">Backend</span>
                        <span className="bg-yellow-600 px-3 py-1 rounded-full text-sm font-medium">Database</span>
                        <span className="bg-purple-600 px-3 py-1 rounded-full text-sm font-medium">Data Structure and Algorithms</span>
                    </div>

                    {/* Call-to-Action Button */}
                    <a
                        href="#projects"
                        className="self-start bg-crimson text-white px-6 py-3 rounded-lg font-semibold bg-red-700 hover:bg-red-50 hover:text-blue-950 transition-all duration-300"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About