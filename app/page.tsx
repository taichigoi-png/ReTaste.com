const productPoints = [
  "規格外みかん由来のみかんピールを生地に練り込む",
  "サクッと軽く、噛むほどにみかんの香りが広がる",
  "1袋2枚入り、持ち運びやすい個包装",
  "販売価格は1袋150円程度を目標",
];

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
          <img src="/re-taste-logo.png" alt="" />
          <span>Re. Taste</span>
        </a>
        <nav aria-label="サイト内メニュー">
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#status">Status</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">もったいないを、おいしいへ。</p>
          <h1 id="hero-title">そのみかん、捨てるにはおいしすぎる。</h1>
          <p className="lead">
            規格外みかんから、新しいおいしさを。Re. Tasteは、見た目だけで選ばれにくい農産物を「もう一度食べたい」と思われる商品へ変えるプロジェクトです。
          </p>
          <div className="hero-actions" aria-label="主なリンク">
            <a className="button primary" href="#product">みかんラスクを見る</a>
            <a className="button secondary" href="#support">協力について</a>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="/mikan-rusk-hero.png"
            alt="みかんとみかんピールを添えた薄切りラスク"
          />
        </div>
      </section>

      <section className="intro-band" aria-label="Re. Tasteの考え方">
        <p>
          「食品ロスだから買う」ではなく、
          <strong>おいしいから買う。その先で、食品ロス削減にもつながる。</strong>
        </p>
      </section>

      <section className="section two-column" id="about">
        <div>
          <p className="eyebrow">ABOUT Re. Taste</p>
          <h2>規格外を、価値の入り口に。</h2>
        </div>
        <div className="section-text">
          <p>
            Re. Tasteは、形や大きさ、見た目の理由で通常販売されにくい農産物に、新しい商品としての価値を生み出す活動です。
          </p>
          <p>
            「見た目が規格外だからといって、味や価値まで規格外ではない」。そのことを、説明だけでなく実際の商品を通して伝えていきます。
          </p>
        </div>
      </section>

      <section className="section product-section" id="product">
        <div className="section-heading">
          <p className="eyebrow">OUR PRODUCT</p>
          <h2>第一号商品、みかんラスク。</h2>
          <p>
            みかんを主役に、甘さとバターは強くしすぎず、後味にピール特有のほろ苦さが少し残る味を目指しています。
          </p>
        </div>
        <div className="product-grid">
          <article className="product-card feature-card">
            <span className="label">Taste</span>
            <h3>生地に練り込む、自然な香り。</h3>
            <p>
              表面に付けるのではなく、みかんピールを生地に練り込むことで、崩れにくく、ラスク全体でみかんの風味を楽しめる設計にします。
            </p>
          </article>
          {productPoints.map((point) => (
            <article className="product-card" key={point}>
              <span className="dot" aria-hidden="true" />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-band" id="why">
        <div>
          <p className="eyebrow">WHY MIKAN?</p>
          <h2>規格外でも、おいしさは変わらない。</h2>
        </div>
        <p>
          規格外農産物は、味ではなく見た目の条件で選ばれにくいことがあります。Re. Tasteは「食品ロスだから」ではなく、まず普通においしそうと思える商品をつくり、その背景として規格外みかんの価値を届けます。
        </p>
      </section>

      <section className="section story-section">
        <div className="story-image" aria-hidden="true">
          <img src="/re-taste-logo.png" alt="" />
        </div>
        <div>
          <p className="eyebrow">STORY</p>
          <h2>高校生が、商品化まで挑戦する。</h2>
          <p>
            Re. Tasteは、高校生が始めた商品開発プロジェクトです。ただ応援されるためではなく、実際に選ばれる食品ブランドとして続いていくことを目指しています。
          </p>
          <p>
            初回は学校行事や保護者会で200〜300袋程度を販売し、その後は地域イベント、マルシェ、ネット販売へ広げていく計画です。
          </p>
        </div>
      </section>

      <section className="section status-section" id="status">
        <div className="section-heading">
          <p className="eyebrow">PROJECT STATUS</p>
          <h2>商品化に向けて進行中。</h2>
          <p>
            現在はOEM会社への相談を進め、レシピ開発、試作、製造原価、個包装、賞味期限などを具体化していく段階です。
          </p>
        </div>
        <ol className="timeline" aria-label="プロジェクト進捗">
          {statusItems.map((item, index) => (
            <li className={index <= 1 ? "active" : ""} key={item}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section support-section" id="support">
        <div>
          <p className="eyebrow">SUPPORT / PARTNERS</p>
          <h2>一緒に、最初の商品を形にする。</h2>
          <p>
            初期の商品開発・製造には10〜20万円程度が必要になる可能性があります。自己資金、企業協賛、現物協賛、クラウドファンディング、補助金などを組み合わせて検討しています。
          </p>
        </div>
        <div className="support-list">
          {supportItems.map((item) => (
            <div key={item}>
              <span aria-hidden="true">+</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>協力・取材・販売場所のご相談はこちら。</h2>
          <p>
            企業、団体、メディア、イベント主催者の方からのご連絡をお待ちしています。
          </p>
        </div>
        <form className="contact-form">
          <label>
            お名前
            <input type="text" name="name" placeholder="山田 太郎" />
          </label>
          <label>
            メールアドレス
            <input type="email" name="email" placeholder="hello@example.com" />
          </label>
          <label>
            お問い合わせ内容
            <textarea name="message" placeholder="協力内容やご相談内容をご記入ください" />
          </label>
          <button type="button">送信内容を準備する</button>
        </form>
      </section>
    </main>
  );
}
