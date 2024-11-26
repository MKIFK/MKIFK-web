import React from 'react';
import logoBackground from '../../assets/images/logo-background.svg';
import lobogo from '../../assets/images/a-lobogo.svg';


const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="container">        
        <div className="about-us__content">
          <div className="about-us__image">
            <img src={logoBackground} alt="About Us" />
          </div>
          <div className="about-us__text">
            <h1>Rólunk</h1>
            <p>
            A Közlönykiadó Kft. és az OFFI Zrt. egyesülésével létrejött MKIFK Zrt. több mint 150 év múltra visszatekintően nyújt professzionális, állami szintű jogi és nyelvi szolgáltatásokat. Innovatív megoldásaink része a hiteles fordítás és tolmácsolás, a Magyar Közlöny és egyéb ágazati kiadványok kiadása, a Nemzeti Jogszabálytár szakmai fenntartása.            </p>
          </div>
        </div>
      </div>
      <div className="lobogo">
        <div className="red"></div>
        <div className="white"></div>
        <div className="green"></div>
      </div>
    </section>
  );
};

export default AboutUs;