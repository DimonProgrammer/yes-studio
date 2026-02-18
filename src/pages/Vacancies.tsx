import { Helmet } from 'react-helmet-async';

const jobPostings = [
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Стрим-модель',
    description: 'Ведение онлайн-трансляций на зарубежных площадках в NON-NUDE формате. Оплачиваемое виртуальное общение и флирт. Обучение с нуля, куратор, ежедневные выплаты.',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'YES Studio',
      sameAs: 'https://yes-studio.agency',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'м. Красносельская',
        addressLocality: 'Москва',
        addressCountry: 'RU',
      },
    },
    employmentType: 'FULL_TIME',
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'RUB',
      value: {
        '@type': 'QuantitativeValue',
        minValue: 90000,
        maxValue: 300000,
        unitText: 'MONTH',
      },
    },
    datePosted: '2026-02-18',
    validThrough: '2026-12-31',
    qualifications: 'Девушки 18-35 лет. Опыт не требуется.',
    workHours: 'График 5/2',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Рекрутинговый агент',
    description: 'Поиск и привлечение моделей для вебкам-студии. Доведение соискателей до собеседования. Вознаграждение до 300$ за каждую трудоустроенную модель.',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'YES Studio',
      sameAs: 'https://yes-studio.agency',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Москва',
        addressCountry: 'RU',
      },
    },
    employmentType: 'CONTRACTOR',
    datePosted: '2026-02-18',
    validThrough: '2026-12-31',
    workHours: 'Свободный график',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Администратор студии',
    description: 'Обучение новых моделей, анализ работы, контроль соблюдения правил. Высокий оклад от 70 000 руб., сменный график, современная техника.',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'YES Studio',
      sameAs: 'https://yes-studio.agency',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'м. Красносельская',
        addressLocality: 'Москва',
        addressCountry: 'RU',
      },
    },
    employmentType: 'FULL_TIME',
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'RUB',
      value: {
        '@type': 'QuantitativeValue',
        minValue: 70000,
        unitText: 'MONTH',
      },
    },
    datePosted: '2026-02-18',
    validThrough: '2026-12-31',
    qualifications: 'Девушки 20-30 лет. Опыт в вебкам индустрии.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://yes-studio.agency/' },
    { '@type': 'ListItem', position: 2, name: 'Вакансии', item: 'https://yes-studio.agency/vacancies/' },
  ],
};

export default function Vacancies() {
  return (
    <>
      <Helmet>
        <title>Вакансии в вебкам-студии YES — работа моделью, агентом, администратором</title>
        <meta name="description" content="Работа в вебкам-студии YES: модель (90-300К ₽/мес), агент (до 300$ за модель), администратор (от 70К ₽). Офис в Москве, м. Красносельская." />
        <link rel="canonical" href="https://yes-studio.agency/vacancies/" />
        <meta property="og:title" content="Вакансии YES Studio — работа в вебкам-студии Москвы" />
        <meta property="og:description" content="Стрим-модель от 90 000 ₽/мес, рекрутинговый агент до 300$/модель, администратор от 70 000 ₽. Обучение с нуля." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yes-studio.agency/vacancies/" />
        <meta property="og:image" content="https://yes-studio.agency/photos/studio-room-3.jpg" />
        <meta property="og:site_name" content="YES Studio" />
        {jobPostings.map((job, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(job)}</script>
        ))}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
