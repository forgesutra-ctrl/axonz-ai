"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

const INDUSTRIES = [
  {
    icon: "🏦",
    name: "BFSI & Fintech",
    description:
      "From EMI reminders to KYC verification, axonz handles the full collections and servicing lifecycle — compliantly, at scale.",
    useCases: [
      "EMI payment reminders & collection calls",
      "KYC verification over voice",
      "Loan status & query resolution",
      "Insurance premium reminders",
    ],
    compliance: "RBI · IRDAI compliant",
    callFlow: ["Identify caller", "Verify KYC", "Resolve query / collect payment"],
    roiStat: "67% reduction in collection costs",
  },
  {
    icon: "🏥",
    name: "Healthcare",
    description:
      "Appointment booking, prescription reminders, post-discharge follow-ups — in the patient's language, at any hour.",
    useCases: [
      "Appointment booking & confirmation",
      "Medication & prescription reminders",
      "Post-discharge follow-up calls",
      "Health insurance pre-authorisation",
    ],
    compliance: "ABDM ready · HIPAA aware",
    callFlow: ["Patient identifies", "Confirm slot", "Send SMS confirmation"],
    roiStat: "40% reduction in no-show rates",
  },
  {
    icon: "🛒",
    name: "E-commerce & D2C",
    description:
      "Order confirmations, return initiations, abandoned cart recovery — voice converts where WhatsApp fails.",
    useCases: [
      "COD order confirmation calls",
      "Return & refund initiation",
      "Abandoned cart recovery",
      "Delivery exception handling",
    ],
    compliance: "TRAI DND compliant",
    callFlow: ["Confirm order", "Upsell / confirm address", "Update CRM"],
    roiStat: "23% cart recovery rate",
  },
  {
    icon: "🏗️",
    name: "Real Estate",
    description:
      "Qualify every inbound lead, follow up 24/7, schedule site visits — without burning sales team bandwidth.",
    useCases: [
      "Inbound lead qualification",
      "Site visit scheduling",
      "Payment reminder calls",
      "Post-visit follow-up",
    ],
    compliance: "RERA aware",
    callFlow: ["Qualify budget & timeline", "Schedule visit", "Notify agent"],
    roiStat: "3× more qualified leads per agent",
  },
  {
    icon: "📚",
    name: "EdTech & Coaching",
    description:
      "Student onboarding, fee reminders, exam notifications — multilingual and empathetic by design.",
    useCases: [
      "Student onboarding calls",
      "Fee payment reminders",
      "Exam & result notifications",
      "Doubt resolution triage",
    ],
    compliance: "FERPA aware",
    callFlow: ["Welcome student", "Collect fee intent", "Schedule counsellor"],
    roiStat: "58% improvement in fee collection",
  },
  {
    icon: "📦",
    name: "Logistics & Supply Chain",
    description:
      "Delivery confirmations, exception handling, driver coordination — automated across every mile.",
    useCases: [
      "Delivery confirmation & scheduling",
      "Missed delivery rescheduling",
      "Driver coordination calls",
      "Returns & damage reporting",
    ],
    compliance: "Standard",
    callFlow: ["Confirm delivery slot", "Handle exception", "Update TMS"],
    roiStat: "80% reduction in manual delivery confirmation calls",
  },
];

function IndustrySection({
  industry,
  reverse,
  onDemoClick,
}: {
  industry: (typeof INDUSTRIES)[0];
  reverse: boolean;
  onDemoClick: () => void;
}) {
  return (
    <div
      className="industries-page-section"
      style={{
        padding: "80px 48px",
        maxWidth: 1200,
        margin: "auto",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "center",
      }}
    >
      <div style={{ order: reverse ? 2 : 1 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(45,212,191,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            marginBottom: 16,
          }}
        >
          {industry.icon}
        </div>
        <h2
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: 36,
            color: "white",
            marginBottom: 16,
          }}
        >
          {industry.name}
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 16,
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          {industry.description}
        </p>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: 20 }}>
          {industry.useCases.map((uc) => (
            <li
              key={uc}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "rgba(255,255,255,0.8)",
                fontSize: 14,
                marginBottom: 8,
              }}
            >
              <span style={{ color: "#2DD4BF" }}>•</span> {uc}
            </li>
          ))}
        </ul>
        <p
          style={{
            fontSize: 12,
            color: "#2DD4BF",
            fontFamily: "JetBrains Mono, monospace",
            marginBottom: 20,
          }}
        >
          {industry.compliance}
        </p>
        <button
          onClick={onDemoClick}
          style={{
            padding: "12px 24px",
            background: "#2DD4BF",
            color: "#060D18",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          See {industry.name.split(" ")[0]} Demo →
        </button>
      </div>
      <div style={{ order: reverse ? 1 : 2 }}>
        <div
          style={{
            background: "#0A1525",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: 28,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#2DD4BF",
              fontFamily: "JetBrains Mono, monospace",
              marginBottom: 20,
            }}
          >
            Sample Call Flow
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            {industry.callFlow.map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    padding: "8px 16px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 100,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {step}
                </div>
                {i < industry.callFlow.length - 1 && (
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>→</span>
                )}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              fontFamily: '"DM Serif Display", serif',
              color: "#2DD4BF",
              marginBottom: 4,
            }}
          >
            {industry.roiStat}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            Tech tags: {industry.compliance}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesPage() {
  const { openDemo } = useApp();
  return (
    <PageWrapper
      title="Built for every industry"
      subtitle="Pre-trained on domain knowledge. Compliant by design. Ready to deploy."
    >
      {INDUSTRIES.map((industry, i) => (
        <IndustrySection
          key={industry.name}
          industry={industry}
          reverse={i % 2 === 1}
          onDemoClick={openDemo}
        />
      ))}
      <div
        style={{
          padding: "96px 48px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: 36,
            color: "white",
            marginBottom: 12,
          }}
        >
          Don&apos;t see your industry?
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 18,
            marginBottom: 32,
            maxWidth: 500,
            margin: "0 auto 32px",
          }}
        >
          We&apos;ve deployed across 20+ verticals. Let&apos;s talk about yours.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            padding: "16px 40px",
            background: "linear-gradient(135deg, #0E7490, #2DD4BF)",
            color: "white",
            borderRadius: 12,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Book a Discovery Call →
        </Link>
      </div>
    </PageWrapper>
  );
}
