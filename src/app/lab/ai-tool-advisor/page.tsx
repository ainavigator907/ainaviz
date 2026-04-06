"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// ─── Types ──────────────────────────────────────────────────────────────────
type UseCase = "writing" | "coding" | "research" | "image" | "automation";
type TechLevel = "nocode" | "mid" | "engineer";
type Budget = "free" | "low" | "high";
type TeamSize = "solo" | "team";

interface Answers {
  useCase: UseCase | null;
  techLevel: TechLevel | null;
  budget: Budget | null;
  teamSize: TeamSize | null;
}

interface Tool {
  id: string;
  name: string;
  description: string;
  price: string;
  highlight: string;
  affiliateUrl: string;
  affiliateLabel: string;
  tags: string[];
  isAffiliate?: boolean;
  isPaid?: boolean;
}

// ─── Tool Database ───────────────────────────────────────────────────────────
const TOOLS: Record<string, Tool> = {
  "claude-free": {
    id: "claude-free",
    name: "Claude (無料版)",
    description:
      "Anthropic製。無料でも文書作成・要約・長文処理の品質が高い。日本語対応も優秀で、ビジネス文書の下書きに向いている。",
    price: "無料",
    highlight: "無料でも高品質な日本語対応",
    affiliateUrl: "https://claude.ai",
    affiliateLabel: "Claudeを無料で試す →",
    tags: ["文書作成", "日本語対応", "無料"],
  },
  "claude-pro": {
    id: "claude-pro",
    name: "Claude Pro",
    description:
      "長文・複雑なタスクに圧倒的な強さ。議事録・稟議書・マニュアル作成をAIに任せたい人向け。ソラが実務で最も頼りにしているAI。",
    price: "月額約3,000円",
    highlight: "実務のビジネス文書・長文処理の最強ツール",
    affiliateUrl: "https://claude.ai/upgrade",
    affiliateLabel: "Claude Proを試す →",
    tags: ["文書作成", "コーディング", "業務効率化"],
    isAffiliate: true,
    isPaid: true,
  },
  "chatgpt-free": {
    id: "chatgpt-free",
    name: "ChatGPT (無料版)",
    description:
      "OpenAI製。GPT-4oをある程度無料で使える。Webブラウジング・画像認識など幅広い機能に触れながらAIを学ぶ入口として最適。",
    price: "無料（制限あり）",
    highlight: "AI入門として最も知名度が高い",
    affiliateUrl: "https://chat.openai.com",
    affiliateLabel: "ChatGPTを試す →",
    tags: ["汎用", "画像理解", "無料"],
  },
  "chatgpt-plus": {
    id: "chatgpt-plus",
    name: "ChatGPT Plus",
    description:
      "GPT-4oフル活用・画像生成(DALL-E)・Webブラウジング・Code Interpreterをすべて開放。オールラウンドに使いたい人の定番。",
    price: "月額約3,000円",
    highlight: "オールラウンドで使えるAI定番",
    affiliateUrl: "https://chat.openai.com",
    affiliateLabel: "ChatGPT Plusを試す →",
    tags: ["汎用", "画像生成", "データ分析"],
    isAffiliate: true,
    isPaid: true,
  },
  "github-copilot": {
    id: "github-copilot",
    name: "GitHub Copilot",
    description:
      "VSCode等に統合されるAIコーディングアシスタント。コード補完・レビュー・テスト自動生成でエンジニアの生産性が劇的に上がる。",
    price: "月額約1,300円",
    highlight: "コーディング速度を体感で2〜3倍に",
    affiliateUrl: "https://github.com/features/copilot",
    affiliateLabel: "Copilotを試す →",
    tags: ["コーディング", "IDE統合"],
    isAffiliate: true,
    isPaid: true,
  },
  "cursor": {
    id: "cursor",
    name: "Cursor",
    description:
      "AIファーストなコードエディタ。コードベース全体を理解した上でClaudeやGPT-4が補完・生成。複雑なリファクタリングも一発。",
    price: "無料〜月額約2,500円",
    highlight: "AIネイティブなコーディング環境",
    affiliateUrl: "https://cursor.sh",
    affiliateLabel: "Cursorを試す →",
    tags: ["コーディング", "エディタ"],
    isAffiliate: true,
  },
  "perplexity": {
    id: "perplexity",
    name: "Perplexity AI",
    description:
      "AIによるリアルタイム検索エンジン。ソース引用付きで最新情報を高速調査できる。競合分析・市場調査・事実確認に最適。",
    price: "無料（Pro版：月額約3,000円）",
    highlight: "調査・リサーチの速度を10倍に",
    affiliateUrl: "https://perplexity.ai",
    affiliateLabel: "Perplexityを試す →",
    tags: ["リサーチ", "情報収集", "検索"],
  },
  "notion-ai": {
    id: "notion-ai",
    name: "Notion AI",
    description:
      "Notionに統合されたAI。議事録・文書・タスク管理をAIで強化。チーム全体のナレッジをAIで自動整理・要約できる。",
    price: "月額約1,300円/人（Notionプランに追加）",
    highlight: "チームのドキュメント管理にAIを自然に統合",
    affiliateUrl: "https://notion.so/product/ai",
    affiliateLabel: "Notion AIを試す →",
    tags: ["チーム", "ドキュメント", "タスク管理"],
    isAffiliate: true,
    isPaid: true,
  },
  "midjourney": {
    id: "midjourney",
    name: "Midjourney",
    description:
      "画像生成AIのクオリティ最高峰。Discordで使うタイプで商業利用も対応。プレゼン資料・SNS素材・マーケ用画像を即生成。",
    price: "月額約1,400円〜",
    highlight: "商用クオリティの画像を即生成",
    affiliateUrl: "https://midjourney.com",
    affiliateLabel: "Midjourneyを試す →",
    tags: ["画像生成", "クリエイティブ"],
    isAffiliate: true,
    isPaid: true,
  },
  "make": {
    id: "make",
    name: "Make (Integromat)",
    description:
      "ノーコードの業務自動化ツール。1,000以上のアプリをつないでワークフローを自動化。プログラミング不要で「脱・手作業」が実現できる。",
    price: "無料〜月額約1,100円〜",
    highlight: "プログラミング不要で業務自動化",
    affiliateUrl: "https://www.make.com",
    affiliateLabel: "Makeを試す →",
    tags: ["自動化", "ノーコード", "ワークフロー"],
    isAffiliate: true,
  },
  "claude-api": {
    id: "claude-api",
    name: "Claude API",
    description:
      "自社システムにClaudeを直接組み込む。Haiku/Sonnet/Opusで用途・コストを最適化。社内ツールや自動化スクリプトへの統合に最適。",
    price: "従量課金（月数百円〜）",
    highlight: "社内ツールへのAI組み込みに最適",
    affiliateUrl: "https://console.anthropic.com",
    affiliateLabel: "Claude APIを始める →",
    tags: ["API", "開発者向け", "カスタマイズ"],
  },
  "openai-api": {
    id: "openai-api",
    name: "OpenAI API",
    description:
      "GPT-4o等を直接呼び出せるAPI。Assistants APIでエージェント構築、Fine-tuningで自社特化モデルも作れる。エコシステムが最も充実。",
    price: "従量課金",
    highlight: "豊富なエコシステムと実績",
    affiliateUrl: "https://platform.openai.com",
    affiliateLabel: "OpenAI APIを始める →",
    tags: ["API", "開発者向け"],
  },
};

// ─── Recommendation Logic ────────────────────────────────────────────────────
function getRecommendations(answers: Answers): string[] {
  const { useCase, techLevel, budget, teamSize } = answers;
  let results: string[] = [];

  if (useCase === "coding") {
    if (techLevel === "engineer") {
      if (budget === "free") results = ["cursor", "claude-free", "chatgpt-free"];
      else if (budget === "low") results = ["github-copilot", "cursor", "claude-pro"];
      else results = ["cursor", "github-copilot", "claude-pro"];
    } else if (techLevel === "mid") {
      results = ["github-copilot", "chatgpt-plus", "claude-pro"];
    } else {
      results = ["chatgpt-plus", "claude-pro"];
    }
  } else if (useCase === "image") {
    if (budget === "free") results = ["chatgpt-free", "claude-free"];
    else results = ["midjourney", "chatgpt-plus"];
  } else if (useCase === "research") {
    if (budget === "free") results = ["perplexity", "chatgpt-free", "claude-free"];
    else results = ["perplexity", "claude-pro", "chatgpt-plus"];
  } else if (useCase === "automation") {
    if (techLevel === "nocode") {
      results = ["make", "chatgpt-plus", "notion-ai"];
    } else if (techLevel === "engineer") {
      if (budget === "free") results = ["claude-api", "openai-api", "make"];
      else results = ["claude-api", "make", "openai-api"];
    } else {
      results = ["make", "claude-pro", "notion-ai"];
    }
  } else {
    // writing (default)
    if (budget === "free") {
      results = ["claude-free", "chatgpt-free", "perplexity"];
    } else if (teamSize === "team") {
      results = ["notion-ai", "claude-pro", "chatgpt-plus"];
    } else if (techLevel === "engineer") {
      results = ["claude-pro", "claude-api", "chatgpt-plus"];
    } else {
      results = ["claude-pro", "chatgpt-plus", "notion-ai"];
    }
  }

  return [...new Set(results)].slice(0, 3);
}

// ─── Quiz Data ───────────────────────────────────────────────────────────────
const STEPS = [
  {
    key: "useCase" as const,
    question: "主な用途を教えてください",
    subtext: "最も近いものを1つ選んでください",
    options: [
      { value: "writing", label: "文書作成・要約", icon: "📝", desc: "議事録・稟議書・メール・マニュアル" },
      { value: "coding", label: "コード生成・開発", icon: "💻", desc: "プログラミング・コードレビュー・デバッグ" },
      { value: "research", label: "調査・リサーチ", icon: "🔍", desc: "競合分析・情報収集・事実確認" },
      { value: "image", label: "画像・クリエイティブ", icon: "🎨", desc: "素材作成・デザイン・プレゼン用画像" },
      { value: "automation", label: "業務自動化", icon: "⚙️", desc: "ワークフロー・繰り返し作業の自動化" },
    ],
  },
  {
    key: "techLevel" as const,
    question: "あなたの技術レベルは？",
    subtext: "正直に選ぶほど精度が上がります",
    options: [
      { value: "nocode", label: "ノーコード派", icon: "🙋", desc: "コードは書かない・書けない" },
      { value: "mid", label: "多少の知識あり", icon: "🔧", desc: "簡単なスクリプトなら書ける" },
      { value: "engineer", label: "エンジニア", icon: "👨‍💻", desc: "APIを自分で叩ける・コード生産が主業務" },
    ],
  },
  {
    key: "budget" as const,
    question: "月の予算感は？",
    subtext: "AIツールへの月額投資の目安",
    options: [
      { value: "free", label: "無料のみ", icon: "🆓", desc: "まずは無料ツールで試したい" },
      { value: "low", label: "月額3,000円以下", icon: "💰", desc: "コスパを重視したい" },
      { value: "high", label: "月額3,000円以上もOK", icon: "💎", desc: "業務効率化なら投資できる" },
    ],
  },
  {
    key: "teamSize" as const,
    question: "個人利用 or チーム利用？",
    subtext: "利用規模によって最適なツールが変わります",
    options: [
      { value: "solo", label: "個人利用", icon: "👤", desc: "自分1人で使う" },
      { value: "team", label: "チーム・組織", icon: "👥", desc: "複数人で共有・展開したい" },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function AiToolAdvisorPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    useCase: null,
    techLevel: null,
    budget: null,
    teamSize: null,
  });
  const [done, setDone] = useState(false);

  const currentStep = STEPS[step];

  function handleSelect(value: string) {
    const key = currentStep.key;
    const updated = { ...answers, [key]: value as never };
    setAnswers(updated);

    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  function reset() {
    setStep(0);
    setAnswers({ useCase: null, techLevel: null, budget: null, teamSize: null });
    setDone(false);
  }

  const recommendations = done ? getRecommendations(answers) : [];

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section style={{ padding: "4rem 0 2.5rem", borderBottom: "1px solid var(--color-border)" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Link
                href="/lab"
                style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "0.35rem" }}
              >
                ← ラボに戻る
              </Link>
            </div>
            <div className="hero-eyebrow">
              <span>🤖</span>
              <span>Lab Tool · AIツール選定アドバイザー</span>
            </div>
            <h1 style={{ marginBottom: "0.75rem" }}>
              あなたに最適な<span className="gradient-text">AIツール</span>を診断
            </h1>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", maxWidth: "560px", lineHeight: 1.7 }}>
              4つの質問に答えるだけ。用途・予算・技術レベルから、今すぐ使えるAIツールを提案します。
            </p>
          </div>
        </section>

        {/* ── Quiz / Result ── */}
        <section style={{ padding: "3.5rem 0 5rem" }}>
          <div className="container">
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>

              {!done ? (
                <>
                  {/* Progress */}
                  <div style={{ marginBottom: "2.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                      <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontWeight: 600 }}>
                        STEP {step + 1} / {STEPS.length}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--color-primary-light)", fontWeight: 600 }}>
                        {Math.round(((step) / STEPS.length) * 100)}% 完了
                      </span>
                    </div>
                    <div style={{ height: "4px", background: "var(--color-surface-2)", borderRadius: "2px", overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${(step / STEPS.length) * 100}%`,
                          background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
                          borderRadius: "2px",
                          transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <div style={{ marginBottom: "2rem" }}>
                    <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)", marginBottom: "0.4rem" }}>
                      {currentStep.question}
                    </h2>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                      {currentStep.subtext}
                    </p>
                  </div>

                  {/* Options */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                    {currentStep.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleSelect(opt.value)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          padding: "1rem 1.25rem",
                          background: "var(--color-surface)",
                          border: "1.5px solid var(--color-border)",
                          borderRadius: "var(--radius-md)",
                          cursor: "pointer",
                          textAlign: "left",
                          color: "var(--color-text)",
                          fontFamily: "var(--font-sans)",
                          transition: "all 0.18s cubic-bezier(0.4,0,0.2,1)",
                          width: "100%",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(99 102 241 / 0.6)";
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(99 102 241 / 0.08)";
                          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border)";
                          (e.currentTarget as HTMLButtonElement).style.background = "var(--color-surface)";
                          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                        }}
                      >
                        <span style={{ fontSize: "1.75rem", flexShrink: 0, lineHeight: 1 }}>{opt.icon}</span>
                        <div>
                          <p style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.15rem" }}>{opt.label}</p>
                          <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>{opt.desc}</p>
                        </div>
                        <span style={{ marginLeft: "auto", color: "var(--color-text-muted)", fontSize: "1.1rem", flexShrink: 0 }}>→</span>
                      </button>
                    ))}
                  </div>

                  {/* Back */}
                  {step > 0 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      style={{
                        marginTop: "1.5rem",
                        background: "none",
                        border: "none",
                        color: "var(--color-text-muted)",
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        fontFamily: "var(--font-sans)",
                        padding: 0,
                      }}
                    >
                      ← 前の質問に戻る
                    </button>
                  )}
                </>
              ) : (
                <>
                  {/* Result Header */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, rgba(99 102 241 / 0.1), rgba(6 182 212 / 0.07))",
                      border: "1px solid rgba(99 102 241 / 0.3)",
                      borderRadius: "var(--radius-lg)",
                      padding: "2rem",
                      textAlign: "center",
                      marginBottom: "2.5rem",
                    }}
                  >
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🎯</div>
                    <h2 style={{ marginBottom: "0.5rem" }}>診断完了！あなたへのおすすめ</h2>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                      回答内容をもとに、今すぐ使えるツールを厳選しました
                    </p>
                  </div>

                  {/* Tool Cards */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                    {recommendations.map((id, idx) => {
                      const tool = TOOLS[id];
                      if (!tool) return null;
                      return (
                        <div
                          key={id}
                          className={tool.isPaid ? "affiliate-card" : "card"}
                          style={tool.isPaid ? {} : { padding: "1.5rem" }}
                        >
                          {/* Rank + affiliate badge */}
                          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                            <span
                              style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                background:
                                  idx === 0
                                    ? "linear-gradient(135deg, var(--color-accent), #f97316)"
                                    : "var(--color-surface-2)",
                                color: idx === 0 ? "#000" : "var(--color-text-muted)",
                                fontSize: "0.72rem",
                                fontWeight: 800,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                              }}
                            >
                              {idx + 1}
                            </span>
                            <h3 style={{ fontSize: "1.05rem", margin: 0 }}>{tool.name}</h3>
                            {tool.isAffiliate && (
                              <span
                                style={{
                                  marginLeft: "auto",
                                  fontSize: "0.62rem",
                                  color: "var(--color-text-muted)",
                                  border: "1px solid var(--color-border)",
                                  borderRadius: "4px",
                                  padding: "0.1rem 0.4rem",
                                  flexShrink: 0,
                                }}
                              >
                                PR
                              </span>
                            )}
                          </div>

                          {/* Highlight */}
                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              background: "rgba(6 182 212 / 0.12)",
                              border: "1px solid rgba(6 182 212 / 0.25)",
                              borderRadius: "999px",
                              padding: "0.2rem 0.7rem",
                              fontSize: "0.75rem",
                              color: "var(--color-secondary)",
                              fontWeight: 600,
                              marginBottom: "0.75rem",
                            }}
                          >
                            ✓ {tool.highlight}
                          </div>

                          {/* Description */}
                          <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "1rem" }}>
                            {tool.description}
                          </p>

                          {/* Footer row */}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                            {/* Tags + price */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                              <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                                {tool.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    style={{
                                      fontSize: "0.68rem",
                                      background: "rgba(99 102 241 / 0.1)",
                                      color: "var(--color-primary-light)",
                                      border: "1px solid rgba(99 102 241 / 0.2)",
                                      borderRadius: "4px",
                                      padding: "0.1rem 0.4rem",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontWeight: 600 }}>
                                💴 {tool.price}
                              </span>
                            </div>

                            {/* CTA */}
                            <a
                              href={tool.affiliateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={tool.isPaid ? "cta-btn" : "btn btn-outline"}
                              style={
                                tool.isPaid
                                  ? { display: "inline-block", textDecoration: "none", whiteSpace: "nowrap" }
                                  : { fontSize: "0.85rem", padding: "0.55rem 1rem", whiteSpace: "nowrap" }
                              }
                            >
                              {tool.affiliateLabel}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Disclaimer */}
                  <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "2rem", padding: "0.75rem 1rem", background: "var(--color-surface-2)", borderRadius: "var(--radius-sm)" }}>
                    ※ 「PR」マークのリンクはアフィリエイト広告を含みます。紹介料がソラの活動継続を支えています。
                    掲載ツールはすべてソラが実際に業務で使用・評価したものです。
                  </p>

                  {/* Actions */}
                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <button onClick={reset} className="btn btn-primary">
                      もう一度診断する
                    </button>
                    <Link href="/lab" className="btn btn-outline">
                      ラボに戻る
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
