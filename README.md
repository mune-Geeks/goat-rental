# 山門牧場 ヤギレンタル公式サイト (Goat Rental)

三重県鈴鹿市の「山門牧場」が提供する、ヤギレンタルサービスの公式ウェブサイトです。
草刈りやアニマルセラピー、イベントなどで活躍するヤギのレンタル情報を発信し、サイト上から簡単にお問い合わせができるようになっています。

## 主な機能

- **サービス紹介:** レンタルの概要、料金案内などの情報提供。
- **アクセス・会社概要:** 牧場へのアクセス情報や運営者情報。
- **お問い合わせフォーム:** Web上からのお問い合わせを、LINE Messaging APIを利用して管理者のLINEに直接通知します。

## 技術スタック

- **フレームワーク:** [Next.js](https://nextjs.org/) (App Router)
- **言語:** TypeScript
- **スタイリング:** Tailwind CSS
- **外部API:** LINE Messaging API (お問い合わせ通知用)

## 開発環境のセットアップ

### 1. リポジトリのクローンとパッケージインストール

```bash
git clone <repository-url>
cd goat-rental
npm install
```

### 2. 環境変数の設定

プロジェクトルートに `.env.local` を作成し、以下の環境変数を設定してください。
これらはLINEでお問い合わせを受け取るために必要です。

```env
LINE_CHANNEL_ACCESS_TOKEN=your_line_channel_access_token
LINE_USER_ID=your_line_user_id
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## デプロイについて

このプロジェクトは Vercel やその他の Node.js 対応ホスティングサービスで簡単にデプロイできます。
デプロイ環境でも必ず環境変数 (`LINE_CHANNEL_ACCESS_TOKEN`, `LINE_USER_ID`) を設定してください。
