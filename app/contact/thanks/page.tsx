export default function ContactThanksPage() {
  return (
    <main className="contact-page thanks-page">
      <header className="site-header" aria-label="Re. Taste">
        <a className="brand" href="/" aria-label="Re. Taste トップへ">
          <img src="/re-taste-logo-transparent.png" alt="" />
          <span>Re. Taste</span>
        </a>
      </header>
      <section className="thanks-content">
        <p className="eyebrow">THANK YOU</p>
        <h1>お問い合わせを<br />受け付けました。</h1>
        <p>メッセージをお送りいただき、ありがとうございます。内容を確認後、ご連絡します。</p>
        <a className="thanks-link" href="/">トップへ戻る</a>
      </section>
    </main>
  );
}
