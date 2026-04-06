import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpeedBadge from "@/components/SpeedBadge";
import { getAllArticles } from "@/lib/mdx";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ソラの秘密基地 | AI×実務の実験場",
  description:
    "延べ3,000人規模の運用実績を持つ現役総務部長・ソラが送る、AI×実務の実験場。DX改善実録、自作ツール、ガジェット検証を発信。",
};

// ─── Lab Tools Preview (static, /lab が準備中なのでデモデータ) ──────────────
const LAB_TOOLS_PREVIEW = [
  {
    id: "ai-tool-advisor",
    name: "AIツール選定アドバイザー",
    description: "4つの質問に答えるだけで、用途・予算・技術レベルに合ったAIツールを診断。",
    aiUsed: ["診断ロジック", "Next.js"],
    status: "live" as const,
    href: "/lab/ai-tool-advisor",
  },
  {
    id: "meeting-minutes",
    name: "議事録AI自動生成",
    description: "Whisper + Claude で音声→議事録を全自動化。5分の録音を30秒で要約。",
    aiUsed: ["Whisper", "Claude"],
    status: "coming" as const,
    href: "/lab",
  },
  {
    id: "approval-doc-gen",
    name: "稟議書ジェネレーター",
    description: "製品仕様を入力するだけで、稟議が通る比較表付き文書を自動生成。",
    aiUsed: ["Claude", "Next.js"],
    status: "coming" as const,
    href: "/lab",
  },
];

export default function HomePage() {
  const caseStudies = getAllArticles("case-studies").slice(0, 3);
  const reviews = getAllArticles("reviews").slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="hero">
          <div className="container">
            <div className="hero-eyebrow">
              <span>⚡</span>
              <span>AI Navigator · ソラの秘密基地</span>
            </div>
            <h1 className="hero-title">
              延べ<span className="gradient-text">3,000人規模</span>の<br />
              運用実績を持つ<br />
			  総務部長が送る<br />
              <span className="gradient-text">AI×実務</span>の実験場
            </h1>
            <p className="hero-subtitle">
              現役総務部長・ソラが、実際の業務で培ったAI活用知見を公開。
              「動くツール」「実録DX事例」「プロ視点のガジェット検証」を届けます。
            </p>
            <div className="hero-actions">
              <Link href="/case-studies" className="btn btn-primary">
                DX実録を読む →
              </Link>
              <Link href="/lab" className="btn btn-outline">
                ラボを見る
              </Link>
            </div>

            {/* Speed Badge */}
            <div style={{ marginTop: "2rem" }}>
              <SpeedBadge />
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: "2.5rem",
                marginTop: "3rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { value: "3,000+", label: "延べ運用ユーザー" },
                { value: "7+", label: "DX実録記事" },
                { value: "WP→Next.js", label: "爆速化移行済み" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      background:
                        "linear-gradient(135deg, var(--color-primary-light), var(--color-secondary))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                      marginTop: "0.15rem",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 1: ラボツール ── */}
        <section className="section">
          <div className="container">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">🔬 Lab Tools</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: "2rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <h2 style={{ margin: 0 }}>自作ツール・実験場</h2>
              <Link
                href="/lab"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-primary-light)",
                  fontWeight: 600,
                }}
              >
                すべて見る →
              </Link>
            </div>

            <div className="tool-grid">
              {LAB_TOOLS_PREVIEW.map((tool) => (
                <Link key={tool.id} href={tool.href} style={{ display: "block" }}>
                  <div
                    className="card"
                    style={{ padding: "1.5rem", position: "relative", height: "100%" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        background:
                          tool.status === "live"
                            ? "rgba(16 185 129 / 0.15)"
                            : "rgba(99 102 241 / 0.15)",
                        color:
                          tool.status === "live"
                            ? "var(--color-success)"
                            : "var(--color-primary-light)",
                        border:
                          tool.status === "live"
                            ? "1px solid rgba(16 185 129 / 0.3)"
                            : "1px solid rgba(99 102 241 / 0.3)",
                        borderRadius: "999px",
                        padding: "0.2rem 0.6rem",
                      }}
                    >
                      {tool.status === "live" ? "公開中" : "準備中"}
                    </div>
                    <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem", paddingRight: "5rem" }}>
                      {tool.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.6,
                        marginBottom: "1rem",
                      }}
                    >
                      {tool.description}
                    </p>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      {tool.aiUsed.map((ai) => (
                        <span
                          key={ai}
                          style={{
                            fontSize: "0.7rem",
                            background: "rgba(6 182 212 / 0.1)",
                            color: "var(--color-secondary)",
                            border: "1px solid rgba(6 182 212 / 0.25)",
                            borderRadius: "4px",
                            padding: "0.15rem 0.5rem",
                            fontWeight: 600,
                          }}
                        >
                          {ai}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 2: DX実録 ── */}
        <section className="section" style={{ background: "var(--color-surface)" }}>
          <div className="container">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">📋 Case Studies</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: "2rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <h2 style={{ margin: 0 }}>業務改善の実録</h2>
              <Link
                href="/case-studies"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-primary-light)",
                  fontWeight: 600,
                }}
              >
                すべて見る →
              </Link>
            </div>

            {caseStudies.length > 0 ? (
              <div className="guide-grid">
                {caseStudies.map((article) => (
                  <Link key={article.slug} href={`/case-studies/${article.slug}`}>
                    <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                      {article.frontmatter.scale && (
                        <div
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "var(--color-accent)",
                            marginBottom: "0.5rem",
                          }}
                        >
                          📊 {article.frontmatter.scale}
                        </div>
                      )}
                      <p className="guide-card-title">{article.frontmatter.title}</p>
                      <p className="guide-card-excerpt">{article.frontmatter.excerpt}</p>
                      {article.frontmatter.aiUsed && (
                        <div
                          style={{
                            display: "flex",
                            gap: "0.35rem",
                            flexWrap: "wrap",
                            marginTop: "0.75rem",
                          }}
                        >
                          {article.frontmatter.aiUsed.map((ai) => (
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
                        </div>
                      )}
                      <p
                        style={{
                          marginTop: "1rem",
                          fontSize: "0.82rem",
                          color: "var(--color-primary-light)",
                          fontWeight: 600,
                        }}
                      >
                        実録を読む →
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p style={{ color: "var(--color-text-muted)" }}>記事を準備中です。</p>
            )}
          </div>
        </section>

        {/* ── Section 3: ガジェット検証 ── */}
        <section className="section">
          <div className="container">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">🔧 Reviews</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: "2rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <h2 style={{ margin: 0 }}>厳選ガジェット検証</h2>
              <Link
                href="/reviews"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-primary-light)",
                  fontWeight: 600,
                }}
              >
                すべて見る →
              </Link>
            </div>

            {reviews.length > 0 ? (
              <div className="guide-grid">
                {reviews.map((article) => (
                  <Link key={article.slug} href={`/reviews/${article.slug}`}>
                    <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                      {typeof article.frontmatter.rating === "number" && (
                        <div
                          style={{
                            display: "flex",
                            gap: "2px",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              style={{
                                color: "var(--color-accent)",
                                opacity: i < article.frontmatter.rating! ? 1 : 0.2,
                                fontSize: "0.85rem",
                              }}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="guide-card-title">{article.frontmatter.title}</p>
                      <p className="guide-card-excerpt">{article.frontmatter.excerpt}</p>
                      <p
                        style={{
                          marginTop: "1rem",
                          fontSize: "0.82rem",
                          color: "var(--color-primary-light)",
                          fontWeight: 600,
                        }}
                      >
                        レビューを読む →
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p style={{ color: "var(--color-text-muted)" }}>レビューを準備中です。</p>
            )}
          </div>
        </section>

        {/* ── About Sora ── */}
        <section
          className="section"
          style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
          id="about"
        >
          <div className="container">
            <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  margin: "0 auto 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                }}
              >
                ⚡
              </div>
              <h2 style={{ marginBottom: "1rem" }}>ソラとは？</h2>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                現役の総務部長として延べ3,000人規模の組織運営を担いながら、AI・自動化に魅了されたオタクです。
                「実務で動くものしか発信しない」をポリシーに、
                業務改善の実録・自作ツール・ガジェット検証を届けています。
                WordPressから<strong>Next.js</strong>へ移行してサイトを爆速化した実績もこのサイトで証明中。
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {["現役総務部長", "AI・自動化オタク", "Next.js移行済み", "GAS × Python"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.78rem",
                      background: "var(--color-surface-2)",
                      color: "var(--color-primary-light)",
                      border: "1px solid rgba(99 102 241 / 0.25)",
                      borderRadius: "999px",
                      padding: "0.3rem 0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
