import React from 'react';

class Portfolio extends React.Component {
    render() {
        const projects = [
            {
                title: "Portfolio",
                description: "Mon portfolio personnel créé avec React et Tailwind CSS",
                image: "https://raw.githubusercontent.com/delmolid/portfolio_Molid_NOURAWALEH/main/output.webp",
                link: "https://delmolid.github.io",
                technologies: ["React", "Tailwind CSS", "JavaScript"]
            },
            {
                title: "Coffee Menu",
                description: "Une application de menu de café interactive",
                image: "https://raw.githubusercontent.com/delmolid/Coffee-Menu/refs/heads/main/output.webp",
                link: "https://github.com/delmolid/Coffee-Menu.git",
                technologies: ["HTML", "CSS", "JavaScript"]
            },
            {
                title: "Quiz Géographique",
                description: "Un quiz interactif sur la géographie",
                image: "https://raw.githubusercontent.com/delmolid/portfolio_Molid_NOURAWALEH/refs/heads/main/output.webp",
                link: "https://delmolid.github.io/projet-collectif-nantes-quizz-geo-quizzzz/accueil.html",
                technologies: ["HTML", "CSS", "JavaScript"]
            }
        ];

        const skills = {
            frontend: [
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
            ],
            backend: [
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
            ],
            database: [
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
            ],
            tools: [
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
            ]
        };

        return (
            <div>
                <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold mb-16 text-center">
                            Langages & Technologies
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-2">Frontend</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {skills.frontend.map((skill, index) => (
                                        <div key={index} className="flex flex-col items-center group">
                                            <img 
                                                src={skill.icon} 
                                                alt={skill.name}
                                                className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <span className="text-sm text-gray-600 group-hover:text-blue-600">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-6 text-green-600 border-b pb-2">Backend</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {skills.backend.map((skill, index) => (
                                        <div key={index} className="flex flex-col items-center group">
                                            <img 
                                                src={skill.icon} 
                                                alt={skill.name}
                                                className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <span className="text-sm text-gray-600 group-hover:text-green-600">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-6 text-purple-600 border-b pb-2">Base de données</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {skills.database.map((skill, index) => (
                                        <div key={index} className="flex flex-col items-center group">
                                            <img 
                                                src={skill.icon} 
                                                alt={skill.name}
                                                className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <span className="text-sm text-gray-600 group-hover:text-purple-600">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-6 text-orange-600 border-b pb-2">Outils</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {skills.tools.map((skill, index) => (
                                        <div key={index} className="flex flex-col items-center group">
                                            <img 
                                                src={skill.icon} 
                                                alt={skill.name}
                                                className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <span className="text-sm text-gray-600 group-hover:text-orange-600">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold mb-12 text-center">Mes Projets</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-600 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <a 
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                        >
                                            Voir le projet
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio; 