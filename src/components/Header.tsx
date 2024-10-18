import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo">LOGO</Link>
          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul>
              <li><Link to="/">MKIFK</Link></li>
              <li><Link to="/">Rólunk</Link></li>
              <li><Link to="/">Szolgáltatásaink</Link></li>
              <li><Link to="/">Híreink</Link></li>
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