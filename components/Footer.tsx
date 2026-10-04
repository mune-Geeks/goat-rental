import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 py-12 bg-gray-100 text-gray-600 border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <p className="text-lg font-bold text-gray-800 mb-4">
                    🐐 山門牧場 ヤギレンタル
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
                    <Link href="/service" className="hover:text-green-700 transition">
                        サービス・料金
                    </Link>
                    <Link href="/about-goat" className="hover:text-green-700 transition">
                        ヤギの生態
                    </Link>
                    <Link href="/access" className="hover:text-green-700 transition">
                        アクセス・会社概要
                    </Link>
                    <Link href="/voice" className="hover:text-green-700 transition">
                        お客様の声
                    </Link>
                    <Link
                        href="https://suzuri.jp/yamakado"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-800 hover:text-amber-900 font-semibold transition flex items-center gap-1"
                    >
                        <span>公式グッズ（SUZURI）</span>
                        <span>🛍️</span>
                    </Link>
                    <Link href="/contact" className="hover:text-green-700 transition">
                        お問い合わせ
                    </Link>
                </div>
                <p className="text-xs text-gray-500">
                    © 2026 山門牧場 All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}