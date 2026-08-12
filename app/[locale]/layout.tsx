import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Nav from "@/components/Nav";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";
import ThemeMock from "@/components/ThemeMock";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        {/* Zen Maru Gothic carries 900 for the Doma Ceramic display face; the
            current design only uses up to 700. */}
        <link href='https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700;900&family=M+PLUS+Rounded+1c:wght@300;400;500&family=Quicksand:wght@500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap' rel='stylesheet' />
        {/* REVIEW-ONLY: typefaces for the six alternative TOP designs. Gyoen
            uses Fraunces 900 for display, Denim 300/400/600 plus italics, Timber
            Indigo pairs Instrument Serif with Archivo 800 and IBM Plex Mono,
            Washed Chambray uses Barlow Condensed with Newsreader italics, Kraft
            Riso is Archivo Black with Anton, and Doma Ceramic leads with
            Zen Maru Gothic 900 (loaded above).
            Remove together with app/gyoen-design.css + app/denim-design.css +
            app/timber-design.css + app/chambray-design.css + app/kraft-design.css
            + app/doma-design.css. */}
        <link href='https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,900;1,9..144,300;1,9..144,400&family=Archivo:wght@400;500;600;700;800&family=Archivo+Black&family=Anton&family=Instrument+Serif:ital@0;1&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap' rel='stylesheet' />
      </head>
      <body>
        <ThemeMock />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className='min-h-screen bg-(--color-bg) pb-20 lg:pb-0' data-chrome-pad>
            <Nav />
            {children}
            <Footer />
            <MobileBottomNav />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
