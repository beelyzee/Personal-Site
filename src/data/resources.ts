export type ResourceCategory =
  | "Buying Basics"
  | "Financing Strategy"
  | "San Francisco Market";

export type ResourceItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: ResourceCategory;
  readTime: string;
  featured?: boolean;
};

export const RESOURCES: ResourceItem[] = [
  {
    slug: "sf-home-buying-process-step-by-step",
    title: "San Francisco Home Buying Process: Step by Step",
    excerpt:
      "A simple walkthrough from early planning to accepted offer, financing, and closing in San Francisco.",
    category: "Buying Basics",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "how-mortgage-preapproval-works",
    title: "How Mortgage Preapproval Works",
    excerpt:
      "Understand what lenders review, what documents matter, and how to get offer-ready with confidence.",
    category: "Financing Strategy",
    readTime: "5 min read",
  },
  {
    slug: "how-much-down-payment-should-you-have",
    title: "How Much Down Payment Should You Have?",
    excerpt:
      "Compare tradeoffs between keeping cash reserves, monthly payment goals, and competitive offer strength.",
    category: "Financing Strategy",
    readTime: "5 min read",
  },
  {
    slug: "mistakes-first-time-buyers-make",
    title: "Common Mistakes First-Time Buyers Make",
    excerpt:
      "Avoid timing, budgeting, and documentation issues that can delay approval or weaken your offer.",
    category: "Buying Basics",
    readTime: "7 min read",
  },
  {
    slug: "how-rates-affect-buying-power",
    title: "How Rates Affect Buying Power",
    excerpt:
      "A practical look at how interest rates shift monthly affordability and price range in real numbers.",
    category: "Financing Strategy",
    readTime: "4 min read",
  },
  {
    slug: "making-an-offer-in-san-francisco",
    title: "What to Know Before Making an Offer in SF",
    excerpt:
      "What buyers should prepare before offer day, including financing timing, contingencies, and communication.",
    category: "San Francisco Market",
    readTime: "6 min read",
  },
  {
    slug: "condo-vs-tic-financing-san-francisco",
    title: "Condo vs TIC Financing in San Francisco",
    excerpt:
      "Loan structure considerations and approval differences when evaluating condos and TIC properties in SF.",
    category: "San Francisco Market",
    readTime: "8 min read",
  },
];

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  "Buying Basics",
  "Financing Strategy",
  "San Francisco Market",
];

