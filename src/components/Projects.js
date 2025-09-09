// src/components/Projects.js
import React from 'react';

// You can reuse your .card class for the details
const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>

      {/* --- PROJECT 1: Beach Cleaning Robot --- */}
      <div className="project-item">
        <div className="project-visual">
          <div className="sticky-content">
            <h3>Beach Cleaning Robot</h3>
            <div className="project-mockup">
              {/* You can add a photo of the robot here */}
              <p>Visual of the Robot</p>
            </div>
          </div>
        </div>
        <div className="project-details">
          <div className="details-card card">
            <h4>Role & Objective</h4>
            <p>Designed, built, and tested the mechanical structure of an automated robot to collect waste from beaches using a conveyor system.</p>
          </div>
          <div className="details-card card">
            <h4>Key Features</h4>
            <p>Utilized motors, pulleys, conveyor belts, and hooks for efficient waste collection in sandy conditions.</p>
          </div>
          <div className="details-card card">
            <h4>Tech Stack</h4>
            <p>Mechanical Design Principles, Motors, Conveyor Systems.</p>
          </div>
        </div>
      </div>

      {/* --- PROJECT 2: Pathfinding Visualizer --- */}
      <div className="project-item">
        <div className="project-visual">
          <div className="sticky-content">
            <h3>Pathfinding Visualizer</h3>
            <div className="project-mockup">
              {/* You can add a screenshot of the visualizer here */}
              <p>Screenshot of the Visualizer UI</p>
            </div>
          </div>
        </div>
        <div className="project-details">
          <div className="details-card card">
            <h4>Role & Objective</h4>
            <p>Developed an interactive educational tool to visually demonstrate complex pathfinding algorithms like Dijkstra's, A*, and BFS.</p>
          </div>
          <div className="details-card card">
            <h4>Key Features</h4>
            <p>Allowed users to see the pathfinding process step-by-step, simplifying complex concepts for students and teachers.</p>
          </div>
           <div className="details-card card">
            <h4>Tech Stack</h4>
            <p>Python, JavaScript, Algorithm Design, Data Structures.</p>
          </div>
        </div>
      </div>

      {/* --- Add your other projects by copying the project-item div --- */}

    </section>
  );
};

export default Projects;