import { Helmet } from 'react-helmet-async';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'YES Studio',
  description: 'Premium NON-NUDE вебкам-студия в Москве. Работа стрим-моделью от 90 000 ₽/мес.',
  url: 'https://yes-studio.agency',
  telephone: '+7-963-938-02-67',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'м. Красносельская',
    addressLocality: 'Москва',
    addressRegion: 'Москва',
    addressCountry: 'RU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.780,
    longitude: 37.676,
  },
  openingHours: 'Mo-Su 00:00-24:00',
  image: 'https://yes-studio.agency/photos/studio-room-3.jpg',
  sameAs: ['https://t.me/studio_yes'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://yes-studio.agency/' },
    { '@type': 'ListItem', position: 2, name: 'Контакты', item: 'https://yes-studio.agency/contacts/' },
  ],
};

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Контакты вебкам-студии YES — Москва, м. Красносельская</title>
        <meta name="description" content="Контакты YES Studio. Телефон: +7 (963) 938-02-67. Telegram: @studio_yes. Москва, м. Красносельская." />
        <link rel="canonical" href="https://yes-studio.agency/contacts/" />
        <meta property="og:title" content="Контакты YES Studio — Москва, м. Красносельская" />
        <meta property="og:description" content="+7 (963) 938-02-67 · Telegram @studio_yes · Москва, м. Красносельская" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yes-studio.agency/contacts/" />
        <meta property="og:image" content="https://yes-studio.agency/photos/studio-room-3.jpg" />
        <meta property="og:site_name" content="YES Studio" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="section">
        <div className="container" style={{textAlign: 'center', paddingTop: '120px'}}>
          <div className="label"><span className="label-star"></span>Контакты</div>
          <h1 className="h2" style={{marginTop: '24px'}}>
            <span className="h-accent">Контакты</span> студии
          </h1>
          <p className="section-lead" style={{marginTop: '24px'}}>
            Страница в{'\u00A0'}разработке. Скоро здесь будет подробная контактная информация.
          </p>
          <div style={{marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
            <a href="tel:+79639380267" className="btn btn--accent">+7 (963) 938-02-67</a>
            <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--outline">Telegram</a>
          </div>
        </div>
      </section>
    </>
  );
}
