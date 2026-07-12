import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { IconUser, IconShield, IconFlask, IconClipboard } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "AINaviz運営者・ソラのプロフィール。現役総務部長・1人DX担当として、実務で動くAI活用だけを発信しています。",
};

const PRINCIPLES = [
  {
    icon: IconShield,
    title: "実務で動くものしか発信しない",
    desc: "検証していないツールの紹介記事は書きません。自分の現場で使い、効果を確認したものだけを届けます。",
  },
  {
    icon: IconFlask,
    title: "作って確かめる",
    desc: "紹介するだけでなく、自分でツールを作って公開します。イレルダケをはじめ、現場の課題から生まれたツールを配布しています。",
  },
  {
    icon: IconClipboard,
    title: "過程も含めて公開する",
    desc: "成功事例だけでなく、失敗や試行錯誤も実録として残します。同じ道を歩む1人DX担当の時間を節約するために。",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section style={{ padding: "5rem 0 3rem", borderBottom: "1px solid var(--color-border)" }}>
          <div className="container" style={{ maxWidth: "760px" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                border: "1px solid rgba(99 102 241 / 0.4)",
                background: "var(--color-surface-2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-primary-light)",
                marginBottom: "1.5rem",
              }}
            >
              <IconUser size={32} />
            </div>
            <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.5rem" }}>
              ソラ
            </h1>
            <p style={{ color: "var(--color-primary-light)", fontWeight: 600, marginBottom: "1.5rem" }}>
              現役総務部長 / 1人DX担当
            </p>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 2, fontSize: "1.02rem" }}>
              現役の総務部長として、延べ3,000人規模のアプリ・サイト運営を担っています。
              専任のIT部門がない現場で、AIと自動化を武器にDXをひとりで進めてきました。
              GASの1行から始めて、いまはClaude Codeで業務アプリを作って配布するところまで来ています。
            </p>
          </div>
        </section>

        {/* ── なぜ総務部長がAIをナビゲートするのか ── */}
        <section className="section" style={{ background: "var(--color-surface)" }}>
          <div className="container" style={{ maxWidth: "760px" }}>
            <h2 style={{ marginBottom: "1.5rem", fontSize: "1.4rem" }}>
              なぜ総務部長がAIをナビゲートするのか
            </h2>
            <div style={{ color: "var(--color-text-muted)", lineHeight: 2, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                総務は会社の「何でも屋」です。契約書も、社内システムも、備品の稟議も、全部門の困りごとが集まってくる。
                だからこそ、AIをどこに入れれば現場が本当に楽になるかを、机上ではなく日々の業務で見てきました。
              </p>
              <p>
                このサイトで発信するのは、その現場で検証済みのことだけです。
                「すごいAIツールが出た」ではなく、「この業務がこう変わった」を届けます。
              </p>
              <p>
                2年前の私は、ChatGPTに1行ずつコードを聞きながら、50回やり取りしてやっと1つの機能を作っていました。
                いまは同じことが数回の対話でできます。この変化の大きさを、これから始める人に一番伝えたいと思っています。
              </p>
            </div>
          </div>
        </section>

        {/* ── ポリシー ── */}
        <section className="section">
          <div className="container" style={{ maxWidth: "980px" }}>
            <h2 style={{ marginBottom: "2rem", fontSize: "1.4rem", textAlign: "center" }}>
              3つのポリシー
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {PRINCIPLES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card" style={{ padding: "1.75rem" }}>
                  <span style={{ color: "var(--color-primary-light)", display: "inline-block", marginBottom: "0.85rem" }}>
                    <Icon size={24} />
                  </span>
                  <h3 style={{ fontSize: "1rem", marginBottom: "0.6rem" }}>{title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 実績 ── */}
        <section className="section" style={{ background: "var(--color-surface)" }}>
          <div className="container" style={{ maxWidth: "760px" }}>
            <h2 style={{ marginBottom: "1.5rem", fontSize: "1.4rem" }}>これまでにやってきたこと</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                "延べ3,000人規模の社内アプリ・サイトの構築と運用",
                "2,000人が毎日使う業務アプリを開発経験ゼロから構築",
                "GAS × Python × AI による定型業務の自動化（議事録・手順書・データ整理）",
                "講座動画合成アプリ「イレルダケ」を開発・一般公開",
                "本サイトをWordPressからNext.jsへ移行（設計・実装・運用まで1人で）",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                    fontSize: "0.95rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.8,
                  }}
                >
                  <span style={{ color: "var(--color-secondary)", flexShrink: 0, marginTop: "0.3rem" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section">
          <div className="container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>まずはここから</h2>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem", maxWidth: "520px", margin: "0 auto 2rem" }}>
              現場で使える自作ツールと、検証済みの実録記事を公開しています。
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/lab" className="btn btn-primary">
                ツールを見る
              </Link>
              <Link href="/articles" className="btn btn-outline">
                記事を読む
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
