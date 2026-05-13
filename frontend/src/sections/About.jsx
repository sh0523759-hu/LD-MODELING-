import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import '../styles/About.css';

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const motionValue = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    } else {
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>{suffix}
    </span>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <section ref={sectionRef} id="about" className="about-fancy section-padding">
      <div className="container">
        <div className="about-grid-fancy">
          <motion.div style={{ y: textY }} className="about-text-content">
            <ScrollReveal direction="left">
              <span className="subtitle-gold">Our Philosophy</span>
              <h2 className="about-title-fancy">
                Elevating the <span className="highlight">Standard</span> of <br />
                Residential Excellence
              </h2>
            </ScrollReveal>
            
            <div className="about-details-fancy">
              <ScrollReveal delay={0.3}>
                <p className="about-p-fancy">
                  LD Remodeling is a premier high-energy transformation studio. 
                  We specialize in stripping away the mundane and engineering 
                  extraordinary living spaces through uncompromising precision 
                  and refined architectural design.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="about-btn-row">
                  <MagneticButton>
                    <a href="#portfolio" className="btn btn-outline">View Portfolio</a>
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>
          </motion.div>

          <div className="about-visual-content">
            <ScrollReveal direction="right" delay={0.4}>
              <div className="fancy-image-frame">
                <motion.img 
                  style={{ y: imgY, scale: 1.1 }}
                  src="/LD Remodeling  images/imgi_11_portf10-copyright.jpg" 
                  alt="Luxury Interior" 
                  className="fancy-about-img" 
                />
                <div className="frame-tag-gold">
                  <span>EST. 2010</span>
                </div>
              </div>
            </ScrollReveal>
            
            <div className="fancy-stats-row">
              <div className="fancy-stat">
                <span className="stat-value">
                  <Counter value={15} suffix="+" />
                </span>
                <span className="stat-name">Years Exp</span>
              </div>
              <div className="fancy-stat">
                <span className="stat-value">
                  <Counter value={500} suffix="+" />
                </span>
                <span className="stat-name">Homes Built</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
