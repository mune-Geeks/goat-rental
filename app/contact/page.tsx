'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { sendContact } from '@/actions/contact';

function ContactForm() {
  const searchParams = useSearchParams();

  // URLクエリパラメータから初期値を取得
  const initialService = searchParams.get('service');
  const initialPlan = searchParams.get('plan');

  const [serviceType, setServiceType] = useState('ヤギレンタル');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [heardFrom, setHeardFrom] = useState('');
  const [rentalPeriod, setRentalPeriod] = useState('');
  const [ownerPlan, setOwnerPlan] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // URLパラメータに応じた初期選択
  useEffect(() => {
    if (initialService === 'my-goat' || initialService === 'マイヤギプロジェクト') {
      setServiceType('マイヤギプロジェクト');
      if (initialPlan) {
        setOwnerPlan(initialPlan);
      }
    } else if (initialService === 'rental' || initialService === 'ヤギレンタル') {
      setServiceType('ヤギレンタル');
    } else if (initialService === 'other' || initialService === 'その他') {
      setServiceType('その他');
    }
  }, [initialService, initialPlan]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendContact({
        name,
        phone,
        heardFrom,
        serviceType,
        rentalPeriod: serviceType === 'ヤギレンタル' ? rentalPeriod : undefined,
        ownerPlan: serviceType === 'マイヤギプロジェクト' ? ownerPlan : undefined,
        message,
      });

      if (result.success) {
        alert('送信しました！担当者よりお電話またはメールにてご連絡いたします。');
        setName('');
        setPhone('');
        setHeardFrom('');
        setRentalPeriod('');
        setOwnerPlan('');
        setMessage('');
      } else {
        alert(result.message || '送信に失敗しました。時間をおいて再度お試しください。');
      }
    } catch (error) {
      alert('送信に失敗しました...');
    } finally {
      setIsSubmitting(false);
    }
  };

  // サービスタイプに応じたメッセージ欄プレースホルダー
  const getMessagePlaceholder = () => {
    if (serviceType === 'マイヤギプロジェクト') {
      return '例：ずっと牧場専属プランに興味があります。実際にヤギたちを見学することは可能でしょうか？';
    }
    if (serviceType === 'その他') {
      return '例：牧場への見学や取材について相談したいです。';
    }
    return '例：自宅の庭（約50坪）の草刈りをお願いしたいです。希望時期は来月の初旬頃です。';
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-3xl shadow-md max-w-xl mx-auto border border-gray-100">
      
      {/* 1. お問い合わせ項目（サービスの選択） */}
      <div className="mb-8">
        <label className="block text-gray-800 font-bold mb-3 text-base">
          お問い合わせ内容をお選びください <span className="text-red-500 text-sm">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { id: 'ヤギレンタル', label: 'ヤギレンタル', desc: '除草出張・管理' },
            { id: 'マイヤギプロジェクト', label: 'マイヤギ', desc: 'オーナー制度' },
            { id: 'その他', label: 'その他', desc: 'ご質問・ご相談' },
          ].map((item) => {
            const isSelected = serviceType === item.id;
            return (
              <label
                key={item.id}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border-2 cursor-pointer transition text-center ${
                  isSelected
                    ? 'border-green-600 bg-green-50/70 text-green-900 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="serviceType"
                  value={item.id}
                  checked={isSelected}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="sr-only"
                />
                <span className="font-bold text-sm sm:text-base">{item.label}</span>
                <span className="text-[11px] text-gray-500 mt-0.5">{item.desc}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 2. サービスに応じた可変入力項目 */}
      {serviceType === 'ヤギレンタル' && (
        <div className="mb-6 bg-green-50/40 p-4 sm:p-5 rounded-2xl border border-green-100 transition">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="rentalPeriod">
            希望レンタル期間
          </label>
          <input
            id="rentalPeriod"
            type="text"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-green-500 bg-white transition"
            placeholder="例：1週間、1ヶ月など"
            value={rentalPeriod}
            onChange={(e) => setRentalPeriod(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1.5">
            ※決まっていない場合は空欄でも構いません
          </p>
        </div>
      )}

      {serviceType === 'マイヤギプロジェクト' && (
        <div className="mb-6 bg-green-50/40 p-4 sm:p-5 rounded-2xl border border-green-100 transition">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="ownerPlan">
            ご希望のオーナープラン
          </label>
          <select
            id="ownerPlan"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-green-500 bg-white transition text-gray-700"
            value={ownerPlan}
            onChange={(e) => setOwnerPlan(e.target.value)}
          >
            <option value="">-- プランを選択してください --</option>
            <option value="除草レンタルOKプラン（月額3,000円）">除草レンタルOKプラン（月額 3,000円）</option>
            <option value="ずっと牧場専属プラン（月額4,000円）">ずっと牧場専属プラン（月額 4,000円）</option>
            <option value="企業・SDGsスポンサープラン">企業・SDGsスポンサープラン</option>
            <option value="未定・相談して決めたい">未定・相談して決めたい</option>
          </select>
          <p className="text-xs text-gray-500 mt-1.5">
            ※現在検討中のプランやご希望をお選びください
          </p>
        </div>
      )}

      {/* 3. お名前 */}
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          お名前 <span className="text-red-500 text-sm">*</span>
        </label>
        <input
          id="name"
          type="text"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-green-500 transition"
          placeholder="例：山田 太郎"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* 4. 電話番号 */}
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
          電話番号 <span className="text-red-500 text-sm">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-green-500 transition"
          placeholder="例：09012345678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <p className="text-xs text-gray-500 mt-1">※日中連絡のつく番号をご記入ください</p>
      </div>

      {/* 5. 当サービスを知った経緯 */}
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="heardFrom">
          当サービスを何でお知りになりましたか？ <span className="text-red-500 text-sm">*</span>
        </label>
        <select
          id="heardFrom"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-green-500 transition text-gray-700"
          value={heardFrom}
          onChange={(e) => setHeardFrom(e.target.value)}
          required
        >
          <option value="" disabled>-- 選択してください --</option>
          <option value="知人から">知人から</option>
          <option value="Instagramから">Instagramから</option>
          <option value="TikTokから">TikTokから</option>
          <option value="Web検索から">Web検索から</option>
          <option value="その他">その他</option>
        </select>
      </div>

      {/* 6. お問い合わせ内容 */}
      <div className="mb-8">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
          お問い合わせ内容 <span className="text-red-500 text-sm">*</span>
        </label>
        <textarea
          id="message"
          className="w-full border border-gray-300 p-3 rounded-xl h-36 focus:outline-none focus:border-green-500 transition"
          placeholder={getMessagePlaceholder()}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full text-white font-bold py-4 rounded-full shadow-lg transition transform hover:-translate-y-0.5 ${
          isSubmitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {isSubmitting ? '送信中...' : 'この内容で送信する'}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="py-16 md:py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-green-900">
        お問い合わせ
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
        ヤギレンタル・マイヤギプロジェクトなど、お気軽にお問い合わせください。<br />
        内容を確認後、担当者よりご連絡させていただきます。
      </p>

      <Suspense fallback={<div className="text-center py-12 text-gray-500">読み込み中...</div>}>
        <ContactForm />
      </Suspense>
    </main>
  );
}