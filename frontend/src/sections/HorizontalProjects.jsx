import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import KineticText from '../components/KineticText';
import '../styles/HorizontalProjects.css';

const projects = [
  { id: 1, img: "/LD Remodeling  images/imgi_11_portf10-copyright.jpg", category: "Kitchen", title: "THE CULINARY MASTER" },
  { id: 2, img: "/LD Remodeling  images/imgi_13_portf14-copyright-890x664-1.jpg", category: "Bathroom", title: "THE MODERN RETREAT" },
  { id: 3, img: "/LD Remodeling  images/imgi_14_UCS-Woodbridge-Kitchen-by-Craig-4-of-31-scaled-1.jpg", category: "Kitchen", title: "TRADITIONAL ELEGANCE" },
  { id: 4, img: "/LD Remodeling  images/imgi_15_4914-Bramhope-Lane-Ellicott-large-016-024-Kitchen-1500x1000-72dpi.jpg", category: "Living", title: "THE OPEN HORIZON" },
  { id: 5, img: "/LD Remodeling  images/imgi_12_our_renovations_full_01.jpg", category: "Renovation", title: "COMPLETE OVERHAUL" },
  { id: 6, img: "/LD Remodeling  images/imgi_14_UCS-Woodbridge-Kitchen-by-Craig-4-of-31-scaled-1.jpg", category: "Custom", title: "BESPOKE FINISHES" },
];

const HorizontalProjects = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(projects.length - 1) * 100}vw`]);

  return (
    <section ref={sectionRef} className="horizontal-kinetic-root" style={{ background: '#050505', minHeight: `${projects.length * 100}vh` }}>
      <div className="horizontal-sticky-box force-sticky">
        <div className="bg-kinetic-text" style={{ opacity: 0.1 }}>
          <KineticText text="PORTFOLIO " direction="left" />
        </div>
        
        <motion.div style={{ x }} className="horizontal-items-row">
          {projects.map((project) => (
            <div key={project.id} className="horizontal-item-card-kinetic">
              <div className="project-layout-side">
                <div className="item-img-container-side">
                  <img src={project.img} alt={project.title} className="vibrant-img" />
                </div>
                <div className="item-text-side">
                  <span className="item-cat">{project.category}</span>
                  <h3 className="item-title-massive">{project.title}</h3>
                  <p className="item-desc-short">High-energy transformation built for modern impact.</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="bg-kinetic-text-bottom" style={{ opacity: 0.1 }}>
          <KineticText text="SHOWCASE " direction="right" />
        </div>
      </div>
    </section>
  );
};

export default HorizontalProjects;
