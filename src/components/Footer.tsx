import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <p style={{ fontWeight: 800, marginBottom: "0.25rem", color: "var(--color-text)", fontSize: "1rem" }}>
              ⚡ ソラの秘密基地
            </p>
            <p style={{ fontSize: "0.8rem" }}>
              現役総務部長が送る、AI×実務の実験場。
            </p>
          </div>
          <nav>
            <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", flexWrap: "wrap" }}>
              <li><Link href="/lab" style={{ color: "var(--color-text-muted)" }}>ラボ</Link></li>
              <li><Link href="/case-studies" style={{ color: "var(--color-text-muted)" }}>DX実録</Link></li>
              <li><Link href="/reviews" style={{ color: "var(--color-text-muted)" }}>ガジェット</Link></li>
              <li><Link href="/guides" style={{ color: "var(--color-text-muted)" }}>ガイド</Link></li>
              <li><Link href="/privacy-policy" style={{ color: "var(--color-text-muted)" }}>プライバシーポリシー</Link></li>
              <li><Link href="/terms" style={{ color: "var(--color-text-muted)" }}>免責事項</Link></li>
            </ul>
          </nav>
          <p>&copy; {new Date().getFullYear()} ソラの秘密基地. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
