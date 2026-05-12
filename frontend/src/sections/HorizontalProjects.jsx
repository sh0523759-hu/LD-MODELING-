import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import KineticText from '../components/KineticText';
import '../styles/HorizontalProjects.css';

const projects = [
  { id: 1, img: "/LD Remodeling  images/imgi_11_portf10-copyright.jpg", category: "Kitchen", title: "THE CULINARY MASTER" },
  { id: 2, img: "/LD Remodeling  images/imgi_13_portf14-copyright-890x664-1.jpg", category: "Bathroom", title: "THE MODERN RETREAT" },
  { id: 3, img: "/LD Remodeling  images/imgi_14_UCS-Woodbridge-Kitchen-by-Craig-4-of-31-scaled-1.jpg", category: "Kitchen", title: "TRADITIONAL ELEGANCE" },
  { id: 4, img: "/LD Remodeling  images/imgi_15_4914-Bramhope-Lane-Ellicott-large-016-024-Kitchen-1500x1000-72dpi.jpg", category: "Living", title: "THE OPEN HORIZON" },
];

const HorizontalProjects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Increased range to avoid black gap at the end
  const x = useTransform(scrollYProgress, [0, 0.9], ["0%", "-75%"]);

  return (
    <div ref={targetRef} className="horizontal-kinetic-root">
      <div className="horizontal-sticky-box force-sticky">
        <div className="bg-kinetic-text">
          <KineticText text="PORTFOLIO " direction="left" />
        </div>
        
        <motion.div style={{ x }} className="horizontal-items-row">
          {projects.map((project) => (
            <div key={project.id} className="horizontal-item-card-kinetic">
              <div className="item-img-container">
                <img src={project.img} alt={project.title} />
                <div className="item-text-overlay">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="overlay-inner"
                  >
                    <span className="item-cat">{project.category}</span>
                    <h3 className="item-title-massive">{project.title}</h3>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="bg-kinetic-text-bottom">
          <KineticText text="SHOWCASE " direction="right" />
        </div>
      </div>
    </div>
  );
};

export default HorizontalProjects;
