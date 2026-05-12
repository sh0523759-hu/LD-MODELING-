import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-kinetic">
      <div className="container">
        <div className="footer-grid-brutalist">
          <div className="footer-brand-col">
            <div className="kinetic-logo-footer">
               <span className="blackletter highlight">LD</span> 
               <span className="logo-sans">REMODELING</span>
            </div>
            <p className="footer-desc">
              Jacksonville's premier high-energy home transformation studio. 
              Stripping away the ordinary and building the extraordinary.
            </p>
          </div>
          
          <div className="footer-nav-col">
            <div className="link-group">
              <span className="group-label">Navigate</span>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="link-group">
              <span className="group-label">Connect</span>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div className="footer-cta-col">
             <span className="blackletter highlight" style={{ fontSize: '3rem' }}>Join Us</span>
             <a href="mailto:Ldremodelingjacksonville@gmail.com" className="footer-email-link">Ldremodelingjacksonville@gmail.com</a>
          </div>
        </div>
        
        <div className="footer-bottom-row">
          <p>&copy; {new Date().getFullYear()} LD Remodeling. Built for Impact.</p>
          <div className="legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
