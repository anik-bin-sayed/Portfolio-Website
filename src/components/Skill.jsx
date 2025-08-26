import React from 'react'

const Skill = () => {
    const skills = [
        { name: "HTML", level: 90, color: "bg-red-500" },
        { name: "CSS / Tailwind", level: 85, color: "bg-blue-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-400" },
        { name: "React", level: 85, color: "bg-cyan-400" },
        { name: "Node.js / Express", level: 75, color: "bg-green-500" },
        { name: "MongoDB / MySQL", level: 70, color: "bg-lime-500" },
        { name: "Python / Django", level: 80, color: "bg-indigo-500" },
        { name: "Data Structures / Algorithms", level: 90, color: "bg-purple-500" },
    ];
    return (
        <section id="skills" className="bg-gray-950 text-white py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    My Skills
                </h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                            <div className="w-full bg-gray-800 rounded-full h-3">
                                <div
                                    className={`${skill.color} h-3 rounded-full transition-all duration-1000`}
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <span className="mt-1 text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skill