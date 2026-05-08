"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#equipment", label: "Equipment" },
  { href: "#certifications", label: "Accreditation" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "8px 24px" : "14px 24px",
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Logo — compact on mobile */}
        <button
          onClick={() => handleNav("#hero")}
          style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none" }}
        >
          <Image
            src="/logo.jpeg"
            alt="JAKS Metal Lab LLP"
            width={48}
            height={48}
            style={{ height: scrolled ? 32 : 38, width: "auto", borderRadius: 8, transition: "all 0.3s" }}
          />
          <div>
            <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>
              JAKS Metal Lab
            </span>
            <span style={{ display: "block", fontSize: "0.55rem", fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "var(--text-muted)" }}>
              Metal Testing
            </span>
          </div>
        </button>

        {/* Desktop links */}
        <ul style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none" }} className="desktop-nav">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text-secondary)", background: "none", border: "none", position: "relative", transition: "color 0.3s" }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={toggleTheme}
            style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-secondary)", transition: "all 0.3s" }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
          </button>

          <button
            onClick={() => handleNav("#contact")}
            className="nav-cta-btn"
            style={{ padding: "8px 20px", borderRadius: 50, color: "#fff", fontSize: "0.7rem", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", fontFamily: "var(--font-display)", background: "var(--gradient-accent)", border: "none", transition: "all 0.3s" }}
          >
            Get Quote
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="hamburger-btn"
            style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 998,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            background: "var(--bg-primary)",
          }}
        >
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--text-secondary)", background: "none", border: "none", transition: "color 0.3s" }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 50, fontSize: 14, fontWeight: 500, background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
          >
            {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      )}
    </>
  );
}
