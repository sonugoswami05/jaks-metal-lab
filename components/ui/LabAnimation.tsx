"use client";

export default function LabAnimation() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px" }}>
      <svg
        viewBox="0 0 400 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }}
        aria-label="Spectrometric metal analysis laboratory illustration"
      >
        <defs>
          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b8c4cc" />
            <stop offset="35%" stopColor="#d8e2e8" />
            <stop offset="70%" stopColor="#9eaab4" />
            <stop offset="100%" stopColor="#8a9299" />
          </linearGradient>
          <linearGradient id="machineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2c4470" />
            <stop offset="100%" stopColor="#1a2744" />
          </linearGradient>
          <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6ba5f0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#4a8fe7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background glow */}
        <ellipse cx="200" cy="165" rx="185" ry="145" fill="#4a8fe7" fillOpacity="0.04" />

        {/* ── SPECTROMETER MACHINE ── */}
        <g transform="translate(16, 55)">
          {/* Body */}
          <rect x="0" y="0" width="130" height="120" rx="10" fill="url(#machineGrad)" />
          {/* Top panel */}
          <rect x="0" y="0" width="130" height="20" rx="10" fill="#253d6b" />
          <rect x="0" y="14" width="130" height="6" fill="#253d6b" />
          {/* Status LEDs */}
          <circle cx="16" cy="10" r="4" fill="#4ade80">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="10" r="4" fill="#4a8fe7" opacity="0.6" />
          <circle cx="44" cy="10" r="4" fill="#4a8fe7" opacity="0.3" />
          <text x="90" y="12" fontSize="6" fill="#4a8fe7" opacity="0.9" fontFamily="monospace" fontWeight="bold">OES-5000</text>

          {/* Screen */}
          <rect x="8" y="24" width="86" height="68" rx="5" fill="#080e18" />
          <text x="51" y="36" fontSize="5.5" fill="#4ade80" textAnchor="middle" fontFamily="monospace">ANALYZING...</text>

          {/* Fe bar */}
          <text x="12" y="48" fontSize="5" fill="#6ba5f0" fontFamily="monospace">Fe</text>
          <rect x="23" y="43" width="64" height="4" rx="2" fill="#1a2744" />
          <rect x="23" y="43" width="57" height="4" rx="2" fill="#4a8fe7">
            <animate attributeName="width" values="0;57" dur="1.8s" fill="freeze" />
          </rect>
          <text x="90" y="48" fontSize="5" fill="#e8eaf0" fontFamily="monospace">89%</text>

          {/* Mn bar */}
          <text x="12" y="59" fontSize="5" fill="#6ba5f0" fontFamily="monospace">Mn</text>
          <rect x="23" y="54" width="64" height="4" rx="2" fill="#1a2744" />
          <rect x="23" y="54" width="8" height="4" rx="2" fill="#6ba5f0">
            <animate attributeName="width" values="0;8" dur="1.8s" fill="freeze" begin="0.3s" />
          </rect>
          <text x="90" y="59" fontSize="5" fill="#e8eaf0" fontFamily="monospace">1.2%</text>

          {/* C bar */}
          <text x="12" y="70" fontSize="5" fill="#6ba5f0" fontFamily="monospace">C </text>
          <rect x="23" y="65" width="64" height="4" rx="2" fill="#1a2744" />
          <rect x="23" y="65" width="4" height="4" rx="2" fill="#fcd34d">
            <animate attributeName="width" values="0;4" dur="1.8s" fill="freeze" begin="0.6s" />
          </rect>
          <text x="90" y="70" fontSize="5" fill="#e8eaf0" fontFamily="monospace">0.4%</text>

          {/* Si bar */}
          <text x="12" y="81" fontSize="5" fill="#6ba5f0" fontFamily="monospace">Si</text>
          <rect x="23" y="76" width="64" height="4" rx="2" fill="#1a2744" />
          <rect x="23" y="76" width="3" height="4" rx="2" fill="#34d399">
            <animate attributeName="width" values="0;3" dur="1.8s" fill="freeze" begin="0.9s" />
          </rect>
          <text x="90" y="81" fontSize="5" fill="#e8eaf0" fontFamily="monospace">0.3%</text>

          {/* Progress bar */}
          <rect x="8" y="84" width="86" height="8" rx="3" fill="#1a2744" />
          <rect x="8" y="84" width="8" height="8" rx="3" fill="#4a8fe7" fillOpacity="0.7">
            <animate attributeName="width" values="8;86;8" dur="4s" repeatCount="indefinite" />
          </rect>
          <text x="51" y="91" fontSize="4.5" fill="white" textAnchor="middle" fontFamily="monospace">SCAN PROGRESS</text>

          {/* Lens aperture */}
          <circle cx="116" cy="68" r="14" fill="#080e18" stroke="#2c4470" strokeWidth="1.5" />
          <circle cx="116" cy="68" r="9" fill="#111927" stroke="#4a8fe7" strokeWidth="0.8" opacity="0.6" />
          <circle cx="116" cy="68" r="5" fill="#4a8fe7">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="r" values="4;5.5;4" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="116" cy="68" r="2" fill="#6ba5f0" />

          {/* Base */}
          <rect x="15" y="120" width="100" height="10" rx="5" fill="#141e30" />
          <rect x="30" y="130" width="70" height="5" rx="2.5" fill="#0e1622" />
        </g>

        {/* ── SPECTRAL BEAMS ── */}
        {/* Lens at SVG (16+116, 55+68) = (132, 123) → beams from x≈148 */}
        <line x1="148" y1="117" x2="222" y2="114" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round">
          <animate attributeName="opacity" values="0.35;0.9;0.35" dur="2s" repeatCount="indefinite" begin="0s" />
        </line>
        <line x1="148" y1="120" x2="222" y2="119" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round">
          <animate attributeName="opacity" values="0.35;0.9;0.35" dur="2s" repeatCount="indefinite" begin="0.2s" />
        </line>
        <line x1="148" y1="123" x2="222" y2="124" stroke="#eab308" strokeWidth="1.8" strokeLinecap="round">
          <animate attributeName="opacity" values="0.35;0.9;0.35" dur="2s" repeatCount="indefinite" begin="0.4s" />
        </line>
        <line x1="148" y1="126" x2="222" y2="129" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round">
          <animate attributeName="opacity" values="0.35;0.9;0.35" dur="2s" repeatCount="indefinite" begin="0.6s" />
        </line>
        <line x1="148" y1="129" x2="222" y2="134" stroke="#4a8fe7" strokeWidth="1.8" strokeLinecap="round">
          <animate attributeName="opacity" values="0.35;0.9;0.35" dur="2s" repeatCount="indefinite" begin="0.8s" />
        </line>
        <line x1="148" y1="132" x2="222" y2="139" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round">
          <animate attributeName="opacity" values="0.35;0.9;0.35" dur="2s" repeatCount="indefinite" begin="1s" />
        </line>

        {/* ── METAL SAMPLE ── */}
        <g transform="translate(218, 96)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0,-7; 0,0"
              dur="4s"
              repeatCount="indefinite"
            />
            {/* Stand */}
            <rect x="27" y="36" width="6" height="20" fill="#2c4470" opacity="0.7" />
            {/* Holder base */}
            <rect x="-2" y="54" width="64" height="8" rx="4" fill="#1a2744" opacity="0.85" />
            {/* Metal block */}
            <rect x="0" y="8" width="60" height="30" rx="5" fill="url(#metalGrad)" />
            {/* Top sheen */}
            <rect x="2" y="8" width="56" height="11" rx="5" fill="white" fillOpacity="0.18" />
            {/* Scan line */}
            <rect x="0" y="20" width="60" height="2.5" rx="1.25" fill="#4a8fe7" opacity="0.9">
              <animate attributeName="y" values="10;36;10" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.5s" repeatCount="indefinite" />
            </rect>
            {/* Etching */}
            <text x="30" y="28" fontSize="5.5" fill="white" fillOpacity="0.45" textAnchor="middle" fontFamily="monospace">AISI 1045</text>
            {/* Label */}
            <text x="30" y="69" fontSize="6" fill="#8896a6" textAnchor="middle" fontFamily="monospace">STEEL SAMPLE</text>
          </g>
        </g>

        {/* ── ATOMIC ORBITAL ── */}
        <g transform="translate(332, 70)">
          {/* Glow */}
          <circle r="52" fill="url(#nucleusGlow)" />
          {/* Orbit ellipses (3D look) */}
          <ellipse rx="44" ry="14" stroke="#4a8fe7" strokeWidth="0.8" opacity="0.35" fill="none" />
          <ellipse rx="44" ry="14" stroke="#4a8fe7" strokeWidth="0.8" opacity="0.25" fill="none" transform="rotate(60)" />
          <ellipse rx="44" ry="14" stroke="#4a8fe7" strokeWidth="0.8" opacity="0.2" fill="none" transform="rotate(120)" />
          {/* Nucleus */}
          <circle r="12" fill="#1a2744" />
          <circle r="9" fill="#2c4470">
            <animate attributeName="r" values="9;11;9" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle r="5" fill="#4a8fe7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1.4s" repeatCount="indefinite" />
          </circle>
          <circle r="2.5" fill="#6ba5f0" />
          {/* Electrons orbiting */}
          <circle cx="44" cy="0" r="4" fill="#4ade80" opacity="0.9">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="44" cy="0" r="3.5" fill="#6ba5f0">
            <animateTransform attributeName="transform" type="rotate" from="120 0 0" to="480 0 0" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle cx="44" cy="0" r="3" fill="#c084fc" opacity="0.85">
            <animateTransform attributeName="transform" type="rotate" from="240 0 0" to="600 0 0" dur="9s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* ── RESULTS PANEL ── */}
        <g transform="translate(16, 238)">
          <rect width="368" height="90" rx="10" fill="#080e18" stroke="#2c4470" strokeWidth="1" />
          {/* Header */}
          <rect width="368" height="22" rx="10" fill="#1a2744" />
          <rect y="14" width="368" height="8" fill="#1a2744" />
          <circle cx="14" cy="11" r="4" fill="#ef4444" opacity="0.75" />
          <circle cx="28" cy="11" r="4" fill="#eab308" opacity="0.75" />
          <circle cx="42" cy="11" r="4" fill="#4ade80" opacity="0.75" />
          <text x="200" y="14" fontSize="6" fill="#4a8fe7" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
            ELEMENTAL COMPOSITION — OES SPECTROMETRY
          </text>

          {/* Fe row */}
          <text x="14" y="37" fontSize="6" fill="#8896a6" fontFamily="monospace">Iron (Fe)</text>
          <rect x="84" y="30" width="234" height="7" rx="3.5" fill="#1a2744" />
          <rect x="84" y="30" width="208" height="7" rx="3.5" fill="#4a8fe7">
            <animate attributeName="width" values="0;208" dur="2s" fill="freeze" begin="0.3s" />
          </rect>
          <text x="326" y="37" fontSize="6" fill="#e8eaf0" fontFamily="monospace">89.20%</text>

          {/* Mn row */}
          <text x="14" y="53" fontSize="6" fill="#8896a6" fontFamily="monospace">Manganese (Mn)</text>
          <rect x="104" y="46" width="214" height="7" rx="3.5" fill="#1a2744" />
          <rect x="104" y="46" width="16" height="7" rx="3.5" fill="#6ba5f0">
            <animate attributeName="width" values="0;16" dur="2s" fill="freeze" begin="0.6s" />
          </rect>
          <text x="326" y="53" fontSize="6" fill="#e8eaf0" fontFamily="monospace">1.200%</text>

          {/* Si row */}
          <text x="14" y="69" fontSize="6" fill="#8896a6" fontFamily="monospace">Silicon (Si)</text>
          <rect x="84" y="62" width="234" height="7" rx="3.5" fill="#1a2744" />
          <rect x="84" y="62" width="9" height="7" rx="3.5" fill="#34d399">
            <animate attributeName="width" values="0;9" dur="2s" fill="freeze" begin="0.9s" />
          </rect>
          <text x="326" y="69" fontSize="6" fill="#e8eaf0" fontFamily="monospace">0.310%</text>

          {/* C row */}
          <text x="14" y="85" fontSize="6" fill="#8896a6" fontFamily="monospace">Carbon (C)</text>
          <rect x="84" y="78" width="234" height="7" rx="3.5" fill="#1a2744" />
          <rect x="84" y="78" width="6" height="7" rx="3.5" fill="#fcd34d">
            <animate attributeName="width" values="0;6" dur="2s" fill="freeze" begin="1.2s" />
          </rect>
          <text x="326" y="85" fontSize="6" fill="#e8eaf0" fontFamily="monospace">0.450%</text>
        </g>

        {/* ── FLOATING PARTICLES ── */}
        <circle cx="176" cy="46" r="2" fill="#4a8fe7" opacity="0.3">
          <animate attributeName="cy" values="46;26;46" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="198" cy="76" r="1.5" fill="#4a8fe7" opacity="0.22">
          <animate attributeName="cy" values="76;54;76" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="184" cy="208" r="1.8" fill="#6ba5f0" opacity="0.25">
          <animate attributeName="cy" values="208;194;208" dur="7s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
