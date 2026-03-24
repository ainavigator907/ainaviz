import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getAllArticles } from "@/lib/mdx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AffiliateCard from "@/components/AffiliateCard";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

// ── Prism theme import (dark) ──────────────────────────────────────────────
// When prismjs is installed this import adds syntax highlighting CSS
import "prismjs/themes/prism-tomorrow.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles("guides");
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug("guides", slug);
  if (!article) return {};
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.excerpt,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.excerpt,
      type: "article",
      publishedTime: article.frontmatter.date,
    },
  };
}

// MDX component overrides
const components = {
  AffiliateCard,
};

export default async function GuideSlugPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug("guides", slug);

  if (!article) notFound();

  const { frontmatter, content } = article;

  return (
    <>
      <Navbar />
      <main>
        <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
          {/* Header */}
          <header style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.72rem",
                    background: "var(--color-surface-2)",
                    color: "var(--color-primary-light)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "4px",
                    fontWeight: 600,
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
            <h1 style={{ marginBottom: "1rem" }}>{frontmatter.title}</h1>
            <div style={{ display: "flex", gap: "1rem", color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
              <time dateTime={frontmatter.date}>{frontmatter.date}</time>
              {frontmatter.author && <span>by {frontmatter.author}</span>}
            </div>
            <p
              style={{
                marginTop: "1rem",
                padding: "1rem 1.25rem",
                background: "var(--color-surface)",
                borderLeft: "3px solid var(--color-primary)",
                borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
                color: "var(--color-text-muted)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
              }}
            >
              {frontmatter.excerpt}
            </p>
          </header>

          {/* MDX body */}
          <div className="mdx-body">
            <MDXRemote
              source={content}
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [[rehypePrism, { ignoreMissing: true }]],
                },
              }}
            />
          </div>
        </article>
      </main>
      <Footer />

      {/* Inline MDX body styles */}
      <style>{`
        .mdx-body h2 {
          font-size: 1.5rem;
          margin: 2.5rem 0 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--color-border);
        }
        .mdx-body h3 {
          font-size: 1.15rem;
          margin: 2rem 0 0.75rem;
        }
        .mdx-body p {
          margin: 1rem 0;
          color: var(--color-text-muted);
          line-height: 1.8;
        }
        .mdx-body ul, .mdx-body ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
          color: var(--color-text-muted);
          line-height: 1.8;
        }
        .mdx-body li { margin: 0.35rem 0; }
        .mdx-body a { color: var(--color-primary-light); text-decoration: underline; }
        .mdx-body strong { color: var(--color-text); font-weight: 700; }
        .mdx-body code:not(pre code) {
          background: var(--color-surface-2);
          color: var(--color-secondary);
          padding: 0.15em 0.4em;
          border-radius: 4px;
          font-size: 0.875em;
        }
        .mdx-body blockquote {
          margin: 1.5rem 0;
          padding: 0.75rem 1.25rem;
          border-left: 3px solid var(--color-primary);
          background: var(--color-surface);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          color: var(--color-text-muted);
        }
        .mdx-body iframe {
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: var(--radius-md);
          border: none;
          margin: 1.5rem 0;
        }
        .mdx-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 0.9rem;
        }
        .mdx-body th, .mdx-body td {
          padding: 0.65rem 1rem;
          border: 1px solid var(--color-border);
          text-align: left;
        }
        .mdx-body th {
          background: var(--color-surface-2);
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
