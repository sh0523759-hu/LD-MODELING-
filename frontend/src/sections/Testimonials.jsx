import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Testimonials.css';

const reviews = [
  {
    text: "LD Remodeling transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible and they finished ahead of schedule.",
    highlight: "kitchen",
    name: "SARAH M.",
    location: "ARLINGTON, FL"
  },
  {
    text: "From the first consultation to the final reveal, their team was professional, clean, and genuinely cared about quality. Best contractors in Jacksonville.",
    highlight: "contractors",
    name: "MICHAEL T.",
    location: "JACKSONVILLE BEACH, FL"
  },
  {
    text: "Fixed price. On-time delivery. No surprises. That's what you get with LD Remodeling.",
    highlight: "Fixed price",
    name: "JENNIFER L.",
    location: "PONTE VEDRA, FL"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[activeIndex];

  // Highlight the keyword in gold italic
  const renderText = (text, highlight) => {
    const idx = text.indexOf(highlight);
    if (idx === -1) return `"${text}"`;
    return (
      <>
        "{text.substring(0, idx)}
        <span className="tb-quote-highlight">{highlight}</span>
        {text.substring(idx + highlight.length)}"
      </>
    );
  };

  return (
    <section className="tb-quotes-section">
      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="tb-quote-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            <div className="tb-quote-marks">"</div>
            <p className="tb-quote-text">
              {renderText(review.text, review.highlight)}
            </p>
            <span className="tb-quote-author">
              — {review.name} / {review.location}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="tb-quote-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`tb-quote-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
