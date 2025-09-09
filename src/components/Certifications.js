export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
        Certifications
      </h2>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "2rem",
          padding: "1rem",
          maxWidth: "90%",
          margin: "0 auto",
        }}
      >
        <div style={{ minWidth: "200px", padding: "1rem", background: "#222", borderRadius: "8px" }}>
          IBM Cybersecurity Analyst
        </div>
        <div style={{ minWidth: "200px", padding: "1rem", background: "#222", borderRadius: "8px" }}>
          Python Bootcamp
        </div>
        <div style={{ minWidth: "200px", padding: "1rem", background: "#222", borderRadius: "8px" }}>
          Data Science Bootcamp
        </div>
        <div style={{ minWidth: "200px", padding: "1rem", background: "#222", borderRadius: "8px" }}>
          Network Security
        </div>
        <div style={{ minWidth: "200px", padding: "1rem", background: "#222", borderRadius: "8px" }}>
          Cybersecurity Workshop
        </div>
      </div>
    </section>
  );
}
