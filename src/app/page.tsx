"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SearchBar, { type ToolData } from "@/components/SearchBar";
import ToolCard from "@/components/ToolCard";
import AffiliateCard from "@/components/AffiliateCard";
import Link from "next/link";

// ─── Seed Data ────────────────────────────────────────────────────────────────
const TOOLS: ToolData[] = [
  {
    id: "chatgpt",
    name: "ChatGPT Plus",
    tagline: "GPT-4oで文章・コード・分析を高速こなす。ビジネスの万能AIアシスタント。",
    category: "文章生成",
    pricingLabel: "$20/月",
    speedScore: 5,
    rating: 5,
    isAffiliate: true,
    isNew: false,
    affiliateUrl: "https://openai.com/chatgpt",
    tags: ["GPT-4o", "文章生成", "コード", "API"],
  },
  {
    id: "claude",
    name: "Claude 3.5 Sonnet",
    tagline: "長文読解・倫理的AIで企業コンプライアンスに強い。Anthropic製。",
    category: "文章生成",
    pricingLabel: "無料プランあり",
    speedScore: 4,
    rating: 5,
    isAffiliate: false,
    isNew: true,
    affiliateUrl: "https://claude.ai",
    tags: ["長文", "倫理AI", "分析"],
  },
  {
    id: "midjourney",
    name: "Midjourney v6",
    tagline: "プロ品質の画像生成AIで、マーケ素材・SNSビジュアルを即作成。",
    category: "画像生成",
    pricingLabel: "$10/月〜",
    speedScore: 4,
    rating: 4,
    isAffiliate: true,
    isNew: false,
    affiliateUrl: "https://midjourney.com",
    tags: ["画像生成", "デザイン", "SNS"],
  },
  {
    id: "cursor",
    name: "Cursor",
    tagline: "AI搭載コードエディタ。コペイロットより速く、コンテキストが深い。",
    category: "コーディング",
    pricingLabel: "無料プランあり",
    speedScore: 5,
    rating: 5,
    isAffiliate: false,
    isNew: true,
    affiliateUrl: "https://cursor.sh",
    tags: ["コーディング", "VSCode", "AI補完"],
  },
  {
    id: "runway",
    name: "Runway Gen-3",
    tagline: "テキスト・画像から高品質動画を生成。CM・プロモ動画の制作コストを激減。",
    category: "動画生成",
    pricingLabel: "$15/月〜",
    speedScore: 3,
    rating: 4,
    isAffiliate: true,
    isNew: false,
    affiliateUrl: "https://runwayml.com",
    tags: ["動画生成", "CM", "クリエイティブ"],
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    tagline: "リアルな音声クローン・ナレーション生成。ポッドキャスト・研修動画に最適。",
    category: "音声",
    pricingLabel: "無料プランあり",
    speedScore: 5,
    rating: 4,
    isAffiliate: false,
    isNew: false,
    affiliateUrl: "https://elevenlabs.io",
    tags: ["音声合成", "TTS", "ナレーション"],
  },
];

const GUIDES = [
  {
    slug: "chatgpt-business-prompts",
    title: "ChatGPTビジネス活用｜即使える日本語プロンプト20選",
    excerpt: "会議議事録・メール返信・資料作成まで、コピペで使えるプロンプトを完全網羅。",
    date: "2026-03-20",
    category: "guide",
    readTime: "8分",
  },
  {
    slug: "cursor-setup-guide",
    title: "Cursor完全セットアップガイド【2026年版】",
    excerpt: "従来のVSCodeからCursorへ移行する手順と、AIコーディングを最大化する設定を解説。",
    date: "2026-03-15",
    category: "guide",
    readTime: "12分",
  },
  {
    slug: "midjourney-prompt-tips",
    title: "Midjourney v6で商用OKの画像を作るプロンプト術",
    excerpt: "ブランドガイドラインに沿ったビジュアル素材をAIで量産する方法を図解で説明。",
    date: "2026-03-10",
    category: "guide",
    readTime: "10分",
  },
];

export default function HomePage() {
  const [filteredTools, setFilteredTools] = useState<ToolData[]>(TOOLS);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <HeroSection />

        {/* ── Featured Affiliate ── */}
        <section className="section" style={{ paddingTop: "2rem" }}>
          <div className="container">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">注目のおすすめツール</span>
            </div>
            <h2 className="section-title">編集部ピックアップ</h2>
            <div style={{ maxWidth: "640px" }}>
              <AffiliateCard
                name="ChatGPT Plus"
                tagline="GPT-4oで文章・コード・画像生成・データ分析が一括でこなせる、ビジネスパーソン最強のAIアシスタント。"
                highlight="GPT-4o・DALL·E 3・Advanced Data Analysisが使い放題。API割引も適用。"
                price="$20/月"
                rating={5}
                affiliateUrl="https://openai.com/chatgpt"
                features={[
                  "GPT-4o 優先アクセス（速度・精度最優先）",
                  "DALL·E 3 画像生成（プロ品質）",
                  "Advanced Data Analysis（Excelより賢い）",
                  "カスタムGPT作成・共有",
                ]}
              />
            </div>
          </div>
        </section>

        {/* ── AI Tool Database ── */}
        <section className="section">
          <div className="container">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">AI Tool Database</span>
            </div>
            <h2 className="section-title">最新AIツール一覧</h2>

            <SearchBar tools={TOOLS} onFilter={setFilteredTools} />

            {filteredTools.length === 0 ? (
              <p style={{ textAlign: "center", color: "var(--color-text-muted)", padding: "3rem 0" }}>
                該当するツールが見つかりません。別のキーワードをお試しください。
              </p>
            ) : (
              <div className="tool-grid">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            )}

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link href="/tools" className="btn btn-outline">
                すべてのAIツールを見る →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Latest Guides ── */}
        <section className="section" style={{ background: "var(--color-surface)" }}>
          <div className="container">
            <div className="section-label">
              <div className="section-label-line" />
              <span className="section-label-text">Step-by-Step Guides</span>
            </div>
            <h2 className="section-title">ステップバイステップガイド</h2>

            <div className="guide-grid">
              {GUIDES.map((guide) => (
                <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                  <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
                    <div className="guide-card-meta">
                      <span>{guide.date}</span>
                      <span>·</span>
                      <span>⏱ {guide.readTime}</span>
                    </div>
                    <p className="guide-card-title">{guide.title}</p>
                    <p className="guide-card-excerpt">{guide.excerpt}</p>
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
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link href="/guides" className="btn btn-outline">
                すべてのガイドを見る →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
