export default function ComingSoonPage() {
  return (
    <main className="coming-page">
      <header className="site-header" aria-label="Re. Taste">
        <a className="brand" href="/" aria-label="Re. Taste トップへ">
          <img src="/re-taste-logo-transparent.png" alt="" />
          <span>Re. Taste</span>
        </a>
        <nav aria-label="サイト内メニュー">
          <a href="/">Top</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <section className="coming-content">
        <div>
          <p className="eyebrow">COMING SOON</p>
          <h1>そのみかん、もうすぐ<br />お届けします。</h1>
          <p>みかんラスクは、いま商品化に向けて準備中です。まずは学校行事・保護者会での販売から始めます。</p>
          <a className="coming-link" href="/contact">販売・協力のご相談はこちら</a>
        </div>
        <img src="/mikan-rusk-table.png" alt="みかんラスクを割って楽しむ様子" />
      </section>
    </main>
  );
}
