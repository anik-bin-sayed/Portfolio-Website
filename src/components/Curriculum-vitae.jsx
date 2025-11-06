import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const projects = [
    {
        title: "Portfolio Website",
        tech: "HTML, Tailwind CSS, JS",
        points: [
            "Developed a modern, responsive portfolio with animations.",
            "Optimized for mobile & desktop using Tailwind CSS.",
        ],
    },
    {
        title: "E-Commerce App",
        tech: "React, Node.js, MongoDB (MERN)",
        points: [
            "Built full-stack e-commerce platform with login & cart system.",
            "Integrated JWT authentication & REST APIs.",
        ],
    },
    {
        title: "Student Management System",
        tech: "Django, MySQL, HTML, Tailwind",
        points: [
            "Created CRUD-based system for managing student data.",
            "Used Django templates, model forms & MySQL database.",
        ],
    },
    {
        title: "Blog App",
        tech: "React, Django REST API",
        points: [
            "Built blogging platform with React frontend & Django REST backend.",
            "Implemented CRUD posts, auth, and image uploads.",
        ],
    },
]
const CurriculumVitae = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
            <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-10 md:p-14">
                {/* Header */}
                <header className="text-center md:text-left border-b pb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-cyan-700">
                        Anik Bin Sayed
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Full Stack Web Developer | React | Django | MERN Stack
                    </p>
                    <div className="text-sm text-gray-500 mt-3 space-y-1">
                        <p>
                            <FaPhoneAlt className="inline-block mr-1" />
                            +8801616176409 <br /> <MdEmail className="inline-block mr-1" /> anikhossen3422@gmail.com
                        </p>

                        <div className="flex gap-4 justify-center md:justify-start mt-2">
                            <div className="flex items-center justify-center">
                                <TbWorld className="inline-block mr-1" />
                                <a href="https://anik-bin-sayed.netlify.app/" className="text-cyan-600 hover:underline">
                                    Portfolio
                                </a>

                            </div>
                            <div className="flex items-center justify-center">
                                <FaGithub className="inline-block mr-1" />
                                <a href="https://github.com/anik-bin-sayed" className="text-cyan-600 hover:underline">
                                    Github
                                </a>
                            </div>
                            <div className="flex items-center justify-center">
                                <FaLinkedinIn className="inline-block mr-1" />
                                <a href="https://www.linkedin.com/in/anik-ibne-sayed-b61498365/" className="text-cyan-600 hover:underline">
                                    LinkedIn
                                </a>
                            </div>

                        </div>
                    </div>
                </header>

                {/* Career Objective */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-cyan-700 border-b-2 border-cyan-700 inline-block mb-3">
                        Career Objective
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        I am a passionate and self-taught programmer from a non-CS background, looking to work in a challenging software development role where I can apply my knowledge of programming, problem-solving, and real-world project development.
                    </p>
                </section>

                {/* Skills */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-cyan-700 border-b-2 border-cyan-700 inline-block mb-3">
                        Technical Skills
                    </h2>
                    <ul className="space-y-2 text-gray-700">
                        <li>
                            <b>Frontend:</b> HTML5, CSS3, Tailwind CSS, JavaScript (ES6+),
                            React.js, Bootstrap
                        </li>
                        <li>
                            <b>Backend:</b> Python, Django, Node.js, Express.js
                        </li>
                        <li>
                            <b>Database:</b> MySQL, MongoDB
                        </li>
                        <li>
                            <b>Tools:</b> Git, GitHub, VS Code, Postman, Vite
                        </li>
                        <li>
                            <b>Concepts:</b> REST APIs, CRUD, Authentication, MVC Pattern, MVT Pattern, Responsive Design
                        </li>
                    </ul>
                </section>

                {/* Projects */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-cyan-700 border-b-2 border-cyan-700 inline-block mb-3">
                        Projects
                    </h2>

                    <div className="space-y-5 text-gray-700">
                        {projects.map((proj, i) => (
                            <div key={i}>
                                <p className="font-semibold text-gray-800">
                                    {i + 1}. {proj.title} —{" "}
                                    <i className="text-gray-600">{proj.tech}</i>
                                </p>
                                <ul className="list-disc ml-6 mt-1">
                                    {proj.points.map((pt, j) => (
                                        <li key={j}>{pt}</li>
                                    ))}
                                </ul>
                                <p className="mt-1">
                                    🔗{" "}
                                    <a href="#" className="text-cyan-600 hover:underline">
                                        Live Demo
                                    </a>{" "}
                                    |{" "}
                                    <a href="#" className="text-cyan-600 hover:underline">
                                        GitHub Repo
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-cyan-700 border-b-2 border-cyan-700 inline-block mb-3">
                        Education
                    </h2>
                    <ul className="text-gray-700 space-y-1">
                        <li>
                            <b>BBA Honours Department of Bangla</b> <br /> Government Titumir College, Dhaka, Bangladesh (2023 – Present)
                        </li>
                        <span className="italic text-sm">Additional Training: Completed Full Stack Web Development Bootcamp from Ostad (Online platform), March–June 2025</span>
                        <li className="flex items-center gap-2">CGPA : <p className="text-red-900"> Not completed yet</p></li>
                    </ul>
                </section>

                {/* Additional Info */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-cyan-700 border-b-2 border-cyan-700 inline-block mb-3">
                        Additional Info
                    </h2>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                        <li>Strong understanding of frontend & backend workflows</li>
                        <li>Teamwork, debugging & problem-solving skills</li>
                        <li>Experience with API integration & database optimization</li>
                    </ul>
                </section>

                {/* Soft Skills */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-cyan-700 border-b-2 border-cyan-700 inline-block mb-3">
                        Soft Skills
                    </h2>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                        <li>Leadership & Communication</li>
                        <li>Critical Thinking</li>
                        <li>Adaptability</li>
                        <li>Time Management</li>
                    </ul>
                </section>

                {/* Certifications */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-cyan-700 border-b-2 border-cyan-700 inline-block mb-3">
                        Certifications
                    </h2>
                    <div className="text-gray-700 space-y-1">
                        <p>
                            <b>Full Stack Web Development Training </b> <br />  Ostad | Duration: March 2025 – January 2026
                            <ul className="list-disc ml-6 mt-1">
                                <li>Completed hands-on training on Python, Django, React</li>
                                <li>Built several real-world projects, including responsive websites and RESTful APIs</li>
                                <li>Learned Git & GitHub, deployment, debugging, and version control best practices</li>
                                <li>Followed industry-standard coding practices and collaborated in group projects</li>

                            </ul>
                        </p>

                    </div>
                </section>

                {/* Languages */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold text-cyan-700 border-b-2 border-cyan-700 inline-block mb-3">
                        Languages
                    </h2>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                        <li>English (Fluent)</li>
                        <li>Bangla (Native)</li>
                    </ul>
                </section>

                <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500">
                    © 2025 Anik Bin Sayed
                </div>
            </div>
        </div >
    );
};

export default CurriculumVitae;
