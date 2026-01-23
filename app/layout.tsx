import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// ▼ 作った部品をインポート
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ヤギレンタル",
  description: "癒やしのヤギをお届けします",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {/* ▼ たったこれだけでOK！ */}
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}