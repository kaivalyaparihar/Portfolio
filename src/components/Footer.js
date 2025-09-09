// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>&copy; 2025 Kaivalya Parihar. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/kaivalya-parihar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/kaivalya._26/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;