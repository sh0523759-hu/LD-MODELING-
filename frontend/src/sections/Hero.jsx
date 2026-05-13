import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import '../styles/Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.05]);

  return (
    <section ref={containerRef} className="hero-fancy">
      <div className="hero-bg-wrapper">
        <motion.div style={{ y: yBg, scale }} className="hero-image-container">
          <div className="hero-overlay"></div>
          <img 
            src="/LD Remodeling  images/imgi_15_4914-Bramhope-Lane-Ellicott-large-016-024-Kitchen-1500x1000-72dpi.jpg" 
            alt="Luxury Kitchen" 
            className="hero-img"
          />
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="container hero-content-center">
        <div className="hero-text-block">
          <div className="mask-overflow">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="hero-subtitle"
            >
              Jacksonville's Premier Transformation Studio
            </motion.span>
          </div>
          
          <h1 className="hero-main-title">
            <div className="mask-overflow">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                style={{ display: 'block' }}
              >
                Let's Build Something
              </motion.span>
            </div>
            <div className="mask-overflow">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                style={{ display: 'block' }}
              >
                <span className="highlight">Extraordinary</span> Together
              </motion.span>
            </div>
          </h1>

          <div className="mask-overflow">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="hero-p"
            >
              Ready to start your home transformation? Contact us today for a free, <br /> 
              no-obligation consultation and bring your vision to life.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hero-actions"
          >
            <MagneticButton>
              <a href="#services" className="btn btn-primary">Choose Your Service</a>
            </MagneticButton>
            <a href="#contact" className="btn btn-outline">Start Consultation</a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="hero-scroll-tag"
        >
          <span>Scroll to Discover</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
