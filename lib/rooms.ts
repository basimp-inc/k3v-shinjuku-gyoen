export const ROOM_SLUGS = ["unico", "journal-standard-furniture", "crash-gate"] as const;

export type RoomSlug = (typeof ROOM_SLUGS)[number];

export const roomThemes: Record<RoomSlug, "warm" | "vintage" | "industrial"> = {
  unico: "warm",
  "journal-standard-furniture": "vintage",
  "crash-gate": "industrial",
};

export const roomTagClass: Record<RoomSlug, string> = {
  unico: "bg-[#c77b4f] text-[#faf6ee]",
  "journal-standard-furniture": "bg-[#3d2f21] text-[#e8dcc4]",
  "crash-gate": "bg-[#2e2721] text-[#e8dcc4]",
};

export function isRoomSlug(value: string): value is RoomSlug {
  return (ROOM_SLUGS as readonly string[]).includes(value);
}
