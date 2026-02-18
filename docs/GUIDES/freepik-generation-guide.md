# Гайд по генерации фото для YES Studio в Freepik AI

## Быстрый старт

1. Открой https://www.freepik.com/ai/image-generator
2. Выбери модель: **Mystic** (самая реалистичная)
3. Вставь промпт из этого гайда
4. Настрой параметры (см. ниже)
5. Генерируй 4 варианта, выбирай лучший
6. При необходимости — Retouch / Upscale

---

## Настройки Freepik AI (для всех генераций)

### Параметры генерации

- **Model:** Mystic (или Flux Realism, если Mystic не даёт результат)
- **Aspect ratio:** зависит от фото (указано в каждом промпте)
- **Image size:** Maximum available
- **Number of images:** 4 (генерируем пачкой, выбираем лучший)
- **Guidance scale:** 7-8 (баланс между следованием промпту и креативностью)
- **Negative prompt:** ОБЯЗАТЕЛЬНО ВСТАВЛЯТЬ (см. ниже)

### Negative Prompt (копировать для КАЖДОЙ генерации)

```
AI-generated look, perfect symmetry, waxy skin, plastic skin, smooth skin, oversaturated, HDR, cold blue tones, harsh flash, white background, stock photography, extra fingers, deformed hands, uncanny valley, heavy retouching, airbrushed skin, perfect teeth, cartoon, illustration, 3d render, anime, painting
```

---

## Принципы "живой" генерации

### Чеклист ПЕРЕД отправкой промпта

- [ ] Указана конкретная текстура кожи (`natural skin texture with visible pores`)
- [ ] Указан источник света (`window light from left`, не просто `good lighting`)
- [ ] Указана камера/оптика (`shot on 35mm film, 50mm f/2.0`)
- [ ] В negative prompt есть `waxy skin, plastic skin, AI-generated look`
- [ ] Руки спрятаны или минимизированы в композиции

### Чеклист ПОСЛЕ получения результата

- [ ] Кожа выглядит натурально (видны поры, лёгкое покраснение, не восковая)
- [ ] Глаза симметричные, зрачки одинаковые, есть catchlight
- [ ] Пальцев 5 на каждой видимой руке
- [ ] Нет артефактов (лишних зубов, странных ушей, плывущей ювелирки)
- [ ] Тёплые тона (нет холодного синего каста)
- [ ] Волосы выглядят натурально (не слишком идеальные)
- [ ] Нет "фарфоровой куклы" эффекта

---

## Workflow: как довести фото до идеала

### Шаг 1: Первая генерация (4 варианта)
- Вставь промпт + negative prompt
- Посмотри все 4 варианта
- Если ВСЕ плохие — подкорректируй промпт и генерируй снова
- Если 1-2 хороших — переходи к Шагу 2

### Шаг 2: Выбор лучшего
Оценивай по приоритетам:
1. **Лицо и кожа** — самое важное (натуральность)
2. **Руки** — второй приоритет (нет лишних пальцев)
3. **Общее настроение** — тёплое, premium, confident
4. **Техническое качество** — фокус, освещение, bokeh

### Шаг 3: Доработка в Freepik
- **Retouch** — можно убрать мелкие артефакты
- **Upscale** — увеличить разрешение до нужного
- **Variations** — сгенерировать вариации от лучшего результата
- **Inpainting** — перегенерировать конкретную область (напр. руку)

### Шаг 4: Финальная проверка
- Открой фото на кремовом фоне (#F5F0EB) — как оно смотрится?
- Открой на тёмном (#1E1C1A) — для final-cta секции
- Уменьши до размера карточки — не потерялось ли лицо?

---

## Советы по итерации промптов

### Если кожа слишком гладкая/восковая:
Добавь: `visible skin pores, natural skin imperfections, slight freckles, unretouched skin look`

### Если фото слишком "AI-шное":
Добавь: `candid photography feel, not posed, imperfect composition, slight motion in hair`

### Если слишком тёмное/холодное:
Добавь: `warm golden hour lighting, 3800K color temperature, cream warm tones`
В negative: `cold tones, blue tones, dark shadows`

### Если руки кривые:
Лучший подход — перегенерировать с `hands hidden in pockets` или `hands behind back` или `hand resting on armrest partially hidden`

### Если фон не подходит:
Добавь конкретику: `cream colored walls with warm moldings` вместо просто `warm interior`

---

## Готовые промпты (копируй и вставляй)

### Общий суффикс — ДОБАВЛЯТЬ В КОНЕЦ КАЖДОГО ПРОМПТА:

```
shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, natural skin texture with visible pores, shallow depth of field f/2.0, soft creamy bokeh, premium lifestyle photography, editorial quality, NOT stock photography
```

---

### ВОЛНА 1 — Портреты моделей для Stories + Bento

---

#### IMG-01: "Дарья" — Confident Minimalist
**Aspect ratio:** 3:4 (Portrait)
**Заменяет:** lifestyle-1.png
**Сохранить как:** story-darya.jpg

```
Portrait of confident young woman, 24 years old, light brown shoulder-length hair with soft natural waves, natural skin texture with visible pores and slight redness on cheeks, professional but natural makeup with defined brows and nude lip, wearing champagne silk camisole top with thin straps and delicate thin gold chain necklace, sitting relaxed in armchair with hand resting on armrest, looking directly at camera with calm confident expression and subtle knowing smile, slightly asymmetric features, soft natural window light from left side mixed with warm ring light glow from right, creating gentle light falloff across face, background: blurred warm interior with cream walls and ambient light, natural flyaway hairs catching backlight, baby hairs at hairline, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, natural skin texture with visible pores, shallow depth of field f/2.0, soft creamy bokeh, premium lifestyle photography, editorial quality, NOT stock photography
```

---

#### IMG-02: "Алина" — Fresh & Edgy
**Aspect ratio:** 3:4 (Portrait)
**Заменяет:** lifestyle-2.png
**Сохранить как:** story-alina.jpg

```
Portrait of attractive young woman, 21 years old, dark straight hair in modern bob cut just below jawline, clear skin with natural texture and subtle imperfections, light natural makeup, wearing oversized camel wool blazer over thin black top, small gold hoop earrings, standing casually leaning slightly against wall with hands in blazer pockets, confident slightly edgy expression with raised chin, soft natural window light creating gentle shadows, background: elegant interior with wall moldings and warm ambient lighting, slightly out of focus, individual hair strands catching light, natural flyaway hairs, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, natural skin texture with visible pores, shallow depth of field f/2.0, soft creamy bokeh, premium lifestyle photography, editorial quality, NOT stock photography
```

---

#### IMG-03: "Кристина" — Soft Glamour
**Aspect ratio:** 3:4 (Portrait)
**Заменяет:** desert-vibe.jpg
**Сохранить как:** story-kristina.jpg

```
Portrait of attractive young woman, 26 years old, long golden blonde wavy hair falling past shoulders, warm skin tone with natural texture and slight freckles on nose bridge, soft glam natural makeup with warm tones, wearing off-shoulder cream cashmere sweater revealing one shoulder, gold hoop earrings, delicate gold bracelet, half-turned pose looking back over shoulder at camera with confident half-smile, relaxed posture, warm golden hour light from side creating soft glow on skin, ring light catchlight visible in eyes, background: soft warm blur with circular bokeh shapes from lights, hair strands catching golden backlight, baby hairs at forehead, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, natural skin texture with visible pores, shallow depth of field f/2.0, soft creamy bokeh, premium lifestyle photography, editorial quality, NOT stock photography
```

---

#### IMG-04: "Виктория" — Edgy Chic
**Aspect ratio:** 3:4 (Portrait)
**Заменяет:** model-2.jpg
**Сохранить как:** story-victoria.jpg

```
Portrait of confident young woman, 23 years old, dark straight hair past shoulders with subtle shine, olive warm skin tone with natural texture and visible pores, defined features, professional natural makeup with subtle smoky eye and nude lip, wearing black silk blouse with top two buttons open showing collarbone area, thin gold pendant chain necklace, sitting in upholstered armchair with one arm on armrest, direct confident gaze at camera, composed expression, warm side lighting from left creating soft shadows on right side of face, gentle light falloff, background: elegant room with candles on shelf, warm ambient glow, soft textured fabrics visible, slightly out of focus, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, natural skin texture with visible pores, shallow depth of field f/2.0, soft creamy bokeh, premium lifestyle photography, editorial quality, NOT stock photography
```

---

### ВОЛНА 2 — BTS + Details

---

#### IMG-05: Behind-the-Scenes
**Aspect ratio:** 4:3 (Landscape)
**Заменяет:** bento-photo.jpg
**Сохранить как:** bts-workspace.jpg

```
Lifestyle shot from slightly behind and to the side of attractive young woman sitting at modern workspace desk facing professional ring light, her profile and shoulder visible, wearing cozy cream oversized knit sweater with one shoulder slightly slipped down, warm glow from ring light illuminating her face in profile, background: elegant studio room with warm decor, decorative wall panels, green plant, candles on shelf, ambient warm lighting, slightly out of focus background creating depth, composition with subject on left third, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, shallow depth of field f/2.0, soft creamy bokeh, premium lifestyle photography, editorial quality, NOT stock photography
```

---

#### IMG-06: Detail — Silk Robe Atmosphere
**Aspect ratio:** 1:1 (Square)
**Сохранить как:** detail-silk-robe.jpg

```
Still life detail shot of champagne silk robe draped over the back of an upholstered velvet armchair in warm cream color, soft fabric folds catching warm light, background: professional ring light creating beautiful circular bokeh, warm candles on wooden shelf, soft ambient lighting, warm cream and gold color palette, lived-in elegant interior, shallow depth of field f/1.8, robe in focus background in soft blur, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, premium lifestyle photography, editorial quality
```

---

#### IMG-07: Final CTA Background
**Aspect ratio:** 16:9 (Widescreen)
**Заменяет:** model-2.jpg (в CSS)
**Сохранить как:** cta-studio-warm.jpg

```
Atmospheric wide shot of elegant studio interior space, multiple ring lights creating beautiful warm circular bokeh in background, warm ambient lighting from candles and lamps, soft silhouette of feminine figure in far background barely visible, warm cream and golden color palette, depth and layers of light, mood: aspirational warm inviting workspace, cinematic composition, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, premium lifestyle photography, editorial quality
```

---

### ВОЛНА 3 — Diversity + Универсальные + Details

---

#### IMG-08: Diversity — Auburn
**Aspect ratio:** 4:3 (Landscape, wider framing)
**Заменяет:** model-1.jpg
**Сохранить как:** diversity-auburn.jpg

```
Portrait of confident attractive young woman, 25 years old, auburn red wavy hair past shoulders, warm skin with natural freckles across cheeks and nose bridge, green-hazel eyes, natural makeup with warm tones, wearing fitted burgundy wine-colored knit dress with long sleeves, standing confidently with relaxed posture, one hand on hip, looking at camera with self-assured warm expression, soft natural light from large window, warm ambient fill from room, background: elegant studio lounge area with cream upholstered sofa, green plants, warm shelving with books and candles, lived-in feel, wider framing showing waist-up with environmental context, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, natural skin texture with visible pores, shallow depth of field f/2.0, soft creamy bokeh, premium lifestyle photography, editorial quality, NOT stock photography
```

---

#### IMG-09: Alt Girl / Бунтарка
**Aspect ratio:** 3:4 (Portrait)
**Сохранить как:** alt-girl.jpg

```
Portrait of edgy attractive young woman, 22 years old, jet black hair in sharp modern bob with blunt bangs just above eyebrows, pale warm skin with natural texture and visible pores, slightly dark under-eye circles adding character, bold but clean makeup with defined dark brows and subtle dark berry lip, not heavy, wearing oversized black leather jacket unzipped over deep burgundy silk camisole top, thin silver choker necklace, multiple small silver hoop earrings on one ear, arms crossed casually, head tilted slightly, direct piercing confident gaze at camera, attitude without aggression, strong warm side lighting from left creating dramatic but soft shadows, warm tones despite contrast, background: dark warm interior with exposed brick wall, warm ambient light in background creating depth, slightly out of focus, individual hair strands sharp and defined, bangs slightly uneven for natural look, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, natural skin texture with visible pores, shallow depth of field f/2.0, soft creamy bokeh, premium lifestyle photography, editorial quality, NOT stock photography
```

---

#### IMG-10: Classic Beauty — Конвенциональная
**Aspect ratio:** 3:4 (Portrait)
**Сохранить как:** classic-beauty.jpg

```
Portrait of conventionally attractive young woman, 24 years old, long straight chestnut brown hair with subtle warm highlights, clear warm skin with natural texture including slight pores and very subtle redness, naturally beautiful proportions, high cheekbones, warm brown-green eyes, natural fresh makeup enhancing features, soft pink lip, wearing elegant cream ivory silk button-up blouse, delicate gold teardrop earrings, three-quarter turn toward camera, one hand gently touching her hair near shoulder with fingers partially hidden in hair strands, soft warm confident smile, approachable yet aspirational, soft even window light from both sides creating flattering gentle illumination with minimal shadows, background: clean warm cream wall with soft natural light, simple and elegant, hair strands catching warm light, natural movement in hair, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, natural skin texture with visible pores, shallow depth of field f/2.0, soft creamy bokeh, premium lifestyle photography, editorial quality, NOT stock photography
```

---

#### IMG-11: Detail — Coffee
**Aspect ratio:** 3:2 (Landscape)
**Сохранить как:** detail-coffee.jpg

```
Overhead angled still life of ceramic cup of cappuccino with latte art on rustic wooden desk surface, laptop edge visible in soft blur to the side, warm morning light from window casting soft shadows, cream napkin, small green plant in pot, warm cozy workspace atmosphere, natural and lived-in, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, premium lifestyle photography, editorial quality
```

---

#### IMG-12: Detail — Ring Light
**Aspect ratio:** 2:3 (Portrait)
**Сохранить как:** detail-ringlight.jpg

```
Close-up artistic shot of professional ring light switched on, creating beautiful warm circular glow, seen from slight angle, warm ambient room in soft bokeh background with cream walls and warm lights, dust particles catching light in air, warm golden color palette, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, premium lifestyle photography, editorial quality
```

---

#### IMG-13: Detail — Workspace Flatlay
**Aspect ratio:** 1:1 (Square)
**Сохранить как:** detail-flatlay.jpg

```
Overhead flatlay of feminine workspace on warm wooden desk surface, open planner with handwritten notes, gold pen, small vase with dried flowers, phone face-down, coffee cup edge visible, silk scrunchie in champagne color, warm natural light from above, organized but lived-in feel, cream and gold palette, shot on 35mm film, Kodak Portra 400 aesthetic, warm color grading, natural film grain texture, slightly lifted blacks, soft contrast, warm color temperature 3800K, premium lifestyle photography, editorial quality
```

---

## Сводка файлов

| # | Файл | Aspect | Заменяет |
| -- | ---- | ------ | -------- |
| 01 | story-darya.jpg | 3:4 | lifestyle-1.png |
| 02 | story-alina.jpg | 3:4 | lifestyle-2.png |
| 03 | story-kristina.jpg | 3:4 | desert-vibe.jpg |
| 04 | story-victoria.jpg | 3:4 | model-2.jpg |
| 05 | bts-workspace.jpg | 4:3 | bento-photo.jpg |
| 06 | detail-silk-robe.jpg | 1:1 | новый |
| 07 | cta-studio-warm.jpg | 16:9 | model-2.jpg (CSS) |
| 08 | diversity-auburn.jpg | 4:3 | model-1.jpg |
| 09 | alt-girl.jpg | 3:4 | новый |
| 10 | classic-beauty.jpg | 3:4 | новый |
| 11 | detail-coffee.jpg | 3:2 | новый |
| 12 | detail-ringlight.jpg | 2:3 | новый |
| 13 | detail-flatlay.jpg | 1:1 | новый |

Все файлы сохранять в `public/photos/`.

---

## После генерации

1. **Оптимизация:** прогнать через squoosh.app или TinyPNG (цель: < 300KB каждый)
2. **Закинуть** в `D:\Projects\yes-studio\public\photos\`
3. **Сказать мне** — я обновлю пути в коде (Home.tsx + index.css)
