import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import '../styles/ServiceDeck.css';

const services = [
  {
    id: "01",
    title: "Gourmet Kitchens",
    desc: "The heart of your home, re-engineered for performance and elegance. We specialize in high-end culinary environments that combine industrial precision with residential luxury.",
    img: "/LD Remodeling  images/imgi_11_portf10-copyright.jpg",
    features: ["Custom Cabinetry", "Stone Countertops", "High-End Appliances"]
  },
  {
    id: "02",
    title: "Spa-Grade Bathrooms",
    desc: "Personal sanctuaries that blend modern utility with timeless luxury. High-contrast materials and avant-garde fixtures for your private retreat.",
    img: "/LD Remodeling  images/imgi_13_portf14-copyright-890x664-1.jpg",
    features: ["Smart Showers", "Free-standing Tubs", "Custom Vanities"]
  },
  {
    id: "03",
    title: "Full Home Overhauls",
    desc: "Complete architectural transformations. We strip away the ordinary and build your dream home from the studs up with uncompromising quality.",
    img: "/LD Remodeling  images/imgi_12_our_renovations_full_01.jpg",
    features: ["Structural Changes", "New Layouts", "Interior Architecture"]
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div 
      className="sticky-card-fancy"
      style={{ top: `calc(8vh + ${index * 25}px)` }}
    >
      <div className="card-inner-fancy">
        <div className="card-left-fancy">
          <span className="card-id-fancy">{service.id}</span>
          <h3 className="card-title-fancy">{service.title}</h3>
          <p className="card-desc-fancy">{service.desc}</p>
          <ul className="card-features-fancy">
            {service.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <div className="card-action-fancy">
            <MagneticButton>
              <a href="#contact" className="btn btn-primary small-btn">Choose Service</a>
            </MagneticButton>
          </div>
        </div>
        <div className="card-right-fancy">
          <img src={service.img} alt={service.title} className="card-img-fancy" />
          <div className="card-img-overlay"></div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceDeck = () => {
  return (
    <section className="service-deck-kinetic section-padding">
      <div className="container">
        <div className="deck-header-fancy text-center mb-4">
          <span className="subtitle-gold">Tailored Solutions</span>
          <h2 className="display-title">Select Your Transformation</h2>
          <p className="deck-intro-p">
            Choose the service that fits your vision. Our craftsmen handle <br />
            every detail with uncompromising precision.
          </p>
        </div>

        <div className="sticky-cards-stack">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDeck;
