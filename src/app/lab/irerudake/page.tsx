import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import DownloadModal from "./DownloadModal";

export const metadata: Metadata = {
  title: "イレルダケ ダウンロード | ソラの秘密基地",
  description:
    "講師映像とPDF・画像スライドを読み込んで、どの時間帯に何を映すかをクリップで設定するだけ。PiP合成・フェード・4K書き出し対応のWindowsアプリ「イレルダケ」。体験版無料配布中。",
};

const DOWNLOAD_URL = "https://drive.google.com/file/d/11lGVZN5_BI43Ozti1b5nzNm0ekFlz3Oe/view?usp=drive_link";
const BUG_REPORT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSemVwnKU_FMdi7Q7VehwLlojhmXzaOfzRShZIrsWlc5llSAOw/viewform?usp=publish-editor";

export default function IrerudakePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section style={{ padding: "5rem 0 4rem", borderBottom: "1px solid var(--color-border)" }}>
          <div className="container">
            <div className="hero-eyebrow">
              <span>🎬</span>
              <span>自作Windowsアプリ · ver 1.5.0 · ダウンロード</span>
            </div>
            <h1 style={{ marginBottom: "1rem" }}>
              <span className="gradient-text">イレルダケ</span>
            </h1>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1.15rem", maxWidth: "640px", lineHeight: 1.8, marginBottom: "0.75rem" }}>
              講師映像と PDF・画像スライドを読み込んで、<br />
              「どの時間帯に何を映すか」をクリップで設定するだけ。
            </p>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", maxWidth: "640px", lineHeight: 1.8, marginBottom: "2rem" }}>
              PiP合成・フェード・4K書き出しに対応した講座動画が、<br />
              動画編集の専門知識ゼロで完成します。
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {["Claude Code", "Electron", "FFmpeg", "React"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.72rem",
                    background: "rgba(6 182 212 / 0.1)",
                    color: "var(--color-secondary)",
                    border: "1px solid rgba(6 182 212 / 0.25)",
                    borderRadius: "4px",
                    padding: "0.2rem 0.6rem",
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── YouTube ── */}
        <section className="section" style={{ background: "var(--color-surface)" }}>
          <div className="container" style={{ maxWidth: "860px" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              <div className="section-label-line" />
              <span className="section-label-text">▶ 動作デモ</span>
            </div>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/Kg49c2SFi44"
                title="イレルダケ 動作デモ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </div>
          </div>
        </section>

        {/* ── 4 Steps ── */}
        <section className="section">
          <div className="container" style={{ maxWidth: "860px" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              <div className="section-label-line" />
              <span className="section-label-text">🚀 たった4ステップで完成</span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  step: "1",
                  icon: "🎥",
                  title: "講師映像を読み込む",
                  desc: "MP4・MOV・AVIなど主要形式に対応。ドラッグ＆ドロップまたはクリックで選択。",
                },
                {
                  step: "2",
                  icon: "📄",
                  title: "スライドを読み込む",
                  desc: "PDFを選ぶと各ページが自動で画像に変換。PNG・JPGなどの画像も複数まとめて追加可。",
                },
                {
                  step: "3",
                  icon: "⏱",
                  title: "クリップを設定する",
                  desc: "開始〜終了時刻と表示モードを指定するだけ。プレビューでリアルタイムに確認できます。",
                },
                {
                  step: "4",
                  icon: "✅",
                  title: "MP4として書き出す",
                  desc: "1080p・1440p・4Kから選択して書き出し（30fps固定）。進捗バーで完了まで確認できます。",
                },
              ].map(({ step, icon, title, desc }) => (
                <div
                  key={step}
                  className="card"
                  style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", position: "relative" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      width: "1.5rem",
                      height: "1.5rem",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {step}
                  </span>
                  <span style={{ fontSize: "1.75rem", lineHeight: 1 }}>{icon}</span>
                  <h3 style={{ fontSize: "0.95rem", marginBottom: 0, paddingRight: "2rem" }}>{title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="section" style={{ background: "var(--color-surface)" }}>
          <div className="container" style={{ maxWidth: "860px" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              <div className="section-label-line" />
              <span className="section-label-text">✨ 主な機能</span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  icon: "🎬",
                  title: "3つの表示モード",
                  desc: "①講師映像のみ ②スライド全画面＋講師PiP（ワイプ） ③スライド全画面＋講師音声のみ — 場面に合わせて使い分け可能。",
                },
                {
                  icon: "📁",
                  title: "豊富なファイル形式に対応",
                  desc: "動画はMP4・MOV・AVI・MKVなど13形式対応。スライドはPNG・JPG等の画像またはPDF（自動変換）。スマホ撮影動画もそのまま使えます。",
                },
                {
                  icon: "🔲",
                  title: "PiP（ワイプ）を細かく調整",
                  desc: "講師映像の配置（4隅）・サイズ（15〜50%）・形状（四角／円形）・枠線・影の有無を設定可能。",
                },
                {
                  icon: "✂️",
                  title: "クリップ間のフェード効果",
                  desc: "カット（即時切り替え）またはクロスフェード（0.1〜2.0秒）を選択。フェードはスライドに適用され、講師映像は途切れずに流れます。",
                },
                {
                  icon: "🏷️",
                  title: "ロゴ画像を重ねられる",
                  desc: "会社ロゴや番組ロゴを最大4枚まで追加。縦・横位置とサイズを個別に調整可能。透過PNGに対応。",
                },
                {
                  icon: "💾",
                  title: "プロジェクト保存・再開",
                  desc: "クリップ設定をJSONファイルとして保存し、後から再開できます。ファイルパスをもとに素材を自動で再読み込み。",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="card"
                  style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}
                >
                  <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>{icon}</span>
                  <h3 style={{ fontSize: "1rem", marginBottom: 0 }}>{title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="section">
          <div className="container" style={{ maxWidth: "860px" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              <div className="section-label-line" />
              <span className="section-label-text">💴 プランと価格</span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {/* Trial Plan */}
              <div
                className="card"
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  border: "1px solid rgba(16 185 129 / 0.4)",
                  background: "rgba(16 185 129 / 0.04)",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      background: "rgba(16 185 129 / 0.15)",
                      color: "var(--color-success)",
                      border: "1px solid rgba(16 185 129 / 0.3)",
                      borderRadius: "999px",
                      padding: "0.2rem 0.7rem",
                    }}
                  >
                    体験版 · 無料
                  </span>
                </div>
                <div>
                  <p style={{ fontSize: "2rem", fontWeight: 800, margin: 0 }}>¥0</p>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", margin: "0.25rem 0 0" }}>
                    無料でダウンロード
                  </p>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    "✅ 全機能を試せる",
                    "✅ Windows 11 対応",
                    "⏱ 書き出しは15分まで",
                    "💧 書き出し動画にウォーターマーク付き",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto" }}>
                  <DownloadModal downloadUrl={DOWNLOAD_URL} />
                </div>
              </div>

              {/* Full Plan */}
              <div
                className="card"
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  border: "1px solid rgba(99 102 241 / 0.4)",
                  background: "linear-gradient(135deg, rgba(99 102 241 / 0.06), rgba(6 182 212 / 0.04))",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      background: "rgba(99 102 241 / 0.15)",
                      color: "var(--color-primary-light)",
                      border: "1px solid rgba(99 102 241 / 0.3)",
                      borderRadius: "999px",
                      padding: "0.2rem 0.7rem",
                    }}
                  >
                    フル版
                  </span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      background: "rgba(245 158 11 / 0.15)",
                      color: "var(--color-accent)",
                      border: "1px solid rgba(245 158 11 / 0.3)",
                      borderRadius: "999px",
                      padding: "0.2rem 0.7rem",
                    }}
                  >
                    🎁 先着10名 特別価格
                  </span>
                </div>
                <div>
                  <p style={{ margin: 0 }}>
                    <span style={{ fontSize: "2rem", fontWeight: 800 }}>¥1,980</span>
                    <span
                      style={{
                        fontSize: "1rem",
                        color: "var(--color-text-muted)",
                        textDecoration: "line-through",
                        marginLeft: "0.5rem",
                      }}
                    >
                      ¥2,980
                    </span>
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", margin: "0.25rem 0 0" }}>
                    先着10名様限定価格（11名目以降は通常価格）
                  </p>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    "✅ 書き出し時間制限なし",
                    "✅ ウォーターマークなし",
                    "✅ 今後の機能追加も対象",
                    "✅ Windows 11 対応",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    background: "rgba(99 102 241 / 0.1)",
                    border: "1px solid rgba(99 102 241 / 0.25)",
                    borderRadius: "var(--radius-sm)",
                    padding: "1rem",
                    textAlign: "center",
                    marginTop: "auto",
                  }}
                >
                  <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-primary-light)", margin: "0 0 0.25rem" }}>
                    近日販売予定
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", margin: 0 }}>
                    決済システムの審査が通り次第、購入できるようになります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── System Requirements ── */}
        <section className="section" style={{ background: "var(--color-surface)" }}>
          <div className="container" style={{ maxWidth: "860px" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              <div className="section-label-line" />
              <span className="section-label-text">💻 動作環境・推奨スペック</span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  label: "OS",
                  value: "Windows 11（64bit）",
                  note: "✅ 動作確認済み\n⚠️ Windows 10 は動作未確認\n❌ Mac / Linux 非対応",
                },
                {
                  label: "CPU",
                  value: "Core i5 / Ryzen 5 以上",
                  note: "FFmpeg による動画処理を行うため、マルチコアの比較的新しい世代のCPUを推奨します。",
                },
                {
                  label: "メモリ（RAM）",
                  value: "8GB 以上（16GB 推奨）",
                  note: "高解像度動画を扱う場合や長時間の処理では 16GB 以上あると快適に動作します。",
                },
                {
                  label: "ストレージ",
                  value: "空き容量 5GB 以上",
                  note: "アプリ本体（約500MB）＋素材・書き出し動画のための作業領域として余裕のある空き容量を確保してください。",
                },
                {
                  label: "GPU",
                  value: "特に必須ではなし",
                  note: "ソフトウェアエンコードで動作するため、専用グラフィックカードは不要です。内蔵グラフィックスで動作します。",
                },
                {
                  label: "ディスプレイ",
                  value: "1280×720 以上",
                  note: "フルHD（1920×1080）以上を推奨。プレビュー画面が快適に確認できます。",
                },
              ].map(({ label, value, note }) => (
                <div key={label} className="card" style={{ padding: "1.5rem" }}>
                  <p
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--color-text-muted)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ fontWeight: 700, marginBottom: "0.3rem" }}>{value}</p>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0, whiteSpace: "pre-line" }}>
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Download Notes ── */}
        <section className="section">
          <div className="container" style={{ maxWidth: "860px" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              <div className="section-label-line" />
              <span className="section-label-text">📋 ダウンロード・インストールの注意点</span>
            </div>
            <div className="card" style={{ padding: "1.75rem 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "0.25rem" }}>
                Google Drive からのダウンロードおよびWindowsへのインストール時に、以下の手順が必要になる場合があります。
              </p>
              {[
                {
                  step: "1",
                  title: "Google Drive の警告",
                  desc: "「ウイルスを確認できません」というダイアログが表示された場合は、「ダウンロード」ボタンをそのままクリックしてください。大きなファイルはウイルス自動スキャンがスキップされるため表示される案内で、ファイル自体に問題はありません。",
                },
                {
                  step: "2",
                  title: "Windows SmartScreen の警告",
                  desc: "インストーラーを起動した際に「WindowsによってPCが保護されました」という画面が表示される場合があります。「詳細情報」をクリックし、表示される「実行」ボタンで続行してください。個人開発アプリのため署名証明書がなく、新しいアプリとして検出されることが原因です。",
                },
                {
                  step: "3",
                  title: "ウイルス対策ソフトの反応",
                  desc: "セキュリティソフトがアプリを誤検知する場合があります。その場合は一時的に除外設定を行うか、「許可」「信頼」として登録した上でご使用ください。",
                },
                {
                  step: "4",
                  title: "動作環境（重要）",
                  desc: "本アプリは Windows 11（64bit）での動作を確認しています。Windows 10 での動作は未確認のため保証できません。Mac・Linux には対応していません。",
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    paddingBottom: "1rem",
                    borderBottom: step === "4" ? "none" : "1px solid var(--color-border)",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: "1.75rem",
                      height: "1.75rem",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                      color: "#fff",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {step}
                  </span>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: "0.3rem", fontSize: "0.9rem" }}>{title}</p>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Note ── */}
        <section className="section">
          <div className="container" style={{ maxWidth: "860px" }}>
            <div
              style={{
                background: "rgba(245 158 11 / 0.07)",
                border: "1px solid rgba(245 158 11 / 0.25)",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem 2rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>🤖</span>
              <div>
                <p style={{ fontWeight: 700, marginBottom: "0.4rem", color: "var(--color-accent)" }}>
                  AIによって作成されたツールです
                </p>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                  このアプリは Claude Code（AI）を活用して開発されています。予期しない動作や不具合が生じる場合があります。
                  問題を発見された場合は、下記の不具合報告フォームからご連絡ください。<strong>極力早く修正対応いたします。</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bug Report ── */}
        <section className="section" style={{ background: "var(--color-surface)" }}>
          <div className="container" style={{ maxWidth: "860px" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              <div className="section-label-line" />
              <span className="section-label-text">🐛 不具合報告・お問い合わせ</span>
            </div>
            <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
                動作しない・エラーが出るなどの不具合を見つけたらフォームで教えてください。<br />
                いただいた内容を確認し、極力早く修正対応します。
              </p>
              <a
                href={BUG_REPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                不具合報告フォームを開く →
              </a>
            </div>
          </div>
        </section>

        {/* ── Terms ── */}
        <section className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
          <div className="container" style={{ maxWidth: "860px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
                利用規約はダウンロードボタンから確認できます。テキストで読みたい場合はこちら。
              </p>
              <Link
                href="/lab/irerudake/terms"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-primary-light)",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                利用規約を別ページで読む →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
