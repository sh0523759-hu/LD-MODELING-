import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Zap } from 'lucide-react';
import '../styles/Philosophy.css';

const values = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Uncompromising Integrity",
    desc: "We believe in honest communication, transparent pricing, and doing the job right the first time."
  },
  {
    icon: <Heart size={40} />,
    title: "Passion for Detail",
    desc: "Our craftsmen are obsessed with the little things that turn a good house into a great home."
  },
  {
    icon: <Zap size={40} />,
    title: "Innovative Solutions",
    desc: "We use the latest technology and materials to solve complex remodeling challenges with ease."
  }
];

const Philosophy = () => {
  return (
    <section className="philosophy-section">
      <div className="container">
        <motion.div 
          className="section-title-wrapper text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">Why Choose Us</span>
          <h2>A Philosophy of <span className="highlight">Excellence</span></h2>
        </motion.div>

        <div className="values-grid">
          {values.map((item, index) => (
            <motion.div 
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -20,
                boxShadow: "0 40px 80px rgba(182, 145, 82, 0.15)"
              }}
            >
              <div className="icon-circle">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
