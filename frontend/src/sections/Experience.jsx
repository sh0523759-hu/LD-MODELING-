import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const experienceCards = [
  { id: 1, title: "Kitchen Mastery", img: "/LD Remodeling  images/imgi_11_portf10-copyright.jpg", count: "150+", desc: "Bespoke culinary spaces." },
  { id: 2, title: "Bathroom Luxury", img: "/LD Remodeling  images/imgi_13_portf14-copyright-890x664-1.jpg", count: "200+", desc: "Private spa sanctuaries." },
  { id: 3, title: "Full Home Remodel", img: "/LD Remodeling  images/imgi_12_our_renovations_full_01.jpg", count: "80+", desc: "Whole-home transformations." },
  { id: 4, title: "Custom Cabinetry", img: "/LD Remodeling  images/imgi_60_Whitekitchenwithnewislandcountertop.webp", count: "120+", desc: "Premium wood craftsmanship." },
  { id: 5, title: "Interior Design", img: "/LD Remodeling  images/imgi_14_UCS-Woodbridge-Kitchen-by-Craig-4-of-31-scaled-1.jpg", count: "300+", desc: "Aesthetic vision & planning." },
  { id: 6, title: "Outdoor Living", img: "/LD Remodeling  images/imgi_24_Beautiful-Outdoor-Living-Spaces-10-1-Kindesign.jpg", count: "50+", desc: "Luxury patios & landscapes." },
];

const Experience = () => {
  const [hoveredId, setHoveredId] = useState(1); // Default first one open

  return (
    <section className="experience-accordion">
      <div className="container">
        <motion.div 
          className="section-title-wrapper text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">Our Expertise</span>
          <h2 className="section-title">Decades Of <span className="highlight">Craftsmanship</span></h2>
        </motion.div>

        <div className="accordion-wrapper">
          {experienceCards.map((card, index) => (
            <motion.div 
              key={card.id}
              className={`accordion-card ${hoveredId === card.id ? 'active' : ''}`}
              onMouseEnter={() => setHoveredId(card.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              animate={{ 
                flex: hoveredId === card.id ? 3.5 : 1 
              }}
            >
              <img src={card.img} alt={card.title} className="card-bg" loading="lazy" />
              
              <div className="card-label">
                <span>{card.count}</span>
                <h4>{card.title}</h4>
              </div>

              <div className="card-content">
                <div className="card-text">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
