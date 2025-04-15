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
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;