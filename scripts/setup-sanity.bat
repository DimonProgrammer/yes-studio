@echo off
chcp 65001 >nul
echo 🚀 Настройка Sanity CMS для YES Studio Blog
echo.
echo Шаг 1/3: Инициализация Sanity проекта...
echo Тебе откроется браузер для логина (можно через Google/GitHub)
echo.

cd sanity
call npm run init

echo.
echo Шаг 2/3: Копирую Project ID в blog/.env...

rem Извлекаем project ID из sanity/.env
for /f "tokens=2 delims==" %%a in ('findstr SANITY_STUDIO_PROJECT_ID .env') do set PROJECT_ID=%%a

if not "%PROJECT_ID%"=="placeholder" (
  echo SANITY_PROJECT_ID=%PROJECT_ID%> ..\blog\.env
  echo ✅ Project ID скопирован в blog/.env
) else (
  echo ⚠️ Project ID не найден в sanity/.env - проверь файл вручную
)

cd ..

echo.
echo Шаг 3/3: Следующие шаги:
echo.
echo 1️⃣  Запусти Sanity Studio:
echo    cd sanity ^&^& npm run dev
echo.
echo 2️⃣  Открой http://localhost:3333
echo.
echo 3️⃣  Создай категории:
echo    - Карьера
echo    - Доход
echo    - Безопасность
echo    - Лайфстайл
echo.
echo 4️⃣  Добавь 5 статей (тексты в blog\content\*.md)
echo.
echo 5️⃣  Добавь Project ID в Vercel:
echo    Settings → Environment Variables → SANITY_PROJECT_ID = %PROJECT_ID%
echo.
echo ✅ Готово! Блог будет работать с Sanity CMS
echo.
pause
