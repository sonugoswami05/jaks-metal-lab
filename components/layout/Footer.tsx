"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SocialFb = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const SocialIg = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" />
  </svg>
);
const SocialLi = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);
const SocialWa = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.6 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2zm5.4 14c-.2.7-1.4 1.2-1.9 1.3-.5 0-.9.2-3-.6-2.5-1-4.1-3.6-4.2-3.7-.1-.2-1-1.4-1-2.7 0-1.2.7-1.8.9-2.1.2-.3.5-.3.7-.3h.5c.2 0 .4-.1.6.4l.8 1.9c.1.1.1.3 0 .4-.1.2-.1.3-.3.4l-.4.5c-.1.1-.3.3-.1.5.1.3.7 1.1 1.4 1.7 1 .9 1.8 1.1 2 1.2.3.1.4.1.6-.1.1-.2.7-.8.8-1 .2-.3.3-.2.6-.1l1.7.8c.3.1.4.2.5.3.1.1.1.6-.2 1.3z" />
  </svg>
);

const quickLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#equipment", label: "Equipment" },
  { href: "#certifications", label: "Accreditation" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = ["Spectrometric Analysis", "Wet Chemical Analysis", "C & S Analysis", "Grade Identification", "Alloy Testing", "Certification"];

const socials = [
  { Icon: SocialFb, href: "#" },
  { Icon: SocialIg, href: "#" },
  { Icon: SocialLi, href: "#" },
  { Icon: SocialWa, href: "#" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const colTitle: React.CSSProperties = { fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 };
  const linkStyle: React.CSSProperties = { fontSize: 14, color: "var(--text-secondary)", background: "none", border: "none", textAlign: "left", padding: 0, transition: "all 0.3s" };

  return (
    <footer className="relative z-10" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
      <div className="wrap" style={{ padding: "80px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <Image src="/logo.jpeg" alt="JAKS Metal Lab" width={44} height={44} style={{ borderRadius: 8 }} />
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700 }}>JAKS Metal Lab LLP</h3>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 24 }}>
              A premier chemical metal testing laboratory delivering precise analytical results with state-of-the-art spectrometric technology.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(({ Icon, href }, i) => (
                <a key={i} href={href} style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-secondary)", transition: "all 0.3s" }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={colTitle}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {quickLinks.map((l) => (
                <button key={l.href} onClick={() => handleNav(l.href)} style={linkStyle}>{l.label}</button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={colTitle}>Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {serviceLinks.map((s) => (
                <button key={s} onClick={() => handleNav("#services")} style={linkStyle}>{s}</button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={colTitle}>Stay Updated</h4>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: 16 }}>Subscribe for updates about our latest services and industry insights.</p>
            <div style={{ display: "flex", gap: 8 }}>
              <input type="email" placeholder="Your email" style={{ flex: 1, minWidth: 0, padding: "12px 16px", borderRadius: 12, fontSize: 14, outline: "none", background: "var(--bg-primary)", border: "1px solid var(--border)", color: "var(--text-primary)" }} />
              <button style={{ padding: "12px 20px", borderRadius: 12, color: "#fff", background: "var(--gradient-accent)", border: "none", display: "flex", alignItems: "center" }}>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="wrap" style={{ padding: "20px 32px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--text-muted)" }}>
        <p>{"©"} 2026 JAKS Metal Lab LLP. All Rights Reserved.</p>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#" style={{ color: "var(--text-muted)" }}>Privacy Policy</a>
          <a href="#" style={{ color: "var(--text-muted)" }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
