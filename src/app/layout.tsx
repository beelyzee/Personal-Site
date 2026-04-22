import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import { SITE } from "@/data/site";
import StructuredData from "@/components/shared/StructuredData";
import StickyMobileCTA from "@/components/shared/StickyMobileCTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData
          data={[
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE.name,
              url: SITE.baseUrl,
            },
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: SITE.name,
              areaServed: SITE.serviceArea,
              telephone: SITE.phoneDisplay,
              email: SITE.email,
              url: SITE.baseUrl,
            },
          ]}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
