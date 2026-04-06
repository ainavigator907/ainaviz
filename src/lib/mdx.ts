import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ContentFolder = "guides" | "tools" | "case-studies" | "reviews";

export interface ArticleFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  coverImage?: string;
  videoUrl?: string;
  author?: string;
  affiliate?: boolean;
  // case-studies specific
  scale?: string;
  aiUsed?: string[];
  readTime?: string;
  // reviews specific
  rating?: number;
  products?: string[];
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}

/** Get all articles in a given sub-folder */
export function getAllArticles(folder: ContentFolder): Article[] {
  const dir = path.join(CONTENT_DIR, folder);
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.(md|mdx)$/, "");
      const filePath = path.join(dir, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        frontmatter: data as ArticleFrontmatter,
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

/** Get a single article by slug */
export function getArticleBySlug(
  folder: ContentFolder,
  slug: string
): Article | null {
  const dir = path.join(CONTENT_DIR, folder);
  const extensions = [".md", ".mdx"];
  for (const ext of extensions) {
    const filePath = path.join(dir, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return { slug, frontmatter: data as ArticleFrontmatter, content };
    }
  }
  return null;
}
