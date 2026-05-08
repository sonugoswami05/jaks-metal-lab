"use client";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  function animateCounters() {
    const counters = [
      { id: "stat-1", target: 15000, suffix: "+" },
      { id: "stat-2", target: 500, suffix: "+" },
      { id: "stat-3", target: 99.9, suffix: "%", decimal: true },
    ];
    counters.forEach(({ id, target, suffix, decimal }) => {
      const el = document.getElementById(id);
      if (!el) return;
      let current = 0;
      const step = target / 80;
      const interval = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(interval); }
        el.textContent = (decimal ? current.toFixed(1) : Math.round(current).toLocaleString()) + suffix;
      }, 25);
    });
  }

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>

      {/* Animated gradient background */}
      <div className="hero-animated-bg" />

      {/* Grid pattern */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.12, backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />

      {/* Floating orbs — visible on all screens */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Spinning rings — desktop only */}
      <div className="hero-ring hero-ring-1" />
      <div className="hero-ring hero-ring-2" />

      {/* Content */}
      <div className="wrap" style={{ position: "relative", zIndex: 10, paddingTop: 120, paddingBottom: 60 }}>
        <div style={{ maxWidth: 720 }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 50, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", background: "var(--bg-card)", border: "1px solid var(--border-accent)", color: "var(--accent)", marginBottom: 24 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse-dot 2s infinite" }} />
            ISO/IEC 17025 Accredited
          </div>

          {/* Heading */}
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: -1, marginBottom: 20 }}>
            Precision{" "}
            <span className="gradient-text">Chemical Testing</span>
            <br />
            You Can Trust
          </h1>

          {/* Description */}
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>
            JAKS Metal Lab LLP delivers laboratory-grade chemical analysis with cutting-edge spectrometric technology. Trusted by leading manufacturers for accurate, reliable metal composition testing.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button onClick={() => scrollTo("#contact")} className="btn-primary" style={{ fontFamily: "var(--font-display)" }}>
              Request Analysis <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo("#services")} className="btn-secondary" style={{ fontFamily: "var(--font-display)" }}>
              Our Services
            </button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="hero-stats">
            {[
              { id: "stat-1", init: "0+", label: "Samples Tested" },
              { id: "stat-2", init: "0+", label: "Happy Clients" },
              { id: "stat-3", init: "0%", label: "Accuracy Rate" },
            ].map((s) => (
              <div key={s.id}>
                <h3 id={s.id} className="gradient-text" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800 }}>
                  {s.init}
                </h3>
                <p style={{ fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", marginTop: 4, color: "var(--text-muted)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
