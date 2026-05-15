import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Transformation.css';

const transformations = [
  {
    title: "MODERN KITCHEN REVEAL",
    meta: "KITCHEN — 24 DAYS — $52K",
    img: "/LD Remodeling  images/imgi_60_Whitekitchenwithnewislandcountertop.webp"
  },
  {
    title: "LUXURY BATH OASIS",
    meta: "BATHROOM — 12 DAYS — $28K",
    img: "/LD Remodeling  images/imgi_14_UCS-Woodbridge-Kitchen-by-Craig-4-of-31-scaled-1.jpg"
  },
  {
    title: "OPEN CONCEPT LIVING",
    meta: "LIVING SPACE — 18 DAYS — $45K",
    img: "/LD Remodeling  images/imgi_58_Full-View-of-Whole-Floor-Remodel-_-Compelling-Homes.webp"
  }
];

const Transformation = () => {
  return (
    <section className="tb-transformation-vertical">
      <div className="container">
        <motion.div 
          className="tb-transformation-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="tb-transformation-title">
            <span className="highlight">TRANSFORMATION.</span>
          </h2>
        </motion.div>

        <div className="tb-transformation-list">
          {transformations.map((item, index) => (
            <motion.div 
              key={index} 
              className="tb-transformation-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="tb-transformation-img-wrap">
                <img src={item.img} alt={item.title} className="tb-transformation-img" />
              </div>
              <div className="tb-transformation-info">
                <span className="tb-transformation-meta">{item.meta}</span>
                <h3 className="tb-transformation-card-title">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformation;
