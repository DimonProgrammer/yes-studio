import { Helmet } from 'react-helmet-async';

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Контакты вебкам-студии YES — адреса в Москве и Ростове</title>
        <meta name="description" content="Контакты YES Studio. Телефон: +7 (963) 938-02-67. Telegram: @studio_yes. Москва, м. Красносельская. Ростов-на-Дону." />
        <link rel="canonical" href="https://yes-studio.agency/contacts/" />
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
