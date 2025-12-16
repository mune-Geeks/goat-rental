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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">
            庭の草刈り、<br className="md:hidden" />ヤギにお任せ。
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium drop-shadow-md">
            環境にやさしく、心も癒やす。<br />
            新しい除草のカタチです。
          </p>
          <Link
            href="/service"
            className="bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg transition transform hover:scale-105"
          >
            サービス・料金を見る
          </Link>
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
          まずは1週間から<br className="md:hidden" />試してみませんか？
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          敷地の広さや草の状況に合わせて、<br />最適なプランをご提案します。
        </p>
        <Link
          href="/contact"
          className="inline-block border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-xl font-bold py-4 px-12 rounded-full transition"
        >
          お問い合わせ・ご相談
        </Link>
      </section>
    </main>
  );
}