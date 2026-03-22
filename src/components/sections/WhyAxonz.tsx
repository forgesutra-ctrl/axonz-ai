"use client";

import { useEffect, useRef } from "react";

const CHECKLIST = [
  "Handles inbound & outbound calls autonomously",
  "Understands Hinglish & code-switching natively",
  "Integrates with CRM, ERP, Razorpay in 48 hours",
  "TRAI, RBI, IRDAI compliance built-in",
  "Live agent handoff with full call transcript",
];

const STATS = [
  { value: "93%", label: "Call Containment Rate" },
  { value: "300ms", label: "Response Latency" },
  { value: "60+", label: "Languages Globally", subline: "12+ Indian" },
  { value: "14 days", label: "Go-Live Timeline" },
];

export function WhyAxonz() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.1 }
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="why-axonz-section"
      style={{
        background: "var(--bg-mid)",
        padding: "96px 48px",
      }}
    >
      <div
        className="why-axonz-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: 16,
            }}
          >
            Why axonz.ai
          </div>
          <h2
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.2,
              margin: "0 0 32px 0",
              color: "var(--text-primary)",
            }}
          >
            Voice AI that actually understands your customers
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {CHECKLIST.map((item, i) => (
              <li
                key={i}
                ref={(el) => { refs.current[i] = el; }}
                className="rev"
                style={{ marginBottom: 16, color: "var(--text-muted)", fontSize: 16, lineHeight: 1.6 }}
              >
                ✓ {item}
              </li>
            ))}
          </ul>
          <p
            style={{
              color: "#2DD4BF",
              fontWeight: 600,
              fontSize: 14,
              marginTop: 24,
            }}
          >
            300ms latency. 93% containment. 14 days to live.
          </p>
        </div>
        <div
          className="why-axonz-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[CHECKLIST.length + i] = el; }}
              className="rev"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: 14,
                padding: 24,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(45,212,191,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--card-border)";
              }}
            >
              <div
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: 36,
                  color: "var(--text-primary)",
                  marginBottom: 8,
                }}
              >
                {s.value}
              </div>
              {s.subline && (
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(45,212,191,0.7)",
                    marginBottom: 4,
                  }}
                >
                  {s.subline}
                </div>
              )}
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
