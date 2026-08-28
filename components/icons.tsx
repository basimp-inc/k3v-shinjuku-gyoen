/* サイト共通のラインアイコン。
   ここに残しているのは現に描画されているものだけ。TOPページのイラストは
   app/[locale]/_components/scenes.ts、モバイル下部ナビは自前のアイコンを持つ。 */

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

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4.5 12h15" />
      <path d="M13 6.5 19.5 12 13 17.5" />
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

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3.5 19 6v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="4" y="5.5" width="16" height="15" rx="2.5" />
      <path d="M4 10h16M8 3.5v4M16 3.5v4" />
      <path d="m9.5 15 1.8 1.8L14.5 13.5" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function HeadsetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4.5" height="6" rx="1.6" />
      <rect x="16.5" y="13" width="4.5" height="6" rx="1.6" />
      <path d="M18.8 19v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </svg>
  );
}
