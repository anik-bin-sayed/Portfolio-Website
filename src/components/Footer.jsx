import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-section py-10 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Logo / Name */}
                <h1 className="text-2xl font-bold tracking-tight logo flex">
                    AN<p className="text-[crimson] font-bold px-2 text-3xl">i</p>K
                </h1>

                {/* Quick Links */}
                <ul className="flex flex-wrap gap-6 justify-center md:justify-start footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Social Icons */}
                <div className="flex gap-6 footer-socials">
                    <a href="https://github.com/anik-bin-sayed?tab=repositories" target='_blank'>
                        <FaGithub className="text-lg social-icon" />
                    </a>

                    <a href="https://www.linkedin.com/in/anik-ibne-sayed-b61498365/" target='_blank'>
                        <FaLinkedin className="text-lg social-icon" />
                    </a>
                    <a href="#" target='_blank'>
                        <FaTwitter className="text-lg social-icon" />
                    </a>
                    <a href="#" target='_blank'>
                        <FaInstagram className="text-lg social-icon" />
                    </a>
                    <a href="https://www.facebook.com/anikbinsayed206" target='_blank'>
                        <FaFacebook className="text-lg social-icon" />
                    </a>
                </div>
            </div>

        </footer>
    )
}

export default Footer
