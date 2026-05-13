import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import '../styles/HorizontalProjects.css';

const projects = [
  { id: 1, img: "/LD Remodeling  images/imgi_11_portf10-copyright.jpg", category: "Gourmet Transformation", title: "The Master Chef's Suite" },
  { id: 2, img: "/LD Remodeling  images/imgi_13_portf14-copyright-890x664-1.jpg", category: "Spa Sanctuary", title: "Ethereal Marble Retreat" },
  { id: 3, img: "/LD Remodeling  images/imgi_14_UCS-Woodbridge-Kitchen-by-Craig-4-of-31-scaled-1.jpg", category: "Modern Culinary", title: "Minimalist Oak Kitchen" },
  { id: 4, img: "/LD Remodeling  images/imgi_15_4914-Bramhope-Lane-Ellicott-large-016-024-Kitchen-1500x1000-72dpi.jpg", category: "Living Horizon", title: "The Open Vista Studio" },
  { id: 5, img: "/LD Remodeling  images/imgi_12_our_renovations_full_01.jpg", category: "Full Estate", title: "Complete Home Overhaul" },
];

const HorizontalProjects = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(projects.length - 1) * 100}vw`]);
  const x = useSpring(xTransform, { stiffness: 100, damping: 20 });

  return (
    <section ref={sectionRef} className="portfolio-kinetic-root" style={{ minHeight: `${projects.length * 100}vh` }}>
      <div className="portfolio-sticky-box force-sticky">
        <div className="portfolio-header-floating">
          <span className="subtitle-gold">Selected Works</span>
          <h2 className="display-font">The Portfolio</h2>
        </div>

        <motion.div style={{ x }} className="portfolio-track-kinetic">
          {projects.map((project, index) => (
            <div key={project.id} className="portfolio-kinetic-slide">
              <motion.div 
                className="portfolio-layout-dual"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="portfolio-info-col">
                  <span className="kinetic-cat">{project.category}</span>
                  <h3 className="kinetic-title">{project.title}</h3>
                  <p className="kinetic-p">
                    A masterclass in modern renovation. We combined industrial precision with high-end luxury materials to create an impact that lasts.
                  </p>
                  <a href="#contact" className="kinetic-link">
                    <span>Enquire About Project</span>
                  </a>
                </div>
                <div className="portfolio-visual-col">
                  <div className="portfolio-img-box">
                    <img src={project.img} alt={project.title} className="kinetic-img" />
                    <div className="kinetic-overlay"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalProjects;
