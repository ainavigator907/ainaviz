"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/lab", label: "ラボ" },
  { href: "/case-studies", label: "DX実録" },
  { href: "/reviews", label: "ガジェット" },
  { href: "/guides", label: "ガイド" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">
            ⚡ ソラの秘密基地
          </Link>
          <ul className="navbar-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    color: pathname.startsWith(href)
                      ? "var(--color-text)"
                      : undefined,
                    borderBottom: pathname.startsWith(href)
                      ? "2px solid var(--color-primary)"
                      : "2px solid transparent",
                    paddingBottom: "2px",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/case-studies"
            className="btn btn-primary"
            style={{ fontSize: "0.85rem", padding: "0.55rem 1.1rem" }}
          >
            DX実録を読む →
          </Link>
        </div>
      </div>
    </nav>
  );
}
