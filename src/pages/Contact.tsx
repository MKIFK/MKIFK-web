import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>Elérhetőség / Kapcsolat</h1>
        <div className="contact__content">
          <div className="contact__info">
            <h2>Elérhetőségeink</h2>
            <p>Cím: 1234 Budapest, Példa utca 123.</p>
            <p>Telefon: +36 1 234 5678</p>
            <p>E-mail: info@mkifk.hu</p>
          </div>
          <div className="contact__form">
            <h2>Kapcsolatfelvétel</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Név</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Üzenet</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Küldés</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;