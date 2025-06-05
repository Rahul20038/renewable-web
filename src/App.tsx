import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import About from './components/About';
import Features from './components/Features';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Register from './components/Register';
import Footer from './components/Footer';
import Home from './pages/Home';
import SpeakersPage from './pages/SpeakersPage';
import AgendaPage from './pages/AgendaPage';
import GalleryPage from './pages/GalleryPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;