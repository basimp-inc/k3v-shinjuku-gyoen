type IconProps = {
  className?: string;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 19c8-1 12-6 13-13-8 1-13 5-13 13Z" />
      <path d="M6.5 17.5C9 14 11 12 15.5 9.5" />
    </svg>
  );
}

export function CupIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 9h11v6a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V9Z" />
      <path d="M16 10.5h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8.5 4.5c-.6.7-.6 1.3 0 2M12 4c-.6.7-.6 1.3 0 2" />
    </svg>
  );
}

export function HouseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4.5 12h15" />
      <path d="M13 6.5 19.5 12 13 17.5" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2.2M12 18.8V21M4.2 12H2M22 12h-2.2M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6 16.8 7.2M7.2 16.8l-1.6 1.6" />
    </svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 5.5C6 4.6 8.2 4.3 12 5v14c-3.8-.7-6-.4-8 .5v-14Z" />
      <path d="M20 5.5c-2-.9-4.2-1.2-8-.5v14c3.8-.7 6-.4 8 .5v-14Z" />
    </svg>
  );
}
