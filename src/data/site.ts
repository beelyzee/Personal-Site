import { FAQItem } from "@/types";

export const SITE = {
  name: "William Zhang | 5A Mortgage & Real Estate",
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
  heroHeadline: "William is your guide to navigating San Francisco real estate.",
  heroSubheadline: "Secure your dream home today with trusted local strategy and direct support.",
  trustPoints: [
    "Local San Francisco expertise",
    "Real estate + mortgage strategy",
    "Clear and direct communication",
    "Data-driven guidance",
  ],
  trustedClientLogos: [
    "Qualcomm",
    "Apple",
    "Johnson & Johnson",
    "U.S. Navy",
    "U.S. Marines",
    "Salk Institute",
    "San Diego MTS",
    "Meta",
    "UCLA",
    "UC San Diego",
  ],
  primaryNav: [
    { href: "/buy", label: "Buy" },
    { href: "/sell", label: "Sell" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
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
