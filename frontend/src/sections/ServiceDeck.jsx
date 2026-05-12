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
  const cardRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Fun scroll-based effects
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

  return (
    <div ref={cardRef} className="sticky-card-box" style={{ top: `${150 + index * 40}px` }}>
      <motion.div 
        style={{ scale, rotate }}
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
          <motion.img 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={service.img} 
            alt={service.title} 
            className="card-img" 
          />
        </div>
      </motion.div>
    </div>
  );
};

const ServiceDeck = () => {
  return (
    <div className="service-deck-root">
      <div className="haze-top"></div>
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
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
      <div className="haze-bottom"></div>
    </div>
  );
};

export default ServiceDeck;
