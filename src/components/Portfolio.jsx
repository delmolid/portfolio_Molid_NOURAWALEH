import React from 'react';

class Portfolio extends React.Component {
    render() {
        const projects = [
            {
                title : "Développement d'une application fullstack avec Angular et JAVA (SpringBoot) : Bon_Appétit.fr",
                description: "Une application web moderne pour la gestion de menus de restaurant, construite avec Angular et Spring Boot.",
                image: "https://raw.githubusercontent.com/delmolid/bon_appetit.fr/refs/heads/main/Image%2001-04-2025%20à%2017.49.jpg",
                link: "https://github.com/delmolid/bon_appetit.fr.git",
                technologies: ["Angular", "JAVA", "SpringBoot", "TypeScript", "CSS3", "HTML5"]
            },
            {
                title : "Développement d'une application fullstack avec React et JAVA (SpringBoot) : Hello_Ada",
                description: "Développement d'une application de microblogging destinée aux apprenant·es d’Ada Tech School",
                image: "https://github.com/adatechschool/Hello_Ada_Front.git",
                link: "https://github.com/adatechschool/Hello_Ada_Front.git",
                technologies: ["React", "JAVA", "SpringBoot", "JavaScript", "CSS3", "HTML5"]
            },
            {
                title : "Application fullstack : LUXURY CAMPS",
                description: "Développement d'une application fullstack avec React et JAVA (SpringBoot)",   
                image: "https://github.com/delmolid/luxury_camps.git",
                link: "https://github.com/delmolid/luxury_camps.git",
                technologies: ["Angular", "JAVA", "SpringBoot", "TypeScript", "CSS3", "HTML5"]
            },
            {
                title : "Développement d'une application Back-office avec PHP",
                description: "Ce back-office a été développé pour répondre à 4 besoins principaux :- 👥 **Gestion des bénévoles** : Suivi des participants et de leurs rôle- 📝 **Enregistrement des collectes** : Documentation des actions de nettoyage- 🗑️ **Suivi des déchets** : Classification et quantification des déchets collectés",
                image: "https://github.com/adatechschool/Littoral_Propre_Back.git",
                link: "https://github.com/delmolid/Back_Office_Littoral_Propre.git",
                technologies: ["PHP", "CSS3", "HTML5"]
            }, 
            {
                title : "Développement d'une calculatrice avec HTML, Bootstrap et JavaScript",
                description: "Une application de calculatrice simple avec HTML, Bootstrap et JavaScript",
                image: "https://github.com/delmolid/Calculatrice/blob/refs/heads/main/assets/image_calculatrice.png?raw=true",
                link: "https://github.com/delmolid/calculatrice_graphiqueJS.git",
                technologies: ["HTML", "Bootstrap", "JavaScript"]
            },
            {    
                title: "Portfolio",
                description: "Mon portfolio personnel créé avec React et Tailwind CSS",
                image: "https://github.com/delmolid/portfolio_Molid_NOURAWALEH/blob/main/assets/image_portfolio.png?raw=true",
                link: "https://portfolio-molid-nourawaleh.vercel.app",
                technologies: ["React", "Tailwind CSS", "JavaScript"]
            },
            {
                title: "Coffee Menu",
                description: "Une application interactive de menu pour café",
                image: "https://raw.githubusercontent.com/delmolid/Coffee-Menu/refs/heads/main/output.webp",
                link: "https://github.com/delmolid/Coffee-Menu.git",
                technologies: ["HTML", "CSS", "JavaScript"]
            },
            {
                title: "Quiz Histoire/Géographique",
                description: "Un quiz interactif sur l'histoire et la géographie en France",
                image: "https://raw.githubusercontent.com/delmolid/portfolio_Molid_NOURAWALEH/refs/heads/main/output.webp",
                link: "https://delmolid.github.io/projet-collectif-nantes-quizz-geo-quizzzz/accueil.html",
                technologies: ["HTML5", "CSS3", "JavaScript"]
            }
        ];

        const skills = {
            frontend: [
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-wordmark.svg" }
            ],
            backend: [
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
                { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" }
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