import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ainaviz.com"
  ),
  title: {
    default: "AINaviz | AIをビジネスの戦力にする",
    template: "%s | AINaviz",
  },
  description:
    "AIをビジネス活用する人のナビゲーター。現役総務部長・ソラが、実務で本当に動くAIツールと活用ノウハウだけを届けます。",
  keywords: ["AI活用", "業務効率化", "DX", "総務", "自動化", "AIツール", "Claude"],
  authors: [{ name: "ソラ" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "AINaviz",
  },
  verification: {
    other: {
      "impact-site-verification": ["965f9dd6-28da-4855-afd2-30ffbeecb5c8"],
    },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-TP455GZNCE"} />
      </body>
    </html>
  );
}
