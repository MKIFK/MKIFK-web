import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>Kapcsolat</h1>
        <div className="contact__content">
          <div className="contact__info">
            <h2>Elérhetőségeink</h2>
            <p>Cím: 1234 Budapest, Példa utca 123.</p>
            <p>Telefon: +36 1 234 5678</p>
            <p>E-mail: info@mkifk.hu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;