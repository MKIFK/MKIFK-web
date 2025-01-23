import React from 'react';
import Button from '../components/Button';

const MandatoryReporting: React.FC = () => {
  return (
    <div className="sub-pages">
      <div className="container">
        <h1>Kötelező adatszolgáltatás</h1>
        <div className="mandatory-reporting__content">
          <p>A 2024-re vonatkozó közérdekű adatok az alábbi linkeken érhetőek el:</p>
          <ul>
            <li><a href="https://mhk.hu/">Magyar Közlöny / Közadat</a></li>
            <li><a href="https://www.offi.hu/cegunkrol/kozerdeku-adatok">OFFI / Közadat</a></li>
            <li><a href="https://mkifk.hu/assets/MKIFK_SZMSZ.pdf" target="_blank">MKIFK SZMSZ</a></li>
          </ul>
          <p>További információkért kérjük, vegye fel a kapcsolatot titkárságunkkal.</p>
        </div>
      </div>
    </div>
  );
};

export default MandatoryReporting;



