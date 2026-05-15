import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="tb-contact section-padding">
      <div className="container">
        <div className="tb-contact-grid">
          {/* Left - Info */}
          <div className="tb-contact-info">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="subtitle-gold">Get In Touch</span>
              <h2 className="tb-contact-title">
                TELL US WHAT<br />
                YOU'RE <span className="highlight">BUILDING.</span>
              </h2>
              <p className="tb-contact-desc">
                Every extraordinary project starts with a conversation. 
                Let's discuss your vision and how we can bring it to life.
              </p>

              <div className="tb-contact-methods">
                <div className="tb-method">
                  <span className="tb-method-label">Direct Line</span>
                  <a href="tel:9042994364" className="tb-method-value">(904) 299-4364</a>
                </div>
                <div className="tb-method">
                  <span className="tb-method-label">Email</span>
                  <a href="mailto:Ldremodelingjacksonville@gmail.com" className="tb-method-value">
                    Ldremodelingjacksonville@gmail.com
                  </a>
                </div>
                <div className="tb-method">
                  <span className="tb-method-label">Location</span>
                  <span className="tb-method-value">Jacksonville, Florida</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <div className="tb-contact-form-wrap">
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="tb-form"
            >
              <div className="tb-form-row">
                <div className="tb-form-field">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="tb-form-field">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="tb-form-row">
                <div className="tb-form-field">
                  <label>Service Needed</label>
                  <select required>
                    <option value="">Select a service</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="flooring">Flooring Installation</option>
                    <option value="adu">ADU</option>
                    <option value="painting">Painting</option>
                    <option value="decks">Decks & Patios</option>
                    <option value="commercial">Commercial</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="tb-form-field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="(904) 000-0000" />
                </div>
              </div>

              <div className="tb-form-field">
                <label>Project Details</label>
                <textarea placeholder="Tell us about your project..." rows="4"></textarea>
              </div>

              <button type="submit" className="btn btn-primary tb-submit-btn">
                Submit Request <ArrowRight size={16} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
