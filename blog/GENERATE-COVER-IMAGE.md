# 🎨 Генерация обложки для статьи "Как начать"

## Статья
**Файл:** `blog/content/article-kak-nachat-poshagovyy-plan.md`
**Название:** Как начать работать моделью: пошаговый план для первого месяца
**Целевая аудитория:** Новички (18-24), ищущие работу стрим-моделью

---

## 📐 Параметры обложки

- **Размер:** 1200×630px (OG image format = 1.91:1)
- **Формат:** JPG
- **Стиль:** Lifestyle portrait
- **Локация:** Сохранить как `public/photos/blog/hero-kak-nachat-poshagovyy-plan.jpg`

---

## ✍️ ОСНОВНОЙ ПРОМПТ ДЛЯ FREEPIK

Используй ровно этот промпт для генерации:

```
Portrait of confident young woman, 22-25 years old, natural beauty,
sitting at modern desk facing professional ring light camera setup,
wearing warm cream-colored cozy oversized sweater, minimal jewelry,
looking at camera with calm expression mixing readiness and slight nervousness,
soft natural window light from left blending with warm LED ring light glow,
background: blurred home studio setup with monstera plant visible,
shot with 50mm f/2.8 lens creating soft bokeh,
Kodak Portra 400 film aesthetic, warm desaturated color grading, slight film grain texture,
subject positioned on right side of frame leaving negative space left for text overlay,
1.91:1 landscape portrait ratio (1200x630px),
mood: "I'm ready to start my first day but have butterflies"

Style: lifestyle portrait photography, authentic candid moment NOT stock photo
Colors: cream, warm grey, terracotta tones, golden hour warm light
Avoid: glamour, heavy makeup, revealing clothing, harsh studio flash,
oversaturated colors, stock photography clichés, fake expressions,
corporate aesthetic, cold blue tones, white background
```

---

## 🚀 Как использовать в VS Code

### Вариант 1: Через Claude Code (Freepik MCP)

1. Открой **Claude Code** в VS Code (иконка слева или Cmd/Ctrl+Shift+P → "Claude Code: Start")
2. Вставь промпт выше в чат
3. Claude запросит разрешение использовать Freepik tools
4. Одобри
5. Сохрани результат как `public/photos/blog/hero-kak-nachat-poshagovyy-plan.jpg`

### Вариант 2: Прямой вызов Freepik CLI (если установлен)

```bash
cd ~/mcp-servers/freepik-mcp
uv run main.py freepik_generate_image \
  --prompt "Portrait of confident young woman, 22-25..." \
  --aspect_ratio "1.91:1" \
  --style "photo" \
  --output "../../yes-studio-main/public/photos/blog/hero-kak-nachat-poshagovyy-plan.jpg"
```

---

## ✅ Критерии проверки сгенерированного изображения

**ОБЯЗАТЕЛЬНО проверь:**

- [ ] Разрешение 1200×630px (или 1.91:1)
- [ ] Девушка 22-25 лет сидит за столом
- [ ] Видна камера/освещение (student/home studio setup)
- [ ] Выражение лица: спокойствие + небольшая нервозность
- [ ] Теплые тона (кремовый, бежевый, терракотовый)
- [ ] Natural lighting (видно окно или ring light)
- [ ] НЕ похоже на stock фото (естественная поза, не постановка)
- [ ] Хорошо будет выглядеть на темном #0A0A0A фоне (Neon Luxe)

**Если не подходит:**
- Пересоздай с уточнением: добавь "more realistic natural expression, less polished"
- Или измени одежду: "terracotta midi dress instead of sweater"
- Или локацию: "sitting in cozy café with laptop visible"

---

## 📤 После генерации обложки

### Шаг 1: Сохрани файл

```bash
# Убедись что папка существует:
mkdir -p public/photos/blog

# Сохрани сгенерированное изображение как:
public/photos/blog/hero-kak-nachat-poshagovyy-plan.jpg
```

### Шаг 2: Обнови JSON для Sanity

**В файле** `sanity/article-kak-nachat-sanity.json` найди строку 28:

```json
"_ref": "image-PLACEHOLDER-TO-UPLOAD"
```

Замени на реальный Sanity asset ID после загрузки картинки.

---

## 🔗 Полезные ссылки

- **Freepik MCP Docs:** https://docs.freepik.com/modelcontextprotocol
- **Yes Studio Photo Style Guide:** `docs/GUIDES/photo-style-guide.md`
- **Freepik Visual Generation Guide:** `.claude/skills/freepik-visual.md`
- **Sanity Upload Guide:** `blog/UPLOAD-ARTICLE-TO-SANITY.md`

---

**Status:** Готово к использованию
**Дата:** 2026-02-17
**Версия:** 1.0

