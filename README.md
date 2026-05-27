# 🚀 Coder-Pawno - Онлайн редактор кода как Pawno + VSCode

![Premium Design](https://img.shields.io/badge/Design-Premium-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-green)
![License](https://img.shields.io/badge/License-MIT-red)

## ✨ Особенности

### 🔥 Основные функции
- **📁 Загрузка ZIP архивов** - распаковка проектов прямо в браузере
- **🎯 Поддержка Pawno (SAMP/CRMP/MTA)** - компилятор как в оригинальном Pawno
- **🌐 Русский язык в коде** - пишите код на русском, система переведет автоматически
- **⚡ Живая компиляция** - мгновенный результат с ошибками как в Pawno
- **👨‍💻 Мультиязычность** - Pawn, C++, Python, JavaScript

### 🎮 Для кого это?
- Разработчики модов для **GTA SAMP**
- Разработчики для **CRMP** (Criminal Russia Multiplayer)
- Разработчики для **MTA** (Multi Theft Auto)
- Все кто любит писать код на **Pawn**

## 🛠️ Технологии

- **Frontend**: React 19, Vite, Monaco Editor, TailwindCSS, Framer Motion
- **Backend**: Node.js, Express, WebSocket
- **Компиляторы**: Pawn (Pawno), C++, Python, JavaScript
- **ZIP обработка**: JSZip (фронтенд распаковка)

## 🚀 Быстрый старт

### Установка
```bash
# Клонировать репозиторий
git clone https://github.com/yourusername/coder-pawno.git
cd coder-pawno

# Установить зависимости
npm install

# Запустить сборку
npm run build

# Запустить сервер
cd server && npm install && node server.js
```

### Запуск в режиме разработки
```bash
# Терминал 1 - Сервер
cd server
npm install
node server.js

# Терминал 2 - Клиент
cd client
npm install
npm run dev
```

## 🎯 Как использовать

### 1️⃣ Загрузка проекта из ZIP
1. Нажмите кнопку **"📁 Загрузить проект"**
2. Выберите ZIP архив с вашим модом
3. Система автоматически распакует все файлы
4. Работайте как в VSCode с полным проектом!

### 2️⃣ Компиляция Pawno кода
1. Выберите язык **Pawno (Pawn)**
2. Напишите или загрузите код
3. Нажмите **"▶️ Компилировать"**
4. Получите результат точно как в Pawno!

### 3️⃣ Русский язык в коде
```
// Пишите так:
если игрок зашел {
    печатать("Добро пожаловать!")
}

// Система переведет в:
if (player entered) {
    print("Добро пожаловать!")
}
```

### 4️⃣ Админ панель (только для вас)
Откройте консоль браузера (F12) и введите:
```javascript
localStorage.setItem('admin_token', 'true');
location.reload();
```

После перезагрузки появятся кнопки:
- **📢 Отправить PUSH** - рассылка уведомлений всем пользователям
- **📋 Логи PUSH** - просмотр истории отправленных уведомлений

## 📁 Структура проекта

```
coder-pawno/
├── client/              # Фронтенд приложение
│   ├── src/
│   │   ├── components/  # React компоненты
│   │   ├── pages/       # Страницы приложения
│   │   ├── store/       # Zustand store
│   │   └── hooks/       # Custom хуки
│   └── package.json
├── server/              # Бэкенд сервер
│   ├── server.js        # Основной сервер
│   └── package.json
├── dist/                # Сборка для продакшена
└── README.md
```

## 🔧 API Endpoints

| Метод | Endpoint | Описание |
|-------|----------|----------|
| POST | `/api/compile` | Компиляция кода |
| POST | `/api/translate-to-code` | Перевод русского в код |
| POST | `/api/admin/push` | Отправка PUSH (админ) |
| GET | `/api/admin/push-logs` | Логи PUSH (админ) |
| GET | `/api/ad-config` | Конфигурация рекламы |

## 🎨 Преимущества

✅ **Работает в браузере** - не нужно устанавливать Pawno  
✅ **Кроссплатформенность** - Windows, Mac, Linux, даже телефон  
✅ **ZIP проекты** - загрузил и работай как в VSCode  
✅ **Русский язык** - уникальная фишка для СНГ разработчиков  
✅ **Живой компилятор** - ошибки точно как в оригинальном Pawno  
✅ **Админ панель** - управление уведомлениями из кода  

## 📝 Примеры кода

### Pawno (SAMP)
```pawn
#include <a_samp>

main() {
    print("Hello from SAMP!");
    
    // Русский текст поддерживается
    SendClientMessage(playerid, COLOR_WHITE, "Добро пожаловать на сервер!");
}
```

### Перевод с русского
```
// Вводите:
если игрок подключился {
    печатать("Игрок зашел!")
}

// Получаете:
if (player connected) {
    print("Игрок зашел!")
}
```

## 🌟 Публикация на GitHub

1. Создайте репозиторий на GitHub
2. Сделайте push кода:
```bash
git init
git add .
git commit -m "🚀 Initial commit - Coder-Pawno v1.0"
git branch -M main
git remote add origin https://github.com/yourusername/coder-pawno.git
git push -u origin main
```

3. Добавьте описание и скриншоты в README
4. Поделитесь с сообществом SAMP/CRMP/MTA!

## 📄 Лицензия

MIT License - делайте что хотите!

## 👨‍💻 Автор

Сделано с ❤️ для сообщества разработчиков SAMP/CRMP/MTA

---

**🎯 Coder-Pawno v1.0 - Premium Design 2026**
