import { Helmet } from 'react-helmet-async';
import { CTAForm } from '../components/CTAForm';

/* ── Schema.org ── */
const jobPostings = [
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Стрим-модель',
    description: 'Ведение онлайн-трансляций на зарубежных площадках в NON-NUDE формате. Оплачиваемое виртуальное общение и флирт. Обучение с нуля, куратор, ежедневные выплаты.',
    hiringOrganization: { '@type': 'Organization', name: 'YES Studio', sameAs: 'https://yes-studio.agency' },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', streetAddress: 'м. Красносельская', addressLocality: 'Москва', addressCountry: 'RU' } },
    employmentType: 'FULL_TIME',
    baseSalary: { '@type': 'MonetaryAmount', currency: 'RUB', value: { '@type': 'QuantitativeValue', minValue: 90000, maxValue: 300000, unitText: 'MONTH' } },
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
    hiringOrganization: { '@type': 'Organization', name: 'YES Studio', sameAs: 'https://yes-studio.agency' },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Москва', addressCountry: 'RU' } },
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
    hiringOrganization: { '@type': 'Organization', name: 'YES Studio', sameAs: 'https://yes-studio.agency' },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', streetAddress: 'м. Красносельская', addressLocality: 'Москва', addressCountry: 'RU' } },
    employmentType: 'FULL_TIME',
    baseSalary: { '@type': 'MonetaryAmount', currency: 'RUB', value: { '@type': 'QuantitativeValue', minValue: 70000, unitText: 'MONTH' } },
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

/* ── Vacancy data ── */
const positions = [
  {
    badge: 'Основная',
    title: 'Стрим-модель',
    salary: 'от 90 000 ₽/мес',
    description: 'Онлайн-общение с иностранными пользователями в NON-NUDE формате. Никакого раздевания — только харизма и общение.',
    requirements: [
      'Девушки от 18 до 35 лет',
      'Опыт не требуется — обучим с нуля',
      'Коммуникабельность и харизма',
      'Опрятный внешний вид',
      'Готовность к графику 5/2',
    ],
    conditions: [
      'Доход от 90 000 ₽ в первый месяц',
      'Ежедневные выплаты',
      'Бесплатное обучение + куратор',
      'Студия в Москве, м. Красносельская',
      'Современное оборудование',
      'Анонимность гарантирована',
    ],
    responsibilities: null as string[] | null,
    note: null as string | null,
    cta: 'Откликнуться',
    featured: true,
  },
  {
    badge: 'Партнёрство',
    title: 'Рекрутинговый агент',
    salary: 'до 300$ за модель',
    description: 'Ищешь и приводишь девушек на собеседование. Свободный график, моментальные выплаты — работа из любой точки мира.',
    requirements: [
      'Поиск и привлечение моделей',
      'Доведение соискателей до собеседования',
      'Коммуникабельность и ответственность',
      'Опыт HR в вебкам — большое преимущество',
    ],
    conditions: [
      'До 300$ за каждую трудоустроенную модель',
      'Бонус 30 000 ₽ за 5 моделей в месяц',
      'Выплата сразу после первого заработка модели',
      'Свободный график, удалённо',
    ],
    responsibilities: null as string[] | null,
    note: 'Подробные условия — на собеседовании',
    cta: 'Стать агентом',
    featured: false,
  },
  {
    badge: 'Команда',
    title: 'Администратор студии',
    salary: 'от 70 000 ₽/мес',
    description: 'Управляешь работой студии, обучаешь моделей, следишь за соблюдением стандартов YES. Поиск моделей — не твоя задача.',
    requirements: [
      'Девушка от 20 до 30 лет',
      'Опыт в вебкам-индустрии',
      'Уверенный пользователь ПК',
      'Знание фото/видео-редакторов — плюс',
      'Стрессоустойчивость и пунктуальность',
    ],
    conditions: [
      'Оклад от 70 000 ₽',
      'Обучение и рост внутри студии',
      'Сменный график',
      'Современная техника и комфортный офис',
      'Поиск моделей не входит в обязанности',
    ],
    responsibilities: [
      'Обучение новых моделей',
      'Заполнение анкет и их раскрутка',
      'Анализ показателей работы',
      'Контроль правил студии',
    ] as string[],
    note: null as string | null,
    cta: 'Откликнуться',
    featured: false,
  },
];

const perks = [
  {
    title: 'Обучение с нуля',
    text: 'Бесплатная годовая программа в школе стримеров. Куратор сопровождает на каждом этапе.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  },
  {
    title: 'Ежедневные выплаты',
    text: 'Не нужно ждать конца месяца. Деньги — каждый день, как только заработала.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>,
  },
  {
    title: 'Команда и поддержка',
    text: 'Не ты одна. Коллектив, общие зоны отдыха и администратор всегда рядом.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: 'Полная анонимность',
    text: 'Блокировка любых стран, включая СНГ. Никто из близких не увидит твою работу.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  },
  {
    title: 'Гибкий график',
    text: 'Работай тогда, когда удобно. График 5/2 или по договорённости с администратором.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    title: 'Премиум студия',
    text: 'Москва, м. Красносельская. Профессиональное оборудование, зоны отдыха, кухня.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
];

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

      {/* ── HERO ── */}
      <section className="section" style={{ paddingTop: 'calc(var(--section-pad) + 64px)' }}>
        <div className="container">
          <div style={{ maxWidth: 680 }}>
            <div className="label"><span className="label-star" />Открытые позиции</div>
            <h1 className="h2" style={{ marginTop: 24 }}>
              Работа<br />
              <span className="h-accent">в YES Studio</span>
            </h1>
            <p className="section-lead" style={{ marginTop: 24 }}>
              Три открытые позиции — для тех, кто хочет зарабатывать честно,
              расти вместе с командой и{'\u00A0'}быть уверен в{'\u00A0'}завтрашнем дне.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 48, marginTop: 56, flexWrap: 'wrap' as const }}>
            {[
              { num: 'от 90 000 ₽', label: 'доход в первый месяц' },
              { num: '7 лет', label: 'на рынке' },
              { num: '527+', label: 'моделей за всё время' },
            ].map(s => (
              <div key={s.num} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 20 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 400, color: 'var(--text)' }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4, letterSpacing: '0.03em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POSITION CARDS ── */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {positions.map((pos) => (
              <div key={pos.title} style={{
                background: pos.featured ? 'var(--bg-dark)' : 'var(--bg-card)',
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: pos.featured ? 'none' : '1px solid rgba(44,41,38,0.07)',
              }}>
                {/* Header */}
                <div style={{
                  padding: '28px 28px 24px',
                  borderBottom: pos.featured ? '1px solid rgba(245,240,235,0.07)' : '1px solid rgba(44,41,38,0.07)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: pos.featured ? 'var(--accent)' : 'var(--text-muted)',
                    }}>
                      {pos.badge}
                    </span>
                    {pos.featured && (
                      <span style={{
                        fontSize: 11, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase',
                        padding: '4px 12px', background: 'var(--accent)', color: 'var(--text-cream)', borderRadius: 50,
                      }}>
                        Горячая
                      </span>
                    )}
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 2.5vw, 26px)',
                    fontWeight: 400, letterSpacing: '0.02em', textTransform: 'uppercase',
                    color: pos.featured ? 'var(--text-cream)' : 'var(--text)',
                    marginBottom: 12, lineHeight: 1.15,
                  }}>
                    {pos.title}
                  </h2>
                  <div style={{
                    fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 400,
                    color: pos.featured ? 'var(--text-cream)' : 'var(--accent)',
                  }}>
                    {pos.salary}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: pos.featured ? 'rgba(245,240,235,0.6)' : 'var(--text-body)' }}>
                    {pos.description}
                  </p>

                  <ListBlock title="Требования" items={pos.requirements} dark={pos.featured} />
                  <ListBlock title="Условия" items={pos.conditions} dark={pos.featured} />
                  {pos.responsibilities && <ListBlock title="Обязанности" items={pos.responsibilities} dark={pos.featured} />}

                  {pos.note && (
                    <p style={{ fontSize: 12, color: pos.featured ? 'rgba(245,240,235,0.3)' : 'var(--text-muted)', fontStyle: 'italic' }}>
                      * {pos.note}
                    </p>
                  )}

                  <div style={{ marginTop: 'auto', paddingTop: 8 }}>
                    <a
                      href="https://t.me/studio_yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={pos.featured ? 'btn btn--cream' : 'btn btn--outline'}
                      style={{ width: '100%', justifyContent: 'center', boxSizing: 'border-box' as const }}
                    >
                      {pos.cta} <span className="btn-dot" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <div className="label label--accent"><span className="label-star" />Почему YES</div>
            <h2 className="h2" style={{ marginTop: 16 }}>
              Что ты получаешь,<br />
              <span className="h-accent">работая с нами</span>
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 0,
            marginTop: 56,
            borderTop: '1px solid rgba(245,240,235,0.07)',
          }}>
            {perks.map((perk) => (
              <div key={perk.title} style={{ padding: '32px 28px', borderBottom: '1px solid rgba(245,240,235,0.07)' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(139,31,49,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)', marginBottom: 20,
                }}>
                  {perk.icon}
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 400,
                  textTransform: 'uppercase', letterSpacing: '0.03em',
                  color: 'var(--text-cream)', marginBottom: 10, lineHeight: 1.2,
                }}>
                  {perk.title}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(245,240,235,0.45)' }}>
                  {perk.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FORM ── */}
      <section className="section">
        <div className="container">
          <div className="vac-cta-grid">
            <div>
              <div className="label"><span className="label-star" />Записаться</div>
              <h2 className="h2" style={{ marginTop: 20 }}>
                Готова начать?<br />
                <span className="h-accent">Оставь заявку</span>
              </h2>
              <p className="section-lead" style={{ marginTop: 20 }}>
                Заполни форму — свяжемся в{'\u00A0'}течение часа и{'\u00A0'}ответим на{'\u00A0'}все вопросы.
                Никаких обязательств.
              </p>
              <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="vac-contact-link">
                  <div className="vac-contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.75 3.98-1.73 6.64-2.88 7.97-3.44 3.8-1.58 4.59-1.86 5.1-1.87.11 0 .37.03.54.17.14.12.18.28.2.47-.01.06.01.24 0 .37z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="vac-contact-label">Telegram</div>
                    <div className="vac-contact-value">@studio_yes</div>
                  </div>
                </a>
                <a href="tel:+79639380267" className="vac-contact-link">
                  <div className="vac-contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="vac-contact-label">Телефон</div>
                    <div className="vac-contact-value">+7 (963) 938-02-67</div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <CTAForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ListBlock({ title, items, dark }: { title: string; items: string[]; dark: boolean }) {
  return (
    <div>
      <div style={{
        fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
        color: dark ? 'rgba(245,240,235,0.3)' : 'var(--text-muted)', marginBottom: 10,
      }}>
        {title}
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <Check accent={dark} />
            <span style={{ fontSize: 14, lineHeight: 1.5, color: dark ? 'rgba(245,240,235,0.65)' : 'var(--text-body)' }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Check({ accent }: { accent?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: 3, color: accent ? 'rgba(245,240,235,0.35)' : 'var(--accent)' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
