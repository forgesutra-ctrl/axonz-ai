"use client";

import { useApp } from "@/context/AppContext";

const BASE_ROWS = [
  {
    name: "axonz.ai",
    langs: "150+ (12 Indian)",
    priceIN: "₹4.99–5.99/min",
    priceUS: "$0.08–0.10/min",
    timeline: "14 days",
    india: "✓",
    compliance: "✓",
    highlight: true,
  },
  {
    name: "The Enterprise Giant",
    langs: "135",
    price: "Custom",
    timeline: "8–12 wks",
    india: "✗",
    compliance: "Limited",
    highlight: false,
  },
  {
    name: "The BFSI Specialist",
    langs: "12",
    price: "Enterprise quote",
    timeline: "6–8 wks",
    india: "✗",
    compliance: "✓",
    highlight: false,
  },
  {
    name: "The Mobile-First Platform",
    langs: "20+",
    price: "Custom",
    timeline: "Long",
    india: "✗",
    compliance: "Partial",
    highlight: false,
  },
  {
    name: "The Sovereign AI Lab",
    langs: "12",
    price: "₹enterprise",
    timeline: "4–8 wks",
    india: "✗",
    compliance: "✓",
    highlight: false,
  },
  {
    name: "The Messaging Platform",
    langs: "30+",
    price: "₹10K+/mo",
    timeline: "Weeks",
    india: "SME",
    compliance: "✗",
    highlight: false,
  },
];

export function CompareTable() {
  const { region } = useApp();
  const rows = BASE_ROWS.map((r) => ({
    ...r,
    price:
      r.highlight && "priceIN" in r
        ? region === "IN"
          ? r.priceIN
          : r.priceUS
        : r.price,
  }));

  return (
    <section
      style={{
        background: "var(--bg-dark)",
        padding: "96px 48px",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "var(--text-primary)",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          How the market stacks up
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            textAlign: "center",
            marginBottom: 48,
            fontSize: 16,
          }}
        >
          {region === "IN"
            ? "Indian market benchmarked."
            : "US market benchmarked."}
        </p>
        <div className="compare-scroll-hint" style={{ display: "none", fontSize: 11, fontFamily: "JetBrains Mono", color: "rgba(255,255,255,0.3)", textAlign: "center", marginBottom: 12 }}>
          ← Scroll to see full comparison
        </div>
        <div className="compare-scroll-wrapper" style={{ overflowX: "auto" }}>
        <div
          className="compare-table-wrapper"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <div
            className="compare-table"
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 0.8fr 1.2fr 0.8fr 0.6fr 0.8fr",
              gap: 16,
              padding: "16px 24px",
              background: "var(--card-bg)",
              borderBottom: "1px solid var(--card-border)",
              fontSize: 11,
              fontFamily: "JetBrains Mono",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <div>Platform</div>
            <div>Languages</div>
            <div>Price</div>
            <div>Timeline</div>
            <div>India-first</div>
            <div>Compliance</div>
          </div>
          {rows.map((row) => (
            <div
              key={row.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1.5fr 0.8fr 1.2fr 0.8fr 0.6fr 0.8fr",
                gap: 16,
                padding: "16px 24px",
                borderBottom: "1px solid var(--card-border)",
                alignItems: "center",
                borderLeft: row.highlight ? "3px solid #2DD4BF" : "none",
                background: row.highlight
                  ? "rgba(14,116,144,0.06)"
                  : "transparent",
              }}
            >
              <div style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                {row.name}
              </div>
              <div
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "JetBrains Mono",
                }}
              >
                {row.langs}
              </div>
              <div style={{ color: "var(--text-primary)" }}>{row.price}</div>
              <div style={{ color: "var(--text-primary)" }}>{row.timeline}</div>
              <div style={{ color: "var(--text-primary)" }}>{row.india}</div>
              <div style={{ color: "var(--text-primary)" }}>
                {row.compliance}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
