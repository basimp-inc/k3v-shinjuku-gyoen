export const ROOM_SLUGS = ["unico", "journal-standard-furniture", "crash-gate"] as const;

export type RoomSlug = (typeof ROOM_SLUGS)[number];

export const roomThemes: Record<RoomSlug, "warm" | "vintage" | "industrial"> = {
  unico: "warm",
  "journal-standard-furniture": "vintage",
  "crash-gate": "industrial",
};

export const roomTagClass: Record<RoomSlug, string> = {
  unico: "bg-[#c77b4f] text-[#faf6ee]",
  "journal-standard-furniture": "bg-[#111110] text-[#c9974b]",
  "crash-gate": "bg-[#111110] text-[#c9974b]",
};

export function isRoomSlug(value: string): value is RoomSlug {
  return (ROOM_SLUGS as readonly string[]).includes(value);
}
