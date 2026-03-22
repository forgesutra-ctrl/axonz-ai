"use client";

import Link from "next/link";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { useApp } from "@/context/AppContext";

export function Footer() {
  const { openDemo } = useApp();
  return (
    <footer
      className="footer-main"
      style={{
        background: "#020812",
        padding: "64px 48px 32px",
        marginTop: 0,
      }}
    >
      <div
        className="footer-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 48,
          borderBottom: "1px solid var(--card-border)",
        }}
      >
        <div className="footer-brand-col">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <LogoIcon size={32} idPrefix="fg" />
            <div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                axonz<span style={{ color: "#2DD4BF" }}>.ai</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, margin: "6px 0 4px 0" }}>
                Voice Intelligence · Engineered
              </p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>
                A unit of AIzYantra Global Private Limited
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: 600,
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Product
          </h4>
          {[
            { l: "Features", href: "/#features" },
            { l: "Pricing", href: "/pricing" },
            { l: "Demo", demo: true },
            { l: "Integrations", href: "/#integrations" },
          ].map((item) =>
            "demo" in item && item.demo ? (
              <button
                key={item.l}
                onClick={openDemo}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 14,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  padding: 0,
                  marginBottom: 8,
                  textAlign: "left",
                }}
              >
                {item.l}
              </button>
            ) : (
              <Link
                key={item.l}
                href={(item as { href: string }).href}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 14,
                  textDecoration: "none",
                  marginBottom: 8,
                }}
              >
                {item.l}
              </Link>
            )
          )}
        </div>
        <div>
          <h4
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: 600,
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Industries
          </h4>
          {["BFSI", "Healthcare", "E-commerce", "Logistics"].map((l) => (
            <Link
              key={l}
              href="/industries"
              style={{
                display: "block",
                color: "rgba(255,255,255,0.5)",
                fontSize: 14,
                textDecoration: "none",
                marginBottom: 8,
              }}
            >
              {l}
            </Link>
          ))}
        </div>
        <div>
          <h4
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: 600,
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Company
          </h4>
          {[
            { l: "About", href: "/why-axonz" },
            { l: "Contact", href: "/contact" },
            { l: "Careers", href: "/contact" },
          ].map(({ l, href }) => (
            <Link
              key={l}
              href={href}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.5)",
                fontSize: 14,
                textDecoration: "none",
                marginBottom: 8,
              }}
            >
              {l}
            </Link>
          ))}
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 16 }}>HQ: India</p>
        </div>
      </div>
      <div className="footer-bottom" style={{ paddingTop: 24, textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, fontFamily: "JetBrains Mono" }}>
          © 2026 axonz.ai
        </p>
      </div>
    </footer>
  );
}
