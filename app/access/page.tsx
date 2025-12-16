import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アクセス・会社概要 | ヤギレンタル",
  description: "ヤギレンタルの店舗情報と運営会社について",
};

export default function AccessPage() {
  return (
    <main className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">アクセス・会社概要</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* 左側：会社情報 */}
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-4 border-b pb-2">店舗情報</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-bold text-gray-600">店名</dt>
                <dd>ヤギレンタル 東京本店</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-600">住所</dt>
                <dd>
                  〒100-0005<br />
                  東京都千代田区丸の内１丁目<br />
                  （ヤギ牧場併設）
                </dd>
              </div>
              <div>
                <dt className="font-bold text-gray-600">営業時間</dt>
                <dd>9:00 〜 18:00（定休日：水曜日）</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 border-b pb-2">運営会社</h2>
            <p className="text-gray-600">
              株式会社ヤギ・コーポレーション<br />
              代表取締役：八木 太郎
            </p>
          </section>
        </div>

        {/* 右側：Googleマップ */}
        <div className="h-64 md:h-auto bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.82803077274!2d139.76454987606622!3d35.68123617258712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f7007%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1709600000000!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '300px' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}