import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Hero.css';

const slides = [
  {
    image: "/LD Remodeling  images/imgi_15_4914-Bramhope-Lane-Ellicott-large-016-024-Kitchen-1500x1000-72dpi.jpg",
    badge: "Luxury Craftsmanship",
    title: "Elevate Your <span class='gold'>Kitchen</span> Experience",
    desc: "Transform your culinary space with Jacksonville's premier luxury home renovation specialists."
  },
  {
    image: "/LD Remodeling  images/imgi_14_UCS-Woodbridge-Kitchen-by-Craig-4-of-31-scaled-1.jpg",
    badge: "Modern Living",
    title: "Bespoke <span class='gold'>Home</span> Transformations",
    desc: "We don't just renovate houses; we build the backdrop for your family's most precious memories."
  },
  {
    image: "/LD Remodeling  images/imgi_11_portf10-copyright.jpg",
    badge: "Design Excellence",
    title: "Where <span class='gold'>Vision</span> Meets Reality",
    desc: "LD Remodeling has spent over a decade perfecting the art of high-end home transformation."
  }
];

const Hero = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollDistance = -rect.top;
      const totalScrollable = rect.height - window.innerHeight;
      
      // Calculate progress between 0 and 1
      const scrollProgress = Math.max(0, Math.min(1, scrollDistance / totalScrollable));
      
      if (scrollProgress < 0.33) {
        setIndex(0);
      } else if (scrollProgress < 0.66) {
        setIndex(1);
      } else {
        setIndex(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="hero-scroll-root" style={{ position: 'relative' }}>
      <div className="hero-sticky-element">
        {/* Background Layer */}
        <div className="hero-images-layer">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              className="hero-img-full-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={slides[index].image} alt="Background" />
              <div className="hero-dark-overlay"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Layer */}
        <div className="container hero-content-overlay">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              className="hero-text-modern-box"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <span className="gold-badge">{slides[index].badge}</span>
              <h1 
                className="modern-h1"
                dangerouslySetInnerHTML={{ __html: slides[index].title }}
              />
              <p className="modern-p">{slides[index].desc}</p>
              <div className="modern-btns">
                <button className="btn btn-primary">Start Your Project</button>
                <button className="btn btn-portfolio-white">Our Portfolio</button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="hero-v-progress">
          {slides.map((_, i) => (
            <div key={i} className={`progress-bar ${index === i ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
