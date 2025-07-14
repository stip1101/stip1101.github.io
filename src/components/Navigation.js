import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, TrendingUp, Users, Zap, Network, Home, Code } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', name: 'Ocean HUB', icon: Home, description: 'Main Hub' },
    { id: 'ai-companies', name: 'AI Companies Research', icon: Brain, description: 'AI/Blockchain Analysis' },
    { id: 'ai-data-scientists', name: 'AI & Data Scientists', icon: Code, description: 'AI Engineers & Data Scientists' },
    { id: 'predictoor', name: 'Predictoor Analytics', icon: TrendingUp, description: 'Coming Soon' },
    { id: 'ocean-nodes', name: 'Ocean Nodes', icon: Network, description: 'Coming Soon' },
    { id: 'community', name: 'Community', icon: Users, description: 'Coming Soon' }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      className="hub-navigation"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Zap className="logo-icon" />
          <span className="logo-text">Ocean Research HUB</span>
        </motion.div>
        
        <div className="nav-items">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isDisabled = item.description === 'Coming Soon';
            
            return (
              <motion.button
                key={item.id}
                className={`nav-item ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}
                onClick={() => !isDisabled && setActiveSection(item.id)}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                whileHover={!isDisabled ? { scale: 1.05, y: -2 } : {}}
                whileTap={!isDisabled ? { scale: 0.95 } : {}}
                disabled={isDisabled}
              >
                <Icon className="nav-icon" />
                <div className="nav-content">
                  <span className="nav-name">{item.name}</span>
                  <span className="nav-description">{item.description}</span>
                </div>
                {isDisabled && <span className="coming-soon-badge">Soon</span>}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 