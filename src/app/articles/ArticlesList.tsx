"use client";

import { useState } from "react";
import Link from "next/link";

export interface ArticleListItem {
  slug: string;
  folder: "case-studies" | "guides";
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  aiUsed: string[];
  readTime?: string;
}

type Filter = "all" | "case-studies" | "guides";

const TABS: { key: Filter; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "case-studies", label: "実録" },
  { key: "guides", label: "ガイド" },
];

export default function ArticlesList({ articles }: { articles: ArticleListItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all" ? articles : articles.filter((a) => a.folder === filter);

  return (
    <>
      {/* タブ */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              fontWeight: 600,
              padding: "0.5rem 1.25rem",
              borderRadius: "999px",
              cursor: "pointer",
              transition: "var(--transition)",
              background: filter === key ? "var(--color-primary)" : "transparent",
              color: filter === key ? "#fff" : "var(--color-text-muted)",
              border:
                filter === key
                  ? "1px solid var(--color-primary)"
                  : "1px solid var(--color-border)",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 記事一覧 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "820px" }}>
        {visible.map((article) => (
          <Link key={`${article.folder}-${article.slug}`} href={`/${article.folder}/${article.slug}`}>
            <article className="card" style={{ padding: "1.75rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.6rem",
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted)",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color:
                      article.folder === "case-studies"
                        ? "var(--color-secondary)"
                        : "var(--color-primary-light)",
                  }}
                >
                  {article.folder === "case-studies" ? "実録" : "ガイド"}
                </span>
                <time dateTime={article.date}>{article.date}</time>
                {article.readTime && <span>{article.readTime}</span>}
              </div>
              <h2 style={{ fontSize: "1.15rem", marginBottom: "0.5rem", lineHeight: 1.5 }}>
                {article.title}
              </h2>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                {article.excerpt}
              </p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {[...article.aiUsed, ...article.tags].slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.68rem",
                      background: "rgba(6 182 212 / 0.1)",
                      color: "var(--color-secondary)",
                      border: "1px solid rgba(6 182 212 / 0.2)",
                      borderRadius: "4px",
                      padding: "0.12rem 0.45rem",
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>

      {visible.length === 0 && (
        <p style={{ color: "var(--color-text-muted)" }}>記事を準備中です。</p>
      )}
    </>
  );
}
