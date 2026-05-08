"use client";
import { useEffect, useRef } from "react";
import { FlaskConical, CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "NABL Accredited",
  "Qualified Engineers",
  "Fast Turnaround",
  "24/7 Support",
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-in");
        });
      },
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" style={{ padding: "100px 0" }} className="relative z-10" ref={sectionRef}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Image */}
          <div className="reveal" style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                height: 500,
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              <FlaskConical size={64} style={{ color: "var(--accent)" }} strokeWidth={1.2} />
              <span style={{ fontSize: 12, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 500, color: "var(--text-muted)" }}>
                Laboratory Excellence
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -24,
                right: 24,
                padding: "20px 28px",
                borderRadius: 16,
                background: "var(--bg-primary)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <h4 className="gradient-text" style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800 }}>10+</h4>
              <p style={{ fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text-muted)" }}>Years of Expertise</p>
            </div>
          </div>

          {/* Content */}
          <div className="reveal">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: "var(--accent)" }} />
              About Us
            </span>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: -1, marginBottom: 24 }}>
              India&apos;s Trusted Metal Testing Partner
            </h2>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 16 }}>
              <strong style={{ color: "var(--text-primary)" }}>JAKS Metal Lab LLP</strong> is a premier chemical metal testing laboratory
              committed to delivering precise and reliable analytical results. Equipped with state-of-the-art
              spectrometers and led by experienced metallurgical engineers, we serve manufacturers, foundries,
              and quality-conscious industries across India.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 32 }}>
              Our laboratory operates under stringent quality management systems aligned with ISO/IEC 17025
              standards, ensuring every test result meets international benchmarks for accuracy and traceability.
            </p>

            {/* Features */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
              {features.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "14px 18px",
                    borderRadius: 12,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <CheckCircle size={16} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore Services
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          #about .wrap > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
