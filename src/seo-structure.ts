/**
 * ═══════════════════════════════════════════════════════════════
 *  YES STUDIO — SEO Structure & Configuration
 *  Единый источник правды для всех SEO-настроек сайта
 * ═══════════════════════════════════════════════════════════════
 *
 *  КРИТИЧНО: Текущий Vite SPA рендерит контент на клиенте —
 *  Google видит пустой <div id="root"></div>, как и на Creatium.
 *
 *  РЕШЕНИЕ (выбрать одно):
 *  1. vite-plugin-prerender — SSG для Vite (минимальные изменения)
 *  2. Миграция на Next.js App Router (лучше для мульти-страниц)
 *  3. Astro + React islands (максимальный контроль HTML)
 *
 *  Рекомендация: вариант 1 (prerender) на первом этапе,
 *  если не планируем больше 5-6 страниц.
 * ═══════════════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────
// 1. PAGES — Мета-теги и SEO для каждой страницы
// ─────────────────────────────────────────

export const pages = {
  /**
   * ГЛАВНАЯ — хаб-страница, ведёт на городские лендинги.
   * Сейчас /msk — основная посадочная из поиска.
   * Главная — общий бренд + выбор города.
   */
  home: {
    path: '/',
    // 301-redirect: нет (корневая)
    title: 'Yes Studio — вебкам студия в Москве и Ростове-на-Дону | Работа моделью',
    description:
      'Вебкам студия Yes Studio. Non-nude формат, доход от 100 000₽, ' +
      'бесплатное обучение. Офисы в Москве и Ростове-на-Дону. Оставьте заявку.',
    h1: 'Вебкам студия Yes Studio — работа онлайн моделью',
    canonical: 'https://yes-studio.agency/',
    og: {
      type: 'website',
      image: '/og/home.jpg', // 1200x630, подготовить
      locale: 'ru_RU',
    },
  },

  /**
   * МОСКВА — основная посадочная страница.
   * Целевые запросы:
   *   - "вебкам студия Москва"
   *   - "вебкам студия в Москве"
   *   - "работа веб моделью Москва"
   *   - "работа онлайн моделью Москва"
   *
   * URL /msk СОХРАНЯЕМ — совпадает с текущим сайтом.
   */
  moscow: {
    path: '/msk',
    title: 'Вебкам студия в Москве — Yes Studio | Работа моделью от 100 000₽',
    description:
      'Вебкам студия Yes Studio в Москве. Non-nude формат, доход от 100 000₽/мес, ' +
      'еженедельные выплаты. Бесплатное обучение и личный менеджер. Оставьте заявку →',
    h1: 'Вебкам студия в Москве — Yes Studio',
    canonical: 'https://yes-studio.agency/msk',
    og: {
      type: 'website',
      image: '/og/moscow.jpg',
      locale: 'ru_RU',
    },
  },

  /**
   * РОСТОВ-НА-ДОНУ — вторая городская страница.
   * Целевые запросы:
   *   - "вебкам студия Ростов"
   *   - "вебкам студия Ростов-на-Дону"
   *   - "работа моделью Ростов-на-Дону"
   *
   * URL меняем: /os (неочевидно) → /rostov
   * 301-redirect: /os → /rostov
   */
  rostov: {
    path: '/rostov',
    title: 'Вебкам студия в Ростове-на-Дону — Yes Studio | Работа моделью',
    description:
      'Yes Studio в Ростове-на-Дону. Non-nude вебкам студия с доходом от 100 000₽. ' +
      '7 лет опыта, 500+ моделей. Оборудование 4K/6K VR. Оставьте заявку →',
    h1: 'Вебкам студия в Ростове-на-Дону — Yes Studio',
    canonical: 'https://yes-studio.agency/rostov',
    og: {
      type: 'website',
      image: '/og/rostov.jpg',
      locale: 'ru_RU',
    },
  },

  /**
   * ОТЗЫВЫ — UGC-контент, доверие, E-E-A-T.
   * Сейчас /os и /os-msk — голые формы. Нужен реальный контент.
   *
   * 301-redirects:
   *   /os     → /otzyvy
   *   /os-msk → /otzyvy
   */
  reviews: {
    path: '/otzyvy',
    title: 'Отзывы моделей о Yes Studio — реальные истории и результаты',
    description:
      'Реальные отзывы моделей Yes Studio. Истории успеха, доходы, ' +
      'условия работы. Читайте честные отзывы девушек из Москвы и Ростова.',
    h1: 'Отзывы моделей Yes Studio',
    canonical: 'https://yes-studio.agency/otzyvy',
    og: {
      type: 'website',
      image: '/og/reviews.jpg',
      locale: 'ru_RU',
    },
  },

  /**
   * ВАКАНСИИ — для операторов и менеджеров.
   * Второстепенная страница, но полезна для:
   *   - "работа оператор вебкам"
   *   - "вакансии вебкам студия"
   */
  jobs: {
    path: '/vakansii',
    title: 'Вакансии Yes Studio — работа оператором и менеджером',
    description:
      'Вакансии в вебкам студии Yes Studio. Операторы от 70 000₽, HR-менеджеры, ' +
      'администраторы. Москва и Ростов-на-Дону.',
    h1: 'Вакансии в Yes Studio',
    canonical: 'https://yes-studio.agency/vakansii',
    og: {
      type: 'website',
      image: '/og/jobs.jpg',
      locale: 'ru_RU',
    },
  },
} as const;

// ─────────────────────────────────────────
// 2. CONTENT STRUCTURE — Секции каждой страницы
// ─────────────────────────────────────────

/**
 * Структура контента для городских лендингов (/msk, /rostov).
 * Порядок секций оптимизирован под конверсию:
 * Hero → Trust → Income → Differentiators → How → Gallery → Reviews → FAQ → CTA → Footer
 *
 * Эта структура УЖЕ реализована в App.tsx.
 * Ниже — маппинг секций на heading hierarchy для SEO.
 */
export const landingStructure = {
  sections: [
    {
      id: 'hero',
      // H1 — один на страницу, с городом и ключевым словом
      // Пример: "Вебкам студия в Москве — Yes Studio"
      heading: 'h1',
      seoNote: 'Ключ "вебкам студия" + город в первых 60 символах',
    },
    {
      id: 'trust-ticker',
      // Без заголовка — бегущая строка с цифрами
      heading: null,
      seoNote: 'Цифры (500+ моделей, 7 лет) — trust signals, не нужен heading',
    },
    {
      id: 'income',
      heading: 'h2', // "Сколько зарабатывают наши модели"
      seoNote: 'Ключ "сколько зарабатывает вебкам модель" — высокочастотный',
    },
    {
      id: 'differentiators',
      heading: 'h2', // "Почему выбирают Yes Studio"
      seoNote: 'H3 для каждого преимущества (non-nude, менеджер, выплаты, график)',
    },
    {
      id: 'how-it-works',
      heading: 'h2', // "Как начать работать"
      seoNote: 'H3 для каждого шага (Заявка, Обучение, Заработок)',
    },
    {
      id: 'gallery',
      heading: null,
      seoNote: 'Alt-теги: "Рабочее место модели Yes Studio Москва" и т.д.',
    },
    {
      id: 'reviews',
      heading: 'h2', // "Отзывы моделей"
      seoNote: 'Реальные имена + город + срок работы — E-E-A-T сигнал',
    },
    {
      id: 'guarantees',
      heading: null,
      seoNote: 'Цифры-счётчики — crawlable text, не картинки',
    },
    {
      id: 'faq',
      heading: 'h2', // "Часто задаваемые вопросы"
      seoNote: 'FAQPage schema обязательна — даёт rich snippets в Google',
    },
    {
      id: 'cta-form',
      heading: 'h2', // "Оставить заявку"
      seoNote: 'Форма должна быть в HTML, не генерироваться через JS',
    },
    {
      id: 'footer',
      heading: null,
      seoNote: 'Адреса, телефоны, ссылки — NAP consistency для local SEO',
    },
  ],
} as const;

// ─────────────────────────────────────────
// 3. SCHEMA MARKUP — Structured Data (JSON-LD)
// ─────────────────────────────────────────

/**
 * Размещение: в <head> каждой страницы через <script type="application/ld+json">
 * Формат: JSON-LD (рекомендация Google)
 *
 * ВАЖНО: schema должна быть в HTML ДО гидратации React.
 * При prerender / SSG — она попадёт в статический HTML автоматически.
 */

/** Глобальная schema — на КАЖДОЙ странице */
export const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://yes-studio.agency/#organization',
      name: 'Yes Studio',
      url: 'https://yes-studio.agency',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yes-studio.agency/logo.png',
        width: 512,
        height: 512,
      },
      description: 'Вебкам студия non-nude формата в Москве и Ростове-на-Дону',
      telephone: '+7 (928) 234-83-39', // Реальный телефон из каталога
      foundingDate: '2018',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 500,
        unitText: 'моделей',
      },
      sameAs: [
        'https://t.me/studio_yes',
        // Добавить Instagram, VK когда будут ссылки
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+7 (928) 234-83-39',
        contactType: 'customer service',
        availableLanguage: 'Russian',
        areaServed: 'RU',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://yes-studio.agency/#website',
      url: 'https://yes-studio.agency',
      name: 'Yes Studio',
      publisher: { '@id': 'https://yes-studio.agency/#organization' },
      inLanguage: 'ru',
    },
  ],
};

/**
 * LocalBusiness schema — отдельная для КАЖДОГО города.
 * Даёт карточку в Google Maps и локальную выдачу.
 *
 * ВАЖНО: адреса должны совпадать с Google Business Profile и Яндекс.Справочником.
 */
export function createLocalBusinessSchema(city: 'moscow' | 'rostov') {
  const data = {
    moscow: {
      name: 'Yes Studio Москва',
      url: 'https://yes-studio.agency/msk',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '', // TODO: уточнить реальный адрес у клиента
        addressLocality: 'Москва',
        addressRegion: 'Москва',
        postalCode: '', // TODO
        addressCountry: 'RU',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 0, // TODO: координаты офиса
        longitude: 0,
      },
    },
    rostov: {
      name: 'Yes Studio Ростов-на-Дону',
      url: 'https://yes-studio.agency/rostov',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '', // TODO: уточнить
        addressLocality: 'Ростов-на-Дону',
        addressRegion: 'Ростовская область',
        postalCode: '',
        addressCountry: 'RU',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 0, // TODO
        longitude: 0,
      },
    },
  };

  const cityData = data[city];

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EmploymentAgency'],
    '@id': `${cityData.url}/#localbusiness`,
    name: cityData.name,
    url: cityData.url,
    telephone: '+7 (928) 234-83-39',
    address: cityData.address,
    geo: cityData.geo,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    // Привязка к основной организации
    parentOrganization: {
      '@id': 'https://yes-studio.agency/#organization',
    },
    // AggregateRating — добавить когда будут реальные отзывы
    // aggregateRating: {
    //   '@type': 'AggregateRating',
    //   ratingValue: '4.9',
    //   reviewCount: '127',
    //   bestRating: '5',
    // },
  };
}

/**
 * FAQPage schema — для FAQ-секции на лендингах.
 * Даёт rich snippets (аккордеон) прямо в Google.
 * Вопросы должны совпадать с текстом на странице ТОЧНО.
 */
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Что такое non-nude формат?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non-nude — это формат работы без обнажения. Ты общаешься с аудиторией, развлекаешь, поддерживаешь диалог. Основа заработка — харизма, обаяние и умение поддержать разговор. Никаких откровенных действий.',
      },
    },
    {
      '@type': 'Question',
      name: 'Нужен ли опыт работы?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Нет. 90% наших моделей пришли без какого-либо опыта. Мы обучаем с нуля: от техники общения до настройки рабочего места. Персональный менеджер ведёт тебя на каждом этапе.',
      },
    },
    {
      '@type': 'Question',
      name: 'Сколько я реально буду зарабатывать?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'В первый месяц — от 70 000 ₽ при работе от 4 часов в день. Через 3–6 месяцев опытные модели выходят на 150 000–300 000 ₽. Топ-модели зарабатывают от 300 000 ₽.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какой график работы?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Полностью гибкий. Минимум — 4 часа в день. Ты сама выбираешь время: утро, день или вечер. Можно работать из студии или из дома. Многие совмещают с учёбой или другой работой.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как происходят выплаты?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Выплаты — каждую неделю, без задержек. На карту любого банка. Прозрачная система: ты всегда видишь, сколько заработала. Никаких скрытых комиссий или удержаний.',
      },
    },
    {
      '@type': 'Question',
      name: 'Это безопасно? Мои данные защищены?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Полностью. Мы работаем официально, с юридическим оформлением. Персональные данные защищены. Конфиденциальность — наш приоритет. За 7 лет работы ни одного инцидента.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли работать из дома?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. Мы предоставляем всё необходимое оборудование и помогаем с настройкой. Также можно работать из наших студий в Москве и Ростове-на-Дону.',
      },
    },
  ],
};

// ─────────────────────────────────────────
// 4. TECHNICAL SEO — Robots, Sitemap, Redirects
// ─────────────────────────────────────────

/**
 * robots.txt — положить в /public/robots.txt
 *
 * Ключевые решения:
 * - Host директива для Яндекса (сохраняем с текущего сайта)
 * - Блокируем служебные страницы
 * - Sitemap в корне
 */
export const robotsTxt = `# Yes Studio — robots.txt
User-agent: *
Allow: /

Disallow: /404
Disallow: /thankyou
Disallow: /privacy

# Яндекс-специфика (сохраняем с текущего сайта — работало)
Host: https://yes-studio.agency

Sitemap: https://yes-studio.agency/sitemap.xml
`;

/**
 * Sitemap — генерировать автоматически при билде.
 * Инструмент: vite-plugin-sitemap или ручной скрипт.
 *
 * Ключевые отличия от текущего:
 * - lastmod проставлен (текущий sitemap без дат — Google игнорирует)
 * - priority дифференцирован (было 0.5 на всех)
 * - URL /os заменён на /rostov
 */
export const sitemapConfig = {
  hostname: 'https://yes-studio.agency',
  routes: [
    { path: '/',        changefreq: 'weekly',  priority: 1.0 },
    { path: '/msk',     changefreq: 'weekly',  priority: 0.9 },
    { path: '/rostov',  changefreq: 'weekly',  priority: 0.9 },
    { path: '/otzyvy',  changefreq: 'daily',   priority: 0.7 },
    { path: '/vakansii', changefreq: 'monthly', priority: 0.5 },
  ],
};

/**
 * 301-редиректы — настроить на уровне хостинга (Vercel/Nginx).
 *
 * ОБЯЗАТЕЛЬНО для сохранения ссылочного веса и индексации.
 * Эти URL существуют на текущем сайте → Google может иметь их в индексе.
 */
export const redirects = [
  // Старые URL текущего сайта на Creatium
  { from: '/os',      to: '/otzyvy',  status: 301 },
  { from: '/os-msk',  to: '/otzyvy',  status: 301 },

  // Старый домен (если восстановим SSL)
  // Настраивать на DNS/серверном уровне:
  // yeswebcam.ru/*  →  yes-studio.agency/*  (301)

  // www → non-www (консистентность)
  // www.yes-studio.agency → yes-studio.agency (301)
];

/**
 * Для Vercel — положить в vercel.json:
 * {
 *   "redirects": [
 *     { "source": "/os",     "destination": "/otzyvy", "permanent": true },
 *     { "source": "/os-msk", "destination": "/otzyvy", "permanent": true }
 *   ]
 * }
 *
 * Для Nginx:
 * location = /os     { return 301 /otzyvy; }
 * location = /os-msk { return 301 /otzyvy; }
 */

// ─────────────────────────────────────────
// 5. OG & SOCIAL TAGS — Шаблон для каждой страницы
// ─────────────────────────────────────────

/**
 * Open Graph теги — для шеринга в Telegram, VK, Instagram.
 * Целевая аудитория активна в соцсетях → OG критичен.
 *
 * Изображения: 1200×630px, формат JPG, < 300KB.
 * Подготовить для каждой страницы.
 */
export function createOgTags(page: keyof typeof pages) {
  const p = pages[page];
  return {
    'og:type': p.og.type,
    'og:url': p.canonical,
    'og:title': p.title,
    'og:description': p.description,
    'og:image': `https://yes-studio.agency${p.og.image}`,
    'og:locale': p.og.locale,
    'og:site_name': 'Yes Studio',
    // Twitter Card (работает и для Telegram)
    'twitter:card': 'summary_large_image',
    'twitter:title': p.title,
    'twitter:description': p.description,
    'twitter:image': `https://yes-studio.agency${p.og.image}`,
  };
}

// ─────────────────────────────────────────
// 6. IMAGE SEO — Alt-теги
// ─────────────────────────────────────────

/**
 * Каждое изображение на сайте должно иметь alt-тег.
 * Формат: [что на фото] + [контекст бренда] + [город если релевантно]
 *
 * НЕ делать: alt="photo1.jpg" или alt=""
 */
export const imageAltTemplates = {
  hero: 'Модель Yes Studio — работа онлайн моделью в {город}',
  studio: 'Рабочее место в вебкам студии Yes Studio {город}',
  interior: 'Интерьер студии Yes Studio — комфортные условия работы',
  team: 'Команда менеджеров Yes Studio',
  equipment: 'Профессиональное оборудование 4K в студии Yes Studio',
  review: 'Модель {имя}, {город} — отзыв о работе в Yes Studio',
};

// ─────────────────────────────────────────
// 7. HEADING HIERARCHY — Правильная иерархия
// ─────────────────────────────────────────

/**
 * ПРАВИЛА (нарушение = потеря позиций):
 *
 * 1. Один H1 на страницу — ВСЕГДА с ключевым словом + город
 * 2. H2 для каждой секции — описывает содержание секции
 * 3. H3 для подпунктов внутри секции
 * 4. НИКОГДА не пропускать уровни (H1 → H3 без H2)
 * 5. Headings — семантические (<h2>), НЕ стилизованные <div>
 *
 * В текущем App.tsx уже используются <h1>, <h2>, <h3> — это хорошо.
 * Но H1 сейчас "ЗАРАБАТЫВАЙ на общении БЕЗ ОБНАЖЕНИЯ" —
 * нет ключевого слова "вебкам студия" и города.
 *
 * РЕШЕНИЕ: H1 = "Вебкам студия в Москве — Yes Studio"
 * Креативный заголовок "ЗАРАБАТЫВАЙ..." → визуальный акцент через CSS,
 * но семантически он не H1.
 */
export const headingHierarchy = {
  '/msk': {
    h1: 'Вебкам студия в Москве — Yes Studio',
    h2: [
      'Сколько зарабатывают наши модели',
      'Почему выбирают Yes Studio',
      'Как начать работать',
      'Отзывы моделей',
      'Часто задаваемые вопросы',
      'Оставить заявку',
    ],
    h3: [
      // Под "Почему выбирают"
      'Только non-nude формат',
      'Личный менеджер с первого дня',
      'Еженедельные выплаты',
      'Свободный график работы',
      // Под "Как начать"
      'Заявка',
      'Обучение',
      'Заработок',
    ],
  },
  '/rostov': {
    h1: 'Вебкам студия в Ростове-на-Дону — Yes Studio',
    // Те же H2/H3, но с учётом Ростова
    h2: [
      'Сколько зарабатывают наши модели в Ростове',
      'Почему выбирают Yes Studio',
      'Как начать работать',
      'Отзывы моделей из Ростова',
      'Часто задаваемые вопросы',
      'Оставить заявку',
    ],
  },
};

// ─────────────────────────────────────────
// 8. INTERNAL LINKING — Перелинковка
// ─────────────────────────────────────────

/**
 * Навигация + контекстные ссылки между страницами.
 * Каждая страница должна ссылаться на остальные.
 *
 * Текущий сайт — одностраничник (всё в одном App.tsx).
 * При разбивке на страницы — обязательно связать.
 */
export const internalLinks = {
  header: [
    { label: 'Москва',   href: '/msk' },
    { label: 'Ростов',   href: '/rostov' },
    { label: 'Отзывы',   href: '/otzyvy' },
    { label: 'Вакансии', href: '/vakansii' },
  ],
  footer: [
    { label: 'Вебкам студия в Москве',          href: '/msk' },
    { label: 'Вебкам студия в Ростове-на-Дону',  href: '/rostov' },
    { label: 'Отзывы моделей',                    href: '/otzyvy' },
    { label: 'Вакансии',                          href: '/vakansii' },
    { label: 'Политика конфиденциальности',       href: '/privacy' },
  ],
  // Контекстные ссылки внутри контента
  contextual: [
    // На странице Москвы — ссылка на Ростов
    { from: '/msk',    anchor: 'Также работаем в Ростове-на-Дону', href: '/rostov' },
    // На странице Ростова — ссылка на Москву
    { from: '/rostov', anchor: 'Также работаем в Москве',          href: '/msk' },
    // На страницах городов — ссылка на отзывы
    { from: '/msk',    anchor: 'Читать все отзывы',                href: '/otzyvy' },
    { from: '/rostov', anchor: 'Читать все отзывы',                href: '/otzyvy' },
  ],
};

// ─────────────────────────────────────────
// 9. PRERENDER CONFIG — SSG для Vite
// ─────────────────────────────────────────

/**
 * Чтобы Google видел контент, нужен prerender.
 *
 * Установка:
 *   npm install vite-plugin-prerender
 *
 * В vite.config.ts:
 *   import prerender from 'vite-plugin-prerender'
 *   plugins: [react(), tailwindcss(), prerender({
 *     routes: ['/', '/msk', '/rostov', '/otzyvy', '/vakansii'],
 *     renderer: new PuppeteerRenderer()
 *   })]
 *
 * Это создаст статические HTML для каждого маршрута при билде.
 * Google получит готовый HTML с контентом, мета-тегами и schema.
 *
 * АЛЬТЕРНАТИВА (если SPA не будет масштабироваться):
 *   Миграция на Next.js или Astro.
 */
export const prerenderRoutes = [
  '/',
  '/msk',
  '/rostov',
  '/otzyvy',
  '/vakansii',
  '/privacy',
  '/thankyou',
];

// ─────────────────────────────────────────
// 10. YANDEX-SPECIFIC — Настройки для Яндекса
// ─────────────────────────────────────────

/**
 * Яндекс — основной поисковик ЦА (Россия).
 * Специфичные настройки:
 */
export const yandexConfig = {
  // Мета-тег верификации (получить в Яндекс.Вебмастер)
  verification: '<meta name="yandex-verification" content="TODO_VERIFICATION_CODE" />',

  // Host директива в robots.txt (уже есть — сохраняем)
  host: 'https://yes-studio.agency',

  // Яндекс.Справочник — ОБЯЗАТЕЛЬНО зарегистрировать оба офиса
  // https://yandex.ru/sprav/
  // Адреса, телефоны, часы работы, фото — должны совпадать с сайтом

  // Яндекс.Метрика — ID счётчика
  metrikaId: 0, // TODO: получить от клиента или создать

  // Турбо-страницы — не нужны (устаревшая технология)
  // Яндекс.Вебмастер — подать sitemap и запросить переиндексацию
};

// ─────────────────────────────────────────
// 11. ANALYTICS — Трекинг
// ─────────────────────────────────────────

/**
 * Счётчики — добавить в <head>, но НЕ блокировать рендеринг.
 * Использовать async/defer.
 */
export const analytics = {
  // Google Analytics 4
  ga4: {
    id: '', // TODO: G-XXXXXXXXXX
    // Подключение:
    // <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXX"></script>
  },

  // Яндекс.Метрика
  metrika: {
    id: 0, // TODO
    // Включить: вебвизор, карту кликов, карту скроллинга
    // Цели: отправка формы, клик по телефону, клик по Telegram
  },
};

// ─────────────────────────────────────────
// 12. POST-LAUNCH CHECKLIST
// ─────────────────────────────────────────

/**
 * После деплоя нового сайта:
 *
 * □ Проверить все страницы в Google Rich Results Test
 *   https://search.google.com/test/rich-results
 *
 * □ Подать sitemap в Google Search Console
 *   https://search.google.com/search-console
 *
 * □ Подать sitemap в Яндекс.Вебмастер
 *   https://webmaster.yandex.ru
 *
 * □ Запросить переиндексацию главных страниц
 *   (/ , /msk , /rostov) через Inspect URL → Request Indexing
 *
 * □ Проверить 301-редиректы (/os → /otzyvy, /os-msk → /otzyvy)
 *
 * □ Проверить canonical теги на каждой странице
 *
 * □ Проверить OG-теги через https://cards-dev.twitter.com/validator
 *
 * □ Проверить скорость через PageSpeed Insights
 *   Цели: LCP < 2.5s, CLS < 0.1, INP < 200ms
 *
 * □ Зарегистрировать/обновить Яндекс.Справочник для обоих городов
 *
 * □ Зарегистрировать/обновить Google Business Profile
 *
 * □ Восстановить SSL на yeswebcam.ru и настроить 301 → yes-studio.agency
 *
 * □ Обновить URL в каталогах (webcam-studio.ru и др.)
 */
