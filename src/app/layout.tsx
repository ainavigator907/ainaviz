import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ainaviz.com"),
  title: {
    default: "AI Navigator | 日本のビジネスプロ向けAIツール最新情報",
    template: "%s | AI Navigator",
  },
  description:
    "海外発の最新AIツールをいち早く日本語で紹介。ビジネスパーソンやAI初心者に向けたツールレビュー・使い方ガイドを毎週更新。",
  keywords: [
    "AIツール",
    "AI活用",
    "ChatGPT",
    "生成AI",
    "ビジネスAI",
    "AI入門",
    "海外AIツール",
    "AI Navigator",
  ],
  authors: [{ name: "AI Navigator 編集部" }],
  creator: "AI Navigator",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    languages: { "ja-JP": "/" },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://ainaviz.com",
    siteName: "AI Navigator",
    title: "AI Navigator | 日本のビジネスプロ向けAIツール最新情報",
    description:
      "海外発の最新AIツールをいち早く日本語で紹介。毎週更新のツールレビュー・使い方ガイド。",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Navigator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Navigator",
    description: "海外発の最新AIツールをいち早く日本語で紹介。",
    images: ["/og-image.png"],
    creator: "@ainaviz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preconnect for Google Fonts (loaded in globals.css) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
