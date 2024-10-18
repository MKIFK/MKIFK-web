import React from 'react';
import Button from './Button';

interface Service {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Közlöny Kiadó',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/kozlony-kiado',
      imageUrl: 'assets/images/jura.jpg'
    },
    {
      title: 'Országos Fordító és Fordításhitelesítő Iroda',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Nullam in dui mauris.',
      link: '/fordito-iroda',
      imageUrl: 'assets/images/jura.jpg'
    },
    {
      title: 'Nemzeti jogtár',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Vivamus hendrerit arcu sed erat molestie vehicula.',
      link: '/nemzeti-jogtar',
      imageUrl: 'assets/images/jura.jpg'
    },
    {
      title: 'Céginformáció',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
      link: '/ceginformacio',
      imageUrl: 'assets/images/jura.jpg'
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
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="services__image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'assets/images/jura.jpg';
                  }}
                />
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