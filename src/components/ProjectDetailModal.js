import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Star, Zap, Brain, Database, Network, TrendingUp, AlertTriangle, CheckCircle, Target, Lightbulb } from 'lucide-react';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Maximum Synergy': return <Star size={20} />;
      case 'High Synergy': return <Zap size={20} />;
      case 'Medium Synergy': return <TrendingUp size={20} />;
      case 'Alternative Approach': return <Network size={20} />;
      case 'Research Partnership': return <Brain size={20} />;
      default: return <Database size={20} />;
    }
  };

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

  const getCompatibilityGrade = (score) => {
    if (score >= 9.0) return { grade: 'A+', color: '#ff1493', description: 'Exceptional Compatibility' };
    if (score >= 8.5) return { grade: 'A', color: '#ff69b4', description: 'Excellent Compatibility' };
    if (score >= 7.5) return { grade: 'B+', color: '#ffc0cb', description: 'Good Compatibility' };
    if (score >= 6.5) return { grade: 'B', color: '#ffb6c1', description: 'Fair Compatibility' };
    return { grade: 'C+', color: '#ffa0b4', description: 'Limited Compatibility' };
  };

  const compatibilityGrade = getCompatibilityGrade(project.compatibilityScore);

  const getScoreColor = (score) => {
    if (score >= 9.0) return '#ff1493';
    if (score >= 8.0) return '#ff69b4';
    if (score >= 7.0) return '#ffc0cb';
    if (score >= 6.0) return '#ffb6c1';
    return '#ffa0b4';
  };

  const getRiskLevel = (riskText) => {
    if (riskText.includes('Low risk')) return { level: 'Low', color: '#4ade80', icon: <CheckCircle size={16} /> };
    if (riskText.includes('Medium risk')) return { level: 'Medium', color: '#f59e0b', icon: <AlertTriangle size={16} /> };
    return { level: 'High', color: '#ef4444', icon: <AlertTriangle size={16} /> };
  };

  const riskLevel = getRiskLevel(project.detailedAnalysis.riskFactors);



  const getRelationshipExplanation = (relationshipType) => {
    const explanations = {
      'Perfect Complement': 'This project perfectly complements Ocean Protocol, enhancing its capabilities without any overlapping services.',
      'Strong Complement': 'This project significantly enhances Ocean Protocol ecosystem with complementary technologies and services.',
      'Technology Complement': 'This project provides specialized technology that enhances Ocean Protocol\'s technical capabilities.',
      'Research Partner': 'This project offers valuable research collaboration opportunities to advance Ocean Protocol development.',
      'Technology Partner': 'This project can provide advanced technology solutions that integrate well with Ocean Protocol.',
      'Competitive Partnership': 'While competitive in some areas, this project offers potential for strategic collaboration.',
      'Alternative Approach': 'This project takes a different approach to similar problems, offering learning opportunities.',
      'Infrastructure Competitor': 'This project competes directly with Ocean Protocol\'s infrastructure but may offer integration possibilities.',
      'Platform Competitor': 'This project offers competing platform solutions that may fragment the ecosystem.',
    };
    return explanations[relationshipType] || 'Relationship type requires further analysis.';
  };

  const getCompetitionExplanation = (competitionLevel) => {
    const explanations = {
      'No Competition': 'This project does not compete with Ocean Protocol and can be integrated seamlessly.',
      'Direct Competitor': 'This project directly competes with Ocean Protocol services, requiring careful strategic consideration.',
      'Indirect Competitor': 'This project competes in adjacent areas but offers potential for coexistence.',
      'Philosophy Competitor': 'This project has fundamentally different approaches to decentralization and data management.',
      'Direct Infrastructure Competitor': 'This project directly competes with Ocean Protocol\'s core infrastructure.',
      'Compute Infrastructure Competitor': 'This project competes specifically in the compute infrastructure space.',
    };
    return explanations[competitionLevel] || 'Competition level requires further analysis.';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="project-detail-modal"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            style={{ '--type-color': getTypeColor(project.type) }}
          >
            {/* Header */}
            <div className="modal-header">
              <div className="modal-title-section">
                <div className="project-icon" style={{ backgroundColor: getTypeColor(project.type) }}>
                  {getTypeIcon(project.type)}
                </div>
                <div>
                  <h2 className="modal-title">{project.name}</h2>
                  <div className="project-type-badge" style={{ backgroundColor: getTypeColor(project.type) }}>
                    {project.type}
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <motion.button
                  className="visit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.website, '_blank')}
                >
                  <ExternalLink size={16} />
                  Visit Website
                </motion.button>
                <motion.button
                  className="close-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>

            {/* Compatibility Score Section */}
            <div className="compatibility-section">
              <div className="compatibility-header">
                <h3>Ocean Protocol Compatibility Analysis</h3>
                <div className="compatibility-score-large">
                  <div className="score-circle-large" style={{ borderColor: compatibilityGrade.color }}>
                    <span className="score-value-large" style={{ color: compatibilityGrade.color }}>
                      {project.compatibilityScore}
                    </span>
                    <span className="score-grade-large" style={{ color: compatibilityGrade.color }}>
                      {compatibilityGrade.grade}
                    </span>
                  </div>
                  <span className="score-description">{compatibilityGrade.description}</span>
                </div>
              </div>

              {/* Ocean Protocol Component Compatibility */}
              <div className="component-compatibility">
                <h4>Component-Specific Compatibility</h4>
                <div className="compatibility-grid">
                  <div className="compatibility-item">
                    <span className="component-name">Ocean Nodes</span>
                    <div className="score-bar">
                      <motion.div 
                        className="score-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.detailedAnalysis.oceanNodesCompatibility * 10}%` }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        style={{ backgroundColor: getScoreColor(project.detailedAnalysis.oceanNodesCompatibility) }}
                      />
                    </div>
                    <span className="score-value" style={{ color: getScoreColor(project.detailedAnalysis.oceanNodesCompatibility) }}>
                      {project.detailedAnalysis.oceanNodesCompatibility}
                    </span>
                  </div>
                  
                  <div className="compatibility-item">
                    <span className="component-name">Data NFTs</span>
                    <div className="score-bar">
                      <motion.div 
                        className="score-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.detailedAnalysis.dataNFTsIntegration * 10}%` }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ backgroundColor: getScoreColor(project.detailedAnalysis.dataNFTsIntegration) }}
                      />
                    </div>
                    <span className="score-value" style={{ color: getScoreColor(project.detailedAnalysis.dataNFTsIntegration) }}>
                      {project.detailedAnalysis.dataNFTsIntegration}
                    </span>
                  </div>
                  
                  <div className="compatibility-item">
                    <span className="component-name">Compute-to-Data</span>
                    <div className="score-bar">
                      <motion.div 
                        className="score-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.detailedAnalysis.computeToDataSupport * 10}%` }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        style={{ backgroundColor: getScoreColor(project.detailedAnalysis.computeToDataSupport) }}
                      />
                    </div>
                    <span className="score-value" style={{ color: getScoreColor(project.detailedAnalysis.computeToDataSupport) }}>
                      {project.detailedAnalysis.computeToDataSupport}
                    </span>
                  </div>
                  
                  <div className="compatibility-item">
                    <span className="component-name">Predictoor Synergy</span>
                    <div className="score-bar">
                      <motion.div 
                        className="score-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.detailedAnalysis.predictoorSynergy * 10}%` }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{ backgroundColor: getScoreColor(project.detailedAnalysis.predictoorSynergy) }}
                      />
                    </div>
                    <span className="score-value" style={{ color: getScoreColor(project.detailedAnalysis.predictoorSynergy) }}>
                      {project.detailedAnalysis.predictoorSynergy}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Relationship Analysis */}
            <div className="relationship-analysis">
              <h4>Ocean Protocol Relationship Analysis</h4>
              <div className="relationship-overview">
                <div className="relationship-card">
                  <div className="relationship-header">
                    <h5>Partnership Type</h5>
                    <span className="relationship-badge-large" data-type={project.relationshipType}>
                      {project.relationshipType}
                    </span>
                  </div>
                  <p className="relationship-explanation">
                    {getRelationshipExplanation(project.relationshipType)}
                  </p>
                </div>
                
                <div className="competition-card">
                  <div className="competition-header">
                    <h5>Competition Assessment</h5>
                    <span className="competition-badge-large" data-level={project.competitionLevel}>
                      {project.competitionLevel}
                    </span>
                  </div>
                  <p className="competition-explanation">
                    {getCompetitionExplanation(project.competitionLevel)}
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Analysis */}
            <div className="strategic-analysis">
              <div className="analysis-grid">
                <div className="analysis-card">
                  <div className="analysis-header">
                    <Target size={20} style={{ color: getTypeColor(project.type) }} />
                    <h4>Strategic Value</h4>
                  </div>
                  <p>{project.detailedAnalysis.strategicValue}</p>
                </div>

                <div className="analysis-card">
                  <div className="analysis-header">
                    <Lightbulb size={20} style={{ color: getTypeColor(project.type) }} />
                    <h4>Integration Potential</h4>
                  </div>
                  <p>{project.detailedAnalysis.integrationPotential}</p>
                </div>

                <div className="analysis-card">
                  <div className="analysis-header">
                    <TrendingUp size={20} style={{ color: getTypeColor(project.type) }} />
                    <h4>Competitive Advantage</h4>
                  </div>
                  <p>{project.detailedAnalysis.competitiveAdvantage}</p>
                </div>

                <div className="analysis-card risk-card">
                  <div className="analysis-header">
                    <span style={{ color: riskLevel.color }}>{riskLevel.icon}</span>
                    <h4>Risk Assessment</h4>
                    <span className="risk-badge" style={{ backgroundColor: riskLevel.color }}>
                      {riskLevel.level} Risk
                    </span>
                  </div>
                  <p>{project.detailedAnalysis.riskFactors}</p>
                </div>
              </div>
            </div>

            {/* Technical Synergies */}
            <div className="technical-synergies">
              <h4>Technical Synergies</h4>
              <div className="synergies-grid">
                {project.detailedAnalysis.technicalSynergies.map((synergy, index) => (
                  <motion.div
                    key={index}
                    className="synergy-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <CheckCircle size={16} style={{ color: getTypeColor(project.type) }} />
                    <span>{synergy}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="key-features-section">
              <h4>Key Features & Capabilities</h4>
              <div className="features-grid">
                {project.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    style={{ borderColor: getTypeColor(project.type) }}
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Core Metrics Display */}
            <div className="metrics-display">
              <h4>Performance Metrics</h4>
              <div className="metrics-grid">
                <div className="metric-display">
                  <span className="metric-label">Synergy Score</span>
                  <div className="metric-visual">
                    <div className="metric-circle" style={{ borderColor: getScoreColor(project.synergy) }}>
                      <span style={{ color: getScoreColor(project.synergy) }}>{project.synergy}</span>
                    </div>
                  </div>
                </div>
                <div className="metric-display">
                  <span className="metric-label">Data Focus</span>
                  <div className="metric-visual">
                    <div className="metric-circle" style={{ borderColor: getScoreColor(project.dataFocus) }}>
                      <span style={{ color: getScoreColor(project.dataFocus) }}>{project.dataFocus}</span>
                    </div>
                  </div>
                </div>
                <div className="metric-display">
                  <span className="metric-label">AI Integration</span>
                  <div className="metric-visual">
                    <div className="metric-circle" style={{ borderColor: getScoreColor(project.aiIntegration) }}>
                      <span style={{ color: getScoreColor(project.aiIntegration) }}>{project.aiIntegration}</span>
                    </div>
                  </div>
                </div>
                <div className="metric-display">
                  <span className="metric-label">Decentralization</span>
                  <div className="metric-visual">
                    <div className="metric-circle" style={{ borderColor: getScoreColor(project.decentralization) }}>
                      <span style={{ color: getScoreColor(project.decentralization) }}>{project.decentralization}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal; 