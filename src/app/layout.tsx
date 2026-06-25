import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Energiemind — Sustainability, Research & Public Mission",
    template: "%s | Energiemind",
  },
  description:
    "Public mission website for energy waste reduction, mining heat reuse, sustainability research, and open education resources.",
  keywords: [
    "sustainability",
    "energy waste reduction",
    "mining heat reuse",
    "research",
    "education",
    "climate",
    "renewable energy",
  ],
  openGraph: {
    title: "Energiemind — Sustainability, Research & Public Mission",
    description:
      "Advancing energy efficiency, mining heat reuse, and open sustainability research for the public good.",
    url: "https://energiemind.org",
    siteName: "Energiemind",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
