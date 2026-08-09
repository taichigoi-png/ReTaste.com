# Re. Taste

「もったいないを、おいしいへ。」を掲げる、規格外農産物に新しい価値を生み出す商品開発プロジェクトです。

第一号商品として、規格外みかん由来のピールを生地に練り込んだ「みかんラスク」を開発しています。

## Website

[Re. Taste 公式サイト](https://re-taste-mikan-rusk.jdrsk.chatgpt.site/)

## GitHub Pages で公開する

このプロジェクトはGitHub Pagesでサイトを公開できます。GitHubへコードを送ると、自動で公開用ファイルを作成してデプロイします。

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

GitHub のログイン画面が出た場合は、画面の案内に従ってログインしてください。最初の送信後、GitHubリポジトリの `Settings` > `Pages` で、公開元を `GitHub Actions` に変更します。数分後、`https://ユーザー名.github.io/リポジトリ名/` で公開されます。

### 公開前の確認

このリポジトリには、サイトに表示している電話番号、メールアドレス、代表写真、商品画像が含まれます。GitHub リポジトリを `Public` にすると、これらも誰でも閲覧できる状態になります。

## Cloudflare Pages で公開する

GitHubを使わずに、Cloudflare Pagesへ直接アップロードできます。

1. [Cloudflare](https://dash.cloudflare.com/sign-up) の無料アカウントを作成してログインします。
2. このプロジェクトで次を実行し、Pages用の公開フォルダを作成します。

```bash
npm run build:pages
```

3. Cloudflareの `Workers & Pages` を開き、`Create application` > `Get started` > `Drag and drop your files` を選びます。
4. プロジェクト名に `re-taste` を入力します。
5. 作成された `pages-dist` フォルダをアップロードして、`Deploy site` を押します。

公開後は `https://re-taste.pages.dev` のようなURLが発行されます。独自ドメインを持っている場合は、Cloudflare Pagesの `Custom domains` から接続できます。

この方法は静的な公開用です。お問い合わせフォームは外部メール送信サービスを利用しているため、そのまま動作します。

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
