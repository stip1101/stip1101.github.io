import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Server, 
  Cpu, 
  Zap, 
  DollarSign, 
  Globe, 
  ExternalLink,
  Layers,
  TrendingUp,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const ComputeProviderDetailModal = ({ provider, isOpen, onClose }) => {
  if (!provider) return null;

  const TabSection = ({ title, icon: Icon, children }) => (
    <div className="compute-modal-section">
      <div className="compute-section-header">
        <Icon size={20} />
        <h3>{title}</h3>
      </div>
      <div className="compute-section-content">
        {children}
      </div>
    </div>
  );

  const HardwareCard = ({ category, models }) => (
    <div className="hardware-card">
      <h4 className="hardware-category">{category}</h4>
      <div className="hardware-models">
        {models.map((model, index) => (
          <div key={index} className="hardware-model">
            <div className="model-header">
              <strong>{model.name}</strong>
              <span className="model-instances">
                {model.instances.join(', ')}
              </span>
            </div>
            <p className="model-performance">{model.performance}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const CustomChipCard = ({ chip }) => (
    <div className="custom-chip-card">
      <div className="chip-header">
        <h4>{chip.name}</h4>
        <span className="chip-purpose">{chip.purpose}</span>
      </div>
      <p className="chip-performance">{chip.performance}</p>
      <p className="chip-details">{chip.details}</p>
      <div className="chip-instances">
        <strong>Instances:</strong> {chip.instances.join(', ')}
      </div>
    </div>
  );

  const ApplicationCard = ({ app }) => (
    <div className="application-card">
      <div className="app-header">
        <h4>{app.name}</h4>
        <span className="app-instances">{app.instances.join(', ')}</span>
      </div>
      <p className="app-description">{app.description}</p>
      <div className="app-usecase">
        <strong>Use Case:</strong> {app.useCase}
      </div>
    </div>
  );

  const PricingModelCard = ({ model }) => (
    <div className="pricing-model-card">
      <div className="pricing-header">
        <h4>{model.type}</h4>
      </div>
      <p className="pricing-description">{model.description}</p>
      {model.examples && (
        <div className="pricing-examples">
          <strong>Examples:</strong>
          {model.examples.map((example, index) => (
            <div key={index} className="pricing-example">
              <span className="instance-type">{example.instance}:</span>
              <span className="price">{example.price}</span>
              {example.savings && (
                <span className="savings">({example.savings})</span>
              )}
            </div>
          ))}
        </div>
      )}
      {model.note && (
        <div className="pricing-note">
          <AlertTriangle size={14} />
          <span>{model.note}</span>
        </div>
      )}
    </div>
  );

  const FeatureCard = ({ feature }) => (
    <div className="feature-card">
      <h4>{feature.name}</h4>
      <p>{feature.description}</p>
      {feature.benefit && (
        <div className="feature-benefit">
          <CheckCircle size={14} />
          <span>{feature.benefit}</span>
        </div>
      )}
      {feature.capability && (
        <div className="feature-capability">
          <TrendingUp size={14} />
          <span>{feature.capability}</span>
        </div>
      )}
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="compute-provider-modal-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '1rem',
            backdropFilter: 'blur(2px)'
          }}
        >
          <motion.div
            className="compute-provider-modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              width: '95vw',
              maxWidth: '1200px',
              maxHeight: '95vh',
              overflowY: 'auto',
              position: 'relative',
              margin: 'auto',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Header */}
            <div className="compute-modal-header">
              <div className="compute-provider-info">
                <Server size={32} className="compute-provider-icon" />
                <div>
                  <h2>{provider.name}</h2>
                  <p>{provider.description}</p>
                </div>
              </div>
              <div className="compute-header-actions">
                <a 
                  href={provider.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="compute-website-link"
                >
                  <ExternalLink size={16} />
                  Visit Website
                </a>
                <button onClick={onClose} className="compute-close-button">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="compute-modal-content">
              {/* Hardware Section */}
              <TabSection title="Hardware Infrastructure" icon={Cpu}>
                <div className="hardware-section">
                  <div className="gpu-hardware">
                    <h4>GPU Offerings</h4>
                    {provider.hardware.gpus.map((gpuCategory, index) => (
                      <HardwareCard 
                        key={index}
                        category={gpuCategory.category}
                        models={gpuCategory.models}
                      />
                    ))}
                  </div>

                  <div className="custom-chips">
                    <h4>Custom AI Chips</h4>
                    {provider.hardware.customChips.map((chip, index) => (
                      <CustomChipCard key={index} chip={chip} />
                    ))}
                  </div>

                  <div className="cpu-hardware">
                    <h4>CPU Options</h4>
                    <div className="cpu-grid">
                      {provider.hardware.cpus.map((cpu, index) => (
                        <div key={index} className="cpu-card">
                          <strong>{cpu.name}</strong>
                          <p>Generations: {cpu.generations.join(', ')}</p>
                          <p>{cpu.performance}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabSection>

              {/* AI Applications Section */}
              <TabSection title="AI Applications & Use Cases" icon={Layers}>
                <div className="applications-section">
                  <div className="large-scale-apps">
                    <h4>Large-Scale Training & HPC</h4>
                    {provider.aiApplications.largeScale.map((app, index) => (
                      <ApplicationCard key={index} app={app} />
                    ))}
                  </div>

                  <div className="general-purpose-apps">
                    <h4>General Purpose & Inference</h4>
                    {provider.aiApplications.generalPurpose.map((app, index) => (
                      <ApplicationCard key={index} app={app} />
                    ))}
                  </div>

                  <div className="managed-services">
                    <h4>Managed AI Services</h4>
                    {provider.aiApplications.managedServices.map((service, index) => (
                      <div key={index} className="managed-service-card">
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                        <div className="service-features">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="feature-tag">{feature}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabSection>

              {/* Pricing Section */}
              <TabSection title="Pricing Models" icon={DollarSign}>
                <div className="pricing-section">
                  <div className="pricing-summary">
                    <h4>{provider.pricing.summary}</h4>
                  </div>

                  <div className="pricing-models">
                    {provider.pricing.models.map((model, index) => (
                      <PricingModelCard key={index} model={model} />
                    ))}
                  </div>

                  <div className="recent-changes">
                    <h4>Recent Price Changes</h4>
                    <div className="price-change-card">
                      <div className="change-header">
                        <TrendingUp size={16} />
                        <strong>{provider.pricing.recentChanges.announcement}</strong>
                      </div>
                      <ul>
                        {provider.pricing.recentChanges.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabSection>

              {/* Unique Features Section */}
              <TabSection title="Unique Features & Services" icon={Zap}>
                <div className="features-section">
                  <div className="feature-category">
                    <h4>Networking & Compute</h4>
                    {provider.uniqueFeatures.networking.map((feature, index) => (
                      <FeatureCard key={index} feature={feature} />
                    ))}
                  </div>

                  <div className="feature-category">
                    <h4>Data Storage & Management</h4>
                    {provider.uniqueFeatures.dataStorage.map((feature, index) => (
                      <FeatureCard key={index} feature={feature} />
                    ))}
                  </div>

                  <div className="feature-category">
                    <h4>Orchestration & Management</h4>
                    {provider.uniqueFeatures.orchestration.map((feature, index) => (
                      <FeatureCard key={index} feature={feature} />
                    ))}
                  </div>

                  <div className="feature-category">
                    <h4>AI Development Tools</h4>
                    {provider.uniqueFeatures.aiTools.map((feature, index) => (
                      <FeatureCard key={index} feature={feature} />
                    ))}
                  </div>
                </div>
              </TabSection>

              {/* Global Footprint */}
              <TabSection title="Global Infrastructure" icon={Globe}>
                <div className="global-section">
                  <div className="footprint-stats">
                    <div className="stat-card">
                      <h4>{provider.globalFootprint.regions}</h4>
                      <p>Global Regions</p>
                    </div>
                    <div className="stat-card">
                      <h4>{provider.globalFootprint.availabilityZones}</h4>
                      <p>Availability Zones</p>
                    </div>
                    <div className="stat-card">
                      <h4>{provider.globalFootprint.edge}</h4>
                      <p>Edge Locations</p>
                    </div>
                  </div>
                  <div className="gpu-regions">
                    <h4>GPU Instance Availability</h4>
                    <div className="region-list">
                      {provider.globalFootprint.gpuRegions.map((region, index) => (
                        <span key={index} className="region-tag">{region}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </TabSection>

              {/* Strengths & Considerations */}
              <div className="pros-cons-section">
                <div className="strengths">
                  <h4>Strengths</h4>
                  <ul>
                    {provider.strengths.map((strength, index) => (
                      <li key={index}>
                        <CheckCircle size={16} />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="considerations">
                  <h4>Considerations</h4>
                  <ul>
                    {provider.considerations.map((consideration, index) => (
                      <li key={index}>
                        <AlertTriangle size={16} />
                        {consideration}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComputeProviderDetailModal;