# Re. Taste

「もったいないを、おいしいへ。」を掲げる、規格外農産物に新しい価値を生み出す商品開発プロジェクトです。

第一号商品として、規格外みかん由来のピールを生地に練り込んだ「みかんラスク」を開発しています。

## Website

[Re. Taste 公式サイト](https://re-taste-mikan-rusk.jdrsk.chatgpt.site/)

## GitHub で公開する

このプロジェクトは GitHub にソースコードを公開できます。現在のサイトは Cloudflare Worker を使って動いているため、GitHub はコードの公開・管理先として使い、サイトの公開URLは上記のまま使う方法がおすすめです。

### 必要なもの

- GitHub アカウント
- GitHub 上の空のリポジトリ
- このプロジェクトのフォルダ

### 手順

1. [GitHub](https://github.com/new) で `re-taste` などの名前の新しいリポジトリを作成します。
2. 公開したい場合は `Public` を選びます。
3. `Add a README file`、`.gitignore`、`Choose a license` は選ばず、空のまま作成します。
4. 作成後に表示されるリポジトリURLをコピーします。例: `https://github.com/ユーザー名/re-taste.git`
5. このフォルダで次のコマンドを実行します。

```bash
git remote add origin https://github.com/ユーザー名/re-taste.git
git push -u origin main
```

GitHub のログイン画面が出た場合は、画面の案内に従ってログインしてください。リポジトリURLをこのチャットに送ってもらえれば、接続と公開までこちらで進められます。

### 公開前の確認

このリポジトリには、サイトに表示している電話番号、メールアドレス、代表写真、商品画像が含まれます。GitHub リポジトリを `Public` にすると、これらも誰でも閲覧できる状態になります。

## 開発

必要環境: Node.js 22 以上

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

### 確認用コマンド

```bash
npm run build
npm run lint
```

`main` ブランチへ更新するたびに、GitHub Actions がサイトのビルドを自動で確認します。

## 主なページ

- `/` トップページ
- `/shop` 販売ページ
- `/coming-soon` 販売開始前のお知らせ
- `/contact` お問い合わせ

## 技術

- React
- vinext
- Cloudflare Workers
- TypeScript
