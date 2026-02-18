# YES Studio — Концепции фото для сайта

Дата: 18.02.2026
Статус: Согласовано, готово к генерации

Общий стиль: реалистичные фото, как из соцсетей. Девушки — обычные, славянской внешности, не модельные. Без чернокожих, азиаток и т.д.

API: Freepik Mystic (https://api.freepik.com/v1/ai/mystic)
Модель: realism, resolution: 2k, creative_detailing: 40

---

## 1. Bento / Преимущества (6 карточек)

Формат: ЧБ-фото на фон, поверх — CSS/SVG иллюстрации (уже реализованы).
Рекомендуемый aspect_ratio: square_1_1

### 1.1 Стратегия — Индивидуальная стратегия

**Идея:** Flat lay вид сверху: ноутбук, раскрытый блокнот с записями, ручка, чашка кофе. Минималистично, тёмный деревянный стол. В ЧБ отлично подчеркнутся текстуры бумаги и дерева.

**Промпт:**
```
Overhead flat lay photo on dark wooden table, opened notebook with handwritten notes, elegant pen, laptop edge visible, cup of black coffee, minimalist aesthetic, soft natural light from side, shallow depth of field, professional product photography style
```

**Negative prompt:**
```
person, hands, face, colorful, cluttered, messy, text readable, brand logos
```

**Настройки:** aspect_ratio: square_1_1, style: photo, color: black_and_white


### 1.2 Имидж — Личный имидж

**Идея:** Крупный план: рассыпанные кисти для макияжа, помада, маленькое зеркало на светлой мраморной поверхности. Никаких лиц.

**Промпт:**
```
Close-up flat lay of makeup brushes scattered artistically on white marble surface, red lipstick, small round mirror, beauty tools, soft diffused light, elegant minimalist beauty still life, professional product photography
```

**Negative prompt:**
```
person, hands, face, skin, cheap products, cluttered, dirty, text, brand logos
```

**Настройки:** aspect_ratio: square_1_1, style: photo, color: black_and_white


### 1.3 Контент — Профессиональный контент

**Идея:** Ring light на тёмном фоне с телефоном на штативе в центре. Контровый свет, блики — кинематографично в ЧБ.

**Промпт:**
```
Professional ring light glowing in dark room, smartphone mounted on tripod in center of ring light, dramatic backlit silhouette, lens flare, studio equipment visible, cinematic lighting, moody atmosphere, content creator studio setup
```

**Negative prompt:**
```
person, face, daylight, bright room, messy, cheap equipment, text
```

**Настройки:** aspect_ratio: square_1_1, style: photo, color: black_and_white


### 1.4 Карьера — Карьерный рост

**Идея:** Лестница снизу вверх в современном минималистичном здании, геометрическая перспектива, свет сверху. Драматизм в ЧБ.

**Промпт:**
```
Modern minimalist staircase photographed from bottom looking up, geometric perspective, white walls, natural light from above, architectural photography, leading lines going upward, clean contemporary interior design, sense of ascent and progress
```

**Negative prompt:**
```
person, old building, dirty, dark, cluttered, handrails rusty, text
```

**Настройки:** aspect_ratio: square_1_1, style: photo, color: black_and_white


### 1.5 Поддержка 24/7 — Персональный куратор

**Идея:** Две девушки сидят рядом, одна показывает что-то на экране ноутбука другой. Тёплая, доверительная атмосфера. Лиц не видно чётко — вполоборота или фокус на руках/ноутбуке.

**Промпт:**
```
Two young women sitting together at a desk looking at laptop screen, one pointing at screen explaining to the other, shot from behind or side angle, faces not clearly visible, warm cozy indoor atmosphere, natural light from window, casual clothes, mentoring session, Slavic appearance, natural look
```

**Negative prompt:**
```
facing camera, portrait, studio lighting, model-like, heavy makeup, Asian, African, dark skin, corporate office, formal clothes
```

**Настройки:** aspect_ratio: square_1_1, style: photo, color: black_and_white


### 1.6 Английский — Английский на практике

**Идея:** Девушка перед монитором с вебкамерой, слегка наклонилась к экрану, жест руки как будто объясняет. Вид сбоку или 3/4.

**Промпт:**
```
Young woman sitting at desk in front of computer monitor with webcam on top, gesturing with hand while speaking, shot from side angle three quarter view, cozy room with warm lighting, casual home setup, natural relaxed posture, Slavic appearance, light brown hair, casual clothes
```

**Negative prompt:**
```
facing camera directly, portrait, studio lighting, model-like, heavy makeup, Asian, African, dark skin, corporate office, multiple monitors, gaming setup
```

**Настройки:** aspect_ratio: square_1_1, style: photo, color: black_and_white


---

## 2. Stories — 4 портрета (круги 72px)

Формат: цветные фото, маленькие круглые аватарки. CSS duotone-фильтр (бордовый) накладывается поверх. При 72px AI-артефакты не видны.
Рекомендуемый aspect_ratio: square_1_1
Концепция: как будто аватарка из ВК/Инстаграма, обычная девушка.

### 2.1 Дарья, 24 года

**Идея:** Кафе или парк, естественный свет, улыбается не в камеру а чуть в сторону. Светло-русые волосы, простая одежда.

**Промпт:**
```
Casual candid portrait of young Slavic woman 24 years old sitting in outdoor cafe, light blonde hair loose, looking slightly to the side with gentle smile, natural daylight, no makeup or very light makeup, wearing simple casual top, blurred cafe background with greenery, warm summer day, social media style photo like from VK or Instagram, realistic natural look
```

**Negative prompt:**
```
studio lighting, professional photoshoot, heavy makeup, model agency, posing, looking at camera directly, dark skin, Asian, African, perfect skin, retouched, glamour
```

**Настройки:** aspect_ratio: square_1_1, style: photo, color: warm


### 2.2 Алина, 21 год

**Идея:** Дома, селфи-стиль у окна. Молодая, без макияжа или лёгкий. Тёмные волосы.

**Промпт:**
```
Casual selfie-style portrait of young Slavic woman 21 years old near a window at home, dark brown hair in messy bun, natural light from window, no makeup fresh face, wearing oversized sweater or hoodie, slight smile, cozy home background, social media selfie aesthetic, natural and authentic look, young student vibe
```

**Negative prompt:**
```
studio lighting, professional photoshoot, heavy makeup, model agency, posing, dark skin, Asian, African, perfect skin, retouched, glamour, sexy, revealing clothes
```

**Настройки:** aspect_ratio: square_1_1, style: photo, color: warm


### 2.3 Кристина, 26 лет

**Идея:** На улице города, размытый фон. Уверенная, волосы убраны. Лёгкая улыбка.

**Промпт:**
```
Street portrait of confident Slavic woman 26 years old on city street, hair pulled back in ponytail or low bun, light confident smile, casual but stylish outfit like leather jacket, blurred city background with bokeh, natural daylight, social media style candid photo, mature and independent vibe, realistic natural look
```

**Negative prompt:**
```
studio lighting, professional photoshoot, heavy makeup, model agency, dark skin, Asian, African, perfect skin, retouched, glamour, old looking
```

**Настройки:** aspect_ratio: square_1_1, style: photo, color: warm


### 2.4 Виктория, 23 года

**Идея:** Летний снимок, яркий день, смеётся. Рыжая или каштановая. Живая эмоция.

**Промпт:**
```
Bright summer candid portrait of young Slavic woman 23 years old laughing genuinely, auburn or chestnut wavy hair, outdoors in sunlight, golden hour warm light, wearing summer dress or light top, genuine joyful emotion, teeth showing in laugh, blurred green nature background, social media style photo, lively and natural
```

**Negative prompt:**
```
studio lighting, professional photoshoot, heavy makeup, model agency, posing, dark skin, Asian, African, perfect skin, retouched, glamour, serious face, sad
```

**Настройки:** aspect_ratio: square_1_1, style: photo, color: warm


---

## 3. Diversity — большое фото

Формат: цветное фото, пропорция 4:3. CSS duotone-фильтр (бордовый) поверх, на hover проявляется цвет.
Рекомендуемый aspect_ratio: classic_4_3

### 3.1 Две подруги разных типажей

**Идея:** Две девушки очень разных типажей вместе — сидят в кафе с кофе, смотрят друг на друга и смеются. Одна светлая, вторая тёмная (тёмно-русая/каштановая). Ощущение дружбы и лёгкости. Как будто кто-то поймал момент.

**Промпт:**
```
Two young Slavic women friends sitting together in a cozy cafe, laughing and looking at each other, one with light blonde hair and one with dark brown hair, different body types and styles, holding coffee cups, candid moment of genuine friendship, warm natural light, casual stylish clothes, blurred cafe interior background, authentic social media style photo, joyful relaxed atmosphere
```

**Negative prompt:**
```
studio lighting, professional photoshoot, model agency, posing for camera, same looking, twins, dark skin, Asian, African, heavy makeup, glamour, serious faces, corporate
```

**Настройки:** aspect_ratio: classic_4_3, style: photo, color: warm


---

## 4. Hero — фоновая картинка (parallax)

Формат: широкоформатное фото, будет затемнено оверлеем. Сейчас `hero-hearts.jpg`.
Рекомендуемый aspect_ratio: widescreen_16_9

### 4.1 Атмосферный фон

**Идея:** Шёлковая ткань кремового/бежевого цвета крупным планом, мягкие складки, нежный свет — абстрактно и премиально. Идеально ляжет под затемняющий оверлей с текстом.

**Промпт:**
```
Extreme close-up of soft silk fabric in cream beige color, gentle flowing folds and waves, soft diffused light creating subtle shadows, luxurious textile texture, abstract elegant background, premium feel, warm neutral tones, studio product photography style
```

**Negative prompt:**
```
person, face, hands, wrinkled, dirty, cheap fabric, bright colors, text, pattern, print
```

**Настройки:** aspect_ratio: widescreen_16_9, style: photo, color: warm

**Альтернативный вариант — Bokeh огни:**
```
Abstract warm bokeh lights in dark room, golden and cream colored soft circles of light, out of focus, dreamy atmospheric background, studio ambiance, elegant and luxurious mood, shallow depth of field
```


---

## 5. Final CTA — фоновая картинка

Формат: широкоформатное, будет затемнено оверлеем. Концепция: "жизнь мечты".
Рекомендуемый aspect_ratio: widescreen_16_9

### 5.1 Девушка спиной — панорамный вид

**Идея:** Девушка спиной к камере, стоит у панорамного окна или на балконе с видом на большой город. Рассвет или закат. Шёлковый халат или лёгкое платье. Ощущение: "вот она — та жизнь, о которой ты мечтала".

**Промпт:**
```
Young woman seen from behind standing at floor-to-ceiling panoramic window, city skyline at golden sunset, wearing elegant silk robe, long hair flowing naturally, luxurious modern apartment interior, warm golden light flooding the room, sense of freedom achievement and dream life, aspirational lifestyle, cinematic composition, Slavic appearance
```

**Negative prompt:**
```
face visible, front view, cheap apartment, dark mood, sad, heavy makeup, model agency, old woman, corporate, office
```

**Настройки:** aspect_ratio: widescreen_16_9, style: photo, color: warm


---

## Технические заметки

### Freepik Mystic API
- POST https://api.freepik.com/v1/ai/mystic
- Header: x-freepik-api-key: [API_KEY]
- Тело запроса:
```json
{
  "prompt": "...",
  "negative_prompt": "...",
  "guidance_scale": 7,
  "seed": 12345,
  "num_images": 1,
  "image": {"size": "[aspect_ratio]"},
  "styling": {"style": "photo", "color": "[warm|black_and_white]"}
}
```

- После POST получаем task_id
- Поллим GET /v1/ai/mystic/{task_id} пока status != COMPLETED
- Скачиваем URL из generated[0]

### Файлы на сайте (куда класть)
- Все фото: `public/photos/`
- Bento фоны: `bento-strategy.png`, `bento-image.png`, `bento-content.png`, `bento-career.png`, `bento-support.png`, `bento-languages.png`
- Story портреты: `story-natural-1.png` ... `story-natural-4.png` (или перегенерить)
- Diversity: `diversity-friends.png` (или перегенерить)
- Hero: `hero-hearts.jpg` (заменить)
- CTA: `cta-dream-life.png` (или перегенерить)
