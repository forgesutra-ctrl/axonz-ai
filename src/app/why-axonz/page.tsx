"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import { useApp } from "@/context/AppContext";

export default function WhyAxonzPage() {
  const { openDemo } = useApp();
  return (
    <PageWrapper
      title="Why axonz.ai?"
      subtitle="Not just another voice bot. A proprietary system built for India and the world."
    >
      {/* Section 1 — 300ms Story */}
      <div
        className="why-axonz-page-section"
        style={{
          padding: "80px 48px",
          maxWidth: 1200,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 80,
              color: "#2DD4BF",
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            300ms
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>
            Our proprietary IVR response time
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 24 }}>
            Industry average: 800ms–2,000ms
          </div>
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 12, width: 80 }}>axonz:</span>
              <div
                style={{
                  height: 12,
                  width: 60,
                  background: "#2DD4BF",
                  borderRadius: 4,
                }}
              />
              <span style={{ fontSize: 12, color: "#2DD4BF" }}>300ms</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 12, width: 80 }}>Industry:</span>
              <div
                style={{
                  height: 12,
                  width: 200,
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: 4,
                }}
              />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>800ms–2s</span>
            </div>
          </div>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.7 }}>
            We didn&apos;t integrate a third-party IVR. We built our own — from the ground up —
            optimised specifically for Indian languages, accents, and network conditions. The result is
            a 2.5× latency advantage that makes conversations feel human.
          </p>
        </div>
        <div
          style={{
            background: "#0A1525",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: 28,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 13,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 2.2,
          }}
        >
          latency_benchmark: 300ms<br />
          industry_avg: 800ms<br />
          advantage: 2.5×<br />
          uptime: 99.94%<br />
          calls_processed: 10,000+ daily
        </div>
      </div>

      {/* Section 2 — Market Opportunity */}
      <div
        style={{
          padding: "80px 48px",
          background: "#0A1525",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 48,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 36,
                color: "#2DD4BF",
                marginBottom: 8,
              }}
            >
              $957M
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginBottom: 4 }}>
              Indian Voice AI market by 2030
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>
              Source: NextMSC Research
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 36,
                color: "#2DD4BF",
                marginBottom: 8,
              }}
            >
              35.7%
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginBottom: 4 }}>
              Market CAGR 2024–2030
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>
              Source: NextMSC Research
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 36,
                color: "#2DD4BF",
                marginBottom: 8,
              }}
            >
              $1.84B
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginBottom: 4 }}>
              India Conversational AI by 2030
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>
              Source: Grand View Research
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 — Positioning */}
      <div className="why-axonz-page-section why-axonz-positioning" style={{ padding: "80px 48px" }}>
        <h2
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: 32,
            color: "white",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Blue Ocean. Not a red ocean fight.
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            marginBottom: 48,
            maxWidth: 500,
            margin: "0 auto 48px",
          }}
        >
          Every major player targets enterprise. We target the 95% they ignore.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "Enterprise Giants",
              desc: "₹50L+ contracts. 6-month timelines. SMBs can't afford them.",
              tag: "Not our market",
              highlight: false,
            },
            {
              title: "Legacy IVR",
              desc: "Press 1 for English. Customers hate it. Conversion rates are dying.",
              tag: "What we replace",
              highlight: false,
            },
            {
              title: "WhatsApp Bots",
              desc: "Text-only. Can't handle complex queries. No voice = no emotion detection.",
              tag: "Different channel",
              highlight: false,
            },
            {
              title: "axonz.ai",
              desc: "SMB pricing. 14-day deployment. Voice-first. Indian-native.",
              tag: "Our position ✓",
              highlight: true,
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: card.highlight ? "rgba(45,212,191,0.08)" : "#0A1525",
                border: card.highlight
                  ? "1px solid rgba(45,212,191,0.3)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: card.highlight ? "#2DD4BF" : "rgba(255,255,255,0.5)",
                  marginBottom: 12,
                  fontFamily: "JetBrains Mono",
                }}
              >
                {card.tag}
              </div>
              <h3 style={{ fontFamily: '"DM Serif Display", serif', fontSize: 20, color: "white", marginBottom: 8 }}>
                {card.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — AIzYantra Credentials */}
      <div className="why-axonz-page-section why-axonz-credentials" style={{ padding: "80px 48px", background: "#0A1525" }}>
        <h2
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: 32,
            color: "white",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Built by AIzYantra Global Private Limited
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            marginBottom: 48,
            maxWidth: 500,
            margin: "0 auto 48px",
          }}
        >
          The AI consulting firm behind India&apos;s fastest-growing enterprise AI deployments.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "$25K Google Cloud Award",
              desc: "Won for MediBridge — multilingual healthcare voice AI",
            },
            {
              title: "3rd Place Globally",
              desc: "Outskill AI Fellowship — competing against 500+ teams",
            },
            {
              title: "Fortune 500 Pedigree",
              desc: "8 founders with combined 100+ years in enterprise technology",
            },
            {
              title: "AIzYantra International",
              desc: "Parent company serving 50+ enterprise clients across India",
            },
          ].map((c) => (
            <div
              key={c.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 600, color: "#2DD4BF", marginBottom: 8 }}>
                {c.title}
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5 — Technology Advantage */}
      <div className="why-axonz-page-section why-axonz-pillars" style={{ padding: "80px 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {[
            { icon: "⚡", title: "Proprietary IVR", desc: "Built from scratch. Not Twilio. Not Exotel's standard IVR. Our own WebSocket-based real-time voice processing layer." },
            { icon: "🇮🇳", title: "Indian Language Native", desc: "Not translated. Not adapted. Built for Hinglish, Tamil, Telugu, Kannada from day one. Code-switching handled natively." },
            { icon: "🛡️", title: "Compliance First", desc: "TRAI DND registry checks on every outbound call. RBI scripting for BFSI. IRDAI guidelines for insurance. Built-in, not bolt-on." },
          ].map((p) => (
            <div
              key={p.title}
              style={{
                background: "#0A1525",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 28,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontFamily: '"DM Serif Display", serif', fontSize: 20, color: "white", marginBottom: 12 }}>
                {p.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ padding: "96px 48px", textAlign: "center" }}>
        <h3 style={{ fontFamily: '"DM Serif Display", serif', fontSize: 32, color: "white", marginBottom: 12 }}>
          See what axonz.ai can do for your business
        </h3>
        <button
          onClick={openDemo}
          style={{
            padding: "18px 48px",
            background: "linear-gradient(135deg, #0E7490, #2DD4BF)",
            color: "white",
            borderRadius: 12,
            fontSize: 16,
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            marginTop: 24,
          }}
        >
          Start Free Pilot →
        </button>
      </div>
    </PageWrapper>
  );
}
