import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, width = "100%", direction = "up" }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 60 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      scale: 1
    }
  };

  return (
    <div style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ 
          duration: 1.2, 
          delay: delay,
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
