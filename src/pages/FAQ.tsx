import { Helmet } from 'react-helmet-async';

const faqItems = [
  { q: 'В чём заключается работа стрим-моделью?', a: 'Ведение онлайн-трансляции на зарубежных площадках. Ты общаешься, улыбаешься, слушаешь. По сути — оплачиваемое виртуальное общение и флирт.' },
  { q: 'У меня нет опыта, есть ли обучение?', a: '90% наших моделей пришли без опыта. Оплачиваемый тестовый период + персональный куратор обучит с нуля.' },
  { q: 'Сколько я буду зарабатывать?', a: 'Старт от 90 000 ₽ в первый месяц. Средний доход — 150 000 ₽+. Потолка нет.' },
  { q: 'Нужно ли знать английский язык?', a: 'Нет. Автоматический переводчик делает общение бесшовным. Со временем выучишь язык на практике.' },
  { q: 'Модельная внешность обязательна?', a: 'Нет. Важна эмоция, ухоженность и харизма. Мы поможем подчеркнуть твои достоинства.' },
  { q: 'Получится ли совмещать с основной работой?', a: 'Да. Ты сама выбираешь время и график.' },
  { q: 'Как происходят выплаты?', a: 'Наличными или на криптокошелёк. Ежедневно или раз в неделю — без задержек.' },
  { q: 'Меня не увидят знакомые и жители моей страны?', a: 'Гарантируем. Строгий Гео-блок на РФ и СНГ на всех площадках.' },
  { q: 'Что с отпусками?', a: 'Отдых каждые 3 месяца. Не спрашивая ни у кого разрешения.' },
  { q: 'Нужно ли за что-то платить?', a: 'Нет. Фотосессии, образ, обучение — всё бесплатно. Это наши инвестиции в твой успех.' },
  { q: 'Стриминг — это законно и безопасно?', a: 'Абсолютно. Non-Nude (общение) легально и безопасно. Мы работаем 7 лет.' },
  { q: 'Мои личные данные в безопасности?', a: 'Да. Никаких третьих лиц. Анкета — только для верификации возраста (18+).' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://yes-studio.agency/' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://yes-studio.agency/faq/' },
  ],
};

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ — Частые вопросы о работе в вебкам-студии YES</title>
        <meta name="description" content="Ответы на частые вопросы о работе стрим-моделью в YES Studio. Зарплата, график, обучение, безопасность, выплаты." />
        <link rel="canonical" href="https://yes-studio.agency/faq/" />
        <meta property="og:title" content="FAQ — Вопросы о работе в YES Studio" />
        <meta property="og:description" content="Ответы на все вопросы о работе стрим-моделью: доход, безопасность, график, выплаты." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yes-studio.agency/faq/" />
        <meta property="og:image" content="https://yes-studio.agency/photos/studio-room-3.jpg" />
        <meta property="og:site_name" content="YES Studio" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
