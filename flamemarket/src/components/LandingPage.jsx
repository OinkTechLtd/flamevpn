import React from 'react';

const LandingPage = ({ onEnterApp }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
      overflow: 'hidden'
    }}>
      {/* Navigation */}
      <nav style={{
        padding: '20px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ fontSize: '40px' }}>🔥</span>
          <span style={{
            fontSize: '28px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #ff6b35 0%, #ffd200 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            FlameMarket
          </span>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center'
        }}>
          <a href="#features" style={{ color: '#a0a0b0', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ff6b35'} onMouseOut={(e) => e.target.style.color = '#a0a0b0'}>Возможности</a>
          <a href="#apps" style={{ color: '#a0a0b0', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ff6b35'} onMouseOut={(e) => e.target.style.color = '#a0a0b0'}>Приложения</a>
          <a href="#faq" style={{ color: '#a0a0b0', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ff6b35'} onMouseOut={(e) => e.target.style.color = '#a0a0b0'}>FAQ</a>
          <button 
            onClick={onEnterApp}
            className="btn-primary"
            style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              padding: '12px 32px',
              border: 'none',
              borderRadius: '16px',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 16px rgba(255,107,53,0.4)'
            }}
          >
            Войти в приложение
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '100px 60px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0
        }} />
        
        <h1 style={{
          fontSize: '72px',
          fontWeight: '800',
          marginBottom: '20px',
          position: 'relative',
          zIndex: 1,
          lineHeight: '1.1'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #a0a0b0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Кайфуйте от интернета
          </span>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd200 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            вместе с FlameMarket
          </span>
        </h1>
        
        <p style={{
          fontSize: '24px',
          color: '#a0a0b0',
          maxWidth: '800px',
          margin: '30px auto',
          lineHeight: '1.8',
          position: 'relative',
          zIndex: 1
        }}>
          Магазин приложений нового поколения с модами, оригинальным софтом 
          и максимальной безопасностью. Скачивайте и кайфуйте!
        </p>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          marginTop: '50px',
          position: 'relative',
          zIndex: 1
        }}>
          <button 
            onClick={onEnterApp}
            style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              padding: '18px 48px',
              border: 'none',
              borderRadius: '24px',
              color: 'white',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 32px rgba(255,107,53,0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            🚀 Начать использовать
          </button>
          <a 
            href="#features"
            style={{
              background: 'transparent',
              padding: '18px 48px',
              border: '2px solid rgba(255,255,255,0.2)',
              borderRadius: '24px',
              color: 'white',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            📖 Узнать больше
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{
        padding: '100px 60px',
        background: 'rgba(18,18,26,0.5)'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #ffd200 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Почему FlameMarket?
          </span>
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {[
            {
              icon: '🎮',
              title: 'Моды и Оригинальный Софт',
              description: 'Огромный каталог модифицированных приложений и оригинального ПО от разработчиков'
            },
            {
              icon: '🛡️',
              title: 'Безопасность',
              description: 'Проверка на вирусы через VirusTotal, защита от скам-приложений и 18+ контента'
            },
            {
              icon: '🔒',
              title: 'VPN Поддержка',
              description: 'Работает с VPN для доступа ко всем приложениям без ограничений'
            },
            {
              icon: '👶',
              title: 'Детский Режим',
              description: 'Специальный режим для безопасного использования детьми'
            },
            {
              icon: '⚡',
              title: 'Быстрые Загрузки',
              description: 'Прямые ссылки на сайты разработчиков и мододелов для максимальной скорости'
            },
            {
              icon: '🤖',
              title: 'Авто-обновления',
              description: 'Поисковый робот автоматически добавляет новые приложения и моды'
            }
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(18,18,26,0.8)',
                borderRadius: '24px',
                padding: '40px',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(255,107,53,0.3)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,107,53,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px', color: '#ffffff' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#a0a0b0', lineHeight: '1.8', fontSize: '16px' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '80px 60px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { number: '10K+', label: 'Приложений' },
            { number: '500K+', label: 'Пользователей' },
            { number: '99.9%', label: 'Безопасных приложений' },
            { number: '24/7', label: 'Поддержка' }
          ].map((stat, index) => (
            <div key={index}>
              <div style={{
                fontSize: '56px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ffd200 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {stat.number}
              </div>
              <div style={{ color: '#a0a0b0', fontSize: '18px', marginTop: '10px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 60px',
        textAlign: 'center',
        background: 'rgba(18,18,26,0.5)'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '800',
          marginBottom: '30px'
        }}>
          Готовы начать?
        </h2>
        <p style={{
          fontSize: '20px',
          color: '#a0a0b0',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          Присоединяйтесь к тысячам пользователей, которые уже кайфуют от FlameMarket
        </p>
        <button 
          onClick={onEnterApp}
          style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
            padding: '20px 60px',
            border: 'none',
            borderRadius: '24px',
            color: 'white',
            fontWeight: '700',
            cursor: 'pointer',
            fontSize: '20px',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 32px rgba(255,107,53,0.4)'
          }}
        >
          🔥 Войти в FlameMarket
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '60px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '30px'
        }}>
          <a href="#" style={{ color: '#a0a0b0', textDecoration: 'none' }}>Политика конфиденциальности</a>
          <a href="#" style={{ color: '#a0a0b0', textDecoration: 'none' }}>Условия использования</a>
          <a href="#" style={{ color: '#a0a0b0', textDecoration: 'none' }}>Документация</a>
          <a href="#" style={{ color: '#a0a0b0', textDecoration: 'none' }}>Контакты</a>
        </div>
        <p style={{ color: '#505060' }}>
          © 2024 FlameMarket. Все права защищены. Сделано с 🔥 для пользователей.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
