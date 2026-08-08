import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ▼ ヒーローセクション（左右2分割レイアウト） */}
      <section className="bg-gradient-to-b from-green-50/40 to-white py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* 左カラム：キャッチコピーとバナー */}
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1">
            <div className="bg-yellow-50 text-amber-950 border border-yellow-200 px-6 py-4 rounded-2xl shadow-sm max-w-2xl mb-8 w-full">
              <p className="text-lg md:text-xl font-bold flex items-center justify-center md:justify-start gap-2">
                <span>🌻</span> 夏の除草シーズン真っ盛り！ <span>🌻</span>
              </p>
              <p className="mt-2 text-base leading-relaxed">
                気温が上がり、急速に伸びる夏の雑草対策に！<br />
                ヤギレンタルで手軽に、エコに除草しませんか？
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
              除草だけじゃない、<br />
              <span className="text-green-700">ヤギとふれあう</span>優しい時間。
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-600 font-medium leading-relaxed">
              企業の敷地管理から、ご家庭のお庭まで。<br className="hidden md:inline" />
              ただ草を刈るだけでなく、のんびりしたヤギたちとの温かいふれあいと癒やしをお届けします。
            </p>
          </div>

          {/* 右カラム：トリミングなしの3:4縦長画像 */}
          <div className="flex-1 w-full max-w-md md:max-w-lg order-1 md:order-2">
            <div className="relative aspect-[1774/2364] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/yagi_mainscreen_v2.jpg"
                alt="夏の青空の下、草を食べるヤギ"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

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

      {/* ▼ お知らせ：SNSはじめました */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white px-8 py-6 rounded-2xl shadow-sm border border-gray-100 gap-6">
          <div className="flex items-center">
            {/* スマホアイコン（グラデーション） */}
            <div className="mr-5 bg-gradient-to-tr from-green-600 to-emerald-400 p-2.5 rounded-xl text-white shadow-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-1 text-gray-800">SNSやってます！</h2>
              <p className="text-gray-600 text-sm md:text-base">
                日々のヤギたちの日常を動画や写真でお届け中🐐✨
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 w-full md:w-auto justify-center md:justify-end">
            <Link
              href="https://www.instagram.com/yamakado_suzuka?igsh=dWtob3V0eGNsdzYw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 text-white hover:opacity-90 font-bold py-2.5 px-6 rounded-full shadow-sm transition-all text-sm md:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </Link>
            <Link
              href="https://www.tiktok.com/@yamakado_farm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white hover:bg-gray-900 font-bold py-2.5 px-6 rounded-full shadow-sm transition-all text-sm md:text-base border border-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 3.16-4.51V9.42a6.35 6.35 0 0 0-6.33 6.32A6.35 6.35 0 0 0 10.33 22c4.66 0 7.49-3.25 7.49-7.49V8.04A4.8 4.8 0 0 0 22 9.38V6.69a4.8 4.8 0 0 1-2.41-.69z"/>
              </svg>
              TikTok
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}