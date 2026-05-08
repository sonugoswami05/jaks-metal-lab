"use client";
import { useEffect, useRef, useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactDetails = [
  { icon: MapPin, title: "Laboratory Address", value: "G.I.D.C. Industrial Area, Gujarat, India" },
  { icon: Phone, title: "Phone Number", value: "+91 XXXXX XXXXX" },
  { icon: Mail, title: "Email Address", value: "info@jaksmetallab.com" },
  { icon: Clock, title: "Working Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM" },
];

const SocialFb = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const SocialIg = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" />
  </svg>
);
const SocialLi = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);

const socials = [
  { Icon: SocialFb, href: "#" },
  { Icon: SocialIg, href: "#" },
  { Icon: SocialLi, href: "#" },
];

const serviceOptions = ["Spectrometric Analysis", "Wet Chemical Analysis", "Carbon & Sulphur Analysis", "Material Grade Identification", "Alloy Composition Testing", "Test Certification", "Other"];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-in"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); };

  const inputStyle: React.CSSProperties = { background: "var(--bg-primary)", border: "1px solid var(--border)", color: "var(--text-primary)", padding: "14px 18px", borderRadius: 12, fontSize: "0.9rem", outline: "none", width: "100%" };
  const labelStyle: React.CSSProperties = { fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8, display: "block" };

  return (
    <section id="contact" className="relative z-10" style={{ padding: "100px 0" }} ref={ref}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56 }}>
          {/* Left - Info */}
          <div>
            <span className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: "var(--accent)" }} />Contact Us
            </span>
            <h2 className="reveal" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 24 }}>
              Let&apos;s Discuss Your Testing Needs
            </h2>
            <p className="reveal" style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 32 }}>
              Whether you need a one-time analysis or ongoing testing partnership, our team is ready to help. Reach out and we&apos;ll respond within 2 hours.
            </p>
            {contactDetails.map((d, i) => {
              const DIcon = d.icon;
              return (
                <div key={d.title} className="reveal" style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                  <div style={{ width: 48, minWidth: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--accent)" }}>
                    <DIcon size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{d.title}</h4>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>{d.value}</p>
                  </div>
                </div>
              );
            })}
            <div className="reveal" style={{ display: "flex", gap: 10, marginTop: 28 }}>
              {socials.map(({ Icon, href }, i) => (
                <a key={i} href={href} style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-secondary)", transition: "all 0.3s" }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal" style={{ padding: 40, borderRadius: 20, background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "64px 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 24, background: "var(--gradient-accent)" }}>&#10003;</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700 }}>Thank You!</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>We&apos;ll contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input type="text" placeholder="John Doe" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input type="text" placeholder="Your Company" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" placeholder="john@company.com" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Service Required</label>
                  <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                    <option value="">Select a Service</option>
                    {serviceOptions.map((o) => (<option key={o} value={o}>{o}</option>))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea rows={4} placeholder="Tell us about your testing requirements..." style={{ ...inputStyle, resize: "vertical", minHeight: 120 }} />
                </div>
                <button type="submit" className="btn-primary" style={{ fontFamily: "var(--font-display)", alignSelf: "flex-start" }}>
                  Send Request <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
