import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Star, Zap, TrendingUp, Award, Code, BookOpen } from 'lucide-react';

const AIEngineerDetailModal = ({ engineer, isOpen, onClose }) => {
  if (!engineer) return null;

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
    if (agenticType === 'Agentic') return <Zap size={20} />;
    if (agenticType === 'Biometric (Orb)') return <Award size={20} />;
    return null;
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: { scale: 1, opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="project-detail-modal engineer-detail-modal"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header">
              <div className="modal-title-section">
                <div className="project-icon" style={{ backgroundColor: getTypeColor(engineer.type) }}>
                  <Code size={24} />
                </div>
                <div>
                  <h2 className="modal-title">{engineer.name}</h2>
                  <div className="engineer-affiliations">{engineer.affiliations}</div>
                  <span 
                    className="project-type-badge"
                    style={{ backgroundColor: getTypeColor(engineer.type) }}
                  >
                    {engineer.type}
                  </span>
                  {engineer.agenticType !== 'None' && (
                    <span className="agentic-badge" title={engineer.agenticType}>
                      {getAgenticIcon(engineer.agenticType)}
                      {engineer.agenticType}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="modal-actions">
                <button
                  className="visit-btn"
                  onClick={() => window.open(engineer.github, '_blank')}
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </button>
                <button className="close-btn" onClick={onClose}>
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="modal-description">
              <p>{engineer.description}</p>
            </div>

            {/* AI Model/Focus */}
            <div className="ai-model-section">
              <h4><BookOpen size={20} /> AI Model/Focus</h4>
              <div className="ai-model-highlight">{engineer.aiModel}</div>
            </div>

            {/* Metrics Display */}
            <div className="metrics-display">
              <h4>Performance Metrics</h4>
              <div className="metrics-grid">
                <div className="metric-display">
                  <span className="metric-label">Influence</span>
                  <div className="metric-visual">
                    <div className="metric-circle">
                      <span>{engineer.influence}</span>
                    </div>
                  </div>
                </div>
                <div className="metric-display">
                  <span className="metric-label">Innovation</span>
                  <div className="metric-visual">
                    <div className="metric-circle">
                      <span>{engineer.innovation}</span>
                    </div>
                  </div>
                </div>
                <div className="metric-display">
                  <span className="metric-label">Impact</span>
                  <div className="metric-visual">
                    <div className="metric-circle">
                      <span>{engineer.impact}</span>
                    </div>
                  </div>
                </div>
                <div className="metric-display">
                  <span className="metric-label">Community</span>
                  <div className="metric-visual">
                    <div className="metric-circle">
                      <span>{engineer.community}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="key-features-section">
              <h4>Specialties & Expertise</h4>
              <div className="features-grid">
                {engineer.specialties.map((specialty, index) => (
                  <div key={index} className="feature-item">
                    <Star size={16} />
                    <span>{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contributions */}
            <div className="contributions-section">
              <h4>Major Contributions</h4>
              <div className="contributions-grid">
                {engineer.contributions.map((contribution, index) => (
                  <div key={index} className="contribution-item">
                    <TrendingUp size={16} />
                    <span>{contribution}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIEngineerDetailModal; 