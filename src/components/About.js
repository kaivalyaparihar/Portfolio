export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#111",
        color: "white",
        padding: "4rem 2rem",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>About Me</h2>

      <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 1rem" }}>
        I’m <strong>Kaivalya Parihar</strong>, a Cybersecurity student and Vice President at 
        <strong> CyberVulnX</strong>, passionate about networking, DFIR, threat analysis, and detection. 
        I enjoy solving complex security challenges and turning theory into practical skills.
      </p>

      <p style={{ fontSize: "1rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
        My goal is to empower individuals with cybersecurity knowledge and help build a safer digital ecosystem. 
        Through CyberVulnX and my projects, I’m exploring innovative ways to make learning security engaging, 
        interactive, and impactful.
      </p>
    </section>
  );
}
