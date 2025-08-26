import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-gray-950 fixed top-0 left-0 w-full z-20 shadow-lg">
            <div className="container mx-auto flex justify-between items-center w-[90%] md:w-[80%] py-4">
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-tight text-white">
                    AN<span className="text-[crimson]">i</span>K
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 text-white font-medium">
                    <a href="#home" className="hover:text-blue-400 transition-colors duration-200">
                        Home
                    </a>
                    <a href="#about" className="hover:text-blue-400 transition-colors duration-200">
                        About Me
                    </a>
                    <a href="#skills" className="hover:text-blue-400 transition-colors duration-200">
                        Skills
                    </a>
                    <a href="#projects" className="hover:text-blue-400 transition-colors duration-200">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-blue-400 transition-colors duration-200">
                        Contact
                    </a>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                                isOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16m-7 6h7"
                            }
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (Animated) */}
            <div
                className={`md:hidden bg-gray-900 text-white overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col items-center py-4 space-y-4">
                    <li>
                        <a
                            href="#home"
                            className="hover:text-blue-400 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-blue-400 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-blue-400 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-blue-400 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar