import { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

/* ──────────────────────────────────────────────
   Sanity helpers
   ────────────────────────────────────────────── */
const SANITY_PROJECT_ID = 'n2knh3st';
const SANITY_DATASET = 'production';

interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset: { _ref: string } };
  categories?: { title: string }[];
}

function sanityImageUrl(ref: string, width = 600): string {
  if (!ref) return '';
  const [, id, dims, format] = ref.split('-');
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dims}.${format}?w=${width}&auto=format`;
}

/* ──────────────────────────────────────────────
   FAQ data
   ────────────────────────────────────────────── */
const faqItems = [
  { q: 'В\u00A0чём заключается работа стрим-моделью?', a: 'Ведение онлайн-трансляции на\u00A0зарубежных площадках. Ты общаешься, улыбаешься, слушаешь. По\u00A0сути \u2014 оплачиваемое виртуальное общение и\u00A0флирт.' },
  { q: 'У\u00A0меня нет опыта, есть ли обучение?', a: '90% наших моделей пришли без\u00A0опыта. Оплачиваемый тестовый период + персональный куратор обучит с\u00A0нуля.' },
  { q: 'Сколько я буду зарабатывать?', a: 'Старт от 90 000 \u20BD в\u00A0первый месяц. Средний доход \u2014 150 000 \u20BD+. Потолка нет.' },
  { q: 'Нужно ли знать английский язык?', a: 'Нет. Автоматический переводчик делает общение бесшовным. Со временем выучишь язык на\u00A0практике.' },
  { q: 'Модельная внешность обязательна?', a: 'Нет. Важна эмоция, ухоженность и\u00A0харизма. Мы поможем подчеркнуть твои достоинства.' },
  { q: 'Получится ли совмещать с\u00A0основной работой?', a: 'Да. Ты сама выбираешь время и\u00A0график.' },
  { q: 'Как происходят выплаты?', a: 'Наличными или на\u00A0криптокошелёк. Ежедневно или раз в\u00A0неделю \u2014 без\u00A0задержек.' },
  { q: 'Меня не\u00A0увидят знакомые и\u00A0жители моей страны?', a: 'Гарантируем. Строгий Гео-блок на\u00A0РФ и\u00A0СНГ на\u00A0всех площадках.' },
  { q: 'Что с\u00A0отпусками?', a: 'Отдых каждые 3 месяца. Не\u00A0спрашивая ни\u00A0у кого разрешения.' },
  { q: 'Нужно ли за\u00A0что-то платить?', a: 'Нет. Фотосессии, образ, обучение \u2014 всё бесплатно. Это наши инвестиции в\u00A0твой успех.' },
  { q: 'Стриминг \u2014 это законно и\u00A0безопасно?', a: 'Абсолютно. Non-Nude (общение) легально и\u00A0безопасно. Мы работаем 7 лет.' },
  { q: 'Мои личные данные в\u00A0безопасности?', a: 'Да. Никаких третьих лиц. Анкета \u2014 только для\u00A0верификации возраста (18+).' },
];

/* ──────────────────────────────────────────────
   Vacancy data
   ────────────────────────────────────────────── */
const vacancies = [
  {
    title: 'Модель',
    tabLabel: 'Модель',
    requirements: [
      'только девушки',
      <><strong>возраст от 18 до 35 лет</strong></>,
      'выработка часового норматива',
      'опрятный внешний вид',
    ],
    conditions: [
      'график работы 5/2',
      'студия в\u00A0центре города',
      'обучение, сопровождение',
    ],
  },
  {
    title: 'Агент',
    tabLabel: 'Агент',
    requirements: [
      'поиск и\u00A0привлечение моделей',
      'доведение соискателей до\u00A0собеседования в\u00A0студии',
      'коммуникабельность, ответственность',
      'опыт работы HR в\u00A0вебкам индустрии станет большим преимуществом',
    ],
    conditions: [
      <>за{'\u00A0'}каждую модель <strong>до 300$</strong> и{'\u00A0'}если приведёшь 5 моделей за{'\u00A0'}месяц — дополнительный бонус 30 000 рублей</>,
      'свободный график',
      'моментальная выплата после того, как приведённая вами модель заработает первые деньги',
    ],
    note: 'Более подробные условия на\u00A0собеседовании',
  },
  {
    title: 'Администратор',
    tabLabel: 'Администратор',
    requirements: [
      'девушка от 20 до 30 лет',
      'стрессоустойчивость, пунктуальность, ответственность, доброжелательность, креативность, оперативность',
      'опыт в\u00A0вебкам индустрии',
      'опытный пользователь ПК, знание фото и\u00A0видео-редакторов приветствуется',
      'быстрая обучаемость',
      'знание английского языка приветствуется',
    ],
    conditions: [
      'высокий оклад от 70 000 рублей',
      'обучение',
      'комфортные рабочие места с\u00A0современной техникой',
      'сменный график',
      <>поиск моделей <strong>не{'\u00A0'}входит</strong> в{'\u00A0'}обязанности</>,
    ],
    responsibilities: [
      'обучение новых моделей',
      'заполнение анкет и\u00A0их раскрутка',
      'анализ работы моделей',
      'контроль и\u00A0соблюдение правил студии',
    ],
  },
];

/* ──────────────────────────────────────────────
   Calculator helper
   ────────────────────────────────────────────── */
function calcIncome(shifts: number, hours: number, experience: number) {
  const base = shifts * hours * 4 * 700;
  const min = Math.round(base * experience * 0.8 / 1000) * 1000;
  const max = Math.round(base * experience * 1.2 / 1000) * 1000;
  return { min, max };
}

function formatRub(n: number): string {
  return n.toLocaleString('ru-RU');
}

function expLabel(v: number): string {
  if (v <= 0.7) return 'новичок';
  if (v <= 1) return 'опытная';
  return 'профи';
}

/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */
export default function Home() {
  /* ── State ── */
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeVacancy, setActiveVacancy] = useState(0);
  const [storyExpanded, setStoryExpanded] = useState<Record<number, boolean>>({});

  // Calculator
  const [shifts, setShifts] = useState(5);
  const [hours, setHours] = useState(7);
  const [experience, setExperience] = useState(0.7);

  // Video
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sticky widget
  const [stickyVisible, setStickyVisible] = useState(false);

  // Blog posts
  const [blogPosts, setBlogPosts] = useState<SanityPost[]>([]);
  const [blogLoading, setBlogLoading] = useState(true);

  /* ── Derived ── */
  const income = calcIncome(shifts, hours, experience);
  const maxPossible = calcIncome(6, 8, 1.4);
  const ringPercent = Math.round(((income.min + income.max) / 2) / ((maxPossible.min + maxPossible.max) / 2) * 100);
  const circumference = 2 * Math.PI * 54;
  const ringOffset = circumference - (ringPercent / 100) * circumference;

  /* ── Refs for observers ── */
  const mainRef = useRef<HTMLElement>(null);

  /* ── Toggle story ── */
  const toggleStory = useCallback((index: number) => {
    setStoryExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  }, []);

  /* ── Video play ── */
  const handleVideoPlay = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (videoPlaying) {
      vid.pause();
      vid.muted = true;
      setVideoPlaying(false);
    } else {
      vid.muted = false;
      vid.play();
      setVideoPlaying(true);
    }
  }, [videoPlaying]);

  /* ── Reveal on scroll (add 'visible' class) ── */
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
      { threshold: 0.15 }
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

  /* ── Parallax hero background ── */
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroBg = document.querySelector('.hero-bg') as HTMLElement | null;
      if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Parallax for diversity-visual & photo-strip ── */
  useEffect(() => {
    const parallaxEls = document.querySelectorAll('.diversity-visual, .photo-strip');
    if (!parallaxEls.length) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          parallaxEls.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const offset = (rect.top - window.innerHeight / 2) * 0.06;
              (el as HTMLElement).style.transform = `translateY(${offset}px)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Magnetic Buttons ── */
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const buttons = document.querySelectorAll('.btn');
    const handleMouseMove = (e: MouseEvent, btn: HTMLElement) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const moveX = x * 0.15;
      const moveY = y * 0.15;
      btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = (btn: HTMLElement) => {
      btn.style.transform = '';
    };

    buttons.forEach((btn) => {
      const element = btn as HTMLElement;
      const moveHandler = (e: MouseEvent) => handleMouseMove(e, element);
      const leaveHandler = () => handleMouseLeave(element);

      element.addEventListener('mousemove', moveHandler);
      element.addEventListener('mouseleave', leaveHandler);
    });

    return () => {
      buttons.forEach((btn) => {
        const element = btn as HTMLElement;
        element.removeEventListener('mousemove', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  /* ── Sticky widget scroll detection ── */
  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        setStickyVisible(heroBottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Fetch blog posts from Sanity ── */
  useEffect(() => {
    const query = encodeURIComponent('*[_type == "post"] | order(publishedAt desc) [0...3] { _id, title, slug, publishedAt, excerpt, mainImage, "categories": categories[]->{ title } }');
    fetch(`https://${SANITY_PROJECT_ID}.api.sanity.io/v2023-08-01/data/query/${SANITY_DATASET}?query=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result) setBlogPosts(data.result);
      })
      .catch(() => {})
      .finally(() => setBlogLoading(false));
  }, []);

  /* ── Schema.org JSON-LD ── */
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'YES Studio',
    description: 'Единственная NON-NUDE студия в Москве. Зарабатывай на общении от 90 000 руб.',
    url: 'https://yes-studio.ru',
    telephone: '+7-XXX-XXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      addressCountry: 'RU',
    },
    image: 'https://yes-studio.ru/photos/studio-room-3.jpg',
    priceRange: 'от 90 000 ₽',
  };

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

  /* ── Current vacancy ── */
  const currentVacancy = vacancies[activeVacancy];

  /* ── Render ── */
  return (
    <>
      <Helmet>
        <title>YES Studio — NON-NUDE вебкам студия в Москве | Доход от 90 000 ₽</title>
        <meta name="description" content="Единственная NON-NUDE студия в Москве. Зарабатывай на общении от 90 000 ₽ уже в первый месяц. Ежедневные выплаты, обучение, поддержка 24/7." />
        <meta name="keywords" content="вебкам студия, webcam студия, стрим модель, работа моделью, non-nude, Москва, YES Studio" />
        <meta property="og:title" content="YES Studio — NON-NUDE вебкам студия в Москве" />
        <meta property="og:description" content="Зарабатывай на общении от 90 000 ₽ в месяц. Ежедневные выплаты." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yes-studio.ru" />
        <link rel="canonical" href="https://yes-studio.ru" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main ref={mainRef}>

        {/* ═══════════ HERO ═══════════ */}
        <section className="hero" id="hero">
          <div className="hero-bg"></div>

          <div className="hero-inner">
            <div className="hero-badge hero-enter hero-enter-1">
              <span className="hero-badge-dot"></span>
              NON-NUDE студия
            </div>

            <h1 className="hero-title hero-enter hero-enter-2">Stream<br />Model Agency</h1>

            <div className="hero-divider hero-enter hero-enter-3"></div>

            <p className="hero-sub hero-enter hero-enter-4">
              Единственная NON-NUDE студия в{'\u00A0'}Москве, где зарабатывают
              <strong> на{'\u00A0'}общении от 90 000 ₽</strong> уже в{'\u00A0'}первый месяц.
            </p>

            <div className="hero-ctas hero-enter hero-enter-5">
              <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--cream">Начать зарабатывать <span className="btn-dot"></span></a>
              <a href="#calc" className="btn btn--ghost-light">Рассчитать доход</a>
            </div>

            <div className="hero-stats hero-enter hero-enter-6">
              <div className="hero-stat">
                <div className="hero-stat-num"><span className="counter" data-target="7">0</span> <span className="sfx">лет</span></div>
                <div className="hero-stat-label">на{'\u00A0'}рынке</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num"><span className="counter" data-target="150" data-suffix=" 000 ₽+">0</span></div>
                <div className="hero-stat-label">средний доход</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num"><span className="counter" data-target="527" data-suffix="+">0</span></div>
                <div className="hero-stat-label">выбрали нас</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num" style={{ fontSize: '22px', letterSpacing: '0.02em' }}>Ежедневно</div>
                <div className="hero-stat-label">выплаты</div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ HOOK / PAIN POINTS ═══════════ */}
        <section className="section section--alt hook-section" id="hook">
          <div className="container">
            <div className="section-header reveal">
              <h2 className="h2 split-text">
                <span className="h-accent">Скорее всего ты здесь,</span><br />
                потому что хочешь круто <br />изменить свою жизнь!
              </h2>
            </div>

            <div className="pain-grid">
              <div className="pain-card reveal reveal-delay-1">
                <div className="pain-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18" /><path d="M8 6h10v10" /><circle cx="12" cy="12" r="10" opacity="0.3" /></svg>
                </div>
                <div className="pain-card-body">
                  <div className="pain-card-title">Финансовая зависимость</div>
                  <p className="pain-card-text">Устала финансово зависеть от{'\u00A0'}парня или родителей и{'\u00A0'}не чувствуешь себя свободной</p>
                </div>
              </div>

              <div className="pain-card reveal reveal-delay-2">
                <div className="pain-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 16l4-4 3 3 6-8" /></svg>
                </div>
                <div className="pain-card-body">
                  <div className="pain-card-title">Долги и{'\u00A0'}кредиты</div>
                  <p className="pain-card-text">У{'\u00A0'}тебя есть финансовая задолженность, которая не{'\u00A0'}дает спокойно жить</p>
                </div>
              </div>

              <div className="pain-card reveal reveal-delay-3">
                <div className="pain-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                </div>
                <div className="pain-card-body">
                  <div className="pain-card-title">Контроль родителей</div>
                  <p className="pain-card-text">Сложные отношения с{'\u00A0'}родителями, которые контролируют каждый твой шаг</p>
                </div>
              </div>

              <div className="pain-card reveal reveal-delay-4">
                <div className="pain-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 11-6.22-8.57" /><path d="M21 3v5h-5" /></svg>
                </div>
                <div className="pain-card-body">
                  <div className="pain-card-title">Замкнутый круг</div>
                  <p className="pain-card-text">Вся зарплата уходит на{'\u00A0'}долги, потом снова занимаешь — и{'\u00A0'}так по{'\u00A0'}кругу</p>
                </div>
              </div>

              <div className="pain-card reveal reveal-delay-5">
                <div className="pain-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 00-2 2v3" /><path d="M21 8V5a2 2 0 00-2-2h-3" /><path d="M3 16v3a2 2 0 002 2h3" /><path d="M16 21h3a2 2 0 002-2v-3" /><path d="M15 9l-6 6" /><path d="M9 9h.01" /><path d="M15 15h.01" /></svg>
                </div>
                <div className="pain-card-body">
                  <div className="pain-card-title">Не{'\u00A0'}устраивает студия</div>
                  <p className="pain-card-text">Уже работаешь моделью, но{'\u00A0'}условия, процент или отношение в{'\u00A0'}текущей студии — не{'\u00A0'}то, чего ты заслуживаешь</p>
                </div>
              </div>
            </div>

            <p className="hook-text reveal">
              Если ты узнала себя — мы те, кто поможет и{'\u00A0'}проведёт к{'\u00A0'}новой классной жизни за{'\u00A0'}руку
            </p>

            <div className="section-cta reveal">
              <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--accent">Хочу узнать больше <span className="btn-dot"></span></a>
            </div>
          </div>
        </section>

        {/* ═══════════ STORIES / SOCIAL PROOF ═══════════ */}
        <section className="section section--alt section--textured" id="stories">
          <div className="container">
            <div className="section-header reveal">
              <div className="label label--accent">реальные истории</div>
              <h2 className="h2 split-text">
                <span className="h-accent">Они были</span><br />
                на{'\u00A0'}твоём месте
              </h2>
              <p className="section-lead">
                Истории наших моделей, которые изменили свою жизнь с{'\u00A0'}помощью YES Studio
              </p>
            </div>

            <div className="stories-grid">
              {/* Дарья */}
              <div className="story-card reveal reveal-delay-1">
                <div className="story-photo">
                  <img src="/photos/lifestyle-1.png" alt="Дарья" />
                </div>
                <div className="story-body">
                  <div className="story-name">Дарья, 24 года</div>
                  <div className="story-before-after">
                    <div className="story-ba-item story-ba-before">
                      <span className="story-ba-label">Было</span>
                      Долг 400 000 ₽, зависимость от{'\u00A0'}парня
                    </div>
                    <div className="story-ba-item story-ba-after">
                      <span className="story-ba-label">Стало</span>
                      Доход 200 000+ ₽/мес, путешествия, свобода
                    </div>
                  </div>
                  <div className="story-expandable" data-expanded={storyExpanded[0] ? 'true' : 'false'}>
                    <div className="story-full-text">
                      {'\u00AB'}Я взяла кредит на{'\u00A0'}своего парня, думала, что он вернёт. Не{'\u00A0'}вернул. Осталась с{'\u00A0'}долгом в 400 тысяч и{'\u00A0'}без поддержки. Было страшно и{'\u00A0'}обидно. В YES я пришла из{'\u00A0'}отчаяния. Первые две недели казались сложными, но{'\u00A0'}куратор поддерживала каждый день. <strong>За 4 месяца я полностью закрыла кредит</strong> и{'\u00A0'}поняла, что могу полагаться только на{'\u00A0'}себя. Теперь мой доход 200 000+ в{'\u00A0'}месяц, я путешествую и{'\u00A0'}живу для{'\u00A0'}себя{'\u00BB'}.
                    </div>
                    <button className="story-toggle" onClick={() => toggleStory(0)}>
                      {storyExpanded[0] ? 'Свернуть' : 'Читать историю'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Алина */}
              <div className="story-card reveal reveal-delay-2">
                <div className="story-photo">
                  <img src="/photos/lifestyle-2.png" alt="Алина" />
                </div>
                <div className="story-body">
                  <div className="story-name">Алина, 21 год</div>
                  <div className="story-before-after">
                    <div className="story-ba-item story-ba-before">
                      <span className="story-ba-label">Было</span>
                      Родители контролировали каждый шаг, ноль своих денег
                    </div>
                    <div className="story-ba-item story-ba-after">
                      <span className="story-ba-label">Стало</span>
                      Своя квартира, 120 000 ₽ в{'\u00A0'}первый месяц
                    </div>
                  </div>
                  <div className="story-expandable" data-expanded={storyExpanded[1] ? 'true' : 'false'}>
                    <div className="story-full-text">
                      {'\u00AB'}Я жила с{'\u00A0'}родителями, которые контролировали абсолютно всё: куда иду, с{'\u00A0'}кем общаюсь, сколько трачу. Своих денег не{'\u00A0'}было, я чувствовала себя как в{'\u00A0'}клетке. Работу в{'\u00A0'}студии нашла случайно. Сначала боялась сказать родителям, но{'\u00A0'}когда <strong>через месяц принесла домой 120 тысяч</strong>, их отношение изменилось. Сейчас я снимаю свою квартиру, финансово независима и{'\u00A0'}сама решаю, как жить{'\u00BB'}.
                    </div>
                    <button className="story-toggle" onClick={() => toggleStory(1)}>
                      {storyExpanded[1] ? 'Свернуть' : 'Читать историю'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Кристина */}
              <div className="story-card reveal reveal-delay-3">
                <div className="story-photo">
                  <img src="/photos/desert-vibe.jpg" alt="Кристина" />
                </div>
                <div className="story-body">
                  <div className="story-name">Кристина, 26 лет</div>
                  <div className="story-before-after">
                    <div className="story-ba-item story-ba-before">
                      <span className="story-ba-label">Было</span>
                      Зарплата 45 000 ₽, всё уходило на{'\u00A0'}долги
                    </div>
                    <div className="story-ba-item story-ba-after">
                      <span className="story-ba-label">Стало</span>
                      180–250 000 ₽/мес, все долги закрыты за{'\u00A0'}полгода
                    </div>
                  </div>
                  <div className="story-expandable" data-expanded={storyExpanded[2] ? 'true' : 'false'}>
                    <div className="story-full-text">
                      {'\u00AB'}Я работала администратором за 45 тысяч. Из{'\u00A0'}них 30 уходило на{'\u00A0'}кредиты и{'\u00A0'}долги знакомым. Потом снова занимала — замкнутый круг. В YES я начала зарабатывать с{'\u00A0'}первой недели. <strong>За{'\u00A0'}полгода закрыла все долги</strong> — это была лучшая победа в{'\u00A0'}моей жизни. Теперь зарабатываю 180-250 тысяч, откладываю и{'\u00A0'}впервые чувствую, что контролирую свою жизнь{'\u00BB'}.
                    </div>
                    <button className="story-toggle" onClick={() => toggleStory(2)}>
                      {storyExpanded[2] ? 'Свернуть' : 'Читать историю'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Виктория */}
              <div className="story-card reveal reveal-delay-4">
                <div className="story-photo">
                  <img src="/photos/model-2.jpg" alt="Виктория" />
                </div>
                <div className="story-body">
                  <div className="story-name">Виктория, 23 года</div>
                  <div className="story-before-after">
                    <div className="story-ba-item story-ba-before">
                      <span className="story-ba-label">Было</span>
                      Финансовая зависимость от{'\u00A0'}парня, токсичные отношения
                    </div>
                    <div className="story-ba-item story-ba-after">
                      <span className="story-ba-label">Стало</span>
                      150–200 000 ₽/мес, независимость, своя жизнь
                    </div>
                  </div>
                  <div className="story-expandable" data-expanded={storyExpanded[3] ? 'true' : 'false'}>
                    <div className="story-full-text">
                      {'\u00AB'}Я не{'\u00A0'}работала, зависела от{'\u00A0'}парня финансово. Каждая покупка — это просьба и{'\u00A0'}объяснения. Отношения были токсичными, но{'\u00A0'}уйти было некуда. Студия стала моим спасением. Уже <strong>в{'\u00A0'}первый месяц заработала 95 тысяч</strong> и{'\u00A0'}съехала от{'\u00A0'}него. Сейчас мой доход стабильно 150-200 тысяч, я независима и{'\u00A0'}счастлива. Это было лучшее решение в{'\u00A0'}моей жизни{'\u00BB'}.
                    </div>
                    <button className="story-toggle" onClick={() => toggleStory(3)}>
                      {storyExpanded[3] ? 'Свернуть' : 'Читать историю'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-cta reveal" style={{ marginTop: '56px' }}>
              <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--dark">Я тоже хочу изменить свою жизнь <span className="btn-dot"></span></a>
            </div>
          </div>
        </section>

        {/* ═══════════ MARQUEE TICKER ═══════════ */}
        <div className="marquee">
          <div className="marquee-track">
            <span>YES STUDIO</span><span className="marquee-dot"></span>
            <span>PREMIUM</span><span className="marquee-dot"></span>
            <span>МОСКВА</span><span className="marquee-dot"></span>
            <span>NON-NUDE</span><span className="marquee-dot"></span>
            <span>ЕЖЕДНЕВНЫЕ ВЫПЛАТЫ</span><span className="marquee-dot"></span>
            <span>527+ МОДЕЛЕЙ</span><span className="marquee-dot"></span>
            <span>ОБУЧЕНИЕ</span><span className="marquee-dot"></span>
            <span>ПОДДЕРЖКА 24/7</span><span className="marquee-dot"></span>
            <span>YES STUDIO</span><span className="marquee-dot"></span>
            <span>PREMIUM</span><span className="marquee-dot"></span>
            <span>МОСКВА</span><span className="marquee-dot"></span>
            <span>NON-NUDE</span><span className="marquee-dot"></span>
            <span>ЕЖЕДНЕВНЫЕ ВЫПЛАТЫ</span><span className="marquee-dot"></span>
            <span>527+ МОДЕЛЕЙ</span><span className="marquee-dot"></span>
            <span>ОБУЧЕНИЕ</span><span className="marquee-dot"></span>
            <span>ПОДДЕРЖКА 24/7</span><span className="marquee-dot"></span>
          </div>
        </div>

        {/* ═══════════ SERVICES / BENTO ═══════════ */}
        <section className="section" id="services">
          <div className="container">
            <div className="section-header reveal">
              <div className="label label--accent">преимущества</div>
              <h2 className="h2 split-text">
                <span className="h-accent">Почему мы лучшие</span><br />
                на{'\u00A0'}рынке?
              </h2>
              <p className="section-lead">
                Мы не{'\u00A0'}просто даём рабочее место. Мы создаём из{'\u00A0'}тебя Personal Brand,
                который приносит деньги, поклонников и{'\u00A0'}независимость. Вот что отличает нас от{'\u00A0'}других студий:
              </p>
            </div>

            <div className="bento">
              <div className="bento-card tilt-card reveal reveal-delay-1">
                <span className="pill-tag">Стратегия</span>
                <div className="bento-visual">
                  <img src="/photos/lifestyle-1.png" alt="Индивидуальная стратегия работы стрим-моделью в YES Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="bento-body">
                  <div className="bento-title">Индивидуальная<br />стратегия</div>
                  <p className="bento-desc">Мы прописываем сценарий твоего успеха: на{'\u00A0'}каких темах играть, как удерживать внимание щедрых пользователей и{'\u00A0'}монетизировать харизму, а{'\u00A0'}не тело. Твой бренд будет работать годами</p>
                </div>
              </div>

              <div className="bento-card tilt-card reveal reveal-delay-2">
                <span className="pill-tag">Имидж</span>
                <div className="bento-visual">
                  <img src="/photos/lifestyle-2.png" alt="Создание личного имиджа модели в вебкам студии" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="bento-body">
                  <div className="bento-title">Личный<br />имидж</div>
                  <p className="bento-desc">Наставник подберёт мейк, укладку и{'\u00A0'}аксессуары, которые транслируют твой характер и{'\u00A0'}повышают чек за{'\u00A0'}минуту общения</p>
                </div>
              </div>

              <div className="bento-card tilt-card reveal reveal-delay-3">
                <span className="pill-tag">Контент</span>
                <div className="bento-visual">
                  <img src="/photos/bento-photo.jpg" alt="Профессиональный контент для стрим-модели" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="bento-body">
                  <div className="bento-title">Профессиональный<br />контент</div>
                  <p className="bento-desc">Бесплатно создадим фото- и{'\u00A0'}видеоконтент уровня глянца, который привлекает фанатов ещё до{'\u00A0'}выхода в{'\u00A0'}стрим</p>
                </div>
              </div>

              <div className="bento-card tilt-card reveal reveal-delay-1">
                <span className="pill-tag">Карьера</span>
                <div className="bento-visual">
                  <img src="/photos/model-1.jpg" alt="Карьерный рост модели в YES Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="bento-body">
                  <div className="bento-title">Карьерный<br />рост</div>
                  <p className="bento-desc">От{'\u00A0'}новичка до{'\u00A0'}звезды — повышай уровень, забирай бонусы и{'\u00A0'}увеличивай процент</p>
                </div>
              </div>

              <div className="bento-card tilt-card reveal reveal-delay-2">
                <span className="pill-tag">Поддержка 24/7</span>
                <div className="bento-visual">
                  <img src="/photos/model-2.jpg" alt="Персональный куратор 24/7 в вебкам студии" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="bento-body">
                  <div className="bento-title">Персональный<br />куратор</div>
                  <p className="bento-desc">Продюсер на{'\u00A0'}связи 24/7. Обучает тонкостям психологии общения и{'\u00A0'}сопровождает на{'\u00A0'}всех этапах: от{'\u00A0'}настройки света до{'\u00A0'}крупных донатов</p>
                </div>
              </div>

              <div className="bento-card tilt-card reveal reveal-delay-3">
                <span className="pill-tag">Языки</span>
                <div className="bento-visual">
                  <img src="/photos/desert-vibe.jpg" alt="Обучение английскому на практике в студии YES" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="bento-body">
                  <div className="bento-title">Английский<br />на{'\u00A0'}практике</div>
                  <p className="bento-desc">Автопереводчик + через год свободно заговоришь на{'\u00A0'}английском в{'\u00A0'}живом общении</p>
                </div>
              </div>
            </div>

            <div className="section-cta reveal">
              <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--dark">Начать зарабатывать <span className="btn-dot"></span></a>
            </div>
          </div>
        </section>

        {/* ═══════════ STUDIO ═══════════ */}
        <section className="section" id="studio">
          <div className="container">
            <div className="section-header reveal" style={{ textAlign: 'center' }}>
              <div className="label label--accent">пространство</div>
              <h2 className="h2 split-text"><span className="h-accent">О{'\u00A0'}нашей</span> студии</h2>
              <p className="section-lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                Уютное пространство в{'\u00A0'}центре Москвы, рядом с{'\u00A0'}м. Красносельская.
                Индивидуальные комнаты с{'\u00A0'}дизайнерским интерьером, профессиональное освещение и{'\u00A0'}всё для{'\u00A0'}комфортной работы.
              </p>
            </div>

            {/* Video */}
            <div className="studio-video reveal" style={{ marginBottom: '40px' }}>
              <div className="video-wrapper" id="studioVideoWrap">
                <video ref={videoRef} muted loop playsInline preload="metadata">
                  <source src="/photos/studio-promo.webm" type="video/webm" />
                  <source src="/photos/studio-promo.mp4" type="video/mp4" />
                </video>
                <button className="video-play-btn" aria-label="Воспроизвести со звуком" onClick={handleVideoPlay}>
                  <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
                </button>
              </div>
            </div>

            {/* Mosaic Photo Grid */}
            <div className="studio-mosaic">
              <div className="studio-mosaic__item studio-mosaic__hero reveal">
                <img src="/photos/studio-room-3.jpg" alt="Элегантная комната студии YES" loading="lazy" />
                <div className="studio-mosaic__overlay">
                  <span className="studio-mosaic__tag">5 уникальных комнат</span>
                </div>
              </div>
              <div className="studio-mosaic__item studio-mosaic__tall reveal reveal-delay-1">
                <img src="/photos/studio-room-2.jpg" alt="Зелёная зона студии" loading="lazy" />
              </div>
              <div className="studio-mosaic__item reveal reveal-delay-2">
                <img src="/photos/studio-room-1.jpg" alt="Уютная комната с книжным шкафом" loading="lazy" />
              </div>
              <div className="studio-mosaic__item reveal reveal-delay-3">
                <img src="/photos/studio-room-5.jpg" alt="Тропическая комната" loading="lazy" />
              </div>
              <div className="studio-mosaic__item studio-mosaic__wide reveal reveal-delay-4">
                <img src="/photos/studio-room-4.jpg" alt="Комната с неоновым дизайном" loading="lazy" />
              </div>
            </div>

            {/* Studio features */}
            <div className="studio-features reveal">
              <div className="studio-feat">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>Москва, м. Красносельская</span>
              </div>
              <div className="studio-feat">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                <span>Полная приватность</span>
              </div>
              <div className="studio-feat">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                <span>Профессиональный свет</span>
              </div>
              <div className="studio-feat">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
                <span>Комфорт и{'\u00A0'}забота</span>
              </div>
            </div>

            <div className="section-cta reveal" style={{ textAlign: 'center', marginTop: '48px' }}>
              <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--dark">Посмотреть студию вживую <span className="btn-dot"></span></a>
            </div>
          </div>
        </section>

        {/* ═══════════ CALCULATOR ═══════════ */}
        <section className="section section--dark" id="calc" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="cursor-glow" id="calcGlow"></div>
          <div className="container">
            <div className="calc-layout">
              <div className="calc-text reveal">
                <div className="label label--accent">доход</div>
                <h2 className="h2 split-text">
                  <span className="h-accent">Рассчитай</span><br />
                  свой доход
                </h2>
                <p className="body-text">
                  Узнай, сколько ты сможешь зарабатывать в YES —
                  в{'\u00A0'}зависимости от{'\u00A0'}своего графика. Двигай параметры
                  и{'\u00A0'}смотри результат.
                </p>
                <p className="body-text" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                  Данные рассчитаны на{'\u00A0'}основе средней статистики заработка наших моделей.
                  Выплаты — ежедневно или раз в{'\u00A0'}неделю.
                </p>
              </div>

              <div className="calc-panel reveal reveal-delay-2">
                <div className="calc-panel-title">Параметры</div>

                <div className="calc-panel-body">
                  <div className="calc-panel-params">
                    <div className="calc-group">
                      <div className="calc-group-label">Смены в{'\u00A0'}неделю</div>
                      <div className="calc-tabs" id="shiftsGroup">
                        {[4, 5, 6].map((v) => (
                          <button
                            key={v}
                            className={`calc-tab${shifts === v ? ' active' : ''}`}
                            onClick={() => setShifts(v)}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="calc-group">
                      <div className="calc-group-label">Часов за{'\u00A0'}смену</div>
                      <div className="calc-tabs" id="hoursGroup">
                        {[5, 6, 7, 8].map((v) => (
                          <button
                            key={v}
                            className={`calc-tab${hours === v ? ' active' : ''}`}
                            onClick={() => setHours(v)}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="calc-group">
                      <div className="calc-group-label">Опыт</div>
                      <div className="calc-tabs" id="expGroup">
                        {[
                          { value: 0.7, label: 'Новичок' },
                          { value: 1, label: 'Опытная' },
                          { value: 1.4, label: 'Профи' },
                        ].map((item) => (
                          <button
                            key={item.value}
                            className={`calc-tab${experience === item.value ? ' active' : ''}`}
                            onClick={() => setExperience(item.value)}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="calc-ring reveal" id="calcRing">
                    <svg viewBox="0 0 120 120">
                      <circle className="calc-ring-bg" cx="60" cy="60" r="54" />
                      <circle
                        className="calc-ring-fill"
                        cx="60"
                        cy="60"
                        r="54"
                        strokeDasharray={circumference}
                        strokeDashoffset={ringOffset}
                      />
                    </svg>
                    <div className="calc-ring-value">{ringPercent}%</div>
                  </div>
                </div>

                <div className="calc-result">
                  <div className="calc-result-label">Твой потенциальный доход в{'\u00A0'}месяц</div>
                  <div className="calc-result-value">
                    <span className="nowrap">от {formatRub(income.min)}{'\u00A0'}₽</span>{' '}
                    <span className="nowrap">до {formatRub(income.max)}{'\u00A0'}₽</span>
                  </div>
                  <div className="calc-result-sub">
                    При{'\u00A0'}графике <span>{shifts}</span> смен {'\u00D7'} <span>{hours}</span>ч {'\u00B7'} <span>{expLabel(experience)}</span>
                  </div>
                  <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--accent">Хочу столько же <span className="btn-dot"></span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ DIVERSITY ═══════════ */}
        <section className="section" id="diversity">
          <div className="container">
            <div className="section-header reveal">
              <div className="label label--accent">для{'\u00A0'}всех</div>
              <h2 className="h2 split-text">
                <span className="h-accent">Мы работаем</span><br />
                с{'\u00A0'}девушками любого типа
              </h2>
              <h3 className="section-sub" style={{ fontFamily: 'var(--font-body)', fontSize: '20px', fontWeight: 400, color: 'var(--text-body)', marginTop: '12px' }}>Твоя внешность — твоё преимущество</h3>
            </div>

            <div className="diversity-layout reveal">
              <div className="diversity-visual reveal">
                <img src="/photos/model-1.jpg" alt="Модели YES Studio" className="diversity-photo" style={{ aspectRatio: '3/4' }} />
              </div>

              <div className="diversity-right">
                <p className="body-text" style={{ marginBottom: '28px' }}>
                  Не{'\u00A0'}важно, как ты выглядишь — важно, кто ты внутри. Мы принимаем девушек:
                </p>

                <div className="diversity-list">
                  <div className="diversity-item">
                    <div className="diversity-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                    </div>
                    <div className="diversity-content">
                      <h4>Разных национальностей</h4>
                      <p>Твоя уникальность в{'\u00A0'}твоих корнях</p>
                    </div>
                  </div>

                  <div className="diversity-item">
                    <div className="diversity-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8H20l-4.9 3.6 1.9 5.8L12 14.6 6.9 18.2l1.9-5.8L4 8.8h6.1z" /></svg>
                    </div>
                    <div className="diversity-content">
                      <h4>Любого телосложения</h4>
                      <p>В{'\u00A0'}стриме ценят харизму, а{'\u00A0'}не 90-60-90</p>
                    </div>
                  </div>

                  <div className="diversity-item">
                    <div className="diversity-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" /></svg>
                    </div>
                    <div className="diversity-content">
                      <h4>Разных возрастов</h4>
                      <p>От 18 до{'\u00A0'}любого возраста</p>
                    </div>
                  </div>

                  <div className="diversity-item">
                    <div className="diversity-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7a4 4 0 00-8 0" /><path d="M12 11v4" /><circle cx="12" cy="16" r="1" /></svg>
                    </div>
                    <div className="diversity-content">
                      <h4>Любого социального статуса</h4>
                      <p>Студентка, мама, офисный работник — не{'\u00A0'}важно</p>
                    </div>
                  </div>

                  <div className="diversity-item">
                    <div className="diversity-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
                    </div>
                    <div className="diversity-content">
                      <h4>С{'\u00A0'}разным опытом</h4>
                      <p>90% наших моделей пришли без{'\u00A0'}опыта</p>
                    </div>
                  </div>
                </div>

                <p className="diversity-footer">
                  Главное — желание меняться и{'\u00A0'}зарабатывать. Остальное мы дадим.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ PROCESS ═══════════ */}
        <section className="section section--alt" id="process">
          <div className="container">
            <div className="section-header reveal">
              <div className="label label--accent">как это работает</div>
              <h2 className="h2 split-text">
                <span className="h-accent">Как устроена</span><br />
                работа — 5 шагов
              </h2>
            </div>

            <div className="process-timeline">
              <div className="process-step reveal reveal-delay-1">
                <div className="process-step-num">01</div>
                <div className="process-step-content">
                  <h3 className="process-step-title">Заявка</h3>
                  <p>Оставляешь контакты на{'\u00A0'}сайте или пишешь в Telegram</p>
                </div>
              </div>

              <div className="process-step reveal reveal-delay-2">
                <div className="process-step-num">02</div>
                <div className="process-step-content">
                  <h3 className="process-step-title">Знакомство</h3>
                  <p>Короткое общение в{'\u00A0'}переписке и{'\u00A0'}приглашение на{'\u00A0'}встречу</p>
                </div>
              </div>

              <div className="process-step reveal reveal-delay-3">
                <div className="process-step-num">03</div>
                <div className="process-step-content">
                  <h3 className="process-step-title">Тестовый период</h3>
                  <p>Оплачиваемый старт (1-5 дней). Ты пробуешь — мы платим</p>
                </div>
              </div>

              <div className="process-step reveal reveal-delay-4">
                <div className="process-step-num">04</div>
                <div className="process-step-content">
                  <h3 className="process-step-title">Personal Brand</h3>
                  <p>Упаковка твоего образа, фотосессия и{'\u00A0'}стиль</p>
                </div>
              </div>

              <div className="process-step reveal reveal-delay-1">
                <div className="process-step-num">05</div>
                <div className="process-step-content">
                  <h3 className="process-step-title">Доход</h3>
                  <p>Первые заработанные деньги на{'\u00A0'}руки или криптокошелёк</p>
                </div>
              </div>
            </div>

            <div className="section-cta reveal">
              <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--accent">Оставить заявку <span className="btn-dot"></span></a>
            </div>
          </div>
        </section>

        {/* ═══════════ ABOUT WORK ═══════════ */}
        <section className="section section--dark" id="about-work">
          <div className="container">
            <div className="section-header reveal">
              <div className="label" style={{ color: 'rgba(245,240,235,0.3)' }}>условия</div>
              <h2 className="h2 split-text" style={{ color: 'var(--text-cream)' }}>
                <span className="h-accent">О{'\u00A0'}работе</span><br />
                в{'\u00A0'}нашей компании
              </h2>
              <p className="section-lead" style={{ color: 'rgba(245,240,235,0.6)' }}>
                Выбирая нас, ты выбираешь:
              </p>
            </div>

            <div className="about-work-grid">
              <div className="about-work-card reveal reveal-delay-1">
                <div className="about-work-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" /><path d="M9 12l2 2 4-4" /></svg>
                </div>
                <h3>Non-Nude навсегда</h3>
                <p>Наши модели не{'\u00A0'}раздеваются. Мы зарабатываем на{'\u00A0'}харизме, атмосфере и{'\u00A0'}позитиве. <strong>Никакого давления на nude</strong> — никогда. Твои границы — закон</p>
              </div>

              <div className="about-work-card reveal reveal-delay-2">
                <div className="about-work-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /><circle cx="12" cy="12" r="5" /></svg>
                </div>
                <h3>Честные проценты</h3>
                <p>Ты получаешь <strong>50-60% дохода</strong>. Без{'\u00A0'}скрытых комиссий и{'\u00A0'}штрафов. Твой аккаунт — твой навсегда. Выплаты наличными ежедневно или раз в{'\u00A0'}неделю — <strong>без{'\u00A0'}задержек</strong></p>
              </div>

              <div className="about-work-card reveal reveal-delay-3">
                <div className="about-work-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                </div>
                <h3>Безопасный старт</h3>
                <p>Оплачиваемый тест 1-5 дней. Даже если решишь не{'\u00A0'}продолжать — мы заплатим</p>
              </div>

              <div className="about-work-card reveal reveal-delay-1">
                <div className="about-work-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                </div>
                <h3>Гибкость</h3>
                <p>Сама выбираешь график. Совмещай с{'\u00A0'}учёбой или основной работой</p>
              </div>

              <div className="about-work-card reveal reveal-delay-2">
                <div className="about-work-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 110-14h9.09" /><path d="M14 16l4 3-4 3" /></svg>
                </div>
                <h3>Отдых</h3>
                <p>Отпуск каждые 3 месяца, чтобы ты не{'\u00A0'}выгорала и{'\u00A0'}путешествовала</p>
              </div>

              <div className="about-work-card reveal reveal-delay-3">
                <div className="about-work-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                </div>
                <h3>Гео-блок</h3>
                <p>Строгая блокировка на{'\u00A0'}РФ и{'\u00A0'}СНГ — твои знакомые тебя не{'\u00A0'}увидят</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ REQUIREMENTS ═══════════ */}
        <section className="section" id="requirements">
          <div className="container">
            <div className="section-header reveal">
              <div className="label label--accent">старт</div>
              <h2 className="h2 split-text">
                <span className="h-accent">Что нужно</span><br />
                для{'\u00A0'}начала работы
              </h2>
              <p className="section-lead">
                Минимальные условия — максимальные возможности
              </p>
            </div>

            <div className="req-grid">
              <div className="req-card reveal reveal-delay-1">
                <div className="req-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <div className="req-card-title">Возраст от 18 лет</div>
                <p className="req-card-text">Обязательное условие для{'\u00A0'}работы. Подтверждается паспортом</p>
              </div>

              <div className="req-card reveal reveal-delay-2">
                <div className="req-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /><circle cx="7.5" cy="7" r="0.5" fill="currentColor" /></svg>
                </div>
                <div className="req-card-title">Паспорт РФ</div>
                <p className="req-card-text">Для{'\u00A0'}оформления договора. Все данные защищены</p>
              </div>

              <div className="req-card reveal reveal-delay-3">
                <div className="req-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8H20l-4.9 3.6 1.9 5.8L12 14.6 6.9 18.2l1.9-5.8L4 8.8h6.1z" /></svg>
                </div>
                <div className="req-card-title">Желание меняться</div>
                <p className="req-card-text">Главное — мотивация. Всему остальному мы научим</p>
              </div>

              <div className="req-card reveal reveal-delay-1">
                <div className="req-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>
                </div>
                <div className="req-card-title">Смартфон</div>
                <p className="req-card-text">Для{'\u00A0'}связи с{'\u00A0'}куратором и{'\u00A0'}выхода на{'\u00A0'}платформу</p>
              </div>

              <div className="req-card reveal reveal-delay-2">
                <div className="req-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                </div>
                <div className="req-card-title">от 5 часов в{'\u00A0'}день</div>
                <p className="req-card-text">Гибкий график — ты сама выбираешь удобное время для{'\u00A0'}смен</p>
              </div>

              <div className="req-card reveal reveal-delay-3">
                <div className="req-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div className="req-card-title">Быть в{'\u00A0'}Москве</div>
                <p className="req-card-text">Работа в{'\u00A0'}нашей студии рядом с{'\u00A0'}м. Красносельская. Помогаем с{'\u00A0'}жильём</p>
              </div>
            </div>

            <div className="section-cta reveal">
              <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--accent">Подхожу! Хочу начать <span className="btn-dot"></span></a>
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="section section--alt" id="faq">
          <div className="container">
            <div className="section-header reveal">
              <div className="label label--accent">вопросы</div>
              <h2 className="h2 split-text">FAQ</h2>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 400, color: 'var(--text-muted)', marginTop: '8px' }}>Ответы на{'\u00A0'}часто задаваемые вопросы</h3>
            </div>

            <div className="faq-list">
              {faqItems.map((item, i) => (
                <div key={i} className={`faq-item reveal${openFaq === i ? ' open' : ''}`}>
                  <div className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <h4>{item.q}</h4>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                  </div>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ VACANCIES ═══════════ */}
        <section className="section" id="vacancies">
          <div className="container">
            <div className="section-header reveal">
              <div className="label label--accent">карьера</div>
              <h2 className="h2 split-text">
                <span className="h-accent">Вакансии</span><br />
                в{'\u00A0'}нашей студии
              </h2>
            </div>

            <div className="vacancy-tabs reveal">
              {vacancies.map((v, i) => (
                <button
                  key={i}
                  className={`vacancy-tab${activeVacancy === i ? ' active' : ''}`}
                  onClick={() => setActiveVacancy(i)}
                >
                  {v.tabLabel}
                </button>
              ))}
            </div>

            <div className="vacancy-panels">
              {vacancies.map((v, i) => (
                <div
                  key={i}
                  className={`vacancy-panel${activeVacancy === i ? ' active' : ''}`}
                  id={`vacancy-${i}`}
                >
                  <div className="vacancy-panel-inner">
                    <h3 className="vacancy-title">{v.title}</h3>
                    <div className="vacancy-block">
                      <h4>Требования</h4>
                      <ul>
                        {v.requirements.map((req, j) => (
                          <li key={j}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="vacancy-block">
                      <h4>Условия</h4>
                      <ul>
                        {v.conditions.map((cond, j) => (
                          <li key={j}>{cond}</li>
                        ))}
                      </ul>
                    </div>
                    {(v as any).responsibilities && (
                      <div className="vacancy-block">
                        <h4>Обязанности</h4>
                        <ul>
                          {(v as any).responsibilities.map((resp: string, j: number) => (
                            <li key={j}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {(v as any).note && (
                      <p className="vacancy-note">{(v as any).note}</p>
                    )}
                    <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--accent">Откликнуться <span className="btn-dot"></span></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ REFERRAL ═══════════ */}
        <section className="section section--alt" id="referral">
          <div className="container">
            <div className="referral-inner reveal">
              <div className="referral-content">
                <div className="label label--accent">бонус</div>
                <h2 className="h2 split-text" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                  Приведи подругу — получи <span className="h-accent">300$</span>
                </h2>
                <p className="section-lead" style={{ marginBottom: '32px' }}>
                  Знаешь, кому подойдёт работа в YES? Мы ценим рекомендации и{'\u00A0'}платим <strong>300$</strong> за{'\u00A0'}каждую приведённую модель (при{'\u00A0'}условии заработка ею первых 300$).
                </p>
                <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--accent">Узнать подробности <span className="btn-dot"></span></a>
              </div>
              <div className="referral-visual">
                <div className="referral-amount">300<span>$</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ BLOG ═══════════ */}
        <section className="section" id="blog">
          <div className="container">
            <div className="section-header reveal" style={{ textAlign: 'center' }}>
              <div className="label label--accent">блог</div>
              <h2 className="h2 split-text">Полезные <span className="h-accent">статьи</span></h2>
              <p className="section-lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Честные ответы на{'\u00A0'}все вопросы о{'\u00A0'}работе стрим-моделью: карьера, доход, безопасность и{'\u00A0'}лайфстайл.</p>
            </div>

            <div className="blog-grid reveal" id="blogGrid">
              {blogLoading ? (
                <>
                  <div className="blog-card blog-card--skeleton"><div className="blog-card__img"></div><div className="blog-card__body"><div className="skel skel--tag"></div><div className="skel skel--title"></div><div className="skel skel--text"></div><div className="skel skel--meta"></div></div></div>
                  <div className="blog-card blog-card--skeleton"><div className="blog-card__img"></div><div className="blog-card__body"><div className="skel skel--tag"></div><div className="skel skel--title"></div><div className="skel skel--text"></div><div className="skel skel--meta"></div></div></div>
                  <div className="blog-card blog-card--skeleton"><div className="blog-card__img"></div><div className="blog-card__body"><div className="skel skel--tag"></div><div className="skel skel--title"></div><div className="skel skel--text"></div><div className="skel skel--meta"></div></div></div>
                </>
              ) : blogPosts.length > 0 ? (
                blogPosts.map((post) => (
                  <a key={post._id} href={`/blog/${post.slug?.current || ''}`} className="blog-card">
                    {post.mainImage?.asset?._ref && (
                      <div className="blog-card__img">
                        <img src={sanityImageUrl(post.mainImage.asset._ref)} alt={post.title} loading="lazy" />
                      </div>
                    )}
                    <div className="blog-card__body">
                      {post.categories?.[0] && (
                        <span className="blog-card__tag">{post.categories[0].title}</span>
                      )}
                      <h3 className="blog-card__title">{post.title}</h3>
                      {post.excerpt && <p className="blog-card__text">{post.excerpt}</p>}
                      <div className="blog-card__meta">
                        {new Date(post.publishedAt).toLocaleDateString('ru-RU', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </div>
                    </div>
                  </a>
                ))
              ) : (
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', gridColumn: '1 / -1' }}>Статьи скоро появятся</p>
              )}
            </div>

            <div className="blog-more reveal">
              <a href="/blog/" className="btn btn--outline">Все статьи <span className="btn-dot"></span></a>
            </div>
          </div>
        </section>

        {/* ═══════════ FINAL CTA ═══════════ */}
        <section className="final-cta final-cta--photo">
          <div className="cursor-glow" id="ctaGlow"></div>
          <div className="final-cta-inner reveal">
            <div className="label" style={{ color: 'rgba(245,240,235,0.3)' }}>начни сегодня</div>
            <h2 className="final-cta-title">Готова <br />изменить <em>свою</em> <br />жизнь?</h2>
            <p className="final-cta-sub">
              Одно сообщение отделяет тебя от{'\u00A0'}финансовой свободы, нового окружения и{'\u00A0'}жизни, о{'\u00A0'}которой ты мечтаешь.
            </p>
            <div className="final-cta-actions">
              <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--accent">Написать в Telegram <span className="btn-dot"></span></a>
              <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="btn btn--ghost-light">Задать вопрос</a>
            </div>
            <div className="final-cta-note">Бесплатная консультация {'\u00B7'} Без{'\u00A0'}обязательств</div>
          </div>
        </section>

        {/* ═══════════ STICKY WIDGET ═══════════ */}
        <div className={`sticky-widget${stickyVisible ? ' visible' : ''}`}>
          <span className="sticky-dot"></span>
          В{'\u00A0'}феврале осталось <strong>3 из 5</strong> мест
          <a href="https://t.me/studio_yes" target="_blank" rel="noopener noreferrer" className="sticky-cta">
            Занять своё место{' '}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

      </main>
    </>
  );
}
