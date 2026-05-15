import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Disciplines.css';

const disciplines = [
  { name: "KITCHENS", href: "#services", side: "left" },
  { name: "BATHROOMS", href: "#services", side: "right" },
  { name: "FLOORS", href: "#services", side: "left" },
  { name: "PAINTING", href: "#services", side: "right" },
  { name: "ADU", href: "#services", side: "left" },
  { name: "DECKS", href: "#services", side: "right" },
];

const Disciplines = () => {
  return (
    <section className="tb-disciplines">
      <div className="tb-disciplines-inner">
        <div className="tb-disciplines-grid">
          {/* Left Column */}
          <div className="tb-disc-col tb-disc-left">
            {disciplines.filter(d => d.side === 'left').map((disc, i) => (
              <motion.a
                key={disc.name}
                href={disc.href}
                className="tb-disc-link"
              >
                <div className="mask-overflow">
                  <motion.span 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                    className="tb-disc-name"
                  >
                    {disc.name}
                  </motion.span>
                </div>
                <span className="tb-disc-dot">.</span>
              </motion.a>
            ))}
          </div>

          {/* Right Column */}
          <div className="tb-disc-col tb-disc-right">
            {disciplines.filter(d => d.side === 'right').map((disc, i) => (
              <motion.a
                key={disc.name}
                href={disc.href}
                className="tb-disc-link"
              >
                <div className="mask-overflow">
                  <motion.span 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                    className="tb-disc-name"
                  >
                    {disc.name}
                  </motion.span>
                </div>
                <span className="tb-disc-dot">.</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <motion.p 
          className="tb-disciplines-tagline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Seven disciplines. One standard.
        </motion.p>
      </div>
    </section>
  );
};

export default Disciplines;
