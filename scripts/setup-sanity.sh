#!/bin/bash
# Скрипт быстрой настройки Sanity CMS

echo "🚀 Настройка Sanity CMS для YES Studio Blog"
echo ""
echo "Шаг 1/3: Инициализация Sanity проекта..."
echo "Тебе откроется браузер для логина (можно через Google/GitHub)"
echo ""

cd sanity
npm run init

echo ""
echo "Шаг 2/3: Копирую Project ID в blog/.env..."

# Извлекаем project ID из sanity/.env
PROJECT_ID=$(grep SANITY_STUDIO_PROJECT_ID .env | cut -d '=' -f2)

if [ "$PROJECT_ID" != "placeholder" ] && [ ! -z "$PROJECT_ID" ]; then
  echo "SANITY_PROJECT_ID=$PROJECT_ID" > ../blog/.env
  echo "✅ Project ID скопирован в blog/.env"
else
  echo "⚠️ Project ID не найден в sanity/.env - проверь файл вручную"
fi

cd ..

echo ""
echo "Шаг 3/3: Следующие шаги:"
echo ""
echo "1️⃣  Запусти Sanity Studio:"
echo "   cd sanity && npm run dev"
echo ""
echo "2️⃣  Открой http://localhost:3333"
echo ""
echo "3️⃣  Создай категории:"
echo "   - Карьера"
echo "   - Доход"
echo "   - Безопасность"
echo "   - Лайфстайл"
echo ""
echo "4️⃣  Добавь 5 статей (тексты в blog/content/*.md)"
echo ""
echo "5️⃣  Добавь Project ID в Vercel:"
echo "   Settings → Environment Variables → SANITY_PROJECT_ID = $PROJECT_ID"
echo ""
echo "✅ Готово! Блог будет работать с Sanity CMS"
