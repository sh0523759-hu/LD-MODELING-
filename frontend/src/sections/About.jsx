import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="about-modern">
      <div className="container about-flex">
        <motion.div 
          className="about-visuals"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Image Container */}
          <motion.div 
            className="image-main-wrapper"
            animate={{ 
              scale: isHovered ? 0.9 : 1,
              opacity: isHovered ? 0.6 : 1,
              x: isHovered ? -20 : 0
            }}
            transition={{ duration: 0.6, ease: "circOut" }}
          >
            <img src="/LD Remodeling  images/imgi_11_portf10-copyright.jpg" alt="About LD Remodeling" className="img-main" loading="lazy" />
            <div className="experience-badge">
              <span className="num">15+</span>
              <span className="text">Years</span>
            </div>
          </motion.div>

          {/* Accent Image Container (The one that becomes big) */}
          <motion.div 
            className="image-accent-wrapper"
            animate={{ 
              width: isHovered ? '85%' : '50%',
              height: isHovered ? '500px' : '300px',
              bottom: isHovered ? '50px' : '-40px',
              right: isHovered ? '-20px' : '0',
              zIndex: isHovered ? 20 : 5
            }}
            transition={{ duration: 0.6, ease: "circOut" }}
          >
            <img src="/LD Remodeling  images/imgi_12_our_renovations_full_01.jpg" alt="Craftsmanship" className="img-accent" loading="lazy" />
            {isHovered && (
              <motion.div 
                className="accent-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Premium Quality
              </motion.div>
            )}
          </motion.div>
        </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <span className="subtitle">Luxury Craftsmanship</span>
          <h2>The Jacksonville Standard For <span className="highlight">Home Remodeling</span></h2>
          <p className="lead">We don't just renovate houses; we build the backdrop for your family's most precious memories.</p>
          <p className="desc">
            LD Remodeling has spent over a decade perfecting the art of home transformation. Our team of skilled designers and craftsmen work in harmony to deliver results that exceed expectations, every single time.
          </p>

          <div className="benefits-list">
            {[
              "Dedicated Project Management",
              "Premium Quality Materials",
              "Transparent Pricing & Timelines"
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                className="benefit-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
              >
                <CheckCircle className="check-icon" size={20} />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.a 
            href="#contact" 
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Full Story
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
