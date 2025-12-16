import Image from "next/image"; // ← これが魔法の部品

export default function AboutGoatPage() {
  return (
    <main className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">ヤギの生態について</h1>

      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* ▼ 画像エリア */}
        <div className="w-full md:w-1/2">
          <Image
            src="/goat.jpg"       // publicフォルダからのパス
            alt="草を食べるヤギ"    // 目の不自由な方やSEOのための説明
            width={600}           // 元画像の横幅（目安でOK）
            height={400}          // 元画像の高さ（目安でOK）
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* ▼ 文章エリア */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">性格はとても穏やか</h2>
          <p className="text-gray-600 mb-4">
            ヤギは本来、群れで生活する動物なので、寂しがり屋で人懐っこい性格をしています。
            除草作業中も、人間が近づくと寄ってくることがあります。
          </p>
          <h2 className="text-2xl font-bold mb-4">驚異の除草能力</h2>
          <p className="text-gray-600">
            1日に体重の約10%もの草を食べます。特にクズやイタドリなどの厄介な雑草が大好物。
            急な斜面でも軽々と移動して除草してくれます。
          </p>
        </div>
      </div>
    </main>
  );
}