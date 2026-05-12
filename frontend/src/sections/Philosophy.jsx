import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ShieldCheck, Heart, Zap } from 'lucide-react';
import '../styles/Philosophy.css';

const values = [
  {
    icon: <ShieldCheck size={40} strokeWidth={1} />,
    title: "Uncompromising Integrity",
    desc: "We believe in honest communication, transparent pricing, and doing the job right the first time."
  },
  {
    icon: <Heart size={40} strokeWidth={1} />,
    title: "Passion for Detail",
    desc: "Our craftsmen are obsessed with the little things that turn a good house into a great home."
  },
  {
    icon: <Zap size={40} strokeWidth={1} />,
    title: "Innovative Solutions",
    desc: "We use the latest technology and materials to solve complex remodeling challenges with ease."
  }
];

const Philosophy = () => {
  return (
    <section className="philosophy-editorial">
      <div className="container">
        <ScrollReveal>
          <div className="section-header-centered">
            <span className="subtitle">Core Values</span>
            <h2 className="editorial-heading">Built on <span className="serif-italic">Trust</span></h2>
          </div>
        </ScrollReveal>

        <div className="values-editorial-grid">
          {values.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="value-editorial-card">
                <div className="value-icon-box">{item.icon}</div>
                <h3 className="value-title">{item.title}</h3>
                <p className="value-desc">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
