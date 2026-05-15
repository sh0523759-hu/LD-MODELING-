import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '../styles/Commercial.css';

const commercialServices = [
  "OFFICES", "RESTAURANTS", "RETAIL",
  "MEDICAL / DENTAL", "HOSPITALITY", "WAREHOUSE"
];

const Commercial = () => {
  return (
    <section className="tb-commercial">
      <div className="container">
        <motion.div 
          className="tb-commercial-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="tb-commercial-pre">BEYOND RESIDENTIAL</span>
          <h2 className="tb-commercial-title">
            WE BUILD<br />
            <span className="highlight">BUSINESSES.</span>
          </h2>
        </motion.div>

        <div className="tb-commercial-grid">
          {commercialServices.map((service, i) => (
            <motion.div 
              key={service}
              className="tb-commercial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="tb-commercial-name">{service}</span>
              <ArrowRight className="tb-commercial-arrow" size={18} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="tb-commercial-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a href="#contact" className="tb-commercial-link">
            VIEW ALL COMMERCIAL SERVICES <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Commercial;
