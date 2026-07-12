import Link from "next/link";

// note / X などの外部チャネル。URLが決まり次第 href を差し替える
const SOCIAL_LINKS: { label: string; href: string }[] = [
  // { label: "note", href: "https://note.com/..." },
  // { label: "X", href: "https://x.com/..." },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <p style={{ fontWeight: 800, marginBottom: "0.25rem", color: "var(--color-text)", fontSize: "1rem", letterSpacing: "0.01em" }}>
              AINaviz
            </p>
            <p style={{ fontSize: "0.8rem" }}>
              AIをビジネス活用する人のナビゲーター。
            </p>
          </div>
          <nav>
            <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", flexWrap: "wrap" }}>
              <li><Link href="/lab" style={{ color: "var(--color-text-muted)" }}>ツール</Link></li>
              <li><Link href="/articles" style={{ color: "var(--color-text-muted)" }}>記事</Link></li>
              <li><Link href="/about" style={{ color: "var(--color-text-muted)" }}>About</Link></li>
              <li><Link href="/privacy-policy" style={{ color: "var(--color-text-muted)" }}>プライバシーポリシー</Link></li>
              <li><Link href="/terms" style={{ color: "var(--color-text-muted)" }}>免責事項</Link></li>
              {SOCIAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-muted)" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p>&copy; {new Date().getFullYear()} AINaviz. All rights reserved.</p>
        </div>
        <div style={{
          borderTop: "1px solid var(--color-border)",
          marginTop: "1.5rem",
          paddingTop: "1rem",
          fontSize: "0.72rem",
          color: "var(--color-text-muted)",
          lineHeight: "1.7",
          textAlign: "center",
        }}>
          <p>
            当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、
            <strong style={{ color: "var(--color-text-muted)" }}>Amazonアソシエイト・プログラムの参加者</strong>です。
          </p>
          <p style={{ marginTop: "0.4rem" }}>
            当サイトの記事にはアフィリエイトリンクが含まれる場合があります。リンク経由でご購入いただいた際に当サイトへ報酬が発生することがあります。
          </p>
        </div>
      </div>
    </footer>
  );
}
