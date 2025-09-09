// src/components/Certifications.js
import React from 'react';
// You can find logos for these on sites like simpleicons.org or get official ones.
// For now, we'll use text.

const certifications = [
  { name: 'IBM Cybersecurity Analyst' },
  { name: 'Python Bootcamp' },
  { name: 'Data Science Bootcamp' },
  { name: 'Network Security' },
  { name: 'IP and ID Systems' },
];

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <h2>Achievements & Certifications</h2>
      <div className="scroller">
        <div className="scroller-inner">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={`cert1-${index}`}>
              <p>{cert.name}</p>
            </div>
          ))}
          {/* We duplicate the list of certifications for a seamless loop */}
          {certifications.map((cert, index) => (
            <div className="cert-card" key={`cert2-${index}`}>
              <p>{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;