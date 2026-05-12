import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/ServiceDeck.css';

const services = [
  {
    id: "01",
    title: "Master Kitchens",
    desc: "We engineer culinary spaces that blend industrial precision with residential luxury. Every joint, every finish, every detail is built for impact.",
    img: "/LD Remodeling  images/imgi_11_portf10-copyright.jpg"
  },
  {
    id: "02",
    title: "Sanctuary Baths",
    desc: "Transforming utility into an experience. Our bathrooms are curated retreats featuring high-contrast materials and avant-garde fixtures.",
    img: "/LD Remodeling  images/imgi_13_portf14-copyright-890x664-1.jpg"
  },
  {
    id: "03",
    title: "Full Overhauls",
    desc: "Complete residential transformations. We gut the ordinary and build the extraordinary, creating high-energy environments for modern life.",
    img: "/LD Remodeling  images/imgi_12_our_renovations_full_01.jpg"
  }
];

const ServiceCard = ({ service, index }) => {
  const container = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  // Fade in and scale up as it comes into view
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div 
      ref={container}
      style={{ 
        opacity, 
        scale,
        top: `calc(10vh + ${index * 30}px)`, /* Offset each card slightly to see the stack */
        zIndex: index + 1
      }} 
      className="service-card"
    >
      <div className="card-left">
        <span className="card-number">{service.id}</span>
        <h3 className="card-title">{service.title}</h3>
        <p className="card-desc">{service.desc}</p>
        <div className="card-footer">
          <a href="#contact" className="card-link-magnetic">Request Consultation</a>
        </div>
      </div>
      <div className="card-right">
        <img 
          src={service.img} 
          alt={service.title} 
          className="card-img" 
        />
      </div>
    </motion.div>
  );
};

const ServiceDeck = () => {
  return (
    <div className="service-deck-root">
      <div className="container deck-intro-aligned">
        <div className="title-stack">
          <span className="blackletter highlight">The Masterlist</span>
          <h2 className="deck-main-title">CORE SERVICES</h2>
        </div>
        <div className="intro-text-side">
          <p>Uncompromising craftsmanship. Modular precision. <br /> Built for those who demand more from their space.</p>
        </div>
      </div>

      <div className="cards-wrapper">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceDeck;
