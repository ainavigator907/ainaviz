import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AffiliateCard from "@/components/AffiliateCard";
import ToolCard, { } from "@/components/ToolCard";
import type { ToolData } from "@/components/SearchBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIツール一覧",
  description:
    "文章生成・画像生成・コーディング・動画生成など、海外発の最新AIツールを日本語で徹底レビュー。",
};

const ALL_TOOLS: ToolData[] = [
  {
    id: "chatgpt",
    name: "ChatGPT Plus",
    tagline: "GPT-5.4で文章・コード・分析を高速こなす。ビジネスの万能AIアシスタント。",
    category: "文章生成",
    pricingLabel: "$20/月",
    speedScore: 5,
    rating: 5,
    isAffiliate: true,
    isNew: false,
    affiliateUrl: "https://openai.com/chatgpt",
    tags: ["GPT-5.4", "文章生成", "コード", "API"],
  },
  {
    id: "claude",
    name: "Claude Sonnet 4.6",
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
    id: "gemini",
    name: "Gemini Advanced",
    tagline: "Googleのマルチモーダルモデル。GmailやDocsと連携してワークフローを自動化。",
    category: "文章生成",
    pricingLabel: "¥2,900/月",
    speedScore: 4,
    rating: 4,
    isAffiliate: false,
    isNew: false,
    affiliateUrl: "https://gemini.google.com",
    tags: ["Google", "マルチモーダル", "Workspace"],
  },
  {
    id: "midjourney",
    name: "Midjourney v7",
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
    id: "stable-diffusion",
    name: "Stable Diffusion (SDXL)",
    tagline: "ローカル動作・商用無料のオープンソース画像生成AI。カスタマイズ自由度No.1。",
    category: "画像生成",
    pricingLabel: "無料（オープンソース）",
    speedScore: 3,
    rating: 4,
    isAffiliate: false,
    isNew: false,
    affiliateUrl: "https://stability.ai",
    tags: ["画像生成", "OSS", "ローカル"],
  },
  {
    id: "cursor",
    name: "Cursor",
    tagline: "AI搭載コードエディタ。Copilotより速く、コンテキストが深い。",
    category: "コーディング",
    pricingLabel: "無料プランあり",
    speedScore: 5,
    rating: 5,
    isAffiliate: false,
    isNew: true,
    affiliateUrl: "https://cursor.com",
    tags: ["コーディング", "VSCode", "AI補完"],
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    tagline: "GitHubと完全統合のAIコーディング支援。チームでの利用に最適。",
    category: "コーディング",
    pricingLabel: "$10/月",
    speedScore: 4,
    rating: 4,
    isAffiliate: true,
    isNew: false,
    affiliateUrl: "https://github.com/features/copilot",
    tags: ["コーディング", "GitHub", "チーム"],
  },
  {
    id: "runway",
    name: "Runway Gen-4.5",
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
  {
    id: "perplexity",
    name: "Perplexity AI",
    tagline: "AI検索エンジン。最新情報を引用付きで即回答。リサーチ時間を80%短縮。",
    category: "分析",
    pricingLabel: "無料プランあり",
    speedScore: 5,
    rating: 5,
    isAffiliate: false,
    isNew: true,
    affiliateUrl: "https://perplexity.ai",
    tags: ["検索", "リサーチ", "引用"],
  },
  {
    id: "antigravity",
    name: "Antigravity",
    tagline: "最先端の自律型AIコーディングエージェント。エンジニアの作業を劇的に自動化。",
    category: "コーディング",
    pricingLabel: "完全無料",
    speedScore: 5,
    rating: 5,
    isAffiliate: false,
    isNew: true,
    affiliateUrl: "https://antigravity.google",
    tags: ["コーディング", "エージェント", "自動化"],
  },
  {
    id: "canva",
    name: "Canva Pro",
    tagline: "AI『Magic Studio』で、デザイン未経験者でもプロ並みの資料・SNS画像を即作成。",
    category: "デザイン",
    pricingLabel: "無料プランあり",
    speedScore: 5,
    rating: 5,
    isAffiliate: true,
    isNew: false,
    affiliateUrl: "https://canva.com",
    tags: ["デザイン", "画像生成", "プレゼン"],
  },
];

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
          {/* Page header */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="section-label" style={{ marginBottom: "0.75rem" }}>
              <div className="section-label-line" />
              <span className="section-label-text">AI Tool Database</span>
            </div>
            <h1 style={{ marginBottom: "0.75rem" }}>
              最新<span className="gradient-text">AIツール</span>一覧
            </h1>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "560px" }}>
              海外発の最新AIツールを日本語でレビュー。カテゴリ・価格・速度評価付き。
            </p>
          </div>

          {/* Featured Affiliate */}
          <div style={{ marginBottom: "3rem" }}>
            <AffiliateCard
              name="GitHub Copilot for Business"
              tagline="チーム全員のコーディング速度を平均55%向上。エンタープライズ向けセキュリティも万全。"
              highlight="コードレビュー自動化・脆弱性検知・知的財産保護フィルターが標準搭載。"
              price="$19/人/月"
              rating={5}
              affiliateUrl="https://github.com/features/copilot/business"
              ctaText="ビジネスプランを見る（公式）"
              features={[
                "55%のコーディング速度向上（GitHub調査）",
                "エンタープライズセキュリティ対応",
                "脆弱性フィルタリング機能",
                "組織管理・監査ログ",
              ]}
            />
          </div>

          {/* Tool grid — static (client search handled on homepage; full list here) */}
          <div className="tool-grid">
            {ALL_TOOLS.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
              掲載希望ツールは{" "}
              <Link href="mailto:contact@ainaviz.com" style={{ color: "var(--color-primary-light)" }}>
                contact@ainaviz.com
              </Link>{" "}
              までご連絡ください。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
