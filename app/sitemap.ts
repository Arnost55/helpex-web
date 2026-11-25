import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "product/", "architecture/", "security/", "developers/", "about/", "contact/"];
  return routes.map((route) => ({ url: `https://helpex.dev/${route}`, lastModified: new Date("2026-11-25"), changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 }));
}
