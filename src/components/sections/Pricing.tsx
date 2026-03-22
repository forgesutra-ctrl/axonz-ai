"use client";

import { useApp } from "@/context/AppContext";
import { PRICING } from "@/lib/constants";

export function Pricing() {
  const { region } = useApp();
  const plans = PRICING[region];

  return (
    <section
      className="pricing-section"
      style={{
        background: "var(--bg-mid)",
        padding: "96px 48px",
      }}
    >
      <div className="pricing-grid-wrapper" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              background: "rgba(45,212,191,0.08)",
              border: "1px solid rgba(45,212,191,0.2)",
              borderRadius: 100,
              padding: "4px 14px",
              fontSize: 12,
              color: "#2DD4BF",
              fontFamily: "JetBrains Mono, monospace",
              display: "inline-block",
              marginBottom: 8,
            }}
          >
            {region === "IN" ? "🇮🇳 India Pricing" : "🇺🇸 US Pricing"}
          </div>
          <h2
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "var(--text-primary)",
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Transparent Pricing
          </h2>
        </div>
        <div
          className="pricing-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name + region}
              style={{
                background: plan.featured
                  ? "linear-gradient(135deg, rgba(14,116,144,0.15), rgba(45,212,191,0.05))"
                  : "var(--card-bg)",
                border: plan.featured
                  ? "1px solid rgba(45,212,191,0.3)"
                  : "1px solid var(--card-border)",
                borderTop: plan.featured
                  ? "2px solid #2DD4BF"
                  : "1px solid var(--card-border)",
                borderRadius: 20,
                padding: "36px 28px",
                position: "relative",
                overflow: "visible",
                boxShadow: plan.featured
                  ? "0 0 60px rgba(14,116,144,0.15), 0 0 120px rgba(14,116,144,0.05)"
                  : "none",
              }}
            >
              {/* Badge */}
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: 100,
                  display: "inline-block",
                  marginBottom: 16,
                  background: plan.featured
                    ? "rgba(45,212,191,0.15)"
                    : "var(--badge-bg)",
                  color: plan.featured ? "#2DD4BF" : "var(--text-muted)",
                  border: plan.featured
                    ? "1px solid rgba(45,212,191,0.3)"
                    : "1px solid var(--card-border)",
                }}
              >
                {plan.badge}
              </div>

              {/* Plan name */}
              <div
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: 26,
                  color: "var(--text-primary)",
                  marginBottom: 6,
                }}
              >
                {plan.name}
              </div>

              {/* Description */}
              <div
                style={{
                  fontSize: 14,
                  color: "var(--text-muted)",
                  marginBottom: 24,
                  lineHeight: 1.6,
                }}
              >
                {plan.desc}
              </div>

              {/* Price */}
              <div style={{ marginBottom: 8 }}>
                <span
                  key={region + plan.price}
                  style={{
                    fontFamily: '"DM Serif Display", serif',
                    fontSize: 48,
                    color: "var(--text-primary)",
                    lineHeight: 1,
                    animation: "fadeUp 0.4s ease forwards",
                    display: "inline-block",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontSize: 15,
                    color: "var(--text-muted)",
                    marginLeft: 4,
                  }}
                >
                  {plan.unit}
                </span>
              </div>

              {/* Volume note */}
              <div
                style={{
                  fontSize: 12,
                  color: "#2DD4BF",
                  fontFamily: "JetBrains Mono, monospace",
                  marginBottom: 4,
                }}
              >
                {plan.volume}
              </div>

              {/* Monthly estimate note */}
              <div
                style={{
                  fontSize: 11,
                  color: "var(--text-dim)",
                  fontFamily: "JetBrains Mono, monospace",
                  marginBottom: 24,
                }}
              >
                {plan.note}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: "var(--card-border)",
                  marginBottom: 20,
                }}
              />

              {/* Features */}
              <ul style={{ listStyle: "none", marginBottom: 28, padding: 0 }}>
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 14,
                      color: "var(--text-muted)",
                      padding: "7px 0",
                      borderBottom: "1px solid var(--card-border)",
                    }}
                  >
                    <span
                      style={{
                        color: "#2DD4BF",
                        fontWeight: 700,
                        flexShrink: 0,
                        fontSize: 12,
                      }}
                    >
                      ◆
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: 10,
                  border: plan.featured
                    ? "none"
                    : "1.5px solid rgba(45,212,191,0.3)",
                  background: plan.featured
                    ? "linear-gradient(135deg, #0E7490, #2DD4BF)"
                    : "transparent",
                  color: plan.featured ? "white" : "#2DD4BF",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: '"DM Sans", sans-serif',
                  transition: "all 0.3s ease",
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
