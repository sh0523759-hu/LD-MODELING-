import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';

const KineticText = ({ text, speed = 1, direction = "left", className = "" }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Base horizontal movement
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["0%", "-30%"] : ["-30%", "0%"]
  );

  // Velocity-based skew for extra "energy"
  const scrollVelocity = useVelocity(scrollYProgress);
  const skewBase = useTransform(scrollVelocity, [-0.5, 0.5], [-20, 20]);
  const skew = useSpring(skewBase, { stiffness: 100, damping: 20 });

  return (
    <div ref={targetRef} className={`kinetic-text-wrapper ${className}`} style={{ overflow: "hidden", width: "100%", position: "relative" }}>
      <motion.div 
        style={{ x: xTranslate, skewX: skew, display: "inline-block", whiteSpace: "nowrap" }} 
        className="massive-header"
      >
        {text} {text} {text}
      </motion.div>
    </div>
  );
};

export default KineticText;
