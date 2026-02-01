import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "nextjs-orgchart/dist/ChartContainer.css";
import "nextjs-orgchart/dist/ChartNode.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Apapa",
  description: "****",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const resolvedLocale = routing.locales.includes(locale as never)
    ? locale
    : routing.defaultLocale;

  setRequestLocale(resolvedLocale);
  const messages = await getMessages({ locale: resolvedLocale });
  return (
    <NextIntlClientProvider locale={resolvedLocale} messages={messages}>
      {children}
      <ToastContainer style={{ zIndex: 9999999999 }} />
    </NextIntlClientProvider>
  );
}
