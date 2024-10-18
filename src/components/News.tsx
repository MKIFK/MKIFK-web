import React from 'react';
import Button from './Button';

interface NewsItem {
  title: string;
  content: string;
  link: string;
}

const News: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      title: 'Hír 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://telex.hu'
    },
    {
      title: 'Hír 2',
      content: 'Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.',
      link: 'https://www.bbc.com'
    },
    {
      title: 'Hír 3',
      content: 'Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
      link: '/hirek/3'
    },
  ];

  return (
    <section className="news">
      <div className="container">
        <h2>Hírek</h2>
        <div className="news__grid">
          {newsItems.map((item, index) => (
            <div key={index} className="news__item">
              <img src="/placeholder.svg?height=200&width=300" alt={item.title} />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;