export const ROOM_SLUGS = ["unico", "journal-standard-furniture", "crash-gate"] as const;

export type RoomSlug = (typeof ROOM_SLUGS)[number];

export const roomThemes: Record<RoomSlug, "warm" | "vintage" | "industrial"> = {
  unico: "warm",
  "journal-standard-furniture": "vintage",
  "crash-gate": "industrial",
};

export const roomTagClass: Record<RoomSlug, string> = {
  unico: "bg-(--color-accent2) text-(--color-cream)",
  "journal-standard-furniture": "bg-(--color-vintage-dark) text-(--color-bg-card-deep)",
  "crash-gate": "bg-(--color-industrial-dark) text-(--color-bg-card-deep)",
};

export function isRoomSlug(value: string): value is RoomSlug {
  return (ROOM_SLUGS as readonly string[]).includes(value);
}
