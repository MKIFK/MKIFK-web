import React, { useState, useEffect } from 'react';
import Button from './Button';

interface NewsItem {
  title: string;
  content: string;
  link: string;
  imageName: string;
}

interface ImageModule {
  default: string;
}

const News: React.FC = () => {
  const [images, setImages] = useState<Record<string, string>>({});

  const newsItems: NewsItem[] = [
    {
      title: 'Hír 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://telex.hu',
      imageName: 'jura.jpg'
    },
    {
      title: 'Hír 2',
      content: 'Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.',
      link: 'https://www.bbc.com',
      imageName: 'jura.jpg'
    },
    {
      title: 'Hír 3',
      content: 'Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
      link: '/hirek/3',
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
    <section className="news">
      <div className="container">
        <h2>Hírek</h2>
        <div className="news__grid">
          {newsItems.map((item, index) => (
            <div key={index} className="news__item">
              <div className="news__image-container">
                <img 
                  src={images[item.imageName] || '/placeholder.svg?height=200&width=300'}
                  alt={item.title} 
                  className="news__image"
                />
              </div>
              <div className='news__text'>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <Button 
                  variant="primary" 
                  linkTo={item.link} 
                  external={item.link.startsWith('http')}
                >
                  Olvasson tovább
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;