# Yes Studio — Design Guidelines
**На основе актуального deployed сайта (https://yes-studio-xi.vercel.app/)**

Дата: 16 февраля 2026
Версия: 2.0 (актуализировано)

---

## 🎨 Визуальная концепция

**Стиль:** Luxury + Modern Minimalism
**Настроение:** Премиальная студия — тёплая сексуальность, уверенность, aspirational lifestyle
**Tone:** Уверенный, с характером. Sexy-elegant, не wholesome и не вульгарный. "Я хочу быть такой"

---

## 🎨 Цветовая палитра

### Основные цвета

```css
/* Backgrounds */
--bg: #F5F0EB              /* Светлый бежево-кремовый (основной фон) */
--bg-alt: #E8E2DA          /* Альтернативный фон (чуть темнее) */
--bg-sand: #C8B9A8         /* Песочный (акцентные секции) */
--bg-dark: #1E1C1A         /* Тёмная секция (почти чёрный) */
--bg-card: #FFFEFA         /* Фон карточек (светлее основного) */

/* Text */
--text: #2C2926            /* Основной текст (тёмно-коричневый) */
--text-body: #3B3735       /* Body текст (чуть светлее) */
--text-muted: #AAA89F      /* Приглушенный текст (meta, labels) */
--text-cream: #F5F0EB      /* Светлый текст (на тёмном bg) */

/* Accent */
--accent: #8B1F31          /* Красно-бордовый (primary accent) */
--accent-light: #A52840    /* Светлее (hover states) */

/* Functional */
--divider: rgba(170, 168, 159, 0.3)  /* Разделители */
--success: #6BBF7B         /* Зелёный (success, "онлайн" статус) */
```

### Использование цветов

| Цвет | Применение |
|------|------------|
| **#F5F0EB (bg)** | Основной фон сайта и блога |
| **#2C2926 (text)** | Заголовки, основной текст |
| **#8B1F31 (accent)** | CTA кнопки, заголовки H2, ссылки hover, акценты |
| **#1E1C1A (bg-dark)** | Тёмные секции (footer, контрастные блоки) |
| **#FFFEFA (bg-card)** | Фон карточек, блоков |
| **#AAA89F (text-muted)** | Метаданные, даты, вспомогательный текст |

---

## 📝 Типографика

### Font Stack

```css
--font: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
--font-heading: 'Forum', Georgia, 'Times New Roman', serif;
```

**Загрузка:**
```html
<link href="https://fonts.googleapis.com/css2?family=Forum&family=Manrope:wght@300;400;500;600;700&display=swap">
```

### Использование шрифтов

| Контекст | Шрифт | Вес | Стиль |
|----------|-------|-----|-------|
| **H1 (Hero)** | Manrope / Forum | 700 | Uppercase, letter-spacing 0.03em |
| **H2 (Sections)** | Manrope / Forum | 700 | Uppercase или normal case |
| **H3 (Cards)** | Manrope | 700 | Uppercase, letter-spacing 0.04em |
| **Body** | Manrope | 400 | Normal |
| **Buttons** | Manrope | 500-600 | Uppercase, letter-spacing 0.08em |
| **Labels/Meta** | Manrope | 500 | Uppercase, small (11-12px) |

### Типографическая шкала

```css
/* Адаптивные заголовки */
H1 Hero: 48-88px (clamp)
H2: 32-52px (clamp)
H3: 16-18px

/* Body */
Large: 17px, line-height 1.7
Medium: 16px, line-height 1.6
Small: 14px, line-height 1.55
XSmall: 11-12px, line-height 1

/* Letter spacing */
Headings: 0.03-0.04em
Buttons: 0.08em
Labels: 0.02-0.08em
```

---

## 🎭 Визуальные эффекты

### Grain Texture Overlay

Едва заметный grain-эффект поверх фотографий для cinematic feel.

**Применение:** На hero images, photo sections

---

### Градиенты на фото

Затемняющие градиенты поверх фотографий для лучшей читаемости текста.

```css
.photo-overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
}
```

---

### Border Radius

```css
--radius-card: 20px;      /* Карточки */
--radius-btn: 50px;       /* Кнопки (полное скругление) */
--radius-photo: 20px;     /* Фотографии */
```

---

### Transitions

```css
/* Standard */
transition: all 0.3s ease;

/* Slow (images) */
transition: transform 0.7s ease;

/* Very smooth */
transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
```

---

## 🧱 Компоненты

### Кнопки

#### Primary CTA (Accent)
```css
background: var(--accent);
color: #fff;
padding: 16px 32px;
border-radius: var(--radius-btn);
font-weight: 600;
letter-spacing: 0.08em;
text-transform: uppercase;
transition: background 0.3s ease;
```

**Hover:** `background: var(--accent-light);`

#### Secondary CTA (Outline)
```css
border: 2px solid var(--text);
background: transparent;
color: var(--text);
padding: 16px 32px;
border-radius: var(--radius-btn);
```

**Hover:** `background: var(--text); color: var(--bg);`

---

### Cards

```css
background: var(--bg-card);
border-radius: var(--radius-card);
padding: 20px 24px 24px;
transition: transform 0.3s ease, box-shadow 0.3s ease;
```

**Hover:**
```css
transform: translateY(-3px);
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
```

---

### Navigation

#### Fixed Header
```css
position: fixed;
height: 64px;
background: rgba(245, 240, 235, 0.92);
backdrop-filter: blur(16px);
```

#### Navigation Links
```css
font-size: 14px;
color: var(--text);
transition: color 0.3s ease;
```

**Hover:** `color: var(--accent);`

---

## 📐 Layout & Spacing

### Container

```css
--container: 1280px;
max-width: var(--container);
margin: 0 auto;
padding: 0 var(--side-pad);
```

### Horizontal Padding

```css
--side-pad: 64px;   /* Desktop */

@media (max-width: 1024px) {
  --side-pad: 32px; /* Tablet */
}

@media (max-width: 768px) {
  --side-pad: 20px; /* Mobile */
}
```

### Vertical Spacing

```css
--section-pad: 120px;   /* Desktop */

@media (max-width: 1024px) {
  --section-pad: 80px;  /* Tablet */
}
```

### Grid Gaps

```css
gap: 24px;   /* Standard grid */
gap: 16px;   /* Tight grid (cards) */
gap: 8px;    /* In-card elements */
```

---

## 🎬 Анимации

### Reveal на скролле

Элементы появляются с fade-in + slide-up при скролле.

```css
opacity: 0;
transform: translateY(30px);
transition: opacity 0.7s ease, transform 0.7s ease;

/* In view */
opacity: 1;
transform: translateY(0);
```

### Parallax

Hero images двигаются медленнее при скролле.

```javascript
// Scroll offset для parallax effect
```

### Hover Transitions

- **Images:** `scale(1.04)`, duration 0.7s
- **Buttons:** `background-color`, duration 0.3s
- **Cards:** `translateY(-3px)`, duration 0.3s

---

## 🖼️ Фотографии

### Aspect Ratios

```css
aspect-ratio: 3 / 2;    /* BlogCard thumbnails */
aspect-ratio: 16 / 9;   /* Hero banners */
aspect-ratio: 4 / 5;    /* Portrait photos */
aspect-ratio: 1 / 1;    /* Square (avatars) */
```

### Object Fit

```css
object-fit: cover;      /* Все фотографии */
```

### Grain Overlay

```css
position: relative;

&::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('data:image/svg+xml,...'); /* SVG grain */
  opacity: 0.04;
  pointer-events: none;
}
```

---

## 📱 Breakpoints

```css
/* Desktop first approach */
@media (max-width: 1280px) { /* Large laptop */ }
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small mobile */ }
```

---

## ✅ Design Principles

### 1. **Luxury + Minimalism**
- Много whitespace
- Asymmetric grids (bento-style)
- Тонкие элементы (1-2px borders)
- Soft shadows вместо harsh

### 2. **Warm + Premium**
- Cream/beige фон вместо белого
- Бордовый accent вместо яркого красного
- Serif заголовки для elegance
- Sans-serif body для readability

### 3. **Cinematic Photography**
- Grain texture overlay
- Gradient overlays на фото
- Кинематографичные пропорции (16:9, 21:9)
- Параллакс для depth

### 4. **Smooth Interactions**
- Плавные transitions (0.3-0.7s)
- Reveal animations на скролле
- Hover states со scale/translateY
- Backdrop blur на fixed elements

### 5. **Accessible Hierarchy**
- Чёткая типографическая иерархия
- Высокий контраст текста (WCAG AA+)
- Минимум 44×44px для touch targets
- Читаемые line-heights (1.6-1.7)

---

## 📊 Component Inventory

**Main Site компоненты:**
- ✅ Fixed Navigation (glass effect)
- ✅ Hero Section (asymmetric layout, parallax photo)
- ✅ Bento Grid (мозаичная сетка)
- ✅ Cards (с hover elevation)
- ✅ CTA Buttons (primary + secondary)
- ✅ Form (contact, application)
- ✅ Footer (dark theme)

**Blog компоненты** (shared design system):
- ✅ BlogCard (thumbnail 3:2, hover scale)
- ✅ Category Filter
- ✅ Article Layout (single column, sidebar)
- ✅ Related Posts

---

## 🎨 Blog-specific Notes

**Блог использует ТУ ЖЕ визуальную систему:**
- Same colors (#F5F0EB bg, #8B1F31 accent)
- Same fonts (Forum + Manrope)
- Same spacing system
- Same components (cards, buttons)

**Различия минимальны:**
- Более строгая типографическая сетка (single column reading)
- Меньше asymmetry (focus на readability)
- Blog-specific components (CategoryFilter, RelatedPosts)

→ **Фото для блога должны использовать те же цвета и стиль!**

---

## 🚀 Рекомендации для AI-генерации фото

На основе этой дизайн-системы, фотографии должны:

1. **Тон:** Sexy-elegant, premium, aspirational (Reformation / Skims level)

2. **Цвета:**
   - Warm cream (#F5F0EB) backgrounds
   - Одежда: champagne, silk, black, burgundy, camel, terracotta
   - Subtle burgundy (#8B1F31) accents

3. **Lighting:**
   - Natural window light + warm ring light
   - Golden hour (3500-4500K)
   - Soft, не harsh

3. **Style:**
   - Premium lifestyle, NOT stock, NOT wholesome
   - Cinematic feel (Kodak Portra 400, grain, slight desaturation)
   - Sexy-elegant: сексуальность через стиль, не через тело

4. **Works on:**
   - Light cream #F5F0EB background (НЕ dark)
   - With gradient overlays (if needed for text)
   - With subtle grain texture overlay

**Детальные требования см.:** `docs/photo-style-guide.md`

---

**Версия:** 2.0 (актуально по состоянию на deployed site)
**URL:** https://yes-studio-xi.vercel.app/
