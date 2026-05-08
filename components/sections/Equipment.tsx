"use client";
import { useEffect, useRef } from "react";
import { Microscope, Flame, Scale, Thermometer } from "lucide-react";
import Carousel from "@/components/ui/Carousel";

const equipment = [
  { icon: Microscope, title: "Optical Emission Spectrometer", desc: "High-performance OES for simultaneous multi-element analysis with detection limits in ppm range.", tag: "Primary Instrument" },
  { icon: Flame, title: "Carbon & Sulphur Analyzer", desc: "Combustion infrared absorption analyzer for precise C/S determination with excellent repeatability.", tag: "Combustion Analysis" },
  { icon: Scale, title: "Analytical Balance", desc: "High-precision balance with 0.0001g readability for accurate gravimetric analysis.", tag: "Precision Weighing" },
  { icon: Thermometer, title: "Muffle Furnace", desc: "Programmable furnace (up to 1200°C) for sample ashing and heat treatment.", tag: "Thermal Processing" },
];

export default function Equipment() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-in"); }), { threshold: 0.1 });
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="equipment" className="relative z-10" style={{ background: "var(--bg-secondary)", padding: "100px 0" }} ref={ref}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>
            <span style={{ width: 28, height: 1, background: "var(--accent)" }} />Our Equipment<span style={{ width: 28, height: 1, background: "var(--accent)" }} />
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>State-of-the-Art Instruments</h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>World-class analytical instruments calibrated to international standards.</p>
        </div>

        <Carousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 2 }} interval={5000} gap={24}>
          {equipment.map((eq) => {
            const Icon = eq.icon;
            return (
              <div
                key={eq.title}
                className="card-hover equip-card"
                style={{ padding: 32, borderRadius: 20, display: "flex", gap: 24, alignItems: "flex-start", background: "var(--bg-primary)", border: "1px solid var(--border)", height: "100%" }}
              >
                <div className="equip-icon" style={{ width: 72, minWidth: 72, height: 72, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--accent)", transition: "all 0.3s" }}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, marginBottom: 8 }}>{eq.title}</h3>
                  <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: 12 }}>{eq.desc}</p>
                  <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 20, fontSize: "0.68rem", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--accent)" }}>{eq.tag}</span>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
