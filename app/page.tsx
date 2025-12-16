// app/page.tsx

// これは、サイトのルート / にアクセスしたときに表示されるコンポーネントです。
export default function Home() {
  return (
    <main>
      {/* ヒーローセクション（メインビジュアル部分） */}
      <section className="bg-green-100 py-20 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          癒やしのヤギ、お届けします
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          除草からアニマルセラピーまで。<br />
          あなたの日常に、ちょっとした「メェ〜」を。
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition">
          ヤギを見る
        </button>
      </section>

      {/* 特徴セクション */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          ヤギレンタルの魅力
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">🌱 エコな除草</h3>
            <p className="text-gray-600">
              機械を使わないので騒音がなく、排気ガスも出ません。環境に優しい除草方法です。
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">💚 心の癒やし</h3>
            <p className="text-gray-600">
              見ているだけで癒やされるヤギたち。社員のリフレッシュや、老人ホームでのセラピーに最適です。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}