import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <Link to="/" className="footer__logo">LOGO</Link>
          <nav className="footer__nav">
            <ul>
              <li><Link to="/">MKIFK</Link></li>
              <li><Link to="/kotelezo-adatszolgaltatas">Kötelező adatszolgáltatás</Link></li>
              <li><Link to="/elerhetoseg-kapcsolat">Elérhetőség / Kapcsolat</Link></li>
            </ul>
          </nav>
          <div className="footer__social">
            <a href="#" className="footer__social-icon">F</a>
            <a href="#" className="footer__social-icon">F</a>
            <a href="#" className="footer__social-icon">F</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;