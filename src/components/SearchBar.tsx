"use client";

import { useState, useMemo } from "react";

export interface ToolData {
  id: string;
  name: string;
  tagline: string;
  category: string;
  pricingLabel: string; // e.g. "無料プランあり" | "有料"
  speedScore: number;   // 1-5
  affiliateUrl?: string;
  isAffiliate?: boolean;
  isNew?: boolean;
  rating: number;       // 1-5
  tags: string[];
}

interface SearchBarProps {
  tools: ToolData[];
  onFilter: (filtered: ToolData[]) => void;
}

const CATEGORIES = ["すべて", "文章生成", "画像生成", "コーディング", "動画生成", "音声", "分析"];

export default function SearchBar({ tools, onFilter }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filtered = useMemo(() => {
    return tools.filter((t) => {
      const matchQuery =
        query === "" ||
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.tagline.toLowerCase().includes(query.toLowerCase()) ||
        t.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));

      const matchCategory =
        activeCategory === "すべて" || t.category === activeCategory;

      return matchQuery && matchCategory;
    });
  }, [query, activeCategory, tools]);

  // Notify parent whenever filter changes
  useMemo(() => {
    onFilter(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered]);

  return (
    <div>
      {/* Search input */}
      <div className="search-wrap">
        <span className="search-icon">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </span>
        <input
          type="search"
          id="tool-search"
          className="search-input"
          placeholder="ツール名・キーワードで検索…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="AIツールを検索"
        />
      </div>

      {/* Category chips */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "0.4rem 1rem",
              borderRadius: "999px",
              border: "1.5px solid",
              borderColor: activeCategory === cat ? "var(--color-primary)" : "var(--color-border)",
              background: activeCategory === cat ? "rgba(99,102,241,0.15)" : "transparent",
              color: activeCategory === cat ? "var(--color-primary-light)" : "var(--color-text-muted)",
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              transition: "var(--transition)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
