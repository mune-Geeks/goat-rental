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
            <h2 className="text-xl font-bold mb-4 border-b pb-2">会社情報</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-bold text-gray-600">店名</dt>
                <dd>山門牧場（ヤマカドボクジョウ）</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-600">住所</dt>
                <dd>
                  〒513-0836<br />
                  三重県鈴鹿市国府町2291<br />
                  （ヤギ牧場併設）
                </dd>
              </div>
              <div>
                <dt className="font-bold text-gray-600">営業時間</dt>
                <dd>9:00 〜 18:00</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 border-b pb-2">運営者</h2>
            <p className="text-gray-600">
              山門牧場<br />
              吉田 常嘉
            </p>
          </section>
        </div>

        {/* 右側：Googleマップ */}
        <div className="h-64 md:h-auto bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9439.718921799813!2d136.51270348694732!3d34.85730616645298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDUxJzI5LjgiTiAxMzbCsDMwJzQ1LjMiRQ!5e0!3m2!1sja!2sjp!4v1765908575507!5m2!1sja!2sjp"
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