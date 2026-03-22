"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { useApp } from "@/context/AppContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Demo", href: "/demo" },
  { label: "Why axonz", href: "/why-axonz" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { region, setRegion, openDemo } = useApp();
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="nav-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(6,13,24,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          transition: "all 0.2s ease",
        }}
      >
        <Link
          href="/"
          className="nav-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            cursor: "pointer",
            color: "inherit",
          }}
        >
          <LogoIcon size={40} idPrefix="ng" />
          <div>
            <div className="nav-brand" style={{ fontSize: 20, fontWeight: 700, color: "white", lineHeight: 1, letterSpacing: "-0.02em", fontFamily: '"DM Sans", sans-serif' }}>
              axonz<span style={{ color: "#2DD4BF" }}>.ai</span>
            </div>
            <div className="nav-tagline" style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
              Voice Intelligence · Engineered
            </div>
            <div className="nav-unit" style={{ fontSize: 8, fontWeight: 400, letterSpacing: "0.06em", color: "rgba(45,212,191,0.38)", marginTop: 1 }}>
              A unit of AIzYantra Global Private Limited
            </div>
          </div>
        </Link>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {NAV_LINKS.filter((l) => l.label !== "Demo").map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                style={{
                  color: isActive ? "#2DD4BF" : "rgba(255,255,255,0.9)",
                  fontSize: 14,
                  textDecoration: "none",
                  fontWeight: isActive ? 600 : 400,
                  position: "relative",
                }}
              >
                {label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "#2DD4BF",
                      transform: "scaleX(1)",
                      transformOrigin: "left",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>
        <div className="nav-right-group" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="nav-right">
          <div className="region-toggle" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.06)",
                borderRadius: 100,
                padding: "3px",
                border: "1px solid rgba(255,255,255,0.1)",
                gap: 2,
              }}
            >
              {(["IN", "US"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  style={{
                    padding: "4px 12px",
                    borderRadius: 100,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: '"DM Sans", sans-serif',
                    transition: "all 0.2s ease",
                    background: region === r ? "#2DD4BF" : "transparent",
                    color: region === r ? "#060D18" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {r === "IN" ? "₹" : "$"}
                </button>
              ))}
            </div>

            <button
              className="nav-demo-btn"
              onClick={openDemo}
              style={{
                background: "#0E7490",
                color: "white",
                padding: "10px 20px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Hear a Demo ↗
            </button>
          </div>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 24,
            height: 18,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "100%",
                height: 2,
                background: "white",
                borderRadius: 2,
                transition: "all 0.3s ease",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(6,13,24,0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 199,
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              const isDemo = label === "Demo";
              return isDemo ? (
                <button
                  key={label}
                  onClick={() => {
                    openDemo();
                    setMenuOpen(false);
                  }}
                  className="mobile-menu-link"
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="mobile-menu-link"
                  style={{
                    fontFamily: '"DM Serif Display", serif',
                    fontSize: 20,
                    color: isActive ? "#2DD4BF" : "white",
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <div style={{ marginTop: "auto", paddingTop: 32 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.06)",
                borderRadius: 100,
                padding: "3px",
                border: "1px solid rgba(255,255,255,0.1)",
                gap: 2,
                marginBottom: 16,
              }}
            >
              {(["IN", "US"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  style={{
                    padding: "4px 12px",
                    borderRadius: 100,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: '"DM Sans", sans-serif',
                    transition: "all 0.2s ease",
                    background: region === r ? "#2DD4BF" : "transparent",
                    color: region === r ? "#060D18" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {r === "IN" ? "₹" : "$"}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                openDemo();
                setMenuOpen(false);
              }}
              style={{
                width: "100%",
                background: "linear-gradient(135deg,#0E7490,#2DD4BF)",
                color: "white",
                padding: 16,
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Hear a Demo →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
