import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1 className='section-title'>Kapcsolat</h1>
        <div className="contact__content">

          <div className="contact__info contact__block">
            <p>
              MKIFK Magyar Közlönykiadó és Igazságügyi Fordítóközpont <br></br>
              Zártkörűen Működő Részvénytársaság
            </p>
            <br></br>
            <p>Székhelye: 1085 Budapest, Somogyi Béla u. 6.;</p>
            <p>Tel.: +36 1 266 9290</p>
            <p>Cégjegyzékszám: 01-10-042469;</p>
            <p>Adószám: 10941908-2-42;</p>
            <p>Képviseli: Németh Balázs Sándor vezérigazgató</p>
            <p>Titkárság:
              <a href="mailto:titkarsag@mkifk.hu?subject=Hello&body=MHK titkárságnak kérdésem.">
               titkarsag@mkifk.hu
              </a>
            </p>
          </div>

          <div className="contact__info contact__block">
            <p>
              Országos Fordító és Fordításhitelesítő Iroda (OFFI) Zrt.
            </p>
            <br />
            <p>Telephely: 1062 Budapest, Bajza u. 52.</p>
            <p>Mobil: +36 30 986 9396</p>
            <p>Tel.: +36 1 428 9600</p>
            <p>
              E-mail:
              <a href="mailto:info@offi.hu?subject=Kapcsolatfelvétel&body=Tisztelt OFFI!">
                 info@offi.hu
              </a>
            </p>
          </div>

          <div className="contact__info contact__block">
            <p>
              IM Céginformációs és az Elektronikus Cégeljárásban Közreműködő Szolgálat
            </p>
            <br />
            <p>Cím: 1085 Budapest, Somogyi Béla u. 6.</p>
            <p>Postacím: 1357 Budapest, Pf. 2.</p>
            <p>
              Honlap:
              <a href="https://ceginformaciosszolgalat.kormany.hu" target="_blank" rel="noopener noreferrer">
              https://ceginformaciosszolgalat.kormany.hu
              </a>
            </p>

            <br />

            <p>Ügyfélszolgálati Iroda</p>
            <p>Cím: 1085 Budapest, Somogyi Béla u. 6.</p>
            <p>Call center: +36 (1) 795 5111</p>
            <p>
              Elérhetőség:
              <a href="https://occsz.e-cegjegyzek.hu/?kapcsolat" target="_blank" rel="noopener noreferrer">
                 https://occsz.e-cegjegyzek.hu/?kapcsolat
              </a>
            </p>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Contact;