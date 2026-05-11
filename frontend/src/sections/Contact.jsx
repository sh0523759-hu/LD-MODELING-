import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-modern-v2">
      <div className="container">
        <div className="contact-grid-modern">
          <motion.div 
            className="contact-info-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="subtitle">Contact Us</span>
            <h2>Let's Build <span className="highlight">Something Extraordinary</span> Together</h2>
            <p>Ready to start your home transformation? Contact us today for a free, no-obligation consultation.</p>

            <div className="info-cards">
              <div className="info-card-item">
                <div className="icon-box"><Phone size={24} /></div>
                <div className="details">
                  <span className="label">Call Us</span>
                  <a href="tel:9042994364">(904) 299-4364</a>
                </div>
              </div>
              <div className="info-card-item">
                <div className="icon-box"><Mail size={24} /></div>
                <div className="details">
                  <span className="label">Email Us</span>
                  <a href="mailto:Ldremodelingjacksonville@gmail.com">Ldremodelingjacksonville@gmail.com</a>
                </div>
              </div>
              <div className="info-card-item">
                <div className="icon-box"><MapPin size={24} /></div>
                <div className="details">
                  <span className="label">Visit Us</span>
                  <span>Jacksonville, Florida</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="luxury-form">
              <div className="form-row">
                <div className="input-group">
                  <motion.input 
                    type="text" placeholder="Full Name" required 
                    whileFocus={{ y: -5, borderColor: '#b69152' }}
                  />
                </div>
                <div className="input-group">
                  <motion.input 
                    type="email" placeholder="Email Address" required 
                    whileFocus={{ y: -5, borderColor: '#b69152' }}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <motion.input 
                    type="tel" placeholder="Phone Number" required 
                    whileFocus={{ y: -5, borderColor: '#b69152' }}
                  />
                </div>
                <div className="input-group">
                  <motion.input 
                    type="text" placeholder="Project Type" required 
                    whileFocus={{ y: -5, borderColor: '#b69152' }}
                  />
                </div>
              </div>
              <div className="input-group">
                <motion.textarea 
                  placeholder="Tell us about your dream project..." rows="5" required 
                  whileFocus={{ y: -5, borderColor: '#b69152' }}
                />
              </div>
              <motion.button 
                type="submit" 
                className="btn btn-primary btn-full btn-icon-v2"
                whileHover={{ scale: 1.02, backgroundColor: '#a07d40' }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <Send size={20} />   
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
