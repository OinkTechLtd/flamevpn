import React, { useEffect } from 'react';

const Splash = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)',
        animation: 'pulse 4s ease-in-out infinite',
      }} />
      
      {/* Logo Container */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center'
      }}>
        {/* Flame Icon */}
        <div style={{
          fontSize: '120px',
          marginBottom: '20px',
          animation: 'float 3s ease-in-out infinite',
          filter: 'drop-shadow(0 0 40px rgba(255,107,53,0.6))'
        }}>
          🔥
        </div>
        
        {/* Logo Text */}
        <h1 style={{
          fontSize: '64px',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd200 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '10px',
          letterSpacing: '-2px'
        }}>
          FlameMarket
        </h1>
        
        {/* Tagline */}
        <p style={{
          fontSize: '20px',
          color: '#a0a0b0',
          fontWeight: '300',
          marginTop: '10px'
        }}>
          Кайфуйте от интернета
        </p>
        
        {/* Loading Bar */}
        <div style={{
          width: '200px',
          height: '4px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '2px',
          marginTop: '40px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
            background: 'linear-gradient(90deg, #ff6b35, #f7931e, #ffd200)',
            animation: 'loading 3.5s ease-in-out',
            borderRadius: '2px'
          }} />
        </div>
        
        {/* Version */}
        <p style={{
          fontSize: '12px',
          color: '#505060',
          marginTop: '20px'
        }}>
          Version 1.0.0
        </p>
      </div>
      
      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        fontSize: '24px',
        opacity: 0.3,
        animation: 'float 4s ease-in-out infinite 1s'
      }}>
        📱
      </div>
      
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        fontSize: '24px',
        opacity: 0.3,
        animation: 'float 5s ease-in-out infinite 0.5s'
      }}>
        🎮
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '15%',
        fontSize: '24px',
        opacity: 0.3,
        animation: 'float 4.5s ease-in-out infinite 1.5s'
      }}>
        ⚡
      </div>
      
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Splash;
