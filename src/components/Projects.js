// src/components/Projects.js
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };
  const galleryItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <section className="projects-section" id="projects">
        <h2>Projects</h2>

        {/* --- PROJECT 1: Beach Cleaning Robot --- */}
        <div className="project-item">
          <div className="project-visual">
            <div className="sticky-content">
              <div className="project-mockup">
                <motion.div
                  className="mockup-gallery-horizontal"
                  variants={galleryContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {['/img1.jpg', '/img2.jpg'].map((src) => (
                    <motion.div
                      className="gallery-image-container"
                      key={src}
                      variants={galleryItem}
                      onClick={() => setSelectedImg(src)}
                      style={{ cursor: 'pointer' }}
                      layoutId={src}
                    >
                      <Image src={src} alt="Beach Cleaning Robot Screenshot" layout="fill" objectFit="cover" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          <div className="project-details">
            <h3>Beach Cleaning Robot</h3>
            <div className="details-card card">
              <h4>Role & Objective</h4>
              <p>Designed and built the mechanical structure of an automated robot to collect waste from beaches using a conveyor system.</p>
            </div>
            <div className="details-card card">
              <h4>Tech Stack</h4>
              <p>Mechanical Design Principles, Motors, Conveyor Systems.</p>
            </div>
          </div>
        </div>

        {/* --- PROJECT 2: Pathfinding Visualizer (Restored) --- */}
        <div className="project-item">
          <div className="project-visual">
            <div className="sticky-content">
              <div className="project-mockup">
                <motion.div
                  className="mockup-gallery"
                  variants={galleryContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {['/algo_1.png', '/algo_2.png', '/algo_3.png'].map((src) => (
                    <motion.div
                      className="gallery-image-container"
                      key={src}
                      variants={galleryItem}
                      onClick={() => setSelectedImg(src)}
                      style={{ cursor: 'pointer' }}
                      layoutId={src}
                    >
                      <Image src={src} alt="Pathfinding Visualizer Screenshot" layout="fill" objectFit="cover" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          <div className="project-details">
            <h3>Pathfinding Visualizer</h3>
            <div className="details-card card">
              <h4>Role & Objective</h4>
              <p>
                {"Developed an interactive tool to visually demonstrate pathfinding algorithms like Dijkstra's, A*, and BFS for educational purposes."}
              </p>
            </div>
            <div className="details-card card">
              <h4>Tech Stack</h4>
              <p>Python, JavaScript, Algorithm Design, Data Structures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="lightbox-backdrop"
            onClick={() => setSelectedImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={selectedImg}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              <Image src={selectedImg} alt="Enlarged view" width={1200} height={675} objectFit="contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;