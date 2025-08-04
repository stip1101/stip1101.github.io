import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Cpu, 
  Zap, 
  Globe, 
  TrendingUp, 
  DollarSign,
  Award,
  ExternalLink
} from 'lucide-react';

const ComputeProviderCard = ({ provider, onClick }) => {
  const getMetricColor = (value) => {
    if (value >= 9) return '#00ff88';
    if (value >= 8) return '#66ff99';
    if (value >= 7) return '#ffff66';
    if (value >= 6) return '#ffaa66';
    return '#ff6666';
  };

  const MetricBar = ({ label, value, icon: Icon }) => (
    <div className="metric-bar">
      <div className="metric-label">
        <Icon size={14} />
        <span>{label}</span>
      </div>
      <div className="metric-progress">
        <div className="metric-track">
          <motion.div
            className="metric-fill"
            style={{ backgroundColor: getMetricColor(value) }}
            initial={{ width: 0 }}
            animate={{ width: `${(value / 10) * 100}%` }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        <span className="metric-value">{value.toFixed(1)}</span>
      </div>
    </div>
  );

  return (
    <motion.div
      className="compute-provider-card"
      onClick={() => onClick(provider)}
      whileHover={{ scale: 1.02, y: -8 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header with logo and basic info */}
      <div className="provider-header">
        <div className="provider-logo">
          <Server size={32} className="provider-icon" />
          <div className="provider-type-badge">
            {provider.type}
          </div>
        </div>
        <div className="provider-basic-info">
          <h3 className="provider-name">{provider.name}</h3>
          <p className="provider-short-name">{provider.shortName}</p>
        </div>
        <ExternalLink size={16} className="external-link-icon" />
      </div>

      {/* Description */}
      <p className="provider-description">{provider.description}</p>

      {/* Key Stats */}
      <div className="provider-stats">
        <div className="stat-item">
          <Globe size={16} />
          <span>{provider.globalFootprint.regions} Regions</span>
        </div>
        <div className="stat-item">
          <Cpu size={16} />
          <span>{provider.hardware.gpus.length} GPU Types</span>
        </div>
        <div className="stat-item">
          <Award size={16} />
          <span>Market Leader</span>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="provider-metrics">
        <MetricBar 
          label="Performance" 
          value={provider.performance} 
          icon={TrendingUp}
        />
        <MetricBar 
          label="Pricing" 
          value={provider.pricingScore} 
          icon={DollarSign}
        />
        <MetricBar 
          label="Availability" 
          value={provider.availability} 
          icon={Server}
        />
        <MetricBar 
          label="Ease of Use" 
          value={provider.easeOfUse} 
          icon={Zap}
        />
      </div>

      {/* Key Features */}
      <div className="provider-highlights">
        <div className="highlight-item">
          <Cpu className="highlight-icon" size={16} />
          <span>H100/A100 GPUs</span>
        </div>
        <div className="highlight-item">
          <Zap className="highlight-icon" size={16} />
          <span>Custom AI Chips</span>
        </div>
        <div className="highlight-item">
          <Server className="highlight-icon" size={16} />
          <span>UltraClusters</span>
        </div>
      </div>

      {/* Price info */}
      <div className="provider-pricing-info">
        <div className="price-highlight">
          <DollarSign size={16} />
          <span>Competitive GPU Pricing</span>
        </div>
        <div className="price-range">
          <span>From $30-40/hr for H100</span>
        </div>
      </div>

      {/* Action indicator */}
      <div className="card-action">
        <span>View Details</span>
        <motion.div
          className="action-arrow"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ComputeProviderCard;