import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../../assets/images/justicia-white.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <img src={logoSvg} alt="MKIFK Logo" className="header__logo-image" />
          </Link>
          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul>
              <li>
                <a href="/kapcsolat">Kapcsolat</a>
              </li>
            </ul>
          </nav>
          <button className="header__menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;