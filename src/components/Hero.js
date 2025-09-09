// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants for the container to orchestrate children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Each child will animate 0.3s after the previous one
      },
    },
  };

  // Animation variants for each text element
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    // This 'hero' class will be styled in globals.css
    <section className="hero" id="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          <div>CyberSec Practitioner</div>
          <div>Community Leader</div>
        </motion.h1>

        <motion.p className="mission-statement" variants={itemVariants}>
          Blending hands-on digital forensics with leadership at CyberVulnX to not only solve today's security challenges but also empower the next generation of defenders.
        </motion.p>

        <motion.div className="cta-buttons" variants={itemVariants}>
          <a href="#projects" className="cta-button">View My Projects</a>
          {/* Add a link to your actual resume file in the public folder later */}
          <a href="/Kaivalya-Parihar-Resume.pdf" download className="cta-button secondary">Download Resume</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;