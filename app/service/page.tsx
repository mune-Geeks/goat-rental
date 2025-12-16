export default function ServicePage() {
  return (
    <main className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">サービス・料金</h1>

      {/* 料金プラン */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-500 inline-block">
          レンタル料金
        </h2>
        <div className="bg-white border rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-50">
                <th className="p-4 border-b">プラン</th>
                <th className="p-4 border-b">期間</th>
                <th className="p-4 border-b">料金（税込）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b">お試し除草</td>
                <td className="p-4 border-b">1週間</td>
                <td className="p-4 border-b">¥15,000</td>
              </tr>
              <tr>
                <td className="p-4 border-b">しっかり除草</td>
                <td className="p-4 border-b">1ヶ月</td>
                <td className="p-4 border-b">¥50,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 流れ */}
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-500 inline-block">
          ご利用の流れ
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h3 className="font-bold">お問い合わせ</h3>
              <p className="text-gray-600">フォームより希望の日程と場所をご連絡ください。</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h3 className="font-bold">下見・お見積り</h3>
              <p className="text-gray-600">ヤギが安全に過ごせる場所かスタッフが確認します。</p>
            </div>
          </div>
          {/* ...省略... */}
        </div>
      </section>
    </main>
  );
}