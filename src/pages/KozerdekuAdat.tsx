import React, { useState } from 'react';

const KozerdekuAdatok: React.FC = () => {
  const [openAccordions, setOpenAccordions] = useState<{[key: string]: boolean}>({
    szervezeti: false, // All accordions closed by default
    jogi: false,
    gazdalkodasi: false
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="kozerdeku-adat-test">
      <div className="container">
        {/* Main Title */}
        <h1 className="main-title">Közérdekű adatok</h1>

        {/* Organizational Data Section */}
        <div className="accordion">
          <div 
            className="accordion-header" 
            onClick={() => toggleAccordion('szervezeti')}
          >
            <h2 className="section-title">Szervezeti adatok</h2>
            <span className={`material-symbols-sharp chevron-icon ${openAccordions.szervezeti ? 'open' : ''}`}>
              keyboard_arrow_down
            </span>
          </div>
          <div className={`accordion-body ${openAccordions.szervezeti ? 'open' : ''}`}>
          
          {/* Contact Information */}
          <div className="elerehetsegi-adatok">
            <h3 className="subsection-title">Elérhetőségi adatok</h3>
            <div className="company-info">
              <p className="company-name">MKIFK Magyar Közlönykiadó és Igazságügyi Fordítóközpont Zártkörűen Működő Részvénytársaság</p>
              
              <div className="info-row">
                <span className="label">Székhelye:</span>
                <span className="value">1085 Budapest, Somogyi Béla utca 6.</span>
              </div>
              
              <div className="info-row">
                <span className="label">Cégjegyzékszám:</span>
                <span className="value">01-10-042469</span>
              </div>
              
              <div className="info-row">
                <span className="label">Adószám:</span>
                <span className="value">10941908-2-42</span>
              </div>
              
              <div className="info-row">
                <span className="label">Képviseli:</span>
                <span className="value">Németh Balázs Sándor vezérigazgató</span>
              </div>
              
              <div className="info-row">
                <span className="label">Titkárság:</span>
                <span className="value email-link">titkarsag@mkifk.hu</span>
              </div>
            </div>
          </div>

          {/* Organizational Structure */}
          <div className="szervezeti-felepites">
            <h3 className="subsection-title">Szervezeti felépítés</h3>
            <div className="pdf-link">
              <a href="/assets/mkifk_szervezeti_abra.pdf" target="_blank">
                <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                <span className="link-text">Szervezeti ábra megtekintése</span>
              </a>
            </div>
          </div>

          {/* Leadership */}
          <div className="vezetoseg">
            <h3 className="subsection-title">Vezetőség</h3>
            
            <div className="management-section">
              <h4 className="management-title">Management</h4>
              <ul className="management-list">
                <li>Németh Balázs Sándor, vezérigazgató</li>
                <li>dr. Nagy Attila, gazdasági vezérigazgató-helyettes</li>
                <li>Ruthmayer János, fordítási és fordításhitelesítésért felelős vezérigazgató-helyettes</li>
                <li>Tamási István Gábor, közlönykiadói és informatikai ügyekért felelős vezérigazgató-helyettes</li>
              </ul>
            </div>

            <div className="supervisory-board">
              <h4 className="management-title">Felügyelőbizottság</h4>
              <div className="board-info">
                <div className="board-chairman">
                  <p><strong>Elnök:</strong></p>
                  <p>dr. Nyárádi Réka</p>
                </div>
                <div className="board-members">
                  <p><strong>Tagok:</strong></p>
                  <ul className="board-list">
                    <li>Babus Fruzsina</li>
                    <li>dr. Nagy Annamária</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Subsidiary Organizations */}
          <div className="tulajdonban-levo-szervezetek">
            <h3 className="subsection-title">A társaság tulajdonában lévő gazdálkodó szervezetek</h3>
            <div className="subsidiary-list">
              <p>Magyar Céginformáció Fejlesztő Korlátolt Felelősségű Társaság (székhely: 1085 Budapest, Somogyi Béla utca 6.)</p>
              <p className="greyed-out">Magyar Cégadat Szolgáltató Korlátolt Felelősségű Társaság (székhely: 1085 Budapest, Somogyi Béla utca 6.)</p>
              <p>OFFI-BON Kereskedelmi és Szolgáltató Kft. (székhely: 1062 Budapest, Bajza utca 52.)</p>
            </div>
          </div>

          {/* Superior Authority */}
          <div className="felettes-szerv">
            <h3 className="subsection-title">Felettes szerv</h3>
            <div className="authority-info">
              <p>Igazságügyi Minisztérium (IM)</p>
              <p>Közigazgatási Államtitkárság</p>
              <p>1051 Budapest, V. Nádor utca 22.</p>
              <div className="info-row">
                <span className="label">Telefon:</span>
                <span className="value email-link">titkarsag@mkifk.hu</span>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Legal Framework Section */}
        <div className="accordion">
          <div 
            className="accordion-header" 
            onClick={() => toggleAccordion('jogi')}
          >
            <h2 className="section-title">Működés jogi keretei</h2>
            <span className={`material-symbols-sharp chevron-icon ${openAccordions.jogi ? 'open' : ''}`}>
              keyboard_arrow_down
            </span>
          </div>
          <div className={`accordion-body ${openAccordions.jogi ? 'open' : ''}`}>
          
          <div className="alaptevekenyseq">
            <h3 className="subsection-title">A szerv alaptevékenysége, adatvédelmi és adatbiztonsági szabályzata</h3>
            <div className="pdf-links">
              <div className="pdf-link">
                <a href="/assets/MKIFK_SZMSZ.pdf" target="_blank">
                  <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                  <span className="link-text">Szervezeti és működési szabályzat</span>
                </a>
              </div>
              <div className="pdf-link">
                <a href="/assets/mkifk_adatkezelesi_tajekoztato.pdf" target="_blank">
                  <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                  <span className="link-text">Adatkezelési tájékoztató</span>
                </a>
              </div>
              <div className="pdf-link">
                <a href="/assets/kameraszabalyzat.pdf" target="_blank">
                  <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                  <span className="link-text">Kameraszabályzat</span>
                </a>
              </div>
              <div className="pdf-link">
                <a href="/assets/tájékoztató_a_kamerás_megyfigyelésről.pdf" target="_blank">
                  <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                  <span className="link-text">Tájékoztató kamerás megfigyelésről</span>
                </a>
              </div>
              <div className="pdf-link">
                <a href="/assets/érintetti_jogok_érvényesítéséhez_szükséges_nyomtatvány.pdf" target="_blank">
                  <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                  <span className="link-text">Érintett jogok érvényesítéséhez szükséges nyilatkozat</span>
                </a>
              </div>
            </div>
          </div>

          <div className="kozszolgaltatasok">
            <h3 className="subsection-title">Közszolgáltatások</h3>
            <ol className="services-list">
              <li>hiteles fordítás (24/1986. (VI.26.) MT rendelet 5. § és a 7/1986. (VI.26.) IM rendelet 5. §)</li>
              <li>fordításhitelesítés (24/1986. (VI.26.) MT rendelet 5. § és a 7/1986. (VI.26.) IM rendelet 5. §)</li>
              <li>igazságügyi tolmácsolás (7/1986. (VI.26.) IM rendelet 6. §)</li>
              <li>338/2011. (XII. 29.) Korm. rendelet 2.§ (4) bekezdése szerinti jogszabályfordítás</li>
              <li>idegennyelvű iratról hiteles másolat készítése (24/1986. (VI.26.) MT rendelet 5. § és a 7/1986. (VI.26.) IM rendelet 5. §)</li>
              <li>lektorálás (10/2015. (V.29.) IM rendelet 4. §)</li>
              <li>névmódosítással összefüggő szakvélemény készítése (az 1993. évi LV. törvény végrehajtására kiadott 125/1993. (IX.22.) Korm. rendelet 13/A. §)</li>
              <li>az igazságügyi miniszter felelősségi körébe tartozó feladatok ellátásához szükséges fordítási és lektorálási tevékenység (10/2015. (V. 29.) IM rendelet)</li>
              <li>a miniszterelnök kabinetfőnökének felelősségi körébe tartozó feladatok ellátásához szükséges fordítási tevékenység (2/2018. (XII. 28.) MK rendelet 2. § (3) bekezdés)</li>
              <li>a Miniszterelnökséget vezető miniszter felelősségi körébe tartozó feladatok ellátásához szükséges fordítási és lektorálási tevékenység (8/2016. (III. 25.) MvM rendelet 3/A. §)</li>
              <li>közreműködés az igazságügyi miniszter feladatkörét érintő ágazati honvédelmi feladatokban (9/2015. (IV. 30.) IM rendelet)</li>
              <li>jogszabályi kijelölésen alapuló egyéb tolmács tevékenység (pl. 24/2005. (IV. 21.) GKM rendeletet 12.§ (6) bek.)</li>
            </ol>
          </div>

          <div className="kozerdeku-adatigenyles">
            <h3 className="subsection-title">Közérdekű adatigénylés</h3>
            <div className="pdf-link">
              <a href="/assets/mkifk_Igenylolap_kozerdeku_adatokhoz.pdf" target="_blank">
                <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                <span className="link-text">Igénylőlap</span>
              </a>
            </div>
          </div>
          </div>
        </div>

        {/* Financial Data Section */}
        <div className="accordion">
          <div 
            className="accordion-header" 
            onClick={() => toggleAccordion('gazdalkodasi')}
          >
            <h2 className="section-title">Gazdálkodási adatok</h2>
            <span className={`material-symbols-sharp chevron-icon ${openAccordions.gazdalkodasi ? 'open' : ''}`}>
              keyboard_arrow_down
            </span>
          </div>
          <div className={`accordion-body ${openAccordions.gazdalkodasi ? 'open' : ''}`}>
          
          <div className="eves-beszamolok">
            <h3 className="subsection-title">Éves beszámolók</h3>
            <div className="pdf-links">
              <div className="pdf-link">
                <a href="/assets/mkifk_zrt_2024.12.31._beszamolp.pdf" target="_blank">
                  <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                  <span className="link-text">2024. évi beszámoló</span>
                </a>
              </div>
              <div className="pdf-link">
                <a href="/assets/mkifk_zrt_2024.12.31._fuggetlen_konyvvizsgaloi_jelentes.pdf" target="_blank">
                  <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                  <span className="link-text">2024. évi könyvvizsgálói jelentés </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mukodes">
            <h3 className="subsection-title">Működés</h3>
            
            <div className="foglalkoztatottak">
              <h4 className="management-title">Foglalkoztatottak adatai</h4>
              <div className="pdf-links">
                <div className="pdf-link">
                  <a href="/assets/mkifk_foglalkoztatottak_2024_IV.pdf" target="_blank">
                    <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                    <span className="link-text">2024. IV. negyedév</span>
                  </a>
                </div>
                <div className="pdf-link">
                  <a href="/assets/mkifk_foglalkoztatottak_2025_I.pdf" target="_blank">
                    <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                    <span className="link-text">2025. I. negyedév</span>
                  </a>
                </div>
                <div className="pdf-link">
                <a href="/assets/mkifk_foglalkoztatottak_2025_II.pdf" target="_blank">
                    <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                    <span className="link-text">2025. II. negyedév</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="szerzodesek">
              <h4 className="management-title">Szerződések</h4>
              <p className="contract-description">
                <a href="/assets/mkifk_netto_5m_feletti_szerzodesek.pdf" target="_blank" className="link-text">MKIFK Magyar Közlönykiadó és Igazságügyi Fordítóközpont Zártkörűen Működő Részvénytársaság által kötött, nettó ötmillió forintot elérő vagy azt meghaladó értékű árubeszerzésre, építési beruházásra vagy szolgáltatás megrendelésre vonatkozó szerződések</a>
              </p>
            </div>

            <div className="eu-fejlesztesek">
              <h4 className="management-title">Európai Unió által támogatott fejlesztések</h4>
              
              <div className="project-block">
                <h3 className="project-title">Jogi személyek egységes nyilvántartása</h3>
                <ul className="project-details">
                  <li>Kedvezményezett neve: Igazságügyi Minisztérium</li>
                  <li>Konzorciumi partnerek:
                    <ul className="partner-list">
                      <li>MKIFK Magyar Közlönykiadó és Igazságügyi Fordítóközpont Zártkörűen Működő Részvénytársaság</li>
                      <li>Nemzeti Infokommunikációs Szolgáltató Zrt</li>
                      <li>Digitális Kormányzati Fejlesztés és Projektmenedzsment Kft.</li>
                    </ul>
                  </li>
                  <li>Fejlesztés tárgya, célja: Jogi személyek egységes nyilvántartása</li>
                  <li>Szerződött támogatás összege: 10 000 000 000 Ft</li>
                  <li>A támogatás mértéke (%-ban): 100%</li>
                  <li>A projekt tervezett befejezési dátuma: 2027.12.31.</li>
                  <li>Projekt azonosító száma: DIMOP_PLUSZ-1.3.6-23-2023-00001</li>
                </ul>
              </div>

              <div className="project-block">
                <h3 className="project-title">Jogi személyek egységes nyilvántartása</h3>
                <ul className="project-details">
                  <li>Kedvezményezett neve: Igazságügyi Minisztérium</li>
                  <li>Konzorciumi partnerek:
                    <ul className="partner-list">
                      <li>MKIFK Magyar Közlönykiadó és Igazságügyi Fordítóközpont Zártkörűen Működő Részvénytársaság</li>
                      <li>Nemzeti Infokommunikációs Szolgáltató Zrt</li>
                      <li>Digitális Kormányzati Fejlesztés és Projektmenedzsment Kft.</li>
                    </ul>
                  </li>
                  <li>Fejlesztés tárgya, célja: Jogi személyek egységes nyilvántartása</li>
                  <li>Szerződött támogatás összege: 10 000 000 000 Ft</li>
                  <li>A támogatás mértéke (%-ban): 100%</li>
                  <li>A projekt tervezett befejezési dátuma: 2027.12.31.</li>
                  <li>Projekt azonosító száma: DIMOP_PLUSZ-1.3.6-23-2023-00001</li>
                </ul>
              </div>

              <div className="project-description">
                <h3 className="project-section-title">A projekt tartalmának bemutatása:</h3>
                <p>A jogi személyeket jelenleg tároló adatbázisok, az ezekhez kapcsolódó informatikai folyamatok nem egységesek. Az adatok eltérő formában és struktúrában vannak kezelve. Az adatszolgáltatások jelentős részében nem optimalizáltan alkalmazzák a digitalizációt és a folyamat-automatizációt, heterogén technikai megoldásokkal készültek el, és egyes esetekben jelentős a szolgáltató felé történő kitettség is. Ez az állampolgárok számára jelentősen megnehezíti az ügyintézést és a tájékozódást is.</p>
                
                <p><strong>A projekt megvalósítása révén létrejövő eredmények:</strong></p>
                <ul className="project-results">
                  <li>Jogi személyek közhiteles adatbázisának létrehozása, ügyintézéshez kapcsolódó work-flow rendszer fejlesztése</li>
                  <li>E-cegjegyzek.hu kiváltása NDÁP online felületével; egyéb NDÁP eredmény-termékek felhasználása</li>
                  <li>Közlöny Portálok fejlesztése (magyarkozlony.hu, kozlonyok.hu kiváltása), egységes frontend kialakítása, kiadási folyamatok megjelenítésének megújítása, Nemzeti Jogszabálytár megújítása</li>
                  <li>Határon átnyúló szolgáltatások fejlesztése</li>
                  <li>A díjköteles piaci szolgáltatások helyett ingyenes szolgáltatások biztosítása</li>
                </ul>
                
                <p><strong>A projekt hatása a célcsoportra:</strong> gyorsabb, egyszerűbb, ingyenes online ügyintézés, átlátható adatbázis, illeszkedve az NDÁP egységes állampolgári felületéhez, kevesebb bürokratikus folyamat, rövidebb eljárási idő, kisebb adminisztrációs teher</p>
                
                <p><strong>Kommunikációs üzenet:</strong> Cégügyintézés szabadon</p>
                <p>Mostantól a vállalkozások alapítása, bejegyzése, adatainak módosítása vagy megszüntetése személyes közreműködés nélkül is intézhető. Az új ügyfélportálon az állampolgárok egyszerűen, könnyen, gyorsan le tudják majd kérdezni a céges adatokat és egyéb jogi személyek adatait is.</p>
                
                <p><strong>Digitális Állampolgárság Programmal való kapcsolódás:</strong></p>
                <ul className="project-connections">
                  <li>Felhasználói élmény: az állampolgárok / vállalkozások számára a felhasználói felületek egységesítése</li>
                  <li>Nemzeti Adatvagyon: KKSZB és Egységes Digitális Kapu használat</li>
                  <li>e-Azonosítás, e-Aláírás, Adattárca: KAÜ és új IDP-k használata. Új NDÁP Azonosítás és Aláírás funkciók igénybevétele. Adattárcába (Szerepköri Tanúsítási Szolgáltatásba) a jogosultságok átadása</li>
                  <li>ePosta, eDokumentumtár: a megújításra kerülő releváns SzEÜSz, KEÜSz csatlakozás</li>
                  <li>eFizetés: EFER, majd az NDÁP eFizetés szolgáltatás használata</li>
                </ul>
                
                <h4>A projekt célja:</h4>
                <p>A Jogi személyek egységes nyilvántartása projekt célja a jelenleg még önálló szigetekként működő jogi személyek nyilvántartásának egységesítése, közös platformra és eljárási modulokba történő illesztése.
                <br></br>
                Ezáltal a projekt keretében új és modern architektúrán alapuló egységes nyilvántartás jön létre, valamint ügyfélbarát, digitális állampolgári eljárással biztosítható a cégalapítási-, módosítási, megszüntetési folyamat. Az alapjaiban megújuló, közös felépítésen és logikai elven működő nyilvántartás kialakítása mellett valamennyi jogi személynek minősülő entitás ügyintézési felülete és adatpublikációja új, közös platformra kerül. A Nyilvántartás egységesítéséről és a kialakítandó informatikai rendszerről a „2021. évi XCII. törvény a jogi személyek nyilvántartásáról és a nyilvántartási eljárásról” című törvény (továbbiakban: Jszny. törvény) rendelkezik, melynek hatályba lépése 2026. január 1-je.
                </p>
                <br></br>
                <h4>A projekt célcsoportja:</h4>
                <ul className="project-connections">
                  <li>Jogi személyek adataival dolgozó hatóságok;</li>
                  <li>Nyilvántartás gazdák;</li>
                  <li>Döntéshozó állami felsővezetők;</li>    
                  <li>Jogi személyek és azok képviseletét ellátók;</li>
                  <li>Jogi személyek adataira egyéb okból kíváncsi személyek, szervezetek;</li>
                  <li>Európai Uniós céginformációs együttműködésben résztvevők.</li>
                </ul>
                <br></br>
                <h4>A projekt indikátorai:</h4>
                <p>
                  Digitális szolgáltatások, termékek és eljárások kifejlesztése céljából támogatott közintézmények (közintézmény): 1 <br />
                  Innovatív technológiákat alkalmazó fejlesztett vagy továbbfejlesztett rendszerek száma (db): 2 <br />
                  Új és korszerűsített közcélú digitális szolgáltatások, termékek és folyamatok felhasználói (felhasználó/év): 38 320 <br />
                </p>
                <p>A projekt az Európai Unió támogatásával, a magyar állam társfinanszírozásával valósul meg.</p>
              </div>


            </div>

            <div className="kozbeszerzesi-informaciok">
              <h4 className="management-title">Közbeszerzési információk</h4>
              <div className="pdf-link">
                <a href="https://ekr.gov.hu/portal/kozbeszerzes/terv-kereses" target="_blank">
                  <span className="material-symbols-sharp pdf-icon">launch</span>
                  <span className="link-text">Éves közbeszerzési terv</span>
                </a>
              </div>
            </div>

            <div className="tovabbi-dokumentumok">
              <h4 className="management-title">További dokumentumok</h4>
              <div className="energy-reports">
                <p>Éves energetikai jelentések:</p>
                <div className="pdf-link">
                  <a href="/assets/eves-szakreferensi-jelentes-2024-MKIFK-Zrt.pdf" target="_blank">
                    <span className="material-symbols-sharp pdf-icon">picture_as_pdf</span>
                    <span className="link-text">2024. évi energetikai jelentés</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KozerdekuAdatok;