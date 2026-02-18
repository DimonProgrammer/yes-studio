import { Helmet } from 'react-helmet-async';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://yes-studio.agency/' },
    { '@type': 'ListItem', position: 2, name: 'Отзывы моделей', item: 'https://yes-studio.agency/reviews/' },
  ],
};

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Отзывы моделей вебкам-студии YES — реальные истории и опыт</title>
        <meta name="description" content="Читайте отзывы моделей вебкам-студии YES. Реальные истории о работе, доходах и условиях. 527+ моделей уже работают с нами." />
        <link rel="canonical" href="https://yes-studio.agency/reviews/" />
        <meta property="og:title" content="Отзывы моделей YES Studio — реальные истории" />
        <meta property="og:description" content="Реальные отзывы о работе в вебкам-студии YES. Как изменилась жизнь 527+ девушек после прихода к нам." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yes-studio.agency/reviews/" />
        <meta property="og:image" content="https://yes-studio.agency/photos/lifestyle-1.png" />
        <meta property="og:site_name" content="YES Studio" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="section">
        <div className="container" style={{textAlign: 'center', paddingTop: '120px'}}>
          <div className="label"><span className="label-star"></span>Отзывы</div>
          <h1 className="h2" style={{marginTop: '24px'}}>
            <span className="h-accent">Отзывы</span> наших моделей
          </h1>
          <p className="section-lead" style={{marginTop: '24px'}}>
            Страница в{'\u00A0'}разработке. Скоро здесь будут отзывы наших моделей.
          </p>
        </div>
      </section>
    </>
  );
}
