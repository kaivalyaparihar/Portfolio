// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-container">
        {/* LEFT COLUMN: YOUR TEXT */}
        <motion.div 
          className="hero-text-container" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1>
            <motion.div variants={itemVariants}>Code.</motion.div>
            <motion.div variants={itemVariants}>Design.</motion.div>
            <motion.div variants={itemVariants}>Communicate.</motion.div>
          </motion.h1>
          <motion.p className="mission-statement" variants={itemVariants}>
            Your versatile partner for <strong>secure development</strong>, <strong>modern branding</strong>, and <strong>data-driven content</strong> that empowers and engages your audience.
          </motion.p>
          <motion.div className="cta-buttons" variants={itemVariants}>
            <a href="#projects" className="cta-button">View My Projects</a>
            <a href="/Kaivalya-Parihar-Resume.pdf" download className="cta-button secondary">Download Resume</a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: YOUR IMAGE */}
        <div className="hero-image-container">
          <Image 
            src="/DP transparent.png"
            alt="Kaivalya Parihar" 
            layout="fill" 
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;