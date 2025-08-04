import React, { useState, Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import HubHomePage from './components/HubHomePage';
import './App.css';

// Lazy-loaded секции для сокращения первоначального бандла
const AICompaniesResearch = lazy(() => import('./components/AICompaniesResearch'));
const AIDataScientists = lazy(() => import('./components/AIDataScientists'));
const AIComputeProviders = lazy(() => import('./components/AIComputeProviders'));

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HubHomePage setActiveSection={setActiveSection} />;
      case 'ai-companies':
        return <AICompaniesResearch />;
      case 'ai-data-scientists':
        return <AIDataScientists />;
      case 'compute-providers':
        return <AIComputeProviders />;
      case 'ocean-nodes':
      case 'community':
        return (
          <div style={{ 
            padding: '4rem 2rem', 
            textAlign: 'center',
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              color: '#ff1493', 
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Coming Soon
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: '600px' 
            }}>
              This section is currently under development. Stay tuned for exciting new features!
            </p>
          </div>
        );
      default:
        return <HubHomePage setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="App">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      {/* Suspense обеспечивает плавный спиннер во время ленивой подгрузки */}
      <Suspense fallback={<div className="loading">Загрузка...</div>}>
        {renderActiveSection()}
      </Suspense>
    </div>
  );
}

export default App; 