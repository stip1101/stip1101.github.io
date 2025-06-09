import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Lightbulb } from 'lucide-react';

const InsightCard = ({ insight }) => {
  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High':
        return '#ff1493';
      case 'Medium':
        return '#ff69b4';
      case 'Low':
        return '#ffc0cb';
      default:
        return '#ff69b4';
    }
  };

  const getImpactIcon = (impact) => {
    switch (impact) {
      case 'High':
        return <TrendingUp size={20} />;
      case 'Medium':
        return <Target size={20} />;
      case 'Low':
        return <Lightbulb size={20} />;
      default:
        return <Lightbulb size={20} />;
    }
  };

  return (
    <motion.div
      className="insight-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 8px 25px rgba(255, 105, 180, 0.1)'
      }}
      style={{ '--impact-color': getImpactColor(insight.impact) }}
    >
      <motion.div 
        className="insight-header"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="insight-icon">
          {getImpactIcon(insight.impact)}
        </div>
        <div className="insight-title-section">
          <h4 className="insight-title">{insight.title}</h4>
          <motion.span 
            className="impact-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            {insight.impact} Impact
          </motion.span>
        </div>
      </motion.div>

      <motion.p 
        className="insight-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {insight.description}
      </motion.p>

      <motion.div 
        className="insight-projects"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="projects-label">Related Projects:</span>
        <div className="projects-list">
          {insight.projects.map((project, index) => (
            <motion.span 
              key={index}
              className="project-tag"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.05 }}
            >
              {project}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="insight-indicator"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
    </motion.div>
  );
};

export default InsightCard; 