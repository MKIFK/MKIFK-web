import React, { useState, useEffect } from 'react';
import Button from './Button';

interface Service {
  title: string;
  description: string;
  link: string;
  imageName: string;
  isExternal: boolean;
}

interface ImageModule {
  default: string;
}

const Services: React.FC = () => {
  const [images, setImages] = useState<Record<string, string>>({});

  const services: Service[] = [
    {
      title: 'Nemzeti Jogtár',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Vivamus hendrerit arcu sed erat molestie vehicula.',
      link: 'https://njt.hu/',
      isExternal: true,
      imageName: 'nemzeti_jogtar.svg'
    },
    {
      title: 'Igazságügyi Fordítóközpont',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Nullam in dui mauris.',
      link: 'https://offi.hu/',
      isExternal: true,
      imageName: 'fordito.svg'
    },
    {
      title: 'Magyar Közlöny',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://magyarkozlony.hu//',
      isExternal: true,
      imageName: 'kiado.svg'
    },
    {
      title: 'Céginformáció',
      description: 'A szolgáltatás összefoglalója 1-2 mondatban. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
      link: '/ceginformacio',
      isExternal: true,
      imageName: 'ceginfo.svg'
    },
  ];

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob<ImageModule>('../../assets/images/*.{png,jpg,jpeg,gif,svg}');
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
              <div className='services__text'>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Button 
                variant="primary" 
                linkTo={service.link}
                external={service.isExternal}
                >
                  Részletek
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;