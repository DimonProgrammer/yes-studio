# Расширение yes-studio до многостраничной структуры

**Дата:** 17.02.2026
**Фаза:** 1 — Фундамент (SPA + React Router)

---

## Что было сделано

### 1. Установлены зависимости
- `react-router-dom` — клиентская маршрутизация
- `react-helmet-async` — мета-теги для SEO на каждой странице

### 2. Создана SPA-точка входа
- **`app.html`** — новый entry point для Vite (вместо root `index.html`)
- `index.html` (4300 строк) остался как есть — это текущий продакшен-сайт
- В `app.html`: Google Fonts (Forum + Manrope), OG-теги, favicon, mount point `#root`

### 3. Извлечён CSS из index.html
- **`src/index.css`** (2610 строк) — весь продакшен CSS, извлечённый из inline `<style>` в index.html
- CSS-переменные: `--bg: #F5F0EB`, `--accent: #8B1F31`, `--font: Manrope`, `--font-heading: Forum`
- Tailwind **удалён** — проект использует чистый кастомный CSS с BEM

### 4. Настроена маршрутизация

**`src/main.tsx`** — entry point React:
```tsx
<HelmetProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</HelmetProvider>
```

**`src/App.tsx`** — тонкая обёртка с Routes (вместо монолита 1261 строк):
```
/ → Home
/about → About
/vacancies → Vacancies
/reviews → Reviews
/calculator → Calculator
/gallery → Gallery
/faq → FAQ
/contacts → Contacts
* → NotFound (404)
```

### 5. Созданы компоненты Layout

| Файл | Строк | Что делает |
|------|-------|-----------|
| `src/components/Layout.tsx` | 25 | Обёртка: Header + `<Outlet />` + Footer, scroll-to-top при навигации |
| `src/components/Header.tsx` | 237 | Хедер: логотип SVG, метро, телефон, Telegram, бургер-меню, полноэкранный nav overlay. Scroll-эффект `header--scrolled`. Якорные ссылки на секции главной |
| `src/components/Footer.tsx` | 91 | Футер: партнёрские логотипы, бренд, навигация, контакты, дисклеймер 18+, юр. ссылки |

### 6. Создана главная страница

**`src/pages/Home.tsx`** (1343 строки) — все 17 секций из продакшен HTML:

1. **Hero** — фон, бейдж NON-NUDE, заголовок, CTA, статистика с анимированными счётчиками
2. **Hook** — эмоциональный блок "боли" (5 pain cards)
3. **Stories** — истории моделей (Дарья, Алина, Кристина, Виктория) с expand/collapse
4. **Marquee** — бегущая строка YES STUDIO / PREMIUM / МОСКВА
5. **Services (Bento)** — 6 карточек "Почему мы лучшие"
6. **Studio** — видеоплеер + мозаичная фотогалерея (5 фото комнат)
7. **Calculator** — интерактивный калькулятор дохода (смены × часы × опыт, base=700₽/ч)
8. **Diversity** — "Мы работаем со всеми" (5 категорий)
9. **Process** — 5 шагов от заявки до дохода
10. **About Work** — 6 карточек условий (Non-Nude, честные %, безопасный старт, etc.)
11. **Requirements** — 6 карточек "Что нужно для начала"
12. **FAQ** — 12 вопросов с аккордеоном
13. **Vacancies** — 3 табы (Модель / Агент / Администратор)
14. **Referral** — "Приведи подругу — получи 300$"
15. **Blog** — Sanity CMS блог-карточки (с fallback на скелетоны)
16. **Final CTA** — "Готова изменить свою жизнь?"
17. **Sticky Widget** — плавающий виджет "3 из 5 мест"

**React-функционал:**
- `useState` для FAQ аккордеона, вкладок вакансий, expand историй, калькулятора, видео
- `useEffect` + `IntersectionObserver` для `.reveal` → `.visible` анимации
- Анимированные счётчики в Hero (easeOutExpo)
- Калькулятор с формулой: `shifts × hours × 4 × 700 × expMultiplier`
- Sanity CMS fetch для блог-секции
- Sticky widget по скроллу

### 7. Созданы placeholder-страницы

Все страницы используют продакшен CSS-классы (`section`, `container`, `label`, `h2`, `h-accent`, `section-lead`, `btn btn--accent`, `btn btn--outline`):

| Страница | Title | Описание |
|----------|-------|----------|
| `/about` | О студии YES | Placeholder, "Страница в разработке" |
| `/vacancies` | Вакансии в YES | Placeholder |
| `/reviews` | Отзывы моделей YES | Placeholder |
| `/calculator` | Калькулятор дохода YES | Placeholder |
| `/gallery` | Галерея YES Studio | Placeholder |
| `/faq` | FAQ — Частые вопросы | Placeholder |
| `/contacts` | Контакты YES Studio | Телефон + Telegram ссылки |
| `*` (404) | 404 — Страница не найдена | Крупная "404" + кнопка "На главную" |

### 8. Обновлены конфиги

**`vite.config.ts`:**
- Entry: `app.html` (не index.html)
- Плагин: только `@vitejs/plugin-react` (Tailwind удалён)
- Dev-сервер: порт 3000

**`scripts/build.js`:**
- Запускает `npx vite build`
- Переименовывает `dist/app.html` → `dist/index.html`
- Собирает Astro-блог в `dist/blog/`

**`vercel.json`:**
- Rewrite: `/blog/:path*` → `/blog/:path*` (Astro)
- Rewrite: все остальные → `/index.html` (SPA fallback)
- Кэширование: `/assets/*` immutable, `/photos/*`, `/images/*` immutable

**`tsconfig.json`:**
- include: `["src/**/*.tsx", "src/**/*.ts"]`

### 9. Удалены устаревшие файлы

- `src/data/` (8 файлов) — данные из старого neon-дизайна
- `src/utils/text.ts` — утилиты nb(), hl()
- `src/components/LogoSVG.tsx`, `MarkSVG.tsx`, `HeritageLogoText.tsx` — компоненты neon-дизайна
- `src/components/Counter.tsx`, `Reveal.tsx`, `FAQItem.tsx` — компоненты neon-дизайна
- `public/index.html` — битый файл (ссылался на несуществующий main-cartier.tsx)

---

## Результат сборки

```
dist/app.html          →  dist/index.html (SPA)
dist/assets/app.css     41.65 KB (gzip: 8.39 KB)
dist/assets/app.js     298.92 KB (gzip: 88.08 KB)
```

58 модулей, сборка за 2.6с. Без ошибок.

---

## Что ещё нужно сделать (Фаза 2)

1. Наполнить placeholder-страницы реальным контентом:
   - `/faq` — полная FAQ-страница со Schema FAQPage
   - `/contacts` — карта, адреса, форма
   - `/about` — история студии, достижения
   - `/vacancies` — hub + 3 детальных страницы (model/agent/admin) со Schema JobPosting
   - `/reviews` — отзывы со Schema Review
   - `/calculator` — полноценная страница калькулятора
   - `/gallery` — фотогалерея студии

2. SEO (Фаза 3):
   - `vite-plugin-prerender` для статической генерации
   - Обновить `public/sitemap.xml`
   - 301-редиректы с якорей на страницы
   - Schema.org JSON-LD разметка

---

## Архитектура

```
app.html                    ← Vite entry point
├── src/main.tsx             ← React mount + BrowserRouter + HelmetProvider
├── src/App.tsx              ← Routes → Layout → Pages
├── src/index.css            ← Продакшен CSS (2610 строк)
├── src/components/
│   ├── Layout.tsx           ← Header + Outlet + Footer
│   ├── Header.tsx           ← Навигация, бургер, overlay
│   └── Footer.tsx           ← Подвал с партнёрами и контактами
├── src/pages/
│   ├── Home.tsx             ← Главная (1343 строки, все 17 секций)
│   ├── About.tsx            ← Placeholder
│   ├── Vacancies.tsx        ← Placeholder
│   ├── Reviews.tsx          ← Placeholder
│   ├── Calculator.tsx       ← Placeholder
│   ├── Gallery.tsx          ← Placeholder
│   ├── FAQ.tsx              ← Placeholder
│   ├── Contacts.tsx         ← Телефон + Telegram
│   └── NotFound.tsx         ← 404
│
index.html                   ← Старый продакшен (НЕ ТРОГАТЬ, 4300 строк)
blog/                        ← Astro + Sanity CMS (не затронут)
```

## Важные заметки

- **`index.html`** — это текущий продакшен-сайт (vanilla HTML/JS). Он остаётся нетронутым как reference. Новый SPA собирается из `app.html`
- **Дизайн**: бордовый (#8B1F31) + кремовый (#F5F0EB), Forum + Manrope. НЕ neon gold (#CCFF00)
- **Блог** (`/blog/`) обслуживается отдельно Astro — SPA его не затрагивает
- **Пути к картинкам**: в React компонентах используется `/photos/...` (Vite подставляет из public/)
- **`src/photos.ts`** — мёртвый код от старого дизайна, можно удалить
