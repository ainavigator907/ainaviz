import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-eyebrow">
          <span>🌐</span> 日本のビジネスパーソンのためのAIガイド
        </p>
        <h1 className="hero-title">
          海外の最新AIツールを、<br />
          <span className="gradient-text">あなたのビジネスの即戦力に。</span>
        </h1>
        <p className="hero-subtitle">
          生産性を劇的に高める最先端AIの活用法を、わかりやすい日本語で徹底解説。
          独自の検証に基づくレビューと実践的なガイドで、日々の業務を次のレベルへ。
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
