import React from 'react';
import Button from '../components/Button';


const MandatoryReporting: React.FC = () => {
  return (
    <div className="mandatory-reporting">
      <div className="container">
        <h1>Kötelező adatszolgáltatás</h1>
        <div className="mandatory-reporting__content">
          <p>A 2024-re vonatkozó közérdekű adatok az alábbi linkeken érhetőek el:</p>


          <ul>
            <li><a href="https://mhk.hu/kozadat">Magyar Közlöny / Közadat</a></li>
            <li><a href="https://www.offi.hu/cegunkrol/kozerdeku-adatok">OFFI / Közadat</a></li>
          </ul>
          
          <p>További információkért kérjük, vegye fel a kapcsolatot ügyfélszolgálatunkkal.</p>
        </div>
      </div>
    </div>
  );
};

export default MandatoryReporting;



