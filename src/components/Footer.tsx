import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../../assets/images/MKIFK-logo-white.svg';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <Link to="/" className="footer__logo">
            <img src={logoSvg} alt="MKIFK Logo" className="header__logo-image" />
          </Link>
          <nav className="footer__nav">
            <ul>
              <li><Link to="/kotelezo-adatszolgaltatas">Kötelező adatszolgáltatás</Link></li>
              <li><Link to="/Kozadat">Közadat</Link></li>
              <li><Link to="/kapcsolat">Kapcsolat</Link></li>
            </ul>
          </nav>
    
        </div>
      </div>
    </footer>
  );
};

export default Footer;