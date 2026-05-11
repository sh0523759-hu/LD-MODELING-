import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import '../styles/Testimonials.css';

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    text: "LD Remodeling completely transformed our kitchen. The attention to detail and craftsmanship is unparalleled. We couldn't be happier!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Property Investor",
    text: "Professional, timely, and high-quality work. They handled our full home renovation with ease and kept us informed every step of the way.",
    rating: 5
  },
  {
    name: "Emily Davis",
    role: "Interior Designer",
    text: "As a designer, I'm very picky about execution. LD Remodeling exceeded my expectations on every level. Truly Jacksonville's best.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.div 
          className="section-title-wrapper text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">Client Success</span>
          <h2>What Our <span className="highlight">Clients</span> Say</h2>
        </motion.div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="quote-icon"><Quote size={40} /></div>
              <div className="rating">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p>"{review.text}"</p>
              <div className="author">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
