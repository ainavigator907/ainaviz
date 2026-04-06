import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllArticles } from "@/lib/mdx";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DX実録",
  description:
    "現役総務部長・ソラが実践した業務改善の実録。現場での具体的なDX事例を公開。",
};

export default function CaseStudiesPage() {
  const articles = getAllArticles("case-studies");

  return (
    <>
      <Navbar />
      <main>
        {/* ── Header ── */}
        <section style={{ padding: "5rem 0 3rem", borderBottom: "1px solid var(--color-border)" }}>
          <div className="container">
            <div className="hero-eyebrow">
              <span>📋</span>
              <span>Case Studies · 業務改善の実録</span>
            </div>
            <h1 style={{ marginBottom: "1rem" }}>
              <span className="gradient-text">DX実録</span>
            </h1>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", maxWidth: "620px", lineHeight: 1.7 }}>
              「実際にどう変わったか」を数字と手順で記録。
              具体的な社名・システム名は出さずに、再現性ある形で公開しています。
            </p>
          </div>
        </section>

        {/* ── Article List ── */}
        <section className="section">
          <div className="container">
            {articles.length === 0 ? (
              <p style={{ color: "var(--color-text-muted)", textAlign: "center", padding: "3rem 0" }}>
                記事を準備中です。
              </p>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  maxWidth: "860px",
                }}
              >
                {articles.map((article) => (
                  <Link key={article.slug} href={`/case-studies/${article.slug}`}>
                    <div
                      className="card"
                      style={{
                        padding: "1.75rem",
                        display: "flex",
                        gap: "1.5rem",
                        alignItems: "flex-start",
                      }}
                    >
                      {/* Left: meta */}
                      <div style={{ flexShrink: 0, width: "80px" }}>
                        <time
                          dateTime={article.frontmatter.date}
                          style={{
                            fontSize: "0.72rem",
                            color: "var(--color-text-muted)",
                            display: "block",
                            lineHeight: 1.5,
                          }}
                        >
                          {article.frontmatter.date}
                        </time>
                        {article.frontmatter.readTime && (
                          <span
                            style={{
                              fontSize: "0.7rem",
                              color: "var(--color-text-muted)",
                              display: "block",
                              marginTop: "0.25rem",
                            }}
                          >
                            ⏱ {article.frontmatter.readTime}
                          </span>
                        )}
                      </div>

                      {/* Right: content */}
                      <div style={{ flex: 1 }}>
                        {article.frontmatter.scale && (
                          <div
                            style={{
                              display: "inline-block",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              color: "var(--color-accent)",
                              background: "rgba(245 158 11 / 0.1)",
                              border: "1px solid rgba(245 158 11 / 0.25)",
                              borderRadius: "4px",
                              padding: "0.15rem 0.5rem",
                              marginBottom: "0.5rem",
                            }}
                          >
                            📊 {article.frontmatter.scale}
                          </div>
                        )}
                        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                          {article.frontmatter.title}
                        </h2>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--color-text-muted)",
                            lineHeight: 1.7,
                            marginBottom: "0.75rem",
                          }}
                        >
                          {article.frontmatter.excerpt}
                        </p>

                        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", alignItems: "center" }}>
                          {article.frontmatter.aiUsed?.map((ai) => (
                            <span
                              key={ai}
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
                              {ai}
                            </span>
                          ))}
                          {article.frontmatter.tags?.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontSize: "0.68rem",
                                background: "var(--color-surface-2)",
                                color: "var(--color-text-muted)",
                                borderRadius: "4px",
                                padding: "0.12rem 0.45rem",
                              }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div
                        style={{
                          flexShrink: 0,
                          color: "var(--color-primary-light)",
                          fontSize: "1.1rem",
                          alignSelf: "center",
                        }}
                      >
                        →
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
