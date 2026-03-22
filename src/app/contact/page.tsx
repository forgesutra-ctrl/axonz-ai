"use client";

import { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import Link from "next/link";

const INDUSTRY_OPTIONS = [
  "BFSI",
  "Healthcare",
  "E-commerce",
  "Real Estate",
  "EdTech",
  "Logistics",
  "Other",
];

const VOLUME_OPTIONS = [
  "Under 1,000",
  "1,000–5,000",
  "5,000–20,000",
  "20,000–1L",
  "Above 1L",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    industry: "",
    monthly_volume: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "contact-page",
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: "14px 16px",
    color: "white",
    fontSize: 14,
    width: "100%" as const,
  };

  return (
    <PageWrapper
      title="Let's talk."
      subtitle="Tell us about your use case. We'll respond within 2 hours."
    >
      <div
        className="contact-page-content"
        style={{
          padding: "80px 48px",
          maxWidth: 1100,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        {/* Left — Contact info */}
        <div>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "white", marginBottom: 8 }}>
              WhatsApp direct
            </div>
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#2DD4BF",
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              Chat on WhatsApp →
            </Link>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>
              Fastest response — usually &lt; 30 min
            </div>
          </div>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "white", marginBottom: 8 }}>
              Email
            </div>
            <a
              href="mailto:hello@axonz.ai"
              style={{ color: "#2DD4BF", fontSize: 16, textDecoration: "none" }}
            >
              hello@axonz.ai
            </a>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>
              For detailed enquiries
            </div>
          </div>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "white", marginBottom: 8 }}>
              Office
            </div>
            <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 16 }}>
              Bengaluru, Karnataka, India
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>
              AIzYantra Global Private Limited
            </div>
          </div>
          <div
            style={{
              background: "#0A1525",
              border: "1px solid rgba(45,212,191,0.2)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", marginBottom: 8 }}>
              ⚡ Average response time: 2 hours
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", marginBottom: 8 }}>
              📞 Free pilot: 500 calls, no commitment
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.9)" }}>
              🚀 Go-live: 14 days from contract
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div>
          {submitted ? (
            <div
              style={{
                padding: 40,
                textAlign: "center",
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
                borderRadius: 16,
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "white", marginBottom: 8 }}>
                Message received!
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
                We&apos;ll reach out within 2 hours.
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                Check your WhatsApp for confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <input
                required
                placeholder="Full Name *"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                style={inputStyle}
              />
              <input
                required
                placeholder="Company Name *"
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                style={inputStyle}
              />
              <select
                required
                value={form.industry}
                onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                <option value="">Industry *</option>
                {INDUSTRY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <select
                required
                value={form.monthly_volume}
                onChange={(e) => setForm((f) => ({ ...f, monthly_volume: e.target.value }))}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                <option value="">Monthly call volume *</option>
                {VOLUME_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <input
                required
                type="tel"
                placeholder="Phone * (+91)"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                style={inputStyle}
              />
              <input
                required
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                style={inputStyle}
              />
              <textarea
                placeholder="Tell us about your use case or what you want to automate..."
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                rows={4}
                style={{ ...inputStyle, resize: "vertical" }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: "16px",
                  background: "linear-gradient(135deg, #0E7490, #2DD4BF)",
                  color: "white",
                  border: "none",
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: loading ? "wait" : "pointer",
                  width: "100%",
                }}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
