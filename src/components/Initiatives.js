// src/components/Initiatives.js
import React from 'react';

const Initiatives = () => {
  return (
    <section className="initiatives-section" id="initiatives">
      <h2>Leadership & Initiatives</h2>
      <div className="initiatives-grid">
        <div className="initiative-card card">
          <h3>Vice President @ CyberVulnX</h3>
          <p>
            Co-founded and scaled a student-led cybersecurity club focused on hands-on learning. Organized workshops, awareness campaigns, and community projects to make cybersecurity knowledge accessible and practical.
          </p>
        </div>
        <div className="initiative-card card">
          <h3>Parihar Education Society (NGO)</h3>
          <p>
            {/* Add your description for the NGO here */}
            Contributed to a non-profit organization dedicated to providing educational resources and opportunities to underprivileged students in the community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;