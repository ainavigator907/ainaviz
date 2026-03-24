# ⚡ AI Navigator — ainaviz.com

**海外AIの最前線を、日本のビジネスプロへ届ける専門メディア**

Next.js 14 App Router + MDX + Prism.js で構築したAIツールディレクトリ＆チュートリアルサイト。

---

## 🚀 セットアップ

### 必要環境
- Node.js 18.17 以上
- npm 9 以上

### インストールと起動

```bash
# 依存パッケージをインストール
npm install

# 開発サーバーを起動 (http://localhost:3000)
npm run dev
```

### 本番ビルド

```bash
npm run build
npm start
```

---

## 📁 ディレクトリ構成

```
ainaviz/
├── content/               # 記事コンテンツ (MDX)
│   └── guides/            # ステップバイステップガイド
│       ├── chatgpt-business-prompts.mdx
│       └── cursor-setup-guide.mdx
│
├── public/                # 静的ファイル
│   └── og-image.png       # OGP画像 (1200×630px) ← 追加してください
│
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # 日本語メタタグ・OGP設定
│   │   ├── globals.css    # デザインシステム (CSS変数・全コンポーネント)
│   │   ├── page.tsx       # トップページ
│   │   ├── tools/
│   │   │   └── page.tsx   # AIツール一覧ページ
│   │   └── guides/
│   │       ├── page.tsx   # ガイド一覧ページ
│   │       └── [slug]/
│   │           └── page.tsx  # ガイド詳細 (Prism.js + 動画埋め込み対応)
│   │
│   ├── components/
│   │   ├── AffiliateCard.tsx  ⭐ 高額SaaS向けアフィリエイトカード
│   │   ├── ToolCard.tsx       AIツールカード (バッジ・速度評価)
│   │   ├── HeroSection.tsx    ヒーローセクション
│   │   ├── SearchBar.tsx      検索・カテゴリフィルター
│   │   ├── Navbar.tsx         ナビゲーションバー
│   │   └── Footer.tsx         フッター
│   │
│   └── lib/
│       └── mdx.ts         # MDXファイル読み込みユーティリティ
│
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## ✍️ 記事の書き方

`content/guides/` に `.mdx` ファイルを作成するだけで自動的に記事が追加されます。

```mdx
---
title: "記事タイトル"
date: "2026-03-24"
excerpt: "記事の概要（一覧ページに表示）"
category: "guide"
tags: ["ChatGPT", "ビジネス"]
author: "AI Navigator 編集部"
affiliate: false
---

## 見出し

本文...

\`\`\`python
# コードブロック (Prism.jsで自動ハイライト)
print("Hello AI!")
\`\`\`

<!-- YouTube埋め込み -->
<iframe src="https://www.youtube.com/embed/VIDEO_ID" allowFullScreen />

<!-- アフィリエイトカード挿入 -->
<AffiliateCard
  name="ChatGPT Plus"
  tagline="説明文"
  highlight="ハイライト"
  price="$20/月"
  rating={5}
  affiliateUrl="https://openai.com/chatgpt"
  features={["機能1", "機能2"]}
/>
```

---

## 🎨 コンポーネント — AffiliateCard

高額SaaSのアフィリエイトリンクに使う再利用可能なカード。

```tsx
import AffiliateCard from "@/components/AffiliateCard";

<AffiliateCard
  name="Notion AI"
  tagline="チームのナレッジ管理をAIで革新。"
  highlight="日本語にも正式対応。テンプレート自動生成が強力。"
  price="$10/月〜"
  rating={4}
  affiliateUrl="https://notion.so"
  ctaText="Notion AIを試す"
  features={[
    "AI文章生成・要約",
    "データベース自動入力",
    "日本語サポート",
    "チームプラン対応",
  ]}
/>
```

---

## 🔍 SEO設定

`src/app/layout.tsx` に以下の日本語対応メタタグが設定済みです：

| 項目 | 設定内容 |
|---|---|
| `lang` | `ja` |
| OGP locale | `ja_JP` |
| Twitter Card | `summary_large_image` |
| canonical | `https://ainaviz.com` |
| keywords | AIツール, 生成AI, ChatGPT, ビジネスAI, 海外AIツール |

---

## 📊 技術スタック

| カテゴリ | 技術 |
|---|---|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| スタイリング | Vanilla CSS (CSS Variables) |
| コンテンツ | MDX + gray-matter |
| コードハイライト | Prism.js (rehype-prism-plus) |
| フォント | Inter + Noto Sans JP (Google Fonts) |

---

## 📝 ライセンス

MIT © AI Navigator
