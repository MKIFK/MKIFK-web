import React from 'react';
import Button from '../components/Button';

const PublicInfo: React.FC = () => {
  return (
    <div className="sub-pages">
      
      <div className="container">
        <h1>Közadat</h1>
        <br></br>

        <h2>Az MKIFK Magyar Közlönykiadó és Igazságügyi Fordítóközpont Zrt vezetői:</h2>

        <h4>Management és FB</h4>
        <br></br>

        <h3>Management:</h3>
        <ul>  
          <li>Németh Balázs Sándor, vezérigazgató</li>
          <li>dr. Nagy Attila, gazdasági vezérigazgató-helyettes</li>
          <li>Ruthmayer János, fordítási és fordításhitelesítésért felelős vezérigazgató-helyettes</li>
          <li>Tamási István Gábor, közlönykiadói és informatikai ügyekért felelős vezérigazgató-helyettes</li>
        </ul>
        <br></br>

        <h3>Felügyelőbizottság:</h3>
          <h4>Elnök:</h4>
          <p>dr. Nyárádi Réka</p>
          <br></br>

          <h4>Tagok:</h4>
          <ul>
            <li>Babus Fruzsina</li>
            <li>dr. Nagy Annamária</li>
          </ul>

          <br></br>

          <h3>Magyar Cégadat Szolgáltató Kft.:</h3>
          <h3>Felügyelőbizottság:</h3>
          <h4>Elnök:</h4>
          <p>Dr. Baán Tamás</p>
          <br></br>

          <h4>Tagok:</h4>
          <ul>
            <li>Guba Zoltán András</li>
            <li>Árnyas Alexandra</li>
          </ul>
          <br></br>

          <h3>Magyar Céginformáció Fejlesztő Kft.:</h3>
          <h4>Elnök:</h4>
          <p>Szántai János</p>
          <br></br>

          <h4>Tagok:</h4>
          <ul>
            <li>dr. Kovács Eszter</li>
            <li>dr. Pásztor Petra Judit</li>
          </ul>

        </div>
      </div>
  );
};

export default PublicInfo;



