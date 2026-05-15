import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/ProjectGallery.css';

const projects = [
  {
    img: "/LD Remodeling  images/imgi_11_portf10-copyright.jpg",
    category: "KITCHEN",
    days: "22 DAYS",
    price: "$48K",
    title: "MARBLE KITCHEN"
  },
  {
    img: "/LD Remodeling  images/imgi_13_portf14-copyright-890x664-1.jpg",
    category: "BATHROOM",
    days: "4 DAYS",
    price: "$18K",
    title: "TILE PERFECTION"
  },
  {
    img: "/LD Remodeling  images/imgi_8_rir-remodeling-on-a-budget-scaled-1.jpg",
    category: "FLOORING",
    days: "6 DAYS",
    price: "$12K",
    title: "HERRINGBONE FLOORS"
  },
  {
    img: "/LD Remodeling  images/imgi_14_UCS-Woodbridge-Kitchen-by-Craig-4-of-31-scaled-1.jpg",
    category: "BATHROOM",
    days: "5 DAYS",
    price: "$25K",
    title: "MASTER BATH SPA"
  }
];

const ProjectGallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="tb-gallery-sticky-wrapper">
      <div className="tb-gallery-sticky-content">
        <div className="container">
          <motion.div 
            className="tb-gallery-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="tb-gallery-title">
              <span className="highlight">GALLERY.</span>
            </h2>
          </motion.div>
        </div>

        <div className="tb-gallery-horizontal-container">
          <motion.div style={{ x }} className="tb-gallery-track">
            {projects.map((project, index) => (
              <div key={index} className="tb-gallery-card">
                <div className="tb-gallery-card-img-wrap">
                  <img src={project.img} alt={project.title} className="tb-gallery-card-img" />
                  <div className="tb-gallery-card-overlay">
                    <div className="tb-gallery-card-info">
                      <span className="tb-gallery-meta">
                        {project.category} — {project.days} — {project.price}
                      </span>
                      <h3 className="tb-gallery-card-title">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
