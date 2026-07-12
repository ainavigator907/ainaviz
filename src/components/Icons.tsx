import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

function base({ size = 20, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

/** ラボ・ツール（フラスコ） */
export function IconFlask(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10 3v6L4.5 18.5A2 2 0 0 0 6.24 21h11.52a2 2 0 0 0 1.74-2.5L14 9V3" />
      <path d="M8.5 3h7" />
      <path d="M7 15h10" />
    </svg>
  );
}

/** 記事（ドキュメント） */
export function IconArticle(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}

/** 実録（クリップボード＋チェック） */
export function IconClipboard(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
      <path d="m9 13 2 2 4-4" />
    </svg>
  );
}

/** 人物 */
export function IconUser(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
    </svg>
  );
}

/** ダウンロード */
export function IconDownload(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

/** チェック */
export function IconCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 5 5L19 7" />
    </svg>
  );
}

/** 右矢印 */
export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

/** 外部リンク */
export function IconExternal(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M18 13v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V8a1.5 1.5 0 0 1 1.5-1.5H11" />
    </svg>
  );
}

/** 開発中（工事・進行中） */
export function IconWrench(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 6.5a4.5 4.5 0 0 0-6.4 5.1L3 16.7a2 2 0 0 0 0 2.8l1.5 1.5a2 2 0 0 0 2.8 0l5.1-5.1a4.5 4.5 0 0 0 5.1-6.4l-3 3-2.8-.7-.7-2.8z" />
    </svg>
  );
}

/** セキュリティ・信頼 */
export function IconShield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** 動画 */
export function IconVideo(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10 5-3v10l-5-3" />
    </svg>
  );
}

/** ナビゲーション（羅針盤 = AINaviz のモチーフ） */
export function IconCompass(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </svg>
  );
}

/** 光・注目（NEW的な用途） */
export function IconSpark(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8" />
      <path d="m15.6 15.6 2.8 2.8" />
      <path d="m5.6 18.4 2.8-2.8" />
      <path d="m15.6 8.4 2.8-2.8" />
    </svg>
  );
}
