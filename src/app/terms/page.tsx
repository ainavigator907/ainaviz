import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "免責事項 | AI Navigator -ソラの秘密基地-",
  description: "AI Navigator -ソラの秘密基地- の免責事項および利用上の注意点について。",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="section" style={{ minHeight: "80vh" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>
            免責事項
          </h1>
          <div className="card" style={{ padding: "clamp(1.5rem, 5vw, 3rem)", lineHeight: "1.8" }}>
            <p>
              AI Navigator -ソラの秘密基地-（以下、「当サイト」）に掲載する情報およびその利用に関して、ユーザー各位は以下の免責事項を必ずご一読いただき、ご承諾の上で当サイトをご利用ください。
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.3rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "0.5rem" }}>
              1. 情報の正確性・最新性について
            </h2>
            <p>
              当サイトで紹介しているAIツール（生成AI、SaaS等）の機能、料金プラン、各種設定方法等の情報は、記事執筆・更新時点での調査に基づき作成しております。
              生成AIの領域は極めて進化が早く仕様変更が頻繁に行われるため、当サイトの情報が古くなっている場合や、誤りが含まれる可能性がございます。
            </p>
            <p style={{ marginTop: "1rem" }}>
              当サイトは可能な限り正確な情報を掲載するよう努めておりますが、その正確性、完全性、妥当性、および安全性を保証するものではありません。最新かつ正確な情報につきましては、必ず各ツールの公式ウェブサイトにてご自身でご確認ください。
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.3rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "0.5rem" }}>
              2. 損害への責任について
            </h2>
            <p>
              当サイトに掲載された情報、または当サイトが紹介しているツールを利用（インストール、設定、運用を含みます）したことによって生じたいかなる損害（直接的・間接的・派生的損害を問わず）についても、当サイトおよび運営者は一切の責任を負いません。
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>・AIツールへの機密情報・個人情報の入力による情報漏洩</li>
              <li>・AIが生成したコンテンツ（文章・画像・コード等）の利用に伴う著作権侵害等の法的トラブル</li>
              <li>・ツールの不具合、サービス終了、あるいはアカウント停止による業務上の損失</li>
            </ul>
            <p style={{ marginTop: "1rem" }}>
              これらのリスクを含むサービスの利用に関するすべての判断と責任は、ユーザー様ご自身に帰属するものとします。
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.3rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "0.5rem" }}>
              3. 外部サイトへのリンクについて
            </h2>
            <p>
              当サイト内には、各種ASPやアフィリエイトプログラムを利用した外部リンク（公式ページへの遷移等）が含まれています。
              当サイトからのリンク先である外部サイトにて提供される情報、サービス、商品等に関するトラブルについて、当サイトは一切の責任を負いません。外部サイトにおける商品・サービスの購入や利用に関しては、ユーザー様とリンク先事業者との直接の取引となります。
            </p>

            <div style={{ marginTop: "4rem", paddingTop: "1rem", borderTop: "1px solid var(--color-border)", fontSize: "0.9rem", color: "var(--color-text-muted)", textAlign: "right" }}>
              <p>制定日: 2026年3月25日</p>
              <p>AI Navigator ソラ</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
