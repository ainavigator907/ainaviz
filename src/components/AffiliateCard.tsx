import Link from "next/link";

export interface AffiliateCardProps {
  /** Product / SaaS name */
  name: string;
  /** Short pitch (1–2 sentences) */
  tagline: string;
  /** What makes it special for Japanese pros */
  highlight: string;
  /** Pricing hint e.g. "$20/月〜" */
  price: string;
  /** Star rating 1–5 */
  rating?: number;
  /** Affiliate destination URL */
  affiliateUrl: string;
  /** Optional badge label override */
  badgeLabel?: string;
  /** CTA button text */
  ctaText?: string;
  /** List of feature bullets (max 4) */
  features?: string[];
}

function Stars({ count }: { count: number }) {
  return (
    <div className="stars" aria-label={`${count}点満点5点`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ opacity: i < count ? 1 : 0.2 }}>★</span>
      ))}
    </div>
  );
}

/**
 * AffiliateCard — reusable component for high-ticket SaaS affiliate promotions.
 *
 * Usage:
 * ```tsx
 * <AffiliateCard
 *   name="ChatGPT Plus"
 *   tagline="OpenAIの最上位プランで生産性を最大化。"
 *   highlight="GPT-5.4 / DALL·E 3 / Advanced Data Analysis が使い放題"
 *   price="$20/月"
 *   rating={5}
 *   affiliateUrl="https://openai.com/chatgpt"
 *   features={["GPT-5.4 優先アクセス", "画像生成 (DALL·E 3)", "プラグイン対応", "API割引"]}
 * />
 * ```
 */
export default function AffiliateCard({
  name,
  tagline,
  highlight,
  price,
  rating = 5,
  affiliateUrl,
  badgeLabel = "アフィリエイト広告",
  ctaText = "今すぐ試す（公式サイト）",
  features = [],
}: AffiliateCardProps) {
  return (
    <div className="affiliate-card">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem" }}>
        <div>
          <span className="badge badge-affiliate" style={{ marginBottom: "0.5rem" }}>
            💰 {badgeLabel}
          </span>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800 }}>{name}</h3>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>料金</p>
          <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-accent)" }}>{price}</p>
        </div>
      </div>

      {/* Rating */}
      <Stars count={rating} />

      {/* Tagline */}
      <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{tagline}</p>

      {/* Highlight box */}
      <div
        style={{
          background: "rgba(245,158,11,0.08)",
          border: "1px solid rgba(245,158,11,0.2)",
          borderRadius: "var(--radius-sm)",
          padding: "0.75rem 1rem",
          fontSize: "0.85rem",
        }}
      >
        <span style={{ fontWeight: 600, color: "var(--color-accent)" }}>✦ ポイント: </span>
        {highlight}
      </div>

      {/* Feature list */}
      {features.length > 0 && (
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {features.slice(0, 4).map((f) => (
            <li key={f} style={{ fontSize: "0.85rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <span style={{ color: "var(--color-success)" }}>✓</span>
              <span style={{ color: "var(--color-text-muted)" }}>{f}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <Link href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="cta-btn">
        {ctaText} ↗
      </Link>

      <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", textAlign: "center" }}>
        ※ このリンクはアフィリエイトリンクです
      </p>
    </div>
  );
}
