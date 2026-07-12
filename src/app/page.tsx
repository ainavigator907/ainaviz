import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpeedBadge from "@/components/SpeedBadge";
import { getAllArticles } from "@/lib/mdx";
import {
  IconFlask,
  IconArticle,
  IconClipboard,
  IconUser,
  IconVideo,
  IconArrowRight,
} from "@/components/Icons";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AINaviz | AIをビジネスの戦力にする",
  description:
    "AIをビジネス活用する人のナビゲーター。現役総務部長・ソラが、実務で本当に動くAIツールと活用ノウハウだけを届けます。",
};

// note有料コンテンツが公開されたら true にして NOTE_URL を設定
const SHOW_NOTE_SECTION = false;
const NOTE_URL = "https://note.com/";

const TOOLS = [
  {
    id: "irerudake",
    name: "イレルダケ",
    description:
      "講師映像とスライドを読み込んで、区間ごとに見せ方を指定するだけで講座動画が完成するWindowsアプリ。PiP合成・フェード・4K書き出し対応。",
    tags: ["Claude Code", "Electron", "FFmpeg"],
    href: "/lab/irerudake",
    badge: "無料体験版あり",
    badgeType: "trial" as const,
  },
  {
    id: "ai-tool-advisor",
    name: "AIツール選定アドバイザー",
    description:
      "4つの質問に答えるだけで、用途・予算・技術レベルに合ったAIツールを診断。導入の最初の一歩に。",
    tags: ["診断ロジック", "Next.js"],
    href: "/lab/ai-tool-advisor",
    badge: "Web版・無料",
    badgeType: "free" as const,
  },
];

export default function HomePage() {
  const featured = [
    ...getAllArticles("case-studies").map((a) => ({ ...a, folder: "case-studies" as const })),
    ...getAllArticles("guides").map((a) => ({ ...a, folder: "guides" as const })),
  ]
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
    .filter((a) => a.frontmatter.featured !== false)
    .slice(0, 6);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="hero">
          <div className="container">
            <div className="hero-eyebrow">
              <span>AINaviz — AI Navigator for Business</span>
            </div>
            <h1 className="hero-title">
              AIを、現場で使える<br />
              <span className="gradient-text">戦力</span>に。
            </h1>
            <p className="hero-subtitle">
              現役総務部長・ソラが、実務で本当に動くAIツールと活用ノウハウだけを届けます。
              机上の空論ではなく、現場で検証済みのものだけを。
            </p>
            <div className="hero-actions">
              <Link href="/lab" className="btn btn-primary">
                ツールを見る
              </Link>
              <Link href="/articles" className="btn btn-outline">
                記事を読む
              </Link>
            </div>

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
                { value: "15+", label: "実録・活用記事" },
                { value: "2", label: "公開中の自作ツール" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--color-text)",
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

        {/* ── ツール ── */}
        <section className="section" style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
          <div className="container">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <IconFlask size={14} /> Tools
              </span>
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
              <h2 style={{ margin: 0 }}>現場で使える自作ツール</h2>
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
              {TOOLS.map((tool) => (
                <Link key={tool.id} href={tool.href} style={{ display: "block" }}>
                  <div
                    className="card"
                    style={{ padding: "1.75rem", position: "relative", height: "100%", display: "flex", flexDirection: "column", gap: "0.85rem" }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem" }}>
                      <span style={{ color: "var(--color-primary-light)" }}>
                        {tool.id === "irerudake" ? <IconVideo size={26} /> : <IconFlask size={26} />}
                      </span>
                      <span className={tool.badgeType === "trial" ? "badge badge-new" : "badge badge-free"}>
                        {tool.badge}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.1rem", margin: 0 }}>{tool.name}</h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {tool.description}
                    </p>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "auto" }}>
                      {tool.tags.map((tag) => (
                        <span
                          key={tag}
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
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 記事 ── */}
        <section className="section">
          <div className="container">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <IconArticle size={14} /> Articles
              </span>
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
              <h2 style={{ margin: 0 }}>現場の実録とガイド</h2>
              <Link
                href="/articles"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-primary-light)",
                  fontWeight: 600,
                }}
              >
                すべて見る →
              </Link>
            </div>

            {featured.length > 0 ? (
              <div className="guide-grid">
                {featured.map((article) => (
                  <Link key={`${article.folder}-${article.slug}`} href={`/${article.folder}/${article.slug}`}>
                    <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: article.folder === "case-studies" ? "var(--color-secondary)" : "var(--color-primary-light)",
                          marginBottom: "0.6rem",
                          letterSpacing: "0.05em",
                        }}
                      >
                        <IconClipboard size={13} />
                        {article.folder === "case-studies" ? "実録" : "ガイド"}
                      </div>
                      <p className="guide-card-title">{article.frontmatter.title}</p>
                      <p className="guide-card-excerpt">{article.frontmatter.excerpt}</p>
                      <p
                        style={{
                          marginTop: "1rem",
                          fontSize: "0.82rem",
                          color: "var(--color-primary-light)",
                          fontWeight: 600,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                        }}
                      >
                        読む <IconArrowRight size={14} />
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

        {/* ── note 有料コンテンツ導線（note記事公開後に表示） ── */}
        {SHOW_NOTE_SECTION && (
          <section className="section" style={{ paddingTop: 0 }}>
            <div className="container">
              <div
                className="card"
                style={{
                  padding: "2.5rem",
                  textAlign: "center",
                  background: "linear-gradient(135deg, rgba(99 102 241 / 0.06), rgba(6 182 212 / 0.04))",
                }}
              >
                <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>深掘り版・テンプレート集</h2>
                <p style={{ color: "var(--color-text-muted)", maxWidth: "560px", margin: "0 auto 1.5rem", fontSize: "0.95rem" }}>
                  実務でそのまま使えるプロンプト集・規程テンプレート・導入手順の深掘り版は、noteで公開しています。
                </p>
                <a href={NOTE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  noteで見る
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ── About ── */}
        <section
          className="section"
          style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
          id="about"
        >
          <div className="container">
            <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  border: "1px solid rgba(99 102 241 / 0.4)",
                  background: "var(--color-surface-2)",
                  margin: "0 auto 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-primary-light)",
                }}
              >
                <IconUser size={28} />
              </div>
              <h2 style={{ marginBottom: "1rem" }}>運営者について</h2>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                現役の総務部長として延べ3,000人規模のアプリ・サイト運営を担いながら、
                1人DX担当としてAI活用と業務自動化を実践しています。
                ポリシーは「実務で動くものしか発信しない」。
              </p>
              <Link href="/about" className="btn btn-outline" style={{ fontSize: "0.9rem" }}>
                詳しいプロフィールを見る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
