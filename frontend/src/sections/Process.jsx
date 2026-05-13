import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Process.css';

const steps = [
  {
    title: "Initial Consultation",
    desc: "A deep dive into your project ambition, architectural needs, and lifestyle requirements."
  },
  {
    title: "Concept & Design",
    desc: "Meticulous planning with 3D visualizations and curated material palettes for your approval."
  },
  {
    title: "Precision Execution",
    desc: "Our master craftsmen bring the architectural vision to life with uncompromising attention to detail."
  },
  {
    title: "Final Revelation",
    desc: "A curated walkthrough of your transformed space, ensuring every finish meets our luxury standard."
  }
];

const Process = () => {
  return (
    <section className="process-fancy section-padding">
      <div className="container">
        <div className="process-header-fancy text-center mb-4">
          <span className="subtitle-gold">Our Method</span>
          <h2 className="display-title">The Path to Perfection</h2>
        </div>

        <div className="fancy-process-list">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="fancy-process-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="process-num-col">
                <span className="process-num">0{index + 1}</span>
              </div>
              <div className="process-text-col">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
