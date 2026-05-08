"use client";
import { useEffect, useRef } from "react";
import { Award, Shield, Globe, Landmark } from "lucide-react";
import Carousel from "@/components/ui/Carousel";

const certs = [
  { icon: Award, title: "NABL Accredited", desc: "National Accreditation Board for Testing and Calibration Laboratories" },
  { icon: Shield, title: "ISO/IEC 17025", desc: "International standard for testing and calibration laboratory competence" },
  { icon: Globe, title: "ASTM Standards", desc: "Testing as per American Society for Testing and Materials methods" },
  { icon: Landmark, title: "BIS Compliance", desc: "Bureau of Indian Standards compliant testing procedures and reporting" },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-in"); }), { threshold: 0.15 });
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="certifications" className="relative z-10" style={{ padding: "100px 0" }} ref={ref}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>
            <span style={{ width: 28, height: 1, background: "var(--accent)" }} />Accreditation<span style={{ width: 28, height: 1, background: "var(--accent)" }} />
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>Certifications & Standards</h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>Validated by recognized accreditation bodies and international standards.</p>
        </div>

        <Carousel itemsPerView={{ mobile: 2, tablet: 4, desktop: 4 }} autoPlay={false} showArrows={false} gap={20}>
          {certs.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="card-hover cert-card"
                style={{ padding: "36px 20px", borderRadius: 20, textAlign: "center", background: "var(--bg-secondary)", border: "1px solid var(--border)", height: "100%" }}
              >
                <div className="cert-icon" style={{ width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--accent)", transition: "all 0.3s" }}>
                  <Icon size={22} />
                </div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 700, marginBottom: 8 }}>{cert.title}</h4>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.5, color: "var(--text-secondary)" }}>{cert.desc}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
