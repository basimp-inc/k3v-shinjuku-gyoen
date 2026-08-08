type RoomVisualProps = {
  theme: "warm" | "vintage" | "industrial";
  alt: string;
};

export default function RoomVisual({ theme, alt }: RoomVisualProps) {
  if (theme === "warm") {
    return (
      <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label={alt}>
        <rect width="400" height="300" fill="var(--color-bg-card-deep)" />
        <rect x="0" y="180" width="400" height="120" fill="var(--color-floor)" />
        {/* shoji-like grid window */}
        <g stroke="var(--color-line-strong)" strokeWidth="2" opacity="0.7">
          <rect x="40" y="30" width="200" height="140" rx="6" fill="var(--color-bg)" />
          <line x1="40" y1="100" x2="240" y2="100" />
          <line x1="140" y1="30" x2="140" y2="170" />
        </g>
        <circle cx="330" cy="70" r="40" fill="var(--color-glow)" opacity="0.8" />
        {/* low table + cushion, nordic-wa touch */}
        <rect x="250" y="200" width="120" height="12" rx="6" fill="var(--color-accent)" />
        <rect x="260" y="212" width="10" height="30" fill="var(--color-accent)" />
        <rect x="350" y="212" width="10" height="30" fill="var(--color-accent)" />
        <ellipse cx="200" cy="230" rx="34" ry="16" fill="var(--color-accent2)" />
        <path d="M40 260c40-16 80-16 120 0" stroke="var(--color-moss-from)" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />
      </svg>
    );
  }

  if (theme === "vintage") {
    return (
      <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label={alt}>
        <rect width="400" height="300" fill="var(--color-vintage-dark)" />
        <g stroke="var(--color-vintage-accent)" strokeWidth="1.4" opacity="0.55">
          <rect x="20" y="20" width="360" height="260" rx="10" />
          <line x1="20" y1="150" x2="380" y2="150" />
        </g>
        {/* vintage leather chair silhouette */}
        <rect x="60" y="150" width="110" height="80" rx="14" fill="var(--color-vintage-mid)" />
        <rect x="70" y="120" width="90" height="60" rx="16" fill="var(--color-vintage-mid-soft)" />
        <circle cx="115" cy="150" r="4" fill="var(--color-vintage-accent)" />
        <circle cx="145" cy="150" r="4" fill="var(--color-vintage-accent)" />
        {/* warm floor lamp */}
        <line x1="300" y1="90" x2="300" y2="230" stroke="var(--color-vintage-accent)" strokeWidth="3" />
        <path d="M270 90h60l-14 34h-32Z" fill="var(--color-vintage-accent)" opacity="0.85" />
        <circle cx="300" cy="230" r="10" fill="var(--color-vintage-accent)" opacity="0.5" />
        <text x="200" y="270" textAnchor="middle" fontFamily="Quicksand, sans-serif" fontSize="13" fill="var(--color-vintage-accent)" opacity="0.7" letterSpacing="4">
          URBAN VINTAGE
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label={alt}>
      <rect width="400" height="300" fill="var(--color-industrial-dark)" />
      {/* rivet grid, industrial */}
      <g fill="var(--color-industrial-accent)" opacity="0.6">
        {[30, 90, 150, 210, 270, 330, 370].map((x) =>
          [24, 84, 216, 276].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" />)
        )}
      </g>
      {/* steel-frame bed silhouette */}
      <rect x="60" y="120" width="220" height="90" rx="6" fill="var(--color-industrial-mid)" />
      <rect x="50" y="110" width="16" height="110" rx="3" fill="var(--color-industrial-metal)" stroke="var(--color-industrial-accent)" strokeWidth="1.2" />
      <rect x="274" y="110" width="16" height="110" rx="3" fill="var(--color-industrial-metal)" stroke="var(--color-industrial-accent)" strokeWidth="1.2" />
      <line x1="60" y1="150" x2="280" y2="150" stroke="var(--color-industrial-accent)" strokeWidth="1" opacity="0.5" />
      {/* pipe shelf */}
      <line x1="320" y1="60" x2="320" y2="240" stroke="var(--color-industrial-accent)" strokeWidth="3" />
      <rect x="300" y="90" width="60" height="10" rx="2" fill="var(--color-industrial-metal)" />
      <rect x="300" y="140" width="60" height="10" rx="2" fill="var(--color-industrial-metal)" />
      <text x="200" y="270" textAnchor="middle" fontFamily="Quicksand, sans-serif" fontSize="12" fill="var(--color-industrial-accent)" opacity="0.75" letterSpacing="5">
        INDUSTRIAL MODERN
      </text>
    </svg>
  );
}
