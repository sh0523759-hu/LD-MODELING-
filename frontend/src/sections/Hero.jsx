import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.08]);

  return (
    <section ref={containerRef} className="tb-hero">
      {/* Background Image */}
      <div className="tb-hero-bg">
        <motion.div style={{ y: yBg, scale }} className="tb-hero-img-wrap">
          <div className="tb-hero-overlay"></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="tb-hero-video"
          >
            <source src="/LD Remodeling  images/hero vido.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* Hero Content - BUILT WITHOUT COMPROMISE centered */}
      <motion.div style={{ opacity }} className="tb-hero-content">
        <div className="tb-hero-center">
          <div className="mask-overflow">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="tb-hero-line"
            >
              BUILT
            </motion.span>
          </div>
          <div className="mask-overflow">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="tb-hero-line"
            >
              WITHOUT
            </motion.span>
          </div>
          <div className="mask-overflow">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="tb-hero-line tb-hero-line-last"
            >
              COMPROMISE<span className="tb-gold-dot">.</span>
            </motion.span>
          </div>
          
          <motion.div 
            className="tb-hero-static-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            REMODELING • DESIGN • BUILD • KITCHENS • BATHROOMS • ADDITIONS • FLOORING • CUSTOM HOMES
          </motion.div>
        </div>

        {/* Bottom: Scroll line + tag */}
        <div className="tb-hero-bottom">
          <motion.div 
            className="tb-hero-scroll-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
          <motion.span 
            className="tb-hero-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            PREMIUM CONSTRUCTION — JACKSONVILLE, FL
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
