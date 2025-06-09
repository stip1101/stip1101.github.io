import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { relationshipTypes, projects, metrics, insights } from '../data/projectsData';
import { Search, Filter, TrendingUp, Users, Database, Star, Zap, Network } from 'lucide-react';
import ProjectCard from './ProjectCard';
import InsightCard from './InsightCard';
import ProjectDetailModal from './ProjectDetailModal';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    let filtered = projects;
    
    if (selectedType !== 'All') {
      filtered = filtered.filter(project => project.type === selectedType);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProjects(filtered);
  }, [selectedType, searchTerm]);

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
            AI Companies Research
          </h1>
          <p className="dashboard-subtitle">
            Comprehensive analysis of AI/Blockchain project relationships with Ocean Protocol
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
              <h3>{metrics.totalProjects}</h3>
              <p>Total Projects Analyzed</p>
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
              <h3>{metrics.averageCompatibilityScore}</h3>
              <p>Avg Compatibility Score</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="metric-icon">
              <Network size={24} />
            </div>
            <div className="metric-content">
              <h3>{metrics.oceanNodesAverage}</h3>
              <p>Ocean Nodes Compatibility</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="metric-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="metric-icon">
              <Database size={24} />
            </div>
            <div className="metric-content">
              <h3>{metrics.dataNFTsAverage}</h3>
              <p>Data NFTs Integration</p>
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
              <h3>{metrics.computeToDataAverage}</h3>
              <p>Compute-to-Data Support</p>
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
              <h3>{metrics.predictoorAverage}</h3>
              <p>Predictoor Synergy</p>
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
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
        
        <div className="filter-buttons">
          <Filter size={20} />
          {['All', ...relationshipTypes.map(type => type.name)].map(type => (
            <motion.button
              key={type}
              className={`filter-btn ${selectedType === type ? 'active' : ''}`}
              onClick={() => setSelectedType(type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        className="projects-section"
        variants={itemVariants}
      >
        <h3>Project Portfolio ({filteredProjects.length} projects)</h3>
        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
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
        <h3>Strategic Insights</h3>
        <div className="insights-grid">
          {insights.map((insight, index) => (
            <InsightCard key={index} insight={insight} />
          ))}
        </div>
      </motion.section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </motion.div>
  );
};

export default Dashboard; 