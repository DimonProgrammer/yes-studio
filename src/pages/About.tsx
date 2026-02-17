import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>О студии YES — premium NON-NUDE вебкам-студия в Москве</title>
        <meta name="description" content="YES Studio — premium NON-NUDE вебкам-студия в Москве. 7 лет на рынке, 527+ моделей, ежедневные выплаты. Узнайте нашу историю." />
        <link rel="canonical" href="https://yes-studio.agency/about/" />
      </Helmet>

      <section className="section">
        <div className="container" style={{textAlign: 'center', paddingTop: '120px'}}>
          <div className="label"><span className="label-star"></span>О студии</div>
          <h1 className="h2" style={{marginTop: '24px'}}>
            <span className="h-accent">О студии</span> YES
          </h1>
          <p className="section-lead" style={{marginTop: '24px'}}>
            Страница в{'\u00A0'}разработке. Скоро здесь будет подробная информация о{'\u00A0'}нашей студии.
          </p>
        </div>
      </section>
    </>
  );
}
