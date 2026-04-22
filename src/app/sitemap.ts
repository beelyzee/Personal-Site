import { MetadataRoute } from "next";

import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/buy",
    "/sell",
    "/neighborhoods",
    "/about",
    "/contact",
    "/resources",
    "/get-home-value",
    "/book-consultation",
    "/privacy-policy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE.baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...NEIGHBORHOODS.map((neighborhood) => ({
      url: `${SITE.baseUrl}/neighborhoods/${neighborhood.slug}`,
      lastModified: new Date(),
    })),
  ];
}

