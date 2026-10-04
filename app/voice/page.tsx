import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お客様の声・導入事例 | ヤギレンタル",
  description: "山門牧場のヤギレンタルをご利用いただいたお客様のリアルな体験談やインタビューをご紹介します。",
};

export default function VoicePage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-24">
      {/* ▼ ヘッダーセクション */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 py-16 md:py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-white/20 text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full mb-3 backdrop-blur-sm">
            CUSTOMER INTERVIEW
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">お客様の声・導入事例</h1>
          <p className="text-base md:text-xl text-green-100 font-medium">
            ヤギレンタルをご利用いただいた企業様・個人様のリアルな体験談をお届けします
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 -mt-8">
        {/* ▼ 事例記事 1：株式会社デューコム 様 */}
        <article className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100 mb-16">
          {/* メタ情報タグ */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-green-100 text-green-800 text-xs md:text-sm font-bold px-3 py-1 rounded-full">
              🏢 法人導入事例
            </span>
            <span className="bg-amber-100 text-amber-800 text-xs md:text-sm font-bold px-3 py-1 rounded-full">
              🐐 ヤギ3頭 / 2週間レンタル
            </span>
            <span className="text-gray-500 text-xs md:text-sm">
              2026年8月実施
            </span>
          </div>

          {/* 記事タイトル */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            「除草だけでなく社員の癒やしや会話のきっかけに。<br className="hidden md:inline" />
            ヤギたちが届けてくれた笑顔と、環境に優しい敷地管理」
          </h2>

          {/* お客様プロフィールボックス */}
          <div className="bg-gray-50 rounded-2xl p-5 mb-8 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-500 font-semibold mb-1">ご導入企業様</p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                株式会社デューコム 様
              </h3>
              <p className="text-sm text-gray-600 mt-1">会社の敷地内・草地除草</p>
            </div>
            <div>
              <Link
                href="https://www.dyu-com.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-green-700 hover:text-green-800 text-sm font-bold hover:underline"
              >
                <span>公式サイトを見る</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>

          {/* 写真エリア */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md mb-10 border border-gray-100 bg-gray-100">
            <Image
              src="/yagi_voice_dyucom.jpg"
              alt="会社の敷地で草を食べるヤギたちの様子"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* インタビュー本文（Q&A形式） */}
          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Q1 */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-green-700 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  Q
                </span>
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  今回、ヤギレンタルを利用しようと思ったきっかけは何でしたか？
                </h4>
              </div>
              <div className="pl-10 text-gray-700 text-base md:text-lg">
                <p>
                  会社の敷地内に雑草が多く、特に春から夏にかけてはすぐに草が伸びてしまうことに悩んでいました。<br />
                  定期的に草刈りをしていましたが、範囲も広く管理がとても大変だったため、「何か違う方法はないか」と探していたところ、ヤギによる除草を知りお願いしました。
                </p>
              </div>
            </div>

            {/* Q2 */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-green-700 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  Q
                </span>
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  草刈り機や除草剤ではなく、「ヤギによる除草」を選ばれた理由は？
                </h4>
              </div>
              <div className="pl-10 text-gray-700 text-base md:text-lg">
                <p>
                  除草剤をなるべく使わず、環境に配慮しながら雑草対策ができるところに魅力を感じました。<br />
                  また、ヤギが会社の敷地で草を食べてくれるという珍しさもあり、どんな様子になるのかとても楽しみでもありました。
                </p>
              </div>
            </div>

            {/* Q3 */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-green-700 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  Q
                </span>
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  ヤギを迎える前に、不安や心配だった点はありましたか？
                </h4>
              </div>
              <div className="pl-10 text-gray-700 text-base md:text-lg">
                <p>
                  会社の敷地で飼育することになるので、鳴き声やにおい、脱走などが少し心配でした。また、初めてのことだったので「会社で問題なく管理できるのかな？」という不安もありました。<br />
                  しかし、事前に必要な準備や飼育方法などを丁寧に説明していただき、期間中も相談しやすかったため、安心してヤギたちを迎えることができました。
                </p>
              </div>
            </div>

            {/* Q4 */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-green-700 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  Q
                </span>
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  実際にヤギが来てみて、除草効果や敷地の変化はいかがでしたか？
                </h4>
              </div>
              <div className="pl-10 text-gray-700 text-base md:text-lg">
                <p className="bg-green-50/80 p-4 rounded-xl border border-green-100 mb-3 font-medium text-green-900">
                  「想像していた以上にたくさん草を食べてくれて驚きました。毎日少しずつ雑草が減っていくのが分かり、『こんなに食べるんだ！』と社員みんなで驚いていました」
                </p>
                <p>
                  草刈り機のように一度に全部きれいになるわけではありませんが、ヤギたちが毎日コツコツ食べてくれるので、草が減っていく様子を見るのも日々の楽しみのひとつでした。
                </p>
              </div>
            </div>

            {/* Q5 */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-green-700 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  Q
                </span>
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  社員の皆様や、近隣の方々の反応はいかがでしたか？
                </h4>
              </div>
              <div className="pl-10 text-gray-700 text-base md:text-lg">
                <p className="mb-3">
                  社員からはとても好評でした！休憩時間にヤギを見に行ったり、「今日はここまで草が減ったね」と話したり、ヤギがちょっとした癒やしの存在になっていました。
                </p>
                <p>
                  雑草対策ができたことはもちろんですが、それ以上にヤギたちが社員の癒やしになってくれたことが一番良かったです。毎日一生懸命草を食べている姿がかわいく、会社にヤギがいるという普段とは違った環境を社員みんなで楽しむことができました。<br />
                  また、社員だけでなく近所の子どもたちも毎日見に来てくれて、地域のコミュニケーションの場にもなりました。
                </p>
              </div>
            </div>

            {/* Q6 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-amber-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  ★
                </span>
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  ヤギレンタルを検討している企業様へ、一言メッセージをお願いします！
                </h4>
              </div>
              <div className="pl-10 text-gray-700 text-base md:text-lg">
                <blockquote className="bg-amber-50/70 border-l-4 border-amber-500 p-5 rounded-r-2xl italic text-gray-800 font-medium">
                  「雑草対策としてお願いしましたが、実際に利用してみると除草だけではなく、社員の癒やしやコミュニケーションにもつながりました。会社の敷地にヤギがいる光景は思っていた以上に楽しく、社員からも大好評でした。<br />
                  普通の草刈りとは少し違った方法で雑草対策をしてみたい企業さんには、ぜひおすすめしたいです！」
                </blockquote>
              </div>
            </div>
          </div>
        </article>

        {/* ▼ 次回予告（Coming Soon） */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center mb-12">
          <span className="inline-block bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold px-3 py-1 rounded-full mb-3">
            🍂 INTERVIEW #02 COMING SOON
          </span>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            他のお客様・個人邸での事例も順次公開予定！
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            太陽光発電所や個人のお庭除草など、様々な場所で活躍するヤギたちのエピソードをお届けしてまいります。
          </p>
        </div>

        {/* ▼ お問い合わせCTA */}
        <div className="bg-gradient-to-br from-green-800 to-emerald-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            うちの敷地でもヤギを呼べる？<br className="sm:hidden" />まずはお気軽にご相談ください
          </h3>
          <p className="text-green-100 mb-8 max-w-xl mx-auto text-base md:text-lg">
            敷地の広さや傾斜、必要な頭数など、スタッフが丁寧にご案内・お見積りいたします。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-800 hover:bg-green-50 font-bold py-4 px-10 rounded-full shadow-lg transition transform hover:-translate-y-0.5 text-base md:text-lg"
          >
            無料お見積り・お問い合わせ
          </Link>
        </div>
      </div>
    </main>
  );
}
