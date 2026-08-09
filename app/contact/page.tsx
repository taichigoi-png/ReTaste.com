export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="site-header" aria-label="Re. Taste">
        <a className="brand" href="/" aria-label="Re. Taste トップへ">
          <img src="/re-taste-logo-transparent.png" alt="" />
          <span>Re. Taste</span>
        </a>
        <nav aria-label="サイト内メニュー">
          <a href="/">Top</a>
          <a href="/#product">Product</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="contact-hero">
        <div className="contact-title">
          <p className="eyebrow">CONTACT</p>
          <h1>おいしい未来を、<br />一緒につくる。</h1>
          <p>企業・団体・メディア・イベント主催者の方からのご相談をお待ちしています。</p>
          <a className="phone-link" href="tel:07091321609">070-9132-1609</a>
        </div>
        <img src="/mikan-rusk-wrapped.png" alt="個包装されたみかんラスク" />
      </section>

      <section className="contact-form-section">
        <div className="contact-form-intro">
          <p className="eyebrow">SEND A MESSAGE</p>
          <h2>お問い合わせ</h2>
          <p>内容を確認後、Re. Tasteよりご連絡します。</p>
        </div>
        <form action="https://formsubmit.co/taichi.goi@gmail.com" className="contact-form contact-form-light" method="POST">
          <input name="_subject" type="hidden" value="Re. Taste ホームページからのお問い合わせ" />
          <input name="_next" type="hidden" value="https://re-taste-mikan-rusk.jdrsk.chatgpt.site/contact/thanks" />
          <input name="_template" type="hidden" value="table" />
          <input name="_honey" type="text" className="honeypot" tabIndex={-1} autoComplete="off" />
          <label>お名前<input name="お名前" required type="text" placeholder="山田 太郎" /></label>
          <label>メールアドレス<input name="メールアドレス" required type="email" placeholder="hello@example.com" /></label>
          <label>お問い合わせ種別
            <select name="お問い合わせ種別" defaultValue="" required>
              <option value="" disabled>選択してください</option>
              <option>協力・協賛について</option>
              <option>取材について</option>
              <option>販売場所について</option>
              <option>その他</option>
            </select>
          </label>
          <label>お問い合わせ内容<textarea name="お問い合わせ内容" required placeholder="協力内容やご相談内容をご記入ください" /></label>
          <button type="submit">送信する</button>
        </form>
      </section>
    </main>
  );
}
