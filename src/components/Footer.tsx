import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <p style={{ fontWeight: 700, marginBottom: "0.25rem", color: "var(--color-text)" }}>
              ⚡ AI Navigator
            </p>
            <p>海外AIの最前線を、日本語で届ける。</p>
          </div>
          <nav>
            <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
              <li><Link href="/tools" style={{ color: "var(--color-text-muted)" }}>AIツール一覧</Link></li>
              <li><Link href="/guides" style={{ color: "var(--color-text-muted)" }}>使い方ガイド</Link></li>
              <li>
                <Link href="/privacy-policy" style={{ color: "var(--color-text-muted)" }}>
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </nav>
          <p>&copy; {new Date().getFullYear()} AI Navigator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
