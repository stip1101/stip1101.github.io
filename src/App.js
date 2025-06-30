import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HubHomePage from './components/HubHomePage';
import AICompaniesResearch from './components/AICompaniesResearch';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HubHomePage setActiveSection={setActiveSection} />;
      case 'ai-companies':
        return <AICompaniesResearch />;
      case 'data-marketplace':
      case 'predictoor':
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
      {renderActiveSection()}
    </div>
  );
}

export default App; 