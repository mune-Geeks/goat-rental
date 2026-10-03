import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マイヤギプロジェクト（ヤギ主制度） | ヤギレンタル 山門牧場",
  description:
    "あなたも「ヤギ主（オーナー）」になりませんか？競走馬の馬主制度のように、ヤギの成長や暮らしを共に見守り、支え合う新しいオーナーシップ制度です。",
};

export default function MyGoatPage() {
  // プラン一覧データ（添削しやすいようにデータ構造化）
  const plans = [
    {
      name: "除草レンタルOKプラン",
      subtitle: "除草で活躍する姿を応援！",
      price: "月額 3,000円",
      period: "半年払い（18,000円）/ 年払い（36,000円）",
      features: [
        "【命名権】名札に名付けたお名前を記載",
        "地域の除草出張レンタル(短期)への出動を許容",
        "出張先での除草活動レポート（写真・動画）",
        "牧場での日常の様子も写真・動画でお届け",
      ],
      description:
        "普段は牧場で大切に管理しつつ、除草隊として外の現場で活躍することを応援・許容いただくプランです。",
    },
    {
      name: "ずっと牧場専属プラン",
      subtitle: "牧場でのんびり暮らすパートナー",
      price: "月額 4,000円",
      period: "半年払い（24,000円）/ 年払い（48,000円）",
      features: [
        "【命名権】名札に名付けたお名前を記載",
        "除草レンタル出張なし（牧場でのんびり過ごします）",
        "牧場での穏やかな日常を写真＆動画でお届け",
        "日々の成長・のんびり暮らしレポート",
      ],
      description:
        "外部への出張レンタルには出さず、鈴鹿の山門牧場でのんびり穏やかに暮らすヤギを見守るプランです。",
    },
    {
      name: "企業・SDGsスポンサープラン",
      subtitle: "企業の環境貢献・CSR・PRに",
      price: "要お問い合わせ",
      period: "（月額または年間スポンサー契約）",
      features: [
        "社内報・SNS・PR用素材（写真・動画）の提供",
        "社内共有・PR用の限定動画・活動レポート",
        "その他、ご希望に応じて対応",
      ],
      description:
        "除草ヤギのスポンサー企業として、SDGs推進・地域貢献・社内エンゲージメント向上に貢献します。",
    },
  ];

  // ヤギ主特典一覧
  const benefits = [
    {
      icon: "🏷️",
      title: "命名権（ネーミング）",
      description:
        "あなたの愛着ある名前をヤギに授与。特製名札にあなたの名付けた名前が刻まれます。",
    },
    {
      icon: "📸",
      title: "名札つき記念写真のお届け",
      description:
        "命名した名前が刻まれた名札をつけたヤギの晴れ姿を撮影し、オーナー様へ記念写真としてお届けします。",
    },
    {
      icon: "🎬",
      title: "写真・動画の定期配信",
      description:
        "牧場でのんびり過ごす日常や除草現場での元気な様子を、写真やショート動画で定期的にお届けします。",
    },
  ];

  // よくある質問
  const faqs = [
    {
      q: "ヤギ主制度とはどのような仕組みですか？",
      a: "競走馬の馬主制度のように、日々のお世話や健康管理、快適な環境づくりは山門牧場が行い、オーナー様には名付け親として、また家族のようにヤギの成長や日々の暮らしを共に見守り、支え合っていただく制度です。除草出張での活躍を応援するプランや、牧場でのんびり過ごす専属プランなど、ご希望に合わせた関わり方が選べます。",
    },
    {
      q: "自宅で一緒に暮らせなくてもオーナーになれますか？",
      a: "はい、もちろん可能です！「ヤギが好きでパートナーとして応援したいけれど、敷地や毎日の管理が難しい」という都会やマンションにお住まいの方でも、無理な負担なくパートナーとしてヤギとの絆を持っていただけます。",
    },
    {
      q: "「除草レンタルOK」と「ずっと牧場専属」プランの違いは何ですか？",
      a: "「除草レンタルOKプラン（月額3,000円）」は、地域の除草出張（短期）に出動することを許容いただき、外で元気に活躍する姿を写真や動画で応援するプランです。「ずっと牧場専属プラン（月額4,000円）」は出張レンタルには出さず、牧場内でのんびり穏やかに過ごすヤギの日常を見守るプランです。",
    },
    {
      q: "命名（名付け）や写真のお届けはどのように行われますか？",
      a: "オーナー様に愛着のあるお名前を決めていただき、その名前を記した特製名札をヤギにつけます。名札をつけたヤギの晴れ姿を撮影してオーナー様へお届けいたします。また、日々の元気な様子や成長記録も定期的に写真・動画付きでお届けします。",
    },
    {
      q: "牧場へ直接ヤギに会いに行ったり、ふれあうことはできますか？",
      a: "本制度は、ヤギたちの健康管理や防疫（感染症予防・ストレス軽減）を最優先にし、また遠方にお住まいの方でも公平にお楽しみいただけるよう、「写真・動画を通じたオンライン見守り」に特化した制度となっております。そのため、牧場現地での対面接触やふれあい体験等の提供は行っておりません。その分、普段のリラックスした表情や成長の瞬間を、写真やショート動画でたっぷりとお届けいたします。",
    },
    {
      q: "ヤギの体調不良や怪我の場合はどうなりますか？",
      a: "日常の健康管理・定期的な獣医師による健診・ワクチン接種などはすべて山門牧場が責任を持って大切に行い、オーナー様へも随時様子を共有いたします。なお、生き物ですので万が一やむを得ない怪我や病気となった際は、ヤギの健康と命を第一に考え、獣医師と相談の上で治療方針や対応を判断させていただく場合がございます。あらかじめご了承ください。",
    },
    {
      q: "法人・団体での加入や、福利厚生での利用はできますか？",
      a: "大歓迎です！SDGsの取り組みや社内報・公式SNSでのマスコットヤギとしてのPR動画活用など、企業の目的やご希望に応じて柔軟に対応いたします。",
    },
    {
      q: "支払い方法やサイクルについて教えてください。",
      a: "オーナー費用のお支払いは「銀行振込のみ」の対応となっております。運営コストを抑えてヤギたちが心地よく過ごせる環境づくりに充てるため、お支払いは「半年払い（6ヶ月分一括）」または「年払い（12ヶ月分一括）」の前払い振込とさせていただいております。",
    },
  ];

  return (
    <main className="py-16 md:py-24 px-6 bg-amber-50/40 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* ▼ ヘッダーイントロ */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm md:text-base font-bold px-4 py-1.5 rounded-full mb-4">
            <span>🌾</span>
            <span>新企画・オーナー制度</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-green-900 tracking-tight mb-6">
            マイヤギプロジェクト
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            馬主のように「自分のヤギ」を持つ喜びを。<br className="hidden sm:inline" />
            鈴鹿の自然の中で暮らすヤギのオーナー（ヤギ主）になって、<br className="hidden sm:inline" />
            ヤギの成長や暮らしを共に見守り、支え合う新しいオーナーシップ制度です。
          </p>
        </div>

        {/* ▼ 制度のコンセプト・馬主制度との比較ハイライト */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-green-100 mb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* 左側：テキスト（幅を広めに確保：7/12） */}
            <div className="lg:col-span-7">
              <span className="text-sm font-bold text-green-600 uppercase tracking-widest">
                CONCEPT
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-bold text-gray-900 mt-2 mb-5 leading-snug">
                <span className="block">『飼えない』を理由に諦めない。</span>
                <span className="block text-green-900">ヤギ好きのための新しい関わり方</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                「ヤギと一緒に暮らしてみたい」「愛着のあるパートナーを持ちたい」。そう思っても、広い敷地や小屋の確保、毎日のエサやりや糞尿の処理、病気やケガの健康管理など、個人やご家庭でヤギを管理し続けるのは非常にハードルが高いのが現実です。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                マイヤギプロジェクトは、<strong>「自分で管理できないけれど、ヤギとの暮らしや絆を持ちたい」</strong>という方のための制度です。競走馬の馬主のように、日々のお世話・健康管理・快適な環境づくりはすべて山門牧場が担当。あなたは「ヤギ主」として、無理な負担なく、写真や動画を通じてヤギの成長や日々の暮らしを家族のように見守り、支え合うことができます。
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-green-50 text-green-700 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border border-green-200">
                  🌱 毎日のお世話・健康管理は牧場におまかせ
                </span>
                <span className="bg-green-50 text-green-700 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border border-green-200">
                  🏡 自宅に専用の敷地や設備がなくてもOK
                </span>
                <span className="bg-green-50 text-green-700 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border border-green-200">
                  📱 写真・動画で成長を見守り
                </span>
              </div>
            </div>

            {/* 右側：画像（5/12で収まりよく配置） */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg h-72 lg:h-[380px] w-full">
              <Image
                src="/yagi_member_1v1.jpg"
                alt="元気に草を食むマイヤギ候補"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white">
                <p className="text-sm font-medium">山門牧場で大切に育てています</p>
              </div>
            </div>
          </div>
        </section>

        {/* ▼ ヤギ主の特別な特典 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              ヤギ主（オーナー）だけの特別な特典
            </h2>
            <p className="text-gray-600">
              オーナーとヤギの絆を深める、特別な体験をご用意しています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
                    {b.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ▼ オーナープラン（たたき台） */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
              PLAN
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              選べる3つのオーナープラン
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              個人の方から企業様まで、目的に合わせて参加できるプランをご用意しています。
              <span className="block text-xs text-gray-500 mt-1">
                ※料金や内容は検討中のたたき台です。ご意見・ご要望もぜひお寄せください。
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-gray-200 hover:border-green-300 hover:shadow-md transition relative"
              >
                <div>
                  <div className="text-sm font-semibold text-green-700 mb-1">{p.subtitle}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{p.name}</h3>

                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <div className="text-2xl font-black text-gray-900">{p.price}</div>
                    <div className="text-xs text-gray-500 mt-1">{p.period}</div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">{p.description}</p>

                  <div className="space-y-2.5 mb-8">
                    <p className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                      主な特典内容:
                    </p>
                    {p.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contact?service=my-goat&plan=${encodeURIComponent(p.name)}`}
                  className="w-full text-center py-3.5 px-4 rounded-xl font-bold text-sm bg-green-600 text-white hover:bg-green-700 transition shadow-sm"
                >
                  このプランについて相談する
                </Link>
              </div>
            ))}
          </div>

          {/* ▼ お支払い方法についての共通注記 */}
          <div className="mt-12 md:mt-16 bg-amber-50/90 border border-amber-200/80 rounded-2xl p-6 max-w-2xl mx-auto shadow-sm">
            <div className="flex items-center justify-center gap-2 text-amber-900 font-bold text-sm sm:text-base mb-2.5">
              <span>🏦</span>
              <span>お支払い方法について（全プラン共通）</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 text-center leading-relaxed">
              オーナー費用のお支払いは<strong>【銀行振込のみ】</strong>の対応となっております。<br className="hidden sm:inline" />
              お支払いサイクルは<strong>「半年払い（6ヶ月分一括）」</strong>または<strong>「年払い（12ヶ月分一括）」</strong>の前払い振込となります。
            </p>
          </div>
        </section>

        {/* ▼ オーナーシップの流れ */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            ヤギ主になるまでの流れ
          </h2>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">お問い合わせ・相談</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                フォームよりお気軽にご連絡ください。制度の詳細やご質問にお答えします。
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ヤギの選定</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                写真やプロフィール、日々のショート動画からあなたのパートナーヤギを選定。
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">命名・写真のお届け</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                あなただけの素敵な名前を命名！名札をつけたヤギの記念写真をオーナー様へお届けします。
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
                4
              </div>
              <h3 className="font-bold text-gray-900 mb-2">成長・暮らしを見守る</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                定期的に届く写真や動画レポートを通じて、遠く離れていても愛ヤギの元気な成長を見守り支え合います。
              </p>
            </div>
          </div>
        </section>

        {/* ▼ よくある質問 (FAQ) */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              よくあるご質問（FAQ）
            </h2>
            <p className="text-gray-600 text-sm">
              制度についてよくいただくご質問をまとめました。
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-3 font-bold text-green-900 mb-2">
                  <span className="text-green-600 text-lg">Q.</span>
                  <span>{faq.q}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-600 text-sm pl-7 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ▼ たたき台コメント＆お問い合わせCTA */}
        <section className="bg-gradient-to-br from-green-800 to-green-950 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <div className="inline-block bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-green-400/30">
            先行エントリー・アイデア募集中
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            「こんなヤギ主になりたい！」をお聞かせください
          </h2>
          <p className="text-green-100 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            マイヤギプロジェクトは現在、皆様のご意見を取り入れながら制度設計を進めております。
            「こんな特典があったら嬉しい」「このプランに興味がある」など、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact?service=my-goat"
              className="bg-white text-green-900 font-bold px-8 py-4 rounded-full text-base shadow-lg hover:bg-green-50 transition transform hover:-translate-y-0.5"
            >
              プロジェクトについて問い合わせる
            </Link>
            <Link
              href="/service"
              className="bg-green-700/60 hover:bg-green-700 text-white font-medium px-8 py-4 rounded-full text-base border border-green-500/40 transition"
            >
              通常のヤギレンタルはこちら
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
