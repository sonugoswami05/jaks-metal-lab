"use client";
import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";

export default function FloatingContact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
        style={{
          background: "var(--gradient-accent)",
          boxShadow: "var(--shadow-glow)",
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "all" : "none",
          transform: showTop ? "translateY(0)" : "translateY(16px)",
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Phone CTA */}
      <a
        href="tel:+910000000000"
        className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.3)",
        }}
        aria-label="Call us"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}
