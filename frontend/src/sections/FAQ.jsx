import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import '../styles/FAQ.css';

const faqs = [
  {
    question: "How long does a typical kitchen remodel take?",
    answer: "A standard kitchen remodel usually takes between 4 to 8 weeks, depending on the scope of work and material availability."
  },
  {
    question: "Do I need a permit for my home renovation?",
    answer: "Yes, most structural, electrical, and plumbing changes in Jacksonville require permits. We handle all the permitting processes for you."
  },
  {
    question: "Can I stay in my home during the remodeling process?",
    answer: "In many cases, yes. However, for full home or major kitchen renovations, it might be more comfortable to arrange alternative living situations for a few weeks."
  },
  {
    question: "What is your warranty policy?",
    answer: "We provide a comprehensive 1-year warranty on all our craftsmanship, in addition to manufacturer warranties on materials used."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-content">
            <span className="subtitle">Common Questions</span>
            <h2>Frequently Asked <span className="highlight">Questions</span></h2>
            <p>Everything you need to know about starting your home renovation journey with us.</p>
            <a href="#contact" className="btn btn-primary">Still have questions?</a>
          </div>
          
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button 
                  className="faq-question" 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
