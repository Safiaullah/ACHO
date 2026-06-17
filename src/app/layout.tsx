import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.fullName}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "ABA therapy",
    "autism care",
    "BCBA",
    "applied behavior analysis",
    "early intervention",
    "neurodiversity-affirming",
  ],
  openGraph: {
    title: `${site.name} — ${site.fullName}`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} bg-cream antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
