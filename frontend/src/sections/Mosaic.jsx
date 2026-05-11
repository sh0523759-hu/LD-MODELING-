import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Mosaic.css';

const images = [
  "/LD Remodeling  images/imgi_58_Full-View-of-Whole-Floor-Remodel-_-Compelling-Homes.webp",
  "/LD Remodeling  images/imgi_61_The-Lake-House-5.webp",
  "/LD Remodeling  images/imgi_59_DS77374-Final-web-copy-scaled-1.webp",
  "/LD Remodeling  images/imgi_53_kitchen-renovations-nyc.webp"
];

const Mosaic = () => {
  return (
    <section className="mosaic-section">
      <div className="container">
        <div className="mosaic-grid-layout">
          <motion.div 
            className="mosaic-info"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <span className="subtitle">Design Inspiration</span>
            <h2>A Sanctuary For <span className="highlight">Every Room</span></h2>
            <p>From the heart of the kitchen to the tranquil retreat of the bath, we create spaces that reflect your unique lifestyle and personality.</p>
          </motion.div>

          <div className="mosaic-gallery">
            {images.map((img, i) => (
              <motion.div 
                key={i}
                className={`mosaic-img-box box-${i}`}
                initial={{ 
                  opacity: 0, 
                  y: 100, 
                  rotateY: 30,
                  scale: 0.8 
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateY: 0,
                  scale: 1 
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 1, 
                  delay: i * 0.2,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 40px 80px rgba(182, 145, 82, 0.2)"
                }}
              >
                <img src={img} alt="Lifestyle" loading="lazy" />
                <div className="mosaic-overlay-gold"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mosaic;
