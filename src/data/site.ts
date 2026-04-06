export const SITE_CONFIG = {
  siteName: "San Francisco Home Loans | William Zhang",
  companyName: "Equity Smart Home Loans",
  loanOfficerName: "William Zhang",
  loanOfficerFirstName: "William",
  phoneNumber: "PHONE_NUMBER",
  phoneTel: "PHONE_TEL",
  contactEmail: "CONTACT_EMAIL",
  siteUrl: "SITE_URL",
  reviewUrl: "REVIEW_URL",
  nmlsId: "NMLS_ID",
  dreId: "DRE_ID",
  serviceArea: "San Francisco, California",
  bookingUrl: "BOOKING_URL",
  ctaLabels: {
    startEstimate: "Start My Estimate",
    callNow: "Call William Now",
    requestReview: "Request a Real Preapproval Review",
  },
  estimateDisclaimer:
    "This estimate is for informational purposes only and is not a commitment to lend or extend credit. All loans are subject to underwriting review, credit approval, and program guidelines.",
  footerDisclaimer:
    "This estimate is for informational purposes only and is not a commitment to lend or extend credit. All loans are subject to underwriting review, credit approval, and program guidelines.",
  trustBadges: [
    "San Francisco Purchase Focus",
    "Fast Direct Communication",
    "Buyer Strategy + Numbers Clarity",
  ],
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

