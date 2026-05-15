import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services', hasDropdown: true },
    { name: 'GALLERY', href: '#portfolio' },
    { name: 'COMMERCIAL', href: '#commercial', hasDropdown: true },
    { name: 'CONTACT', href: '#contact-section' },
  ];

  return (
    <nav className={`tb-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="tb-nav-container">
        {/* Left: Logo */}
        <div className="tb-nav-left">
          <a href="#" className="tb-logo-wrap">
            <img 
              src="/LD Remodeling  images/imgi_4_Gemini_Generated_Image_5vvghp5vvghp5vvg-removebg-preview.png" 
              alt="LD Remodeling" 
              className="tb-nav-logo" 
            />
          </a>
        </div>

        {/* Center: Links (Desktop) */}
        <div className="tb-nav-center">
          <ul className="tb-nav-links">
            {navLinks.map((link) => (
              <li key={link.name} className="tb-nav-item">
                <a href={link.href} className="tb-nav-link">
                  {link.name}
                  {link.hasDropdown && <span className="tb-nav-arrow">▾</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Phone Button */}
        <div className="tb-nav-right">
          <a href="tel:9042994364" className="tb-nav-phone-btn">
            (904) 299-4364
          </a>
          
          {/* Mobile Toggle */}
          <button className="tb-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="tb-mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="tb-mobile-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="tel:9042994364" className="tb-mobile-phone">
                  (904) 299-4364
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
