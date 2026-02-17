# Freepik Visual Generation для Yes Studio

Генерация и поиск визуального контента для Yes Studio с соблюдением брендового стиля и фото-направления проекта.

---

## 📋 Когда использовать

- Пользователь просит сгенерировать изображение для сайта
- Нужны фотографии моделей, портреты, интерьеры студии
- Требуются визуалы для hero section, testimonials, blog
- Нужны detail shots, атмосферные кадры

---

## 🎨 Контекст проекта Yes Studio

### Позиционирование
- **Бренд:** Yes Studio — премиум вебкам студия в Москве
- **ЦА:** Привлекательные девушки 18-28, амбициозные, визуально грамотные
- **Это PREMIUM:** мы ищем красивых и уверенных, не всех подряд
- **Вход:** NON-NUDE формат (снижает барьер на лендинге)
- **Tone:** Уверенный, с характером (НЕ wholesome, НЕ агрессивный)

### Визуальный стиль сайта (АКТУАЛЬНЫЙ)
- **Тема:** Светлая, тёплая, editorial luxury
- **Палитра:** Cream #F5F0EB + burgundy #8B1F31 + sand #C8B9A8
- **Тёмные секции:** #1E1C1A
- **Типографика:** Forum (serif headings) + Manrope (body)
- **Настроение:** Премиальная теплота, уверенная сексуальность, доверие

### Фото-формула: Премиум + Сексуальность + Тепло + Контекст студии

**Шкала тона:**
```
Wholesome/boring ←——— ★ МЫ ЗДЕСЬ ★ ———→ Explicit/вульгарно
Everlane, COS        Reformation, Skims,     OnlyFans
                     Are You Am I
```

**Ключевая мысль:** Фото вызывают "Я ХОЧУ быть такой" — aspirational, sexy-elegant, но не explicit

**Детали:** `docs/RESEARCH/photo-style-guide.md` — полный гайд

---

## 🛠️ Доступные Freepik MCP Tools

1. **freepik_generate_image** — генерация по промпту
2. **freepik_search** — поиск в библиотеке
3. **freepik_upscale_image** — апскейл
4. **freepik_remove_background** — удаление фона

---

## 📐 Типы контента

### 1. Hero Portrait

**Когда:** "hero image", "фото для первого экрана"

**Параметры:**
- Aspect ratio: Portrait 3:4
- Subject: красивая девушка, waist-up, уверенная
- Одежда: sexy-elegant (silk camisole, open shoulders, body-con knit)
- Композиция: subject справа, space слева для текста
- Lighting: window light + ring light glow
- Mood: "I know my worth" — aspirational confidence

**Промпт:**
```
Portrait of confident beautiful young woman, 24 years old,
natural glowing skin, professional but natural makeup,
wearing champagne silk camisole top, delicate gold necklace,
sitting relaxed with confident posture,
looking at camera with slight knowing smile and self-assured expression,
soft natural window light from left mixed with warm ring light glow,
background: blurred modern elegant interior with warm tones,
shot with 50mm f/2.0, creating soft creamy bokeh,
Kodak Portra 400 film aesthetic, warm color grading,
slight film grain texture, lifted shadows,
subject positioned on right side leaving negative space on left,
3:4 portrait ratio,
mood: "I know my worth" — aspirational, sexy-elegant, confident

Style: premium lifestyle photography, editorial quality, authentic NOT stock
Colors: cream, champagne, warm gold light, soft skin tones
Avoid: explicit, revealing, harsh lighting, stock photography, fake smile,
cold tones, heavy makeup, wholesome/boring
```

---

### 2. Testimonial Headshots

**Когда:** "портреты для отзывов", "аватары моделей"

**Параметры:**
- Aspect ratio: 1:1 (будет круглым)
- Headshot, плечи в кадре
- Уверенный + дружелюбный взгляд
- Разные типажи КРАСИВЫХ девушек
- Макияж: clean but done
- Lighting: мягкое, flattering

**Промпт (вариация — брюнетка):**
```
Natural headshot portrait of attractive young woman, 23 years old,
dark brown shoulder-length hair with soft waves,
clear glowing skin, subtle professional makeup,
wearing simple black silk top, thin gold chain necklace,
looking directly at camera with warm confident expression and slight smile,
even soft warm lighting, no harsh shadows,
background: soft blur, warm cream tones,
shot with 85mm f/2.0, Kodak Portra 400 aesthetic,
centered composition for 1:1 square crop,
mood: confident, "I love what I do"

Style: lifestyle portrait, real attractive woman NOT fashion model
Avoid: stock smile, heavy makeup, white background, cold tones, wholesome
```

**Вариации для разнообразия:**
- Блондинка, loose waves, cream cashmere sweater
- Каштановая, кудри, burgundy silk top
- Тёмные волосы, straight, off-shoulder knit

---

### 3. Process / Behind-the-scenes

**Когда:** "девушка за работой", "рабочий процесс", "BTS"

**Промпт:**
```
Lifestyle shot of attractive young woman sitting at modern desk,
facing professional ring light and camera setup,
wearing cozy cream cashmere sweater with one shoulder slightly exposed,
warm ambient lighting from ring light on face,
background: elegant studio room with warm decor, candles, plants,
shot with 50mm f/2.8, Kodak Portra 400 warm tones,
mood: focused but comfortable, professional workspace

Style: behind-the-scenes, authentic work environment
Avoid: harsh flash, messy, unflattering, stock
```

---

### 4. Studio Interior

**Когда:** "интерьер студии", "фото комнат"

**Промпт:**
```
Wide interior shot of elegant modern studio room,
cream walls with decorative molding, comfortable sofa with throw pillows,
warm ambient lighting from table lamps and LED strips,
plants in corners, candles on coffee table,
professional ring light visible near desk area,
light wooden floors, soft neutral color palette,
shot with 24mm f/4.0,
warm desaturated tones, slight film grain,
4:3 landscape ratio,
mood: "I'd love to work here" — premium, cozy, feminine

Style: interior design photography, inviting NOT corporate
Avoid: clinical, cold, messy, cheap
```

---

### 5. Detail Shots

**Когда:** "детали", "атмосфера", "мелочи"

**Варианты промптов:**

**Silk robe + ring light:**
```
Close-up detail shot of silk champagne robe draped over modern chair,
professional ring light with warm glow in soft background blur,
warm window light, Kodak Portra 400 tones,
mood: premium backstage atmosphere
```

**Coffee + workspace:**
```
Lifestyle detail of ceramic coffee cup with latte on wooden desk,
laptop edge visible, small candle, warm golden light,
shallow depth of field, 50mm f/2.0,
Kodak Portra 400, warm desaturated,
mood: cozy productive morning
```

---

### 6. Gallery / Bento

**Когда:** "фото для галереи", "bento grid", "атмосферные портреты"

**Промпт (edgy-confident):**
```
Lifestyle portrait of stylish young woman, 25 years old,
wearing oversized camel blazer over black silk bralette,
leaning against cream wall with confident relaxed pose,
warm natural light creating soft shadows,
shot with 50mm f/1.8, shallow bokeh,
Kodak Portra 400, warm tones, slight grain,
mood: "I own this" — edgy confidence, self-assured

Style: editorial lifestyle, premium NOT cheap
Avoid: explicit, stock, cold, corporate
```

---

## 🎯 Workflow

### Шаг 1: Определи тип контента
- Для какого блока? (hero / testimonials / BTS / detail / gallery)
- Aspect ratio?
- Сколько вариантов?

### Шаг 2: Сначала поиск, потом генерация
```
freepik_search → если ничего не подошло → freepik_generate_image
```

### Шаг 3: Создай промпт из шаблонов выше
Меняй только переменные: внешность, одежду, позу

### Шаг 4: Генерируй 2-3 варианта для выбора

### Шаг 5: Валидация по чеклисту

### Шаг 6: Сохранение
```
public/photos/[category]-[subject]-[variant].jpg
```

---

## ✅ Чеклист перед отправкой

- [ ] Sexy-elegant (НЕ explicit, НЕ boring)
- [ ] Premium feeling (не дешёвый вайб)
- [ ] Warm tones (Portra, НЕ холодные)
- [ ] Девушка привлекательная и уверенная
- [ ] Одежда в палитре бренда (cream, black, burgundy, camel)
- [ ] Хорошо на кремовом фоне #F5F0EB
- [ ] НЕ пугает ЦА (ничего explicit)
- [ ] Вызывает "я хочу быть такой"
- [ ] Правильный aspect ratio
- [ ] Не stock photography

---

## 🔄 Итерация промптов

| Проблема | Добавить |
|---|---|
| Слишком stock | `+ candid, editorial, authentic moment` |
| Слишком холодно | `+ golden hour, warm 3500K, Kodak Portra` |
| Слишком wholesome | `+ sexy-elegant, confident, self-assured, silk` |
| Слишком explicit | `+ tasteful, styled, clothing covers appropriately` |
| Слишком гламурно | `+ natural beauty, professional not heavy makeup` |
| Фокус не на лице | `+ sharp focus on eyes, face in perfect focus` |

---

## 🚫 Что НЕ генерировать

- Explicit/nude контент
- Stock photo clichés (tablet, white background, fake laugh)
- Cheap aesthetic (яркие цвета, логотипы, low quality)
- Travel/outdoor (пустыня, пляж — off-brand)
- Corporate/formal (костюмы, офис)
- Wholesome/boring (свитер + книга + кот)

---

## 🎨 Цветовая палитра для промптов

**Одежда:** cream, champagne, nude, black (soft), burgundy, camel, terracotta, warm grey
**Интерьер:** cream walls, warm wood, soft grey furniture, terracotta accents
**Свет:** golden hour, warm ring light, ambient 2700-3000K
**Кожа:** warm undertones, natural glow

**НЕ:** bright white, cool blue, neon, oversaturated, pink

---

**Ключевые фразы для КАЖДОГО промпта:**
- `Kodak Portra 400 film aesthetic, warm color grading`
- `premium lifestyle photography, NOT stock photo`
- `confident, self-assured expression`
- `Avoid: stock, cold tones, explicit, wholesome, boring`
