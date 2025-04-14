import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="fixed top-0 right-0 w-full bg-white shadow-md">
                <nav className="container mx-auto px-6 py-4">
                    <ul className="flex justify-end items-center space-x-8">
                        <li>
                            <a href="index.html" className="text-gray-800 hover:text-blue-600 font-medium">
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href="formation.html" className="text-gray-800 hover:text-blue-600 font-medium">
                                Formations
                            </a>
                        </li>
                        <li>
                            <a href="experience.html" className="text-gray-800 hover:text-blue-600 font-medium">
                                Expériences
                            </a>
                        </li>
                        <li>
                            <a href="aboutme.html" className="text-gray-800 hover:text-blue-600 font-medium">
                                CV
                            </a>
                        </li>
                        <li>
                            <a href="contact.html" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;