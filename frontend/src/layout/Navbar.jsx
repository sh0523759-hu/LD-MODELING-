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
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header-kinetic ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-kinetic">
        <div className="container nav-container-kinetic">
          <a href="/" className="kinetic-logo">
            <span className="blackletter highlight">LD</span> 
            <span className="logo-sans">REMODELING</span>
          </a>
          
          <div className="nav-links-kinetic">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-item-kinetic">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-kinetic">KICKSTART</a>
          </div>

          <button className="mobile-btn-kinetic" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={30} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-overlay-kinetic"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
          >
            <div className="mobile-header-row">
               <span className="blackletter highlight">LD</span>
               <button onClick={() => setIsMobileMenuOpen(false)}><X size={40} /></button>
            </div>
            <div className="mobile-links-column">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
