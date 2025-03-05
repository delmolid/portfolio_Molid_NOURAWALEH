import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
          <nav className="text-right">
            <ul className="flex space-x-5 text-right">
              <li><a href="index.html">Accueil</a></li>
              <li><a href="aboutme.html">CV</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
            </div>
        );
    }
}
export default Header;