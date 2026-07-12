import { Button } from "@geniusgarage/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "system-ui",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "2rem",
        }}
      >
        <Link
          href="/features"
          style={{
            textDecoration: "none",
            color: "#0070f3",
            fontWeight: "bold",
          }}
        >
          Features
        </Link>
      </nav>

      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          🧠 GeniusGarage
        </h1>
        <p style={{ fontSize: "1.5rem", color: "#666", marginBottom: "2rem" }}>
          Manage and share your code snippets
        </p>

        <Button>Get Started</Button>

        <p style={{ color: "#666", marginTop: "3rem", fontSize: "0.875rem" }}>
          This is the starter project. You'll build out the full platform as you
          progress through the course.
        </p>
      </div>
    </main>
  );
}
