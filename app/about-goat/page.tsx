import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ヤギの生態 | ヤギレンタル",
  description: "除草ヤギの性格や、好んで食べる草について",
};

export default function AboutGoatPage() {

  // ▼ 1. Q&Aのデータ（ここで文字を管理すると楽です）
  const questions = [
    {
      q: "鳴き声はうるさくないですか？",
      a: "基本的にはとても静かです。ただし、寂しい時や驚いた時に「メェ〜」と鳴くことがあります。夜間は小屋で眠るため静かです。"
    },
    {
      q: "噛みついたりしませんか？",
      a: "ヤギには上の前歯がないため、人を噛むことはほとんどありません。性格も穏やかで、頭突きをすることも稀です。"
    },
    {
      q: "臭いは気になりますか？",
      a: "草食動物なので、糞の臭いはほとんどありません（コロコロした乾燥した糞です）。尿は多少臭うため、定期的な清掃を行えば問題ありません。"
    },
    {
      q: "雨の日はどうしていますか？",
      a: "ヤギは水が苦手です。雨の日は簡易テントや小屋の中でじっとしています。ですので、雨の日のためのテントや、雨よけの設備が必要です。"
    },
  ];

  // ▼ 2. ヤギ紹介のデータ
  const goatPhotos = [
    {
      src: "/yagi_member_1.jpg",
      alt: "草を食むヤギ"
    },
    {
      src: "/yagi_member_2.jpg",
      alt: "丘の上に立つヤギ"
    },
    {
      src: "/yagi_member_3.jpg",
      alt: "こちらを見つめるヤギ"
    },
    {
      src: "/yagi_member_4.jpg",
      alt: "こちらを見つめるヤギ"
    },
    {
      src: "/yagi_member_5.jpg",
      alt: "こちらを見つめるヤギ"
    },
    {
      src: "/yagi_member_6.jpg",
      alt: "こちらを見つめるヤギ"
    },
    {
      src: "/yagi_member_7.jpg",
      alt: "こちらを見つめるヤギ"
    },
    {
      src: "/yagi_member_8.jpg",
      alt: "こちらを見つめるヤギ"
    },
    {
      src: "/yagi_member_9.jpg",
      alt: "こちらを見つめるヤギ"
    },
    {
      src: "/yagi_member_10.jpg",
      alt: "こちらを見つめるヤギ"
    }
  ];

  return (
    <main className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800">
        働き者で癒やし系。<br className="md:hidden" />ヤギの正体
      </h1>

      {/* ▼ 既存のセクション（画像付き紹介） */}
      <section className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="w-full md:w-1/2">
          <Image
            src="/goat.jpg"
            alt="草を食べるヤギ"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-green-700">驚異の除草能力</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              1日に体重の約10%（5kg〜10kg）もの草を食べます。
              特に機械では刈りにくい「斜面」や「凸凹した場所」が得意。
              4つの胃袋を使って、硬い繊維質の草も消化してしまいます。
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-green-700">高いところも平気</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              元々は山岳地帯に住んでいた動物なので、バランス感覚が抜群です。
              急斜面でも軽々と移動して、人間が入っていけない場所の草も食べてくれます。
            </p>
          </div>
        </div>
      </section>

      {/* ▼ 新設：ヤギのメニュー表（2列レイアウト） */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <span>🍽️</span>
          <span>好き嫌い・食べてはいけないもの</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 大好物リスト */}
          <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
            <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-2">
              ⭕️ 大好物（よく食べます）
            </h3>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li className="flex items-center gap-2">🌿 クズ（厄介なツル植物）</li>
              <li className="flex items-center gap-2">🎋 ササ・ススキ</li>
              <li className="flex items-center gap-2">🌱 セイタカアワダチソウ</li>
              <li className="flex items-center gap-2">🍂 落ち葉</li>
            </ul>
            <p className="mt-4 text-sm text-green-700">
              ※特に「クズ」は大好物！人間が駆除に苦労する草ほど喜んで食べます。
            </p>
          </div>

          {/* 危険な植物リスト */}
          <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
            <h3 className="text-xl font-bold mb-4 text-red-800 flex items-center gap-2">
              ❌ 危険（中毒を起こします）
            </h3>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li className="flex items-center gap-2">🌺 ツツジ・シャクナゲ</li>
              <li className="flex items-center gap-2">🌸 アジサイ</li>
              <li className="flex items-center gap-2">🥔 ジャガイモの芽</li>
              <li className="flex items-center gap-2">🧅 ネギ・タマネギ類</li>
            </ul>
            <p className="mt-4 text-sm text-red-700">
              ※これらの植物がある場合は、事前に柵で囲うなどの対策が必要です。
            </p>
          </div>
        </div>
      </section>

      {/* ▼ 新設：Q&Aセクション（mapを使って表示！） */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-10 text-center">
          よくあるご質問（ヤギ編）
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* ここで配列(questions)をループして表示しています */}
          {questions.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-3 text-green-800 flex items-start gap-2">
                <span className="text-green-500">Q.</span>
                {item.q}
              </h3>
              <p className="text-gray-600 leading-relaxed pl-6 border-l-2 border-gray-200">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* ▼うちのヤギ紹介（写真のみ） */}
      <section>
        <h2 className="text-2xl font-bold mb-10 text-center mt-10">
          ヤギ紹介
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* ここで配列(goatPhotos)をループして表示しています */}
          {goatPhotos.map((photo, index) => (
            <div key={index} className="space-y-3">
              <div className="relative h-64 w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}