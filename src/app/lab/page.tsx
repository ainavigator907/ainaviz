import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { IconFlask, IconWrench, IconVideo, IconCompass } from "@/components/Icons";

export const metadata: Metadata = {
  title: "ツール",
  description:
    "現場の課題から生まれた自作ツール置き場。実務で検証済みのアプリを無料・体験版で公開しています。",
};

const LIVE_TOOLS = [
  {
    id: "irerudake",
    name: "イレルダケ",
    description:
      "講師映像とスライドを読み込んで、区間ごとに見せ方を指定するだけで講座動画が完成するWindowsアプリ。PiP合成・フェード・4K書き出し対応。",
    aiUsed: ["Claude Code", "Electron", "FFmpeg"],
    href: "/lab/irerudake",
    badge: "無料体験版あり",
    icon: IconVideo,
  },
  {
    id: "ai-tool-advisor",
    name: "AIツール選定アドバイザー",
    description:
      "4つの質問に答えるだけで、用途・予算・技術レベルにあったAIツールを診断。導入の最初の一歩に。",
    aiUsed: ["診断ロジック", "Next.js"],
    href: "/lab/ai-tool-advisor",
    badge: "Web版・無料",
    icon: IconCompass,
  },
];

const UPCOMING_TOOLS = [
  {
    id: "kouza-recorder",
    name: "講座動画録画ツール",
    description:
      "スライドを映しながら講師の映像と音声をそのまま収録できる録画ツール。撮影から完成まで、イレルダケとつなげて講座動画づくりを一気通貫にします。",
    aiUsed: ["Claude Code", "Electron"],
    background:
      "イレルダケの利用者から「そもそも撮影の段階でつまずく」という声を受けて開発中。録画から合成までを同じ流れで完結させることが目標です。",
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
            <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
              ツール
            </h1>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", maxWidth: "620px", lineHeight: 1.8 }}>
              現場の「あったら便利」を形にした自作ツール置き場。
              すべて実務の課題から生まれ、実際に使いながら育てています。
            </p>
          </div>
        </section>

        {/* ── 公開中ツール ── */}
        <section style={{ padding: "3rem 0 0" }}>
          <div className="container">
            <div className="section-label" style={{ marginBottom: "1.25rem" }}>
              <div className="section-label-line" />
              <span className="section-label-text" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <IconFlask size={14} /> 公開中
              </span>
            </div>
            <div className="tool-grid" style={{ marginBottom: "4rem" }}>
              {LIVE_TOOLS.map((tool) => (
                <Link key={tool.id} href={tool.href} style={{ display: "block" }}>
                  <div
                    className="card"
                    style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.85rem", height: "100%" }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
                      <span style={{ color: "var(--color-primary-light)" }}>
                        <tool.icon size={26} />
                      </span>
                      <span
                        style={{
                          flexShrink: 0,
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          background: "rgba(16 185 129 / 0.15)",
                          color: "var(--color-success)",
                          border: "1px solid rgba(16 185 129 / 0.3)",
                          borderRadius: "999px",
                          padding: "0.2rem 0.6rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tool.badge}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.05rem", lineHeight: 1.4, margin: 0 }}>{tool.name}</h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                      {tool.description}
                    </p>
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
                    <span style={{ fontSize: "0.82rem", color: "var(--color-primary-light)", fontWeight: 600 }}>
                      ツールを見る →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 開発中 ── */}
        <section style={{ padding: "0 0 4rem" }}>
          <div className="container">
            <div className="section-label" style={{ marginBottom: "1.25rem" }}>
              <div className="section-label-line" />
              <span className="section-label-text" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <IconWrench size={14} /> 開発中
              </span>
            </div>

            <div className="tool-grid">
              {UPCOMING_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className="card"
                  style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
                    <h3 style={{ fontSize: "1.05rem", lineHeight: 1.4, margin: 0 }}>{tool.name}</h3>
                    <span
                      style={{
                        flexShrink: 0,
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        background: "rgba(99 102 241 / 0.15)",
                        color: "var(--color-primary-light)",
                        border: "1px solid rgba(99 102 241 / 0.3)",
                        borderRadius: "999px",
                        padding: "0.2rem 0.6rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      開発中
                    </span>
                  </div>

                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                    {tool.description}
                  </p>

                  <div
                    style={{
                      background: "var(--color-surface-2)",
                      borderRadius: "var(--radius-sm)",
                      padding: "0.75rem 1rem",
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.7,
                      borderLeft: "3px solid var(--color-primary)",
                    }}
                  >
                    <strong style={{ color: "var(--color-text)", display: "block", marginBottom: "0.25rem" }}>
                      開発の背景
                    </strong>
                    {tool.background}
                  </div>

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
