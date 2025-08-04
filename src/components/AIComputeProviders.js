import React, { useState, useEffect, useDeferredValue, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { providerTypes, computeProviders, metrics } from '../data/computeProvidersData';
import { Search, Filter, Server, Globe, TrendingUp, DollarSign } from 'lucide-react';
import ComputeProviderCard from './ComputeProviderCard';
import ComputeProviderDetailModal from './ComputeProviderDetailModal';
import './Dashboard.css';

const AIComputeProviders = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProviders, setFilteredProviders] = useState(computeProviders);

  // Отложенное значение для снижения количества фильтраций при быстром вводе
  const deferredSearch = useDeferredValue(searchTerm);

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProvider(null);
  };

  const stableProviders = useMemo(() => computeProviders, []);

  useEffect(() => {
    let filtered = stableProviders;

    if (selectedType !== 'All') {
      filtered = filtered.filter(provider => provider.type === selectedType);
    }

    const q = deferredSearch.trim().toLowerCase();
    if (q) {
      filtered = filtered.filter(provider =>
        provider.name.toLowerCase().includes(q) ||
        provider.description.toLowerCase().includes(q) ||
        provider.shortName.toLowerCase().includes(q)
      );
    }

    setFilteredProviders(filtered);
  }, [selectedType, deferredSearch, stableProviders]);

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
    <div className="ai-compute-providers">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI Compute Infrastructure Providers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive analysis of cloud and decentralized compute providers powering the AI revolution.
              From GPU clusters to custom AI chips, explore the infrastructure behind modern AI applications.
            </motion.p>
          </div>

          {/* Statistics Dashboard */}
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="stat-card" variants={itemVariants}>
              <Server className="stat-icon" size={24} />
              <div className="stat-content">
                <h3>{metrics.totalProviders}</h3>
                <p>Cloud Providers</p>
              </div>
            </motion.div>
            <motion.div className="stat-card" variants={itemVariants}>
              <TrendingUp className="stat-icon" size={24} />
              <div className="stat-content">
                <h3>{metrics.averagePerformance}</h3>
                <p>Avg Performance</p>
              </div>
            </motion.div>
            <motion.div className="stat-card" variants={itemVariants}>
              <DollarSign className="stat-icon" size={24} />
              <div className="stat-content">
                <h3>$0.78</h3>
                <p>Starting Price/hr</p>
              </div>
            </motion.div>
            <motion.div className="stat-card" variants={itemVariants}>
              <Globe className="stat-icon" size={24} />
              <div className="stat-content">
                <h3>33+</h3>
                <p>Global Regions</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Provider Type Distribution */}
      <motion.section 
        className="chart-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="section-header">
          <h2>Provider Categories</h2>
          <p>Distribution of compute infrastructure providers by type</p>
        </div>
        <div className="provider-types-grid">
          {providerTypes.map((type, index) => (
            <motion.div
              key={index}
              className="type-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                className="type-color" 
                style={{ backgroundColor: type.color }}
              />
              <div className="type-info">
                <h4>{type.name}</h4>
                <span className="type-percentage">{type.value}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Search and Filter Controls */}
      <motion.section 
        className="controls-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="controls-container">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search providers, services, or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-container">
            <Filter className="filter-icon" size={20} />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Provider Types</option>
              {providerTypes.map((type) => (
                <option key={type.name} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.section>

      {/* Providers Grid */}
      <motion.section 
        className="providers-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="section-header">
          <h2>Infrastructure Providers</h2>
          <p>
            Showing {filteredProviders.length} of {computeProviders.length} providers
            {selectedType !== 'All' && ` • Filtered by: ${selectedType}`}
          </p>
        </div>
        
        <AnimatePresence mode="wait">
          {filteredProviders.length > 0 ? (
            <motion.div 
              className="providers-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={`${selectedType}-${deferredSearch}`}
            >
              {filteredProviders.map((provider) => (
                <motion.div
                  key={provider.id}
                  variants={itemVariants}
                  layout
                >
                  <ComputeProviderCard 
                    provider={provider} 
                    onClick={handleProviderClick}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Server size={48} className="no-results-icon" />
              <h3>No providers found</h3>
              <p>Try adjusting your search terms or filter criteria</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>



      {/* Provider Detail Modal */}
      <ComputeProviderDetailModal
        provider={selectedProvider}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default AIComputeProviders;