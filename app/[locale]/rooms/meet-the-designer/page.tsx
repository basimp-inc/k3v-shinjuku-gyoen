import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meetDesigner" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

type Note = { room: string; tag: string; quote: string };

export default async function MeetTheDesignerPage() {
  const t = await getTranslations("meetDesigner");
  const notes = t.raw("notes") as Note[];

  return (
    <main>
      <PageHero
        eyebrow={t("eyebrow")}
        headingLines={[t("headingLine1"), t("headingLine2")]}
        description={t("intro")}
      />

      <section className="bg-[#efe5d3] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="font-en text-xs tracking-[0.25em] text-[#8a6b45]">{t("notesHeading")}</p>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {notes.map((note, i) => (
              <Reveal key={note.room} delay={i * 100}>
                <div className="flex h-full flex-col rounded-[18px] bg-[#f3ece1] p-6">
                  <p className="font-en text-xs tracking-[0.15em] text-[#8a6b45]">{note.tag}</p>
                  <p className="mt-1 text-base text-[#4a3a24]">{note.room}</p>
                  <p className="mt-4 flex-1 text-sm leading-[1.9] text-[#6f5c3f]">
                    &ldquo;{note.quote}&rdquo;
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-2xl/normal text-[#4a3a24] md:text-3xl/normal">{t("closingHeading")}</h2>
            <p className="mt-5 text-sm leading-[1.9] text-[#6f5c3f] md:text-base">{t("closing")}</p>

            <Link
              href="/rooms"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#8a6b45] px-7 py-3.5 text-sm text-[#faf6ee] transition-all duration-200 hover:scale-[1.03] hover:bg-[#745936]"
            >
              {t("cta")}
              <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
