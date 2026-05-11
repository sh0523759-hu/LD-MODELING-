import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Services.css';

const services = [
  {
    title: "Kitchen Remodeling",
    image: "/LD Remodeling  images/imgi_16_kitchen-remodel-company.jpg",
    description: "Transform your culinary space into a modern masterpiece with our custom cabinetry and high-end finishes."
  },
  {
    title: "Bathroom Renovation",
    image: "/LD Remodeling  images/imgi_17_our_renovations_bathroom_02.jpg",
    description: "Create your personal spa retreat with luxury fixtures, custom tiling, and expert lighting design."
  },
  {
    title: "Full Home Remodel",
    image: "/LD Remodeling  images/imgi_12_our_renovations_full_01.jpg",
    description: "Reimagine your entire living environment with our comprehensive renovation services."
  },
  {
    title: "Outdoor Living",
    image: "/LD Remodeling  images/imgi_24_Beautiful-Outdoor-Living-Spaces-10-1-Kindesign.jpg",
    description: "Extend your living space outdoors with custom decks, patios, and outdoor kitchen solutions."
  }
];

const Services = () => {
  return (
    <section id="services" className="services-modern">
      <div className="container">
        <motion.div 
          className="section-title-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle">Our Expertise</span>
          <h2 className="section-title">Premium <span className="highlight">Remodeling</span> Services</h2>
          <p className="section-desc">From concept to completion, we deliver excellence in every detail of your home renovation project.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              className="service-card-modern" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="img-holder">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="card-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="card-footer">
                  <a href="#contact" className="text-link">Explore Service</a>
                  <div className="arrow">→</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
