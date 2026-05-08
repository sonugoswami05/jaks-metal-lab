"use client";
import { useEffect, useRef } from "react";
import { Atom, FlaskConical, Flame, Award, TestTubes, FileCheck, ArrowRight } from "lucide-react";
import Carousel from "@/components/ui/Carousel";

const services = [
  { icon: Atom, num: "01", title: "Spectrometric Analysis", desc: "High-precision OES for rapid multi-element analysis of metals and alloys. Simultaneous detection of 20+ elements in under 60 seconds." },
  { icon: FlaskConical, num: "02", title: "Wet Chemical Analysis", desc: "Classical analytical chemistry methods for precise elemental determination. Gravimetric, volumetric, and colorimetric techniques." },
  { icon: Flame, num: "03", title: "Carbon & Sulphur Analysis", desc: "Combustion-based infrared detection for accurate C/S content determination in steel, cast iron, and non-ferrous metals." },
  { icon: Award, num: "04", title: "Material Grade Identification", desc: "Comprehensive grade verification against IS, ASTM, EN, JIS standards for incoming material quality assurance." },
  { icon: TestTubes, num: "05", title: "Alloy Composition Testing", desc: "Detailed compositional analysis of ferrous and non-ferrous alloys including stainless steel, aluminium, copper, and brass." },
  { icon: FileCheck, num: "06", title: "Test Certification", desc: "NABL-accredited test certificates and detailed analytical reports with full traceability for quality auditors." },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-in"); }), { threshold: 0.1 });
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="relative z-10" style={{ background: "var(--bg-secondary)", padding: "100px 0" }} ref={ref}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>
            <span style={{ width: 28, height: 1, background: "var(--accent)" }} />Our Services<span style={{ width: 28, height: 1, background: "var(--accent)" }} />
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>Chemical Testing Services</h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>Comprehensive chemical analysis solutions leveraging advanced instrumentation and proven methodologies.</p>
        </div>

        <Carousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }} interval={4500}>
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.num}
                className="card-hover service-card-line svc-card"
                style={{ padding: "40px 32px", borderRadius: 20, position: "relative", overflow: "hidden", background: "var(--bg-primary)", border: "1px solid var(--border)", height: "100%" }}
              >
                <span style={{ position: "absolute", top: 16, right: 20, fontSize: "3rem", fontWeight: 900, fontFamily: "var(--font-display)", color: "var(--border)", lineHeight: 1 }}>{svc.num}</span>
                <div className="svc-icon" style={{ width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--accent)", transition: "all 0.3s" }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, marginBottom: 10 }}>{svc.title}</h3>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 16 }}>{svc.desc}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "var(--accent)" }}>Learn More <ArrowRight size={12} /></span>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
