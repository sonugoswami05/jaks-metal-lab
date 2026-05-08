"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [glow, setGlow] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 40);

    const glowInterval = setInterval(() => {
      setGlow(20 + Math.sin(Date.now() / 500) * 20);
    }, 50);

    const timer = setTimeout(() => setVisible(false), 2400);
    return () => { clearInterval(interval); clearInterval(glowInterval); clearTimeout(timer); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center gap-8 transition-opacity duration-500"
      style={{
        background: "var(--bg-primary)",
        opacity: progress >= 100 ? 0 : 1,
        pointerEvents: progress >= 100 ? "none" : "all",
      }}
    >
      <div
        className="w-24 h-24 rounded-2xl overflow-hidden"
        style={{
          boxShadow: `0 0 ${glow}px var(--accent-glow)`,
        }}
      >
        <Image src="/logo.jpeg" alt="JAKS Metal Lab" width={96} height={96} className="w-full h-full object-contain" priority />
      </div>
      <div className="w-48 h-0.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: "var(--gradient-accent)",
          }}
        />
      </div>
      <p className="text-xs tracking-[3px] uppercase" style={{ color: "var(--text-muted)" }}>
        JAKS Metal Lab
      </p>
    </div>
  );
}
