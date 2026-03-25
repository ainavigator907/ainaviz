import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "AIナビゲーター",
  description: "AI自動化やWeb開発の最新情報を発信",
  // 👇 ここを追記（画像の value の値を反映させています）
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
        {/* Preconnect for Google Fonts (loaded in globals.css) */}
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
