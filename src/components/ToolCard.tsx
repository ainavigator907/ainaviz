import Link from "next/link";
import type { ToolData } from "@/components/SearchBar";

interface ToolCardProps {
  tool: ToolData;
}

function SpeedReview({ score }: { score: number }) {
  return (
    <div className="speed-review">
      <span>速度評価</span>
      <div className="speed-bar">
        <div className="speed-fill" style={{ width: `${(score / 5) * 100}%` }} />
      </div>
      <span style={{ flexShrink: 0 }}>{score}/5</span>
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="stars" aria-label={`${count}点満点5点`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ opacity: i < count ? 1 : 0.2, fontSize: "0.8rem" }}>★</span>
      ))}
    </div>
  );
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="card" style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
        <div>
          <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
            {tool.isAffiliate && <span className="badge badge-affiliate">💰 PR</span>}
            {tool.isNew && <span className="badge badge-new">✨ NEW</span>}
            <span className="badge badge-free">{tool.category}</span>
          </div>
          <h3 style={{ fontSize: "1rem", fontWeight: 700 }}>{tool.name}</h3>
        </div>
        <span
          style={{
            flexShrink: 0,
            fontSize: "0.75rem",
            color: "var(--color-text-muted)",
            background: "var(--color-surface-2)",
            padding: "0.2rem 0.6rem",
            borderRadius: "var(--radius-sm)",
          }}
        >
          {tool.pricingLabel}
        </span>
      </div>

      {/* Tagline */}
      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
        {tool.tagline}
      </p>

      {/* Stars */}
      <Stars count={tool.rating} />

      {/* Speed Review */}
      <SpeedReview score={tool.speedScore} />

      {/* Tags */}
      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
        {tool.tags.map((tag) => (
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

      {/* CTA */}
      {tool.affiliateUrl && (
        <Link
          href={tool.affiliateUrl}
          target="_blank"
          rel={tool.isAffiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
          className="btn btn-primary"
          style={{ marginTop: "auto", justifyContent: "center", fontSize: "0.85rem" }}
        >
          公式サイトを見る →
        </Link>
      )}
    </div>
  );
}
