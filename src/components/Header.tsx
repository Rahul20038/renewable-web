import React, { useState, useEffect } from 'react';
import { Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Sun className="h-10 w-10 text-amber-500" />
            <div className="ml-3 text-white">
              <h1 className="text-xl font-bold leading-tight">Renewable</h1>
              <h2 className="text-lg leading-tight">Meet 2026</h2>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-amber-400 transition-colors">Home</Link>
          <Link to="/speakers" className="text-white hover:text-amber-400 transition-colors">Speakers</Link>
          <Link to="/agenda" className="text-white hover:text-amber-400 transition-colors">Agenda 2026</Link>
          <Link to="/gallery" className="text-white hover:text-amber-400 transition-colors">Gallery</Link>
          <Link to="/partners" className="text-white hover:text-amber-400 transition-colors">Partners</Link>
          <Link to="/contact" className="text-white hover:text-amber-400 transition-colors">Contact</Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="#register" 
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-4 py-2 rounded transition-colors"
          >
            Register
          </a>
          <a 
            href="#partner" 
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-4 py-2 rounded transition-colors"
          >
            Partner
          </a>
          
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4 px-4">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-white hover:text-amber-400 transition-colors">Home</Link>
            <Link to="/speakers" className="text-white hover:text-amber-400 transition-colors">Speakers</Link>
            <Link to="/agenda" className="text-white hover:text-amber-400 transition-colors">Agenda 2026</Link>
            <Link to="/gallery" className="text-white hover:text-amber-400 transition-colors">Gallery</Link>
            <Link to="/partners" className="text-white hover:text-amber-400 transition-colors">Partners</Link>
            <Link to="/contact" className="text-white hover:text-amber-400 transition-colors">Contact</Link>
          </nav>
          <div className="mt-4 flex flex-col space-y-2">
            <a 
              href="#register" 
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-4 py-2 rounded text-center transition-colors"
            >
              Register
            </a>
            <a 
              href="#partner" 
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-4 py-2 rounded text-center transition-colors"
            >
              Partner
            </a>
            <a 
              href="#app" 
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-4 py-2 rounded text-center transition-colors"
            >
              Summit App
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;