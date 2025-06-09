export const relationshipTypes = [
  { name: 'Maximum Synergy', value: 5.9, color: '#ff1493' },
  { name: 'High Synergy', value: 29.4, color: '#ff69b4' },
  { name: 'Medium Synergy', value: 23.5, color: '#ffc0cb' },
  { name: 'Alternative Approach', value: 23.5, color: '#ffb6c1' },
  { name: 'Research Partnership', value: 17.7, color: '#ffa0b4' }
];

export const projects = [
  // Maximum Synergy Category (9-10 points)
  {
    id: 1,
    name: 'Delphina AI',
    type: 'Maximum Synergy',
    relationshipType: 'Perfect Complement',
    competitionLevel: 'No Competition',
    compatibilityScore: 9.6,
    synergy: 10,
    dataFocus: 9,
    aiIntegration: 10,
    decentralization: 8,
    description: 'AI-agent specializing in machine learning and data science with perfect fit for Ocean Protocol ecosystem',
    website: 'https://www.delphina.ai',
    keyFeatures: ['Advanced ML capabilities', 'Data science tools', 'AI compute infrastructure', 'Premium Data NFTs'],
    detailedAnalysis: {
      oceanNodesCompatibility: 9.8,
      dataNFTsIntegration: 9.5,
      computeToDataSupport: 9.7,
      predictoorSynergy: 8.9,
      strategicValue: 'Provides perfect fit for AI compute infrastructure through Ocean Nodes. Can deliver ML models and datasets as premium Data NFTs, ensuring confidential ML training on sensitive data through Compute-to-Data.',
      integrationPotential: 'Highest priority partnership - can significantly expand Ocean Protocol capabilities in machine learning and data science',
      competitiveAdvantage: 'Demonstrates highest integration potential with modern Ocean Protocol stack',
      technicalSynergies: [
        'ML model delivery through Ocean Nodes',
        'Premium dataset monetization via Data NFTs',
        'Confidential training on sensitive data',
        'Enhanced AI capabilities for ecosystem'
      ],
      riskFactors: 'Low risk - high alignment with Ocean Protocol vision and technology stack'
    }
  },
  
  // High Synergy Category (7-8.9 points)
  {
    id: 2,
    name: 'Space and Time',
    type: 'High Synergy',
    relationshipType: 'Strong Complement',
    competitionLevel: 'No Competition',
    compatibilityScore: 8.8,
    synergy: 9,
    dataFocus: 10,
    aiIntegration: 7,
    decentralization: 9,
    description: 'Revolutionary data verification platform using Proof of SQL for tamperproof guarantees',
    website: 'https://spaceandtime.io',
    keyFeatures: ['Proof of SQL technology', 'Tamperproof guarantees', 'Cryptographically verified datasets', 'Blockchain bridge'],
    detailedAnalysis: {
      oceanNodesCompatibility: 8.5,
      dataNFTsIntegration: 9.2,
      computeToDataSupport: 8.9,
      predictoorSynergy: 9.1,
      strategicValue: 'Provides cryptographically verified datasets as Data NFTs and ensures tamperproof computation results through Compute-to-Data. Verifiable data feeds are critically important for improving Predictoor prediction accuracy.',
      integrationPotential: 'High priority - revolutionary verification capabilities can enhance trust in Ocean ecosystem',
      competitiveAdvantage: 'Unique Proof of SQL technology offers unmatched data integrity guarantees',
      technicalSynergies: [
        'Cryptographically verified datasets',
        'Tamperproof computation results',
        'Enhanced Predictoor accuracy',
        'Trust infrastructure for enterprise adoption'
      ],
      riskFactors: 'Medium risk - technology complexity may require significant integration effort'
    }
  },

  {
    id: 3,
    name: 'Privasea',
    type: 'High Synergy',
    relationshipType: 'Technology Complement',
    competitionLevel: 'No Competition',
    compatibilityScore: 8.8,
    synergy: 9,
    dataFocus: 9,
    aiIntegration: 9,
    decentralization: 9,
    description: 'Breakthrough in confidential computing using Fully Homomorphic Encryption (FHE)',
    website: 'https://www.privasea.ai',
    keyFeatures: ['FHE technology', 'Confidential computing', 'Privacy guarantees', 'Encrypted data processing'],
    detailedAnalysis: {
      oceanNodesCompatibility: 8.7,
      dataNFTsIntegration: 9.0,
      computeToDataSupport: 9.5,
      predictoorSynergy: 8.5,
      strategicValue: 'Revolutionary FHE technology allows computations on encrypted data, radically improving Ocean Protocol privacy capabilities. Can create encrypted data assets with privacy guarantees and enable private prediction models without revealing trading strategies.',
      integrationPotential: 'Transformative partnership - can revolutionize privacy capabilities of Ocean Protocol',
      competitiveAdvantage: 'Cutting-edge FHE technology provides unmatched privacy-preserving computation',
      technicalSynergies: [
        'Computations on encrypted data',
        'Enhanced privacy capabilities',
        'Private prediction models',
        'Encrypted data asset creation'
      ],
      riskFactors: 'Medium risk - early-stage FHE technology may have performance limitations'
    }
  },

  {
    id: 4,
    name: 'AIXBT by Virtuals',
    type: 'High Synergy',
    relationshipType: 'Competitive Partnership',
    competitionLevel: 'Direct Competitor',
    compatibilityScore: 8.7,
    synergy: 8,
    dataFocus: 8,
    aiIntegration: 9,
    decentralization: 8,
    description: 'AI-driven platform for cryptocurrency analytics - direct competitor to Predictoor',
    website: 'https://aixbt.com',
    keyFeatures: ['Crypto analytics', 'Trading strategies', 'AI predictions', 'Market intelligence'],
    detailedAnalysis: {
      oceanNodesCompatibility: 8.2,
      dataNFTsIntegration: 8.8,
      computeToDataSupport: 8.5,
      predictoorSynergy: 7.9,
      strategicValue: 'Direct competitor to ASI Predictoor in crypto predictions sphere, offering trading strategies as premium Data NFTs. Integration possible through Ocean Nodes for expanding AI capabilities.',
      integrationPotential: 'Competitive partnership - can enhance or compete with Predictoor',
      competitiveAdvantage: 'Strong analytics capabilities but direct competition with existing Ocean services',
      technicalSynergies: [
        'Trading strategy monetization',
        'Enhanced AI analytics',
        'Market intelligence sharing',
        'Crypto prediction capabilities'
      ],
      riskFactors: 'High risk - direct competition with Predictoor may create conflicts'
    }
  },

  {
    id: 5,
    name: 'Thinking Machine Labs',
    type: 'High Synergy',
    relationshipType: 'Research Partner',
    competitionLevel: 'No Competition',
    compatibilityScore: 8.4,
    synergy: 8,
    dataFocus: 7,
    aiIntegration: 10,
    decentralization: 6,
    description: 'Academic leadership under former OpenAI CTO Mira Murati - cutting-edge AI research',
    website: 'https://thinkingmachines.ai',
    keyFeatures: ['Cutting-edge AI models', 'Academic research', 'Open science approach', 'Advanced AI development'],
    detailedAnalysis: {
      oceanNodesCompatibility: 8.8,
      dataNFTsIntegration: 8.2,
      computeToDataSupport: 7.9,
      predictoorSynergy: 8.1,
      strategicValue: 'Can provide cutting-edge AI models through Ocean Nodes and advanced AI models as valuable IP assets through Data NFTs. Focus on open science and collaborative research opens opportunities for research partnerships.',
      integrationPotential: 'Strategic academic partnership - access to cutting-edge AI research',
      competitiveAdvantage: 'World-class research leadership and access to latest AI developments',
      technicalSynergies: [
        'Cutting-edge AI model delivery',
        'Research collaboration opportunities',
        'Advanced AI IP monetization',
        'Academic credibility enhancement'
      ],
      riskFactors: 'Low risk - academic focus aligns well with open ecosystem goals'
    }
  },

  {
    id: 6,
    name: 'Nous Research',
    type: 'High Synergy',
    relationshipType: 'Technology Partner',
    competitionLevel: 'No Competition',
    compatibilityScore: 7.9,
    synergy: 8,
    dataFocus: 7,
    aiIntegration: 9,
    decentralization: 8,
    description: 'Advanced reasoning capabilities with human-centric language models and Forge Reasoning API',
    website: 'https://nousresearch.com',
    keyFeatures: ['Human-centric LLMs', 'Forge Reasoning API', 'Advanced reasoning', 'Decentralized training'],
    detailedAnalysis: {
      oceanNodesCompatibility: 8.1,
      dataNFTsIntegration: 7.8,
      computeToDataSupport: 7.7,
      predictoorSynergy: 8.2,
      strategicValue: 'Can provide advanced reasoning models for Ocean AI services and reasoning model weights as Data NFTs. Enhanced reasoning capabilities can significantly improve prediction logic in Predictoor.',
      integrationPotential: 'High value partnership - advanced reasoning can enhance entire ecosystem',
      competitiveAdvantage: 'Specialized in reasoning capabilities that can improve decision-making across Ocean services',
      technicalSynergies: [
        'Advanced reasoning model delivery',
        'Enhanced Predictoor logic',
        'Human-centric AI services',
        'Improved decision-making capabilities'
      ],
      riskFactors: 'Low risk - complementary technology with broad application potential'
    }
  },

  // Medium Synergy Category (5-6.9 points)
  {
    id: 7,
    name: 'ChainML',
    type: 'Medium Synergy',
    relationshipType: 'Alternative Approach',
    competitionLevel: 'Indirect Competitor',
    compatibilityScore: 6.7,
    synergy: 7,
    dataFocus: 7,
    aiIntegration: 8,
    decentralization: 8,
    description: 'Council framework for production-grade AI agents - alternative AI agent infrastructure',
    website: 'https://www.chainml.net',
    keyFeatures: ['Council framework', 'Production AI agents', 'Agent economy', 'Web3 infrastructure'],
    detailedAnalysis: {
      oceanNodesCompatibility: 6.5,
      dataNFTsIntegration: 6.8,
      computeToDataSupport: 6.9,
      predictoorSynergy: 6.7,
      strategicValue: 'Offers Council framework for production-grade AI agents, creating competing AI agent infrastructure. Develops own agent economy as alternative to Ocean ecosystem.',
      integrationPotential: 'Competitive coexistence - limited integration due to overlapping services',
      competitiveAdvantage: 'Strong production-grade framework but creates competitive pressure',
      technicalSynergies: [
        'Production AI agent deployment',
        'Alternative agent economy',
        'Web3 infrastructure sharing',
        'AI agent standardization'
      ],
      riskFactors: 'High risk - direct competition in agent infrastructure space'
    }
  },

  {
    id: 8,
    name: 'FLock.io',
    type: 'Medium Synergy',
    relationshipType: 'Alternative Approach',
    competitionLevel: 'Philosophy Competitor',
    compatibilityScore: 6.7,
    synergy: 7,
    dataFocus: 8,
    aiIntegration: 7,
    decentralization: 9,
    description: 'Federated learning on blockchain with privacy-preserving AI training',
    website: 'https://train.flock.io',
    keyFeatures: ['Federated learning', 'Privacy-preserving training', 'Decentralized AI', 'Blockchain integration'],
    detailedAnalysis: {
      oceanNodesCompatibility: 6.2,
      dataNFTsIntegration: 7.1,
      computeToDataSupport: 6.8,
      predictoorSynergy: 6.9,
      strategicValue: 'Uses federated learning on blockchain with privacy-preserving AI training. Represents alternative approach to decentralized AI through federated learning instead of centralized compute-to-data.',
      integrationPotential: 'Alternative technology partnership - different approach to privacy-preserving AI',
      competitiveAdvantage: 'Unique federated learning approach but conflicts with centralized compute model',
      technicalSynergies: [
        'Privacy-preserving AI training',
        'Decentralized learning protocols',
        'Alternative privacy model',
        'Blockchain-native AI training'
      ],
      riskFactors: 'Medium risk - philosophical differences in decentralization approach'
    }
  },

  {
    id: 9,
    name: 'Ritual Network',
    type: 'Medium Synergy',
    relationshipType: 'Infrastructure Competitor',
    competitionLevel: 'Direct Infrastructure Competitor',
    compatibilityScore: 6.2,
    synergy: 7,
    dataFocus: 6,
    aiIntegration: 9,
    decentralization: 9,
    description: 'Decentralized AI coprocessor with own Layer 1 blockchain for AI applications',
    website: 'https://ritual.net',
    keyFeatures: ['AI coprocessor', 'Layer 1 blockchain', 'Decentralized AI', 'Native AI assets'],
    detailedAnalysis: {
      oceanNodesCompatibility: 5.8,
      dataNFTsIntegration: 6.3,
      computeToDataSupport: 6.1,
      predictoorSynergy: 6.6,
      strategicValue: 'Positions itself as decentralized AI coprocessor with own Layer 1 blockchain for AI applications. Creates competing AI blockchain infrastructure with native AI asset management.',
      integrationPotential: 'Limited integration - competing blockchain infrastructure',
      competitiveAdvantage: 'Own Layer 1 provides independence but creates ecosystem fragmentation',
      technicalSynergies: [
        'Cross-chain AI services',
        'Decentralized AI processing',
        'Alternative blockchain solutions',
        'AI coprocessor capabilities'
      ],
      riskFactors: 'High risk - competing Layer 1 blockchain creates direct infrastructure competition'
    }
  },

  {
    id: 10,
    name: 'OpenGradient',
    type: 'Medium Synergy',
    relationshipType: 'Platform Competitor',
    competitionLevel: 'Compute Infrastructure Competitor',
    compatibilityScore: 5.8,
    synergy: 6,
    dataFocus: 7,
    aiIntegration: 8,
    decentralization: 6,
    description: 'Decentralized platform with EVM-compatible blockchain and Heterogeneous AI Compute Architecture',
    website: 'https://opengradient.ai',
    keyFeatures: ['EVM compatibility', 'Heterogeneous AI compute', 'Decentralized platform', 'AI compute architecture'],
    detailedAnalysis: {
      oceanNodesCompatibility: 5.5,
      dataNFTsIntegration: 6.0,
      computeToDataSupport: 5.9,
      predictoorSynergy: 5.8,
      strategicValue: 'Develops decentralized platform with EVM-compatible blockchain and Heterogeneous AI Compute Architecture. Offers own decentralized AI compute platform as alternative to Ocean Nodes.',
      integrationPotential: 'Competing platform - limited collaboration potential',
      competitiveAdvantage: 'EVM compatibility but direct competition in compute infrastructure',
      technicalSynergies: [
        'EVM-compatible AI services',
        'Alternative compute architecture',
        'Decentralized AI platform',
        'Heterogeneous computing'
      ],
      riskFactors: 'High risk - direct competition in decentralized AI compute space'
    }
  }
];

export const metrics = {
  totalProjects: 10,
  averageCompatibilityScore: 7.4,
  averageSynergy: 7.6,
  averageDataFocus: 7.8,
  averageAiIntegration: 8.6,
  averageDecentralization: 8.1,
  oceanNodesAverage: 7.6,
  dataNFTsAverage: 7.9,
  computeToDataAverage: 7.6,
  predictoorAverage: 6.5
};

export const insights = [
  {
    title: 'Maximum Synergy Partnership Priority',
    description: 'Delphina AI demonstrates highest integration potential (9.6/10) with Ocean Protocol stack, offering perfect fit for AI compute infrastructure.',
    impact: 'Critical',
    projects: ['Delphina AI'],
    strategicRecommendation: 'Immediate strategic partnership establishment for ecosystem acceleration'
  },
  {
    title: 'Privacy Enhancement Opportunity',
    description: 'Integration of FHE technologies from Privasea can revolutionize privacy capabilities, critical for enterprise adoption in regulated industries.',
    impact: 'High',
    projects: ['Privasea', 'Space and Time'],
    strategicRecommendation: 'Technology integration for privacy-preserving computation leadership'
  },
  {
    title: 'Competitive Landscape Analysis',
    description: '40% of analyzed projects represent alternative approaches or direct competition, requiring strategic "coopetition" approach.',
    impact: 'High',
    projects: ['ChainML', 'FLock.io', 'Ritual Network', 'OpenGradient'],
    strategicRecommendation: 'Collaborative standardization while maintaining competitive differentiation'
  },
  {
    title: 'Ocean Nodes Leadership Position',
    description: 'Ocean Nodes shows highest compatibility (7.6/10 average) among all components, confirming strategic focus on decentralized compute infrastructure.',
    impact: 'Strategic',
    projects: ['All analyzed projects'],
    strategicRecommendation: 'Continue investment in Ocean Nodes as ecosystem foundation'
  },
  {
    title: 'Predictoor Expansion Opportunity',
    description: 'Predictoor has lowest compatibility scores (6.5/10 average), indicating need for expansion into broader AI applications beyond price predictions.',
    impact: 'Medium',
    projects: ['AIXBT by Virtuals', 'Nous Research'],
    strategicRecommendation: 'Expand Predictoor capabilities and applications scope'
  }
];

export const strategicRecommendations = {
  priorityPartnerships: {
    tier1: {
      title: 'First Priority Level',
      description: 'Strategic partnerships with maximum synergy projects for ecosystem acceleration',
      projects: ['Delphina AI', 'Space and Time', 'Privasea'],
      expectedImpact: 'Maximum synergy effect and significant capability expansion'
    },
    tier2: {
      title: 'Second Priority Level', 
      description: 'Collaboration for cutting-edge AI research and advanced reasoning capabilities',
      projects: ['Thinking Machine Labs', 'Nous Research'],
      expectedImpact: 'Innovation acceleration in Ocean AI infrastructure'
    }
  },
  competitiveStrategy: {
    title: 'Coopetition Strategy',
    description: 'Cooperation in areas of common interest while maintaining competition in core products',
    targetProjects: ['ChainML', 'FLock.io', 'Ritual Network', 'OpenGradient'],
    approach: 'Partnership in protocol standardization, competition in infrastructure provision'
  },
  technologicalIntegration: {
    privacyEnhancement: 'FHE technology integration for revolutionary privacy capabilities',
    dataVerification: 'Proof of SQL for cryptographic data integrity guarantees',
    aiCapabilities: 'Advanced ML models and reasoning capabilities integration'
  }
}; 