import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-gray-200 p-4 sticky top-0 bg-white/80 backdrop-blur-md z-10">
            <nav className="flex justify-between items-center max-w-4xl mx-auto">
                <Link href="/" className="text-xl font-bold hover:text-green-600">
                    🐐 ヤギレンタル
                </Link>

                <div className="flex gap-4">
                    <Link href="/service" className="hover:text-green-600 font-medium">
                        サービス・料金
                    </Link>
                    <Link href="/about-goat" className="hover:text-green-600 font-medium">
                        ヤギの生態
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                    >
                        予約する
                    </Link>
                </div>
            </nav>
        </header>
    );
}