"use client";

import { useApp } from "@/context/AppContext";

const TICKER_ITEMS_IN = [
  "🇮🇳 300ms latency — 2.5× faster than market",
  "🇮🇳 Pricing from ₹4.99/min at scale",
  "✦ 12+ Indian languages natively",
  "✦ Proprietary IVR — not 3rd party infra",
  "✦ TRAI · RBI · IRDAI compliant",
  "✦ Live in 14 days from contract signing",
  "✦ 93% call containment — no human needed",
];

const TICKER_ITEMS_US = [
  "🇺🇸 300ms latency — 2.5× faster than market",
  "🇺🇸 Pricing from $0.08/min at scale",
  "✦ 150+ languages globally",
  "✦ Proprietary IVR — not 3rd party infra",
  "✦ TCPA · HIPAA compliance ready",
  "✦ Live in 14 days from contract signing",
  "✦ 93% call containment — no human needed",
];

export function Ticker() {
  const { region } = useApp();
  const baseItems = region === "IN" ? TICKER_ITEMS_IN : TICKER_ITEMS_US;
  const items = [...baseItems, ...baseItems];

  return (
    <section
      className="ticker-section"
      style={{
        background: "#0A1525",
        padding: "12px 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(45,212,191,0.08)",
        borderBottom: "1px solid rgba(45,212,191,0.08)",
      }}
    >
      <div
        className="ticker-pause ticker-track"
        style={{
          display: "flex",
          gap: 64,
          width: "max-content",
          animation: "ticker 40s linear infinite",
        }}
      >
        {items.map((item, i) => {
          const parts = item.split(
            /(300ms|₹[\d.]+|\$[\d.]+|93%|100\+|14 days)/g
          );
          return (
            <span
              key={i}
              style={{
                fontSize: 12,
                fontFamily: "JetBrains Mono",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {parts.map((part, j) =>
                /^(300ms|₹[\d.]+|\$[\d.]+|93%|100\+|14 days)$/.test(part) ? (
                  <span
                    key={j}
                    style={{
                      color: "#2DD4BF",
                      fontWeight: 600,
                      textShadow: "0 0 16px rgba(45,212,191,0.3)",
                    }}
                  >
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </span>
          );
        })}
      </div>
    </section>
  );
}
