import Link from "next/link";

export default function Header() {
    return (
        // sticky top-0: スクロールしても上に張り付く
        // z-50: 他の要素より手前に表示する（画像の下に潜り込まないように）
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">

                {/* ▼ 左側：ロゴ */}
                <Link
                    href="/"
                    className="text-2xl md:text-3xl font-bold text-green-800 hover:opacity-80 transition flex items-center gap-2"
                >
                    <span>🐐</span>
                    <span>ヤギレンタル</span>
                </Link>

                {/* ▼ 真ん中：メニュー（スマホでは隠す hidden md:flex） */}
                <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
                    <Link href="/service" className="hover:text-green-600 transition">
                        サービス・料金
                    </Link>
                    <Link href="/access" className="hover:text-green-600 transition">
                        アクセス
                    </Link>
                    <Link href="/about-goat" className="hover:text-green-600 transition">
                        ヤギの生態
                    </Link>
                </nav>

                {/* ▼ 右側：お問い合わせボタン（目立たせる） */}
                <Link
                    href="/contact"
                    className="bg-green-600 text-white font-bold py-2.5 px-6 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
                >
                    お問い合わせ
                </Link>
            </div>
        </header>
    );
}