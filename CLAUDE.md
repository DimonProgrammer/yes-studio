# YES Studio — Claude Code Instructions

## Стек и запуск

- **React 18 + TypeScript + Vite** (entry: `app.html`, не `index.html`)
- **CSS**: кастомный BEM, без Tailwind. Переменные: `--bg: #F5F0EB`, `--accent: #8B1F31`, `--font: Manrope`, `--font-heading: Forum`
- **Роутинг**: React Router v7, Layout-паттерн
- **Деплой**: Vercel, auto-deploy при push в `main`
- **Фотографии**: `/public/photos/`, ссылки как `/photos/...`

---

## Архитектура: Shared Components

### Правило: никогда не дублируй инлайн то, что уже есть в компоненте

| Элемент | Компонент | Используется через |
|---|---|---|
| Хедер + навигация | `src/components/Header.tsx` | `Layout.tsx` → все страницы |
| Бургер-меню | внутри `Header.tsx` | `Layout.tsx` → все страницы |
| Футер | `src/components/Footer.tsx` | `Layout.tsx` → все страницы |
| CTA-форма (поля, валидация, сабмит) | `src/components/CTAForm.tsx` | импорт в Home.tsx и Vacancies.tsx |

### Если нужно изменить шапку, бургер или футер:
→ Редактируй **только** соответствующий компонент. Никогда не добавляй дублирующий хедер/футер инлайн в страницы.

### Если нужно изменить форму заявки:
→ Редактируй **только** `src/components/CTAForm.tsx`. На Home.tsx и Vacancies.tsx изменение применится автоматически.

### CTA-секция (обёртка вокруг формы):
Сам `<CTAForm />` синхронизирован. Но секция-обёртка (заголовок, badge, trust-items) инлайн в каждой странице. Если нужна полная синхронизация обёртки — вынести в компонент `CTASectionWrapper`.

---

## CSS: где хранятся стили компонентов

Все стили — в `src/index.css`. Стили компонентов **не инлайнятся** через `style={}`, кроме одноразовых позиционных корректировок.

Блоки в index.css разделены заголовками:
```
/* ═══ HEADER ═══ */
/* ═══ FOOTER ═══ */
/* ═══ FAQ BLOCK ═══ */
/* ═══ CTA FORM ═══ */
```

---

## Анимации: reveal + React state — критическое правило

**НЕЛЬЗЯ** ставить класс `reveal` на элементы, у которых `className` динамически меняется через React state.

**Причина**: IntersectionObserver добавляет класс `visible` напрямую в DOM (`el.classList.add('visible')`). Когда React перерисовывает элемент с обновлённым `className`, он заменяет атрибут целиком — `visible` удаляется, элемент становится невидимым.

**Правило**:
- `reveal` ставь на **контейнер-обёртку**, которая не меняет className через state
- На интерактивных элементах (аккордеоны, табы, тоглы) используй только классы состояния без `reveal`

```jsx
// ❌ Неправильно — reveal + open на одном элементе
<div className={`faq-item reveal${open ? ' open' : ''}`}>

// ✅ Правильно — reveal на контейнере, open на элементе
<div className="faq-list reveal">
  <div className={`faq-item${open ? ' open' : ''}`}>
```

---

## Журнал багов

Каждый исправленный нетривиальный баг фиксируется здесь. Формат: что было, почему возникло, как исправлено, вывод на будущее.

---

### [2026-02-19] FAQ аккордеон не открывался

**Симптом**: клик по вопросу в блоке FAQ не открывал ответ.

**Причина**: Элемент `faq-item` имел className `"faq-item reveal"`, к которому IntersectionObserver добавлял `visible` напрямую в DOM. При клике React обновлял state (`openFaq`), перерисовывал элемент с `"faq-item reveal open"` — это заменяло атрибут `class` целиком, удаляя `visible`. Элемент становился `opacity: 0` (невидимым), хотя CSS-переход `max-height` на `faq-answer` технически срабатывал.

**Исправление**: убрал `reveal` с `faq-item`, поставил его на контейнер `faq-list` (он не перерисовывается при открытии пунктов).

```jsx
// было
<div className={`faq-item reveal${openFaq === i ? ' open' : ''}`}>

// стало
<div className="faq-list reveal">
  <div className={`faq-item${openFaq === i ? ' open' : ''}`}>
```

**Вывод**: `reveal` несовместим с React-управляемым `className`. Всегда вешай `reveal` на статичный родительский контейнер.

---

## Структура страниц

```
src/
├── App.tsx                  — роутер
├── main.tsx                 — точка входа
├── index.css                — все стили
├── components/
│   ├── Header.tsx           — хедер + бургер (shared)
│   ├── Footer.tsx           — футер (shared)
│   ├── CTAForm.tsx          — форма заявки (shared)
│   ├── Layout.tsx           — обёртка: Header + Outlet + Footer
│   └── Preloader.tsx        — прелоадер
└── pages/
    ├── Home.tsx             — главная (17 секций, ~1700 строк)
    ├── About.tsx            — о студии
    ├── Vacancies.tsx        — вакансии
    ├── FAQ.tsx              — FAQ
    ├── Calculator.tsx       — калькулятор
    ├── Reviews.tsx          — отзывы
    ├── Gallery.tsx          — галерея
    ├── Contacts.tsx         — контакты
    └── ...
```

### Порядок секций Home.tsx:
Hero → Hook → Marquee → Services/Bento → Studio → Calculator → About Work → Stories → Diversity → Process → Requirements → CTA Form (#apply) → FAQ → Vacancies → Referral → Blog → Final CTA

---

## Важные ID и якоря

| ID | Блок |
|---|---|
| `#hero` | Главный экран |
| `#calc` | Калькулятор |
| `#apply` | CTA-форма (заявка) |
| `#stories` | Реальные истории |
| `#faq` | FAQ |
| `#vacancies` | Вакансии |

---

## SEO — не трогать без ревью

- URL-структуру страниц
- Текст H1 заголовков
- Meta title / description
- Alt-теги изображений
