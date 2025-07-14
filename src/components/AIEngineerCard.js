import React from 'react';
import { motion } from 'framer-motion';
import { Github, Zap, TrendingUp, Award } from 'lucide-react';

const AIEngineerCard = ({ engineer, onEngineerClick, variants }) => {
  const handleClick = () => {
    onEngineerClick(engineer);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'AI Researcher': return '#ff1493';
      case 'Engineer': return '#ff69b4';
      case 'Entrepreneur': return '#ffc0cb';
      case 'Engineer/Researcher': return '#ffb6c1';
      case 'Researcher/Educator': return '#ffa0b4';
      default: return '#ff91a4';
    }
  };

  const getAgenticIcon = (agenticType) => {
    if (agenticType === 'Agentic') return <Zap size={16} />;
    if (agenticType === 'Biometric (Orb)') return <Award size={16} />;
    return null;
  };

  return (
    <motion.div
      className="project-card engineer-card"
      variants={variants}
      whileHover={{ scale: 1.02, y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      layout
    >
      <div className="project-card-header">
        <div className="project-title-section">
          <h3 className="project-name">{engineer.name}</h3>
          <div className="project-affiliations">{engineer.affiliations}</div>
          <span 
            className="project-type-badge"
            style={{ backgroundColor: getTypeColor(engineer.type) }}
          >
            {engineer.type}
          </span>
        </div>
        <div className="external-actions">
          {engineer.agenticType !== 'None' && (
            <div className="agentic-indicator" title={engineer.agenticType}>
              {getAgenticIcon(engineer.agenticType)}
            </div>
          )}
          <button
            className="external-link-btn"
            onClick={(e) => {
              e.stopPropagation();
              window.open(engineer.github, '_blank');
            }}
            title="View GitHub"
          >
            <Github size={18} />
          </button>
        </div>
      </div>

      <p className="project-description">{engineer.description}</p>

      <div className="project-metrics">
        <div className="metric-row">
          <div className="metric-item">
            <span className="metric-label">Influence</span>
            <div className="metric-bar">
              <div 
                className="metric-fill" 
                style={{ 
                  width: `${engineer.influence * 10}%`,
                  background: 'linear-gradient(135deg, #ff69b4, #ff1493)'
                }}
              ></div>
            </div>
            <span className="metric-value">{engineer.influence}</span>
          </div>

          <div className="metric-item">
            <span className="metric-label">Innovation</span>
            <div className="metric-bar">
              <div 
                className="metric-fill" 
                style={{ 
                  width: `${engineer.innovation * 10}%`,
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed)'
                }}
              ></div>
            </div>
            <span className="metric-value">{engineer.innovation}</span>
          </div>

          <div className="metric-item">
            <span className="metric-label">Impact</span>
            <div className="metric-bar">
              <div 
                className="metric-fill" 
                style={{ 
                  width: `${engineer.impact * 10}%`,
                  background: 'linear-gradient(135deg, #059669, #10b981)'
                }}
              ></div>
            </div>
            <span className="metric-value">{engineer.impact}</span>
          </div>

          <div className="metric-item">
            <span className="metric-label">Community</span>
            <div className="metric-bar">
              <div 
                className="metric-fill" 
                style={{ 
                  width: `${engineer.community * 10}%`,
                  background: 'linear-gradient(135deg, #dc2626, #ef4444)'
                }}
              ></div>
            </div>
            <span className="metric-value">{engineer.community}</span>
          </div>
        </div>
      </div>

      <div className="project-features">
        <div className="ai-model-info">
          <strong>AI Model/Focus:</strong> {engineer.aiModel}
        </div>
        <div className="features-list">
          {engineer.specialties.slice(0, 3).map((specialty, index) => (
            <span key={index} className="feature-tag">
              {specialty}
            </span>
          ))}
          {engineer.specialties.length > 3 && (
            <span className="feature-more">+{engineer.specialties.length - 3} more</span>
          )}
        </div>
      </div>

      <div className="card-hover-indicator">
        <TrendingUp size={16} />
        <span>View Details</span>
      </div>
    </motion.div>
  );
};

export default AIEngineerCard; 