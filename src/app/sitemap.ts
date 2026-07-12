import { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ainaviz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── 静的ページ ──────────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/lab`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/lab/irerudake`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/lab/ai-tool-advisor`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // ── 記事ページ（MDXから動的生成）──────────────────────────────────────────
  const articleRoutes: MetadataRoute.Sitemap = (
    ["guides", "case-studies"] as const
  ).flatMap((folder) =>
    getAllArticles(folder).map((article) => ({
      url: `${SITE_URL}/${folder}/${article.slug}`,
      lastModified: article.frontmatter.date
        ? new Date(article.frontmatter.date)
        : now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  return [...staticRoutes, ...articleRoutes];
}
