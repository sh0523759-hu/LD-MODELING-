import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Services.css';

const services = [
  {
    id: 'kitchen',
    number: '01',
    name: 'Kitchen',
    tagline: 'Culinary Spaces, Redefined',
    description: 'From sleek modern kitchens to warm traditional designs — we handle cabinetry, countertops, islands, backsplashes, and full gut renovations.',
    img: '/LD Remodeling  images/imgi_60_Whitekitchenwithnewislandcountertop.webp',
    tags: ['Cabinetry', 'Countertops', 'Islands', 'Backsplash'],
  },
  {
    id: 'bathrooms',
    number: '02',
    name: 'Bathrooms',
    tagline: 'Luxury Spa. Your Home.',
    description: 'Transform your bathroom into a sanctuary. We specialize in custom tile work, vanities, walk-in showers, soaking tubs, and complete renovations.',
    img: '/LD Remodeling  images/imgi_13_portf14-copyright-890x664-1.jpg',
    tags: ['Custom Tile', 'Vanities', 'Walk-in Showers', 'Soaking Tubs'],
  },
  {
    id: 'flooring',
    number: '03',
    name: 'Flooring',
    tagline: 'The Foundation of Style',
    description: 'Hardwood, luxury vinyl plank, tile, or carpet — we install all flooring types with precision. Includes subfloor prep, transitions, and finishing.',
    img: '/LD Remodeling  images/imgi_58_Full-View-of-Whole-Floor-Remodel-_-Compelling-Homes.webp',
    tags: ['Hardwood', 'Luxury Vinyl', 'Tile', 'Carpet'],
  },
  {
    id: 'adu',
    number: '04',
    name: 'ADU',
    tagline: 'Accessory Dwelling Units',
    description: 'Add value to your property with a fully permitted ADU. Garage conversions, backyard studios, in-law suites — built to code, built to last.',
    img: '/LD Remodeling  images/imgi_23_barrington-family-addition-remodel-advance-design-studio-1.jpg',
    tags: ['Garage Conversion', 'In-law Suite', 'Studio', 'Permitted'],
  },
  {
    id: 'painting',
    number: '05',
    name: 'Painting',
    tagline: 'Color Changes Everything',
    description: 'Interior and exterior painting done right. We prep every surface, use premium paints, and deliver a flawless finish that lasts for years.',
    img: '/LD Remodeling  images/imgi_20_Expect-From-House-Painting.jpg',
    tags: ['Interior', 'Exterior', 'Premium Paint', 'Prep & Finish'],
  },
  {
    id: 'decks',
    number: '06',
    name: 'Decks & Patios',
    tagline: 'Outdoor Living, Elevated',
    description: 'Custom decks, covered patios, pergolas, and outdoor living spaces. We build with composite, wood, or concrete to match your vision.',
    img: '/LD Remodeling  images/imgi_21_Patio_Decks_750px_00022.jpg',
    tags: ['Custom Decks', 'Patios', 'Pergolas', 'Composite & Wood'],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="tb-services" id="services">
      <div className="tb-services-inner">

        {/* Header */}
        <motion.div
          className="tb-services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle-gold">WHAT WE DO</span>
          <h2 className="tb-services-title">
            OUR <span className="highlight">SERVICES</span>
          </h2>
          <p className="tb-services-subtitle">
            Premium craftsmanship across every trade. Licensed, insured, and locally trusted in Jacksonville.
          </p>
        </motion.div>

        {/* Desktop Layout: List + Image */}
        <div className="tb-services-body">

          {/* Left: Service List */}
          <div className="tb-services-list">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className={`tb-service-row ${activeService.id === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="tb-service-num">{service.number}</span>
                <div className="tb-service-row-info">
                  <h3 className="tb-service-name">{service.name}</h3>
                  <p className="tb-service-tagline">{service.tagline}</p>
                </div>
                <span className="tb-service-arrow">→</span>
              </motion.div>
            ))}
          </div>

          {/* Right: Active Image + Info */}
          <div className="tb-services-preview">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                className="tb-services-preview-inner"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="tb-services-img-wrap">
                  <img
                    src={activeService.img}
                    alt={activeService.name}
                    className="tb-services-img"
                  />
                  <div className="tb-services-img-overlay">
                    <span className="tb-services-img-num">{activeService.number}</span>
                  </div>
                </div>
                <div className="tb-services-detail">
                  <h3 className="tb-services-detail-title">{activeService.name}</h3>
                  <p className="tb-services-detail-desc">{activeService.description}</p>
                  <div className="tb-services-tags">
                    {activeService.tags.map(tag => (
                      <span key={tag} className="tb-service-tag">{tag}</span>
                    ))}
                  </div>
                  <a href="#contact-section" className="btn btn-primary tb-services-cta">
                    GET A FREE QUOTE →
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Cards */}
        <div className="tb-services-mobile-cards">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="tb-service-mobile-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="tb-service-mobile-img-wrap">
                <img src={service.img} alt={service.name} className="tb-service-mobile-img" />
                <div className="tb-service-mobile-overlay">
                  <span className="tb-service-mobile-num">{service.number}</span>
                  <h3 className="tb-service-mobile-name">{service.name}</h3>
                </div>
              </div>
              <div className="tb-service-mobile-body">
                <p className="tb-service-mobile-tagline">{service.tagline}</p>
                <p className="tb-service-mobile-desc">{service.description}</p>
                <div className="tb-services-tags">
                  {service.tags.map(tag => (
                    <span key={tag} className="tb-service-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="tb-services-mobile-cta">
            <a href="#contact-section" className="btn btn-primary">GET A FREE QUOTE →</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
