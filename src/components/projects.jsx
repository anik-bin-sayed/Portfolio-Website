import React from 'react'

import blogTitleImage from "../assets/blog.png"
import e_commerceTitleImage from "../assets/ecommerce.png"
import portfolioTitleImage from "../assets/portfolio.png"

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A modern responsive portfolio built with React and Tailwind CSS.",
            image: portfolioTitleImage,
            demo: "#",
            github: "#"
        },
        {
            id: 2,
            title: "E-commerce App",
            description: "Full-stack MERN e-commerce platform with secure payment gateway.",
            image: e_commerceTitleImage,
            demo: "#",
            github: "#"
        },
        {
            id: 3,
            title: "Blog Platform",
            description: "A feature-rich blogging app built with Django and React.",
            image: blogTitleImage,
            demo: "#",
            github: "#"
        }
    ];
    return (
        <section id="projects" className="projects-section py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center projects-title">
                    My Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 project-title">{project.title}</h3>
                                <p className="project-desc mb-4">{project.description}</p>
                                <div className="flex gap-4">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-btn-demo px-4 py-2 rounded-lg font-medium"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-btn-github px-4 py-2 rounded-lg font-medium"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
