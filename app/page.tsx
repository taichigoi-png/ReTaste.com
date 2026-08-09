const statusItems = [
  "企画",
  "OEM相談",
  "試作",
  "パッケージ制作",
  "資金調達",
  "製造",
  "販売",
];

const supportItems = [
  "規格外みかん・みかんピールの提供",
  "原材料やパッケージ印刷の支援",
  "商品開発・製造へのアドバイス",
  "販売場所や広報での協力",
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Re. Taste">
        <a className="brand" href="#top" aria-label="Re. Taste トップへ">
          <img src="/re-taste-logo-transparent.png" alt="" />
          <span>Re. Taste</span>
        </a>
        <nav aria-label="サイト内メニュー">
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#status">Status</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Mikan rusk / first collection</p>
          <h1 id="hero-title">そのみかん、<br />捨てるにはおいしすぎる。</h1>
          <p className="lead">
            規格外みかん由来のピールを、生地にたっぷり練り込んだ、軽やかなみかんラスク。ひと口ごとに、甘みとほろ苦さがほどけます。
          </p>
          <div className="hero-actions" aria-label="主なリンク">
            <a className="button primary" href="#product">みかんラスクを見る</a>
            <a className="button secondary" href="#support">協力について</a>
          </div>
        </div>
        <div className="hero-media">
          <img src="/mikan-rusk-hero.png" alt="みかんとみかんピールを添えた薄切りラスク" />
          <div className="hero-note">
            <span>01</span>
            <p>規格外みかんから<br />新しいおいしさを。</p>
          </div>
        </div>
      </section>

      <section className="intro-band" aria-label="Re. Tasteの考え方">
        <p>もったいないを、<strong>おいしいへ。</strong><span>理由より先に、また食べたいと思える味を。</span></p>
      </section>

      <section className="gallery-strip" aria-label="みかんラスクのイメージ">
        <figure className="gallery-card gallery-card-large reveal"><img src="/mikan-rusk-closeup.png" alt="みかんピールが見える薄切りラスク" /></figure>
        <figure className="gallery-card reveal"><img src="/mikan-rusk-wrapped.png" alt="個包装されたみかんラスク" /></figure>
        <figure className="gallery-card reveal"><img src="/mikan-rusk-table.png" alt="ラスクを割って楽しむ様子" /></figure>
      </section>

      <section className="section two-column" id="about">
        <div>
          <p className="eyebrow">ABOUT Re. Taste</p>
          <h2>規格外を、価値の入り口に。</h2>
        </div>
        <div className="section-text">
          <p>Re. Tasteは、形や大きさ、見た目の理由で通常販売されにくい農産物に、新しい商品としての価値を生み出す活動です。</p>
          <p>「見た目が規格外だからといって、味や価値まで規格外ではない」。そのことを、説明だけでなく実際の商品を通して伝えていきます。</p>
          <figure className="about-photo">
            <img src="/mikan-orchard.png" alt="実ったみかんが並ぶみかん畑" />
          </figure>
        </div>
      </section>

      <section className="section product-section" id="product">
        <div className="product-intro">
          <div className="section-heading">
            <p className="eyebrow">OUR PRODUCT / 01</p>
            <h2>第一号商品、<br />みかんラスク。</h2>
          </div>
          <p className="product-description">みかんを主役に、砂糖とバターは強くしすぎない。香りはしっかり、後味はほろ苦く。サクッと軽いのに、噛むほどみかんが広がる一枚を目指しています。</p>
        </div>
        <div className="product-layout">
          <article className="product-feature">
            <p className="product-number">01 / MIKAN RUSK</p>
            <h3>生地に練り込む、<br />まっすぐなみかんの香り。</h3>
            <p>表面に付けるのではなく、みかんピールを生地に練り込みます。だから、崩れにくく、ラスクのどこをかじっても自然な風味が届く。</p>
          </article>
          <div className="product-right">
            <img className="product-process-image" src="/mikan-peel-process.png" alt="みかんピールを生地に練り込む様子" />
            <dl className="product-specs">
              <div><dt>INGREDIENT</dt><dd>規格外みかん由来の<br />みかんピール</dd></div>
              <div><dt>TEXTURE</dt><dd>サクッと軽く、<br />あとから広がる香り</dd></div>
              <div><dt>PACK</dt><dd>薄切りラスク 2枚入り<br />持ち運びやすい個包装</dd></div>
              <div><dt>PRICE</dt><dd>1袋 150円程度を予定</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section split-band" id="why">
        <div>
          <p className="eyebrow">WHY MIKAN?</p>
          <h2>規格外でも、おいしさは変わらない。</h2>
          <img className="origin-image" src="/mikan-orchard.png" alt="実ったみかんが並ぶみかん畑" />
        </div>
        <p>規格外農産物は、味ではなく見た目の条件で選ばれにくいことがあります。Re. Tasteは「食品ロスだから」ではなく、まず普通においしそうと思える商品をつくり、その背景として規格外みかんの価値を届けます。</p>
      </section>

      <section className="section story-section">
        <div className="story-image founder-image reveal"><img src="/taichi-goi-founder.jpg" alt="Re. Taste代表 五井泰地" /></div>
        <div>
          <p className="eyebrow">PROJECT FOUNDER</p>
          <h2>おいしさから、<br />価値を変えていく。</h2>
          <p className="founder-name">代表　五井 泰地 <span>（ゴイ タイチ）</span></p>
          <p>Re. Tasteは、見た目だけで選ばれにくい農産物に、もう一度選ばれる理由をつくるプロジェクトです。社会課題を理由に我慢して買うのではなく、まず「食べたい」と思ってもらえる商品を目指しています。</p>
          <p>第一号商品のみかんラスクを起点に、学校行事や地域へ届けながら、規格外農産物の新しい価値を広げていきます。</p>
        </div>
      </section>

      <section className="section status-section" id="status">
        <div className="status-heading">
          <div><p className="eyebrow">PROJECT STATUS</p><h2>商品化に向けて、<br />実行中。</h2></div>
          <p>いまはOEM会社への相談を進めながら、レシピ開発、試作、原価、個包装、賞味期限を具体化している段階です。</p>
        </div>
        <div className="status-now"><span>NOW</span><strong>OEM相談</strong><p>現在、製造に向けた相談を進めています。</p></div>
        <div className="roadmap-wrap">
          <ol className="roadmap" aria-label="プロジェクト進捗" style={{ "--timeline-progress": "16.666%" } as React.CSSProperties}>
            {statusItems.map((item, index) => (
              <li className={`${index <= 1 ? "active" : ""} ${index === 1 ? "current" : ""}`} key={item}>
                <span className="roadmap-point" aria-current={index === 1 ? "step" : undefined}>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section support-section" id="support">
        <div>
          <p className="eyebrow">SUPPORT / PARTNERS</p>
          <h2>一緒に、最初の商品を形にする。</h2>
          <p>初期の商品開発・製造には10〜20万円程度が必要になる可能性があります。自己資金、企業協賛、現物協賛、クラウドファンディング、補助金などを組み合わせて検討しています。</p>
        </div>
        <div className="support-list">
          {supportItems.map((item) => <div key={item}><span aria-hidden="true">+</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className="contact-preview">
        <img src="/mikan-rusk-table.png" alt="みかんラスクを割って楽しむ様子" />
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>一緒に、最初の商品を形にする。</h2>
          <p>協力、取材、販売場所のご相談をお待ちしています。</p>
          <a className="contact-link" href="/contact">お問い合わせページへ</a>
        </div>
      </section>
    </main>
  );
}
