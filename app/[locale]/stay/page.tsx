import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import PageHero from "@/components/PageHero";
import StayAvailability from "./_components/StayAvailability";
import BookDirect from "@/components/BookDirect";
import StayPlans from "./_components/StayPlans";
import StayHowToBook from "./_components/StayHowToBook";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "stayPage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function StayPage() {
  const t = await getTranslations("stayPage");

  return (
    <main>
      <PageHero
        eyebrow={t("eyebrow")}
        headingLines={[t("headingLine1"), t("headingLine2")]}
        description={t("intro")}
      />
      <StayAvailability />
      <BookDirect showCta={false} />
      <StayPlans />
      <StayHowToBook />
    </main>
  );
}
