import React from 'react';
import Button from '../components/Button';

const PublicInfo: React.FC = () => {
  return (
    <div className="sub-pages">
      
      <div className="container">
        <h1>Közadat</h1>
        <br></br>

        <h2>A szerv vezetői:</h2>

        <h4>Management és FB</h4>
        <br></br>

        <h3>Management:</h3>
        <ul>  
          <li>Németh Balázs Sándor, vezérigazgató</li>
          <li>dr. Nagy Attila, gazdasági vezérigazgató-helyettes</li>
          <li>Ruthmayer János, fordítási és fordításhitelesítésért felelős vezérigazgató-helyettes</li>
          <li>Tamási Gábor, közlönykiadói és informatikai ügyekért felelős vezérigazgató-helyettes</li>
        </ul>
        <br></br>

        <h3>Felügyelő Bizottság:</h3>
          <h4>Elnök:</h4>
          <p>Dr Pilcz Tamás</p>
          <br></br>

          <h4>Tagok:</h4>
          <ul>
            <li>dr. Nagy Annamária</li>
            <li>dr. Pilcz Tamás</li>
            <li>dr. Nyárádi Réka</li>
          </ul>

        </div>
      </div>
  );
};

export default PublicInfo;



