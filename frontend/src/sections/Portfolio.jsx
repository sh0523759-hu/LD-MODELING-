import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Portfolio.css';

const projects = [
  { id: 1, img: "/LD Remodeling  images/imgi_11_portf10-copyright.jpg", category: "Kitchen Remodel", title: "Luxury Culinary Haven" },
  { id: 2, img: "/LD Remodeling  images/imgi_13_portf14-copyright-890x664-1.jpg", category: "Bathroom", title: "Modern Spa Retreat" },
  { id: 3, img: "/LD Remodeling  images/imgi_14_UCS-Woodbridge-Kitchen-by-Craig-4-of-31-scaled-1.jpg", category: "Kitchen", title: "Traditional Elegance" },
  { id: 4, img: "/LD Remodeling  images/imgi_15_4914-Bramhope-Lane-Ellicott-large-016-024-Kitchen-1500x1000-72dpi.jpg", category: "Living Room", title: "Open Concept Living" },
  { id: 5, img: "/LD Remodeling  images/imgi_17_our_renovations_bathroom_02.jpg", category: "Bathroom", title: "Minimalist Bath" },
  { id: 6, img: "/LD Remodeling  images/imgi_12_our_renovations_full_01.jpg", category: "Full Home", title: "Modern Transformation" },
  { id: 7, img: "/LD Remodeling  images/imgi_24_Beautiful-Outdoor-Living-Spaces-10-1-Kindesign.jpg", category: "Outdoor", title: "Premium Patio" },
  { id: 8, img: "/LD Remodeling  images/imgi_22_65681fcd86634b2777d7a119_64efef4f0cd076eeeb142e5b_harty-whole-home-remodel-living.jpg", category: "Living Room", title: "Cozy Masterpiece" },
  { id: 9, img: "/LD Remodeling  images/imgi_16_kitchen-remodel-company.jpg", category: "Kitchen", title: "Chef's Dream" },
];

const Portfolio = () => {
  // Animation variants for Left, Center, Right entries
  const getVariants = (index) => {
    const position = index % 3;
    if (position === 0) { // Left
      return {
        hidden: { opacity: 0, x: -150, rotateY: -20 },
        visible: { opacity: 1, x: 0, rotateY: 0 }
      };
    } else if (position === 1) { // Center
      return {
        hidden: { opacity: 0, y: 150, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 }
      };
    } else { // Right
      return {
        hidden: { opacity: 0, x: 150, rotateY: 20 },
        visible: { opacity: 1, x: 0, rotateY: 0 }
      };
    }
  };

  return (
    <section id="portfolio" className="portfolio-modern-refined">
      <div className="container">
        <motion.div 
          className="section-title-wrapper text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">Our Work</span>
          <h2 className="section-title">A Legacy Of <span className="highlight">Quality</span></h2>
          <p className="section-desc">Explore our recent projects and see how we've transformed homes across Jacksonville.</p>
        </motion.div>

        <div className="portfolio-grid-masonry">
          {projects.map((project, index) => {
            const variants = getVariants(index);
            return (
              <motion.div 
                className="portfolio-item-3d-wrapper" 
                key={project.id}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: (index % 3) * 0.1 }}
                style={{ perspective: "1200px" }}
              >
                <motion.div 
                  className="portfolio-item-refined"
                  whileHover={{ 
                    rotateY: (index % 3 === 0) ? 10 : (index % 3 === 2) ? -10 : 0,
                    rotateX: 5,
                    translateZ: 50,
                    scale: 1.02
                  }}
                >
                  <div className="portfolio-img-box-refined">
                    <img src={project.img} alt={project.title} />
                    <div className="portfolio-overlay-refined">
                      <div className="overlay-content">
                        <span className="project-category-refined">{project.category}</span>
                        <h3 className="project-title-refined">{project.title}</h3>
                        <button className="view-btn-refined">View Project</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="portfolio-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="#" className="btn btn-primary">Load More Inspiration</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
