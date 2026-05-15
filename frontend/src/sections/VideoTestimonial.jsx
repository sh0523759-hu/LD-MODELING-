import React from 'react';
import { motion } from 'framer-motion';
import '../styles/VideoTestimonial.css';

const VideoTestimonial = () => {
  return (
    <section className="tb-video-section">
      <div className="container">
        {/* Video Box - centered */}
        <motion.div 
          className="tb-video-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            controls
            className="tb-video-player"
          >
            <source src="/LD Remodeling  images/kitchen-testimonial.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Quote below video */}
        <motion.div 
          className="tb-video-quote-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="tb-video-quote">
            "I just had LD Remodeling come out to do a remodel on my kitchen. 
            Very professional, very good job. They did it quick, fast and affordable."
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
