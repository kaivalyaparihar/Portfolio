export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#0d0d0d",
        color: "white",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Get in Touch</h2>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
        I’m always open to collaboration, opportunities, or just a friendly chat about cybersecurity.  
        Reach out via any of the platforms below!
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <a
          href="mailto:kaivalya.parihar@gmail.com"
          style={{
            background: "#222",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            color: "white",
          }}
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/kaivalya-parihar/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#0077b5",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            color: "white",
          }}
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/kaivalya._26/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#e1306c",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            color: "white",
          }}
        >
          Instagram
        </a>
        <a
          href="/resume.pdf"
          style={{
            background: "#444",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            color: "white",
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
