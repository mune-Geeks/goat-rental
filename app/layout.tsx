import "./globals.css";
import type { Metadata } from "next";

// 1. サイトのメタデータを定義
export const metadata: Metadata = {
  title: "Simple Next App",
  description: "Next.jsの基本学習",
};

// 2. ルートレイアウトの関数定義
// children は、このレイアウトが囲む各ページの中身（app/page.tsx の内容）
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>

        {/* 3. ページごとの中身（Hello Next.js! の部分）がここに入ります */}
        <main style={{ padding: '20px' }}>
          {children}
        </main>

      </body>
    </html>
  );
}