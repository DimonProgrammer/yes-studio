import { Helmet } from 'react-helmet-async';

export default function Calculator() {
  return (
    <>
      <Helmet>
        <title>Калькулятор дохода вебкам-модели — рассчитайте заработок онлайн</title>
        <meta name="description" content="Рассчитайте свой доход как вебкам-модель. Интерактивный калькулятор YES Studio: выберите график работы и узнайте реальные цифры." />
        <link rel="canonical" href="https://yes-studio.agency/calculator/" />
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
