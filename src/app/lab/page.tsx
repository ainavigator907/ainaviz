import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ラボ",
  description: "ソラが開発中の自作ツール・ゲームの展示場。AI×実務で生まれたプロダクトを公開予定。",
};

const UPCOMING_TOOLS = [
  {
    id: "meeting-minutes",
    name: "議事録AI自動生成",
    description:
      "Whisper で音声を文字起こしし、Claude が要約・アクションアイテムを自動抽出。5分の会議録音を30秒で議事録化。",
    aiUsed: ["Whisper", "Claude"],
    background:
      "社内会議の議事録作成に毎週数時間を費やしていた実体験から着想。",
  },
  {
    id: "approval-doc-gen",
    name: "稟議書ジェネレーター",
    description:
      "製品URLと用途を入力するだけで、上司が承認しやすいスペック比較表・費用対効果付きの稟議書を自動生成。",
    aiUsed: ["Claude", "Next.js"],
    background:
      "「なぜこれが必要か」を論理立てて書く稟議書は時間がかかる。フォーマット化とAI生成で工数を90%削減することが目標。",
  },
  {
    id: "ai-cost-monitor",
    name: "AI利用コストモニター",
    description:
      "Claude / GPT / Gemini の API利用コストをリアルタイム集計。`max_history_tokens` 設定との連動でコスト爆増を防ぐ。",
    aiUsed: ["Claude API", "OpenAI API", "Next.js"],
    background:
      "Claude Codeを使い始めて月のAPI費用が跳ね上がった実体験から。コスト可視化と自動アラートで適正利用を維持したい。",
  },
  {
    id: "manual-generator",
    name: "社内マニュアル自動生成",
    description:
      "業務フローを箇条書きで入力すると、Notion互換のMarkdown形式で誰でも読める手順書を自動生成。",
    aiUsed: ["Claude", "Notion API"],
    background:
      "属人化した業務ノウハウを誰でもアクセスできる形に変換したい。口頭説明をAIがマニュアル化するフローを構築中。",
  },
];

export default function LabPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section style={{ padding: "5rem 0 3rem", borderBottom: "1px solid var(--color-border)" }}>
          <div className="container">
            <div className="hero-eyebrow">
              <span>🔬</span>
              <span>Lab · 実験場</span>
            </div>
            <h1 style={{ marginBottom: "1rem" }}>
              <span className="gradient-text">ソラの実験場</span>
            </h1>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", maxWidth: "600px", lineHeight: 1.7 }}>
              実務で「あったら便利」を形にしたツール置き場。
              開発中のものも含め、背景とコンセプトを公開しています。
            </p>
          </div>
        </section>

        {/* ── 準備中バナー ── */}
        <section style={{ padding: "3rem 0" }}>
          <div className="container">
            <div
              style={{
                background: "linear-gradient(135deg, rgba(99 102 241 / 0.08), rgba(6 182 212 / 0.06))",
                border: "1px solid rgba(99 102 241 / 0.3)",
                borderRadius: "var(--radius-lg)",
                padding: "2.5rem",
                textAlign: "center",
                marginBottom: "3rem",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚧</div>
              <h2 style={{ marginBottom: "0.75rem", fontSize: "1.5rem" }}>現在、開発中です</h2>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto 1.5rem" }}>
                使えるもの(公開できる段階になったもの)から順次リリース予定です。
              </p>
              <Link href="/case-studies" className="btn btn-outline">
                開発背景の実録記事を読む →
              </Link>
            </div>

            {/* Tool Cards */}
            <div className="tool-grid">
              {UPCOMING_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className="card"
                  style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}
                >
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
                    <h3 style={{ fontSize: "1rem", lineHeight: 1.4 }}>{tool.name}</h3>
                    <span
                      style={{
                        flexShrink: 0,
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        background: "rgba(99 102 241 / 0.15)",
                        color: "var(--color-primary-light)",
                        border: "1px solid rgba(99 102 241 / 0.3)",
                        borderRadius: "999px",
                        padding: "0.2rem 0.6rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      準備中
                    </span>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                    {tool.description}
                  </p>

                  {/* Background */}
                  <div
                    style={{
                      background: "var(--color-surface-2)",
                      borderRadius: "var(--radius-sm)",
                      padding: "0.75rem 1rem",
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.6,
                      borderLeft: "3px solid var(--color-primary)",
                    }}
                  >
                    <strong style={{ color: "var(--color-text)", display: "block", marginBottom: "0.25rem" }}>
                      開発の背景
                    </strong>
                    {tool.background}
                  </div>

                  {/* AI Tags */}
                  <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginTop: "auto" }}>
                    {tool.aiUsed.map((ai) => (
                      <span
                        key={ai}
                        style={{
                          fontSize: "0.68rem",
                          background: "rgba(6 182 212 / 0.1)",
                          color: "var(--color-secondary)",
                          border: "1px solid rgba(6 182 212 / 0.25)",
                          borderRadius: "4px",
                          padding: "0.12rem 0.45rem",
                          fontWeight: 600,
                        }}
                      >
                        {ai}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
