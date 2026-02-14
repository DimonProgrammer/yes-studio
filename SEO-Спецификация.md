# SEO-Спецификация для yes-studio.agency

## Введение

Этот документ содержит техническую SEO-спецификацию для редизайна сайта yes-studio.agency. Цель — сохранить текущие позиции в поисковой выдаче и улучшить видимость за счёт корректной технической реализации.

**Критический контекст:** Текущий сайт на конструкторе Creatium с JS-рендерингом. Переход на SSR (Next.js/Nuxt/обычный HTML) **улучшит** SEO, но только при соблюдении всех требований ниже.

---

## 1. Title и Meta Description

### Текущее состояние
- **Title:** `Студия моделей YES` (слабая оптимизация)
- **Meta Description:** не извлекается из-за JS-рендеринга

### Требования для редизайна

**Title (59 символов, укладывается в лимит Google):**
```html
<title>Вебкам студия YES в Москве — работа стрим-моделью NON-NUDE 18+</title>
```

**Почему эта формула:**
- "Вебкам студия" — основной высокочастотный запрос ниши (все конкуренты используют)
- "YES" — брендовая составляющая
- "в Москве" — гео-таргетинг (конкуренты это делают: Apelsin, L13, Exotica)
- "работа стрим-моделью" — целевое действие
- "NON-NUDE" — ключевое УТП, снижает нецелевой трафик
- "18+" — юридическая составляющая

**Meta Description (155 символов):**
```html
<meta name="description" content="Работа стрим-моделью в Москве без nude. Доход от 150 000 ₽/мес, обучение с нуля, ежедневные выплаты. Студия YES — 7 лет на рынке, 527+ моделей.">
```

**Структура:**
- Что: работа стрим-моделью
- Где: в Москве
- УТП: без nude
- Цифры: 150 000 ₽, 7 лет, 527+ моделей
- CTA косвенный: обучение с нуля, ежедневные выплаты

**Альтернативный вариант (160 символов):**
```html
<meta name="description" content="Вебкам студия YES в Москве. Работа моделью NON-NUDE с доходом 90-300К ₽/мес. Обучение, поддержка 24/7, выплаты каждый день. Честные условия без nude-давления.">
```

---

## 2. Open Graph и Social Meta Tags

Для корректного отображения в соцсетях (Facebook, VK, Telegram):

```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yes-studio.agency/">
<meta property="og:title" content="Вебкам студия YES — работа стрим-моделью в Москве">
<meta property="og:description" content="NON-NUDE студия с доходом от 150К ₽. Обучение с нуля, выплаты каждый день, 7 лет на рынке.">
<meta property="og:image" content="https://yes-studio.agency/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="ru_RU">
<meta property="og:site_name" content="YES Studio">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Вебкам студия YES — работа стрим-моделью в Москве">
<meta name="twitter:description" content="NON-NUDE студия с доходом от 150К ₽. Обучение с нуля, выплаты каждый день.">
<meta name="twitter:image" content="https://yes-studio.agency/og-image.jpg">

<!-- Additional Meta -->
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<meta name="googlebot" content="index, follow">
<link rel="canonical" href="https://yes-studio.agency/">
```

**TODO:** Создать og-image.jpg размером 1200×630px с брендингом YES Studio.

---

## 3. Schema.org Разметка (JSON-LD)

### 3.1. Organization Schema

**Конкурентное преимущество:** Только L13 из конкурентов использует Schema.org. YES Studio будет вторым.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "YES Studio",
  "alternateName": "Студия моделей YES",
  "url": "https://yes-studio.agency/",
  "logo": "https://yes-studio.agency/logo.svg",
  "description": "Вебкам студия в Москве. Работа стрим-моделью NON-NUDE с доходом от 150 000 ₽/мес. Обучение с нуля, поддержка 24/7.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Москва",
    "addressCountry": "RU",
    "addressRegion": "Москва"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+7-963-938-02-67",
    "contactType": "customer service",
    "availableLanguage": ["Russian"]
  },
  "sameAs": [
    "https://t.me/yes_studio_contact"
  ],
  "foundingDate": "2018",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "527+"
  }
}
</script>
```

### 3.2. FAQPage Schema

**Эффект:** Расширенный сниппет в Google с вопросами прямо в выдаче.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "В чём заключается работа стрим-моделью?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ведение онлайн-трансляции на зарубежных площадках. Ты общаешься, улыбаешься, слушаешь. По сути — оплачиваемое виртуальное общение и флирт."
      }
    },
    {
      "@type": "Question",
      "name": "У меня нет опыта, есть ли обучение?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "90% наших моделей пришли без опыта. Оплачиваемый тестовый период + персональный куратор обучит с нуля."
      }
    },
    {
      "@type": "Question",
      "name": "Сколько я буду зарабатывать?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Старт от 90 000 ₽ в первый месяц. Средний доход — 150 000 ₽+. Потолка нет."
      }
    },
    {
      "@type": "Question",
      "name": "Нужно ли знать английский язык?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Нет. Автоматический переводчик делает общение бесшовным. Со временем выучишь язык на практике."
      }
    },
    {
      "@type": "Question",
      "name": "Модельная внешность обязательна?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Нет. Важна эмоция, ухоженность и харизма. Мы поможем подчеркнуть твои достоинства."
      }
    },
    {
      "@type": "Question",
      "name": "Получится ли совмещать с основной работой?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Да. Ты сама выбираешь время и график."
      }
    },
    {
      "@type": "Question",
      "name": "Как происходят выплаты?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Наличными или на криптокошелёк. Ежедневно или раз в неделю — без задержек."
      }
    },
    {
      "@type": "Question",
      "name": "Меня не увидят знакомые и жители моей страны?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Гарантируем. Строгий Гео-блок на РФ и СНГ на всех площадках."
      }
    },
    {
      "@type": "Question",
      "name": "Что с отпусками?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Отдых каждые 3 месяца. Не спрашивая ни у кого разрешения."
      }
    },
    {
      "@type": "Question",
      "name": "Нужно ли за что-то платить?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Нет. Фотосессии, образ, обучение — всё бесплатно. Это наши инвестиции в твой успех."
      }
    },
    {
      "@type": "Question",
      "name": "Стриминг — это законно и безопасно?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Абсолютно. Non-Nude (общение) легально и безопасно. Мы работаем 7 лет."
      }
    },
    {
      "@type": "Question",
      "name": "Мои личные данные в безопасности?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Да. Никаких третьих лиц. Анкета — только для верификации возраста (18+)."
      }
    }
  ]
}
</script>
```

### 3.3. JobPosting Schema (для каждой вакансии)

**Эффект:** Вакансии появятся в Google for Jobs.

**Вакансия: Модель**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Стрим-модель (вебкам-модель)",
  "description": "Работа стрим-моделью в NON-NUDE категории. Доход от 90 000 ₽ в месяц. Гибкий график, обучение с нуля, поддержка 24/7.",
  "datePosted": "2026-02-14",
  "validThrough": "2027-02-14",
  "employmentType": "PART_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "YES Studio",
    "sameAs": "https://yes-studio.agency/"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Москва",
      "addressCountry": "RU"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "RUB",
    "value": {
      "@type": "QuantitativeValue",
      "value": 150000,
      "minValue": 90000,
      "maxValue": 300000,
      "unitText": "MONTH"
    }
  },
  "qualifications": "Девушки от 18 до 35 лет с опрятным внешним видом. Готовность к выработке часового норматива. Опыт не требуется.",
  "responsibilities": "Ведение онлайн-трансляции в формате NON-NUDE (общение без раздевания). Общение с пользователями на английском языке (с автопереводчиком).",
  "industry": "Entertainment",
  "occupationalCategory": "Model"
}
</script>
```

**Вакансия: Агент**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Агент по привлечению моделей",
  "description": "Поиск и привлечение моделей в вебкам-студию. Вознаграждение: 300$ за каждую приведённую модель при условии заработка ею первых 300$.",
  "datePosted": "2026-02-14",
  "validThrough": "2027-02-14",
  "employmentType": "CONTRACTOR",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "YES Studio",
    "sameAs": "https://yes-studio.agency/"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Москва",
      "addressCountry": "RU"
    }
  }
}
</script>
```

**Вакансия: Администратор**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Администратор вебкам-студии",
  "description": "Работа администратором в вебкам-студии YES. Управление студией, поддержка моделей, организация процессов.",
  "datePosted": "2026-02-14",
  "validThrough": "2027-02-14",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "YES Studio",
    "sameAs": "https://yes-studio.agency/"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Москва",
      "addressCountry": "RU"
    }
  }
}
</script>
```

---

## 4. Критические H-теги (НЕЛЬЗЯ МЕНЯТЬ)

Эти 10 заголовков должны остаться **слово-в-слово**, так как они уже индексированы Google:

### Обязательные H-теги

1. **H1:** `STREAM MODEL AGENCY`
2. **H2:** `Почему мы лучшие на рынке?`
3. **H2:** `О работе в нашей компании`
4. **H2:** `Преимущества работы стрим-моделью`
5. **H2:** `О нашей студии`
6. **H2:** `Вакансии в нашей студии`
7. **H2:** `FAQ` + **H3:** `Ответы на часто задаваемые вопросы`
8. **H3:** `Твоё рабочее пространство`
9. **H3:** `Реальные фотографии комнат`
10. **H3:** `Видео нашей студии`

### Обязательные H3 в вакансиях

- **H3:** `Модель`
- **H3:** `Агент`
- **H3:** `Администратор`

### Обязательные H4 в вакансиях

- **H4:** `Требования`
- **H4:** `Условия`
- **H4:** `Обязанности` (для Администратора)

### Все 12 FAQ-вопросов (H4)

1. В чём заключается работа стрим-моделью?
2. У меня нет опыта, есть ли обучение?
3. Сколько я буду зарабатывать?
4. Нужно ли знать английский язык?
5. Модельная внешность обязательна?
6. Получится ли совмещать с основной работой?
7. Как происходят выплаты?
8. Меня не увидят знакомые и жители моей страны?
9. Что с отпусками?
10. Нужно ли за что-то платить?
11. Стриминг — это законно и безопасно?
12. Мои личные данные в безопасности?

**ВАЖНО:** В FAQ #11 обязательно слово "Стриминг" (ключевое слово), в FAQ #8 — "жители моей страны" (long-tail).

---

## 5. Дополнительные H-теги (восстановлены после аудита)

Эти заголовки были утеряны в промежуточных версиях, но восстановлены в v2.1:

- **H3:** `Обучение английскому на практике` (в Bento Grid, карточка 6)
- **H3:** `Приведи подругу — получи 300$` (секция 14.5, реферальная программа)

---

## 6. Robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$

Sitemap: https://yes-studio.agency/sitemap.xml
```

---

## 7. Sitemap.xml

Создать XML-карту сайта. Для одностраничника достаточно одной записи:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yes-studio.agency/</loc>
    <lastmod>2026-02-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**В будущем** (если появятся отдельные страницы для вакансий, отзывов, блога) — добавить их в sitemap.

---

## 8. Дополнительные meta-теги

```html
<!-- Language -->
<html lang="ru">

<!-- Charset -->
<meta charset="UTF-8">

<!-- Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Theme Color (для мобильных браузеров) -->
<meta name="theme-color" content="#8B1A1A">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/logo.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

<!-- Preconnect (если используются внешние шрифты/CDN) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## 9. Core Web Vitals Рекомендации

Для хорошего ранжирования в Google (Page Experience Update):

### Largest Contentful Paint (LCP) — <2.5s
- Оптимизировать hero-изображение (WebP, lazy loading для остальных)
- Использовать SSR/SSG, не CSR
- Предзагружать критические ресурсы (`<link rel="preload">`)

### First Input Delay (FID) — <100ms
- Минимизировать тяжёлый JavaScript
- Отложить неблокирующие скрипты (`defer`, `async`)
- Калькулятор и интерактив не должны блокировать main thread

### Cumulative Layout Shift (CLS) — <0.1
- Зарезервировать пространство для изображений (`width`, `height`)
- Не вставлять контент динамически выше fold
- Sticky header не должен "прыгать"

**Инструменты для проверки:**
- Google PageSpeed Insights
- Lighthouse (в Chrome DevTools)
- WebPageTest

---

## 10. Мониторинг после запуска

### Google Search Console
1. Добавить сайт в GSC
2. Отправить sitemap.xml
3. Проверить индексацию (URL Inspection Tool)
4. Отслеживать ошибки (Coverage Report)
5. Мониторить Core Web Vitals

### Яндекс.Вебмастер
1. Добавить сайт
2. Проверить robots.txt и sitemap
3. Отслеживать индексацию
4. Мониторить позиции по ключевым запросам

### Ключевые запросы для отслеживания
- вебкам студия Москва
- работа стрим-моделью
- работа моделью онлайн
- вебкам студия non-nude
- работа моделью без раздевания
- студия моделей YES
- вебкам Котельники (гео-запрос)

### KPI через 1-3 месяца после запуска
- Сохранение позиций по брендовым запросам ("YES studio", "студия YES")
- Рост позиций по коммерческим ("вебкам студия Москва")
- Увеличение органического трафика на 10-20%
- Появление в Google for Jobs (вакансии)
- Расширенные сниппеты FAQ в выдаче

---

## 11. Чек-лист перед запуском

- [ ] Title соответствует формуле (59 символов)
- [ ] Meta Description заполнен (155-160 символов)
- [ ] Open Graph теги заполнены (og:image 1200×630)
- [ ] Создан og-image.jpg
- [ ] Schema.org Organization добавлена
- [ ] Schema.org FAQPage добавлена (12 вопросов)
- [ ] Schema.org JobPosting для 3 вакансий
- [ ] Все 10 критических H-тегов на месте
- [ ] Все 12 FAQ-вопросов (H4) на месте слово-в-слово
- [ ] Robots.txt создан
- [ ] Sitemap.xml создан и доступен
- [ ] Canonical URL указан
- [ ] Lang="ru" установлен
- [ ] Favicon и apple-touch-icon на месте
- [ ] Сайт работает на HTTPS
- [ ] Редиректы с HTTP на HTTPS настроены
- [ ] 404-страница существует
- [ ] Скорость загрузки <3s (Google PageSpeed >90)
- [ ] Core Web Vitals в зелёной зоне
- [ ] Адаптивность (mobile-friendly test)
- [ ] Google Search Console настроен
- [ ] Яндекс.Вебмастер настроен

---

## 12. Что МОЖНО менять без риска

- Визуальный дизайн (цвета, шрифты, layout)
- Порядок блоков на одностраничнике
- Добавление новых секций (калькулятор, отзывы)
- Изменение длины текста в параграфах
- Замена изображений
- Анимации и интерактив

## 13. Что НЕЛЬЗЯ менять

- URL (https://yes-studio.agency/ — остаётся тот же домен)
- 10 критических H-тегов (список в разделе 4)
- 12 FAQ-вопросов (текст H4)
- Удаление ключевых секций ("О работе в нашей компании", "Вакансии", "FAQ", "Преимущества")

---

**Дата создания:** 14 февраля 2026
**Версия:** 1.0
**Автор:** Claude (на основе SEO-аудита 4 агентов)

