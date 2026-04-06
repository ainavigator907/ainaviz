"use client";

import { useEffect, useState } from "react";

export default function SpeedBadge() {
  const [ms, setMs] = useState<number | null>(null);

  useEffect(() => {
    // Use Navigation Timing API for accurate load measurement
    const measure = () => {
      const entries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      if (entries.length > 0) {
        const nav = entries[0];
        // domContentLoadedEventEnd gives the DOMContentLoaded time
        const loadTime = Math.round(nav.domContentLoadedEventEnd);
        if (loadTime > 0) {
          setMs(loadTime);
          return;
        }
      }
      // Fallback: measure from navigation start
      setMs(Math.round(performance.now()));
    };

    if (document.readyState === "complete") {
      measure();
    } else {
      window.addEventListener("load", measure, { once: true });
    }
  }, []);

  if (ms === null) return null;

  const color =
    ms < 500 ? "#10b981" : ms < 1500 ? "#f59e0b" : "#ef4444";

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        fontSize: "0.72rem",
        color: "var(--color-text-muted)",
        background: "rgba(255 255 255 / 0.04)",
        border: "1px solid var(--color-border)",
        borderRadius: "999px",
        padding: "0.25rem 0.75rem",
      }}
      title="Next.js App Routerによる計測値（DOMContentLoaded）"
    >
      <span
        style={{
          display: "inline-block",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: color,
          flexShrink: 0,
        }}
      />
      <span>
        Next.js で構築 ·{" "}
        <strong style={{ color }}>{ms}ms</strong> で読み込み完了
      </span>
    </div>
  );
}
