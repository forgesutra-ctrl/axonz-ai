"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import { Pricing as PricingSection } from "@/components/sections/Pricing";
import { useApp } from "@/context/AppContext";
import { PRICING } from "@/lib/constants";

const FAQ_ITEMS = [
  {
    q: "Is there a setup cost?",
    a: "Setup costs are scoped and quoted separately based on your integration requirements — CRM connections, custom workflows, and compliance configurations. Your sales contact will provide a detailed setup quote before you commit to anything.",
  },
  {
    q: "What's included in the free pilot?",
    a: "500 live calls, full platform access, and our team's support for the entire pilot period.",
  },
  {
    q: "Can I switch plans mid-month?",
    a: "Yes. You're billed per minute used. Upgrading takes effect immediately.",
  },
  {
    q: "Are GST and taxes included?",
    a: "GST 18% and local taxes apply separately on invoices. See the note below the pricing cards for details.",
  },
  {
    q: "What happens if I exceed my monthly minutes?",
    a: "Overage is billed at the same per-minute rate as your plan. No surprise rate increases.",
  },
  {
    q: "Do you offer annual contracts?",
    a: "Yes — annual prepay gets you an additional 10% discount. Contact sales.",
  },
];

const INFRASTRUCTURE = [
  "Exotel PSTN (India) / Twilio (US)",
  "WebSocket media streaming",
  "Call recording & storage",
  "DND registry checks",
];

const AI_STACK = [
  "OpenAI gpt-realtime-mini",
  "Whisper-1 transcription",
  "GPT-4o intent resolution",
  "ElevenLabs voice synthesis",
];

const PLATFORM = [
  "Live dashboard & analytics",
  "CRM webhook integration",
  "Call transcripts & recordings",
  "TRAI / RBI compliance tools",
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="faq-accordion" style={{ maxWidth: 700, margin: "0 auto" }}>
      {FAQ_ITEMS.map((item, i) => (
        <div
          key={item.q}
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              width: "100%",
              padding: "20px 0",
              background: "none",
              border: "none",
              color: "white",
              fontSize: 16,
              fontWeight: 500,
              cursor: "pointer",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {item.q}
            <span
              style={{
                transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
                fontSize: 14,
              }}
            >
              ▼
            </span>
          </button>
          {openIndex === i && (
            <div
              style={{
                padding: "0 0 20px",
                fontSize: 15,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
              }}
            >
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PricingCalculator() {
  const { region } = useApp();
  const [monthlyCalls, setMonthlyCalls] = useState(5000);
  const [avgDuration, setAvgDuration] = useState(3);

  const totalMinutes = useMemo(
    () => monthlyCalls * avgDuration,
    [monthlyCalls, avgDuration]
  );

  const axonzRate = region === "IN" ? 5.49 : 0.09;
  const industryRate = region === "IN" ? 12 : 0.25;

  const axonzMonthlyCost = useMemo(
    () => totalMinutes * axonzRate,
    [totalMinutes, axonzRate]
  );

  const industryMonthlyCost = useMemo(
    () => totalMinutes * industryRate,
    [totalMinutes, industryRate]
  );

  const annualSavings = useMemo(
    () => (industryMonthlyCost - axonzMonthlyCost) * 12,
    [industryMonthlyCost, axonzMonthlyCost]
  );

  const durationLabel =
    avgDuration % 1 !== 0 ? `${avgDuration.toFixed(1)} min` : `${avgDuration} min`;

  return (
    <div
      className="pricing-calculator"
      style={{
        background: "#0A1525",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 40,
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <h3
        style={{
          fontFamily: '"DM Serif Display", serif',
          fontSize: 24,
          color: "white",
          marginBottom: 24,
        }}
      >
        Calculate your cost
      </h3>
      <div style={{ marginBottom: 20 }}>
        <label
          style={{
            display: "block",
            fontSize: 12,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 8,
          }}
        >
          Monthly calls
        </label>
        <input
          type="range"
          min={500}
          max={50000}
          step={500}
          value={monthlyCalls}
          onChange={(e) => setMonthlyCalls(Number(e.target.value))}
          style={{ width: "100%" }}
        />
        <span style={{ color: "#2DD4BF", fontFamily: "JetBrains Mono", marginLeft: 8 }}>
          {monthlyCalls.toLocaleString("en-IN")}
        </span>
      </div>
      <div style={{ marginBottom: 24 }}>
        <label
          style={{
            display: "block",
            fontSize: 12,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 8,
          }}
        >
          Avg duration (min)
        </label>
        <input
          type="range"
          min={1}
          max={10}
          step={0.5}
          value={avgDuration}
          onChange={(e) => setAvgDuration(Number(e.target.value))}
          style={{ width: "100%" }}
        />
        <span style={{ color: "#2DD4BF", fontFamily: "JetBrains Mono", marginLeft: 8 }}>
          {durationLabel}
        </span>
      </div>
      <div
        className="pricing-calc-results"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 12,
          marginTop: 24,
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            padding: "16px 18px",
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.35)",
              fontFamily: "JetBrains Mono, monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 8,
            }}
          >
            Monthly minutes
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "white",
              fontFamily: '"DM Serif Display", serif',
            }}
          >
            {totalMinutes.toLocaleString("en-IN")}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.3)",
              marginTop: 4,
            }}
          >
            {monthlyCalls.toLocaleString("en-IN")} calls × {avgDuration} min
          </div>
        </div>
        <div
          style={{
            background: "rgba(14,116,144,0.1)",
            border: "1px solid rgba(45,212,191,0.25)",
            borderRadius: 12,
            padding: "16px 18px",
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: "#2DD4BF",
              fontFamily: "JetBrains Mono, monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 8,
            }}
          >
            With axonz.ai/mo
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "white",
              fontFamily: '"DM Serif Display", serif',
            }}
          >
            {region === "IN"
              ? "₹" + Math.round(axonzMonthlyCost).toLocaleString("en-IN")
              : "$" + Math.round(axonzMonthlyCost).toLocaleString("en-US")}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.3)",
              marginTop: 4,
            }}
          >
            {region === "IN" ? "₹5.49" : "$0.09"}/min · Growth rate
          </div>
        </div>
        <div
          style={{
            background: "rgba(34,197,94,0.06)",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: 12,
            padding: "16px 18px",
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: "#22c55e",
              fontFamily: "JetBrains Mono, monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 8,
            }}
          >
            You save/year
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#22c55e",
              fontFamily: '"DM Serif Display", serif',
            }}
          >
            {region === "IN"
              ? "₹" + Math.round(annualSavings).toLocaleString("en-IN")
              : "$" + Math.round(annualSavings).toLocaleString("en-US")}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "rgba(34,197,94,0.6)",
              marginTop: 4,
            }}
          >
            vs industry average
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.2)",
          fontFamily: "JetBrains Mono, monospace",
          textAlign: "center",
          marginTop: 16,
        }}
      >
        Industry average used:
        {region === "IN" ? " ₹12/min" : " $0.25/min"} · Estimate only · Actual
        costs may vary
      </div>
    </div>
  );
}

export default function PricingPage() {
  const { region, setRegion, openDemo } = useApp();
  return (
    <PageWrapper
      title="Transparent pricing."
      subtitle="Pay for what you use. No lock-ins. No surprises."
      headerExtra={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 100,
            padding: "3px",
            border: "1px solid rgba(255,255,255,0.1)",
            width: "fit-content",
            margin: "24px auto 0",
          }}
        >
          {(["IN", "US"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              style={{
                padding: "8px 20px",
                borderRadius: 100,
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                background: region === r ? "#2DD4BF" : "transparent",
                color: region === r ? "#060D18" : "rgba(255,255,255,0.5)",
              }}
            >
              {r === "IN" ? "₹ India" : "$ US"}
            </button>
          ))}
        </div>
      }
    >
        <div className="pricing-page-content" style={{ padding: "80px 48px" }}>
          <PricingSection />
        </div>
        <div className="pricing-page-calc" style={{ padding: "48px 48px 80px" }}>
          <h3
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 28,
              color: "white",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            Calculate your cost
          </h3>
          <PricingCalculator />
        </div>
        <div className="pricing-page-included" style={{ padding: "80px 48px", background: "#0A1525" }}>
          <h3
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 28,
              color: "white",
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            What&apos;s included
          </h3>
          <div
            className="pricing-page-included-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            <div>
              <h4 style={{ color: "#2DD4BF", fontSize: 14, marginBottom: 16 }}>Infrastructure</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {INFRASTRUCTURE.map((f) => (
                  <li key={f} style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginBottom: 8 }}>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: "#2DD4BF", fontSize: 14, marginBottom: 16 }}>AI Stack</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {AI_STACK.map((f) => (
                  <li key={f} style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginBottom: 8 }}>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: "#2DD4BF", fontSize: 14, marginBottom: 16 }}>Platform</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {PLATFORM.map((f) => (
                  <li key={f} style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginBottom: 8 }}>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pricing-page-faq" style={{ padding: "80px 48px" }}>
          <h3
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 28,
              color: "white",
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            FAQ
          </h3>
          <FaqAccordion />
        </div>
        <div style={{ padding: "80px 48px", textAlign: "center" }}>
          <button
            onClick={openDemo}
            style={{
              padding: "20px 56px",
              background: "linear-gradient(135deg, #0E7490, #2DD4BF)",
              color: "white",
              borderRadius: 14,
              fontSize: 18,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            Start your free pilot today
          </button>
        </div>
    </PageWrapper>
  );
}
