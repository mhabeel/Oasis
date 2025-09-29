import { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/menuData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/#menu`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/#contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  // Optional: category anchors as separate entries (nice-to-have)
  const categoryAnchors: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${SITE_URL}/#${c.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...routes, ...categoryAnchors];
}
