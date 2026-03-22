"use client";

import { useState, useCallback } from "react";
import { LogoIcon } from "@/components/ui/LogoIcon";

const RING1 = {
  radius: 140,
  duration: 35,
  direction: "cw" as const,
  label: "VOICE",
  nodeBg: "rgba(45,212,191,0.15)",
  nodeBorder: "rgba(45,212,191,0.4)",
  labelColor: "#2DD4BF",
  tools: [
    { id: "vapi", letter: "V", name: "Vapi", tooltip: "Voice agent orchestration" },
    { id: "eleven", letter: "EL", name: "ElevenLabs", tooltip: "Neural text-to-speech" },
    { id: "dg", letter: "Dg", name: "Deepgram", tooltip: "Nova-2 — fastest Indian STT" },
    { id: "sarvam", letter: "Sa", name: "Sarvam", tooltip: "Indian language specialist STT" },
  ],
};

const RING2 = {
  radius: 230,
  duration: 55,
  direction: "ccw" as const,
  label: "AI + COMM",
  nodeBg: "rgba(139,92,246,0.12)",
  nodeBorder: "rgba(139,92,246,0.35)",
  labelColor: "#A78BFA",
  tools: [
    { id: "gpt", letter: "4o", name: "GPT-4o", tooltip: "Primary reasoning engine" },
    { id: "claude", letter: "Cl", name: "Claude", tooltip: "Document intelligence" },
    { id: "llama", letter: "Ll", name: "Llama", tooltip: "Open-source LLM fallback" },
    { id: "li", letter: "Li", name: "LlamaIndex", tooltip: "RAG retrieval pipelines" },
    { id: "exotel", letter: "Ex", name: "Exotel", tooltip: "Indian PSTN telephony" },
    { id: "plivo", letter: "Pl", name: "Plivo", tooltip: "SIP trunking & voice API" },
  ],
};

const RING3 = {
  radius: 320,
  duration: 80,
  direction: "cw" as const,
  label: "INFRA",
  nodeBg: "rgba(45,212,191,0.06)",
  nodeBorder: "rgba(255,255,255,0.12)",
  labelColor: "rgba(255,255,255,0.55)",
  tools: [
    { id: "twilio", letter: "Tw", name: "Twilio", tooltip: "Global voice infrastructure" },
    { id: "wa", letter: "Wa", name: "WhatsApp", tooltip: "WhatsApp Business API" },
    { id: "supabase", letter: "Sb", name: "Supabase", tooltip: "Postgres + Auth + Storage" },
    { id: "vercel", letter: "Vc", name: "Vercel", tooltip: "Global edge deployment" },
    { id: "n8n", letter: "n8", name: "n8n", tooltip: "Workflow automation engine" },
    { id: "razorpay", letter: "Rz", name: "Razorpay", tooltip: "Indian payments gateway" },
    { id: "pinecone", letter: "Pc", name: "Pinecone", tooltip: "Vector search database" },
    { id: "lc", letter: "LC", name: "LangChain", tooltip: "LLM agent framework" },
  ],
};

const ALL_TOOLS = [...RING1.tools, ...RING2.tools, ...RING3.tools];

function ToolNode({
  tool,
  x,
  y,
  nodeBg,
  nodeBorder,
  labelColor,
  onHover,
  onTooltipMove,
}: {
  tool: (typeof RING1.tools)[0];
  x: number;
  y: number;
  nodeBg: string;
  nodeBorder: string;
  labelColor: string;
  onHover: (t: (typeof RING1.tools)[0] | null, e?: React.MouseEvent) => void;
  onTooltipMove: (e: React.MouseEvent) => void;
}) {
  return (
    <div
      className="ts-counter"
      style={{
        position: "absolute",
        left: `calc(50% + ${x}px - 36px)`,
        top: `calc(50% + ${y}px - 36px)`,
        width: 72,
        height: 72,
        animation: "counterCW 35s linear infinite",
      }}
    >
      <div
        onMouseEnter={(e) => onHover(tool, e)}
        onMouseLeave={() => onHover(null)}
        onMouseMove={onTooltipMove}
        style={{
          width: 72,
          height: 72,
          borderRadius: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          cursor: "pointer",
          transition: "all 0.3s ease",
          backdropFilter: "blur(8px)",
                      background: nodeBg,
                      border: `1px solid ${nodeBorder}`,
        }}
        onMouseOver={(e) => {
          const el = e.currentTarget;
          el.style.background = "rgba(45,212,191,0.12)";
          el.style.border = "1px solid #2DD4BF";
          el.style.boxShadow = "0 0 20px rgba(45,212,191,0.25)";
          el.style.transform = "scale(1.15)";
          el.style.zIndex = "20";
        }}
        onMouseOut={(e) => {
          const el = e.currentTarget;
          el.style.background = nodeBg;
          el.style.border = `1px solid ${nodeBorder}`;
          el.style.boxShadow = "none";
          el.style.transform = "scale(1)";
          el.style.zIndex = "1";
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "JetBrains Mono, monospace",
            color: labelColor,
          }}
        >
          {tool.letter}
        </div>
        <div
          style={{
            fontSize: 9,
            fontFamily: '"DM Sans", sans-serif',
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {tool.name}
        </div>
      </div>
    </div>
  );
}

export function TechStack() {
  const [tooltip, setTooltip] = useState<{
    tool: (typeof RING1.tools)[0];
    x: number;
    y: number;
  } | null>(null);

  const handleHover = useCallback(
    (t: (typeof RING1.tools)[0] | null, e?: React.MouseEvent) => {
      if (!t) {
        setTooltip(null);
        return;
      }
      if (e) {
        setTooltip({ tool: t, x: e.clientX, y: e.clientY });
      }
    },
    []
  );

  const handleTooltipMove = useCallback((e: React.MouseEvent) => {
    setTooltip((prev) =>
      prev ? { ...prev, x: e.clientX, y: e.clientY } : null
    );
  }, []);

  return (
    <section
      style={{
        background: "var(--bg-dark)",
        padding: "96px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background atmosphere */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,116,144,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(45,212,191,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 0 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2DD4BF",
              marginBottom: 12,
            }}
          >
            The Stack
          </div>
          <h2
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "var(--text-primary)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            Intelligence at the core.
          </h2>
          <p
            style={{
              fontSize: 16,
              fontWeight: 300,
              color: "var(--text-muted)",
              maxWidth: 420,
              margin: "0 auto",
            }}
          >
            Every tool chosen for Indian language performance, latency, and scale.
          </p>
        </div>

        {/* Main orbital canvas */}
        <div
          className="ts-orbit-canvas"
          style={{
            width: "100%",
            height: 680,
            position: "relative",
            marginTop: 60,
          }}
        >
          {/* Orbit path circles */}
          {[280, 460, 640].map((size) => (
            <div
              key={size}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: size,
                height: size,
                borderRadius: "50%",
                border: "1px dashed rgba(45,212,191,0.08)",
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Centre — axonz logo */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 70%)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                animation: "pulse 4s ease infinite",
              }}
            />
            <LogoIcon size={80} idPrefix="ts" />
          </div>

          {/* Ring 1 */}
          <div
            className="ts-orbit-ring"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 360,
              height: 360,
              animation: "orbitCW 35s linear infinite",
            }}
          >
            {RING1.tools.map((tool, i) => {
              const angle = (i / RING1.tools.length) * 2 * Math.PI;
              const x = Math.cos(angle) * RING1.radius;
              const y = Math.sin(angle) * RING1.radius;
              return (
                <ToolNode
                  key={tool.id}
                  tool={tool}
                  x={x}
                  y={y}
                  nodeBg={RING1.nodeBg}
                  nodeBorder={RING1.nodeBorder}
                  labelColor={RING1.labelColor}
                  onHover={handleHover}
                  onTooltipMove={handleTooltipMove}
                />
              );
            })}
          </div>

          {/* Ring 2 — counter-clockwise, nodes use counterCCW */}
          <div
            className="ts-orbit-ring"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 540,
              height: 540,
              animation: "orbitCCW 55s linear infinite",
            }}
          >
            {RING2.tools.map((tool, i) => {
              const angle = (i / RING2.tools.length) * 2 * Math.PI;
              const x = Math.cos(angle) * RING2.radius;
              const y = Math.sin(angle) * RING2.radius;
              return (
                <div
                  key={tool.id}
                  className="ts-counter"
                  style={{
                    position: "absolute",
                    left: `calc(50% + ${x}px - 36px)`,
                    top: `calc(50% + ${y}px - 36px)`,
                    width: 72,
                    height: 72,
                    animation: "counterCCW 55s linear infinite",
                  }}
                >
                  <div
                    onMouseEnter={(e) => handleHover(tool, e)}
                    onMouseLeave={() => handleHover(null)}
                    onMouseMove={handleTooltipMove}
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 16,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      backdropFilter: "blur(8px)",
                      background: RING2.nodeBg,
                      border: `1px solid ${RING2.nodeBorder}`,
                    }}
                    onMouseOver={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "rgba(45,212,191,0.12)";
                      el.style.border = "1px solid #2DD4BF";
                      el.style.boxShadow = "0 0 20px rgba(45,212,191,0.25)";
                      el.style.transform = "scale(1.15)";
                      el.style.zIndex = "20";
                    }}
                    onMouseOut={(e) => {
                      const el = e.currentTarget;
                      el.style.background = RING2.nodeBg;
                      el.style.border = `1px solid ${RING2.nodeBorder}`;
                      el.style.boxShadow = "none";
                      el.style.transform = "scale(1)";
                      el.style.zIndex = "1";
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        fontFamily: "JetBrains Mono, monospace",
                        color: RING2.labelColor,
                      }}
                    >
                      {tool.letter}
                    </div>
                    <div
                      style={{
                        fontSize: 9,
                        fontFamily: '"DM Sans", sans-serif',
                        color: "rgba(255,255,255,0.5)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tool.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ring 3 */}
          <div
            className="ts-orbit-ring"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 720,
              height: 720,
              animation: "orbitCW 80s linear infinite",
            }}
          >
            {RING3.tools.map((tool, i) => {
              const angle = (i / RING3.tools.length) * 2 * Math.PI;
              const x = Math.cos(angle) * RING3.radius;
              const y = Math.sin(angle) * RING3.radius;
              return (
                <div
                  key={tool.id}
                  className="ts-counter"
                  style={{
                    position: "absolute",
                    left: `calc(50% + ${x}px - 36px)`,
                    top: `calc(50% + ${y}px - 36px)`,
                    width: 72,
                    height: 72,
                    animation: "counterCW 80s linear infinite",
                  }}
                >
                  <div
                    onMouseEnter={(e) => handleHover(tool, e)}
                    onMouseLeave={() => handleHover(null)}
                    onMouseMove={handleTooltipMove}
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 16,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      backdropFilter: "blur(8px)",
                      background: RING3.nodeBg,
                      border: `1px solid ${RING3.nodeBorder}`,
                    }}
                    onMouseOver={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "rgba(45,212,191,0.12)";
                      el.style.border = "1px solid #2DD4BF";
                      el.style.boxShadow = "0 0 20px rgba(45,212,191,0.25)";
                      el.style.transform = "scale(1.15)";
                      el.style.zIndex = "20";
                    }}
                    onMouseOut={(e) => {
                      const el = e.currentTarget;
                      el.style.background = RING3.nodeBg;
                      el.style.border = `1px solid ${RING3.nodeBorder}`;
                      el.style.boxShadow = "none";
                      el.style.transform = "scale(1)";
                      el.style.zIndex = "1";
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        fontFamily: "JetBrains Mono, monospace",
                        color: RING3.labelColor,
                      }}
                    >
                      {tool.letter}
                    </div>
                    <div
                      style={{
                        fontSize: 9,
                        fontFamily: '"DM Sans", sans-serif',
                        color: "rgba(255,255,255,0.5)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tool.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category legend */}
        <div
          className="ts-legend"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: 48,
          }}
        >
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 100,
              fontSize: 11,
              fontFamily: "JetBrains Mono, monospace",
              letterSpacing: "0.1em",
              background: "rgba(45,212,191,0.08)",
              border: "1px solid rgba(45,212,191,0.2)",
              color: "#2DD4BF",
            }}
          >
            ● VOICE
          </div>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 100,
              fontSize: 11,
              fontFamily: "JetBrains Mono, monospace",
              letterSpacing: "0.1em",
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.2)",
              color: "#A78BFA",
            }}
          >
            ● AI + COMM
          </div>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 100,
              fontSize: 11,
              fontFamily: "JetBrains Mono, monospace",
              letterSpacing: "0.1em",
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              color: "var(--text-muted)",
            }}
          >
            ● INFRA
          </div>
        </div>

        {/* Mobile grid */}
        <div
          className="ts-mobile-grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            maxWidth: 900,
            margin: "48px auto 0",
          }}
        >
          {ALL_TOOLS.map((tool) => (
            <div
              key={tool.id}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--card-border)",
                borderRadius: 12,
                padding: 16,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontFamily: "JetBrains Mono, monospace",
                  color: "#2DD4BF",
                  marginBottom: 4,
                }}
              >
                {tool.letter}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {tool.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x + 12,
            top: tooltip.y + 12,
            background: "rgba(6,13,24,0.95)",
            border: "1px solid rgba(45,212,191,0.3)",
            borderRadius: 8,
            padding: "8px 14px",
            fontSize: 12,
            fontFamily: "JetBrains Mono, monospace",
            color: "white",
            zIndex: 9999,
            pointerEvents: "none",
            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          }}
        >
          {tooltip.tool.tooltip}
        </div>
      )}
    </section>
  );
}
