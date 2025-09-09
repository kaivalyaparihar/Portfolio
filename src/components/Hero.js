export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "90vh",
        background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
        color: "white",
        padding: "2rem"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Cybersecurity Student | VP @ CyberVulnX
      </h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px" }}>
        Passionate about Networking, DFIR, Threat Analysis & Detection.  
        Building a safer digital world, one step at a time.
      </p>
      <div style={{ marginTop: "2rem" }}>
        <a
          href="#projects"
          style={{
            backgroundColor: "#00ff99",
            color: "#111",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}
