export default function Projects() {
  return (
    <section className="projects-section">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Example Project */}
        <div className="card">
          <h3 style={{ marginBottom: "1rem" }}>Beach Cleaning Robot</h3>
          <p>
            A mechanical robot built with motors, pulleys, and conveyor belts to
            clean beach waste effectively.
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: "1rem" }}>Pathfinding Visualizer</h3>
          <p>
            A teaching tool to demonstrate shortest path algorithms like Dijkstra’s
            and A* in a visual way.
          </p>
        </div>

        {/* Add more projects here */}
      </div>
    </section>
  );
}

