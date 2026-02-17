import { Helmet } from 'react-helmet-async';

export default function Vacancies() {
  return (
    <>
      <Helmet>
        <title>Вакансии в вебкам-студии YES — работа моделью, агентом, администратором</title>
        <meta name="description" content="Работа в вебкам-студии YES: модель (90-300К ₽/мес), агент (300$ за модель), администратор. Офисы в Москве и Ростове." />
        <link rel="canonical" href="https://yes-studio.agency/vacancies/" />
      </Helmet>

      <section className="section">
        <div className="container" style={{textAlign: 'center', paddingTop: '120px'}}>
          <div className="label"><span className="label-star"></span>Вакансии</div>
          <h1 className="h2" style={{marginTop: '24px'}}>
            <span className="h-accent">Вакансии</span> в{'\u00A0'}студии
          </h1>
          <p className="section-lead" style={{marginTop: '24px'}}>
            Страница в{'\u00A0'}разработке. Скоро здесь будут подробные описания всех открытых вакансий.
          </p>
        </div>
      </section>
    </>
  );
}
