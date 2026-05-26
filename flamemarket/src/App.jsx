import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Splash from './components/Splash';
import AppStore from './components/AppStore';
import TermsModal from './components/TermsModal';

function App() {
  const [currentView, setCurrentView] = useState('splash');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [settings, setSettings] = useState({
    kidsMode: false,
    block18Plus: false,
    blockScam: true,
    vpnEnabled: false
  });

  useEffect(() => {
    const storedTerms = localStorage.getItem('flamemarket_terms_accepted');
    if (storedTerms === 'true') {
      setAcceptedTerms(true);
      setTimeout(() => setCurrentView('store'), 3000);
    } else {
      setTimeout(() => setCurrentView('landing'), 3500);
    }
  }, []);

  const handleAcceptTerms = () => {
    localStorage.setItem('flamemarket_terms_accepted', 'true');
    setAcceptedTerms(true);
    setCurrentView('store');
  };

  const handleRejectTerms = () => {
    setCurrentView('landing');
  };

  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    localStorage.setItem('flamemarket_settings', JSON.stringify({ ...settings, ...newSettings }));
  };

  useEffect(() => {
    const storedSettings = localStorage.getItem('flamemarket_settings');
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    }
  }, []);

  return (
    <div className="app">
      {currentView === 'splash' && (
        <Splash onComplete={() => setCurrentView(acceptedTerms ? 'store' : 'landing')} />
      )}
      
      {currentView === 'landing' && (
        <LandingPage 
          onEnterApp={() => setCurrentView('terms')} 
        />
      )}
      
      {currentView === 'terms' && (
        <TermsModal 
          onAccept={handleAcceptTerms}
          onReject={handleRejectTerms}
        />
      )}
      
      {currentView === 'store' && (
        <AppStore 
          settings={settings}
          updateSettings={updateSettings}
        />
      )}
    </div>
  );
}

export default App;
