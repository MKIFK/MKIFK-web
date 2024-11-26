import React from 'react';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import News from '../components/News';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <AboutUs />
      <Services />
    </div>
  );
};

export default HomePage;