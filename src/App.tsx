import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MandatoryReporting from './pages/MandatoryReporting';
import Contact from './pages/Contact';


const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kotelezo-adatszolgaltatas" element={<MandatoryReporting />} />
            <Route path="/elerhetoseg-kapcsolat" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};


export default App;