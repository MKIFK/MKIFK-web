import React from 'react';


const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="container">        
        <div className="about-us__content">
          <div className="about-us__image">
            <img src="/assets/images/logo-background.svg" alt="About Us" />
          </div>
          <div className="about-us__text">
            <h1>Lorem impsum főcím</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;