"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { sendGAEvent } from "@next/third-parties/google";

interface Props {
  downloadUrl: string;
  buttonLabel?: string;
  actionLabel?: string;
}

export default function DownloadModal({ downloadUrl, buttonLabel = "体験版をダウンロード →", actionLabel = "承諾してダウンロード →" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const H2: React.CSSProperties = {
    marginTop: "2rem",
    marginBottom: "0.75rem",
    fontSize: "1rem",
    borderBottom: "1px solid var(--color-border)",
    paddingBottom: "0.4rem",
    fontWeight: 700,
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          sendGAEvent("event", "irerudake_modal_open", { plan: buttonLabel });
        }}
        className="btn btn-primary"
        style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", cursor: "pointer" }}
      >
        {buttonLabel}
      </button>

      {isMounted && isOpen && createPortal(
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0 0 0 / 0.75)",
            padding: "1rem",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
        >
          <div
            style={{
              background: "var(--color-bg, #0f1117)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              width: "100%",
              maxWidth: "660px",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 24px 64px rgba(0 0 0 / 0.6)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "1.25rem 1.75rem",
                borderBottom: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <h2 style={{ fontSize: "1.05rem", margin: 0, fontWeight: 700 }}>
                イレルダケ 利用規約
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-text-muted)",
                  fontSize: "1.4rem",
                  lineHeight: 1,
                  padding: "0.25rem",
                }}
                aria-label="閉じる"
              >
                ×
              </button>
            </div>

            {/* Notice */}
            <div
              style={{
                padding: "0.75rem 1.75rem",
                background: "rgba(99 102 241 / 0.08)",
                borderBottom: "1px solid var(--color-border)",
                fontSize: "0.82rem",
                color: "var(--color-primary-light)",
                flexShrink: 0,
              }}
            >
              ダウンロード前に以下の利用規約をお読みください。同意される場合は一番下の「承諾してダウンロード」をクリックしてください。
            </div>

            {/* Scrollable terms */}
            <div
              style={{
                padding: "0.5rem 1.75rem 1.5rem",
                overflowY: "auto",
                flex: 1,
                lineHeight: 1.8,
                fontSize: "0.875rem",
                color: "var(--color-text-muted)",
              }}
            >
              <p style={{ marginTop: "1.25rem" }}>
                本利用規約（以下「本規約」）は、AINaviz運営者 ソラ（以下「提供者」）が提供する
                Windowsアプリケーション「イレルダケ」（以下「本アプリ」）の利用条件を定めるものです。
                本アプリをダウンロードまたはご利用になることで、本規約に同意したものとみなします。
              </p>

              <h3 style={H2}>1. 提供プランと機能制限</h3>
              <p style={{ marginBottom: "0.5rem" }}>本アプリは以下の2つのプランで提供されます。</p>
              <p style={{ marginBottom: "0.25rem" }}><strong>体験版（無料）</strong></p>
              <ul style={{ paddingLeft: "1.25rem", marginBottom: "0.75rem" }}>
                <li>基本機能をすべてご利用いただけます。</li>
                <li>書き出し可能な動画の長さは <strong style={{ color: "var(--color-text)" }}>1本あたり15分まで</strong> に制限されます。</li>
                <li>書き出した動画には <strong style={{ color: "var(--color-text)" }}>ウォーターマーク（透かし）</strong> が付加されます。</li>
              </ul>
              <p style={{ marginBottom: "0.25rem" }}><strong>フル版（有料ライセンス）</strong></p>
              <ul style={{ paddingLeft: "1.25rem" }}>
                <li>書き出し時間の制限なし・ウォーターマークなしで全機能をご利用いただけます。</li>
                <li>ライセンスは購入者本人のみが使用できる個人ライセンスです（1ライセンス1アカウント）。</li>
                <li>第三者へのライセンスの譲渡・貸与・再販は禁止します。</li>
              </ul>

              <h3 style={H2}>2. 禁止事項</h3>
              <ul style={{ paddingLeft: "1.25rem" }}>
                <li>本アプリのリバースエンジニアリング、逆コンパイル、解析行為</li>
                <li>本アプリの全部または一部の複製・改変・二次配布</li>
                <li>ライセンスキーの共有・転売・漏洩</li>
                <li>体験版のウォーターマークを除去・改ざんする行為</li>
                <li>公序良俗に反するコンテンツの制作への使用</li>
                <li>法令に違反するコンテンツの制作への使用</li>
              </ul>

              <h3 style={H2}>3. AIによる開発について</h3>
              <p>
                本アプリは Claude Code（Anthropic 社の AI）を活用して開発されています。
                最善を尽くして品質確認を行っておりますが、予期しない動作・バグ・互換性の問題が生じる可能性があります。
                不具合を発見された場合は、ダウンロードページに掲載の不具合報告フォームよりご連絡ください。
                確認し次第、極力早く修正対応いたします。
              </p>

              <h3 style={H2}>4. 免責事項</h3>
              <p>
                提供者は本アプリの動作について、商品性・特定目的への適合性・不具合のないことを保証するものではありません。
                本アプリの使用または使用不能によって生じたいかなる損害（データ損失・業務上の損失・逸失利益等）についても、
                提供者は一切の責任を負いません。
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                本アプリを使用して制作したコンテンツに関する著作権・肖像権・その他権利の管理および法的責任は、
                ユーザー様ご自身に帰属します。
              </p>

              <h3 style={H2}>5. 返金ポリシー</h3>
              <p>
                フル版ライセンスの購入後の返金は、原則としてお受けしておりません。
                購入前に体験版にて動作をご確認の上、ご購入ください。
                ただし、決済完了直後にアプリが起動しない等、明らかな提供側の不具合が確認された場合は個別に対応いたします。
              </p>

              <h3 style={H2}>6. アップデートとサポート</h3>
              <p>
                提供者は予告なく本アプリの機能追加・変更・提供終了を行う場合があります。
                フル版ライセンスをお持ちの方は、同一メジャーバージョン内のアップデートを追加費用なくご利用いただけます。
              </p>

              <h3 style={H2}>7. 規約の変更</h3>
              <p>
                提供者は必要に応じて本規約を変更する場合があります。
                変更後も本アプリを継続してご利用になった場合、変更後の規約に同意したものとみなします。
              </p>

              <h3 style={H2}>8. 準拠法・管轄</h3>
              <p>
                本規約は日本法に準拠し、本アプリに関する紛争については提供者の所在地を管轄する裁判所を
                第一審の専属的合意管轄裁判所とします。
              </p>

              <p style={{ marginTop: "2rem", fontSize: "0.8rem", textAlign: "right" }}>
                制定日: 2026年6月6日　AINaviz運営者 ソラ
              </p>
            </div>

            {/* Footer */}
            <div
              style={{
                padding: "1.25rem 1.75rem",
                borderTop: "1px solid var(--color-border)",
                display: "flex",
                gap: "0.75rem",
                justifyContent: "flex-end",
                flexShrink: 0,
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-outline"
                style={{ cursor: "pointer" }}
              >
                キャンセル
              </button>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                onClick={() => {
                  setIsOpen(false);
                  sendGAEvent("event", "irerudake_accept_click", { plan: buttonLabel, url: downloadUrl });
                }}
              >
                {actionLabel}
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
