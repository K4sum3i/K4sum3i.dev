import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://k4sum3i.dev"),
  title: {
    default: "K4sum3i",
    template: "%s — K4sum3i",
  },
  description:
    "Portfolio de K4sum3i: proyectos, experiencia y tecnologías enfocadas en desarrollo web moderno.",
  keywords: [
    "portfolio",
    "web developer",
    "frontend",
    "full stack",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "K4sum3i — Portfolio",
    description:
      "Proyectos y experiencia en desarrollo web moderno (Next.js, React, TypeScript, Tailwind).",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "K4sum3i — Portfolio",
    description:
      "Proyectos y experiencia en desarrollo web moderno (Next.js, React, TypeScript, Tailwind).",
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
        {children}
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
