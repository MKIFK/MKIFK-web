import React from 'react';
import Button from './Button';

// Import local images
// import kozlonyKiadoImage from '../../assets/images/jura.jpg';
// import forditoIrodaImage from '../../assets/images/jura.jpg';
// import nemzetiJogtarImage from '../../assets/images/jura.jpg';
// import ceginformacioImage from '../../assets/images/jura.jpg';

interface Service {
  title: string;
  description: string;
  link: string;
  // image: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Közlöny Kiadó',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/kozlony-kiado',
      // image: kozlonyKiadoImage
    },
    {
      title: 'Országos Fordító és Fordításhitelesítő Iroda',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Nullam in dui mauris.',
      link: '/fordito-iroda',
      // image: forditoIrodaImage
    },
    {
      title: 'Nemzeti jogtár',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Vivamus hendrerit arcu sed erat molestie vehicula.',
      link: '/nemzeti-jogtar',
      // image: nemzetiJogtarImage
    },
    {
      title: 'Céginformáció',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
      link: '/ceginformacio',
      // image: ceginformacioImage
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Szolgáltatásaink</h2>
        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="services__item">
              <div className="services__image-container">
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Button variant="secondary" linkTo={service.link}>
                Részletek
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;