import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllArticles } from "@/lib/mdx";
import ArticlesList, { type ArticleListItem } from "./ArticlesList";

export const metadata: Metadata = {
  title: "記事",
  description:
    "AIをビジネス活用するための実録とガイド。現場で検証済みのDX実録、業務で使えるAI活用ノウハウを公開しています。",
};

export default function ArticlesPage() {
  const articles: ArticleListItem[] = [
    ...getAllArticles("case-studies").map((a) => ({
      slug: a.slug,
      folder: "case-studies" as const,
      title: a.frontmatter.title,
      date: a.frontmatter.date,
      excerpt: a.frontmatter.excerpt,
      tags: a.frontmatter.tags ?? [],
      aiUsed: a.frontmatter.aiUsed ?? [],
      readTime: a.frontmatter.readTime,
    })),
    ...getAllArticles("guides").map((a) => ({
      slug: a.slug,
      folder: "guides" as const,
      title: a.frontmatter.title,
      date: a.frontmatter.date,
      excerpt: a.frontmatter.excerpt,
      tags: a.frontmatter.tags ?? [],
      aiUsed: [],
      readTime: a.frontmatter.readTime,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Navbar />
      <main>
        <section style={{ padding: "5rem 0 3rem", borderBottom: "1px solid var(--color-border)" }}>
          <div className="container">
            <h1 style={{ marginBottom: "1rem", fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
              記事
            </h1>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", maxWidth: "620px", lineHeight: 1.8 }}>
              現場で検証したことだけを書いています。
              業務改善の実録と、明日から使えるAI活用ガイド。
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: "3rem" }}>
          <div className="container">
            <ArticlesList articles={articles} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
