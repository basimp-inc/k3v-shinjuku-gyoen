export default function HeroIllustration({ alt }: { alt: string }) {
  return (
    <svg
      viewBox="0 0 600 520"
      className="h-full w-full"
      role="img"
      aria-label={alt}
    >
      <defs>
        <clipPath id="frame">
          <rect x="0" y="0" width="600" height="520" rx="28" />
        </clipPath>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6ceac" />
          <stop offset="55%" stopColor="#f0ddc0" />
          <stop offset="100%" stopColor="#efe5d3" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f9e2b8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f9e2b8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g clipPath="url(#frame)">
        {/* sky */}
        <rect x="0" y="0" width="600" height="520" fill="url(#sky)" />

        {/* drifting sun glow */}
        <circle className="drift" cx="440" cy="130" r="130" fill="url(#sun)" />

        {/* distant skyline */}
        <g fill="#c9a874" opacity="0.55">
          <rect x="30" y="230" width="46" height="150" rx="6" />
          <rect x="90" y="200" width="34" height="180" rx="6" />
          <rect x="470" y="215" width="40" height="165" rx="6" />
          <rect x="520" y="245" width="50" height="135" rx="6" />
        </g>

        {/* nearer skyline */}
        <g fill="#a9855c" opacity="0.75">
          <rect x="60" y="260" width="60" height="120" rx="8" />
          <rect x="150" y="230" width="44" height="150" rx="8" />
          <rect x="410" y="250" width="56" height="130" rx="8" />
          <path d="M470 380V270l26-30 26 30v110Z" />
        </g>

        {/* soft floor / room interior */}
        <rect x="0" y="378" width="600" height="142" fill="#e8dcc4" />
        <rect x="0" y="378" width="600" height="10" fill="#dccca9" />

        {/* window sill */}
        <rect x="0" y="368" width="600" height="18" rx="4" fill="#8a6b45" />

        {/* potted plant */}
        <g transform="translate(96,300)">
          <path
            d="M0 66c-10 0-16-9-16-20 0-16 30-46 30-46s30 30 30 46c0 11-6 20-16 20"
            fill="#7f9a52"
          />
          <path d="M14 20c0 18 0 34 0 46" stroke="#5d7a3a" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M14 34c-10-4-18-2-24 6M14 46c10-4 18-1 22 7" stroke="#5d7a3a" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M-14 66h56l-6 26h-44Z" fill="#c77b4f" />
          <path d="M-14 66h56" stroke="#a85f38" strokeWidth="2" />
        </g>

        {/* coffee cup with animated steam */}
        <g transform="translate(430,318)">
          <g className="steam" stroke="#8a6b45" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6">
            <path d="M-10 0c-6-10 6-14 0-24" />
            <path d="M4 0c-6-10 6-14 0-24" />
            <path d="M18 0c-6-10 6-14 0-24" />
          </g>
          <path d="M-24 8h58v20c0 12-10 22-22 22h-14c-12 0-22-10-22-22Z" fill="#4a3a24" />
          <path d="M34 14h8a10 10 0 0 1 0 20h-8" stroke="#4a3a24" strokeWidth="5" fill="none" />
          <ellipse cx="5" cy="8" rx="29" ry="6" fill="#3a2c19" />
        </g>

        {/* book stack for a lived-in touch */}
        <g transform="translate(210,352)">
          <rect x="0" y="8" width="70" height="12" rx="3" fill="#97c459" />
          <rect x="4" y="-4" width="62" height="12" rx="3" fill="#c77b4f" />
        </g>

        {/* warm vignette at edges */}
        <rect x="0" y="0" width="600" height="520" fill="#4a3a24" opacity="0.04" />
      </g>

      <rect
        x="1"
        y="1"
        width="598"
        height="518"
        rx="27"
        fill="none"
        stroke="#e8dcc4"
        strokeWidth="2"
      />
    </svg>
  );
}
