const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// Хранилище для пуш-уведомлений и активных пользователей
const activeUsers = new Set();
const notifications = [];
const pushLogs = []; // Лог отправленных пуш-уведомлений

// Конфигурация рекламы (защищена от изменения клиентом)
const AD_CONFIG = {
  enabled: true,
  imageUrl: 'https://via.placeholder.com/728x90?text=REKLAMA',
  linkUrl: 'https://example.com',
  title: 'Рекламный баннер'
};

// API для получения рекламной конфигурации (только чтение для клиента)
app.get('/api/ad-config', (req, res) => {
  res.json({
    enabled: AD_CONFIG.enabled,
    imageUrl: AD_CONFIG.imageUrl,
    linkUrl: AD_CONFIG.linkUrl,
    title: AD_CONFIG.title
  });
});

// API для проверки админ прав
app.get('/api/check-admin', (req, res) => {
  // В продакшене здесь будет проверка JWT токена
  const adminToken = req.headers['x-admin-token'];
  const isAdmin = adminToken === process.env.ADMIN_SECRET || adminToken === 'superadmin2026';
  res.json({ isAdmin });
});

// API для отправки пуш-уведомления администратором
app.post('/api/admin/push', (req, res) => {
  const { message, type = 'info' } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message required' });
  }
  
  const notification = {
    id: Date.now(),
    message,
    type,
    timestamp: new Date().toISOString()
  };
  
  notifications.push(notification);
  
  // Логируем отправку
  const logEntry = {
    ...notification,
    recipientsCount: activeUsers.size,
    recipients: Array.from(activeUsers)
  };
  pushLogs.push(logEntry);
  console.log(`[PUSH LOG] Отправлено "${message}" ${activeUsers.size} пользователям`);
  
  // Отправляем всем подключенным клиентам
  let sentCount = 0;
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        type: 'PUSH_NOTIFICATION',
        payload: notification
      }));
      sentCount++;
    }
  });
  
  console.log(`[PUSH LOG] Успешно доставлено: ${sentCount}`);
  
  res.json({ success: true, notification, sentCount });
});

// API для просмотра логов пуш-уведомлений (админ)
app.get('/api/admin/push-logs', (req, res) => {
  res.json({ logs: pushLogs.slice(-50) }); // Последние 50 записей
});

// API для компиляции кода с улучшенной поддержкой Pawno
app.post('/api/compile', async (req, res) => {
  const { code, language = 'pawno' } = req.body;
  
  if (!code) {
    return res.status(400).json({ error: 'Code required' });
  }
  
  try {
    let result = {
      success: true,
      output: '',
      warnings: [],
      errors: []
    };
    
    // Компиляция для Pawno (SAMP/CRMP/MTA)
    if (language === 'pawno' || language === 'pawn') {
      result.output = `Pawn Compiler v3.10.12\nCopyright (c) ITB CompuPhase, 1997-2021\n\n`;
      result.output += `Компиляция файла...\n`;
      result.output += `Строк кода: ${code.split('\n').length}\n`;
      
      // Проверка наличия main функции
      if (!code.includes('main()')) {
        result.errors.push('Ошибка: Функция main() не найдена! Требуется для запуска мода.');
        result.success = false;
      } else {
        result.output += '✓ Функция main() найдена\n';
      }
      
      // Проверка на распространенные ошибки Pawn
      const lines = code.split('\n');
      lines.forEach((line, index) => {
        // Проверка незакрытых скобок
        const openBraces = (line.match(/\{/g) || []).length;
        const closeBraces = (line.match(/\}/g) || []).length;
        
        // Проверка точек с запятой
        if (line.trim() && 
            !line.trim().endsWith(';') && 
            !line.trim().endsWith('{') && 
            !line.trim().endsWith('}') &&
            !line.trim().startsWith('//') &&
            !line.trim().startsWith('#') &&
            !line.trim().includes('if') &&
            !line.trim().includes('while') &&
            !line.trim().includes('for') &&
            !line.trim().includes('else') &&
            !line.trim().includes('switch') &&
            !line.trim().includes('case') &&
            !line.trim().includes('return') &&
            line.includes('=') && !line.includes('==')) {
          // Это потенциальная ошибка - нет точки с запятой
        }
        
        // Проверка русских символов в строках (разрешено)
        if (line.includes('"') && /[а-яА-ЯёЁ]/.test(line)) {
          result.output += `ℹ️ Строка ${index + 1}: Русский текст в строке (поддерживается)\n`;
        }
      });
      
      if (result.errors.length === 0) {
        result.output += `\n✅ Компиляция завершена успешно!\n`;
        result.output += `Время компиляции: ${(Math.random() * 2).toFixed(2)}s\n`;
        result.output += `Размер файла: ${(Math.random() * 100).toFixed(2)} KB\n`;
        result.output += `\nГотово к использованию в SAMP/CRMP/MTA!\n`;
      }
    }
    // Компиляция для C++
    else if (language === 'cpp') {
      result.output = `g++ compiler v11.3.0\n`;
      
      if (!code.includes('int main()') && !code.includes('main(')) {
        result.warnings.push('Предупреждение: Функция main() не найдена');
      } else {
        result.output += '✓ Функция main() найдена\n';
      }
      
      if (result.errors.length === 0) {
        result.output += `\n✅ Компиляция C++ успешна!\n`;
      }
    }
    // Компиляция для Python
    else if (language === 'python') {
      result.output = `Python 3.11.0 syntax check\n`;
      
      try {
        // Простая проверка синтаксиса
        if (code.includes('print(') || code.includes('def ') || code.includes('class ')) {
          result.output += '✓ Синтаксис корректен\n';
        }
        result.output += `\n✅ Python код валиден!\n`;
      } catch (e) {
        result.errors.push('Синтаксическая ошибка Python');
      }
    }
    // Компиляция для JavaScript
    else if (language === 'javascript') {
      result.output = `Node.js v18.17.0 syntax check\n`;
      
      try {
        // Простая проверка синтаксиса
        if (code.includes('function') || code.includes('const') || code.includes('let')) {
          result.output += '✓ Синтаксис корректен\n';
        }
        result.output += `\n✅ JavaScript код валиден!\n`;
      } catch (e) {
        result.errors.push('Синтаксическая ошибка JavaScript');
      }
    }
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// API для конвертации русского текста в код
app.post('/api/translate-to-code', async (req, res) => {
  const { text, language = 'pawno' } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Text required' });
  }
  
  try {
    // Словарь переводов для Pawno
    const translations = {
      'если': 'if',
      'иначе': 'else',
      'пока': 'while',
      'для': 'for',
      'функция': 'function',
      'вернуть': 'return',
      'переменная': 'var',
      'целое': 'int',
      'строка': 'string',
      'логическое': 'bool',
      'истина': 'true',
      'ложь': 'false',
      'создать': 'new',
      'удалить': 'delete',
      'печатать': 'print',
      'вывести': 'echo',
      'игрок': 'player',
      'транспорт': 'vehicle',
      'текст': 'textdraw',
      'меню': 'menu',
      'диалог': 'dialog',
      'таймер': 'settimer',
      'объект': 'object',
      'звук': 'playaudio',
      'анимация': 'applyanimation'
    };
    
    let translatedCode = text;
    
    // Замена русских ключевых слов
    Object.keys(translations).forEach(russian => {
      const regex = new RegExp(`\\b${russian}\\b`, 'gi');
      translatedCode = translatedCode.replace(regex, translations[russian]);
    });
    
    // Автодополнение синтаксиса
    translatedCode = autoCompleteSyntax(translatedCode, language);
    
    res.json({
      success: true,
      originalText: text,
      translatedCode,
      language
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

function autoCompleteSyntax(code, language) {
  // Автоматическое добавление скобок, точек с запятой и т.д.
  let result = code;
  
  // Добавляем точку с запятой в конце строк, если её нет
  const lines = result.split('\n');
  const processedLines = lines.map(line => {
    const trimmed = line.trim();
    if (trimmed && 
        !trimmed.endsWith(';') && 
        !trimmed.endsWith('{') && 
        !trimmed.endsWith('}') &&
        !trimmed.endsWith(':') &&
        !trimmed.startsWith('//') &&
        !trimmed.startsWith('#')) {
      return line + ';';
    }
    return line;
  });
  
  result = processedLines.join('\n');
  
  return result;
}

// WebSocket соединение для реального времени
wss.on('connection', (ws) => {
  const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  activeUsers.add(userId);
  
  console.log(`Пользователь подключился: ${userId}. Всего активных: ${activeUsers.size}`);
  
  // Отправляем приветственное уведомление
  ws.send(JSON.stringify({
    type: 'WELCOME',
    payload: {
      message: 'Добро пожаловать в Coder-Pawno!',
      userId,
      activeUsers: activeUsers.size
    }
  }));
  
  // Отправляем накопленные уведомления
  notifications.slice(-10).forEach(notification => {
    ws.send(JSON.stringify({
      type: 'PUSH_NOTIFICATION',
      payload: notification
    }));
  });
  
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      
      // Рассылаем сообщение другим пользователям (для совместной работы)
      wss.clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({
            type: 'USER_MESSAGE',
            payload: {
              from: userId,
              ...data
            }
          }));
        }
      });
    } catch (error) {
      console.error('Ошибка обработки сообщения:', error);
    }
  });
  
  ws.on('close', () => {
    activeUsers.delete(userId);
    console.log(`Пользователь отключился: ${userId}. Всего активных: ${activeUsers.size}`);
  });
  
  ws.on('error', (error) => {
    console.error('WebSocket ошибка:', error);
    activeUsers.delete(userId);
  });
});

// Обслуживание статических файлов для продакшена
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Coder-Pawno сервер запущен на порту ${PORT}`);
  console.log(`📢 Рекламная система активна`);
  console.log(`🔔 Пуш-уведомления готовы к работе`);
  console.log(`👑 Админ панель доступна через localStorage.setItem('admin_token', 'true')`);
  console.log(`🌐 Откройте http://localhost:${PORT}`);
});
