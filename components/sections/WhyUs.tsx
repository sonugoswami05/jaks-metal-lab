"use client";
import { useEffect, useRef } from "react";
import { Target, Clock, UserCheck, BadgeDollarSign, Headset, Truck } from "lucide-react";
import Carousel from "@/components/ui/Carousel";

const reasons = [
  { icon: Target, title: "Unmatched Accuracy", desc: "Calibrated instruments and rigorous quality controls ensure results you can stake your reputation on." },
  { icon: Clock, title: "Rapid Turnaround", desc: "Same-day and next-day reporting. Advanced instruments deliver results without compromising accuracy." },
  { icon: UserCheck, title: "Expert Team", desc: "Qualified metallurgical and mechanical engineers with years of industrial testing experience." },
  { icon: BadgeDollarSign, title: "Competitive Pricing", desc: "Premium quality testing at prices that make sense. Bulk discounts and flexible payment options." },
  { icon: Headset, title: "Dedicated Support", desc: "From sample collection guidance to result interpretation, end-to-end support for all testing needs." },
  { icon: Truck, title: "Sample Pickup", desc: "Convenient sample pickup service within the region. We handle logistics so you focus on production." },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-in"); }), { threshold: 0.1 });
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative z-10" style={{ background: "var(--bg-secondary)", padding: "100px 0" }} ref={ref}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>
            <span style={{ width: 28, height: 1, background: "var(--accent)" }} />Why JAKS<span style={{ width: 28, height: 1, background: "var(--accent)" }} />
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>Why Choose Us</h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>Built on a foundation of precision, expertise, and unwavering commitment to quality.</p>
        </div>

        <Carousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }} interval={4000} gap={24}>
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="card-hover bottom-line why-card"
                style={{ padding: "40px 32px", borderRadius: 20, textAlign: "center", position: "relative", overflow: "hidden", background: "var(--bg-primary)", border: "1px solid var(--border)", height: "100%" }}
              >
                <div className="why-icon" style={{ width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--accent)", transition: "all 0.3s" }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, marginBottom: 10 }}>{r.title}</h3>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>{r.desc}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
