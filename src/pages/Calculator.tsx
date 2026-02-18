import { Helmet } from 'react-helmet-async';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://yes-studio.agency/' },
    { '@type': 'ListItem', position: 2, name: 'Калькулятор дохода', item: 'https://yes-studio.agency/calculator/' },
  ],
};

export default function Calculator() {
  return (
    <>
      <Helmet>
        <title>Калькулятор дохода вебкам-модели — рассчитайте заработок онлайн</title>
        <meta name="description" content="Рассчитайте свой доход как вебкам-модель. Интерактивный калькулятор YES Studio: выберите график работы и узнайте реальные цифры." />
        <link rel="canonical" href="https://yes-studio.agency/calculator/" />
        <meta property="og:title" content="Калькулятор дохода стрим-модели — YES Studio" />
        <meta property="og:description" content="Рассчитайте свой доход онлайн. Выберите график и узнайте, сколько можно зарабатывать в вебкам-студии YES." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yes-studio.agency/calculator/" />
        <meta property="og:image" content="https://yes-studio.agency/photos/studio-room-3.jpg" />
        <meta property="og:site_name" content="YES Studio" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="section">
        <div className="container" style={{textAlign: 'center', paddingTop: '120px'}}>
          <div className="label"><span className="label-star"></span>Калькулятор</div>
          <h1 className="h2" style={{marginTop: '24px'}}>
            <span className="h-accent">Калькулятор</span> дохода
          </h1>
          <p className="section-lead" style={{marginTop: '24px'}}>
            Страница в{'\u00A0'}разработке. Скоро здесь будет интерактивный калькулятор дохода.
          </p>
        </div>
      </section>
    </>
  );
}
