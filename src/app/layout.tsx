import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: "ソラの秘密基地 | AI×実務の実験場",
    template: "%s | ソラの秘密基地",
  },
  description:
    "延べ3,000人規模の運用実績を持つ現役総務部長・ソラが送る、AI×実務の実験場。DX改善実録、自作ツール、ガジェット検証を発信。",
  keywords: ["AI活用", "業務効率化", "DX", "総務", "自動化", "ガジェット", "Next.js"],
  authors: [{ name: "ソラ" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ソラの秘密基地",
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
