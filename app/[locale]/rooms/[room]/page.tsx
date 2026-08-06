import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ROOM_SLUGS, isRoomSlug } from "@/lib/rooms";
import RoomDetailView from "./_components/RoomDetailView";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ROOM_SLUGS.map((room) => ({ locale, room }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; room: string }>;
}): Promise<Metadata> {
  const { locale, room } = await params;

  if (!isRoomSlug(room)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "roomDetails" });

  return {
    title: t(`${room}.meta.title`),
    description: t(`${room}.meta.description`),
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ room: string }>;
}) {
  const { room } = await params;

  if (!isRoomSlug(room)) {
    notFound();
  }

  return <RoomDetailView slug={room} />;
}
