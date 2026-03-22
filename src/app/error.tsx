"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        background: "#060D18",
        color: "rgba(255,255,255,0.88)",
      }}
    >
      <h2 style={{ fontFamily: '"DM Serif Display", serif', marginBottom: 16 }}>
        Something went wrong
      </h2>
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
    </div>
  );
}
