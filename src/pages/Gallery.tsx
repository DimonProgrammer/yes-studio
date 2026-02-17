import { Helmet } from 'react-helmet-async';

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Фото и видео вебкам-студии YES — виртуальный тур по офису</title>
        <meta name="description" content="Посмотрите фото и видео вебкам-студии YES. Рабочие комнаты, зона отдыха, оборудование. 3D-тур по офису в Москве." />
        <link rel="canonical" href="https://yes-studio.agency/gallery/" />
      </Helmet>

      <section className="section">
        <div className="container" style={{textAlign: 'center', paddingTop: '120px'}}>
          <div className="label"><span className="label-star"></span>Галерея</div>
          <h1 className="h2" style={{marginTop: '24px'}}>
            <span className="h-accent">Фото и видео</span> студии
          </h1>
          <p className="section-lead" style={{marginTop: '24px'}}>
            Страница в{'\u00A0'}разработке. Скоро здесь будет галерея фото и видео студии.
          </p>
        </div>
      </section>
    </>
  );
}
