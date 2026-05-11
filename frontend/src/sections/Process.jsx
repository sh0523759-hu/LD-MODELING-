import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, PencilRuler, Hammer, Sparkles } from 'lucide-react';
import '../styles/Process.css';

const steps = [
  {
    icon: <ClipboardList size={32} />,
    title: "Consultation",
    desc: "We meet with you to discuss your vision, budget, and project requirements."
  },
  {
    icon: <PencilRuler size={32} />,
    title: "Design & Plan",
    desc: "Our designers create detailed 3D renderings and material selections for approval."
  },
  {
    icon: <Hammer size={32} />,
    title: "Construction",
    desc: "Our expert craftsmen bring the design to life with precision and care."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Final Walkthrough",
    desc: "We ensure every detail is perfect and hand over your newly transformed space."
  }
];

const Process = () => {
  return (
    <section className="process-section">
      <div className="container">
        <motion.div 
          className="section-title-wrapper text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">How We Work</span>
          <h2>Our <span className="highlight">Simple</span> Process</h2>
        </motion.div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="process-step-3d"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                rotateY: 15, 
                rotateX: -5,
                translateZ: 20,
                scale: 1.05
              }}
              style={{ perspective: "1000px" }}
            >
              <div className="step-card-3d">
                <div className="icon-wrapper-3d">
                  {step.icon}
                  <div className="step-number-3d">{index + 1}</div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="connector-3d"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
