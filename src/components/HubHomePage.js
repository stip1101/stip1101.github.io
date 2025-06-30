import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, TrendingUp, Users, Network, Zap, ArrowRight, Star, Globe, Shield } from 'lucide-react';
import BackgroundPaths from './BackgroundPaths';
import './HubHomePage.css';

const HubHomePage = ({ setActiveSection }) => {
  const hubSections = [
    {
      id: 'ai-companies',
      title: 'AI Companies Research',
      description: 'Comprehensive analysis of AI/Blockchain project relationships with Ocean Protocol ecosystem',
      icon: Brain,
      status: 'active',
      features: ['Project Compatibility Analysis', 'Synergy Scoring', 'Market Intelligence', 'Strategic Insights'],
      gradient: 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)'
    },
    {
      id: 'data-marketplace',
      title: 'Data Marketplace',
      description: 'Decentralized marketplace for data assets, AI models, and compute resources',
      icon: Database,
      status: 'coming-soon',
      features: ['Data Asset Trading', 'AI Model Marketplace', 'Compute Resource Sharing', 'Data NFTs'],
      gradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)'
    },
    {
      id: 'predictoor',
      title: 'Predictoor Analytics',
      description: 'Advanced prediction markets and analytics powered by Ocean Protocol',
      icon: TrendingUp,
      status: 'coming-soon',
      features: ['Prediction Markets', 'Analytics Dashboard', 'Trading Strategies', 'Performance Metrics'],
      gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)'
    },
    {
      id: 'ocean-nodes',
      title: 'Ocean Nodes',
      description: 'Distributed compute infrastructure for AI and data processing',
      icon: Network,
      status: 'coming-soon',
      features: ['Compute Infrastructure', 'Node Management', 'Resource Allocation', 'Performance Monitoring'],
      gradient: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)'
    },
    {
      id: 'community',
      title: 'Community Hub',
      description: 'Connect with Ocean Protocol community, developers, and researchers',
      icon: Users,
      status: 'coming-soon',
      features: ['Developer Resources', 'Community Forum', 'Research Papers', 'Collaboration Tools'],
      gradient: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)'
    }
  ];

  const stats = [
    { label: 'Total Projects Analyzed', value: '34', icon: Database },
    { label: 'Active Integrations', value: '12', icon: Network },
    { label: 'Research Papers', value: '89', icon: Star },
    { label: 'Community Members', value: '2.5K', icon: Users }
  ];

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
    <div className="hub-homepage">
      {/* Hero Section with Animated Background */}
      <BackgroundPaths 
        title="Welcome to Ocean Research HUB"
        subtitle="Your comprehensive gateway to the Ocean Protocol ecosystem. Explore AI companies, analyze data markets, monitor predictions, and connect with the decentralized data economy."
      >
        <motion.button
          className="hero-cta-button"
          onClick={() => setActiveSection('ai-companies')}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span>Explore AI Research</span>
          <ArrowRight size={20} />
        </motion.button>
      </BackgroundPaths>

      {/* Stats Section */}
      <motion.section 
        className="stats-section-new"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="stats-grid-new">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="stat-card-new"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="stat-icon-new">
                  <Icon size={28} />
                </div>
                <div className="stat-content-new">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Sections Grid */}
      <motion.section 
        className="sections-section-new"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="section-header-new">
          <motion.h2 variants={itemVariants}>Explore Ocean Ecosystem</motion.h2>
          <motion.p variants={itemVariants}>Discover tools and analytics for the decentralized data economy</motion.p>
        </div>
        
        <div className="sections-grid-new">
          {hubSections.map((section, index) => {
            const Icon = section.icon;
            const isActive = section.status === 'active';
            
            return (
              <motion.div
                key={section.id}
                className={`section-card-new ${section.status}`}
                variants={itemVariants}
                whileHover={{ scale: isActive ? 1.02 : 1.01, y: -8 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => isActive && setActiveSection(section.id)}
                style={{
                  cursor: isActive ? 'pointer' : 'default'
                }}
              >
                <div 
                  className="section-header-card-new"
                  style={{ background: section.gradient }}
                >
                  <Icon className="section-icon-new" size={32} />
                  <div className="section-status-new">
                    {isActive ? (
                      <span className="active-badge-new">Active</span>
                    ) : (
                      <span className="coming-soon-badge-new">Coming Soon</span>
                    )}
                  </div>
                </div>
                
                <div className="section-content-new">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  
                  <div className="section-features-new">
                    {section.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag-new">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {isActive && (
                    <motion.div 
                      className="section-action-new"
                      whileHover={{ x: 5 }}
                    >
                      <span>Explore</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Features Highlights */}
      <motion.section 
        className="features-section-new"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="features-content-new">
          <motion.h2 variants={itemVariants}>Why Ocean Protocol HUB?</motion.h2>
          <div className="features-grid-new">
            <motion.div 
              className="feature-item-new"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Globe className="feature-icon-new" />
              <h3>Decentralized</h3>
              <p>Built on Ocean Protocol's decentralized infrastructure for data and AI</p>
            </motion.div>
            
            <motion.div 
              className="feature-item-new"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Shield className="feature-icon-new" />
              <h3>Secure</h3>
              <p>Privacy-preserving compute and secure data sharing protocols</p>
            </motion.div>
            
            <motion.div 
              className="feature-item-new"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Zap className="feature-icon-new" />
              <h3>Innovative</h3>
              <p>Cutting-edge tools for AI research and data market analysis</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HubHomePage; 