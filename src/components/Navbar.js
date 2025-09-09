import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#111",
      color: "#fff"
    }}>
      <h2>Kaivalya</h2>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
