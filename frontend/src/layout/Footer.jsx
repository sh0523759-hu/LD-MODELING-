import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-fancy">
      <div className="container">
        <div className="footer-grid-fancy">
          <div className="footer-brand-fancy">
            <div className="fancy-logo-footer">
              <span className="logo-serif">LD</span> 
              <span className="logo-main-footer">REMODELING</span>
            </div>
            <p className="footer-p-fancy">
              A premier high-energy home transformation studio. We engineer extraordinary living spaces through architectural precision and luxury design.
            </p>
          </div>
          
          <div className="footer-links-fancy">
            <div className="fancy-link-group">
              <span className="fancy-group-label">Navigation</span>
              <a href="#about">Philosophy</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Showcase</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="fancy-link-group">
              <span className="fancy-group-label">Socials</span>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Houzz</a>
            </div>
          </div>

          <div className="footer-contact-fancy">
             <span className="subtitle-gold">Start a Conversation</span>
             <a href="mailto:Ldremodelingjacksonville@gmail.com" className="fancy-footer-email">Ldremodelingjacksonville@gmail.com</a>
             <span className="fancy-footer-tel">(904) 299-4364</span>
          </div>
        </div>
        
        <div className="footer-bottom-fancy">
          <p>&copy; {new Date().getFullYear()} LD Remodeling. All Rights Reserved.</p>
          <div className="fancy-legal-links">
            <span>Privately Owned & Operated in Jacksonville, FL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
