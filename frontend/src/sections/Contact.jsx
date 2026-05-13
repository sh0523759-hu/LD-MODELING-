import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-fancy section-padding">
      <div className="container">
        <div className="contact-grid-fancy">
          <div className="contact-info-fancy">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="subtitle-gold">Connect With Us</span>
              <h2 className="contact-title-fancy">
                Ready to Start Your <br />
                <span className="highlight">Transformation?</span>
              </h2>
              <p className="contact-desc-fancy">
                Every extraordinary project starts with a conversation. Let's discuss your vision and how we can bring it to life.
              </p>

              <div className="fancy-contact-methods">
                <div className="method-item">
                  <span className="method-label">Direct Line</span>
                  <a href="tel:9042994364" className="method-link">(904) 299-4364</a>
                </div>
                <div className="method-item">
                  <span className="method-label">Digital Correspondence</span>
                  <a href="mailto:Ldremodelingjacksonville@gmail.com" className="method-link">Ldremodelingjacksonville@gmail.com</a>
                </div>
                <div className="method-item">
                  <span className="method-label">Base of Operations</span>
                  <span className="method-link">Jacksonville, Florida</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="contact-form-fancy">
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="fancy-form-box"
            >
              <div className="fancy-input-row">
                <div className="fancy-field">
                  <label>Your Name</label>
                  <input type="text" placeholder="Johnathan Doe" required />
                </div>
                <div className="fancy-field">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="fancy-input-row">
                <div className="fancy-field">
                  <label>Inquiry Type</label>
                  <select required>
                    <option value="">Select a service</option>
                    <option value="kitchen">Gourmet Kitchen</option>
                    <option value="bathroom">Spa-Grade Bathroom</option>
                    <option value="full">Full Home Overhaul</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div className="fancy-field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="(904) 000-0000" />
                </div>
              </div>

              <div className="fancy-field">
                <label>Project Ambition</label>
                <textarea placeholder="Describe your dream project..." rows="4"></textarea>
              </div>

              <div className="form-action-fancy">
                <MagneticButton>
                  <button type="submit" className="btn btn-primary btn-full">
                    Begin Transformation <ArrowRight size={18} />
                  </button>
                </MagneticButton>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
