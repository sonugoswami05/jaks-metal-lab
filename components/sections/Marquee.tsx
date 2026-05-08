"use client";

const items = [
  "Spectrometric Analysis",
  "Wet Chemical Testing",
  "Carbon & Sulphur Analysis",
  "Alloy Verification",
  "Composition Certification",
  "Grade Identification",
  "Raw Material Testing",
  "Quality Assurance",
];

export default function Marquee() {
  return (
    <div
      className="marquee-strip"
      style={{
        background: "var(--bg-secondary)",
      }}
    >
      <div className="flex gap-14" style={{ animation: "marquee 35s linear infinite", width: "max-content" }}>
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-xs font-semibold tracking-[2.5px] uppercase whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
