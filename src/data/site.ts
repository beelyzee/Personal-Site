import { FAQItem } from "@/types";

export const SITE = {
  name: "William Zhang Real Estate",
  shortName: "William Zhang",
  title: "San Francisco Real Estate Advisor | William Zhang",
  description:
    "Premium guidance for San Francisco buyers and sellers with neighborhood expertise, polished service, and a modern real-estate experience.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://5amortgage.com",
  phoneDisplay: "PHONE_NUMBER",
  phoneHref: "PHONE_TEL",
  email: "CONTACT_EMAIL",
  consultationCta: "Book a Consultation",
  valuationCta: "Get Your Home Value",
  serviceArea: "San Francisco, California",
  brokerageName: "BROKERAGE_NAME",
  brokerageDisclosures: "BROKERAGE_DISCLOSURES",
  heroHeadline: "A premium real-estate experience for San Francisco buyers and sellers.",
  heroSubheadline:
    "William Zhang helps clients navigate San Francisco neighborhoods, pricing strategy, and next-step decisions with clarity and calm confidence.",
  trustPoints: [
    "San Francisco neighborhood expertise",
    "Buyer and seller strategy",
    "Responsive, concierge-level communication",
    "Modern marketing and analytics",
  ],
  primaryNav: [
    { href: "/", label: "Home" },
    { href: "/buy", label: "Buy in SF" },
    { href: "/sell", label: "Sell in SF" },
    { href: "/neighborhoods", label: "Neighborhoods" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const HOME_FAQS: FAQItem[] = [
  {
    question: "What makes William Zhang different from a larger team?",
    answer:
      "Clients get direct strategy, direct communication, and a highly tailored experience built around San Francisco micro-markets rather than a one-size-fits-all playbook.",
  },
  {
    question: "Do you work with both buyers and sellers?",
    answer:
      "Yes. The site is designed to support homebuyers, homeowners preparing to sell, and clients who want local guidance before making a move.",
  },
  {
    question: "Which San Francisco neighborhoods do you focus on?",
    answer:
      "The site highlights neighborhoods like Noe Valley, Pacific Heights, Russian Hill, and the Sunset, while supporting broader San Francisco moves as well.",
  },
];

