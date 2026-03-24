import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-eyebrow">
          <span>🌐</span> For Japanese Business Professionals
        </p>
        <h1 className="hero-title">
          海外AIの秘密を、<br />
          <span className="gradient-text">日本のプロへ解き明かす。</span>
        </h1>
        <p className="hero-subtitle">
          Unlocking Overseas AI Secrets for Japanese Professionals.
          毎週更新のAIツールレビュー・ステップバイステップガイドで、
          あなたのビジネスを次のレベルへ。
        </p>
        <div className="hero-actions">
          <Link href="/tools" className="btn btn-primary">
            🔍 AIツールを探す
          </Link>
          <Link href="/guides" className="btn btn-outline">
            📖 使い方ガイドを読む
          </Link>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            marginTop: "3.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "50+", label: "AIツール掲載" },
            { value: "毎週", label: "新着レビュー更新" },
            { value: "日本語", label: "完全対応ガイド" },
          ].map((stat) => (
            <div key={stat.label}>
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
                {stat.value}
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "0.2rem" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
