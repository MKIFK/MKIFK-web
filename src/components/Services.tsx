import React, { useState, useEffect } from 'react';
import Button from './Button';

interface Service {
  title: string;
  description: string;
  link: string;
  imageName: string;
}

interface ImageModule {
  default: string;
}

const Services: React.FC = () => {
  const [images, setImages] = useState<Record<string, string>>({});

  const services: Service[] = [
    {
      title: 'Közlöny Kiadó',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/kozlony-kiado',
      imageName: 'jura.jpg'
    },
    {
      title: 'Országos Fordító és Fordításhitelesítő Iroda',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Nullam in dui mauris.',
      link: '/fordito-iroda',
      imageName: 'jura.jpg'
    },
    {
      title: 'Nemzeti jogtár',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Vivamus hendrerit arcu sed erat molestie vehicula.',
      link: '/nemzeti-jogtar',
      imageName: 'jura.jpg'
    },
    {
      title: 'Céginformáció',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
      link: '/ceginformacio',
      imageName: 'jura.jpg'
    },
  ];

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob<ImageModule>('../../assets/images/*.{png,jpg,jpeg,gif}');
      const loadedImages: Record<string, string> = {};

      for (const path in imageModules) {
        const mod = await imageModules[path]();
        const imageName = path.split('/').pop() as string;
        loadedImages[imageName] = mod.default;
      }

      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <section className="services">
      <div className="container">
        <h2>Szolgáltatásaink</h2>
        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="services__item">
              <div className="services__image-container">
                <img 
                  src={images[service.imageName] || '/placeholder.svg?height=200&width=200'}
                  alt={service.title} 
                  className="services__image"
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