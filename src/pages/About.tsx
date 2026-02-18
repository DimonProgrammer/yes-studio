import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/* ── Schema.org ── */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'YES Studio',
  description: 'Premium NON-NUDE вебкам-студия в Ростове-на-Дону и Москве. Основана в 2018 году.',
  url: 'https://yes-studio.agency',
  logo: 'https://yes-studio.agency/photos/studio-room-3.jpg',
  foundingDate: '2018',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 527 },
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Ростов-на-Дону',
      addressRegion: 'Ростовская область',
      addressCountry: 'RU',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'м. Красносельская',
      addressLocality: 'Москва',
      addressRegion: 'Москва',
      addressCountry: 'RU',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+7-963-938-02-67',
    contactType: 'customer service',
    availableLanguage: 'Russian',
  },
  sameAs: ['https://t.me/studio_yes'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://yes-studio.agency/' },
    { '@type': 'ListItem', position: 2, name: 'О студии', item: 'https://yes-studio.agency/about/' },
  ],
};

/* ── Team roles ── */
const teamRoles = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    role: 'Основатель / Директор',
    desc: 'Стратегия студии, стандарты качества, партнёрства с\u00A0платформами',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    role: 'Куратор моделей',
    desc: 'Личное сопровождение каждой модели: цели, рост, мотивация',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
    role: 'Оператор / Тех. специалист',
    desc: 'Свет, звук, стабильность стрима — твой сигнал всегда будет идеальным',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    role: 'Стилист / Визажист',
    desc: 'Образ, который работает на\u00A0камеру. Помогаем выглядеть уверенно с\u00A0первого дня',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    role: 'Администраторы',
    desc: 'Расписание, выплаты, организационные вопросы — решаем быстро и\u00A0без бюрократии',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    role: 'Тренеры моделей',
    desc: 'Обучение с\u00A0нуля: как работать с\u00A0аудиторией, строить доход и\u00A0расти',
  },
];

/* ── Values ── */
const values = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: 'Доверие',
    subtitle: 'Легальность и безопасность',
    text: 'Официальный NON-NUDE формат, никаких откровенных материалов. Договор, прозрачные выплаты, полная конфиденциальность. Работаем открыто — ты знаешь на\u00A0что идёшь.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M7 16l4-4 3 3 6-8" />
      </svg>
    ),
    title: 'Амбиции',
    subtitle: 'Топовые условия на рынке',
    text: 'Высокий % выплат, современное оборудование, работа с\u00A0ведущими зарубежными платформами. Мы помогаем лучшим становиться лучше.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Вдохновение',
    subtitle: 'Мы меняем жизни',
    text: '527 девушек изменили свой доход и\u00A0уверенность. Не\u00A0потому что повезло, а\u00A0потому что рядом была команда, которая верила в\u00A0результат с\u00A0первого дня.',
  },
];

/* ── Benefits ── */
const benefits = [
  'Оснащённое рабочее место с\u00A0профессиональным светом и\u00A0техникой',
  'Личный куратор с\u00A0первого дня',
  'Высокий % выплат — без скрытых вычетов',
  'Гибкий график — сама выбираешь смены',
  'Обучение с\u00A0нуля, даже без опыта',
  'Полная конфиденциальность: гео-блок на РФ и СНГ',
  'Ежедневные выплаты наличными или на\u00A0крипто-кошелёк',
  'Отдых каждые 3 месяца без согласований',
];

export default function About() {

  /* ── Reveal on scroll ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Animated counters ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.target || '0', 10);
            const suffix = el.dataset.suffix || '';
            const duration = 2000;
            const start = performance.now();
            const animate = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(eased * target);
              el.textContent = current + (progress >= 1 ? suffix : '');
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    const els = document.querySelectorAll('.counter');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>О студии YES — NON-NUDE вебкам-студия в Ростове и Москве с 2018 года</title>
        <meta name="description" content="YES Studio — premium NON-NUDE вебкам-студия. Основана в Ростове-на-Дону в 2018 году, в 2025 открылись в Москве. 527+ моделей, команда из 6 специалистов, средний доход 150 000 ₽+." />
        <link rel="canonical" href="https://yes-studio.agency/about/" />
        <meta property="og:title" content="О студии YES — NON-NUDE стриминг с 2018 года" />
        <meta property="og:description" content="Основана в Ростове-на-Дону в 2018. 527+ моделей. Ростов + Москва. Средний доход 150 000 ₽+." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yes-studio.agency/about/" />
        <meta property="og:image" content="https://yes-studio.agency/photos/studio-room-3.jpg" />
        <meta property="og:site_name" content="YES Studio" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main>

        {/* ═══════════ HERO ═══════════ */}
        <section className="section" style={{ paddingTop: '140px', paddingBottom: '80px' }}>
          <div className="container">
            <div className="section-header reveal" style={{ maxWidth: '760px' }}>
              <div className="label"><span className="label-star"></span>О студии</div>
              <h1 className="h2" style={{ marginTop: '24px' }}>
                NON-NUDE вебкам-студия<br />
                <span className="h-accent">в Ростове-на-Дону с 2018 года</span>
              </h1>
              <p className="section-lead" style={{ marginTop: '24px' }}>
                YES Studio — NON-NUDE стриминг в Ростове-на-Дону и Москве.
                Два города, одни стандарты: команда, которая работает на твой результат.
              </p>
              <div className="section-cta" style={{ marginTop: '40px', justifyContent: 'flex-start' }}>
                <Link to="/vacancies" className="btn btn--accent">
                  Смотреть вакансии <span className="btn-dot"></span>
                </Link>
                <Link to="/calculator" className="btn btn--outline">
                  Рассчитать доход
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ STATS ═══════════ */}
        <section className="section section--alt">
          <div className="container">
            <div className="hero-stats reveal" style={{ justifyContent: 'center', gap: '48px' }}>
              <div className="hero-stat">
                <div className="hero-stat-num">
                  <span className="counter" data-target="2018">2018</span>
                </div>
                <div className="hero-stat-label">год основания</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">
                  <span className="counter" data-target="527" data-suffix="+">527+</span>
                </div>
                <div className="hero-stat-label">моделей с нами</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">
                  <span className="counter" data-target="150" data-suffix=" 000 ₽+">150 000 ₽+</span>
                </div>
                <div className="hero-stat-label">средний доход</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num" style={{ fontSize: '28px' }}>2</div>
                <div className="hero-stat-label">города присутствия</div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ ИСТОРИЯ ═══════════ */}
        <section className="section">
          <div className="container">
            <div className="about-two-col">
              <div className="reveal">
                <div className="label"><span className="label-star"></span>Наша история</div>
                <h2 className="h2" style={{ marginTop: '24px' }}>
                  Начали в Ростове —<br />
                  <span className="h-accent">выросли до Москвы</span>
                </h2>
              </div>
              <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p className="section-lead" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  В 2018 году мы открыли первую студию в Ростове-на-Дону. NON-NUDE стриминг тогда
                  был новым форматом — мы поверили в него раньше других и не ошиблись.
                </p>
                <p style={{ color: 'var(--text-body)', lineHeight: '1.7' }}>
                  За семь лет мы выстроили систему: профессиональное оборудование,
                  личный куратор для каждой модели, прозрачные выплаты без задержек.
                  В 2025 году открыли вторую студию — в Москве, у метро Красносельская.
                </p>
                <p style={{ color: 'var(--text-body)', lineHeight: '1.7' }}>
                  Сегодня YES Studio работает в двух городах с одной целью: дать каждой девушке
                  возможность зарабатывать честно, на своих условиях, с командой рядом с первого дня.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ ЦЕННОСТИ ═══════════ */}
        <section className="section section--alt section--textured">
          <div className="container">
            <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="label"><span className="label-star"></span>Что нас отличает</div>
              <h2 className="h2" style={{ marginTop: '24px' }}>
                Три вещи, на которых <span className="h-accent">стоит YES Studio</span>
              </h2>
            </div>
            <div className="req-grid">
              {values.map((v, i) => (
                <div key={i} className={`pain-card tilt-card reveal reveal-delay-${i + 1}`}>
                  <div className="pain-card-icon">{v.icon}</div>
                  <div className="pain-card-body">
                    <div className="pain-card-title">{v.title}</div>
                    <div style={{ fontSize: '11px', color: '#8B1F31', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                      {v.subtitle}
                    </div>
                    <p className="pain-card-text">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ДВА ГОРОДА ═══════════ */}
        <section className="section">
          <div className="container">
            <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="label"><span className="label-star"></span>Наши студии</div>
              <h2 className="h2" style={{ marginTop: '24px' }}>
                Ростов-на-Дону <span className="h-accent">и Москва</span>
              </h2>
            </div>
            <div className="about-cities-grid">
              <div className="pain-card tilt-card reveal reveal-delay-1">
                <div className="pain-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '32px', lineHeight: 1 }}>🌻</span>
                    <div>
                      <div className="pain-card-title" style={{ marginBottom: '2px' }}>Ростов-на-Дону</div>
                      <div style={{ fontSize: '11px', color: '#8B1F31', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Флагманская студия · с 2018 года
                      </div>
                    </div>
                  </div>
                  <p className="pain-card-text" style={{ marginBottom: '24px' }}>
                    Первая и основная студия. Семь лет опыта, отлаженные процессы,
                    сильная команда кураторов и тренеров.
                  </p>
                  <Link to="/vacancies" className="btn btn--accent" style={{ display: 'inline-flex' }}>
                    Вакансии в Ростове <span className="btn-dot"></span>
                  </Link>
                </div>
              </div>

              <div className="pain-card tilt-card reveal reveal-delay-2">
                <div className="pain-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '32px', lineHeight: 1 }}>🏙️</span>
                    <div>
                      <div className="pain-card-title" style={{ marginBottom: '2px' }}>Москва</div>
                      <div style={{ fontSize: '11px', color: '#8B1F31', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        м. Красносельская · Открылась в 2025
                      </div>
                    </div>
                  </div>
                  <p className="pain-card-text" style={{ marginBottom: '24px' }}>
                    Новая студия в Москве с тем же стандартом качества.
                    Удобное расположение, полное оснащение, кураторы с первого дня.
                  </p>
                  <Link to="/msk/vacancies" className="btn btn--outline" style={{ display: 'inline-flex' }}>
                    Вакансии в Москве
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ КОМАНДА ═══════════ */}
        <section className="section section--alt">
          <div className="container">
            <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="label"><span className="label-star"></span>Наша команда</div>
              <h2 className="h2" style={{ marginTop: '24px' }}>
                Люди, которые работают <span className="h-accent">на твой результат</span>
              </h2>
              <p className="section-lead" style={{ marginTop: '20px', maxWidth: '560px', margin: '20px auto 0' }}>
                Мы — не анонимное агентство. За каждым направлением стоит
                живой человек с конкретной задачей.
              </p>
            </div>
            <div className="req-grid">
              {teamRoles.map((member, i) => (
                <div key={i} className={`pain-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="pain-card-icon">{member.icon}</div>
                  <div className="pain-card-body">
                    <div className="pain-card-title">{member.role}</div>
                    <p className="pain-card-text">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ЧТО ТЫ ПОЛУЧАЕШЬ ═══════════ */}
        <section className="section">
          <div className="container">
            <div className="about-two-col about-two-col--start">
              <div className="reveal">
                <div className="label"><span className="label-star"></span>Работа у нас</div>
                <h2 className="h2" style={{ marginTop: '24px' }}>
                  Что ты получаешь <span className="h-accent">с первого дня</span>
                </h2>
                <p style={{ marginTop: '24px', color: 'var(--text-body)', lineHeight: '1.7' }}>
                  Всё необходимое для старта — уже в студии. Никаких дополнительных расходов,
                  никаких платных курсов. Это наши инвестиции в твой успех.
                </p>
              </div>
              <ul className="reveal reveal-delay-2" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {benefits.map((b, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <span style={{
                      flexShrink: 0,
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: '#8B1F31',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '2px',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ lineHeight: '1.6' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="section section--alt section--textured">
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="reveal" style={{ maxWidth: '640px', margin: '0 auto' }}>
              <div className="label"><span className="label-star"></span>Следующий шаг</div>
              <h2 className="h2" style={{ marginTop: '24px' }}>
                Готова <span className="h-accent">начать</span>?
              </h2>
              <p className="section-lead" style={{ marginTop: '20px' }}>
                Оставь заявку — и в течение часа с тобой свяжется куратор.
                Расскажем как устроена работа, ответим на любые вопросы. Без давления.
              </p>
              <div className="section-cta" style={{ marginTop: '40px', justifyContent: 'center' }}>
                <Link to="/vacancies" className="btn btn--accent">
                  Смотреть вакансии <span className="btn-dot"></span>
                </Link>
                <Link to="/calculator" className="btn btn--outline">
                  Рассчитать доход
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
