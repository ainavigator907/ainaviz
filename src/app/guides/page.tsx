import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/mdx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "使い方ガイド",
  description:
    "ChatGPT・Cursor・Midjourneyなど海外AIツールを日本語でやさしく解説。初心者からビジネスプロまで役立つステップバイステップガイド。",
};

// Fallback seed guides (shown when no MDX files exist yet)
const SEED_GUIDES = [
  {
    slug: "chatgpt-business-prompts",
    frontmatter: {
      title: "ChatGPTビジネス活用｜即使える日本語プロンプト20選",
      excerpt: "会議議事録・メール返信・資料作成まで、コピペで使えるプロンプトを完全網羅。",
      date: "2026-03-20",
      category: "guide" as const,
      tags: ["ChatGPT", "プロンプト", "ビジネス"],
      readTime: "8分",
    },
  },
  {
    slug: "cursor-setup-guide",
    frontmatter: {
      title: "Cursor完全セットアップガイド【2026年版】",
      excerpt: "従来のVSCodeからCursorへ移行する手順と、AIコーディングを最大化する設定を解説。",
      date: "2026-03-15",
      category: "guide" as const,
      tags: ["Cursor", "コーディング", "VSCode"],
      readTime: "12分",
    },
  },
  {
    slug: "midjourney-prompt-tips",
    frontmatter: {
      title: "Midjourney v7で商用OKの画像を作るプロンプト術",
      excerpt: "ブランドガイドラインに沿ったビジュアル素材をAIで量産する方法を図解で説明。",
      date: "2026-03-10",
      category: "guide" as const,
      tags: ["Midjourney", "画像生成", "プロンプト"],
      readTime: "10分",
    },
  },
  {
    slug: "elevenlabs-podcast-guide",
    frontmatter: {
      title: "ElevenLabsで日本語ポッドキャストを自動生成する方法",
      excerpt: "テキスト原稿から自然な音声ナレーションを生成し、RSS配信するまでの全手順。",
      date: "2026-03-05",
      category: "guide" as const,
      tags: ["ElevenLabs", "音声合成", "ポッドキャスト"],
      readTime: "9分",
    },
  },
];

type ExtendedFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  category: "guide" | "tool" | "news";
  tags: string[];
  readTime?: string;
};

export default function GuidesPage() {
  const mdxGuides = getAllArticles("guides");

  const guides =
    mdxGuides.length > 0
      ? mdxGuides.map((g) => ({
          slug: g.slug,
          frontmatter: g.frontmatter as ExtendedFrontmatter,
        }))
      : SEED_GUIDES;

  return (
    <>
      <Navbar />
      <main>
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
          {/* Page header */}
          <div style={{ marginBottom: "3rem" }}>
            <div className="section-label" style={{ marginBottom: "0.75rem" }}>
              <div className="section-label-line" />
              <span className="section-label-text">Step-by-Step Guides</span>
            </div>
            <h1 style={{ marginBottom: "0.75rem" }}>
              AIツール<span className="gradient-text">使い方ガイド</span>
            </h1>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "560px" }}>
              最新AIツールを日本語でやさしく解説。コードスニペット付きで実践的に学べます。
            </p>
          </div>

          {/* Guide grid */}
          <div className="guide-grid">
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                <article className="card" style={{ padding: "1.5rem", height: "100%", cursor: "pointer" }}>
                  <div className="guide-card-meta">
                    <time dateTime={guide.frontmatter.date}>{guide.frontmatter.date}</time>
                    {(guide.frontmatter as ExtendedFrontmatter).readTime && (
                      <>
                        <span>·</span>
                        <span>⏱ {(guide.frontmatter as ExtendedFrontmatter).readTime}</span>
                      </>
                    )}
                  </div>
                  <h2 className="guide-card-title">{guide.frontmatter.title}</h2>
                  <p className="guide-card-excerpt">{guide.frontmatter.excerpt}</p>

                  {/* Tags */}
                  <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginTop: "1rem" }}>
                    {guide.frontmatter.tags.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.72rem",
                          background: "var(--color-surface-2)",
                          color: "var(--color-text-muted)",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "4px",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <p
                    style={{
                      marginTop: "1rem",
                      fontSize: "0.82rem",
                      color: "var(--color-primary-light)",
                      fontWeight: 600,
                    }}
                  >
                    続きを読む →
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
