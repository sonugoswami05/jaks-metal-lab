"use client";
import { useEffect, useRef } from "react";
import { Package, Wrench, Microscope, FileCheck } from "lucide-react";
import Carousel from "@/components/ui/Carousel";

const steps = [
  { icon: Package, num: "01", title: "Sample Receipt", desc: "Secure collection and cataloguing of metal samples" },
  { icon: Wrench, num: "02", title: "Preparation", desc: "Surface grinding and preparation per testing standards" },
  { icon: Microscope, num: "03", title: "Analysis", desc: "Multi-method chemical testing with calibrated instruments" },
  { icon: FileCheck, num: "04", title: "Certification", desc: "NABL-accredited report with full traceability" },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-in"); }), { threshold: 0.15 });
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative z-10" style={{ padding: "80px 0" }} ref={ref}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>
            <span style={{ width: 28, height: 1, background: "var(--accent)" }} />Our Process<span style={{ width: 28, height: 1, background: "var(--accent)" }} />
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>How We Work</h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>A streamlined, quality-assured workflow from sample receipt to certified results.</p>
        </div>

        <Carousel itemsPerView={{ mobile: 2, tablet: 4, desktop: 4 }} autoPlay={false} showArrows={false} gap={16}>
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} style={{ textAlign: "center", padding: "24px 12px" }}>
                <div className="process-icon-hover" style={{ width: 80, height: 80, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", background: "var(--bg-secondary)", border: "2px solid var(--border)", color: "var(--accent)", transition: "all 0.4s", cursor: "pointer" }}>
                  <Icon size={28} />
                </div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 700, marginBottom: 6 }}>{step.title}</h4>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.5, color: "var(--text-secondary)", maxWidth: 180, margin: "0 auto" }}>{step.desc}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
