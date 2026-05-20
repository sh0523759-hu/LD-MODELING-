import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/Services.css';

const services = [
  {
    id: 'kitchen',
    number: '01',
    name: 'Kitchen',
    tagline: 'Culinary Spaces',
    img: '/LD Remodeling  images/imgi_60_Whitekitchenwithnewislandcountertop.webp',
  },
  {
    id: 'bathrooms',
    number: '02',
    name: 'Bathrooms',
    tagline: 'Luxury Spa',
    img: '/LD Remodeling  images/imgi_17_our_renovations_bathroom_02.jpg',
  },
  {
    id: 'flooring',
    number: '03',
    name: 'Flooring',
    tagline: 'Foundation of Style',
    img: '/LD Remodeling  images/imgi_58_Full-View-of-Whole-Floor-Remodel-_-Compelling-Homes.webp',
  },
  {
    id: 'adu',
    number: '04',
    name: 'ADU',
    tagline: 'Accessory Dwelling',
    img: '/LD Remodeling  images/imgi_23_barrington-family-addition-remodel-advance-design-studio-1.jpg',
  },
  {
    id: 'painting',
    number: '05',
    name: 'Painting',
    tagline: 'Color Changes',
    img: '/LD Remodeling  images/imgi_20_Expect-From-House-Painting.jpg',
  },
  {
    id: 'decks',
    number: '06',
    name: 'Decks',
    tagline: 'Outdoor Living',
    img: '/LD Remodeling  images/imgi_21_Patio_Decks_750px_00022.jpg',
  },
];

const ServiceCard = ({ service, index, scrollYProgress, isMobile }) => {
  // We have 6 cards:
  // Card 0 (far left) -> moves further left
  // Card 1 (near left) -> moves left
  // Card 2 (center-left) -> moves slightly left to center focus
  // Card 3 (center-right) -> moves slightly right to center focus
  // Card 4 (near right) -> moves right
  // Card 5 (far right) -> moves further right

  let initialX, finalX, initialScale, finalScale, initialOpacity, finalOpacity;
  const multX = isMobile ? 0.35 : 1.0; // scale down horizontal translation on mobile to fit screen

  if (index === 0) {
    initialX = `${-46 * multX}vw`; finalX = "-140vw";
    initialScale = isMobile ? 0.75 : 0.72; finalScale = 0.55;
    initialOpacity = 1; finalOpacity = 0;
  } else if (index === 1) {
    initialX = `${-23 * multX}vw`; finalX = "-100vw";
    initialScale = isMobile ? 0.88 : 0.86; finalScale = 0.7;
    initialOpacity = 1; finalOpacity = 0;
  } else if (index === 2) {
    initialX = `${-2 * multX}vw`; finalX = isMobile ? "-14vw" : "-22vw";
    initialScale = 1.0; finalScale = isMobile ? 1.02 : 1.05;
    initialOpacity = 1; finalOpacity = 1;
  } else if (index === 3) {
    initialX = `${2 * multX}vw`; finalX = isMobile ? "14vw" : "22vw";
    initialScale = 1.0; finalScale = isMobile ? 1.02 : 1.05;
    initialOpacity = 1; finalOpacity = 1;
  } else if (index === 4) {
    initialX = `${23 * multX}vw`; finalX = "100vw";
    initialScale = isMobile ? 0.88 : 0.86; finalScale = 0.7;
    initialOpacity = 1; finalOpacity = 0;
  } else if (index === 5) {
    initialX = `${46 * multX}vw`; finalX = "140vw";
    initialScale = isMobile ? 0.75 : 0.72; finalScale = 0.55;
    initialOpacity = 1; finalOpacity = 0;
  }

  const x = useTransform(scrollYProgress, [0, 1], [initialX, finalX]);
  const scale = useTransform(scrollYProgress, [0, 1], [initialScale, finalScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [initialOpacity, finalOpacity]);
  
  // Dynamic rotation for side cards to look like an elegant spread
  const initialRotate = index === 0 ? -6 : index === 1 ? -3 : index === 4 ? 3 : index === 5 ? 6 : 0;
  const finalRotate = index === 0 ? -20 : index === 1 ? -12 : index === 2 ? -2 : index === 3 ? 2 : index === 4 ? 12 : 20;
  const rotate = useTransform(scrollYProgress, [0, 1], [initialRotate, finalRotate]);

  return (
    <motion.div 
      className="tb-service-stack-card"
      style={{
        x,
        rotate,
        scale,
        opacity,
        zIndex: (index === 2 || index === 3) ? 10 : 5 - index
      }}
    >
      <div className="tb-service-stack-img-wrap">
        <img src={service.img} alt={service.name} />
        <div className="tb-service-stack-overlay">
          <span className="tb-service-stack-num">{service.number}</span>
          <h3 className="tb-service-stack-name">{service.name}</h3>
          <p className="tb-service-stack-tagline">{service.tagline}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section className="tb-services-stack-wrapper" id="services" ref={containerRef}>
      <div className="tb-services-sticky">
        
        {/* Header - Stays Fixed or fades out */}
        <motion.div
          className="tb-services-header-centered"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
            y: useTransform(scrollYProgress, [0, 0.2], [0, -50])
          }}
        >
          <span className="subtitle-gold">WHAT WE DO</span>
          <h2 className="tb-services-title">
            OUR <span className="highlight">SERVICES</span>
          </h2>
          <p className="tb-services-subtitle">
            Keep scrolling to explore our expertise
          </p>
        </motion.div>

        {/* Cards container */}
        <div className="tb-services-deck">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              scrollYProgress={scrollYProgress}
              isMobile={isMobile}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
