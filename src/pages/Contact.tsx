import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1 className='section-title'>Kapcsolat</h1>
        <div className="contact__content">
          <div className="contact__info">
            <p>
              MKIFK Magyar Közlönykiadó és Igazságügyi Fordítóközpont <br></br>
              Zártkörűen Működő Részvénytársaság
            </p>
            <br></br>
            <p>székhelye: 1085 Budapest, Somogyi Béla u. 6.;</p>
            <p>cégjegyzékszám: 01-10-042469;</p>
            <p>adószám: 10941908-2-42;</p>
            <p>képviseli: Németh Balázs Sándor vezérigazgató</p>
            <p>titkárság:
              <a href="mailto:titkarsag@mhk.hu?subject=Hello&body=MHK titkárságnak kérdésem.">
              titkarsag@mhk.hu
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;