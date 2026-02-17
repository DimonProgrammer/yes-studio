import { Helmet } from 'react-helmet-async';

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ — Частые вопросы о работе в вебкам-студии YES</title>
        <meta name="description" content="Ответы на частые вопросы о работе стрим-моделью в YES Studio. Зарплата, график, обучение, безопасность, выплаты." />
        <link rel="canonical" href="https://yes-studio.agency/faq/" />
      </Helmet>

      <section className="section">
        <div className="container" style={{textAlign: 'center', paddingTop: '120px'}}>
          <div className="label"><span className="label-star"></span>FAQ</div>
          <h1 className="h2" style={{marginTop: '24px'}}>
            <span className="h-accent">Ответы на</span> частые вопросы
          </h1>
          <p className="section-lead" style={{marginTop: '24px'}}>
            Страница в{'\u00A0'}разработке. Скоро здесь будет полная страница FAQ.
          </p>
        </div>
      </section>
    </>
  );
}
