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

const getCardConfig = (index, layoutMode) => {
  const configs = {
    mobile: [
      { initialX: 0, finalX: -100, scale: 1.0, finalScale: 0.9, zIndex: 10 },  // Card 0 (Kitchen) - topmost
      { initialX: 0, finalX: 100, scale: 1.0, finalScale: 0.9, zIndex: 9 },   // Card 1 (Bathrooms)
      { initialX: 0, finalX: -100, scale: 1.0, finalScale: 0.9, zIndex: 8 },  // Card 2 (Flooring)
      { initialX: 0, finalX: 100, scale: 1.0, finalScale: 0.9, zIndex: 7 },   // Card 3 (ADU)
      { initialX: 0, finalX: -100, scale: 1.0, finalScale: 0.9, zIndex: 6 },  // Card 4 (Painting)
      { initialX: 0, finalX: 100, scale: 1.0, finalScale: 0.9, zIndex: 5 },   // Card 5 (Decks) - bottommost
    ],
    tablet: [
      { initialX: -30, finalX: -100, scale: 0.6, finalScale: 0.45, zIndex: 8 },
      { initialX: -15, finalX: -70, scale: 0.8, finalScale: 0.65, zIndex: 9 },
      { initialX: 0, finalX: 0, scale: 1.0, finalScale: 1.05, zIndex: 10 },     // Center (stays in mid)
      { initialX: 15, finalX: 70, scale: 0.8, finalScale: 0.65, zIndex: 9 },
      { initialX: 30, finalX: 100, scale: 0.6, finalScale: 0.45, zIndex: 8 },
      { initialX: 38, finalX: 130, scale: 0.5, finalScale: 0.35, zIndex: 7 },
    ],
    desktop: [
      { initialX: -40, finalX: -140, scale: 0.6, finalScale: 0.45, zIndex: 8 },
      { initialX: -20, finalX: -100, scale: 0.8, finalScale: 0.65, zIndex: 9 },
      { initialX: 0, finalX: 0, scale: 1.0, finalScale: 1.05, zIndex: 10 },     // Center (stays in mid)
      { initialX: 20, finalX: 100, scale: 0.8, finalScale: 0.65, zIndex: 9 },
      { initialX: 40, finalX: 140, scale: 0.6, finalScale: 0.45, zIndex: 8 },
      { initialX: 50, finalX: 180, scale: 0.5, finalScale: 0.35, zIndex: 7 },
    ]
  };
  return configs[layoutMode][index];
};

const getCardScrollRange = (index, layoutMode) => {
  if (layoutMode === 'mobile') {
    const ranges = [
      [0.0, 0.20],  // Card 0 (Kitchen - goes first)
      [0.15, 0.35], // Card 1 (Bathrooms - goes second)
      [0.30, 0.50], // Card 2 (Flooring - goes third)
      [0.45, 0.65], // Card 3 (ADU - goes fourth)
      [0.60, 0.80], // Card 4 (Painting - goes fifth)
      [0.75, 0.95], // Card 5 (Decks - goes last)
    ];
    return ranges[index];
  }
  return [0, 1];
};

const ServiceCard = ({ service, index, scrollYProgress, layoutMode }) => {
  const config = getCardConfig(index, layoutMode);

  const initialX = `${config.initialX}vw`;
  const finalX = `${config.finalX}vw`;
  const initialScale = config.scale;
  const finalScale = config.finalScale;

  const scrollRange = getCardScrollRange(index, layoutMode);

  const x = useTransform(scrollYProgress, scrollRange, [initialX, finalX]);
  const scale = useTransform(scrollYProgress, scrollRange, [initialScale, finalScale]);

  // Compute opacity range dynamically to satisfy React's Rules of Hooks (no conditional hook calls)
  const opacityInputRange = layoutMode === 'mobile' 
    ? scrollRange 
    : (index === 2 ? [0, 1] : [0, 0.85]);

  const opacityOutputRange = layoutMode === 'mobile'
    ? [1, 0]
    : (index === 2 ? [1, 1] : [1, 0]);

  const opacity = useTransform(scrollYProgress, opacityInputRange, opacityOutputRange);

  return (
    <motion.div 
      className="tb-service-stack-card"
      style={{
        x,
        scale,
        opacity,
        zIndex: config.zIndex
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
  const [layoutMode, setLayoutMode] = React.useState('desktop');

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setLayoutMode('mobile');
      } else if (width < 1024) {
        setLayoutMode('tablet');
      } else {
        setLayoutMode('desktop');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
              layoutMode={layoutMode}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
