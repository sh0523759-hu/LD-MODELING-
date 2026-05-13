import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import '../styles/Testimonials.css';

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Riverside Estate",
    text: "LD Remodeling completely transformed our kitchen. The attention to detail and craftsmanship is unparalleled. We couldn't be happier with the results!",
  },
  {
    name: "Michael Chen",
    role: "San Marco Penthouse",
    text: "Professional, timely, and high-quality work. They handled our full home renovation with ease and kept us informed every step of the way.",
  },
  {
    name: "Emily Davis",
    role: "Interior Designer",
    text: "As a designer, I'm very picky about execution. LD Remodeling exceeded my expectations on every level. Truly Jacksonville's best team.",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-fancy section-padding">
      <div className="container">
        <motion.div 
          className="fancy-testimonials-header text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="subtitle-gold">Client Experience</span>
          <h2 className="display-title">Kind Words From Our Clients</h2>
        </motion.div>

        <div className="fancy-testimonials-grid">
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              className="fancy-testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="fancy-quote-top"><Quote size={30} strokeWidth={1} /></div>
              <p className="fancy-testimonial-text">"{review.text}"</p>
              <div className="fancy-testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{review.name}</h4>
                  <span className="author-role">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
