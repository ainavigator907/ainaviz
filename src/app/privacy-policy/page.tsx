import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | AI Navigator -ソラの秘密基地-",
  description: "AI Navigator -ソラの秘密基地- のプライバシーポリシー（個人情報保護方針）について。",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="section" style={{ minHeight: "80vh" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>
            プライバシーポリシー
          </h1>
          <div className="card" style={{ padding: "clamp(1.5rem, 5vw, 3rem)", lineHeight: "1.8" }}>
            <p>
              AI Navigator -ソラの秘密基地-（以下、「当サイト」とします）は、本ウェブサイト上で提供するサービスにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」とします）を定めます。
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.3rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "0.5rem" }}>
              1. 広告の配信について
            </h2>
            <p>
              当サイトは、第三者配信の広告サービス「Googleアドセンス」を利用する予定です。
              広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。
              Cookieを無効にする設定およびGoogleアドセンスに関する詳細は「<a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" style={{color: "var(--color-primary)", textDecoration: "underline"}}>広告 – ポリシーと規約 – Google</a>」をご覧ください。
            </p>
            <p style={{ marginTop: "1rem" }}>
              また、当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.3rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "0.5rem" }}>
              2. アクセス解析ツールについて
            </h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
              このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
              この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.3rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "0.5rem" }}>
              3. アフィリエイトプログラムについて
            </h2>
            <p>
              当サイトは、各種アフィリエイトプログラム（A8.net、Impact、PartnerStackおよび各サービスの公式アフィリエイト等）に参加しています。
              当サイト内のリンクを経由して商品やサービスを契約・購入された場合、当サイトに報酬が支払われることがあります。リンク先のサービスに関するお問い合わせは、各サービス提供元に直接ご確認いただきますようお願いいたします。
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.3rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "0.5rem" }}>
              4. 免責事項
            </h2>
            <p>
              当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
            </p>
            <p style={{ marginTop: "1rem" }}>
              また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。特に生成AIツール関連の情報は変化が激しいため、最新情報は必ず公式サイトにてご確認ください。
              当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p>

            <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.3rem", borderBottom: "2px solid var(--color-border)", paddingBottom: "0.5rem" }}>
              5. 著作権について
            </h2>
            <p>
              当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。
              当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。
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
