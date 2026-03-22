"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    icon: "📞",
    nodeLabel: "INBOUND CALL",
    title: "A customer calls.\naxonz picks up instantly.",
    body: 'No IVR maze. No hold music. No "press 1 for English". axonz answers in under 300ms and greets the caller by name — in their language.',
    stat: "⚡ < 300ms answer time",
    data: [
      { key: "caller_id", val: "+91 98XXX XXXXX" },
      { key: "direction", val: "inbound" },
      { key: "queue_time", val: "0ms ✓" },
      { key: "language_detect", val: "Hinglish" },
    ],
  },
  {
    icon: "〜",
    nodeLabel: "IVR — 300ms",
    title: "It listens.\nActually listens.",
    body: "Our proprietary IVR transcribes speech in real-time across Indian accents. Hinglish, code-switching, regional slang — it handles all of it without missing a word.",
    stat: "🎯 97% transcription accuracy",
    data: [
      { key: "engine", val: "proprietary_ivr_v3" },
      { key: "latency", val: "300ms" },
      { key: "accuracy", val: "97.2%" },
      { key: "dialect", val: "Hinglish detected" },
    ],
  },
  {
    icon: "◈",
    nodeLabel: "GPT-4o INTENT",
    title: "GPT-4o figures out\nwhat they actually want.",
    body: 'Not keyword matching. Not decision trees. Real intent understanding — it knows "is mahine payment nahi ho payegi" means the customer needs a payment plan — not a disconnection.',
    stat: "🧠 Intent resolved in < 200ms",
    data: [
      { key: "model", val: "gpt-4o" },
      { key: "intent", val: "loan_status_query" },
      { key: "sentiment", val: "neutral" },
      { key: "confidence", val: "0.94" },
    ],
  },
  {
    icon: "▶",
    nodeLabel: "VOICE RESPONSE",
    title: "ElevenLabs speaks.\nNaturally.",
    body: "A voice indistinguishable from a human agent — warm, clear, with the right pace for the language. The customer does not know. And that is the point.",
    stat: "🗣️ 12+ Indian · 150 languages globally",
    data: [
      { key: "voice_engine", val: "ElevenLabs neural" },
      { key: "language", val: "Hinglish" },
      { key: "words_per_min", val: "142" },
      { key: "naturalness", val: "4.8 / 5.0" },
    ],
  },
  {
    icon: "✓",
    nodeLabel: "CRM SYNC",
    title: "Resolved. Logged.\nCRM updated.",
    body: "The full transcript, sentiment score, and outcome sync to your CRM before the customer hangs up. Zero manual work. 93% of calls never need a human.",
    stat: "✓ 93% containment rate",
    data: [
      { key: "crm_updated", val: "✓ real-time" },
      { key: "transcript", val: "saved" },
      { key: "resolution", val: "success" },
      { key: "duration", val: "1m 42s" },
    ],
  },
];

export function HowVoiceWorks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToStep = (step: number) => {
    if (isTransitioning || step === activeStep) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveStep(step);
      setIsTransitioning(false);
    }, 200);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !sectionRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.3,
    }));

    let animId = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45,212,191,${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--bg-deep)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.6,
        }}
      />

      <div
        style={{
          textAlign: "center",
          marginBottom: 64,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#2DD4BF",
            marginBottom: 12,
            paddingLeft: 0,
          }}
        >
          How It Works
        </div>
        <h2
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: "clamp(32px, 4vw, 52px)",
            color: "var(--text-primary)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          From call to resolution.{" "}
          <em style={{ color: "#2DD4BF" }}>In under 2 minutes.</em>
        </h2>
      </div>

      <div
        className="hvw-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="hvw-left"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
            position: "relative",
          }}
        >
          {STEPS.map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {i > 0 && (
                <div
                  style={{
                    width: 2,
                    height: 48,
                    background:
                      i <= activeStep
                        ? "linear-gradient(180deg, #2DD4BF, rgba(45,212,191,0.3))"
                        : "rgba(255,255,255,0.06)",
                    transition: "background 0.6s ease",
                    boxShadow:
                      i <= activeStep ? "0 0 8px rgba(45,212,191,0.4)" : "none",
                  }}
                />
              )}

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  cursor: "pointer",
                }}
                onClick={() => goToStep(i)}
              >
                {i === activeStep && (
                  <div
                    style={{
                      position: "absolute",
                      inset: -10,
                      borderRadius: "50%",
                      border: "1px solid rgba(45,212,191,0.3)",
                      animation: "ringPulse 2s ease infinite",
                      pointerEvents: "none",
                    }}
                  />
                )}

                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    background:
                      i === activeStep ? "rgba(14,116,144,0.25)" : "var(--card-bg)",
                    border: `2px solid ${
                      i === activeStep ? "#2DD4BF" : "rgba(255,255,255,0.1)"
                    }`,
                    boxShadow:
                      i === activeStep
                        ? "0 0 24px rgba(45,212,191,0.4), 0 0 48px rgba(45,212,191,0.15)"
                        : "none",
                    transition: "all 0.4s ease",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.icon}
                </div>

                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: i === activeStep ? "#2DD4BF" : "rgba(255,255,255,0.3)",
                    fontWeight: i === activeStep ? 600 : 400,
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {step.nodeLabel}
                </div>
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: 32,
              background: "rgba(45,212,191,0.04)",
              border: "1px solid rgba(45,212,191,0.12)",
              borderRadius: 12,
              padding: "16px 20px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              lineHeight: 2,
              minWidth: 260,
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 0.2s ease",
            }}
          >
            {STEPS[activeStep].data.map((line, i) => (
              <div key={i}>
                <span style={{ color: "var(--text-muted)" }}>
                  {line.key}:{" "}
                </span>
                <span style={{ color: "#2DD4BF" }}>{line.val}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hvw-right"
          style={{
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? "translateX(-20px)" : "translateX(0)",
            transition: "opacity 0.2s ease, transform 0.3s ease",
          }}
        >
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: "#2DD4BF",
              letterSpacing: "0.15em",
              marginBottom: 16,
            }}
          >
            STEP 0{activeStep + 1} / 05
          </div>

          <h3
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: "clamp(28px, 3vw, 44px)",
              color: "var(--text-primary)",
              lineHeight: 1.15,
              marginBottom: 20,
              letterSpacing: "-0.02em",
              whiteSpace: "pre-line",
            }}
          >
            {STEPS[activeStep].title}
          </h3>

          <p
            style={{
              fontSize: 16,
              fontWeight: 300,
              color: "var(--text-muted)",
              lineHeight: 1.8,
              maxWidth: 420,
              marginBottom: 28,
            }}
          >
            {STEPS[activeStep].body}
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(45,212,191,0.08)",
              border: "1px solid rgba(45,212,191,0.2)",
              borderRadius: 100,
              padding: "8px 20px",
              fontSize: 13,
              fontWeight: 600,
              color: "#2DD4BF",
              fontFamily: "JetBrains Mono, monospace",
              marginBottom: 40,
            }}
          >
            {STEPS[activeStep].stat}
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => goToStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              style={{
                padding: "10px 24px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "transparent",
                color: activeStep === 0
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(255,255,255,0.7)",
                fontSize: 14,
                cursor: activeStep === 0 ? "not-allowed" : "pointer",
                fontFamily: '"DM Sans", sans-serif',
                transition: "all 0.2s",
              }}
            >
              ← Previous
            </button>
            <button
              onClick={() =>
                goToStep(Math.min(STEPS.length - 1, activeStep + 1))
              }
              disabled={activeStep === STEPS.length - 1}
              style={{
                padding: "10px 24px",
                borderRadius: 8,
                border: "none",
                background:
                  activeStep === STEPS.length - 1
                    ? "rgba(14,116,144,0.2)"
                    : "linear-gradient(135deg,#0E7490,#2DD4BF)",
                color: "white",
                fontSize: 14,
                cursor:
                  activeStep === STEPS.length - 1 ? "not-allowed" : "pointer",
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginTop: 48,
          position: "relative",
          zIndex: 1,
        }}
      >
        {STEPS.map((_, i) => (
          <button
            key={i}
            onClick={() => goToStep(i)}
            style={{
              width: i === activeStep ? 28 : 8,
              height: 8,
              borderRadius: 4,
              background:
                i === activeStep ? "#2DD4BF" : "rgba(255,255,255,0.2)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
