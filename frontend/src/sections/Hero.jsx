import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import KineticText from '../components/KineticText';
import MagneticButton from '../components/MagneticButton';
import '../styles/Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityInfo = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="hero-kinetic">
      <div className="haze-top"></div>
      
      <div className="hero-bg-container">
        <motion.div style={{ y: yBg }} className="hero-bg-parallax">
          <div className="hero-noise"></div>
          <img 
            src="/LD Remodeling  images/imgi_15_4914-Bramhope-Lane-Ellicott-large-016-024-Kitchen-1500x1000-72dpi.jpg" 
            alt="Luxury" 
            className="hero-background-image"
          />
        </motion.div>
      </div>

      <div className="hero-kinetic-content">
        <div className="kinetic-container-top">
          <KineticText text="LD REMODELING" direction="left" />
        </div>
        
        <motion.div style={{ opacity: opacityInfo }} className="container hero-main-info-grid">
          <div className="info-col-left">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="brutalist-title-v2"
            >
              WE BUILD <br />
              <span className="blackletter highlight">The Heat</span>
            </motion.h1>
          </div>
          
          <div className="info-col-right">
            <div className="info-content-box">
              <p className="hero-editorial-p">
                Jacksonville's premier high-energy home transformation studio. 
                Stripping away the ordinary and building the extraordinary.
              </p>
              <div className="hero-cta-row">
                <MagneticButton>
                  <a href="#contact" className="btn btn-primary">Start a Project</a>
                </MagneticButton>
                <div className="scroll-reveal-indicator">
                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="dot-indicator"
                  ></motion.div>
                  <span>Glide Down</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="kinetic-container-bottom">
          <KineticText text="JACKSONVILLE FL" direction="right" />
        </div>
      </div>

      <div className="haze-bottom"></div>
    </section>
  );
};

export default Hero;
