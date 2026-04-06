import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import { SITE_CONFIG } from "@/data/site";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PhoneCTA from "@/components/shared/PhoneCTA";
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
  title: SITE_CONFIG.siteName,
  description:
    "San Francisco purchase-loan guidance, buying power estimate, and direct support from loan officer William Zhang at Equity Smart Home Loans.",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
          <PhoneCTA
            label={`Call ${SITE_CONFIG.loanOfficerFirstName} Now`}
            className="w-full"
            analyticsEvent="phone_click_mobile_sticky"
          />
        </div>
      </body>
    </html>
  );
}
