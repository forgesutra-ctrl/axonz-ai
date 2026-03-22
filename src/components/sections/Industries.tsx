"use client";

const INDUSTRIES = [
  {
    name: "BFSI",
    desc: "Loan servicing, EMI reminders, collections, KYC verification.",
    tags: ["Banks", "NBFCs", "Insurance"],
  },
  {
    name: "Healthcare",
    desc: "Appointment scheduling, prescription reminders, lab results.",
    tags: ["Clinics", "Hospitals", "Pharma"],
  },
  {
    name: "E-commerce",
    desc: "Order tracking, returns, delivery updates, support.",
    tags: ["D2C", "Marketplaces"],
  },
  {
    name: "Real Estate",
    desc: "Site visits, property inquiries, loan assistance.",
    tags: ["Builders", "Brokers"],
  },
  {
    name: "EdTech",
    desc: "Enrollment, course support, fee reminders.",
    tags: ["Universities", "Coaching"],
  },
  {
    name: "Logistics",
    desc: "Shipment tracking, delivery coordination, POD.",
    tags: ["Fleet", "Last-mile"],
  },
];

export function Industries() {
  return (
    <section
      className="industries-section"
      style={{
        background: "var(--bg-dark)",
        padding: "96px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "var(--text-primary)",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          Built for every industry
        </h2>
        <div
          className="industries-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: 16,
                padding: 28,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(45,212,191,0.3)";
              }}
              onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-border)";
              }}
            >
              <h3 style={{ color: "var(--text-primary)", fontSize: 20, marginBottom: 12 }}>{ind.name}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                {ind.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {ind.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "rgba(14,116,144,0.08)",
                      border: "1px solid rgba(14,116,144,0.2)",
                      color: "#0E7490",
                      fontSize: 11,
                      padding: "4px 10px",
                      borderRadius: 100,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="industries-price-strip"
          style={{
            marginTop: 48,
            padding: "20px 32px",
            background: "var(--card-bg)",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: "var(--text-muted)", fontSize: 14 }}>
            Industry average: ₹5–8/min
          </span>
          <span style={{ color: "var(--text-dim)" }}>vs</span>
          <span style={{ color: "#0E7490", fontWeight: 600 }}>
            axonz.ai: from ₹3.07/min
          </span>
        </div>
      </div>
    </section>
  );
}
