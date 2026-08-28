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
    <html lang={locale}>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        {/* 下層ページ（app/globals.css の --font-* トークン）と TOPページ
            （app/styles/top-design.css の --dsp / --cnd / --ui / --mono / --jp）が
            使う書体を1リクエストにまとめている。 */}
        <link href='https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&family=M+PLUS+Rounded+1c:wght@300;400;500&family=Quicksand:wght@500;600;700&family=Noto+Sans+SC:wght@400;500;700&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap' rel='stylesheet' />
      </head>
      <body>
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
