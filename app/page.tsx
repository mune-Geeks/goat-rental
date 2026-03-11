import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ▼ ヒーローセクション（トップの大きな画像） */}
      <div className="relative h-[600px] w-full">
        {/* 背景画像 */}
        <Image
          src="/hero-goat.jpg"
          alt="庭の草を食べるヤギ"
          fill // 親要素(h-[600px])いっぱいに画像を広げる魔法
          className="object-cover" // 画像の比率を保ったままトリミング
          priority // 一番最初に読み込む（表示速度アップ）
        />

        {/* 黒いフィルター（文字を読みやすくするため） */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* キャッチコピー */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center pb-24">
          <div className="bg-white/90 text-green-800 px-6 py-4 rounded-xl shadow-lg max-w-2xl backdrop-blur-sm mb-6">
            <p className="text-lg md:text-xl font-bold">
              🌸 春の除草シーズンに向けて 🌸
            </p>
            <p className="mt-2 text-base md:text-lg">
              暖かくなり雑草が伸び始める春に向けた、<br className="md:hidden" />ヤギレンタルのご予約も受け付けています。
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md leading-tight">
            次世代の除草は、<br className="md:hidden" />ヤギでした。
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium drop-shadow-md">
            企業の敷地管理から、ご家庭のお庭まで<br />
            環境に優しく、コストも抑える「次世代の除草パートナー」です。
          </p>



        </div>
      </div>

      {/* ▼ 特徴セクション（文字大きめ・シンプル） */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            ヤギレンタルの<br className="md:hidden" />3つのメリット
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* メリット1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="text-5xl mb-6">🌱</div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">静かでエコ</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                機械を使わないので騒音がありません。ガソリンも使わず、環境にとても優しい除草方法です。
              </p>
            </div>

            {/* メリット2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="text-5xl mb-6">🐐</div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">強力な除草力</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                急な斜面や、機械が入りにくい場所でも大丈夫。1日に体重の10%もの雑草を食べ尽くします。
              </p>
            </div>

            {/* メリット3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="text-5xl mb-6">☺️</div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">癒やしの効果</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                のんびり草を食べる姿は見ているだけで癒やされます。アニマルセラピーとしても好評です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ▼ 導入事例への誘導（またはお問い合わせ） */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          まずはヤギに<br className="md:hidden" />触れてみませんか？
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          ふれあい体験も実施しています。<br />お気軽にお問い合わせください。

        </p>
        <Link
          href="/contact"
          className="inline-block border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-xl font-bold py-4 px-12 rounded-full transition"
        >
          お問い合わせ・ご相談
        </Link>
      </section>

      {/* ▼ お知らせ：Instagramはじめました */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white px-8 py-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-4 md:mb-0">
            {/* Instagramアイコン（グラデーション） */}
            <div className="mr-5 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-2.5 rounded-xl text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-1 text-gray-800">Instagramはじめました！</h2>
              <p className="text-gray-600 text-sm md:text-base">
                日々のヤギたちの様子をお届けしています🐐✨
              </p>
            </div>
          </div>
          <Link
            href="https://www.instagram.com/meemee_yagi3?igsh=dWtob3V0eGNsdzYw"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-gradient-to-r from-pink-500 to-red-500 text-white hover:opacity-90 font-bold py-2.5 px-6 rounded-full shadow-sm transition-all text-sm md:text-base"
          >
            フォローする
          </Link>
        </div>
      </section>
    </main>
  );
}