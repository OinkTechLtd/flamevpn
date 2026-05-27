import React, { useEffect } from 'react';
import { useAppStore } from '../store/appStore';
import toast from 'react-hot-toast';

const NotificationSystem = () => {
  const { notifications, removeNotification, soundEnabled, setIsAdmin, activeUsers, setActiveUsers } = useAppStore();

  useEffect(() => {
    // Запрос разрешения на браузерные уведомления
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    // Показ браузерных уведомлений
    if (notifications.length > 0 && 'Notification' in window) {
      const latestNotification = notifications[notifications.length - 1];

      if (Notification.permission === 'granted') {
        new Notification('Coder-Pawno', {
          body: latestNotification.message,
          icon: '/vite.svg',
          badge: '/vite.svg'
        });
      }
    }
  }, [notifications]);

  // Проверка админских прав при загрузке
  useEffect(() => {
    // В продакшене здесь будет проверка токена или API
    // Для демонстрации устанавливаем admin = true для первого пользователя
    const checkAdminStatus = async () => {
      try {
        // Проверяем наличие admin токена в localStorage
        const adminToken = localStorage.getItem('admin_token');
        if (adminToken === 'true') {
          setIsAdmin(true);
        }
        
        // Или можно сделать проверку через API
        // const response = await fetch('/api/check-admin');
        // const data = await response.json();
        // setIsAdmin(data.isAdmin);
      } catch (error) {
        console.error('Ошибка проверки админ прав:', error);
      }
    };
    
    checkAdminStatus();
  }, [setIsAdmin]);

  // Отслеживание активных пользователей
  useEffect(() => {
    const interval = setInterval(() => {
      // Здесь можно сделать запрос к API для получения количества активных пользователей
      // fetch('/api/active-users').then(r => r.json()).then(d => setActiveUsers(d.count));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [setActiveUsers]);

  return null; // Уведомления отображаются через Toaster
};

export default NotificationSystem;
