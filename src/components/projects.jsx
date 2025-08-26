import React from 'react'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A modern responsive portfolio built with React and Tailwind CSS.",
            image: "https://via.placeholder.com/400x250", // Replace with real image
            demo: "#",
            github: "#"
        },
        {
            id: 2,
            title: "E-commerce App",
            description: "Full-stack MERN e-commerce platform with secure payment gateway.",
            image: "https://via.placeholder.com/400x250",
            demo: "#",
            github: "#"
        },
        {
            id: 3,
            title: "Blog Platform",
            description: "A feature-rich blogging app built with Django and React.",
            image: "https://via.placeholder.com/400x250",
            demo: "#",
            github: "#"
        }
    ];
    return (
        <section id="projects" className="bg-gray-950 text-white py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    My Projects
                </h2>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex gap-4">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-crimson text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-all"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all"
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