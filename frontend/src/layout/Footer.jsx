import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/LD Remodeling  images/imgi_1_LD-Remodling-1.png" alt="LD Remodeling" className="footer-logo" />
            <p>
              Jacksonville's premier home remodeling specialists. We turn your house into the home of your dreams with quality and integrity.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Our Projects</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Kitchen Remodel</a></li>
              <li><a href="#services">Bathroom Renovation</a></li>
              <li><a href="#services">Home Additions</a></li>
              <li><a href="#services">Flooring & Painting</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4>Stay Connected</h4>
            <p>Follow us on social media for project updates and inspiration.</p>
            <div className="social-icons">
              <a href="#">FB</a>
              <a href="#">IG</a>
              <a href="#">LI</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LD Remodeling Jacksonville. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
