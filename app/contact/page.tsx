'use client'; // 👈 1. これが「このページは動きますよ」という宣言

import { useState } from 'react'; // 👈 2. 状態管理の機能をインポート
// ▼ 1. 作ったサーバーアクションをインポート
import { submitContactData } from '@/actions/contact';

export default function ContactPage() {
  // ▼ 3. useState（入力内容を覚えておく箱）を準備
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // ▼ 送信中かどうかを管理するフラグ（おまけ）
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 送信ボタンが押されたときの処理
  const handleSubmit = async (e: React.FormEvent) => { // asyncをつける
    e.preventDefault();
    setIsSubmitting(true); // 送信ボタンを無効化（二重送信防止）

    try {
      // ▼ 2. ここでサーバーのアクションを呼び出す！
      // 　（ブラウザからサーバーへ電話をかけるイメージ）
      const result = await submitContactData(name, email, message);

      if (result.success) {
        alert('サーバーへの送信に成功しました！');
        // フォームを空にする
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      alert('送信に失敗しました...');
    } finally {
      setIsSubmitting(false); // ボタンを復活させる
    }
  };

  return (
    <main className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">お問い合わせ</h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">
        {/* お名前入力欄 */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            お名前
          </label>
          <input
            id="name"
            type="text"
            className="w-full border border-gray-300 p-3 rounded-lg"
            placeholder="山田 太郎"
            value={name} // 箱の中身を表示
            onChange={(e) => setName(e.target.value)} // 入力するたびに箱の中身を更新
            required
          />
        </div>

        {/* メールアドレス入力欄 */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 p-3 rounded-lg"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* メッセージ入力欄 */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            className="w-full border border-gray-300 p-3 rounded-lg h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting} // 送信中はクリック不可に
          className={`w-full text-white font-bold py-3 rounded-lg transition ${isSubmitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
            }`}
        >
          {isSubmitting ? '送信中...' : '送信する'}
        </button>
      </form>
    </main>
  );
}