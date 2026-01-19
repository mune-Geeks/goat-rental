'use client';

import { useState } from 'react';
import { submitContactData } from '@/actions/contact';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // 👈 追加：電話番号の状態管理
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ▼ ここで phone も一緒にサーバーへ送る
      const result = await submitContactData(name, email, phone, message);

      if (result.success) {
        alert('送信しました！担当者よりお電話にてご連絡いたします。');
        setName('');
        setEmail('');
        setPhone(''); // 👈 クリアする
        setMessage('');
      }
    } catch (error) {
      alert('送信に失敗しました...');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center text-green-800">お問い合わせ</h1>
      <p className="text-center text-gray-600 mb-8">
        ご不明な点やお見積りのご相談など、お気軽にお問い合わせください。<br />
        内容を確認後、担当者よりお電話にてご連絡させていただきます。
      </p>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md max-w-xl mx-auto border border-gray-100">

        {/* お名前 */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            お名前 <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-500 transition"
            placeholder="例：山田 太郎"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* ▼ 追加：電話番号 */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            電話番号 <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-500 transition"
            placeholder="例：09012345678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <p className="text-sm text-gray-500 mt-1">※日中連絡のつく番号をご記入ください</p>
        </div>

        {/* メールアドレス */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-500 transition"
            placeholder="例：taro@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>



        {/* お問い合わせ内容（プレースホルダー追加） */}
        <div className="mb-8">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            お問い合わせ内容 <span className="text-red-500 text-sm">*</span>
          </label>
          <textarea
            id="message"
            className="w-full border border-gray-300 p-3 rounded-lg h-40 focus:outline-none focus:border-green-500 transition"
            // ▼ ここにご要望のプレースホルダーを入れました
            placeholder="例：自宅の庭（約50坪）の草刈りをお願いしたいです。希望時期は来月の初旬頃です。"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-white font-bold py-4 rounded-full shadow-lg transition transform hover:-translate-y-1 ${isSubmitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
            }`}
        >
          {isSubmitting ? '送信中...' : 'この内容で送信する'}
        </button>
      </form>
    </main>
  );
}