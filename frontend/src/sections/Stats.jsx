import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import '../styles/Stats.css';

const stats = [
  { label: "Years Experience", value: 12, suffix: "+" },
  { label: "Projects Completed", value: 450, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
  { label: "Expert Craftsmen", value: 25, suffix: "+" }
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const motionValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000
  });

  const displayValue = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    } else {
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <motion.div 
              key={index} 
              className="stat-item-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="stat-number">
                <Counter value={item.value} suffix={item.suffix} />
              </h2>
              <p className="stat-label">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
