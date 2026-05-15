import React from 'react';
import { Phone, MessageCircle, MapPin, Check } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="tb-footer">
      {/* Top Hint Bar */}
      <div className="tb-footer-hint">
        <div className="container">
          <p>
            Call, text, WhatsApp, or <a href="#contact" className="gold-link">book online</a> — your choice.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="tb-footer-main">
          {/* Left: Brand & Contacts */}
          <div className="tb-footer-left">
            <img 
              src="/LD Remodeling  images/logo.png" 
              alt="LD Remodeling" 
              className="tb-footer-logo" 
            />
            <span className="tb-footer-tagline">BUILT WITHOUT COMPROMISE</span>
            
            <p className="tb-footer-desc">
              Premium construction services in Jacksonville, FL. Specializing in kitchen 
              remodeling, bathroom renovation, and flooring installation. Licensed, 
              insured, and locally trusted.
            </p>

            <div className="tb-footer-contacts">
              <div className="tb-contact-item">
                <div className="tb-contact-icon"><Phone size={18} /></div>
                <div className="tb-contact-text">
                  <span className="label">CALL US</span>
                  <a href="tel:9042994364" className="value">(904) 299-4364</a>
                </div>
              </div>
              <div className="tb-contact-item">
                <div className="tb-contact-icon"><MessageCircle size={18} /></div>
                <div className="tb-contact-text">
                  <span className="label">WHATSAPP</span>
                  <a href="#" className="value">Message Us</a>
                </div>
              </div>
              <div className="tb-contact-item">
                <div className="tb-contact-icon"><MapPin size={18} /></div>
                <div className="tb-contact-text">
                  <span className="label">LOCATION</span>
                  <span className="value">Jacksonville, FL 32257</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Link Columns */}
          <div className="tb-footer-right">
            <div className="tb-footer-col">
              <h4 className="tb-footer-title">SERVICES</h4>
              <ul className="tb-footer-links">
                <li><a href="#">Kitchen Remodeling</a></li>
                <li><a href="#">Bathroom Renovation</a></li>
                <li><a href="#">Flooring Installation</a></li>
              </ul>
            </div>
            <div className="tb-footer-col">
              <h4 className="tb-footer-title">COMPANY</h4>
              <ul className="tb-footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>

              <ul className="tb-footer-badges">
                <li><Check size={14} className="gold" /> LICENSED & INSURED</li>
                <li><Check size={14} className="gold" /> 3 YEARS IN BUSINESS</li>
                <li><Check size={14} className="gold" /> LOCAL TO JACKSONVILLE</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="tb-footer-bottom">
          <p className="tb-copy">
            © 2026 LD REMODELING. BUILT WITHOUT COMPROMISE.
          </p>
          <div className="tb-footer-legal">
            <a href="#">PRIVACY</a>
            <a href="#">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
