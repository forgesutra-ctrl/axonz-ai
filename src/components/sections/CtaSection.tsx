"use client";

import { useEffect, useState } from "react";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { useApp } from "@/context/AppContext";

export function CtaSection() {
  const { openDemo } = useApp();
  const [callsCount, setCallsCount] = useState(14203);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timeoutId = setTimeout(() => {
        setCallsCount((c) => c + Math.floor(1 + Math.random() * 3));
        schedule();
      }, 8000 + Math.random() * 4000);
    };
    schedule();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      className="cta-section"
      style={{
        background: "var(--bg-deep)",
        padding: "120px 48px 180px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Layer 1 — Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,116,144,0.18) 0%, rgba(45,212,191,0.06) 30%, transparent 70%)",
          pointerEvents: "none",
          animation: "breathe 6s ease infinite",
          zIndex: 0,
        }}
      />

      {/* Layer 2 — Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(45,212,191,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      {/* Layer 3 — Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.08) 3px,
            rgba(0,0,0,0.08) 4px
          )`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Layer 4 — Waveform bars */}
      <div
        className="cta-waveform"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "stretch",
          gap: 0,
          zIndex: 0,
        }}
      >
        {Array.from({ length: 60 }).map((_, i) => {
          const height =
            Math.abs(Math.sin((i / 60) * Math.PI * 4)) * 80 + 8;
          const duration = 2 + (i % 5) * 0.3;
          return (
            <div
              key={i}
              style={{
                flex: 1,
                height,
                minWidth: 2,
                background: "linear-gradient(180deg, rgba(45,212,191,0.15), rgba(14,116,144,0.05))",
                borderRadius: "2px 2px 0 0",
                transformOrigin: "bottom",
                animation: `waveBar ${duration}s ease-in-out infinite`,
                animationDelay: `${(i % 12) * 0.05}s`,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        {/* Logo with rotating pulse rings */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              animation: "spin 20s linear infinite",
            }}
          >
            {/* 3 pulse rings — spin with parent */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 70 + i * 24,
                  height: 70 + i * 24,
                  marginLeft: -(70 + i * 24) / 2,
                  marginTop: -(70 + i * 24) / 2,
                  borderRadius: "50%",
                  border: "1px solid rgba(45,212,191,0.2)",
                  animation: "ringPulse 2.5s ease infinite",
                  animationDelay: `${i * 0.4}s`,
                  pointerEvents: "none",
                }}
              />
            ))}
            {/* Logo counter-rotates to stay upright */}
            <div
              style={{
                animation: "spin 20s linear infinite reverse",
                display: "inline-block",
              }}
            >
              <LogoIcon size={70} idPrefix="cg" />
            </div>
          </div>
        </div>

        {/* Thin line */}
        <div
          style={{
            width: 1,
            height: 48,
            background:
              "linear-gradient(180deg, transparent, #2DD4BF, transparent)",
            margin: "0 auto 24px",
          }}
        />

        {/* Headline */}
        <h2
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: "clamp(44px, 6vw, 80px)",
            color: "var(--text-primary)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Ready to give your
          <br />
          business a{" "}
          <em
            style={{
              color: "#2DD4BF",
              fontStyle: "italic",
              textShadow:
                "0 0 40px rgba(45,212,191,0.5), 0 0 80px rgba(45,212,191,0.2)",
              animation: "voiceGlow 3s ease infinite",
            }}
          >
            voice
          </em>
          ?
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: "var(--text-muted)",
            lineHeight: 1.7,
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          Deploy your first voice bot in 14 days.
          <br />
          We handle setup, training, and integration.
        </p>

        {/* CTA button */}
        <button
          onClick={openDemo}
          className="cta-btn-premium"
          style={{
            padding: "20px 56px",
            fontSize: 18,
            fontWeight: 700,
            borderRadius: 14,
            background: "linear-gradient(135deg, #0E7490, #2DD4BF)",
            color: "white",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.02em",
            boxShadow:
              "0 0 40px rgba(45,212,191,0.3), 0 20px 60px rgba(14,116,144,0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow =
              "0 0 60px rgba(45,212,191,0.5), 0 24px 80px rgba(14,116,144,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 0 40px rgba(45,212,191,0.3), 0 20px 60px rgba(14,116,144,0.2)";
          }}
        >
          Start Your Free Pilot →
        </button>

        {/* Trust signals */}
        <div
          className="cta-trust-signals"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 32,
            marginTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              color: "var(--text-muted)",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22c55e",
              }}
            />
            <span>Free 500-call pilot</span>
          </div>
          <span style={{ color: "var(--text-dim)" }}>·</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              color: "var(--text-muted)",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#2DD4BF",
              }}
            />
            <span>No contract lock-in</span>
          </div>
          <span style={{ color: "var(--text-dim)" }}>·</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              color: "var(--text-muted)",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#2DD4BF",
              }}
            />
            <span>Live in 14 days</span>
          </div>
        </div>

        {/* Live stats row */}
        <div
          className="cta-live-stats"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            maxWidth: 600,
            margin: "56px auto 0",
            gap: 0,
            border: "1px solid var(--card-border)",
            borderRadius: 16,
            overflow: "hidden",
            background: "var(--card-bg)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              padding: "20px 24px",
              textAlign: "center",
              borderRight: "1px solid var(--card-border)",
            }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 22,
                fontWeight: 700,
                color: "#0E7490",
                display: "block",
              }}
            >
              300ms
            </span>
            <span
              style={{
                fontSize: 11,
                color: "var(--text-dim)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: 4,
                display: "block",
              }}
            >
              Proprietary Latency
            </span>
          </div>
          <div
            style={{
              padding: "20px 24px",
              textAlign: "center",
              borderRight: "1px solid var(--card-border)",
            }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 22,
                fontWeight: 700,
                color: "#0E7490",
                display: "block",
              }}
            >
              93%
            </span>
            <span
              style={{
                fontSize: 11,
                color: "var(--text-dim)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: 4,
                display: "block",
              }}
            >
              Call Containment
            </span>
          </div>
          <div
            style={{
              padding: "20px 24px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 22,
                fontWeight: 700,
                color: "#0E7490",
                display: "block",
              }}
            >
              {callsCount.toLocaleString()}+
            </span>
            <span
              style={{
                fontSize: 11,
                color: "var(--text-dim)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: 4,
                display: "block",
              }}
            >
              Calls Handled Today
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
