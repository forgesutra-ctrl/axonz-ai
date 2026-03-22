"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";

const DEMO_URLS = {
  inbound: "https://www.aizyantra.com/demo/inbound",
  outbound: "https://www.aizyantra.com/demo/outbound",
};

const INDUSTRIES = [
  "BFSI & Fintech",
  "Healthcare",
  "E-commerce",
  "Real Estate",
  "EdTech",
  "Logistics",
];

const TRANSCRIPTS: Record<
  string,
  { lines: { who: string; txt: string }[]; outcome: string; duration: string }
> = {
  "BFSI & Fintech": {
    lines: [
      { who: "axonz", txt: "Namaste Mrs. Kapoor! Main axonz collections se bol raha hoon. Aapki July EMI ₹8,400 pending hai." },
      { who: "caller", txt: "Haan, kal tak kar deti hoon." },
      { who: "axonz", txt: "Bilkul. Main aapko payment link SMS kar raha hoon. Koi aur help?" },
      { who: "caller", txt: "Nahi, shukriya." },
      { who: "axonz", txt: "Thank you Mrs. Kapoor. Have a great day!" },
    ],
    outcome: "✓ Payment committed",
    duration: "1m 12s",
  },
  Healthcare: {
    lines: [
      { who: "axonz", txt: "Hello! This is axonz calling from City Health Clinic. Confirming your appointment with Dr. Sharma tomorrow at 11 AM. Can you make it?" },
      { who: "caller", txt: "Yes, I'll be there." },
      { who: "axonz", txt: "Wonderful! We'll send a reminder 2 hours before. Anything you need to bring?" },
      { who: "caller", txt: "My reports?" },
      { who: "axonz", txt: "Yes please bring your previous reports. See you tomorrow!" },
    ],
    outcome: "✓ Appointment confirmed",
    duration: "0m 48s",
  },
  "E-commerce": {
    lines: [
      { who: "axonz", txt: "Hi! This is axonz from ShopFast. Your COD order ORD-2291 for ₹2,499 is out for delivery today. Can you confirm?" },
      { who: "caller", txt: "Yes, I'll be home by 4 PM." },
      { who: "axonz", txt: "Perfect. We'll slot you between 4–6 PM. Any address change?" },
      { who: "caller", txt: "No, same address." },
      { who: "axonz", txt: "Done! You'll get an SMS when out for delivery. Thank you!" },
    ],
    outcome: "✓ Order confirmed",
    duration: "0m 52s",
  },
  "Real Estate": {
    lines: [
      { who: "axonz", txt: "Namaste! axonz calling from Skyline Residency. You enquired about 2BHK. What's your budget range?" },
      { who: "caller", txt: "Around 80 lakhs." },
      { who: "axonz", txt: "Perfect. We have units from 75L to 95L. Would you like a site visit this weekend?" },
      { who: "caller", txt: "Saturday morning works." },
      { who: "axonz", txt: "Booked for Saturday 10 AM. Our agent will call you 30 min before. Thank you!" },
    ],
    outcome: "✓ Visit scheduled",
    duration: "1m 05s",
  },
  EdTech: {
    lines: [
      { who: "axonz", txt: "Hello! axonz from EduPrep Academy. Your batch starts Monday. Fee of ₹12,000 is due. Can we proceed?" },
      { who: "caller", txt: "Yes, I'll pay today." },
      { who: "axonz", txt: "Great! I'll send the payment link. Do you need a counsellor call for doubt clearing?" },
      { who: "caller", txt: "Maybe later." },
      { who: "axonz", txt: "No problem. Welcome to EduPrep! See you Monday." },
    ],
    outcome: "✓ Fee committed",
    duration: "0m 58s",
  },
  Logistics: {
    lines: [
      { who: "axonz", txt: "Hi! axonz from FastShip. Your package SHIP-4421 is 30 min away. Will someone be available?" },
      { who: "caller", txt: "Yes, I'm home." },
      { who: "axonz", txt: "Perfect. Driver will call when at gate. Any delivery instructions?" },
      { who: "caller", txt: "Leave at door if I don't answer." },
      { who: "axonz", txt: "Noted. Delivery between 2–2:30 PM. Thank you!" },
    ],
    outcome: "✓ Slot confirmed",
    duration: "0m 45s",
  },
};

function TypewriterText({ lines }: { lines: { who: string; txt: string }[] }) {
  const [visibleLines, setVisibleLines] = useState<{ who: string; txt: string; show: boolean }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;
    const line = lines[currentLine];
    if (currentChar <= line.txt.length) {
      const t = setTimeout(() => {
        setVisibleLines((prev) => {
          const next = [...prev];
          if (!next[currentLine]) next[currentLine] = { ...line, txt: "", show: true };
          next[currentLine] = { ...line, txt: line.txt.slice(0, currentChar), show: true };
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, 35);
      return () => clearTimeout(t);
    } else {
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
    }
  }, [currentLine, currentChar, lines]);

  return (
    <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, lineHeight: 2 }}>
      {visibleLines.map((l, i) => (
        <div key={i} style={{ color: l.who === "axonz" ? "#2DD4BF" : "rgba(255,255,255,0.85)", marginBottom: 8 }}>
          <span style={{ color: "rgba(255,255,255,0.4)", marginRight: 8 }}>{l.who}:</span>
          {l.txt}
        </div>
      ))}
    </div>
  );
}

export default function DemoPage() {
  const [selected, setSelected] = useState("BFSI & Fintech");
  const [hovered, setHovered] = useState<"inbound" | "outbound" | null>(null);
  const t = TRANSCRIPTS[selected];

  const handleSelect = (type: "inbound" | "outbound") => {
    window.open(DEMO_URLS[type], "_blank");
  };

  return (
    <PageWrapper
      title="Hear axonz.ai in action."
      subtitle="Real conversations. Real industries. Zero scripts."
    >
      <div style={{ padding: "60px 48px" }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
          {INDUSTRIES.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelected(ind)}
              style={{
                padding: "10px 20px",
                borderRadius: 100,
                border: selected === ind ? "1px solid #2DD4BF" : "1px solid rgba(255,255,255,0.15)",
                background: selected === ind ? "rgba(45,212,191,0.15)" : "transparent",
                color: selected === ind ? "#2DD4BF" : "rgba(255,255,255,0.8)",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              {ind}
            </button>
          ))}
        </div>
        <div
          style={{
            maxWidth: 640,
            margin: "0 auto 60px",
            background: "#0A1525",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: 32,
          }}
        >
          <div style={{ fontSize: 11, color: "#2DD4BF", fontFamily: "JetBrains Mono", marginBottom: 20 }}>
            {selected} Demo Call
          </div>
          <TypewriterText key={selected} lines={t.lines} />
          <div style={{ display: "flex", gap: 16, marginTop: 24, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            <span>Hinglish</span>
            <span>{t.duration}</span>
            <span style={{ padding: "4px 12px", background: "rgba(45,212,191,0.2)", borderRadius: 100, color: "#2DD4BF" }}>
              {t.outcome}
            </span>
          </div>
        </div>

        {/* Choose your demo type - two large cards */}
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "60px 48px" }}>
          <h3
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 28,
              color: "white",
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Choose your demo type
          </h3>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 16,
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            Live AI voice agents. No sign-up. No waiting.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginBottom: 40,
            }}
          >
            <button
              onClick={() => handleSelect("inbound")}
              onMouseEnter={() => setHovered("inbound")}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === "inbound" ? "rgba(14,116,144,0.2)" : "rgba(255,255,255,0.04)",
                border: hovered === "inbound" ? "1.5px solid #2DD4BF" : "1.5px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "40px 32px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s ease",
                boxShadow: hovered === "inbound" ? "0 0 24px rgba(45,212,191,0.15)" : "none",
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>📲</div>
              <div style={{ fontFamily: '"DM Serif Display", serif', fontSize: 26, color: "white", marginBottom: 12 }}>
                Inbound
              </div>
              <div style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                You call axonz.ai. Experience how it answers, understands, and resolves — live.
              </div>
              <div
                style={{
                  marginTop: 20,
                  fontSize: 12,
                  fontFamily: "JetBrains Mono, monospace",
                  color: hovered === "inbound" ? "#2DD4BF" : "rgba(255,255,255,0.25)",
                }}
              >
                Try it now →
              </div>
            </button>
            <button
              onClick={() => handleSelect("outbound")}
              onMouseEnter={() => setHovered("outbound")}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === "outbound" ? "rgba(14,116,144,0.2)" : "rgba(255,255,255,0.04)",
                border: hovered === "outbound" ? "1.5px solid #2DD4BF" : "1.5px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "40px 32px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s ease",
                boxShadow: hovered === "outbound" ? "0 0 24px rgba(45,212,191,0.15)" : "none",
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>📞</div>
              <div style={{ fontFamily: '"DM Serif Display", serif', fontSize: 26, color: "white", marginBottom: 12 }}>
                Outbound
              </div>
              <div style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                axonz.ai calls you. See how it handles collections, reminders, and follow-ups.
              </div>
              <div
                style={{
                  marginTop: 20,
                  fontSize: 12,
                  fontFamily: "JetBrains Mono, monospace",
                  color: hovered === "outbound" ? "#2DD4BF" : "rgba(255,255,255,0.25)",
                }}
              >
                Try it now →
              </div>
            </button>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/contact"
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
              }}
            >
              Prefer a guided demo with our team?
            </Link>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            maxWidth: 700,
            margin: "0 auto",
            padding: "48px 0",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#2DD4BF" }}>500+</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>demo calls conducted</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#2DD4BF" }}>92%</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>demo-to-pilot conversion</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#2DD4BF" }}>&lt; 2 hr</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>response time</div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
