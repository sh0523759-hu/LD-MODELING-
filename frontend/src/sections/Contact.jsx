import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import KineticText from '../components/KineticText';
import MagneticButton from '../components/MagneticButton';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-brutalist">
      <div className="haze-top"></div>
      
      <div className="contact-kinetic-header">
        <KineticText text="GET IN TOUCH " direction="left" />
      </div>

      <div className="container contact-main-grid">
        <div className="contact-info-col">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="contact-text-box"
          >
            <h2 className="brutalist-contact-title">
              LET'S BUILD <br />
              <span className="blackletter highlight">Extraordinary</span> <br />
              TOGETHER
            </h2>
            <p className="contact-intro-p">
              Ready to start your home transformation? Contact us today for a free, no-obligation consultation.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <span className="detail-label">Call Us</span>
                <a href="tel:9042994364" className="detail-value">(904) 299-4364</a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Email Us</span>
                <a href="mailto:Ldremodelingjacksonville@gmail.com" className="detail-value">Ldremodelingjacksonville@gmail.com</a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Visit Us</span>
                <span className="detail-value">Jacksonville, Florida</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="contact-form-col">
          <motion.form 
            className="brutalist-form"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="input-row">
              <div className="field-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="field-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="input-row">
              <div className="field-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="(904) 000-0000" required />
              </div>
              <div className="field-group">
                <label>Project Type</label>
                <input type="text" placeholder="Kitchen, Bath, Full Home" required />
              </div>
            </div>

            <div className="field-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your dream project..." rows="4"></textarea>
            </div>

            <div className="form-submit-row">
              <MagneticButton>
                <button type="submit" className="btn btn-primary btn-submit">
                  SEND MESSAGE <ArrowRight size={20} />
                </button>
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>

      <div className="haze-bottom"></div>
    </section>
  );
};

export default Contact;
