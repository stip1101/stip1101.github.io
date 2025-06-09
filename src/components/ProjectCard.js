import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Zap, Brain, Database, Network, Star, TrendingUp } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  const getTypeColor = (type) => {
    const colors = {
      'Maximum Synergy': '#ff1493',
      'High Synergy': '#ff69b4',
      'Medium Synergy': '#ffc0cb',
      'Alternative Approach': '#ffb6c1',
      'Research Partnership': '#ffa0b4'
    };
    return colors[type] || '#ff69b4';
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Maximum Synergy':
        return <Star size={16} />;
      case 'High Synergy':
        return <Zap size={16} />;
      case 'Medium Synergy':
        return <TrendingUp size={16} />;
      case 'Alternative Approach':
        return <Network size={16} />;
      case 'Research Partnership':
        return <Brain size={16} />;
      default:
        return <Database size={16} />;
    }
  };

  const getCompatibilityGrade = (score) => {
    if (score >= 9.0) return { grade: 'A+', color: '#ff1493' };
    if (score >= 8.5) return { grade: 'A', color: '#ff69b4' };
    if (score >= 7.5) return { grade: 'B+', color: '#ffc0cb' };
    if (score >= 6.5) return { grade: 'B', color: '#ffb6c1' };
    return { grade: 'C+', color: '#ffa0b4' };
  };



  const compatibilityGrade = getCompatibilityGrade(project.compatibilityScore);

  return (
    <motion.div
      className="project-card"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0 15px 35px rgba(255, 105, 180, 0.2)'
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{ 
        '--type-color': getTypeColor(project.type),
        cursor: 'pointer'
      }}
    >
      <div className="project-card-header">
        <div className="project-title-section">
          <h4 className="project-name">{project.name}</h4>
          <motion.div 
            className="project-type-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            {getTypeIcon(project.type)}
            <span>{project.type}</span>
          </motion.div>
        </div>
        <motion.button
          className="external-link-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            window.open(project.website, '_blank');
          }}
        >
          <ExternalLink size={16} />
        </motion.button>
      </div>

      {/* Compatibility Score Display */}
      <motion.div 
        className="compatibility-score"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="score-circle" style={{ borderColor: compatibilityGrade.color }}>
          <span className="score-value" style={{ color: compatibilityGrade.color }}>
            {project.compatibilityScore}
          </span>
          <span className="score-grade" style={{ color: compatibilityGrade.color }}>
            {compatibilityGrade.grade}
          </span>
        </div>
        <span className="score-label">Ocean Protocol Compatibility</span>
      </motion.div>

      <p className="project-description">{project.description}</p>

      {/* Relationship Type Display */}
      <motion.div 
        className="relationship-info"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="relationship-item">
          <span className="relationship-label">Relationship:</span>
          <span className="relationship-badge" data-type={project.relationshipType}>
            {project.relationshipType}
          </span>
        </div>
        <div className="competition-item">
          <span className="competition-label">Competition Level:</span>
          <span className="competition-badge" data-level={project.competitionLevel}>
            {project.competitionLevel}
          </span>
        </div>
      </motion.div>

      <div className="project-metrics">
        <div className="metric-row">
          <div className="metric-item">
            <span className="metric-label">Synergy</span>
            <div className="metric-bar">
              <motion.div 
                className="metric-fill"
                initial={{ width: 0 }}
                animate={{ width: `${project.synergy * 10}%` }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </div>
            <span className="metric-value">{project.synergy}</span>
          </div>
        </div>

        <div className="metric-row">
          <div className="metric-item">
            <span className="metric-label">Data Focus</span>
            <div className="metric-bar">
              <motion.div 
                className="metric-fill"
                initial={{ width: 0 }}
                animate={{ width: `${project.dataFocus * 10}%` }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </div>
            <span className="metric-value">{project.dataFocus}</span>
          </div>
        </div>

        <div className="metric-row">
          <div className="metric-item">
            <span className="metric-label">AI Integration</span>
            <div className="metric-bar">
              <motion.div 
                className="metric-fill"
                initial={{ width: 0 }}
                animate={{ width: `${project.aiIntegration * 10}%` }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </div>
            <span className="metric-value">{project.aiIntegration}</span>
          </div>
        </div>

        <div className="metric-row">
          <div className="metric-item">
            <span className="metric-label">Decentralization</span>
            <div className="metric-bar">
              <motion.div 
                className="metric-fill"
                initial={{ width: 0 }}
                animate={{ width: `${project.decentralization * 10}%` }}
                transition={{ delay: 0.6, duration: 0.6 }}
              />
            </div>
            <span className="metric-value">{project.decentralization}</span>
          </div>
        </div>
      </div>

      <motion.div 
        className="project-features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="features-list">
          {project.keyFeatures.slice(0, 2).map((feature, index) => (
            <motion.span 
              key={index} 
              className="feature-tag"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              {feature}
            </motion.span>
          ))}
          {project.keyFeatures.length > 2 && (
            <span className="feature-more">+{project.keyFeatures.length - 2} more</span>
          )}
        </div>
      </motion.div>

      <motion.div 
        className="card-hover-indicator"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        Click for detailed analysis
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 