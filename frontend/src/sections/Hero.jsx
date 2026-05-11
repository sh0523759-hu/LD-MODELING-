import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import '../styles/Hero.css';

const slides = [
  {
    id: 1,
    title: "Elevate Your Kitchen Experience",
    description: "Transform your culinary space with Jacksonville's premier luxury home renovation specialists.",
    image: "/LD Remodeling  images/imgi_60_Whitekitchenwithnewislandcountertop.webp",
    badge: "Expert Kitchen Remodeling",
    highlight: "Kitchen"
  },
  {
    id: 2,
    title: "Luxury Bathroom Sanctuary",
    description: "Create your personal spa retreat with high-end fixtures and bespoke design solutions.",
    image: "/LD Remodeling  images/imgi_17_our_renovations_bathroom_02.jpg",
    badge: "Premium Bathrooms",
    highlight: "Bathroom"
  },
  {
    id: 3,
    title: "Complete Home Transformations",
    description: "Bringing your vision to life through precision craftsmanship and innovative design.",
    image: "/LD Remodeling  images/imgi_12_our_renovations_full_01.jpg",
    badge: "Full Home Remodeling",
    highlight: "Home"
  }
];

const Hero = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Wider thresholds for more deliberate scrolling
    if (latest < 0.35) {
      if (index !== 0) setIndex(0);
    } else if (latest < 0.75) {
      if (index !== 1) setIndex(1);
    } else {
      if (index !== 2) setIndex(2);
    }
  });

  return (
    <div ref={containerRef} className="hero-scroll-root">
      <div className="hero-sticky-element">
        {/* Images Container */}
        <div className="hero-images-layer">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="hero-img-full-view"
            >
              <img src={slides[index].image} alt="Luxury Home" />
              <div className="hero-dark-overlay"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Container */}
        <div className="container hero-content-overlay">
          <AnimatePresence mode="wait">
            <motion.div 
              key={slides[index].id}
              className="hero-text-modern-box"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <span className="gold-badge">{slides[index].badge}</span>
              <h1 className="modern-h1">
                {slides[index].title.split(slides[index].highlight)[0]}
                <span className="gold">{slides[index].highlight}</span>
                {slides[index].title.split(slides[index].highlight)[1]}
              </h1>
              <p className="modern-p">{slides[index].description}</p>
              <div className="modern-btns">
                <a href="#contact" className="btn btn-primary btn-icon">Start Your Project <ChevronRight size={18} /></a>
                <a href="#portfolio" className="btn btn-outline-light-modern">Our Portfolio</a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vertical Progress */}
        <div className="hero-v-progress">
          {slides.map((_, i) => (
            <div key={i} className={`progress-bar ${index === i ? 'active' : ''}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
