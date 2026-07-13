export interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div
      style={{
        padding: "2rem",
        border: "1px solid #ecf3ff", // Back to gray
        borderRadius: "0.5rem",
      }}
    >
      {title && (
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginTop: 0,
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h3>
      )}
      <div style={{ color: "#666" }}>{children}</div>
    </div>
  );
}
