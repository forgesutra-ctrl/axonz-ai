"use client";

import { useState, useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";

const LANGUAGES = ["Hinglish", "Hindi", "Tamil", "Telugu", "Kannada", "English"];

const TYPEWRITER_PHRASES = [
  "Handle 10,000 calls simultaneously.",
  "Answer in Hindi, Tamil, Kannada + 9 more.",
  "Qualify leads while you sleep.",
  "Collect payments over voice.",
  "Deploy in 14 days flat.",
];

const VERB_PILLS = [
  { dot: "#D04A20", text: "Answer — every call, zero hold music" },
  { dot: "#2D6B4F", text: "Converse — in 12+ Indian, 150 globally" },
  { dot: "#2DD4BF", text: "Convert — leads, payments, tickets" },
];

const CONVERSATIONS: Record<
  string,
  {
    lang: string;
    lat: string;
    sent: string;
    lines: { who: string; txt: string }[];
  }
> = {
  Hinglish: {
    lang: "Hinglish",
    lat: "720ms",
    sent: "😊 Positive",
    lines: [
      { who: "agent", txt: "Namaste! Main acme finance se bol raha hoon." },
      { who: "caller", txt: "Haan, application AL-2291 hai mera." },
      { who: "agent", txt: "Mr. Sharma, loan approved ho gaya hai!" },
      { who: "caller", txt: "Thank you! Koi documents chahiye?" },
      { who: "agent", txt: "Nahi, sab complete. Have a great day!" },
    ],
  },
  Tamil: {
    lang: "Tamil",
    lat: "650ms",
    sent: "😊 Positive",
    lines: [
      { who: "agent", txt: "Vanakkam! Appointment confirm pannanum?" },
      { who: "caller", txt: "Aam, December 4th 3pm vennum." },
      { who: "agent", txt: "Confirm. SMS varum ungalukku." },
      { who: "caller", txt: "Nandri!" },
    ],
  },
  Telugu: {
    lang: "Telugu",
    lat: "710ms",
    sent: "😊 Positive",
    lines: [
      { who: "agent", txt: "Namaskaram! Meeru Suresh garu?" },
      { who: "caller", txt: "Avunu nene matladutunna." },
      { who: "agent", txt: "Appointment December 5th confirm chesamu." },
      { who: "caller", txt: "Chala thanks!" },
    ],
  },
  Kannada: {
    lang: "Kannada",
    lat: "680ms",
    sent: "😊 Positive",
    lines: [
      { who: "agent", txt: "Namaskara! Order ORD-4421 bagge." },
      { who: "caller", txt: "Heli, shipmant eega elli ide?" },
      { who: "agent", txt: "3 ganteya olagagi deliver agutte." },
      { who: "caller", txt: "Dhanyavaadagalu!" },
    ],
  },
  Hindi: {
    lang: "Hindi",
    lat: "695ms",
    sent: "😊 Positive",
    lines: [
      { who: "agent", txt: "Namaste! EMI reminder ke liye call kar raha hoon." },
      { who: "caller", txt: "Haan, 5 tarikh ko payment karenge." },
      { who: "agent", txt: "Perfect. Confirmation SMS bhej raha hoon." },
      { who: "caller", txt: "Theek hai, shukriya." },
    ],
  },
  English: {
    lang: "English",
    lat: "580ms",
    sent: "😐 Neutral",
    lines: [
      { who: "agent", txt: "Hi! Order ORD-8821 out for delivery today." },
      { who: "caller", txt: "Please update address to 14B Whitefield." },
      { who: "agent", txt: "Updated! Delivery by 6 PM. Anything else?" },
      { who: "caller", txt: "Perfect, thanks!" },
    ],
  },
};

export function Hero() {
  const { region, openDemo } = useApp();
  const [selectedLang, setSelectedLang] = useState("Hinglish");
  const [transcript, setTranscript] = useState<{ who: string; txt: string }[]>([]);
  const [metrics, setMetrics] = useState({ lang: "Hinglish", lat: "720ms", sent: "😊 Positive" });
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterPhraseIndex, setTypewriterPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutIds = useRef<number[]>([]);
  const twRef = useRef<number[]>([]);

  useEffect(() => {
    const phrases = TYPEWRITER_PHRASES;
    const currentPhrase = phrases[typewriterPhraseIndex];

    if (!isDeleting) {
      if (typewriterText.length < currentPhrase.length) {
        const id = window.setTimeout(() => {
          setTypewriterText(currentPhrase.slice(0, typewriterText.length + 1));
        }, 55);
        twRef.current.push(id);
      } else {
        const id = window.setTimeout(() => setIsDeleting(true), 1800);
        twRef.current.push(id);
      }
    } else {
      if (typewriterText.length > 0) {
        const id = window.setTimeout(() => {
          setTypewriterText((t) => t.slice(0, -1));
        }, 38);
        twRef.current.push(id);
      } else {
        const id = window.setTimeout(() => {
          setIsDeleting(false);
          setTypewriterPhraseIndex((i) => (i + 1) % phrases.length);
        }, 400);
        twRef.current.push(id);
      }
    }

    return () => {
      twRef.current.forEach(clearTimeout);
      twRef.current = [];
    };
  }, [typewriterText, typewriterPhraseIndex, isDeleting]);

  useEffect(() => {
    timeoutIds.current.forEach((id) => clearTimeout(id));
    timeoutIds.current = [];
    setTranscript([]);
    setMetrics({ lang: "Hinglish", lat: "720ms", sent: "—" });

    const conv = CONVERSATIONS[selectedLang];
    if (!conv) return;

    setMetrics((m) => ({ ...m, lang: conv.lang, lat: conv.lat, sent: "—" }));
    let delay = 1000;

    conv.lines.forEach((line, idx) => {
      const id = window.setTimeout(() => {
        setTranscript((prev) => [...prev, line]);
        if (idx === conv.lines.length - 1) {
          const sentId = window.setTimeout(() => {
            setMetrics((m) => ({ ...m, sent: conv.sent }));
          }, 400);
          timeoutIds.current.push(sentId);
        }
      }, delay);
      timeoutIds.current.push(id);
      delay += line.txt.length * 28 + 600;
    });

    return () => timeoutIds.current.forEach(clearTimeout);
  }, [selectedLang]);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-dark)",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          filter: "blur(70px)",
          background: "radial-gradient(circle, rgba(14,116,144,0.12), transparent 70%)",
          top: -200,
          left: -200,
          animation: "blobFloat 18s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          filter: "blur(70px)",
          background: "radial-gradient(circle, rgba(45,212,191,0.07), transparent 70%)",
          top: 100,
          right: -100,
          animation: "blobFloat 18s ease-in-out infinite",
          animationDelay: "-7s",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          filter: "blur(70px)",
          background: "radial-gradient(circle, rgba(14,116,144,0.06), transparent 70%)",
          bottom: -100,
          left: "40%",
          animation: "blobFloat 18s ease-in-out infinite",
          animationDelay: "-14s",
        }}
      />

      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "60px",
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "120px 48px 80px",
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div className="hero-left" style={{ position: "relative", zIndex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 100,
              background: "rgba(14,116,144,0.1)",
              border: "1px solid rgba(45,212,191,0.3)",
              color: "#0E7490",
              fontSize: 13,
              fontWeight: 500,
              marginBottom: 28,
              opacity: 0,
              transform: "translateY(20px)",
              animation: "fadeUp 0.7s ease 0.1s forwards",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#2DD4BF",
                animation: "pulseDot 2s infinite",
              }}
            />
            India&apos;s Voice AI — Now Live
          </div>

          <h1
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: "clamp(52px, 5.5vw, 78px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              marginBottom: 12,
              opacity: 0,
              transform: "translateY(24px)",
              animation: "fadeUp 0.8s ease 0.2s forwards",
              color: "var(--text-primary)",
            }}
          >
            axonz
            <span
              className="hero-ai-underline"
              style={{
                color: "#2DD4BF",
                display: "inline-block",
              }}
            >
              .ai
            </span>
          </h1>

          <p
            style={{
              fontSize: 17,
              color: "var(--text-muted)",
              marginBottom: 20,
              maxWidth: 480,
              opacity: 0,
              transform: "translateY(24px)",
              animation: "fadeUp 0.7s ease 0.35s forwards",
            }}
          >
            {region === "IN"
              ? "12+ Indian languages. ₹5.99/min. Zero hold music."
              : "150 languages globally. $0.10/min. Zero hold music."}
          </p>

          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#2DD4BF",
              fontFamily: "JetBrains Mono",
              marginBottom: 28,
              minHeight: 32,
              opacity: 0,
              transform: "translateY(24px)",
              animation: "fadeUp 0.6s ease 0.5s forwards",
            }}
          >
            {typewriterText}
            <span
              style={{
                borderRight: "2px solid #2DD4BF",
                animation: "blink 0.8s step-end infinite",
                marginLeft: 2,
              }}
            >
              {" "}
            </span>
          </div>

          <div
            className="hero-verb-pills"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 7,
              marginBottom: 32,
              opacity: 0,
              transform: "translateY(24px)",
              animation: "fadeUp 0.7s ease 0.45s forwards",
            }}
          >
            {VERB_PILLS.map((pill, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "9px 18px",
                  borderRadius: 100,
                  border: "1.5px solid rgba(255,255,255,0.1)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.8)",
                  background: "rgba(255,255,255,0.04)",
                  width: "fit-content",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#2DD4BF";
                  e.currentTarget.style.color = "#0E7490";
                  e.currentTarget.style.transform = "translateX(8px)";
                  e.currentTarget.style.background = "rgba(14,116,144,0.1)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(45,212,191,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: pill.dot,
                    marginRight: 8,
                  }}
                />
                {pill.text}
              </div>
            ))}
          </div>

          <div
            className="hero-cta-buttons"
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              opacity: 0,
              transform: "translateY(24px)",
              animation: "fadeUp 0.7s ease 0.6s forwards",
            }}
          >
            <button
              style={{
                padding: "14px 28px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #0E7490, #2DD4BF)",
                color: "white",
                fontSize: 15,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 36px rgba(14,116,144,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Deploy Your Voice Bot →
            </button>
            <button
              onClick={openDemo}
              style={{
                padding: "14px 28px",
                borderRadius: 10,
                border: "1.5px solid rgba(255,255,255,0.15)",
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              ▶ Hear a Demo
            </button>
          </div>
        </div>

        <div
          className="hero-voice-panel"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 0,
            padding: 20,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 480,
            }}
          >
            <div
              className="voice-terminal"
              style={{
                background: "#080c12",
                border: "1px solid rgba(45,212,191,0.2)",
                borderRadius: 14,
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                minHeight: "480px",
                boxShadow:
                  "0 0 0 1px rgba(45,212,191,0.06), 0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div
                style={{
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.03)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <span
                  style={{
                    flex: 1,
                    fontSize: 11,
                    fontFamily: "JetBrains Mono",
                    color: "rgba(255,255,255,0.3)",
                    marginLeft: 10,
                  }}
                >
                  axonz.ai · Live Call
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#00ff88",
                      animation: "pulseDot 2s infinite",
                    }}
                  />
                  <span style={{ fontSize: 10, fontFamily: "JetBrains Mono", color: "#00ff88" }}>
                    LIVE
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  height: 56,
                  padding: "8px 20px",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <style>{`
                  @keyframes badgeWave {
                    0%, 100% { transform: scaleY(0.2); }
                    50% { transform: scaleY(1); }
                  }
                `}</style>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: 3,
                      height: 14,
                      borderRadius: 2,
                      background: "#2DD4BF",
                      transformOrigin: "center bottom",
                      animation: `badgeWave ${0.6 + i * 0.1}s ease infinite ${i * 0.08}s`,
                      display: "inline-block",
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  textAlign: "center",
                  fontSize: 9,
                  fontFamily: "JetBrains Mono",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.2)",
                  padding: "0 12px 8px",
                }}
              >
                · switch language ·
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 6,
                  padding: "0 12px 8px",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                }}
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLang(lang)}
                    style={{
                      flexShrink: 0,
                      cursor: "pointer",
                      padding: "5px 14px",
                      borderRadius: 100,
                      fontSize: 12,
                      fontFamily: "JetBrains Mono",
                      border:
                        selectedLang === lang
                          ? "1px solid rgba(45,212,191,0.5)"
                          : "1px solid rgba(255,255,255,0.1)",
                      background:
                        selectedLang === lang ? "rgba(14,116,144,0.2)" : "var(--card-bg)",
                      color: selectedLang === lang ? "#2DD4BF" : "rgba(255,255,255,0.4)",
                      transition: "all 0.2s",
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <div
                style={{
                  flex: 1,
                  margin: "0 12px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 10,
                  padding: 14,
                  minHeight: 150,
                  maxHeight: 170,
                  overflowY: "auto",
                  fontFamily: "JetBrains Mono",
                  fontSize: 11,
                  lineHeight: 1.9,
                }}
              >
                {transcript.length === 0 ? (
                  <div
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      textAlign: "center",
                      paddingTop: 50,
                    }}
                  >
                    · connecting ·
                  </div>
                ) : (
                  transcript.map((line, i) => (
                    <div key={i}>
                      {line.who === "agent" ? (
                        <span style={{ color: "#2DD4BF" }}>◆ axonz → </span>
                      ) : (
                        <span style={{ color: "rgba(255,255,255,0.7)" }}>◇ caller &gt; </span>
                      )}
                      {line.txt}
                    </div>
                  ))
                )}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 8,
                  padding: 14,
                }}
              >
                {[
                  { label: "Language", value: metrics.lang },
                  { label: "Latency", value: metrics.lat },
                  { label: "Sentiment", value: metrics.sent },
                ].map((m) => (
                  <div
                    key={m.label}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: 8,
                      padding: "12px 10px",
                      textAlign: "center",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "white",
                        fontFamily: "JetBrains Mono",
                      }}
                    >
                      {m.value}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: "rgba(255,255,255,0.3)",
                        marginTop: 2,
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="hero-floating-badge"
              style={{
                position: "absolute",
                top: -20,
                right: -30,
                zIndex: 10,
                background: "rgba(10,21,37,0.95)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(45,212,191,0.2)",
                borderRadius: 10,
                padding: "10px 14px",
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
                display: "flex",
                alignItems: "center",
                gap: 7,
                whiteSpace: "nowrap",
                boxShadow: "0 8px 28px rgba(0,0,0,0.4)",
                animation: "floatA 3s ease infinite",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                }}
              />
              Live · 12+ languages
            </div>
            <div
              className="hero-floating-badge"
              style={{
                position: "absolute",
                bottom: 40,
                left: -40,
                zIndex: 10,
                background: "rgba(10,21,37,0.95)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(45,212,191,0.2)",
                borderRadius: 10,
                padding: "10px 14px",
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
                display: "flex",
                alignItems: "center",
                gap: 7,
                whiteSpace: "nowrap",
                boxShadow: "0 8px 28px rgba(0,0,0,0.4)",
                animation: "floatB 4s ease infinite",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#2DD4BF",
                }}
              />
              ⚡ 300ms latency
            </div>
            <div
              className="hero-floating-badge"
              style={{
                position: "absolute",
                bottom: -10,
                right: -20,
                zIndex: 10,
                background: "rgba(10,21,37,0.95)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(45,212,191,0.2)",
                borderRadius: 10,
                padding: "10px 14px",
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
                display: "flex",
                alignItems: "center",
                gap: 7,
                whiteSpace: "nowrap",
                boxShadow: "0 8px 28px rgba(0,0,0,0.4)",
                animation: "floatA 3.5s ease infinite 0.5s",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#2DD4BF",
                }}
              />
              ✓ TRAI Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
