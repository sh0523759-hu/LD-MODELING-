import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Neighborhoods.css';

const locations = [
  "JACKSONVILLE", "JACKSONVILLE BEACH", "ATLANTIC BEACH", "NEPTUNE BEACH",
  "PONTE VEDRA", "PONTE VEDRA BEACH", "SAN MARCO", "RIVERSIDE",
  "AVONDALE", "ORTEGA", "MANDARIN", "SOUTHSIDE"
];

const Neighborhoods = () => {
  return (
    <section className="tb-neighborhoods" id="about">
      <div className="container">
        <motion.div 
          className="tb-neighborhoods-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="tb-neighborhoods-title">
            WE BUILD IN<br />
            <span className="highlight">JACKSONVILLE.</span>
          </h2>
        </motion.div>

        <div className="tb-neighborhoods-grid">
          {locations.map((loc, i) => (
            <motion.div 
              key={loc}
              className="tb-neighborhood-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="tb-neighborhood-name">{loc}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="tb-neighborhoods-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="tb-neighborhood-hint">
            Your neighborhood not listed? <i>We make exceptions for exceptional projects.</i>
          </p>
          <a href="#contact-section" className="btn btn-outline-gold">CONTACT US</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Neighborhoods;
