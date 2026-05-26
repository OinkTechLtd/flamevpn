import React, { useState, useEffect } from 'react';
import { sampleApps } from '../data/appsData';

const AppStore = ({ settings, updateSettings }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSettings, setShowSettings] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [apps, setApps] = useState([]);

  useEffect(() => {
    filterApps();
  }, [searchQuery, selectedCategory, settings]);

  const filterApps = () => {
    let filtered = [...sampleApps];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(app =>
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(app => app.category === selectedCategory);
    }

    // Filter by settings
    if (settings.kidsMode || settings.block18Plus) {
      filtered = filtered.filter(app => !app.is18Plus);
    }

    if (settings.blockScam) {
      filtered = filtered.filter(app => app.safetyScore > 70);
    }

    setApps(filtered);
  };

  const categories = [
    { id: 'all', name: 'Все', icon: '🏠' },
    { id: 'games', name: 'Игры', icon: '🎮' },
    { id: 'social', name: 'Соцсети', icon: '💬' },
    { id: 'tools', name: 'Инструменты', icon: '🛠️' },
    { id: 'media', name: 'Медиа', icon: '🎵' },
    { id: 'productivity', name: 'Продуктивность', icon: '📊' },
    { id: 'education', name: 'Образование', icon: '📚' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
      display: 'flex'
    }}>
      {/* Sidebar */}
      <aside style={{
        width: '280px',
        background: 'rgba(18,18,26,0.9)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        padding: '30px 20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '40px',
          padding: '0 10px'
        }}>
          <span style={{ fontSize: '36px' }}>🔥</span>
          <div>
            <h1 style={{
              fontSize: '22px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ff6b35 0%, #ffd200 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              FlameMarket
            </h1>
            <p style={{ fontSize: '12px', color: '#505060' }}>v1.0.0</p>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1 }}>
          {[
            { id: 'home', label: 'Главная', icon: '🏠' },
            { id: 'catalog', label: 'Каталог', icon: '📱' },
            { id: 'mods', label: 'Моды', icon: '⚡' },
            { id: 'downloads', label: 'Загрузки', icon: '⬇️' },
            { id: 'favorites', label: 'Избранное', icon: '⭐' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                marginBottom: '8px',
                background: activeTab === item.id
                  ? 'linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(247,147,30,0.1) 100%)'
                  : 'transparent',
                border: 'none',
                borderRadius: '12px',
                color: activeTab === item.id ? '#ff6b35' : '#a0a0b0',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left'
              }}
              onMouseOver={(e) => {
                if (activeTab !== item.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== item.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#a0a0b0';
                }
              }}
            >
              <span style={{ fontSize: '20px' }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Settings Button */}
        <button
          onClick={() => setShowSettings(true)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 16px',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            color: '#a0a0b0',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          <span style={{ fontSize: '20px' }}>⚙️</span>
          Настройки
        </button>
      </aside>

      {/* Main Content */}
      <main style={{
        flex: 1,
        overflowY: 'auto',
        padding: '30px'
      }}>
        {/* Header */}
        <header style={{
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>
              {activeTab === 'home' && 'Добро пожаловать! 🔥'}
              {activeTab === 'catalog' && 'Каталог приложений'}
              {activeTab === 'mods' && 'Модификации ⚡'}
              {activeTab === 'downloads' && 'Мои загрузки'}
              {activeTab === 'favorites' && 'Избранное ⭐'}
            </h2>
            <p style={{ color: '#a0a0b0' }}>
              {activeTab === 'home' && 'Найдите лучшие приложения и моды'}
              {activeTab === 'catalog' && 'Все приложения в одном месте'}
              {activeTab === 'mods' && 'Проверенные модификации'}
              {activeTab === 'downloads' && 'История загрузок'}
              {activeTab === 'favorites' && 'Ваши любимые приложения'}
            </p>
          </div>

          {/* Search */}
          <div style={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '400px'
            }}>
              <input
                type="text"
                placeholder="Поиск приложений..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field"
                style={{
                  paddingLeft: '45px'
                }}
              />
              <span style={{
                position: 'absolute',
                left: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '18px'
              }}>
                🔍
              </span>
            </div>
          </div>
        </header>

        {/* Categories */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '30px',
          overflowX: 'auto',
          paddingBottom: '10px'
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: selectedCategory === cat.id
                  ? 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)'
                  : 'rgba(18,18,26,0.8)',
                border: selectedCategory === cat.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                color: selectedCategory === cat.id ? 'white' : '#a0a0b0',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Featured Apps */}
        {activeTab === 'home' && !searchQuery && selectedCategory === 'all' && (
          <>
            <section style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>
                🔥 Популярное сейчас
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                {sampleApps.slice(0, 4).map(app => (
                  <AppCard key={app.id} app={app} onSelect={setSelectedApp} />
                ))}
              </div>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>
                ⚡ Новые моды
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                {sampleApps.filter(app => app.isMod).slice(0, 4).map(app => (
                  <AppCard key={app.id} app={app} onSelect={setSelectedApp} />
                ))}
              </div>
            </section>

            <section>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>
                🛡️ Проверенные приложения
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                {sampleApps.filter(app => app.safetyScore >= 90).slice(0, 4).map(app => (
                  <AppCard key={app.id} app={app} onSelect={setSelectedApp} />
                ))}
              </div>
            </section>
          </>
        )}

        {/* Catalog/Mods View */}
        {(activeTab === 'catalog' || activeTab === 'mods' || searchQuery || selectedCategory !== 'all') && (
          <section>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700' }}>
                {searchQuery ? `Результаты: "${searchQuery}"` : 'Все приложения'}
              </h3>
              <span style={{ color: '#a0a0b0' }}>
                Найдено: {apps.length}
              </span>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {apps.map(app => (
                <AppCard key={app.id} app={app} onSelect={setSelectedApp} />
              ))}
            </div>
            {apps.length === 0 && (
              <div style={{
                textAlign: 'center',
                padding: '60px',
                color: '#a0a0b0'
              }}>
                <span style={{ fontSize: '64px', display: 'block', marginBottom: '20px' }}>🔍</span>
                <p style={{ fontSize: '20px' }}>Ничего не найдено</p>
                <p>Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </section>
        )}

        {/* Downloads/Favorites Placeholder */}
        {(activeTab === 'downloads' || activeTab === 'favorites') && (
          <div style={{
            textAlign: 'center',
            padding: '60px',
            color: '#a0a0b0'
          }}>
            <span style={{ fontSize: '64px', display: 'block', marginBottom: '20px' }}>
              {activeTab === 'downloads' ? '⬇️' : '⭐'}
            </span>
            <p style={{ fontSize: '20px' }}>
              {activeTab === 'downloads' ? 'История загрузок пуста' : 'Список избранного пуст'}
            </p>
            <p>Начните скачивать приложения, чтобы увидеть их здесь</p>
          </div>
        )}
      </main>

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal
          settings={settings}
          updateSettings={updateSettings}
          onClose={() => setShowSettings(false)}
        />
      )}

      {/* App Detail Modal */}
      {selectedApp && (
        <AppDetailModal
          app={selectedApp}
          onClose={() => setSelectedApp(null)}
        />
      )}
    </div>
  );
};

// App Card Component
const AppCard = ({ app, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(app)}
      className="card"
      style={{
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* App Icon */}
      <div style={{
        display: 'flex',
        gap: '15px',
        marginBottom: '15px'
      }}>
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '16px',
          background: app.iconBg || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '36px',
          flexShrink: 0
        }}>
          {app.icon}
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>
            {app.name}
          </h4>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
            {app.isMod && (
              <span className="badge badge-mod">МОД</span>
            )}
            {!app.isMod && (
              <span className="badge badge-original">ОРИГ</span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px', color: '#a0a0b0' }}>
            <span>{app.rating}</span>
            <span>⭐</span>
            <span>•</span>
            <span>{app.downloads}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p style={{
        color: '#a0a0b0',
        fontSize: '14px',
        lineHeight: '1.6',
        marginBottom: '15px',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        {app.description}
      </p>

      {/* Safety Score */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        paddingTop: '15px',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{
          flex: 1,
          height: '6px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '3px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${app.safetyScore}%`,
            background: app.safetyScore >= 80
              ? 'linear-gradient(90deg, #00c853, #00e676)'
              : app.safetyScore >= 50
              ? 'linear-gradient(90deg, #ffab00, #ffd200)'
              : 'linear-gradient(90deg, #ff1744, #ff5252)',
            borderRadius: '3px',
            transition: 'width 0.5s ease'
          }} />
        </div>
        <span style={{
          fontSize: '12px',
          fontWeight: '600',
          color: app.safetyScore >= 80
            ? '#00c853'
            : app.safetyScore >= 50
            ? '#ffab00'
            : '#ff1744'
        }}>
          {app.safetyScore}% безопасно
        </span>
      </div>
    </div>
  );
};

// Settings Modal Component
const SettingsModal = ({ settings, updateSettings, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '40px' }}>⚙️</span>
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '700' }}>Настройки</h2>
              <p style={{ color: '#a0a0b0' }}>Управление функциями безопасности</p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '28px',
              color: '#a0a0b0',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            {
              key: 'kidsMode',
              icon: '👶',
              title: 'Детский режим',
              description: 'Блокирует контент 18+ и потенциально опасные приложения'
            },
            {
              key: 'block18Plus',
              icon: '🔞',
              title: 'Блокировка 18+',
              description: 'Скрывает приложения с возрастным ограничением 18+'
            },
            {
              key: 'blockScam',
              icon: '🛡️',
              title: 'Защита от скама',
              description: 'Блокирует приложения с низким рейтингом безопасности'
            },
            {
              key: 'vpnEnabled',
              icon: '🔒',
              title: 'VPN поддержка',
              description: 'Разрешает работу через VPN для доступа ко всем приложениям'
            }
          ].map(setting => (
            <div
              key={setting.key}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '20px',
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '16px'
              }}
            >
              <span style={{ fontSize: '40px' }}>{setting.icon}</span>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>
                  {setting.title}
                </h3>
                <p style={{ color: '#a0a0b0', fontSize: '14px' }}>
                  {setting.description}
                </p>
              </div>
              <label style={{
                position: 'relative',
                width: '60px',
                height: '32px',
                background: settings[setting.key]
                  ? 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)'
                  : 'rgba(255,255,255,0.1)',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}>
                <input
                  type="checkbox"
                  checked={settings[setting.key]}
                  onChange={(e) => updateSettings({ [setting.key]: e.target.checked })}
                  style={{ display: 'none' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '4px',
                  left: settings[setting.key] ? '32px' : '4px',
                  width: '24px',
                  height: '24px',
                  background: 'white',
                  borderRadius: '50%',
                  transition: 'left 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }} />
              </label>
            </div>
          ))}
        </div>

        {/* VirusTotal Info */}
        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: 'rgba(0,200,83,0.1)',
          borderRadius: '16px',
          border: '1px solid rgba(0,200,83,0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <span style={{ fontSize: '24px' }}>🛡️</span>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#00c853' }}>
              Система безопасности
            </h3>
          </div>
          <p style={{ color: '#a0a0b0', fontSize: '14px', lineHeight: '1.6' }}>
            Все приложения проверяются через VirusTotal и другие антивирусные системы. 
            Наш поисковый робот автоматически сканирует новые приложения на наличие угроз.
            Рейтинг безопасности отображается для каждого приложения.
          </p>
        </div>
      </div>
    </div>
  );
};

// App Detail Modal Component
const AppDetailModal = ({ app, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      window.open(app.downloadUrl, '_blank');
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '700px' }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            fontSize: '28px',
            color: '#a0a0b0',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{
          display: 'flex',
          gap: '25px',
          marginBottom: '30px',
          paddingBottom: '30px',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '24px',
            background: app.iconBg || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '60px',
            flexShrink: 0,
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
          }}>
            {app.icon}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              {app.isMod && <span className="badge badge-mod">МОД</span>}
              {!app.isMod && <span className="badge badge-original">ОРИГ</span>}
              {app.safetyScore >= 80 && <span className="badge badge-safe">ПРОВЕРЕНО</span>}
              {app.safetyScore < 50 && <span className="badge badge-danger">ОПАСНО</span>}
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '10px' }}>
              {app.name}
            </h2>
            <p style={{ color: '#a0a0b0', marginBottom: '15px' }}>{app.developer}</p>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontSize: '20px' }}>⭐</span>
                <span style={{ fontSize: '18px', fontWeight: '700' }}>{app.rating}</span>
              </div>
              <div style={{ color: '#a0a0b0' }}>
                {app.downloads} загрузок
              </div>
              <div style={{ color: '#a0a0b0' }}>
                {app.size}
              </div>
            </div>
          </div>
        </div>

        {/* Safety Score */}
        <div style={{
          marginBottom: '30px',
          padding: '20px',
          background: 'rgba(0,0,0,0.2)',
          borderRadius: '16px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '15px' }}>
            🛡️ Безопасность
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ flex: 1 }}>
              <div style={{
                height: '10px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '5px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  width: `${app.safetyScore}%`,
                  background: app.safetyScore >= 80
                    ? 'linear-gradient(90deg, #00c853, #00e676)'
                    : app.safetyScore >= 50
                    ? 'linear-gradient(90deg, #ffab00, #ffd200)'
                    : 'linear-gradient(90deg, #ff1744, #ff5252)',
                  borderRadius: '5px'
                }} />
              </div>
            </div>
            <span style={{
              fontSize: '24px',
              fontWeight: '800',
              color: app.safetyScore >= 80
                ? '#00c853'
                : app.safetyScore >= 50
                ? '#ffab00'
                : '#ff1744'
            }}>
              {app.safetyScore}%
            </span>
          </div>
          <p style={{ color: '#a0a0b0', fontSize: '14px', marginTop: '10px' }}>
            Проверено через VirusTotal и другие антивирусные системы
          </p>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '15px' }}>
            📝 Описание
          </h3>
          <p style={{ color: '#d0d0d0', lineHeight: '1.8' }}>
            {app.description}
          </p>
          {app.features && (
            <div style={{ marginTop: '20px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px', color: '#ff6b35' }}>
                Особенности:
              </h4>
              <ul style={{ color: '#d0d0d0', lineHeight: '1.8', paddingLeft: '20px' }}>
                {app.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mod Info */}
        {app.isMod && app.modFeatures && (
          <div style={{
            marginBottom: '30px',
            padding: '20px',
            background: 'rgba(255,107,53,0.1)',
            borderRadius: '16px',
            border: '1px solid rgba(255,107,53,0.2)'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '15px', color: '#ff6b35' }}>
              ⚡ Особенности мода
            </h3>
            <ul style={{ color: '#d0d0d0', lineHeight: '1.8', paddingLeft: '20px' }}>
              {app.modFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Download Button */}
        <div style={{
          display: 'flex',
          gap: '15px'
        }}>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            style={{
              flex: 1,
              background: isDownloading
                ? 'rgba(255,255,255,0.1)'
                : 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              color: 'white',
              border: 'none',
              padding: '18px',
              borderRadius: '16px',
              fontWeight: '700',
              fontSize: '18px',
              cursor: isDownloading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            {isDownloading ? (
              <>
                <span className="animate-pulse">⏳</span>
                Подготовка...
              </>
            ) : (
              <>
                <span>⬇️</span>
                Скачать с сайта разработчика
              </>
            )}
          </button>
          <button
            style={{
              padding: '18px 24px',
              background: 'transparent',
              border: '2px solid rgba(255,255,255,0.2)',
              borderRadius: '16px',
              color: '#a0a0b0',
              fontWeight: '700',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            📤 Поделиться
          </button>
        </div>

        {/* Warning */}
        {app.safetyScore < 70 && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(255,23,68,0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(255,23,68,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ fontSize: '24px' }}>⚠️</span>
            <p style={{ color: '#ff1744', fontSize: '14px', margin: 0 }}>
              Внимание! Это приложение имеет низкий рейтинг безопасности. 
              Рекомендуется использовать антивирус перед установкой.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppStore;
