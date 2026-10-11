import { isRoomSlug, type RoomSlug } from "@/lib/rooms";
import * as S from "./scenes";

/**
 * ROOMS の帯（`.band .pic`）に出す絵の設定。**部屋ごとにここ1か所**で管理する。
 *
 * ルール（2026-10-11 ユーザー承認）：
 *  - 写真があれば 1枚目＝実写、2枚目以降＝イラスト。
 *    **写真を割り当てるのは、部屋割りがユーザーに承認された室だけ**（今は 503 = ROOM 01 / UNICO のみ）。
 *  - 写真が無ければイラストのみ。実写でないことは stamp（Coming soon など）と alt で示す。
 *  - 2枚以上のときだけスライダーが出る（ラジオ + CSS :has()、JS 不要。最大3枚）。
 *
 * 部屋割りが確定した室から、`kind: "photo"` を先頭に足すだけで差し替えられる。
 * 写真は scripts/photos/（photos.config.mjs の `rooms/...` と `band` 枠 4:3・1500×1125）で書き出す。
 *
 * stamp: "name" = 部屋名（ROOM 01）／"morning" = top.hero.stamp（Room 01 / Morning）／"comingSoon" = rooms.comingSoon
 */
export type SlideStamp = "name" | "morning" | "comingSoon";

export type RoomSlide =
  | { kind: "photo"; src: string; width: number; height: number; stamp: SlideStamp }
  | { kind: "scene"; svg: string; stamp: SlideStamp };

export type RoomMedia = {
  slides: RoomSlide[];
  /** true のとき帯を薄くして、リンクを「Coming soon」の無効表示にする（ROOM 02 の一時非公開） */
  comingSoon?: boolean;
};

export const ROOM_MEDIA: Record<RoomSlug, RoomMedia> = {
  /* ROOM 01 / UNICO = 503 号室（承認済み）。実写（寝室）→ イラスト（ソファの一角の朝） */
  unico: {
    slides: [
      { kind: "photo", src: "/photos/rooms/unico-bedroom.webp", width: 1500, height: 1125, stamp: "name" },
      { kind: "scene", svg: S.ROOM1, stamp: "morning" },
    ],
  },

  /* ROOM 02 / JOURNAL STANDARD FURNITURE。クライアント未承認のため一時非公開（Coming soon）。
     元写真は無く、コンセプト絵をガイドに沿って描き直したイラストのみ */
  "journal-standard-furniture": {
    comingSoon: true,
    slides: [{ kind: "scene", svg: S.ROOM2, stamp: "comingSoon" }],
  },

  /* ROOM 03 / CRASH GATE = ランプとグレーのソファの部屋（ユーザー確定 2026-10-11。部屋番号は本人申告で「303」。
     TASK.md の候補 305/401 とは違うので、305 の誤記かどうかは未確認）。実写（ベッド・ダイニング・ラグの全景）→
     イラスト（アークのランプの一角）。2枚目の stamp も部屋名（"morning" は ROOM 01 の文言なので使わない） */
  "crash-gate": {
    slides: [
      { kind: "photo", src: "/photos/rooms/crash-gate-living.webp", width: 1500, height: 1125, stamp: "name" },
      { kind: "scene", svg: S.ROOM3, stamp: "name" },
    ],
  },
};

export function getRoomMedia(slug: string): RoomMedia | undefined {
  return isRoomSlug(slug) ? ROOM_MEDIA[slug] : undefined;
}
