export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#aaa",
        padding: "2rem",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <p style={{ margin: "0.5rem 0" }}>
        © {new Date().getFullYear()} Kaivalya Parihar. All rights reserved.
      </p>
      <p style={{ margin: "0.5rem 0" }}>
        Built with ❤️
      </p>
    </footer>
  );
}
