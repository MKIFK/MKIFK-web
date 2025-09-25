import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// LEGAL PAGES 
import PublicInfo from './pages/PublicInfo';
import HomePage from './pages/HomePage';
import MandatoryReporting from './pages/MandatoryReporting';
import Contact from './pages/Contact';
import KozerdekuAdatok from './pages/KozerdekuAdat';


// NEWS PAGES 
import NewsPost1 from './pages/NewsPost1';
import NewsPost2 from './pages/NewsPost2';
import NewsPost3 from './pages/NewsPost3';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kotelezo-adatszolgaltatas" element={<MandatoryReporting />} />
            <Route path="/kapcsolat" element={<Contact />} />
            <Route path="/kozerdeku-adatok" element={<KozerdekuAdatok />} />
            <Route path="/kozadat-old" element={<PublicInfo />} />
            <Route path="/news-post1" element={<NewsPost1 />} />
            <Route path="/news-post2" element={<NewsPost2 />} />
            <Route path="/news-post3" element={<NewsPost3 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;