// src/components/Skills.js
import React from 'react';
// Import the icons we need
import { FaShieldAlt, FaCode, FaServer, FaUsers } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Core Competencies</h2>
      <div className="skills-grid">
        <div className="skill-card card large">
          <FaShieldAlt className="skill-icon" />
          <h3>Cybersecurity & Tools</h3>
          <ul>
            <li>Splunk (SIEM)</li>
            <li>Nmap, Burp Suite, Nessus</li>
            <li>Metasploit Framework</li>
            <li>Wireshark, Nikto</li>
            <li>Hydra, John the Ripper</li>
          </ul>
        </div>
        <div className="skill-card card">
          <FaCode className="skill-icon" />
          <h3>Programming</h3>
          <ul>
            <li>Python, Java</li>
            <li>HTML, CSS, JavaScript</li>
          </ul>
        </div>
        <div className="skill-card card">
          <FaServer className="skill-icon" />
          <h3>Platforms</h3>
          <ul>
            <li>VMware, VirtualBox, AWS</li>
            <li>Linux, Windows Server, GitHub</li>
          </ul>
        </div>
        <div className="skill-card card wide">
          <FaUsers className="skill-icon" />
          <h3>Soft Skills</h3>
          <ul>
            <li>Leadership & Project Coordination</li>
            <li>Public Speaking & Workshops</li>
            <li>Collaboration & Problem-Solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;