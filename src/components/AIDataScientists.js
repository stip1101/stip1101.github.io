import React, { useState, useEffect, useDeferredValue, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { aiEngineerTypes, aiEngineers, metrics, insights } from '../data/aiDataScientistsData';
import { Search, Filter, TrendingUp, Users, Brain, Star, Zap, Code } from 'lucide-react';
import AIEngineerCard from './AIEngineerCard';
import InsightCard from './InsightCard';
import AIEngineerDetailModal from './AIEngineerDetailModal';
import './Dashboard.css';

const AIDataScientists = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEngineer, setSelectedEngineer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredEngineers, setFilteredEngineers] = useState(aiEngineers);

  // Отложенное значение для снижения количества фильтраций при быстром вводе
  const deferredSearch = useDeferredValue(searchTerm);

  const handleEngineerClick = (engineer) => {
    setSelectedEngineer(engineer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEngineer(null);
  };

  const stableEngineers = useMemo(() => aiEngineers, []);

  useEffect(() => {
    let filtered = stableEngineers;

    if (selectedType !== 'All') {
      filtered = filtered.filter(engineer => engineer.type === selectedType);
    }

    const q = deferredSearch.trim().toLowerCase();
    if (q) {
      filtered = filtered.filter(engineer => 
        engineer.name.toLowerCase().includes(q) ||
        engineer.description.toLowerCase().includes(q) ||
        engineer.affiliations.toLowerCase().includes(q) ||
        engineer.aiModel.toLowerCase().includes(q) ||
        engineer.specialties.some(specialty => specialty.toLowerCase().includes(q))
      );
    }

    setFilteredEngineers(filtered);
  }, [selectedType, deferredSearch, stableEngineers]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="dashboard"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.header 
        className="dashboard-header"
        variants={itemVariants}
      >
        <div className="header-content">
          <h1 className="dashboard-title">
            AI & Data Scientists
          </h1>
          <p className="dashboard-subtitle">
            Leading AI engineers and data scientists building machine learning models, working with large datasets for training and inference
          </p>
        </div>
      </motion.header>

      {/* Key Metrics */}
      <motion.section 
        className="metrics-section"
        variants={itemVariants}
      >
        <div className="metrics-grid">
          <motion.div 
            className="metric-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="metric-icon">
              <Users size={24} />
            </div>
            <div className="metric-content">
              <h3>{metrics.totalEngineers}</h3>
              <p>Total AI Engineers</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="metric-icon">
              <Star size={24} />
            </div>
            <div className="metric-content">
              <h3>{metrics.averageInfluence}</h3>
              <p>Avg Influence Score</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="metric-icon">
              <Brain size={24} />
            </div>
            <div className="metric-content">
              <h3>{metrics.averageInnovation}</h3>
              <p>Innovation Index</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="metric-icon">
              <TrendingUp size={24} />
            </div>
            <div className="metric-content">
              <h3>{metrics.averageImpact}</h3>
              <p>Impact Score</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="metric-icon">
              <Zap size={24} />
            </div>
            <div className="metric-content">
              <h3>{metrics.averageCommunity}</h3>
              <p>Community Engagement</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="metric-icon">
              <Code size={24} />
            </div>
            <div className="metric-content">
              <h3>{metrics.topContributors}</h3>
              <p>Top Contributors (9.5+)</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Filters and Search */}
      <motion.section 
        className="filters-section"
        variants={itemVariants}
      >
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search engineers, specialties, affiliations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="filter-buttons">
          <Filter size={20} />
          <button
            className={`filter-btn ${selectedType === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedType('All')}
          >
            All Engineers ({aiEngineers.length})
          </button>
          {aiEngineerTypes.map((type) => {
            const engineerCount = aiEngineers.filter(eng => eng.type === type.name).length;
            return (
              <button
                key={type.name}
                className={`filter-btn ${selectedType === type.name ? 'active' : ''}`}
                onClick={() => setSelectedType(type.name)}
              >
                {type.name} ({engineerCount})
              </button>
            );
          })}
        </div>
      </motion.section>

      {/* Engineers Grid */}
      <motion.section 
        className="projects-section"
        variants={itemVariants}
      >
        <h3>AI Engineers & Data Scientists ({filteredEngineers.length} engineers)</h3>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
        >
          <AnimatePresence>
            {filteredEngineers.map((engineer) => (
              <AIEngineerCard
                key={engineer.id}
                engineer={engineer}
                onEngineerClick={handleEngineerClick}
                variants={itemVariants}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* Insights Section */}
      <motion.section 
        className="insights-section"
        variants={itemVariants}
      >
        <h3>Key Insights & Trends</h3>
        <motion.div 
          className="insights-grid"
          variants={containerVariants}
        >
          {insights.map((insight) => (
            <InsightCard
              key={insight.id}
              insight={insight}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </motion.section>

      {/* Engineer Detail Modal */}
      <AIEngineerDetailModal
        engineer={selectedEngineer}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </motion.div>
  );
};

export default AIDataScientists; 