"use client";

export default function CTA() {
  return (
    <section className="cta-section relative z-10 overflow-hidden" style={{ background: "var(--gradient-accent)" }}>
      {/* Pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="wrap relative">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: 16,
          }}
        >
          Ready to Test Your Metal?
        </h2>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", marginBottom: 32, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
          Get accurate chemical analysis results with NABL-accredited certification.
        </p>
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            fontFamily: "var(--font-display)",
            display: "inline-block",
            padding: "16px 48px",
            background: "#fff",
            color: "#1a2744",
            borderRadius: 50,
            border: "none",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase" as const,
            transition: "all 0.3s",
          }}
        >
          Request a Quote Today
        </button>
      </div>
    </section>
  );
}
