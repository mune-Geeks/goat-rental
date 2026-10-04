import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ▼ ヒーローセクション（トップの大きな画像・秋冬仕様） */}
      <div className="relative min-h-[620px] md:h-[680px] w-full flex items-center justify-center">
        {/* 背景画像（秋冬仕様） */}
        <Image
          src="/hero-goat-autumn.jpg"
          alt="秋晴れの草原で草を食むヤギ"
          fill
          className="object-cover"
          priority
        />

        {/* 落ち着いたグラデーションフィルター */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        {/* キャッチコピー */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 text-center py-16 max-w-4xl mx-auto">
          {/* 秋冬バナー */}
          <div className="bg-amber-950/85 border border-amber-400/40 text-amber-100 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md mb-8 max-w-2xl transform hover:scale-[1.01] transition-transform">
            <p className="text-lg md:text-xl font-bold text-amber-300 flex items-center justify-center gap-2">
              <span>🍂</span> 冬を迎える前の敷地管理に <span>🍂</span>
            </p>
            <p className="mt-2 text-sm md:text-base text-amber-100/90 leading-relaxed">
              乾燥による枯れ草火災の予防や、来春の雑草抑制に。<br className="hidden sm:inline" />
              冬前のすっきり除草・敷地管理のご予約を受け付けています。
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight tracking-tight">
            冬を迎える前に、<br className="sm:hidden" />
            <span className="text-amber-300">すっきり整地。</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-10 font-medium drop-shadow-md text-gray-100 max-w-2xl leading-relaxed">
            企業の敷地管理・太陽光発電所から個人のお庭まで。<br />
            乾燥する冬の火災対策＆来春の雑草予防に、<br className="hidden sm:inline" />
            環境に優しく頼れる「エコ除草パートナー」です。
          </p>

          {/* CTAボタン群 */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-lg flex items-center justify-center gap-2"
            >
              <span>無料お見積り・ご相談</span>
              <span>→</span>
            </Link>
            <Link
              href="/service"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/50 font-bold py-4 px-8 rounded-full backdrop-blur-md transition-all duration-200 text-lg flex items-center justify-center"
            >
              料金プランを見る
            </Link>
          </div>
        </div>
      </div>

      {/* ▼ 秋冬のヤギ除草をおすすめする3つの理由 */}
      <section className="py-20 px-6 bg-gradient-to-b from-amber-50/60 via-orange-50/30 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-amber-700 bg-amber-100 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
              AUTUMN & WINTER SPECIAL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              なぜ今？ <br className="sm:hidden" />
              秋冬にヤギ除草が選ばれる3つの理由
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              「草刈りは夏だけ」と思っていませんか？実は秋〜冬前の除草こそ、敷地保全とコスト削減の絶好のタイミングです。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 理由1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-amber-100 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                🔥
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                乾燥期の「枯れ草火災」を防ぐ
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                冬場は空気が乾燥し、放置された枯れ草にタバコや放火で火が燃え広がるリスクが急増します。秋のうちに綺麗に食べ尽くすことで、安心・安全な冬越しができます。
              </p>
            </div>

            {/* 理由2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-amber-100 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                🌱
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                来春の雑草発生・コストを抑制
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                秋のうちに多年生雑草をしっかり食べさせることで、根に養分が蓄えられるのを阻害。来年春〜夏の新芽の発生量を抑え、年間の除草費用を抑えられます。
              </p>
            </div>

            {/* 理由3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-amber-100 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                害虫・害獣の越冬場所をなくす
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                枯れ草の茂みは害虫や小動物（害獣）の越冬・隠れ家になりがちです。敷地の見通しをクリアに保つことで、防犯性や衛生環境も大幅に向上します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ▼ 特徴セクション（基本の3つのメリット） */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            ヤギレンタルの<br className="md:hidden" />3つの基本メリット
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

      {/* ▼ お客様の声セクション */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-green-800 bg-green-100 font-bold px-4 py-1.5 rounded-full text-sm mb-3">
              VOICE
            </span>
            <h2 className="text-3xl font-bold text-gray-800">
              お客様の声
            </h2>
            <p className="mt-3 text-gray-600">
              ヤギレンタルをご利用いただいた皆様のリアルな体験談や癒やしのエピソード
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50/70 to-emerald-50/40 p-8 md:p-12 rounded-3xl border border-green-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-amber-200">
                🍂 インタビュー順次公開中
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                「静かで驚きの除草力！子どもや社員にも大人気でした」
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                工場の敷地除草や個人邸のお庭管理など、実際にヤギたちを迎えていただいたお客様の声・ビフォーアフターを順次掲載しています。
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/voice"
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <span>お客様の声を見る</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ▼ 導入事例への誘導（またはお問い合わせ） */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            まずは現地確認・お見積りから<br className="md:hidden" />お気軽にご相談ください
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            「どのくらいの頭数が必要？」「うちの敷地でも大丈夫？」など、<br className="hidden sm:inline" />
            スタッフが丁寧にご案内いたします。ふれあい見学も大歓迎です！
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-700 hover:bg-green-800 text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
          >
            お問い合わせ・無料お見積り
          </Link>
        </div>
      </section>

      {/* ▼ お知らせ：SNSはじめました */}
      <section className="pb-16 px-6 bg-white pt-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between bg-gray-50 px-8 py-6 rounded-2xl shadow-sm border border-gray-100 gap-6">
          <div className="flex items-center">
            {/* スマホアイコン（グラデーション） */}
            <div className="mr-5 bg-gradient-to-tr from-green-600 to-emerald-400 p-2.5 rounded-xl text-white shadow-sm flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-1 text-gray-800">SNSやってます！</h2>
              <p className="text-gray-600 text-sm md:text-base">
                冬毛でモコモコになっていくヤギたちの可愛い日常をお届け中🐐🍁
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