import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Disciplines.css';

const disciplines = [
  { name: "KITCHENS", href: "#services", side: "left", img: "/LD Remodeling  images/imgi_60_Whitekitchenwithnewislandcountertop.webp" },
  { name: "BATHROOMS", href: "#services", side: "right", img: "/LD Remodeling  images/imgi_17_our_renovations_bathroom_02.jpg" },
  { name: "FLOORS", href: "#services", side: "left", img: "/LD Remodeling  images/imgi_58_Full-View-of-Whole-Floor-Remodel-_-Compelling-Homes.webp" },
  { name: "PAINTING", href: "#services", side: "right", img: "/LD Remodeling  images/imgi_20_Expect-From-House-Painting.jpg" },
  { name: "ADU", href: "#services", side: "left", img: "/LD Remodeling  images/imgi_23_barrington-family-addition-remodel-advance-design-studio-1.jpg" },
  { name: "DECKS", href: "#services", side: "right", img: "/LD Remodeling  images/imgi_21_Patio_Decks_750px_00022.jpg" },
];

const Disciplines = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  
  // Default background image when no item is hovered
  const defaultBg = "/LD Remodeling  images/imgi_58_Full-View-of-Whole-Floor-Remodel-_-Compelling-Homes.webp";

  return (
    <section className="tb-disciplines">
      {/* Background Image Overlay */}
      <div 
        className="tb-disciplines-bg-image tb-disciplines-bg-default"
        style={{ backgroundImage: `url('${defaultBg}')` }}
      />
      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            key={hoveredImage}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="tb-disciplines-bg-image"
            style={{ backgroundImage: `url('${hoveredImage}')` }}
          />
        )}
      </AnimatePresence>

      <div className="tb-disciplines-inner">
        <div className="tb-disciplines-grid">
          {/* Left Column */}
          <div className="tb-disc-col tb-disc-left">
            {disciplines.filter(d => d.side === 'left').map((disc, i) => (
              <motion.div
                key={disc.name}
                className="tb-disc-link"
                onMouseEnter={() => setHoveredImage(disc.img)}
                onMouseLeave={() => setHoveredImage(null)}
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
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="tb-disc-col tb-disc-right">
            {disciplines.filter(d => d.side === 'right').map((disc, i) => (
              <motion.div
                key={disc.name}
                className="tb-disc-link"
                onMouseEnter={() => setHoveredImage(disc.img)}
                onMouseLeave={() => setHoveredImage(null)}
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
              </motion.div>
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
