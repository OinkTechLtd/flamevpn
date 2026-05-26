import React, { useState } from 'react';

const TermsModal = ({ onAccept, onReject }) => {
  const [accepted, setAccepted] = useState(false);
  const [activeTab, setActiveTab] = useState('terms');

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '30px'
        }}>
          <span style={{ fontSize: '40px' }}>📋</span>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '5px' }}>
              Условия использования
            </h2>
            <p style={{ color: '#a0a0b0' }}>
              Пожалуйста, ознакомьтесь с условиями перед использованием
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '10px'
        }}>
          {[
            { id: 'terms', label: 'Условия', icon: '📜' },
            { id: 'privacy', label: 'Конфиденциальность', icon: '🔒' },
            { id: 'faq', label: 'FAQ', icon: '❓' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id 
                  ? 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)'
                  : 'transparent',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '12px',
                color: activeTab === tab.id ? 'white' : '#a0a0b0',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{
          maxHeight: '400px',
          overflowY: 'auto',
          marginBottom: '30px',
          padding: '20px',
          background: 'rgba(0,0,0,0.2)',
          borderRadius: '16px'
        }}>
          {activeTab === 'terms' && (
            <div style={{ lineHeight: '1.8', color: '#d0d0d0' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#ff6b35' }}>
                1. Принятие условий
              </h3>
              <p style={{ marginBottom: '15px' }}>
                Используя FlameMarket, вы соглашаетесь с настоящими Условиями использования. 
                Если вы не согласны, пожалуйста, не используйте наше приложение.
              </p>

              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#ff6b35' }}>
                2. Описание сервиса
              </h3>
              <p style={{ marginBottom: '15px' }}>
                FlameMarket предоставляет каталог приложений, включая модифицированные версии 
                и оригинальный софт. Мы не размещаем файлы на своих серверах, а предоставляем 
                ссылки на сайты разработчиков и мододелов.
              </p>

              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#ff6b35' }}>
                3. Безопасность
              </h3>
              <p style={{ marginBottom: '15px' }}>
                Мы проверяем приложения через VirusTotal и другие системы безопасности. 
                Однако мы не гарантируем полную безопасность всех приложений и рекомендуем 
                использовать антивирусное ПО.
              </p>

              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#ff6b35' }}>
                4. Ограничения
              </h3>
              <p style={{ marginBottom: '15px' }}>
                - Запрещено использование приложения лицами младше 18 лет без согласия родителей<br/>
                - Запрещено распространение вредоносного ПО<br/>
                - Запрещено нарушение авторских прав<br/>
                - Запрещено использование в коммерческих целях без разрешения
              </p>

              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#ff6b35' }}>
                5. Ответственность
              </h3>
              <p style={{ marginBottom: '15px' }}>
                FlameMarket не несет ответственности за возможный ущерб, причиненный в результате 
                использования загруженных приложений. Пользователь использует сервис на свой страх и риск.
              </p>

              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#ff6b35' }}>
                6. Изменения условий
              </h3>
              <p>
                Мы оставляем за собой право изменять данные условия в любое время. 
                Продолжение использования сервиса означает принятие новых условий.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div style={{ lineHeight: '1.8', color: '#d0d0d0' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#ff6b35' }}>
                1. Сбор данных
              </h3>
              <p style={{ marginBottom: '15px' }}>
                Мы собираем минимальный объем данных:
              </p>
              <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                <li>Настройки приложения (локально)</li>
                <li>История загрузок (локально)</li>
                <li>Предпочтения пользователя (локально)</li>
              </ul>
              <p style={{ marginBottom: '15px' }}>
                Все данные хранятся только на вашем устройстве и не передаются третьим лицам.
              </p>

              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#ff6b35' }}>
                2. Использование данных
              </h3>
              <p style={{ marginBottom: '15px' }}>
                Мы используем данные исключительно для улучшения работы приложения 
                и персонализации пользовательского опыта.
              </p>

              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#ff6b35' }}>
                3. Защита данных
              </h3>
              <p style={{ marginBottom: '15px' }}>
                Мы применяем современные методы защиты данных и регулярно обновляем 
                системы безопасности.
              </p>

              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#ff6b35' }}>
                4. Права пользователя
              </h3>
              <p>
                Вы имеете право:
              </p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Просматривать свои данные</li>
                <li>Удалять свои данные</li>
                <li>Экспортировать свои данные</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </div>
          )}

          {activeTab === 'faq' && (
            <div style={{ lineHeight: '1.8', color: '#d0d0d0' }}>
              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#ffd200' }}>
                  ❓ Что такое FlameMarket?
                </h3>
                <p>
                  FlameMarket — это магазин приложений с модами и оригинальным софтом, 
                  который предоставляет безопасный доступ к тысячам приложений.
                </p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#ffd200' }}>
                  ❓ Безопасно ли использовать моды?
                </h3>
                <p>
                  Мы проверяем все приложения через VirusTotal и другие системы. 
                  Однако рекомендуем всегда иметь установленный антивирус.
                </p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#ffd200' }}>
                  ❓ Как включить детский режим?
                </h3>
                <p>
                  Зайдите в настройки приложения и включите опцию "Детский режим". 
                  Это заблокирует 18+ контент и потенциально опасные приложения.
                </p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#ffd200' }}>
                  ❓ Работает ли приложение с VPN?
                </h3>
                <p>
                  Да, FlameMarket полностью поддерживает работу с VPN для доступа 
                  ко всем приложениям без ограничений.
                </p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#ffd200' }}>
                  ❓ Как скачать приложение?
                </h3>
                <p>
                  Найдите нужное приложение в каталоге, нажмите на него и выберите 
                  "Скачать". Вы будете перенаправлены на сайт разработчика или мододела.
                </p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#ffd200' }}>
                  ❓ Как сообщить о проблемном приложении?
                </h3>
                <p>
                  Используйте кнопку "Пожаловаться" на странице приложения. 
                  Наша команда проверит его в течение 24 часов.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#ffd200' }}>
                  ❓ Как часто обновляется каталог?
                </h3>
                <p>
                  Наш поисковый робот автоматически добавляет новые приложения ежедневно. 
                  Также мы вручную проверяем и добавляем популярные запросы.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Checkbox */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '25px'
        }}>
          <input
            type="checkbox"
            id="accept"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="checkbox-custom"
          />
          <label htmlFor="accept" style={{ color: '#d0d0d0', cursor: 'pointer' }}>
            Я прочитал и принимаю{' '}
            <span style={{ color: '#ff6b35', textDecoration: 'underline' }}>
              Условия использования
            </span>{' '}
            и{' '}
            <span style={{ color: '#ff6b35', textDecoration: 'underline' }}>
              Политику конфиденциальности
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '15px'
        }}>
          <button
            onClick={onAccept}
            disabled={!accepted}
            style={{
              flex: 1,
              background: accepted 
                ? 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)'
                : 'rgba(255,255,255,0.1)',
              color: accepted ? 'white' : '#505060',
              border: 'none',
              padding: '16px',
              borderRadius: '16px',
              fontWeight: '700',
              fontSize: '16px',
              cursor: accepted ? 'pointer' : 'not-allowed',
              transition: 'all 0.3s ease'
            }}
          >
            ✓ Принять и продолжить
          </button>
          <button
            onClick={onReject}
            style={{
              flex: 1,
              background: 'transparent',
              color: '#a0a0b0',
              border: '2px solid rgba(255,255,255,0.2)',
              padding: '16px',
              borderRadius: '16px',
              fontWeight: '700',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            ✕ Отклонить
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
