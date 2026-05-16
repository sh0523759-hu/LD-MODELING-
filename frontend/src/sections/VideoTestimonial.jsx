import React from 'react';
import { motion } from 'framer-motion';
import '../styles/VideoTestimonial.css';

const VideoTestimonial = () => {
  return (
    <section className="tb-video-section">
      <div className="container">
        {/* Quote only — video removed */}
        <motion.div 
          className="tb-video-quote-section tb-video-quote-centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="tb-video-quote-mark">"</span>
          <p className="tb-video-quote">
            I just had LD Remodeling come out to do a remodel on my kitchen. 
            Very professional, very good job. They did it quick, fast and affordable.
          </p>
          <span className="tb-video-author">
            — SATISFIED CUSTOMER / JACKSONVILLE, FL / Kitchen Remodel
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonial;

