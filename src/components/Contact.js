// src/components/Contact.js
import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="social-links">
            <a href="mailto:kaivalya.parihar@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/kaivalya-parihar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/kaivalya._26/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <form 
          action="https://formspree.io/f/xwpnyodj" // <-- PASTE YOUR FORMSPREE URL HERE
          method="POST" 
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;