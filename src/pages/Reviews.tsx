import { Helmet } from 'react-helmet-async';

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Отзывы моделей вебкам-студии YES — реальные истории и опыт</title>
        <meta name="description" content="Читайте отзывы моделей вебкам-студии YES. Реальные истории о работе, доходах и условиях. 527+ моделей уже работают с нами." />
        <link rel="canonical" href="https://yes-studio.agency/reviews/" />
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
