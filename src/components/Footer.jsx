import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Logo / Name */}
                <h1 className="text-2xl font-bold tracking-tight text-crimson">
                    ANiK
                </h1>

                {/* Quick Links */}
                <ul className="flex flex-wrap gap-6 justify-center md:justify-start">
                    <li>
                        <a href="#home" className="hover:text-crimson transition-colors">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-crimson transition-colors">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-crimson transition-colors">Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-crimson transition-colors">Skills</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-crimson transition-colors">Contact</a>
                    </li>
                </ul>

                {/* Social Icons */}
                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-crimson transition-colors">
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-crimson transition-colors">
                        <i className="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-crimson transition-colors">
                        <i className="fab fa-twitter fa-lg"></i>
                    </a>
                </div>
            </div>

            {/* Copyright */}
            {/* <p className="text-center text-gray-500 text-sm mt-8">
                &copy; {new Date().getFullYear()} Anik. All rights reserved.
            </p> */}
        </footer>
    )
}

export default Footer