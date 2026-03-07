import { Analytics } from "@vercel/analytics/next";
import { I18nProvider } from "@/components/i18nProvider";
import type { Metadata } from "next";
import { NavigationIsland, MobileNavigation } from "@/components/shared";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://k4sum3i.com"),
  title: {
    default: "K4sum3i - Web Developer",
    template: "%s — K4sum3i",
  },
  description:
    "Portfolio de K4sum3i (Manuel Garcia): proyectos, experiencia y tecnologías enfocadas en desarrollo web moderno.",
  keywords: [
    "portfolio",
    "desarrollador web",
    "desarrollador frontend",
    "desarrollador full stack",
    "web developer",
    "frontend",
    "full stack",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "K4sum3i — Portfolio de Desarrollo Web",
    description:
      "Proyectos y experiencia de K4sum3i en desarrollo web moderno (Next.js, React, TypeScript, Tailwind CSS).",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "K4sum3i — Portfolio de Desarrollo Web",
    description:
      "Proyectos y experiencia en desarrollo web moderno (Next.js, React, TypeScript, Tailwind).",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${notoMono.variable} antialiased`}>
        <I18nProvider> {children}</I18nProvider>

        <Analytics />

        <div className="hidden md:block">
          <NavigationIsland />
        </div>

        <div className="block md:hidden">
          <MobileNavigation />
        </div>
      </body>
    </html>
  );
}
