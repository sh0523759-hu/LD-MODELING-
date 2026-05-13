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
    { name: 'Philosophy', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Showcase', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header-fancy ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-fancy">
        <div className="container nav-container-fancy">
          <a href="/" className="fancy-logo">
            <span className="logo-serif">LD</span> 
            <span className="logo-main">REMODELING</span>
          </a>
          
          <div className="nav-links-fancy">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-item-fancy">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="nav-btn-fancy">Get Started</a>
          </div>

          <button className="mobile-toggle-fancy" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fancy-mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mobile-menu-header">
               <span className="logo-serif">LD</span>
               <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}><X size={30} strokeWidth={1} /></button>
            </div>
            <div className="mobile-links-fancy">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <a href="#contact" className="mobile-cta-fancy" onClick={() => setIsMobileMenuOpen(false)}>Free Consultation</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
