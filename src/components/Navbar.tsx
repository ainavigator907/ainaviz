import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">
            ⚡ AI Navigator
          </Link>
          <ul className="navbar-links">
            <li>
              <Link href="/tools">AIツール一覧</Link>
            </li>
            <li>
              <Link href="/guides">使い方ガイド</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
          </ul>
          <Link href="/tools" className="btn btn-primary" style={{ fontSize: "0.85rem", padding: "0.55rem 1.1rem" }}>
            ツールを探す →
          </Link>
        </div>
      </div>
    </nav>
  );
}
