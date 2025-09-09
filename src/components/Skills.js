export default function Skills() {
  return (
    <section className="skills-section">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Skills</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Programming Languages */}
        <div className="card">
          <h3 style={{ marginBottom: "1rem" }}>Programming</h3>
          <p>Python, Java, HTML, CSS, JavaScript</p>
        </div>

        {/* Cybersecurity Tools */}
        <div className="card">
          <h3 style={{ marginBottom: "1rem" }}>Cybersecurity Tools</h3>
          <p>Nmap, Burp Suite, Nessus, Metasploit, Wireshark, Splunk</p>
        </div>

        {/* Platforms */}
        <div className="card">
          <h3 style={{ marginBottom: "1rem" }}>Platforms</h3>
          <p>VMware, VirtualBox, AWS, Linux, Windows Server, GitHub</p>
        </div>

        {/* Soft Skills */}
        <div className="card">
          <h3 style={{ marginBottom: "1rem" }}>Soft Skills</h3>
          <p>Leadership, Public Speaking, Collaboration, Problem-Solving</p>
        </div>
      </div>
    </section>
  );
}
