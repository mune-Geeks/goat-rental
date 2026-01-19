'use client'; // 👈 動き（クリック）があるので必須！

import { useState } from 'react'; // 状態管理（開閉）に使う
import Link from "next/link";

export default function Header() {
    // メニューが開いているかどうかのスイッチ
    const [isOpen, setIsOpen] = useState(false);

    // メニューを閉じる関数（リンクを押した後に閉じるため）
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">

                {/* ▼ 左側：ロゴ */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-base sm:text-xl md:text-3xl font-bold text-green-800 hover:opacity-80 transition flex items-center gap-2"
                >
                    <span>🐐</span>
                    <span>ヤギレンタル｜山門牧場@鈴鹿</span>
                </Link>

                {/* ▼ PC用メニュー（スマホでは隠す） */}
                <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
                    <Link href="/service" className="hover:text-green-600 transition">
                        サービス・料金
                    </Link>
                    <Link href="/about-goat" className="hover:text-green-600 transition">
                        ヤギの生態
                    </Link>
                    <Link href="/access" className="hover:text-green-600 transition">
                        アクセス
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-green-600 text-white font-bold py-2.5 px-6 rounded-full shadow-md hover:bg-green-700 transition"
                    >
                        お問い合わせ
                    </Link>
                </nav>

                {/* ▼ スマホ用ハンバーガーボタン（PCでは隠す） */}
                <button
                    className="md:hidden p-2 text-gray-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)} // クリックで反転
                    aria-label="メニューを開く"
                >
                    {isOpen ? (
                        // ✖️ アイコン（開いている時）
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // 🍔 ハンバーガーアイコン（閉じている時）
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* ▼ スマホ用ドロップダウンメニュー（isOpenがtrueの時だけ表示） */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4">
                    <Link
                        href="/service"
                        onClick={closeMenu}
                        className="text-xl font-bold text-gray-700 py-3 border-b border-gray-100"
                    >
                        サービス・料金
                    </Link>
                    <Link
                        href="/about-goat"
                        onClick={closeMenu}
                        className="text-xl font-bold text-gray-700 py-3 border-b border-gray-100"
                    >
                        ヤギの生態
                    </Link>
                    <Link
                        href="/access"
                        onClick={closeMenu}
                        className="text-xl font-bold text-gray-700 py-3 border-b border-gray-100"
                    >
                        アクセス・会社概要
                    </Link>

                    {/* スマホメニュー内のデカいお問い合わせボタン */}
                    <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="mt-2 bg-green-600 text-white text-center text-xl font-bold py-4 rounded-xl shadow-md active:bg-green-800"
                    >
                        お問い合わせはこちら
                    </Link>
                </div>
            )}
        </header>
    );
}