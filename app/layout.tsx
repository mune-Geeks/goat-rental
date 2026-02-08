import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// ▼ 作った部品をインポート
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://yamakado-suzuka.com'),
  title: {
    template: '%s | ヤギレンタル',
    default: 'ヤギレンタル - 自然に優しい除草パートナー',
  },
  description: "環境に優しく、癒やしも提供するヤギの除草サービス。企業様から個人宅まで対応いたします。",
  openGraph: {
    title: 'ヤギレンタル - 自然に優しい除草パートナー',
    description: '環境に優しく、癒やしも提供するヤギの除草サービス。',
    url: 'https://yamakado-suzuka.com',
    siteName: 'ヤギレンタル',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ヤギレンタル',
    description: '環境に優しく、癒やしも提供するヤギの除草サービス。',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ヤギレンタル',
  image: 'https://yamakado-suzuka.com/hero-goat.jpg',
  description: '環境に優しいヤギの除草サービスを提供しています。',
  address: {
    '@type': 'PostalCode',
    addressLocality: '鈴鹿市', // 適切な住所に修正してください
    addressRegion: '三重県',
    postalCode: '513-0836',
    addressCountry: 'JP',
  },
  url: 'https://yamakado-suzuka.com',
  priceRange: '¥¥',
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Footer />
      </body>
    </html>
  );
}