import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "イレルダケ 利用規約 | ソラの秘密基地",
  description: "Windowsアプリ「イレルダケ」の利用規約。体験版・フル版ライセンス条件、免責事項について。",
};

const H2_STYLE = {
  marginTop: "2.5rem",
  marginBottom: "1rem",
  fontSize: "1.2rem",
  borderBottom: "2px solid var(--color-border)",
  paddingBottom: "0.5rem",
} as const;

export default function IrerudakeTermsPage() {
  return (
    <>
      <Navbar />
      <main className="section" style={{ minHeight: "80vh" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <Link
              href="/lab/irerudake"
              style={{ fontSize: "0.85rem", color: "var(--color-primary-light)", fontWeight: 600 }}
            >
              ← イレルダケ ダウンロードページに戻る
            </Link>
          </div>

          <h1 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>
            イレルダケ 利用規約
          </h1>

          <div className="card" style={{ padding: "clamp(1.5rem, 5vw, 3rem)", lineHeight: "1.8" }}>
            <p>
              本利用規約（以下「本規約」）は、AI Navigator ソラ（以下「提供者」）が提供する
              Windowsアプリケーション「イレルダケ」（以下「本アプリ」）の利用条件を定めるものです。
              本アプリをダウンロードまたはご利用になることで、本規約に同意したものとみなします。
            </p>

            <h2 style={H2_STYLE}>1. 提供プランと機能制限</h2>
            <p>本アプリは以下の2つのプランで提供されます。</p>
            <div
              style={{
                background: "var(--color-surface-2)",
                borderRadius: "var(--radius-sm)",
                padding: "1rem 1.25rem",
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div>
                <strong>体験版（無料）</strong>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.4rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <li>基本機能をすべてご利用いただけます。</li>
                  <li>書き出し可能な動画の長さは <strong>1本あたり15分まで</strong> に制限されます。</li>
                  <li>書き出した動画には <strong>ウォーターマーク（透かし）</strong> が付加されます。</li>
                </ul>
              </div>
              <div>
                <strong>フル版（有料ライセンス）</strong>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.4rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <li>書き出し時間の制限なし・ウォーターマークなしで全機能をご利用いただけます。</li>
                  <li>ライセンスは購入者本人のみが使用できる個人ライセンスです（1ライセンス1アカウント）。</li>
                  <li>第三者へのライセンスの譲渡・貸与・再販は禁止します。</li>
                </ul>
              </div>
            </div>

            <h2 style={H2_STYLE}>2. 禁止事項</h2>
            <p>ユーザーは以下の行為を行ってはなりません。</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>本アプリのリバースエンジニアリング、逆コンパイル、解析行為</li>
              <li>本アプリの全部または一部の複製・改変・二次配布</li>
              <li>ライセンスキーの共有・転売・漏洩</li>
              <li>体験版のウォーターマークを除去・改ざんする行為</li>
              <li>公序良俗に反するコンテンツの制作への使用</li>
              <li>法令に違反するコンテンツの制作への使用</li>
            </ul>

            <h2 style={H2_STYLE}>3. AIによる開発について</h2>
            <p>
              本アプリは Claude Code（Anthropic 社の AI）を活用して開発されています。
              最善を尽くして品質確認を行っておりますが、予期しない動作・バグ・互換性の問題が生じる可能性があります。
              不具合を発見された場合は、ダウンロードページに掲載の不具合報告フォームよりご連絡ください。
              確認し次第、極力早く修正対応いたします。
            </p>

            <h2 style={H2_STYLE}>4. 免責事項</h2>
            <p>
              提供者は本アプリの動作について、商品性・特定目的への適合性・不具合のないことを保証するものではありません。
              本アプリの使用または使用不能によって生じたいかなる損害（データ損失・業務上の損失・逸失利益等）についても、
              提供者は一切の責任を負いません。
            </p>
            <p style={{ marginTop: "1rem" }}>
              本アプリを使用して制作したコンテンツに関する著作権・肖像権・その他権利の管理および法的責任は、
              ユーザー様ご自身に帰属します。
            </p>

            <h2 style={H2_STYLE}>5. 返金ポリシー</h2>
            <p>
              フル版ライセンスの購入後の返金は、原則としてお受けしておりません。
              購入前に体験版にて動作をご確認の上、ご購入ください。
              ただし、決済完了直後にアプリが起動しない等、明らかな提供側の不具合が確認された場合は個別に対応いたします。
            </p>

            <h2 style={H2_STYLE}>6. アップデートとサポート</h2>
            <p>
              提供者は予告なく本アプリの機能追加・変更・提供終了を行う場合があります。
              フル版ライセンスをお持ちの方は、同一メジャーバージョン内のアップデートを追加費用なくご利用いただけます。
            </p>

            <h2 style={H2_STYLE}>7. 規約の変更</h2>
            <p>
              提供者は必要に応じて本規約を変更する場合があります。
              変更後も本アプリを継続してご利用になった場合、変更後の規約に同意したものとみなします。
            </p>

            <h2 style={H2_STYLE}>8. 準拠法・管轄</h2>
            <p>
              本規約は日本法に準拠し、本アプリに関する紛争については提供者の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
            </p>

            <div
              style={{
                marginTop: "4rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--color-border)",
                fontSize: "0.9rem",
                color: "var(--color-text-muted)",
                textAlign: "right",
              }}
            >
              <p>制定日: 2026年6月6日</p>
              <p>AI Navigator ソラ</p>
            </div>
          </div>

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link href="/lab/irerudake" className="btn btn-outline">
              ← ダウンロードページに戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
