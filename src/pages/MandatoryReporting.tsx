import React from 'react';

const MandatoryReporting: React.FC = () => {
  return (
    <div className="mandatory-reporting">
      <div className="container">
        <h1>Kötelező adatszolgáltatás</h1>
        <div className="mandatory-reporting__content">
          <p>Az alábbi információk a kötelező adatszolgáltatásra vonatkoznak:</p>
          <ul>
            <li>Adatszolgáltatási kötelezettség 1</li>
            <li>Adatszolgáltatási kötelezettség 2</li>
            <li>Adatszolgáltatási kötelezettség 3</li>
          </ul>
          <p>További információkért kérjük, vegye fel a kapcsolatot ügyfélszolgálatunkkal.</p>
        </div>
      </div>
    </div>
  );
};

export default MandatoryReporting;