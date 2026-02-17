# 🔧 Установка Freepik MCP в VS Code
## Пошаговая инструкция для Claude Code

---

## 📋 Что нужно перед началом:

```
✅ VS Code установлен
✅ Python 3.12+ установлен
✅ Git установлен
✅ Freepik API Key (получим в процессе)
```

---

## 🚀 Шаг 1: Получи Freepik API Key

### 1.1 Регистрация

```bash
# Открой в браузере:
https://www.freepik.com/api

# Если нет аккаунта:
→ Sign Up
→ Подтверди email
```

### 1.2 Создай API Key

```
1. Login → freepik.com/api
2. Dashboard → "Create API Key"
3. Name: "Claude Code Integration"
4. Permissions: Select all (Images, Video, etc)
5. Copy API Key (сохрани в безопасном месте!)
```

**Пример API Key:**
```
fpik_abc123xyz789...
```

⚠️ **Важно:** Не делись этим ключом публично!

---

## 🛠️ Шаг 2: Установи зависимости

### 2.1 Проверь Python версию

```bash
# Открой терминал (Ctrl+` в VS Code)

python3 --version
# Должно быть: Python 3.12.0 или выше

# Если версия старая, обнови:
# macOS/Linux:
brew install python@3.12

# Windows:
# Скачай с python.org
```

### 2.2 Установи uv (package manager)

```bash
# macOS/Linux:
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows (PowerShell):
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# Проверь установку:
uv --version
```

---

## 📦 Шаг 3: Клонируй Freepik MCP

### 3.1 Выбери директорию

```bash
# Рекомендую создать папку для MCP серверов:

# macOS/Linux:
mkdir -p ~/mcp-servers
cd ~/mcp-servers

# Windows:
mkdir %USERPROFILE%\mcp-servers
cd %USERPROFILE%\mcp-servers
```

### 3.2 Клонируй репозиторий

```bash
git clone https://github.com/freepik-company/freepik-mcp.git
cd freepik-mcp

# Проверь что всё скачалось:
ls -la
# Должны видеть: main.py, pyproject.toml, README.md, etc
```

---

## 🔧 Шаг 4: Установи Freepik MCP

### 4.1 Установка зависимостей

```bash
# В папке freepik-mcp:

# Установи зависимости через uv:
make install

# Или вручную:
uv sync

# Проверь установку:
make version
# Должно показать версию MCP сервера
```

### 4.2 Создай .env файл

```bash
# Создай файл с API ключом:

# macOS/Linux:
echo "FREEPIK_API_KEY=твой_api_key_здесь" > .env

# Windows (PowerShell):
echo "FREEPIK_API_KEY=твой_api_key_здесь" | Out-File -FilePath .env

# Замени "твой_api_key_здесь" на реальный ключ!
```

**Пример .env файла:**
```
FREEPIK_API_KEY=fpik_abc123xyz789defghi456jkl...
```

### 4.3 Тестовый запуск

```bash
# Проверь что всё работает:

make dev

# Должен запуститься сервер без ошибок
# Нажми Ctrl+C для остановки
```

---

## ⚙️ Шаг 5: Настрой VS Code

### 5.1 Установи расширение Claude Code (если нет)

```
1. Открой VS Code
2. Extensions (Ctrl+Shift+X)
3. Найди: "Claude Code"
4. Install
5. Restart VS Code
```

### 5.2 Найди путь к freepik-mcp

```bash
# Узнай полный путь:

# macOS/Linux:
pwd
# Например: /Users/dima/mcp-servers/freepik-mcp

# Windows:
cd
# Например: C:\Users\Dima\mcp-servers\freepik-mcp

# Скопируй этот путь! Понадобится в следующем шаге.
```

---

## 📝 Шаг 6: Конфигурация MCP в VS Code

### Вариант A: Claude Code (рекомендуется)

**6.1 Создай конфигурацию:**

```bash
# macOS/Linux:
mkdir -p ~/.claude-code
code ~/.claude-code/mcp.json

# Windows:
mkdir %USERPROFILE%\.claude-code
code %USERPROFILE%\.claude-code\mcp.json
```

**6.2 Добавь конфиг:**

```json
{
  "mcpServers": {
    "freepik": {
      "command": "uv",
      "args": [
        "run",
        "--directory",
        "/ПОЛНЫЙ/ПУТЬ/К/freepik-mcp",
        "main.py"
      ],
      "env": {
        "FREEPIK_API_KEY": "твой_api_key_здесь"
      }
    }
  }
}
```

**⚠️ ВАЖНО: Замени:**
- `/ПОЛНЫЙ/ПУТЬ/К/freepik-mcp` → твой реальный путь из шага 5.2
- `твой_api_key_здесь` → твой реальный API key

**Примеры правильных путей:**

**macOS:**
```json
"/Users/dima/mcp-servers/freepik-mcp"
```

**Linux:**
```json
"/home/dima/mcp-servers/freepik-mcp"
```

**Windows:**
```json
"C:\\Users\\Dima\\mcp-servers\\freepik-mcp"
```
(Обрати внимание на двойные слэши `\\`)

---

### Вариант B: Через settings.json

**Альтернативный способ конфигурации:**

```bash
# Открой VS Code settings:
# Cmd+Shift+P (Mac) или Ctrl+Shift+P (Win/Linux)
# Введи: "Preferences: Open User Settings (JSON)"
```

**Добавь в settings.json:**

```json
{
  "claudeCode.mcpServers": {
    "freepik": {
      "command": "uv",
      "args": [
        "run",
        "--directory",
        "/ПОЛНЫЙ/ПУТЬ/К/freepik-mcp",
        "main.py"
      ],
      "env": {
        "FREEPIK_API_KEY": "твой_api_key_здесь"
      }
    }
  }
}
```

---

## 🧪 Шаг 7: Тестирование

### 7.1 Перезапусти VS Code

```
Полностью закрой VS Code
Открой заново
```

### 7.2 Открой Claude Code

```
1. Открой Command Palette (Cmd+Shift+P / Ctrl+Shift+P)
2. Введи: "Claude Code: Start"
3. Или нажми иконку Claude в левой панели
```

### 7.3 Тестовый промпт

```
В Claude Code введи:

"Generate a test image: modern office interior with natural lighting"
```

**Что должно произойти:**
```
1. Claude должен показать 🔌 или mention Freepik
2. Запросить разрешение использовать Freepik tool
3. После разрешения - сгенерировать изображение
4. Показать результат
```

### 7.4 Проверка доступных tools

```
В Claude Code спроси:

"What MCP tools do you have access to?"
```

**Ожидаемый ответ:**
```
Claude должен перечислить Freepik tools:
- freepik_generate_image
- freepik_search_icons
- freepik_upscale_image
- freepik_remove_background
- etc.
```

---

## ✅ Проверка успешной установки

### Checklist:

```
✅ Python 3.12+ установлен
✅ uv package manager работает
✅ freepik-mcp клонирован
✅ Зависимости установлены (make install)
✅ .env файл создан с API key
✅ mcp.json настроен с правильным путём
✅ VS Code перезапущен
✅ Claude Code видит Freepik tools
✅ Тестовая генерация работает
```

---

## 🐛 Troubleshooting

### Проблема 1: "command not found: uv"

**Решение:**
```bash
# Переустанови uv:
curl -LsSf https://astral.sh/uv/install.sh | sh

# Перезапусти терминал или выполни:
source ~/.bashrc  # Linux
source ~/.zshrc   # macOS

# Проверь:
uv --version
```

---

### Проблема 2: "Python version 3.11 not supported"

**Решение:**
```bash
# Обнови Python:

# macOS:
brew install python@3.12
brew link python@3.12

# Linux (Ubuntu/Debian):
sudo apt update
sudo apt install python3.12

# Windows:
# Скачай инсталлер с python.org

# Проверь версию:
python3 --version
```

---

### Проблема 3: "FREEPIK_API_KEY not found"

**Решение:**
```bash
# Проверь .env файл:
cat .env

# Должен содержать:
FREEPIK_API_KEY=fpik_...

# Если пустой или неправильный:
echo "FREEPIK_API_KEY=твой_ключ" > .env

# В mcp.json также проверь раздел "env"
```

---

### Проблема 4: "Failed to start MCP server"

**Решение:**
```bash
# Проверь логи:
cd ~/mcp-servers/freepik-mcp

# Запусти вручную для отладки:
make dev

# Смотри на ошибки в выводе

# Частые причины:
1. Неправильный путь в mcp.json
2. Отсутствует .env файл
3. Зависимости не установлены

# Переустанови зависимости:
make clean
make install
```

---

### Проблема 5: Claude не видит Freepik tools

**Решение:**

**1. Проверь конфиг:**
```bash
# macOS/Linux:
cat ~/.claude-code/mcp.json

# Windows:
type %USERPROFILE%\.claude-code\mcp.json

# Убедись что:
- Путь правильный (без опечаток)
- API key присутствует
- JSON синтаксис корректный
```

**2. Проверь права доступа:**
```bash
# macOS/Linux:
chmod +x ~/mcp-servers/freepik-mcp/main.py
```

**3. Перезапусти VS Code:**
```
Полностью закрой VS Code (Cmd+Q / Alt+F4)
Открой заново
```

**4. Проверь статус MCP:**
```
В VS Code:
View → Output → выбери "Claude Code" в dropdown

Ищи строки про Freepik MCP
```

---

### Проблема 6: Windows-specific issues

**Windows требует WSL для некоторых MCP серверов**

**Решение:**
```powershell
# Если видишь ошибку про WSL:

# 1. Установи WSL:
wsl --install

# 2. Перезагрузи компьютер

# 3. В WSL выполни установку:
wsl
cd ~
mkdir mcp-servers
cd mcp-servers
git clone https://github.com/freepik-company/freepik-mcp.git
cd freepik-mcp
# ... далее как в основной инструкции

# 4. Используй WSL путь в mcp.json:
"\\wsl$\Ubuntu\home\dima\mcp-servers\freepik-mcp"
```

---

### Проблема 7: "Permission denied"

**Решение:**
```bash
# macOS/Linux:
sudo chown -R $USER:$USER ~/mcp-servers/freepik-mcp
chmod -R 755 ~/mcp-servers/freepik-mcp

# Windows:
# Запусти VS Code от имени администратора
```

---

## 🎯 Быстрая диагностика

### Тестовый скрипт:

Создай файл `test-freepik-mcp.sh`:

```bash
#!/bin/bash

echo "🔍 Freepik MCP Diagnostic"
echo "========================"

echo "✓ Checking Python version..."
python3 --version

echo "✓ Checking uv..."
uv --version

echo "✓ Checking freepik-mcp directory..."
ls -la ~/mcp-servers/freepik-mcp/main.py

echo "✓ Checking .env file..."
test -f ~/mcp-servers/freepik-mcp/.env && echo "EXISTS" || echo "MISSING!"

echo "✓ Checking mcp.json..."
test -f ~/.claude-code/mcp.json && echo "EXISTS" || echo "MISSING!"

echo "✓ Testing MCP server..."
cd ~/mcp-servers/freepik-mcp && uv run main.py &
sleep 3
pkill -f "main.py"

echo ""
echo "✅ Diagnostic complete!"
```

Запусти:
```bash
chmod +x test-freepik-mcp.sh
./test-freepik-mcp.sh
```

---

## 📚 Дополнительные ресурсы

**Официальная документация:**
- GitHub: https://github.com/freepik-company/freepik-mcp
- Docs: https://docs.freepik.com/modelcontextprotocol
- API: https://www.freepik.com/api

**Помощь:**
- Freepik Discord: https://discord.gg/freepik
- GitHub Issues: https://github.com/freepik-company/freepik-mcp/issues

---

## 🚀 Следующие шаги

После успешной установки:

**1. Протестируй базовые функции:**
```
"Generate modern office interior"
"Search for minimalist icons"
"Upscale this image to 4K"
```

**2. Настрой workflows:**
- Используй примеры из `freepik-workflows-examples.md`
- Создай свои шаблоны
- Автоматизируй повторяющиеся задачи

**3. Интегрируй с проектами:**
- Добавь в GitHub Actions
- Создай автоматические pipelines
- Build brand asset libraries

---

## 💡 Полезные команды

### В freepik-mcp директории:

```bash
# Запустить в dev режиме (с логами):
make dev

# Запустить production:
make run

# Проверить код:
make lint

# Форматировать код:
make format

# Очистить кэш:
make clean

# Показать все команды:
make help
```

---

## ✅ Готово!

Теперь у тебя:
- ✅ Freepik MCP установлен
- ✅ Настроен в VS Code
- ✅ Интегрирован с Claude Code
- ✅ Готов к автоматизации

**Тестируй:**
```
"Generate a professional hero image for website:
- Modern architecture
- Natural lighting
- Warm neutral palette
- 16:9 format"
```

---

Нужна помощь с чем-то конкретным?
1. Troubleshooting конкретной ошибки?
2. Настройка первого workflow?
3. Создание automation script?
