import { Helmet } from 'react-helmet-async';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'YES Studio',
  description: 'Premium NON-NUDE вебкам-студия в Москве. 7 лет на рынке, 527+ моделей, ежедневные выплаты.',
  url: 'https://yes-studio.agency',
  logo: 'https://yes-studio.agency/photos/studio-room-3.jpg',
  foundingDate: '2018',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 527 },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'м. Красносельская',
    addressLocality: 'Москва',
    addressRegion: 'Москва',
    addressCountry: 'RU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+7-963-938-02-67',
    contactType: 'customer service',
    availableLanguage: 'Russian',
  },
  sameAs: ['https://t.me/studio_yes'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://yes-studio.agency/' },
    { '@type': 'ListItem', position: 2, name: 'О студии', item: 'https://yes-studio.agency/about/' },
  ],
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>О студии YES — premium NON-NUDE вебкам-студия в Москве</title>
        <meta name="description" content="YES Studio — premium NON-NUDE вебкам-студия в Москве. 7 лет на рынке, 527+ моделей, ежедневные выплаты. Узнайте нашу историю." />
        <link rel="canonical" href="https://yes-studio.agency/about/" />
        <meta property="og:title" content="О студии YES — premium NON-NUDE вебкам-студия в Москве" />
        <meta property="og:description" content="YES Studio — 7 лет на рынке, 527+ моделей. Ежедневные выплаты, обучение, своя студия в центре Москвы." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yes-studio.agency/about/" />
        <meta property="og:image" content="https://yes-studio.agency/photos/studio-room-3.jpg" />
        <meta property="og:site_name" content="YES Studio" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
