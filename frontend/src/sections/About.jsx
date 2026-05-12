import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import KineticText from '../components/KineticText';
import MagneticButton from '../components/MagneticButton';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-brutalist section-padding">
      <div className="haze-top"></div>
      
      <div className="container">
        <div className="brutalist-grid-refined">
          <div className="grid-left-col">
            <ScrollReveal direction="left">
              <span className="blackletter highlight" style={{ fontSize: "2rem" }}>Integrity</span>
              <h2 className="brutalist-heading-v2">
                WE GUT <br />
                ORDINARY <br />
                <span className="hollow-text">HOMES</span>
              </h2>
            </ScrollReveal>
            
            <div className="brutalist-info-divider">
              <ScrollReveal delay={0.3}>
                <p className="brutalist-editorial-p">
                  LD Remodeling isn't just a construction company. We are a high-energy 
                  design studio dedicated to stripping away the mundane and building 
                  the extraordinary. Our work is precise, our impact is massive.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="brutalist-cta-box">
                  <MagneticButton>
                    <a href="#portfolio" className="btn btn-outline">Our History</a>
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid-right-col">
            <ScrollReveal direction="right" delay={0.4}>
              <div className="brutalist-frame">
                <img src="/LD Remodeling  images/imgi_11_portf10-copyright.jpg" alt="Impact" className="brutalist-main-img" />
                <div className="frame-overlay-text">
                  <span className="since">EST 2010</span>
                </div>
              </div>
            </ScrollReveal>
            
            <div className="stats-brutalist-row">
              <div className="stat-unit">
                <span className="unit-num">15</span>
                <span className="unit-label">YEARS</span>
              </div>
              <div className="stat-unit">
                <span className="unit-num">500+</span>
                <span className="unit-label">PROJECTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-parallax-text">
        <KineticText text="UNCOMPROMISING PRECISION " direction="right" />
      </div>

      <div className="haze-bottom"></div>
    </section>
  );
};

export default About;
