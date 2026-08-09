export default function ShopPage() {
  return (
    <main className="shop-page">
      <header className="site-header" aria-label="Re. Taste">
        <a className="brand" href="/" aria-label="Re. Taste トップへ">
          <img src="/re-taste-logo-transparent.png" alt="" />
          <span>Re. Taste</span>
        </a>
        <nav aria-label="サイト内メニュー">
          <a href="/">Top</a>
          <a href="/#product">Product</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="shop-hero">
        <div className="shop-hero-copy">
          <p className="eyebrow">SHOP / FIRST COLLECTION</p>
          <h1>みかんラスク</h1>
          <p>みかんの甘みと、ピールのほろ苦さ。<br />サクッと軽く、あとから香る一枚です。</p>
          <p className="shop-price">1袋　150円程度 <span>（2枚入り）</span></p>
          <a className="shop-button" href="/coming-soon">販売開始を待つ</a>
        </div>
        <img src="/mikan-rusk-closeup.png" alt="みかんピールが見える薄切りラスク" />
      </section>

      <section className="shop-details">
        <div><span>01</span><h2>みかんピールを<br />生地に練り込む。</h2></div>
        <div><span>02</span><h2>薄切りラスク<br />2枚入り。</h2></div>
        <div><span>03</span><h2>持ち運びやすい<br />個包装。</h2></div>
      </section>

      <section className="shop-image-band">
        <img src="/mikan-rusk-wrapped.png" alt="個包装されたみかんラスク" />
        <div><p className="eyebrow">FIRST RELEASE</p><h2>学校行事・保護者会から。<br />少しずつ、地域へ。</h2><p>初回は200〜300袋程度を予定しています。販売開始のお知らせは、COMING SOONページでご案内します。</p><a href="/coming-soon">COMING SOONを見る</a></div>
      </section>
    </main>
  );
}
