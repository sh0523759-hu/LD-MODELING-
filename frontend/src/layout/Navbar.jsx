import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className={`header-fixed-clean ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-clean">
        <div className="container nav-container">
          <a href="/" className="logo">
            <img src="/LD Remodeling  images/imgi_1_LD-Remodling-1.png" alt="LD Remodeling" />
          </a>
          
          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                whileHover={{ color: '#b69152' }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="btn-nav-wrapper">
              <a href="#contact" className="btn-nav">Get a Quote</a>
            </div>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-menu-header">
              <img src="/LD Remodeling  images/imgi_1_LD-Remodling-1.png" alt="LD Remodeling" className="mobile-logo" />
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={30} /></button>
            </div>
            <div className="mobile-links">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-mobile" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
