import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllArticles } from "@/lib/mdx";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ガジェット検証",
  description:
    "稟議を通すプロ視点で検証するPC・スマホ・ガジェットのスペック比較レビュー。費用対効果・導入メリットで解説。",
};

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{
            color: "var(--color-accent)",
            opacity: i < count ? 1 : 0.2,
            fontSize: "0.9rem",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const articles = getAllArticles("reviews");

  return (
    <>
      <Navbar />
      <main>
        {/* ── Header ── */}
        <section style={{ padding: "5rem 0 3rem", borderBottom: "1px solid var(--color-border)" }}>
          <div className="container">
            <div className="hero-eyebrow">
              <span>🔧</span>
              <span>Reviews · ガジェット検証</span>
            </div>
            <h1 style={{ marginBottom: "1rem" }}>
              <span className="gradient-text">厳選ガジェット検証</span>
            </h1>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", maxWidth: "620px", lineHeight: 1.7 }}>
              「稟議が通る」プロ視点の比較レビュー。費用対効果・導入メリットを軸に、
              実務で本当に役立つかどうかを検証します。
            </p>
          </div>
        </section>

        {/* ── Article Grid ── */}
        <section className="section">
          <div className="container">
            {articles.length === 0 ? (
              <p style={{ color: "var(--color-text-muted)", textAlign: "center", padding: "3rem 0" }}>
                レビューを準備中です。
              </p>
            ) : (
              <div className="guide-grid">
                {articles.map((article) => (
                  <Link key={article.slug} href={`/reviews/${article.slug}`}>
                    <div className="card" style={{ padding: "1.75rem", height: "100%" }}>
                      {/* Rating */}
                      {typeof article.frontmatter.rating === "number" && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <Stars count={article.frontmatter.rating} />
                        </div>
                      )}

                      {/* Title */}
                      <h2 style={{ fontSize: "1.05rem", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                        {article.frontmatter.title}
                      </h2>

                      {/* Excerpt */}
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--color-text-muted)",
                          lineHeight: 1.7,
                          marginBottom: "1rem",
                        }}
                      >
                        {article.frontmatter.excerpt}
                      </p>

                      {/* Products compared */}
                      {article.frontmatter.products && article.frontmatter.products.length > 0 && (
                        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                          {article.frontmatter.products.map((p) => (
                            <span
                              key={p}
                              style={{
                                fontSize: "0.7rem",
                                background: "var(--color-surface-2)",
                                color: "var(--color-text-muted)",
                                borderRadius: "4px",
                                padding: "0.12rem 0.45rem",
                              }}
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Meta */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "auto",
                        }}
                      >
                        <time
                          dateTime={article.frontmatter.date}
                          style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}
                        >
                          {article.frontmatter.date}
                        </time>
                        <span
                          style={{
                            fontSize: "0.82rem",
                            color: "var(--color-primary-light)",
                            fontWeight: 600,
                          }}
                        >
                          レビューを読む →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
