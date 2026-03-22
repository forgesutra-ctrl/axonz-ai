"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#060D18", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <h2 style={{ marginBottom: 16 }}>Something went wrong</h2>
        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24, textAlign: "center" }}>
          {error.message}
        </p>
        <button
          onClick={reset}
          style={{
            padding: "12px 24px",
            background: "linear-gradient(135deg, #0E7490, #2DD4BF)",
            color: "white",
            border: "none",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
