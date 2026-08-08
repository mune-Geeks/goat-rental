import Link from "next/link";

export default function VoicePage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-24">
      {/* ▼ ヘッダーセクション */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 py-16 md:py-24 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">お客様の声</h1>
          <p className="text-lg md:text-xl text-green-100 font-medium">
            ヤギレンタルをご利用いただいた皆様のリアルな体験談や癒やしのエピソード
          </p>
        </div>
      </section>

      {/* ▼ Coming Soon メインバナー */}
      <section className="max-w-4xl mx-auto px-6 -mt-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center">
          <div className="inline-block bg-yellow-50 text-amber-700 border border-yellow-200 font-bold px-6 py-2 rounded-full mb-6 text-sm md:text-base animate-pulse">
            🌻 Currently Preparing (現在準備中) 🌻
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6">
            ご利用者様のインタビューを順次公開予定！
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            ヤギたちがもたらした驚きの除草効果や、お庭やオフィスに生まれたあたたかい笑顔と癒やしのエピソードなど、ご利用いただいたお客様の生の声を現在取りまとめております。<br />
            どうぞ楽しみにお待ちください！
          </p>
          <div className="border-t border-gray-100 pt-8">
            <Link
              href="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full shadow-md transition transform hover:-translate-y-0.5 text-base md:text-lg"
            >
              まずはヤギレンタルについて相談する
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
