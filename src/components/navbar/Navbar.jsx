import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("light");
    const menuRef = useRef(null); // menu + button এর wrapper ref

    // load theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.body.className = savedTheme;
    }, []);

    // apply theme
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    // window click listener (close only when clicked outside)
    useEffect(() => {
        const handleWindowClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener("click", handleWindowClick);
        return () => window.removeEventListener("click", handleWindowClick);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-20 shadow-lg navbar" ref={menuRef}>
            <div className="container mx-auto flex justify-between items-center w-[90%] md:w-[80%] py-4">
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-tight logo flex">
                    AN<p className="text-[crimson] font-bold px-2 text-3xl">i</p>K
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-6 font-medium">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About Me</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#contact" className="nav-link">Contact</a>

                    {/* 🔘 Dark/Light Mode Toggle */}
                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="ml-4 px-3 py-1 rounded-md theme-toggle"
                    >
                        {theme === "light" ? "☀️" : "🌙"}
                    </button>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden menu-btn"
                    onClick={(e) => {
                        e.stopPropagation(); // prevent immediate close
                        setIsOpen(!isOpen);
                    }}
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
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col items-center py-4 space-y-4 mobile-menu">
                    <li><a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About Me</a></li>
                    <li><a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>

                    {/* Mobile Theme Toggle */}
                    <li>
                        <button
                            onClick={() => {
                                setTheme(theme === "light" ? "dark" : "light");
                                setIsOpen(false);
                            }}
                            className="px-3 py-1 rounded-md theme-toggle"
                        >
                            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
