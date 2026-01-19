import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サービス・料金 | ヤギレンタル",
  description: "除草サービスの料金プランとご利用の流れについて",
};

export default function ServicePage() {
  return (
    <main className="py-20 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800">
          サービス・料金
        </h1>

        {/* ▼ 料金プランセクション */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <span>分かりやすい2つのプラン</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* プランA */}
            <div className="bg-white p-8 rounded-3xl shadow-md border-2 border-transparent hover:border-green-500 transition">
              <div className="bg-green-100 text-green-800 font-bold inline-block px-4 py-1 rounded-full mb-4">
                初めての方に
              </div>
              <h3 className="text-2xl font-bold mb-2">お試し除草プラン</h3>
              <div className="text-4xl font-bold text-green-700 mb-4">
                1週間〜1ヶ月
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                「本当に除草できるの？」と不安な方向けのトライアル期間です。
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">✅ ヤギ2頭〜</li>
              </ul>
            </div>

            {/* プランB */}
            <div className="bg-white p-8 rounded-3xl shadow-md border-2 border-green-500 relative overflow-hidden">
              <div className="bg-green-100 text-green-800 font-bold inline-block px-4 py-1 rounded-full mb-4">
                しっかり綺麗に
              </div>
              <h3 className="text-2xl font-bold mb-2">定期レンタルプラン</h3>
              <div className="text-4xl font-bold text-green-700 mb-4">
                1ヶ月〜12ヶ月
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                広い敷地や、継続的に雑草を管理したい方におすすめです。
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">✅ ヤギ2頭〜</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ▼ ご利用の流れセクション */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm">
          <h2 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-2">
            <span>🚀</span>
            <span>ご利用の流れ</span>
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-800">お問い合わせ</h3>
                <p className="text-gray-600 text-lg">
                  まずはフォームよりご連絡ください。<br /> 少人数で運営しているため、お電話ではなくフォームからの受付とさせていただいております。いただいた内容は担当者が確認し、可能な限り当日中に折り返しご連絡いたします。
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-800">現地調査・お見積り</h3>
                <p className="text-gray-600 text-lg">
                  スタッフが現地へ伺います。 実際に現地を見て、環境の確認や「どんなオプションが必要か」などをご相談させていただきます。最適なプランとお見積もりは、後日改めてご提示いたします。
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-800">ご契約・サービス開始</h3>
                <p className="text-gray-600 text-lg">
                  いよいよヤギとの生活がスタート！ <br />正式なご契約の後、ご指定の日時からレンタル開始です。ヤギの送迎（オプション）やお引き渡し方法についても、柔軟に対応いたします。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block bg-green-600 text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              無料お見積りはこちら
            </Link>
          </div>
        </section>



      </div>
    </main>
  );
}