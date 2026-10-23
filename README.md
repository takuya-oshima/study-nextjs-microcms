# study-nextjs-microcms

Next.js（App Router）とmicroCMSを使ったWebサイト制作の学習用リポジトリです。
[study-nextjs-microcms.vercel.app](https://study-nextjs-microcms.vercel.app)

書籍『[Next.js＋ヘッドレスCMSではじめる！ かんたんモダンWebサイト制作入門](https://www.amazon.co.jp/dp/4798183660)』（柴田和祈 著、翔泳社）のチュートリアルを参考に制作しました。
企業サイトを想定し、ニュース・メンバー紹介・お問い合わせの各ページを実装しています。
ここで学んだ構成をもとに、[ポートフォリオサイト](https://github.com/takuya-oshima/portfolio)を制作しています。

## 使用技術

Next.js 14（App Router）/ React / TypeScript / CSS Modules / microCMS / HubSpot

## 実装した機能

- ニュースの一覧・詳細ページ（カテゴリー別一覧、ページネーション、キーワード検索）
- メンバー紹介ページ（microCMSから取得）
- お問い合わせフォーム（Server Actionsでの入力チェック、HubSpotへの送信）
- ISRによるページの再生成（60秒ごと）と、microCMSの下書きプレビュー
- sitemap.xml / robots.txtの生成

## 学んだこと

- App Routerでのデータ取得と、SSR / ISRの使い分け
- ヘッドレスCMSのデータに型を定義して扱う方法
- Server Actionsを使ったフォーム処理
