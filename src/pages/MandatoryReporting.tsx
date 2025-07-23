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
            <li><a href="https://mkifk.hu/assets/eves-szakreferensi-jelentes-2024-MKIFK-Zrt.pdf" target="_blank">2024-es Energetikai Szakreferensi Jelentés</a></li>
          </ul>
        </div>
        <br></br>

        <div className="mandatory-reporting__content">
          <p>A 2025-re vonatkozó közérdekű adatok az alábbi linkeken érhetőek el:</p>
          <ul>
            <li><a href="https://mkifk.hu/assets/Adatkezelesi_tajekoztato_honlap.pdf" target="_blank">Adatkezelési tájékoztató</a></li>
            <li><a href="https://mkifk.hu/assets/kameraszabalyzat.pdf" target="_blank">Kameraszabályzat</a></li>
            <li><a href="https://mkifk.hu/assets/érintetti_jogok_érvényesítéséhez_szükséges_nyomtatvány.pdf" target="_blank">Érintetti jogok érvényesítéséhez szükséges nyomtatvány</a></li>
            <li><a href="https://mkifk.hu/assets/tájékoztató_a_kamerás_megyfigyelésről.pdf" target="_blank">Tájékoztató a kamerás megfigyelésről</a></li>
            <li><a href="https://mkifk.hu/assets/Adatkezelési_tájékoztató_MCA_Kft.pdf" target="_blank">Adatkezelési tájékoztató MCA Kft</a></li>
            <li><a href="https://mkifk.hu/assets/Kameraszabályzat_MCA_Kft.pdf" target="_blank">Kameraszabályzat MCA Kft</a></li>
          </ul>
          <br></br>
          <p>További információkért kérjük, vegye fel a kapcsolatot titkárságunkkal.</p>
        </div>

      </div>
    </div>
  );
};

export default MandatoryReporting;



