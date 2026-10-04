'use client'; // 👈 動き（クリック）があるので必須！

import { useState } from 'react'; // 状態管理（開閉）に使う
import Link from "next/link";

export default function Header() {
    // メニューが開いているかどうかのスイッチ
    const [isOpen, setIsOpen] = useState(false);

    // メニューを閉じる関数（リンクを押した後に閉じるため）
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">

                {/* ▼ 左側：ロゴ */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-green-800 hover:opacity-80 transition flex items-center gap-2 whitespace-nowrap flex-shrink-0"
                >
                    <span>🐐</span>
                    <span>ヤギレンタル｜山門牧場@鈴鹿</span>
                </Link>

                {/* ▼ PC用メニュー（画面幅に応じて自動調整・絶対改行なし） */}
                <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8 text-sm lg:text-base xl:text-lg font-medium text-gray-700 whitespace-nowrap flex-shrink-0">
                    <Link href="/service" className="hover:text-green-600 transition whitespace-nowrap">
                        ヤギレンタル
                    </Link>

                    <Link href="/about-goat" className="hover:text-green-600 transition whitespace-nowrap">
                        ヤギの生態
                    </Link>
                    <Link href="/access" className="hover:text-green-600 transition whitespace-nowrap">
                        アクセス
                    </Link>
                    <Link href="/voice" className="hover:text-green-600 transition whitespace-nowrap">
                        お客様の声
                    </Link>
                    <Link
                        href="https://suzuri.jp/yamakado"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-700 transition flex items-center gap-1 text-amber-800 whitespace-nowrap"
                    >
                        <span>グッズ</span>
                        <span className="text-[10px] lg:text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full font-bold">New</span>
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-green-600 text-white font-bold py-2 px-4 lg:py-2.5 lg:px-6 rounded-full shadow-md hover:bg-green-700 transition whitespace-nowrap text-sm lg:text-base"
                    >
                        お問い合わせ
                    </Link>
                </nav>

                {/* ▼ スマホ用ハンバーガーボタン（PCでは隠す） */}
                <button
                    className="md:hidden p-2 text-gray-600 focus:outline-none flex-shrink-0"
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
                        ヤギレンタル
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

                    <Link
                        href="/voice"
                        onClick={closeMenu}
                        className="text-xl font-bold text-gray-700 py-3 border-b border-gray-100"
                    >
                        お客様の声
                    </Link>

                    <Link
                        href="https://suzuri.jp/yamakado"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="text-xl font-bold text-gray-700 py-3 border-b border-gray-100 flex items-center justify-between"
                    >
                        <span>オリジナルグッズ</span>
                        <span className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-bold">SUZURI</span>
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