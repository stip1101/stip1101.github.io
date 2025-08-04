export const providerTypes = [
  { name: 'Cloud Giants', value: 70.0, color: '#ff1493' },
  { name: 'Specialized AI', value: 10.0, color: '#ff69b4' },
  { name: 'Academic/HPC', value: 20.0, color: '#6c5ce7' },
  { name: 'Decentralized', value: 0.0, color: '#ffc0cb' }
];

export const computeProviders = [
  {
    id: 1,
    name: 'Amazon Web Services',
    shortName: 'AWS',
    type: 'Cloud Giants',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    website: 'https://aws.amazon.com',
    description: 'World\'s largest cloud infrastructure provider with comprehensive AI/ML services',
    
    // Rating metrics
    performance: 9.5,
    pricingScore: 8.2,
    availability: 9.8,
    easeOfUse: 8.7,
    
    // Hardware specifications
    hardware: {
      gpus: [
        {
          category: 'High-End GPUs',
          models: [
            { name: 'NVIDIA H200', instances: ['P5en'], performance: 'Latest generation for LLM training' },
            { name: 'NVIDIA H100', instances: ['P5'], performance: '8×H100 GPUs with NVSwitch, 3.2TB HBM3' },
            { name: 'NVIDIA A100', instances: ['P4d', 'P4de'], performance: '8×A100 GPUs, 320GB or 640GB GPU memory' }
          ]
        },
        {
          category: 'General Purpose GPUs',
          models: [
            { name: 'NVIDIA T4', instances: ['G4dn', 'G4ad'], performance: 'Cost-effective inference and light training' },
            { name: 'NVIDIA K80', instances: ['P2'], performance: 'Legacy, budget-friendly option' }
          ]
        }
      ],
      customChips: [
        {
          name: 'AWS Trainium',
          purpose: 'Training',
          instances: ['Trn1', 'Trn1n'],
          performance: 'Up to 40% better price-performance than GPU instances',
          details: 'Custom chip optimized for deep learning training workloads'
        },
        {
          name: 'AWS Inferentia',
          purpose: 'Inference',
          instances: ['Inf1', 'Inf2'],
          performance: 'Up to 2.3x better price-performance than GPU instances',
          details: 'High-performance inference with support for popular ML frameworks'
        }
      ],
      cpus: [
        { name: 'Intel Xeon Scalable', generations: ['2nd Gen', '3rd Gen', '4th Gen'], performance: 'High-performance computing' },
        { name: 'AMD EPYC', generations: ['2nd Gen', '3rd Gen'], performance: 'High core count, excellent price-performance' },
        { name: 'AWS Graviton', generations: ['Graviton2', 'Graviton3'], performance: 'ARM-based, up to 40% better price-performance' }
      ]
    },

    // AI Applications
    aiApplications: {
      largeScale: [
        {
          name: 'Large-Scale LLM Training',
          instances: ['P5', 'P4d'],
          description: '8×H100/A100 GPUs with NVSwitch for distributed training',
          useCase: 'Training models like GPT, Claude, LLaMA'
        },
        {
          name: 'Generative AI & HPC',
          instances: ['P5', 'P4d', 'Trn1'],
          description: 'High-performance computing for AI research and development',
          useCase: 'Scientific simulations, weather modeling, drug discovery'
        }
      ],
      generalPurpose: [
        {
          name: 'Computer Vision',
          instances: ['G4dn', 'G5', 'P3'],
          description: 'Image recognition, video analysis, autonomous systems',
          useCase: 'Object detection, medical imaging, surveillance'
        },
        {
          name: 'Data Analytics & ML',
          instances: ['G4dn', 'C5n', 'R5'],
          description: 'Traditional ML, data processing, analytics workloads',
          useCase: 'Recommendation systems, fraud detection, predictive analytics'
        },
        {
          name: 'Inference Workloads',
          instances: ['Inf1', 'Inf2', 'G4dn'],
          description: 'Real-time and batch inference for deployed models',
          useCase: 'Chatbots, real-time recommendations, content moderation'
        }
      ],
      managedServices: [
        {
          name: 'Amazon SageMaker',
          description: 'Fully managed ML platform for training and inference',
          features: ['AutoML', 'Model training', 'Endpoint deployment', 'Data labeling']
        },
        {
          name: 'Amazon Bedrock',
          description: 'Managed service for foundation models',
          features: ['Claude', 'Llama', 'Titan models', 'Fine-tuning']
        }
      ]
    },

    // Pricing information
    pricing: {
      summary: 'Flexible pricing with significant recent reductions',
      models: [
        {
          type: 'On-Demand',
          description: 'Pay-by-the-second with no upfront costs',
          examples: [
            { instance: 'p5.48xlarge (8×H100)', price: '$30-40/hour', savings: 'Premium performance' },
            { instance: 'p4d.24xlarge (8×A100)', price: '$25-35/hour', savings: 'High-end training' }
          ]
        },
        {
          type: 'Spot Instances',
          description: 'Up to 90% off on-demand prices',
          note: 'Subject to interruption based on capacity'
        },
        {
          type: 'Savings Plans',
          description: '1 and 3-year commitments for 30-40% additional savings',
          flexibility: 'Instance family flexibility within region'
        },
        {
          type: 'Reserved Instances',
          description: 'Traditional reservation model',
          savings: 'Up to 75% compared to on-demand'
        }
      ],
      recentChanges: {
        announcement: 'Competitive GPU pricing with regular optimizations',
        details: [
          'H100 instances (P5): Premium performance pricing',
          'A100 instances (P4): Competitive training rates',
          'Flexible on-demand and reserved options'
        ]
      }
    },

    // Unique features
    uniqueFeatures: {
      networking: [
        {
          name: 'Elastic Fabric Adapter (EFA)',
          description: 'Low-latency networking for HPC and ML clusters',
          benefit: 'High-performance inter-node communication'
        },
        {
          name: 'EC2 UltraClusters',
          description: 'Special HPC clusters up to 20,000 GPUs',
          capability: 'Up to 20 exaflops of compute power'
        }
      ],
      dataStorage: [
        {
          name: 'Amazon S3',
          description: 'Scalable object storage for datasets',
          integration: 'Native integration with ML services'
        },
        {
          name: 'FSx for Lustre',
          description: 'High-performance file system for HPC workloads',
          performance: 'Sub-millisecond latencies, millions of IOPS'
        }
      ],
      orchestration: [
        {
          name: 'Amazon EKS',
          description: 'Managed Kubernetes for containerized ML workloads',
          features: ['GPU scheduling', 'Auto-scaling', 'Multi-AZ']
        },
        {
          name: 'Amazon ECS',
          description: 'Container orchestration service',
          integration: 'Deep AWS service integration'
        }
      ],
      aiTools: [
        {
          name: 'AWS Neuron SDK',
          description: 'Optimizes models for Inferentia/Trainium chips',
          frameworks: ['PyTorch', 'TensorFlow', 'JAX']
        },
        {
          name: 'SageMaker Studio',
          description: 'Integrated ML development environment',
          features: ['Notebooks', 'Debugger', 'Model registry']
        }
      ]
    },

    // Global presence
    globalFootprint: {
      regions: 33,
      availabilityZones: 105,
      edge: '450+ edge locations',
      gpuRegions: ['US East', 'US West', 'Europe', 'Asia Pacific']
    },

    // Strengths and considerations
    strengths: [
      'Largest cloud infrastructure globally',
      'Comprehensive ML/AI service ecosystem',
      'Recent significant GPU price reductions',
      'Advanced networking for distributed computing',
      'Custom AI chips for cost optimization'
    ],
    considerations: [
      'Complex pricing structure',
      'Learning curve for optimization',
      'Vendor lock-in with proprietary services',
      'GPU instance availability constraints'
    ]
  },
  
  {
    id: 2,
    name: 'Microsoft Azure',
    shortName: 'Azure',
    type: 'Cloud Giants',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
    website: 'https://azure.microsoft.com',
    description: 'Microsoft\'s cloud computing platform with comprehensive AI/ML services and enterprise integration',
    
    // Rating metrics
    performance: 9.3,
    pricingScore: 8.0,
    availability: 9.7,
    easeOfUse: 8.9,
    
    // Hardware specifications
    hardware: {
      gpus: [
        {
          category: 'High-End GPUs',
          models: [
            { name: 'NVIDIA H100', instances: ['ND H100 v5'], performance: '8×H100 80GB with NVLink, 3.2 Tbps InfiniBand' },
            { name: 'NVIDIA A100', instances: ['ND A100 v4'], performance: 'A100 80GB for training and inference' },
            { name: 'NVIDIA V100', instances: ['NC/ND v3'], performance: 'Previous generation, cost-effective option' }
          ]
        },
        {
          category: 'General Purpose GPUs',
          models: [
            { name: 'NVIDIA K80', instances: ['NC v1'], performance: 'Legacy GPU for budget-conscious workloads' },
            { name: 'AMD Radeon Instinct', instances: ['NV v4'], performance: 'AMD alternative for AI acceleration' }
          ]
        }
      ],
      customChips: [
        {
          name: 'Project Brainwave FPGAs',
          purpose: 'Inference',
          instances: ['FPGA-enabled VMs'],
          performance: 'Ultra-low latency inference acceleration',
          details: 'Custom FPGA acceleration for real-time AI inference with microsecond latency'
        }
      ],
      cpus: [
        { name: 'Intel Xeon Scalable', generations: ['Skylake', 'Ice Lake', 'Sapphire Rapids'], performance: 'Enterprise-grade performance' },
        { name: 'AMD EPYC', generations: ['2nd Gen', '3rd Gen'], performance: 'High core count and memory bandwidth' }
      ]
    },

    // AI Applications
    aiApplications: {
      largeScale: [
        {
          name: 'Large-Scale LLM Training',
          instances: ['ND H100 v5'],
          description: '96 vCPU, 1900 GiB RAM, 8×H100 with NVLink and InfiniBand',
          useCase: 'Training foundation models, generative AI, distributed deep learning'
        },
        {
          name: 'HPC and Scientific Computing',
          instances: ['ND H100 v5', 'ND A100 v4'],
          description: 'High-performance computing with GPU acceleration',
          useCase: 'Weather modeling, financial simulations, research computing'
        }
      ],
      generalPurpose: [
        {
          name: 'Deep Learning Training/Inference',
          instances: ['NC v3', 'ND v2'],
          description: 'Flexible GPU instances for various ML workloads',
          useCase: 'Computer vision, NLP, recommendation systems'
        },
        {
          name: 'Real-time AI Inference',
          instances: ['FPGA VMs', 'NV v4'],
          description: 'Ultra-low latency inference with FPGA acceleration',
          useCase: 'Real-time decision making, edge AI, IoT applications'
        }
      ],
      managedServices: [
        {
          name: 'Azure Machine Learning',
          description: 'Fully managed MLOps platform with AutoML capabilities',
          features: ['AutoML', 'ML pipelines', 'Model deployment', 'MLOps']
        },
        {
          name: 'Azure Cognitive Services',
          description: 'Pre-built AI APIs for vision, speech, language, and decision',
          features: ['Vision AI', 'Speech Services', 'Language Understanding', 'Decision APIs']
        },
        {
          name: 'Azure OpenAI Service',
          description: 'Access to OpenAI models including GPT-4, DALL-E, Codex',
          features: ['GPT-4', 'DALL-E', 'Codex', 'Enterprise security']
        }
      ]
    },

    // Pricing information
    pricing: {
      summary: 'Flexible pricing with reserved instances and spot pricing options',
      models: [
        {
          type: 'Pay-as-you-go',
          description: 'Standard on-demand pricing with per-minute billing',
          examples: [
            { instance: 'ND96isr_H100_v5 (8×H100)', price: '~$100/hour on-demand', savings: 'Varies by region' },
            { instance: 'ND40rs_v2 (8×V100)', price: '~$18/hour on-demand', savings: 'Budget-friendly option' }
          ]
        },
        {
          type: 'Reserved VM Instances',
          description: '1-3 year reservations for significant cost savings',
          examples: [
            { instance: '1-year reservation', price: '50-60% off on-demand', savings: '1-year commitment' },
            { instance: '3-year reservation', price: 'Up to 72% off on-demand', savings: '3-year commitment' }
          ]
        },
        {
          type: 'Azure Spot VMs',
          description: 'Preemptible instances with up to 90% cost savings',
          note: 'Subject to capacity availability and eviction'
        }
      ],
      recentChanges: {
        announcement: 'Competitive pricing updates with market optimization',
        details: [
          'Enhanced reserved instance discounts',
          'Improved spot pricing availability',
          'Regional pricing optimization'
        ]
      }
    },

    // Unique features
    uniqueFeatures: {
      networking: [
        {
          name: 'InfiniBand Networking',
          description: '3.2 Tbps InfiniBand for ultra-high bandwidth cluster communication',
          benefit: 'Optimized for distributed AI training and HPC workloads'
        },
        {
          name: 'Azure HPC Cache',
          description: 'High-performance file system caching for data-intensive workloads',
          capability: 'Accelerates data access for training pipelines'
        }
      ],
      dataStorage: [
        {
          name: 'Azure Blob Storage',
          description: 'Massively scalable object storage for datasets',
          integration: 'Native integration with Azure ML and analytics services'
        },
        {
          name: 'Azure Data Lake',
          description: 'Analytics-optimized storage for big data workloads',
          performance: 'Optimized for analytics and ML data pipelines'
        }
      ],
      orchestration: [
        {
          name: 'Azure Kubernetes Service (AKS)',
          description: 'Managed Kubernetes with GPU support and auto-scaling',
          features: ['GPU node pools', 'Auto-scaling', 'Azure ML integration']
        },
        {
          name: 'Azure CycleCloud',
          description: 'HPC workload orchestration and cluster management',
          integration: 'Seamless integration with Azure services'
        }
      ],
      aiTools: [
        {
          name: 'Azure ParallelCluster',
          description: 'HPC cluster deployment and management',
          frameworks: ['MPI', 'Slurm', 'Grid Engine']
        },
        {
          name: 'Azure Synapse Integration',
          description: 'Analytics service integration for data pipelines',
          features: ['Data integration', 'Analytics', 'ML pipelines']
        },
        {
          name: 'Azure Databricks',
          description: 'Apache Spark-based analytics platform with ML capabilities',
          features: ['Collaborative notebooks', 'MLflow', 'Delta Lake']
        }
      ]
    },

    // Global presence
    globalFootprint: {
      regions: 60,
      availabilityZones: 140,
      edge: '200+ edge locations',
      gpuRegions: ['US', 'Europe', 'Asia Pacific', 'Canada', 'Australia']
    },

    // Strengths and considerations
    strengths: [
      'Strong enterprise integration and hybrid cloud capabilities',
      'Comprehensive AI/ML service portfolio with Azure OpenAI',
      'Excellent compliance and security certifications',
      'Project Brainwave FPGA acceleration for ultra-low latency',
      'Deep integration with Microsoft ecosystem (Office, Teams, etc.)'
    ],
    considerations: [
      'GPU instance availability can be limited in some regions',
      'Complex pricing structure with multiple tiers',
      'Learning curve for Azure-specific services and terminology',
      'Higher baseline costs compared to some alternatives'
    ]
  },
  
  {
    id: 3,
    name: 'Google Cloud Platform',
    shortName: 'GCP',
    type: 'Cloud Giants',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    website: 'https://cloud.google.com',
    description: 'Google\'s cloud computing platform with unique TPU offerings and comprehensive AI/ML services',
    
    // Rating metrics
    performance: 9.4,
    pricingScore: 8.3,
    availability: 9.6,
    easeOfUse: 8.5,
    
    // Hardware specifications
    hardware: {
      gpus: [
        {
          category: 'High-End GPUs',
          models: [
            { name: 'NVIDIA H100/H200', instances: ['A3/Virtuoso series', 'A2 Ultra'], performance: 'Latest generation for advanced AI training' },
            { name: 'NVIDIA A100', instances: ['A2 Ultra'], performance: '8×A100 40/80GB for high-performance computing' },
            { name: 'NVIDIA V100', instances: ['N1'], performance: 'Previous generation, reliable performance' }
          ]
        },
        {
          category: 'General Purpose GPUs',
          models: [
            { name: 'NVIDIA L4', instances: ['G2'], performance: 'Cost-effective inference and light training' },
            { name: 'NVIDIA T4', instances: ['N1'], performance: 'Budget-friendly GPU for various workloads' },
            { name: 'NVIDIA P100', instances: ['N1'], performance: 'Legacy GPU for basic AI workloads' }
          ]
        }
      ],
      customChips: [
        {
          name: 'Cloud TPU v5p',
          purpose: 'Training & Inference',
          instances: ['TPU v5p pods'],
          performance: 'General availability, optimized for large-scale training',
          details: '$4.20/chip-hour with pod configurations up to 4,096 TPU cores'
        },
        {
          name: 'Cloud TPU v5e',
          purpose: 'Cost-effective Training/Inference',
          instances: ['TPU v5e'],
          performance: '~$1.20/hour with commitment discounts',
          details: 'Optimized for cost-effective training and inference workloads'
        },
        {
          name: 'Cloud TPU v2-v4',
          purpose: 'Training & Inference',
          instances: ['TPU v2', 'TPU v3', 'TPU v4'],
          performance: 'Various generations for different performance needs',
          details: 'Mature TPU offerings with proven performance'
        }
      ],
      cpus: [
        { name: 'Intel Xeon Scalable', generations: ['Cascadelake', 'Skylake'], performance: 'Enterprise-grade x86 performance' },
        { name: 'AMD EPYC', generations: ['2nd Gen', '3rd Gen'], performance: 'High core count and competitive pricing' },
        { name: 'Google Tau T2D (ARM)', generations: ['Custom ARM'], performance: 'Energy-efficient ARM-based processors' }
      ]
    },

    // AI Applications
    aiApplications: {
      largeScale: [
        {
          name: 'Large Model Training with TPUs',
          instances: ['TPU v5p pods', 'TPU v4'],
          description: 'TPU pods excel at TensorFlow workloads and LLM training',
          useCase: 'Training large language models, foundation models, scientific computing'
        },
        {
          name: 'HPC Clusters',
          instances: ['A2 Ultra', 'A3 series'],
          description: 'High-performance computing with GPU acceleration and Cloud Interconnect',
          useCase: 'Scientific simulations, research computing, distributed training'
        }
      ],
      generalPurpose: [
        {
          name: 'Training/Inference of Large Models',
          instances: ['N1 with GPUs', 'G2 with L4'],
          description: 'Flexible GPU instances for various AI/ML workloads',
          useCase: 'Computer vision, NLP, deep learning training and inference'
        },
        {
          name: 'High-Performance Analytics',
          instances: ['BigQuery ML', 'Dataflow'],
          description: 'BigQuery ML for analytics and machine learning at scale',
          useCase: 'Data analytics, business intelligence, real-time processing'
        }
      ],
      managedServices: [
        {
          name: 'Vertex AI',
          description: 'Comprehensive ML platform for managed pipelines, AutoML, and model deployment',
          features: ['AutoML', 'Model Registry', 'Managed Training', 'Explainability Tools']
        },
        {
          name: 'AI Platform Services',
          description: 'Pre-trained APIs for vision, language, speech, and document AI',
          features: ['Vision AI', 'Natural Language AI', 'Speech-to-Text', 'Document AI']
        },
        {
          name: 'TPU Research Cloud (TRC)',
          description: 'Free TPU access for researchers and students',
          features: ['Free TPU credits', 'Research collaboration', 'Academic partnerships']
        }
      ]
    },

    // Pricing information
    pricing: {
      summary: 'Competitive on-demand and committed use pricing with unique TPU options',
      models: [
        {
          type: 'On-Demand (per-minute billing)',
          description: 'Pay-as-you-go with per-minute granularity',
          examples: [
            { instance: 'T4 GPU (Iowa)', price: '$0.35/hour', savings: 'Budget-friendly option' },
            { instance: 'P100 GPU (Iowa)', price: '$1.46/hour', savings: 'Mid-range performance' },
            { instance: 'V100 GPU (Iowa)', price: '$2.48/hour', savings: 'High-performance option' }
          ]
        },
        {
          type: 'TPU Pricing',
          description: 'Specialized pricing for Google\'s custom AI chips',
          examples: [
            { instance: 'TPU v5p', price: '$4.20/chip-hour', savings: 'Latest generation TPU' },
            { instance: 'TPU v5e', price: '~$1.20/hour', savings: 'Cost-effective training/inference' }
          ]
        },
        {
          type: 'Preemptible VMs (Spot)',
          description: 'Up to 70-80% off regular pricing',
          note: 'Subject to availability and can be preempted'
        },
        {
          type: 'Committed Use Discounts',
          description: '1-year or 3-year commitments for 30-50% savings',
          examples: [
            { instance: '1-year commitment', price: '30-40% off on-demand', savings: '1-year term' },
            { instance: '3-year commitment', price: '40-50% off on-demand', savings: '3-year term' }
          ]
        }
      ],
      recentChanges: {
        announcement: 'Sustained Use Discounts and competitive TPU pricing',
        details: [
          'Automatic sustained use discounts for long-running instances',
          'Competitive TPU v5p and v5e pricing',
          'Enhanced preemptible GPU availability'
        ]
      }
    },

    // Unique features
    uniqueFeatures: {
      networking: [
        {
          name: 'Google Private Fiber Network',
          description: 'Global private fiber network for high-throughput distributed training',
          benefit: 'Superior network performance for multi-region workloads'
        },
        {
          name: 'Cloud Interconnect',
          description: 'Dedicated network connections for hybrid and multi-cloud scenarios',
          capability: 'Low-latency connections to on-premises infrastructure'
        }
      ],
      dataStorage: [
        {
          name: 'Google Cloud Storage',
          description: 'Scalable object storage with multiple storage classes',
          integration: 'Native integration with AI/ML services and analytics'
        },
        {
          name: 'BigQuery',
          description: 'Serverless data warehouse with built-in ML capabilities',
          performance: 'Petabyte-scale analytics with BigQuery ML integration'
        }
      ],
      orchestration: [
        {
          name: 'Google Kubernetes Engine (GKE)',
          description: 'Managed Kubernetes with advanced GPU and TPU support',
          features: ['GPU/TPU scheduling', 'Auto-scaling', 'Workload optimization']
        },
        {
          name: 'Dataflow',
          description: 'Managed stream and batch processing service',
          integration: 'Native integration with ML pipelines and analytics'
        }
      ],
      aiTools: [
        {
          name: 'Global TPU Pod Support',
          description: 'Massive TPU clusters with up to 4,096 TPU v4 cores',
          capability: 'World\'s largest AI training infrastructure'
        },
        {
          name: 'TPU Research Cloud (TRC)',
          description: 'Free TPU access for researchers and academic institutions',
          features: ['Applied access process', 'Research collaboration', 'Academic partnerships']
        },
        {
          name: 'Vertex AI Integration',
          description: 'Seamless integration between compute and ML platform',
          features: ['Managed training', 'AutoML', 'Model monitoring', 'Explainability']
        }
      ]
    },

    // Global presence
    globalFootprint: {
      regions: 35,
      availabilityZones: 106,
      edge: '300+ edge locations',
      gpuRegions: ['US', 'Europe', 'Asia Pacific', 'South America']
    },

    // Strengths and considerations
    strengths: [
      'Unique TPU offerings with world-class AI training capabilities',
      'Superior network infrastructure with private fiber',
      'Strong integration with Google services and BigQuery ML',
      'TPU Research Cloud provides free access for researchers',
      'Competitive pricing with sustained use discounts'
    ],
    considerations: [
      'TPUs primarily optimized for TensorFlow workloads',
      'Smaller market share compared to AWS and Azure',
      'Learning curve for TPU optimization and usage',
      'Limited availability of latest GPU instances in some regions'
    ]
  },
  
  {
    id: 4,
    name: 'IBM Cloud',
    shortName: 'IBM',
    type: 'Cloud Giants',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    website: 'https://www.ibm.com/cloud',
    description: 'Enterprise-focused cloud platform with strong compliance, security, and hybrid cloud capabilities',
    
    // Rating metrics
    performance: 8.7,
    pricingScore: 7.8,
    availability: 9.2,
    easeOfUse: 8.1,
    
    // Hardware specifications
    hardware: {
      gpus: [
        {
          category: 'High-End GPUs',
          models: [
            { name: 'NVIDIA H100', instances: ['VPC instances'], performance: 'Latest generation for advanced AI training' },
            { name: 'NVIDIA A100', instances: ['VPC instances'], performance: 'High-performance training and inference' },
            { name: 'NVIDIA L40S', instances: ['VPC instances'], performance: 'Balanced performance for training and inference' }
          ]
        },
        {
          category: 'Specialized Accelerators',
          models: [
            { name: 'AMD MI300X', instances: ['Bare-metal'], performance: 'AI/HPC GPU alternative to NVIDIA' },
            { name: 'Intel Gaudi 3', instances: ['VPC instances'], performance: 'AI accelerator optimized for training' }
          ]
        }
      ],
      customChips: [
        {
          name: 'IBM POWER Processors',
          purpose: 'High-Performance Computing',
          instances: ['Bare-metal POWER systems'],
          performance: 'Enterprise-grade RISC architecture for demanding workloads',
          details: 'Optimized for data-intensive and high-throughput applications'
        }
      ],
      cpus: [
        { name: 'Intel Xeon', generations: ['Various generations'], performance: 'Standard x86 enterprise computing' },
        { name: 'AMD EPYC', generations: ['2nd Gen', '3rd Gen'], performance: 'High core count and competitive performance' },
        { name: 'IBM POWER', generations: ['POWER9', 'POWER10'], performance: 'Enterprise RISC architecture for demanding workloads' }
      ]
    },

    // AI Applications
    aiApplications: {
      largeScale: [
        {
          name: 'Enterprise AI with IBM watsonx.ai',
          instances: ['GPU-enabled VPC', 'Bare-metal'],
          description: 'Foundation models and enterprise AI platform with security focus',
          useCase: 'Enterprise AI applications, regulated industries, hybrid cloud AI'
        },
        {
          name: 'HPC and High-Performance AI',
          instances: ['POWER systems', 'GPU clusters'],
          description: 'High-performance computing with PowerAI HPC stack',
          useCase: 'Scientific computing, financial modeling, research applications'
        }
      ],
      generalPurpose: [
        {
          name: 'Hybrid Cloud AI Workloads',
          instances: ['Red Hat OpenShift', 'VPC instances'],
          description: 'AI workloads across hybrid and multi-cloud environments',
          useCase: 'Enterprise AI, containerized ML, hybrid deployments'
        },
        {
          name: 'Secure AI for Regulated Industries',
          instances: ['IBM Cloud for Financial Services'],
          description: 'AI applications with enhanced security and compliance',
          useCase: 'Banking, healthcare, government, regulated data processing'
        }
      ],
      managedServices: [
        {
          name: 'IBM watsonx.ai',
          description: 'Foundation model platform with enterprise security and governance',
          features: ['Foundation Models', 'Model Training', 'AI Governance', 'Enterprise Security']
        },
        {
          name: 'Watson Machine Learning',
          description: 'Comprehensive ML platform with AutoML and model management',
          features: ['AutoML', 'Model Deployment', 'MLOps', 'Model Monitoring']
        },
        {
          name: 'IBM Cloud Pak for Data',
          description: 'Data and AI platform with unified analytics and governance',
          features: ['Data Integration', 'Analytics', 'AI/ML', 'Data Governance']
        }
      ]
    },

    // Pricing information
    pricing: {
      summary: 'Enterprise-focused pricing with subscription deals and volume discounts',
      models: [
        {
          type: 'On-Demand VPC Instances',
          description: 'Monthly billing for VPC instances with GPU acceleration',
          examples: [
            { instance: 'GPU pricing', price: 'Region-specific', savings: 'Contact for current rates' },
            { instance: 'Bare-metal', price: 'Monthly billing', savings: 'Dedicated hardware performance' }
          ]
        },
        {
          type: 'Promotional Pricing',
          description: 'Regular promotions for GPU instances',
          examples: [
            { instance: 'A100/L40S promotion', price: '50% off for 6 months', savings: 'Limited-time offers' }
          ]
        },
        {
          type: 'Reserved Pricing',
          description: 'Volume discounts and enterprise agreements',
          note: 'Custom pricing available for enterprise customers'
        }
      ],
      recentChanges: {
        announcement: 'Competitive GPU pricing and promotional offers',
        details: [
          'Regular promotional pricing for GPU instances',
          'Enterprise volume discounts available',
          'Flexible monthly billing options'
        ]
      }
    },

    // Unique features
    uniqueFeatures: {
      networking: [
        {
          name: 'Private Networking',
          description: 'Enhanced security with private networking and data encryption',
          benefit: 'Superior security for enterprise and regulated workloads'
        },
        {
          name: 'Hybrid Cloud Connectivity',
          description: 'Seamless integration between cloud and on-premises infrastructure',
          capability: 'Direct connectivity to existing IBM infrastructure'
        }
      ],
      dataStorage: [
        {
          name: 'IBM Spectrum Scale',
          description: 'High-performance file system for HPC and AI workloads',
          integration: 'Native integration with IBM Cloud storage services'
        },
        {
          name: 'IBM Cloud Object Storage',
          description: 'Scalable object storage with enterprise security features',
          performance: 'Optimized for analytics and AI data pipelines'
        }
      ],
      orchestration: [
        {
          name: 'Red Hat OpenShift',
          description: 'Enterprise Kubernetes platform with advanced security',
          features: ['Container orchestration', 'Security policies', 'Hybrid deployment']
        },
        {
          name: 'IBM Cloud Satellite',
          description: 'Distributed cloud infrastructure for edge and hybrid scenarios',
          integration: 'Consistent IBM Cloud experience across locations'
        }
      ],
      aiTools: [
        {
          name: 'IBM watsonx Platform',
          description: 'Comprehensive AI platform with foundation models and governance',
          frameworks: ['Foundation Models', 'AI Governance', 'Enterprise Security']
        },
        {
          name: 'Cloud-Native Supercomputers',
          description: 'Hybrid HPC solutions combining cloud and on-premises resources',
          features: ['HPC clusters', 'Scientific computing', 'Research collaboration']
        },
        {
          name: 'IBM Cloud for Financial Services',
          description: 'Specialized cloud environment for regulated industries',
          features: ['Enhanced security', 'Compliance frameworks', 'Regulatory alignment']
        }
      ]
    },

    // Global presence
    globalFootprint: {
      regions: 19,
      availabilityZones: 60,
      edge: '165+ edge locations',
      gpuRegions: ['US', 'Europe', 'Asia Pacific']
    },

    // Strengths and considerations
    strengths: [
      'Strong focus on enterprise security and compliance',
      'Comprehensive hybrid cloud and multi-cloud capabilities',
      'Deep integration with Red Hat OpenShift and IBM ecosystem',
      'watsonx.ai platform with foundation models and governance',
      'Specialized offerings for regulated industries'
    ],
    considerations: [
      'Smaller GPU instance availability compared to major cloud providers',
      'Higher baseline costs for enterprise features',
      'Learning curve for IBM-specific services and terminology',
      'Limited global footprint compared to AWS, Azure, and GCP'
    ]
  },

  {
    id: 5,
    name: 'Oracle Cloud Infrastructure',
    shortName: 'OCI',
    type: 'Cloud Giants',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    website: 'https://cloud.oracle.com',
    description: 'Enterprise-focused cloud platform with high-performance bare-metal GPU instances and database integration',
    
    // Rating metrics
    performance: 9.2,
    pricingScore: 8.5,
    availability: 8.8,
    easeOfUse: 8.1,
    
    // Hardware specifications
    hardware: {
      gpus: [
        {
          category: 'High-End Bare-Metal GPUs',
          models: [
            { name: 'NVIDIA H100', instances: ['BM.GPU.H100.8'], performance: '8×H100 80GB with maximum performance and network isolation' },
            { name: 'NVIDIA A100', instances: ['BM.GPU.A100-v2.8', 'BM.GPU4.8'], performance: '8×A100 80GB or 8×A100 40GB bare-metal configurations' }
          ]
        },
        {
          category: 'Virtual Machine GPUs',
          models: [
            { name: 'NVIDIA V100', instances: ['VM.GPU3.1', 'VM.GPU3.2', 'VM.GPU3.4'], performance: '1-8×V100 32GB for flexible workloads' },
            { name: 'NVIDIA A10', instances: ['VM.GPU.A10.1', 'VM.GPU.A10.2'], performance: 'Tensor Core GPUs optimized for inference' }
          ]
        }
      ],
      customChips: [
        {
          name: 'Oracle Optimized Hardware',
          purpose: 'High-Performance Computing',
          instances: ['Bare-metal', 'RDMA networking'],
          performance: 'Custom-optimized hardware stack for maximum GPU utilization',
          details: 'Bare-metal instances provide direct hardware access without virtualization overhead'
        }
      ],
      cpus: [
        {
          name: 'AMD EPYC',
          generations: ['3rd Gen', '4th Gen'],
          performance: 'High core count processors optimized for parallel workloads'
        },
        {
          name: 'Intel Xeon',
          generations: ['Platinum', 'Gold'],
          performance: 'Enterprise-grade processors with advanced security features'
        }
      ]
    },

    // AI Applications and use cases
    aiApplications: {
      largeScale: [
        {
          name: 'Large Language Model Training',
          instances: ['BM.GPU.H100.8', 'BM.GPU.A100-v2.8'],
          description: 'Distributed training on bare-metal nodes with maximum network performance',
          useCase: 'Training foundation models and custom LLMs with minimal virtualization overhead'
        },
        {
          name: 'High-Performance Computing',
          instances: ['BM.GPU4.8', 'VM.GPU3.4'],
          description: 'Scientific computing and simulation workloads',
          useCase: 'Weather modeling, financial simulations, and research computing'
        }
      ],
      generalPurpose: [
        {
          name: 'Model Inference and Serving',
          instances: ['VM.GPU.A10.1', 'VM.GPU.A10.2'],
          description: 'Cost-effective inference with A10 Tensor Core GPUs',
          useCase: 'Real-time inference APIs and batch processing'
        },
        {
          name: 'Data Analytics and ML',
          instances: ['VM.GPU3.2', 'VM.GPU3.4'],
          description: 'Analytics workloads integrated with Oracle Autonomous Database',
          useCase: 'Business intelligence, data mining, and predictive analytics'
        }
      ],
      managedServices: [
        {
          name: 'OCI Data Science',
          description: 'Fully managed ML platform with Jupyter notebooks and model deployment',
          features: ['AutoML', 'Model catalog', 'MLOps pipelines', 'Distributed training']
        },
        {
          name: 'Container Engine for Kubernetes (OKE)',
          description: 'Managed Kubernetes with GPU node pools for containerized AI workloads',
          features: ['GPU scheduling', 'Auto-scaling', 'Service mesh', 'CI/CD integration']
        },
        {
          name: 'Oracle Autonomous Database',
          description: 'Self-driving database with integrated machine learning capabilities',
          features: ['AutoML in database', 'Graph analytics', 'Spatial analytics', 'JSON support']
        }
      ]
    },

    // Pricing structure
    pricing: {
      summary: 'Transparent pay-as-you-go and reserved instance pricing with significant savings options',
      models: [
        {
          type: 'On-Demand',
          description: 'Pay-as-you-go pricing with per-minute billing for flexible workloads',
          examples: [
            { instance: 'BM.GPU.H100.8', price: '$20-30/hour', savings: 'No commitment required' },
            { instance: 'VM.GPU3.2 (2×V100)', price: '$1-2/hour per GPU', savings: 'Flexible scaling' },
            { instance: 'VM.GPU.A10.1', price: '$0.8-1.2/hour', savings: 'Cost-effective inference' }
          ]
        },
        {
          type: 'Reserved Instances',
          description: '1-year and 3-year commitments with up to 30% savings over on-demand',
          examples: [
            { instance: '1-year reserved', price: 'Up to 20% savings', savings: 'Moderate commitment' },
            { instance: '3-year reserved', price: 'Up to 30% savings', savings: 'Maximum savings' }
          ],
          note: 'Monthly commit options available for reserved pricing'
        },
        {
          type: 'Bring Your Own License (BYOL)',
          description: 'Use existing Oracle licenses on OCI infrastructure for additional cost savings',
          note: 'Significant savings for existing Oracle customers with enterprise agreements'
        }
      ],
      recentChanges: {
        announcement: 'Competitive pricing with transparent rate structure',
        details: [
          'No data egress charges for most services',
          'Consistent pricing across all OCI regions',
          'Free tier includes compute and database services',
          'Enterprise discounts available for large deployments'
        ]
      }
    },

    // Unique features
    uniqueFeatures: {
      networking: [
        {
          name: 'Bare-Metal GPU Servers',
          description: 'Direct hardware access without virtualization overhead for maximum performance',
          benefit: 'Up to 20% better performance compared to virtualized instances',
          capability: 'Complete hardware isolation and dedicated resources'
        },
        {
          name: 'RDMA over Converged Ethernet',
          description: 'High-bandwidth, low-latency networking for distributed AI training',
          benefit: 'Optimized for multi-node GPU training with minimal network bottlenecks'
        }
      ],
      dataStorage: [
        {
          name: 'Oracle Autonomous Database Integration',
          description: 'Seamless integration between GPU compute and autonomous database services',
          integration: 'Direct analytics on database-resident data without ETL processes'
        },
        {
          name: 'High-Performance Block Storage',
          description: 'NVMe SSD storage with consistent performance for data-intensive workloads',
          performance: 'Up to 225,000 IOPS and 2.4 GB/s throughput per instance'
        }
      ],
      orchestration: [
        {
          name: 'Flexible Cluster Networking',
          description: 'Custom network topologies and RDMA support for HPC workloads',
          features: ['Custom VLAN configuration', 'InfiniBand support', 'Cluster networking']
        },
        {
          name: 'Multi-Tenant Isolated GPU Servers',
          description: 'FIPS-compliant isolation for government and regulated industries',
          security: 'Hardware-level isolation with compliance certifications'
        }
      ],
      aiTools: [
        {
          name: 'OCI Data Science Platform',
          description: 'End-to-end ML platform with integrated GPU compute and model management',
          frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost']
        },
        {
          name: 'Autoscope Image Registry',
          description: 'Container registry optimized for AI/ML images and frameworks',
          features: ['Pre-built AI images', 'Custom image support', 'Security scanning']
        },
        {
          name: 'Oracle Cloud VMware Solution',
          description: 'Run VMware workloads natively on OCI with GPU pass-through support',
          features: ['GPU virtualization', 'Hybrid cloud', 'Migration tools']
        }
      ]
    },

    // Global presence
    globalFootprint: {
      regions: 44,
      availabilityZones: 90,
      edge: '20+ edge locations',
      gpuRegions: ['US East', 'US West', 'Europe', 'Asia Pacific', 'Canada', 'UK', 'Japan']
    },

    // Strengths and considerations
    strengths: [
      'Bare-metal GPU instances provide maximum performance without virtualization overhead',
      'Strong integration with Oracle database and enterprise applications',
      'Transparent and competitive pricing with no hidden fees',
      'FIPS compliance and hardware isolation for regulated industries',
      'High-performance networking with RDMA support for distributed training'
    ],
    considerations: [
      'Smaller ecosystem compared to AWS, Azure, and GCP',
      'Limited availability of latest GPU generations in all regions',
      'Learning curve for Oracle-specific services and terminology',
      'Fewer third-party integrations compared to major cloud providers'
    ]
  },

  {
    id: 6,
    name: 'Alibaba Cloud',
    shortName: 'Alibaba',
    type: 'Cloud Giants',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Alibaba_Cloud_logo.svg',
    website: 'https://www.alibabacloud.com',
    description: 'Leading cloud provider in Asia-Pacific with proprietary AI chips and strong presence in Chinese market',
    
    // Rating metrics
    performance: 8.6,
    pricingScore: 9.1,
    availability: 8.4,
    easeOfUse: 7.9,
    
    // Hardware specifications
    hardware: {
      gpus: [
        {
          category: 'NVIDIA GPU Instances',
          models: [
            { name: 'NVIDIA V100', instances: ['ecs.gn6v', 'ecs.gn6e'], performance: '32GB HBM2 memory for training and inference workloads' },
            { name: 'NVIDIA T4', instances: ['ecs.gn6i', 'ecs.gn7i'], performance: '16GB GDDR6 memory optimized for inference and light training' },
            { name: 'NVIDIA P100', instances: ['ecs.gn5'], performance: '16GB HBM memory for general-purpose GPU computing' }
          ]
        },
        {
          category: 'Legacy GPU Options',
          models: [
            { name: 'Tesla M40', instances: ['ecs.gn4'], performance: '12GB memory for budget-conscious workloads' },
            { name: 'Tesla K80', instances: ['ecs.gn5i'], performance: 'Entry-level GPU computing for development and testing' }
          ]
        }
      ],
      customChips: [
        {
          name: 'Hanguang 800',
          purpose: 'AI Inference',
          instances: ['Proprietary inference service'],
          performance: 'Custom AI chip optimized for machine learning inference workloads',
          details: 'Alibaba\'s in-house developed AI accelerator for high-throughput inference'
        },
        {
          name: 'XuanTie TPU-like Accelerators',
          purpose: 'Specialized AI Computing',
          instances: ['PAI platform integration'],
          performance: 'TPU-like accelerators for specific AI workloads and frameworks',
          details: 'Proprietary accelerators used primarily within Alibaba\'s AI platform ecosystem'
        }
      ],
      cpus: [
        {
          name: 'Intel Xeon',
          generations: ['Cascade Lake', 'Ice Lake'],
          performance: 'Enterprise-grade processors with support for AI acceleration'
        },
        {
          name: 'ARM-based Processors',
          generations: ['Graviton-equivalent', 'Custom ARM'],
          performance: 'Energy-efficient processors for cloud-native workloads'
        }
      ]
    },

    // AI Applications and use cases
    aiApplications: {
      largeScale: [
        {
          name: 'Distributed Model Training',
          instances: ['ecs.gn6v', 'ecs.gn6e'],
          description: 'Large-scale distributed training using V100 GPU clusters',
          useCase: 'Training computer vision models, NLP models, and deep learning research'
        },
        {
          name: 'Big Data Analytics',
          instances: ['MaxCompute', 'PAI platform'],
          description: 'Real-time analytics and data processing on massive datasets',
          useCase: 'E-commerce analytics, financial modeling, and business intelligence'
        }
      ],
      generalPurpose: [
        {
          name: 'Model Inference and Serving',
          instances: ['ecs.gn6i', 'ecs.gn7i'],
          description: 'Cost-effective inference using T4 GPUs and Hanguang chips',
          useCase: 'Real-time recommendation systems, image recognition APIs'
        },
        {
          name: 'Computer Vision Applications',
          instances: ['ecs.gn6v', 'Hanguang inference'],
          description: 'Image and video processing workloads with GPU and custom chip acceleration',
          useCase: 'Content moderation, visual search, autonomous vehicle development'
        }
      ],
      managedServices: [
        {
          name: 'PAI (Platform for AI)',
          description: 'Comprehensive AI platform with drag-and-drop ML model building',
          features: ['AutoML', 'Model marketplace', 'Distributed training', 'Model serving']
        },
        {
          name: 'MaxCompute',
          description: 'Big data processing service with integrated machine learning capabilities',
          features: ['SQL-based ML', 'Graph computing', 'Stream processing', 'Data lake analytics']
        },
        {
          name: 'Container Service for Kubernetes',
          description: 'Managed Kubernetes with GPU scheduling and AI workload optimization',
          features: ['GPU sharing', 'Auto-scaling', 'Spot instances', 'Serverless containers']
        }
      ]
    },

    // Pricing structure
    pricing: {
      summary: 'Competitive pay-as-you-go and subscription pricing with aggressive spot instance discounts',
      models: [
        {
          type: 'Pay-As-You-Go',
          description: 'Per-minute billing with flexible scaling for variable workloads',
          examples: [
            { instance: 'Tesla M40', price: '~$1.31/GPU-hour', savings: 'Budget-friendly option' },
            { instance: 'P100', price: '~$1.87/GPU-hour', savings: 'Balanced performance/cost' },
            { instance: 'T4', price: '~$2.38/GPU-hour', savings: 'Optimized for inference' },
            { instance: 'V100', price: '~$4.50/GPU-hour', savings: 'High-performance training' }
          ]
        },
        {
          type: 'Subscription Plans',
          description: '1-year and 3-year subscription plans with significant discounts',
          examples: [
            { instance: '1-year subscription', price: 'Up to 25% savings', savings: 'Moderate commitment' },
            { instance: '3-year subscription', price: 'Up to 40% savings', savings: 'Maximum long-term savings' }
          ]
        },
        {
          type: 'Spot Instances & Preemptible',
          description: 'Significantly discounted instances for fault-tolerant workloads',
          examples: [
            { instance: 'Spot instances', price: 'Up to 50% off on-demand', savings: 'Perfect for batch processing' }
          ],
          note: 'Spot pricing can provide substantial cost savings for training workloads'
        }
      ],
      recentChanges: {
        announcement: 'Aggressive pricing strategy in global markets',
        details: [
          'Competitive pricing to challenge established cloud providers',
          'Regular promotional pricing for new customers',
          'Volume discounts for enterprise customers',
          'Free tier includes compute credits and storage'
        ]
      }
    },

    // Unique features
    uniqueFeatures: {
      networking: [
        {
          name: 'High-Throughput Network in China',
          description: 'Optimized network infrastructure for Chinese market with low latency',
          benefit: 'Superior performance for applications serving Chinese users',
          capability: 'Dedicated backbone network with multiple ISP connections'
        },
        {
          name: 'Global Connectivity',
          description: 'Express Connect for hybrid cloud and cross-region connectivity',
          benefit: 'Seamless integration between on-premises and cloud resources'
        }
      ],
      dataStorage: [
        {
          name: 'Object Storage Service (OSS)',
          description: 'Massive-scale object storage with integrated AI processing capabilities',
          integration: 'Direct integration with PAI platform for data lake analytics'
        },
        {
          name: 'PolarDB Integration',
          description: 'Cloud-native database with built-in AI and analytics features',
          performance: 'Optimized for real-time analytics and machine learning workloads'
        }
      ],
      orchestration: [
        {
          name: 'GPU Sharing via MPS Technology',
          description: 'Multi-Process Service technology for efficient GPU resource utilization',
          features: ['GPU partitioning', 'Resource isolation', 'Improved utilization']
        },
        {
          name: 'Serverless Container Service',
          description: 'Elastic Container Instance (ECI) for serverless GPU computing',
          capabilities: ['Auto-scaling', 'Pay-per-use', 'No cluster management']
        }
      ],
      aiTools: [
        {
          name: 'PAI-Studio',
          description: 'Visual machine learning platform with drag-and-drop model building',
          frameworks: ['TensorFlow', 'PyTorch', 'XGBoost', 'LightGBM']
        },
        {
          name: 'Hanguang Inference Service',
          description: 'Specialized inference service using proprietary AI chips',
          features: ['Ultra-low latency', 'High throughput', 'Cost optimization']
        },
        {
          name: 'DataWorks',
          description: 'End-to-end data development and management platform',
          features: ['Data integration', 'Workflow orchestration', 'Data quality', 'Governance']
        }
      ]
    },

    // Global presence
    globalFootprint: {
      regions: 27,
      availabilityZones: 84,
      edge: '2,800+ edge nodes',
      gpuRegions: ['China', 'Asia Pacific', 'Europe', 'North America', 'Middle East']
    },

    // Strengths and considerations
    strengths: [
      'Strong presence in China and Asia-Pacific region with local compliance',
      'Proprietary AI chips (Hanguang) provide cost-effective inference solutions',
      'Aggressive pricing strategy with significant spot instance discounts',
      'Comprehensive AI platform (PAI) with integrated big data processing',
      'GPU sharing technology for improved resource utilization'
    ],
    considerations: [
      'Limited availability of latest GPU generations (H100, A100) compared to major providers',
      'Regulatory considerations for data residency in certain markets',
      'Smaller ecosystem and fewer third-party integrations outside Asia',
      'Language barriers and documentation primarily optimized for Chinese market'
    ]
  },

  {
    id: 7,
    name: 'Tencent Cloud',
    shortName: 'Tencent',
    type: 'Cloud Giants',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Tencent_Logo.svg',
    website: 'https://intl.cloud.tencent.com',
    description: 'Leading Chinese cloud provider with deep integration into Tencent ecosystem and specialized gaming/video AI services',
    
    // Rating metrics
    performance: 8.4,
    pricingScore: 8.8,
    availability: 8.2,
    easeOfUse: 8.0,
    
    // Hardware specifications
    hardware: {
      gpus: [
        {
          category: 'High-End NVIDIA GPUs',
          models: [
            { name: 'NVIDIA A100', instances: ['GT4'], performance: '40GB/80GB HBM2e memory for large-scale AI training' },
            { name: 'NVIDIA V100', instances: ['GN7', 'GN8'], performance: '32GB HBM2 memory for training and inference workloads' },
            { name: 'NVIDIA T4', instances: ['GN7vw', 'GN10X'], performance: '16GB GDDR6 memory optimized for inference and video processing' }
          ]
        },
        {
          category: 'GPU Cluster Products',
          models: [
            { name: 'Tencent GPU Clusters', instances: ['C2-C6 series'], performance: 'Dedicated GPU clusters for enterprise and gaming workloads' },
            { name: 'Container GPU Services', instances: ['TKE GPU nodes'], performance: 'Kubernetes-based GPU containers for scalable AI applications' }
          ]
        }
      ],
      customChips: [
        {
          name: 'Tencent Optimized Infrastructure',
          purpose: 'Gaming and Video AI',
          instances: ['Specialized gaming servers', 'Video processing clusters'],
          performance: 'Custom-optimized infrastructure for gaming and multimedia AI workloads',
          details: 'Tencent\'s proprietary optimizations for gaming, social media, and video AI applications'
        }
      ],
      cpus: [
        {
          name: 'Intel Xeon',
          generations: ['Skylake', 'Cascade Lake', 'Ice Lake'],
          performance: 'Enterprise-grade processors optimized for cloud gaming and AI workloads'
        },
        {
          name: 'AMD EPYC',
          generations: ['2nd Gen', '3rd Gen'],
          performance: 'High core count processors for parallel gaming and AI processing'
        }
      ]
    },

    // AI Applications and use cases
    aiApplications: {
      largeScale: [
        {
          name: 'Large-Scale Gaming AI',
          instances: ['GT4', 'GN8'],
          description: 'AI for game development, player behavior analysis, and real-time game optimization',
          useCase: 'Game AI, anti-cheat systems, player matching, and game content generation'
        },
        {
          name: 'Video and Multimedia AI',
          instances: ['GN7vw', 'T4 clusters'],
          description: 'Large-scale video processing, content moderation, and multimedia AI services',
          useCase: 'Video transcoding, content analysis, live streaming optimization, and media AI'
        }
      ],
      generalPurpose: [
        {
          name: 'AI Training and Inference',
          instances: ['GN7', 'GN10X'],
          description: 'General-purpose machine learning training and model serving',
          useCase: 'Deep learning research, model development, and production inference APIs'
        },
        {
          name: 'Social Media AI',
          instances: ['T4 instances', 'GPU clusters'],
          description: 'AI services for social platforms, messaging, and user engagement',
          useCase: 'Content recommendation, user behavior analysis, and social graph processing'
        }
      ],
      managedServices: [
        {
          name: 'Tencent AI Platform',
          description: 'Comprehensive AI platform with pre-built models and APIs',
          features: ['Image AI', 'Voice AI', 'Text AI', 'Video AI', 'Gaming AI']
        },
        {
          name: 'Tencent Kubernetes Engine (TKE)',
          description: 'Managed Kubernetes with GPU support and container-based AI inference',
          features: ['GPU scheduling', 'Auto-scaling', 'Gaming workloads', 'AI model serving']
        },
        {
          name: 'WeChat AI Services',
          description: 'AI services integrated with WeChat ecosystem for mini-programs and bots',
          features: ['Chatbots', 'Image recognition', 'Voice processing', 'Natural language understanding']
        }
      ]
    },

    // Pricing structure
    pricing: {
      summary: 'Competitive per-second billing with reserved subscriptions and spot instances, published in both CNY and USD',
      models: [
        {
          type: 'On-Demand (Per-Second)',
          description: 'Flexible per-second billing for variable workloads with no minimum commitment',
          examples: [
            { instance: 'Tesla V100', price: '$2-3/hour', savings: 'Perfect for development and testing' },
            { instance: 'Tesla T4', price: '$1-2/hour', savings: 'Cost-effective for inference workloads' },
            { instance: 'NVIDIA A100', price: '$4-5/hour', savings: 'Premium performance for training' }
          ]
        },
        {
          type: 'Reserved Subscription',
          description: 'Monthly and yearly subscriptions with significant discounts for predictable workloads',
          examples: [
            { instance: '1-year subscription', price: 'Up to 30% savings', savings: 'Good for steady workloads' },
            { instance: '3-year subscription', price: 'Up to 50% savings', savings: 'Maximum long-term savings' }
          ]
        },
        {
          type: 'Spot Instances',
          description: 'Heavily discounted instances for fault-tolerant batch processing workloads',
          examples: [
            { instance: 'Spot GPU instances', price: 'Up to 70% off on-demand', savings: 'Ideal for training and batch jobs' }
          ],
          note: 'Spot instances can be interrupted but offer substantial cost savings'
        }
      ],
      recentChanges: {
        announcement: 'Competitive pricing strategy with dual currency support',
        details: [
          'Pricing published in both Chinese Yuan (CNY) and US Dollars (USD)',
          'Regular promotional pricing for gaming and video AI workloads',
          'Volume discounts for enterprise gaming companies',
          'Special pricing for WeChat ecosystem developers'
        ]
      }
    },

    // Unique features
    uniqueFeatures: {
      networking: [
        {
          name: 'Tencent Ecosystem Integration',
          description: 'Deep integration with WeChat, QQ, and Tencent Gaming platforms',
          benefit: 'Seamless access to Tencent\'s massive user base and social platforms',
          capability: 'Direct API integration with WeChat mini-programs and QQ services'
        },
        {
          name: 'Gaming-Optimized Network',
          description: 'Specialized network infrastructure optimized for gaming and real-time applications',
          benefit: 'Ultra-low latency for gaming AI and real-time multiplayer experiences'
        }
      ],
      dataStorage: [
        {
          name: 'Gaming Data Lake',
          description: 'Specialized storage solutions for gaming analytics and player data',
          integration: 'Optimized for game telemetry, player behavior analysis, and game asset storage'
        },
        {
          name: 'Social Media Storage',
          description: 'High-performance storage for social media content and user-generated data',
          performance: 'Optimized for WeChat and QQ multimedia content processing'
        }
      ],
      orchestration: [
        {
          name: 'Container-Based AI Inference',
          description: 'Tencent Kubernetes Engine with specialized GPU container scheduling',
          features: ['Gaming workload optimization', 'AI model serving', 'Auto-scaling for social apps']
        },
        {
          name: 'Gaming AI Orchestration',
          description: 'Specialized orchestration tools for game AI deployment and management',
          capabilities: ['Real-time AI serving', 'Game server integration', 'Player experience optimization']
        }
      ],
      aiTools: [
        {
          name: 'Tencent AI Open Platform',
          description: 'Comprehensive AI services platform with pre-trained models and APIs',
          frameworks: ['Computer Vision', 'Speech Recognition', 'Natural Language Processing', 'Gaming AI']
        },
        {
          name: 'WeChat AI Integration',
          description: 'Native AI services integration for WeChat ecosystem development',
          features: ['Mini-program AI', 'Chatbot framework', 'Social AI services']
        },
        {
          name: 'Gaming AI Suite',
          description: 'Specialized AI tools and services for game development and operations',
          features: ['Player behavior AI', 'Anti-cheat systems', 'Game content generation', 'Matchmaking optimization']
        }
      ]
    },

    // Global presence
    globalFootprint: {
      regions: 27,
      availabilityZones: 70,
      edge: '1,800+ edge nodes',
      gpuRegions: ['China', 'Asia Pacific', 'North America', 'Europe', 'Southeast Asia']
    },

    // Strengths and considerations
    strengths: [
      'Deep integration with Tencent ecosystem (WeChat, QQ) provides unique market access',
      'Specialized gaming and video AI services with industry-leading performance',
      'Competitive pricing with per-second billing and aggressive spot instance discounts',
      'Strong presence in Chinese market with local compliance and support',
      'Container-based AI inference with Kubernetes optimization for gaming workloads'
    ],
    considerations: [
      'Primary focus on Chinese market may limit global enterprise adoption',
      'Regulatory considerations for data residency outside of China',
      'Limited availability of latest GPU generations compared to AWS/Azure/GCP',
      'Ecosystem benefits primarily valuable for companies targeting Chinese users'
    ]
  },

  {
    id: 8,
    name: 'DigitalOcean',
    shortName: 'DO',
    type: 'Specialized AI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg',
    website: 'https://www.digitalocean.com',
    description: 'Developer-friendly cloud platform with Paperspace GPU offerings, ideal for startups and small teams needing accessible AI infrastructure',
    
    // Rating metrics
    performance: 7.8,
    pricingScore: 9.2,
    availability: 8.0,
    easeOfUse: 9.5,
    
    // Hardware specifications
    hardware: {
      gpus: [
        {
          category: 'Professional NVIDIA GPUs',
          models: [
            { name: 'NVIDIA H100', instances: ['H100 VMs'], performance: '80GB HBM3 memory for cutting-edge AI training and research' },
            { name: 'NVIDIA V100', instances: ['V100 VMs'], performance: '16GB HBM2 memory for deep learning training and inference' },
            { name: 'NVIDIA RTX 4000', instances: ['RTX VMs'], performance: '20GB GDDR6 memory for professional AI workstation tasks' }
          ]
        },
        {
          category: 'Mid-Range GPUs',
          models: [
            { name: 'Tesla P6000', instances: ['P6000 VMs'], performance: '24GB GDDR5X memory for development and moderate training' },
            { name: 'Tesla P5000', instances: ['P5000 VMs'], performance: '16GB GDDR5X memory for AI development and prototyping' },
            { name: 'Tesla P4000', instances: ['P4000 VMs'], performance: '8GB GDDR5 memory for entry-level AI development' }
          ]
        }
      ],
      customChips: [
        {
          name: 'Paperspace Optimization',
          purpose: 'Developer Experience',
          instances: ['Gradient notebooks', 'Gradient deployments'],
          performance: 'Optimized software stack and development environment for AI/ML workflows',
          details: 'Paperspace-optimized infrastructure with pre-configured AI development environments'
        }
      ],
      cpus: [
        {
          name: 'Intel Xeon',
          generations: ['Skylake', 'Cascade Lake'],
          performance: 'Balanced CPU performance optimized for development workloads'
        },
        {
          name: 'AMD EPYC',
          generations: ['2nd Gen'],
          performance: 'Cost-effective processors for AI development and small-scale training'
        }
      ]
    },

    // AI Applications and use cases
    aiApplications: {
      largeScale: [
        {
          name: 'Small-Scale Distributed Training',
          instances: ['H100 VMs', 'V100 clusters'],
          description: 'Distributed training for small to medium-sized models and research projects',
          useCase: 'Academic research, startup model development, and prototype training'
        },
        {
          name: 'Development and Testing',
          instances: ['P6000', 'RTX 4000'],
          description: 'AI model development, testing, and validation workflows',
          useCase: 'Model prototyping, algorithm development, and proof-of-concept projects'
        }
      ],
      generalPurpose: [
        {
          name: 'ML Development Workstations',
          instances: ['P5000', 'P4000'],
          description: 'GPU-powered development environments for machine learning projects',
          useCase: 'Data science workflows, model experimentation, and development environments'
        },
        {
          name: 'Model Inference and Serving',
          instances: ['RTX 4000', 'V100'],
          description: 'Cost-effective model serving and inference for production applications',
          useCase: 'API endpoints, real-time inference, and small-scale production deployments'
        }
      ],
      managedServices: [
        {
          name: 'Gradient Notebooks',
          description: 'Jupyter-based development environment with pre-configured AI frameworks',
          features: ['One-click setup', 'Pre-installed libraries', 'Collaboration tools', 'Version control integration']
        },
        {
          name: 'Gradient Deployments',
          description: 'Simple model deployment platform for serving AI models in production',
          features: ['Auto-scaling', 'API endpoints', 'Monitoring', 'A/B testing']
        },
        {
          name: 'Paperspace Core',
          description: 'Virtual desktop infrastructure with GPU acceleration for AI development',
          features: ['Remote workstations', 'Persistent storage', 'Team collaboration', 'Custom environments']
        }
      ]
    },

    // Pricing structure
    pricing: {
      summary: 'Straightforward hourly and monthly billing with transparent pricing, ideal for startups and small teams',
      models: [
        {
          type: 'Hourly Billing',
          description: 'Simple per-hour pricing with no hidden fees or complex billing structures',
          examples: [
            { instance: 'Tesla P5000', price: '$0.78/hour', savings: 'Perfect for development and testing' },
            { instance: 'Tesla P6000', price: '$1.10/hour', savings: 'Good for moderate training workloads' },
            { instance: 'Tesla V100 16GB', price: '$2.30/hour', savings: 'Professional training and inference' },
            { instance: 'NVIDIA H100 80GB', price: '$5.95/hour', savings: 'Premium performance for research' }
          ]
        },
        {
          type: 'Monthly Commitments',
          description: 'Discounted monthly rates for predictable workloads with volume discounts',
          examples: [
            { instance: 'Monthly plans', price: 'Up to 20% savings', savings: 'Good for steady development work' },
            { instance: '3-year commitments', price: 'Significant reductions', savings: 'Maximum long-term savings' }
          ]
        },
        {
          type: 'Developer-Friendly Features',
          description: 'No charges for data egress below thresholds and simple CPU instance pricing',
          examples: [
            { instance: 'Data egress', price: 'Free below thresholds', savings: 'No surprise bandwidth charges' },
            { instance: 'Storage', price: 'Competitive rates', savings: 'Transparent storage pricing' }
          ],
          note: 'No complex pricing tiers or enterprise contracts required'
        }
      ],
      recentChanges: {
        announcement: 'Focus on transparent, developer-friendly pricing',
        details: [
          'No hidden fees or complex billing structures',
          'Free data egress allowances for development workflows',
          'Volume discounts available for growing teams',
          'Student and academic discounts available'
        ]
      }
    },

    // Unique features
    uniqueFeatures: {
      networking: [
        {
          name: 'Developer-Friendly Networking',
          description: 'Simple networking with no complex configuration required',
          benefit: 'Easy setup for development teams without extensive cloud expertise',
          capability: 'Pre-configured networking for common AI/ML workflows'
        },
        {
          name: 'Integrated Storage Solutions',
          description: 'Seamless integration between compute and storage for AI workloads',
          benefit: 'Simplified data management for machine learning pipelines'
        }
      ],
      dataStorage: [
        {
          name: 'Development-Optimized Storage',
          description: 'Storage solutions optimized for AI development workflows and data science',
          integration: 'Direct integration with Gradient notebooks and development environments'
        },
        {
          name: 'Collaborative Data Management',
          description: 'Team-friendly data management with sharing and version control features',
          performance: 'Optimized for collaborative AI development and experimentation'
        }
      ],
      orchestration: [
        {
          name: 'Gradient Workflows',
          description: 'Simple orchestration platform for AI/ML pipelines and experiments',
          features: ['Experiment tracking', 'Pipeline automation', 'Resource management']
        },
        {
          name: 'Docker Environment Integration',
          description: 'Native Docker support with pre-built AI/ML containers',
          capabilities: ['Custom environments', 'Reproducible builds', 'Easy deployment']
        }
      ],
      aiTools: [
        {
          name: 'Gradient Platform',
          description: 'Complete AI/ML development platform with notebooks, deployments, and workflows',
          frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Hugging Face']
        },
        {
          name: 'One-Click AI Environments',
          description: 'Pre-configured development environments for popular AI frameworks',
          features: ['Instant setup', 'Pre-installed libraries', 'Optimized configurations']
        },
        {
          name: 'Team Collaboration Tools',
          description: 'Built-in collaboration features for AI development teams',
          features: ['Shared workspaces', 'Project management', 'Version control', 'Team billing']
        }
      ]
    },

    // Global presence
    globalFootprint: {
      regions: 14,
      availabilityZones: 14,
      edge: 'Multiple data centers',
      gpuRegions: ['North America', 'Europe', 'Asia Pacific', 'Australia']
    },

    // Strengths and considerations
    strengths: [
      'Extremely user-friendly platform ideal for startups and small teams',
      'Transparent, straightforward pricing with no hidden fees or complex contracts',
      'Excellent developer experience with Gradient notebooks and one-click setup',
      'Strong focus on AI/ML workflows with pre-configured environments',
      'Good selection of professional GPU options from P4000 to H100'
    ],
    considerations: [
      'Not suitable for massive enterprise-scale training clusters',
      'Limited ecosystem compared to major cloud providers (AWS, Azure, GCP)',
      'Smaller global footprint may limit regional availability',
      'Primary focus on development workflows rather than production-scale deployments'
    ]
  },

  {
    id: 9,
    name: 'NERSC Perlmutter',
    shortName: 'NERSC',
    type: 'Academic/HPC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Berkeley_Lab_Logo.svg',
    website: 'https://www.nersc.gov',
    description: 'National Energy Research Scientific Computing Center flagship supercomputer with 6,000+ A100 GPUs for scientific AI research',
    
    // Rating metrics
    performance: 9.8,
    pricingScore: 10.0, // Free for approved research
    availability: 7.5,  // Limited to approved projects
    easeOfUse: 7.0,
    
    // Hardware specifications
    hardware: {
      gpus: [
        {
          category: 'NVIDIA A100 Clusters',
          models: [
            { name: 'NVIDIA A100 40GB', instances: ['1,536 nodes × 4 GPUs'], performance: '6,144 A100 40GB GPUs for large-scale scientific computing' },
            { name: 'NVIDIA A100 80GB', instances: ['256 nodes × 4 GPUs'], performance: '1,024 A100 80GB GPUs for memory-intensive AI workloads' }
          ]
        },
        {
          category: 'Future Upgrades',
          models: [
            { name: 'NVIDIA H100 (Planned)', instances: ['Perlmutter+ upgrade'], performance: 'Future H100 upgrades planned for next-generation AI capabilities' }
          ]
        }
      ],
      customChips: [
        {
          name: 'HPE Cray EX Supercomputer',
          purpose: 'Scientific HPC',
          instances: ['Perlmutter system'],
          performance: 'Custom HPE Cray EX architecture optimized for scientific computing workloads',
          details: 'Purpose-built supercomputer architecture with high-speed interconnects for AI and HPC'
        }
      ],
      cpus: [
        {
          name: 'AMD EPYC 7763',
          generations: ['Milan (3rd Gen)'],
          performance: '3,072 CPU-only nodes with 64-core processors for CPU-based scientific computing'
        }
      ]
    },

    // AI Applications and use cases
    aiApplications: {
      largeScale: [
        {
          name: 'Climate and Weather Modeling',
          instances: ['GPU nodes', 'CPU+GPU hybrid'],
          description: 'Large-scale climate simulations with AI acceleration for weather prediction',
          useCase: 'Climate research, extreme weather prediction, and environmental modeling'
        },
        {
          name: 'Materials Science AI',
          instances: ['A100 80GB nodes'],
          description: 'AI-accelerated materials discovery and quantum mechanics simulations',
          useCase: 'New materials research, quantum computing simulations, and energy applications'
        }
      ],
      generalPurpose: [
        {
          name: 'Scientific Machine Learning',
          instances: ['A100 clusters'],
          description: 'Mixed precision ML/HPC for accelerated physics and scientific discovery',
          useCase: 'Physics-informed neural networks, scientific data analysis, and research'
        },
        {
          name: 'Genomics and Life Sciences',
          instances: ['GPU+CPU nodes'],
          description: 'Large-scale genomics analysis and bioinformatics with AI acceleration',
          useCase: 'Genomic research, protein folding, and computational biology'
        }
      ],
      managedServices: [
        {
          name: 'NERSC User Services',
          description: 'Comprehensive support for scientific computing and AI research projects',
          features: ['User consulting', 'Training programs', 'Software optimization', 'Data management']
        },
        {
          name: 'Perlmutter AI Frameworks',
          description: 'Pre-installed and optimized AI frameworks for scientific computing',
          features: ['TensorFlow', 'PyTorch', 'JAX', 'Horovod', 'DeepSpeed']
        },
        {
          name: 'Data Transfer Services',
          description: 'High-speed data transfer via Globus and other scientific data platforms',
          features: ['Globus integration', 'High-throughput transfers', 'Data archiving', 'Collaboration tools']
        }
      ]
    },

    // Pricing structure
    pricing: {
      summary: 'Free allocation-based access for approved US academic and DOE research projects',
      models: [
        {
          type: 'DOE INCITE Program',
          description: 'Large-scale allocations for computationally intensive research projects',
          examples: [
            { instance: 'INCITE allocation', price: 'Free', savings: 'Millions of node-hours for major projects' },
            { instance: 'Multi-year projects', price: 'No cost', savings: 'Multi-million dollar equivalent value' }
          ]
        },
        {
          type: 'ALCC Program',
          description: 'ASCR Leadership Computing Challenge for high-impact scientific computing',
          examples: [
            { instance: 'ALCC allocation', price: 'Free', savings: 'Significant compute hours for breakthrough research' }
          ]
        },
        {
          type: 'Director\'s Discretionary',
          description: 'Smaller allocations for exploratory research and urgent computing needs',
          examples: [
            { instance: 'Discretionary hours', price: 'No charge', savings: 'Perfect for proof-of-concept research' }
          ],
          note: 'All access requires competitive proposal process and peer review'
        }
      ],
      recentChanges: {
        announcement: 'World-class scientific computing infrastructure provided free to researchers',
        details: [
          'No direct costs to approved researchers and institutions',
          'Competitive allocation process ensures high-impact research',
          'Training and consulting provided at no additional cost',
          'Data storage and transfer services included'
        ]
      }
    },

    // Unique features
    uniqueFeatures: {
      networking: [
        {
          name: 'HPE Slingshot Interconnect',
          description: 'Ultra-high-speed networking optimized for large-scale parallel computing',
          benefit: 'Exceptional performance for distributed AI training and scientific simulations',
          capability: 'Low-latency, high-bandwidth interconnect for massive parallel workloads'
        },
        {
          name: 'Scientific Data Networks',
          description: 'Specialized networking for scientific data collaboration and sharing',
          benefit: 'Seamless integration with national scientific data infrastructure'
        }
      ],
      dataStorage: [
        {
          name: 'Perlmutter File System',
          description: 'High-performance parallel file system optimized for scientific workloads',
          integration: 'Integrated with scientific data management and analysis workflows'
        },
        {
          name: 'National Scientific Data Grid',
          description: 'Connection to national scientific data repositories and archives',
          performance: 'High-throughput data access for large-scale scientific datasets'
        }
      ],
      orchestration: [
        {
          name: 'Scientific Workflow Management',
          description: 'Specialized job scheduling and resource management for scientific computing',
          features: ['SLURM job scheduler', 'Scientific workflow support', 'Resource optimization']
        },
        {
          name: 'AI+HPC Integration',
          description: 'Seamless integration between traditional HPC and AI workloads',
          capabilities: ['Mixed precision computing', 'Hybrid CPU+GPU scheduling', 'Scientific AI optimization']
        }
      ],
      aiTools: [
        {
          name: 'NERSC AI Frameworks',
          description: 'Optimized AI frameworks specifically tuned for scientific computing',
          frameworks: ['Scientific PyTorch', 'TensorFlow Scientific', 'JAX for Science', 'Distributed training tools']
        },
        {
          name: 'Scientific Computing Libraries',
          description: 'Comprehensive libraries for scientific AI and computational research',
          features: ['SciPy ecosystem', 'Scientific visualization', 'Domain-specific libraries']
        },
        {
          name: 'User Support and Training',
          description: 'Extensive training programs and consulting for scientific AI applications',
          features: ['AI workshops', 'One-on-one consulting', 'Best practices documentation', 'Community forums']
        }
      ]
    },

    // Global presence
    globalFootprint: {
      regions: 1,
      availabilityZones: 1,
      edge: 'Berkeley National Laboratory',
      gpuRegions: ['California, USA']
    },

    // Strengths and considerations
    strengths: [
      'World-class scientific computing infrastructure with 6,000+ A100 GPUs',
      'Completely free access for approved research projects (multi-million dollar value)',
      'Specialized for scientific AI and mixed-precision HPC workloads',
      'Exceptional support, training, and consulting for scientific computing',
      'Direct access to leading-edge hardware and software optimizations'
    ],
    considerations: [
      'Access limited to approved academic and DOE research projects only',
      'Competitive allocation process with peer review requirements',
      'Queue-based scheduling may not suit commercial development timelines',
      'US-based access primarily, with some international collaborations'
    ]
  },

  {
    id: 10,
    name: 'NVIDIA Cambridge-1',
    shortName: 'Cambridge-1',
    type: 'Academic/HPC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
    website: 'https://www.nvidia.com/en-gb/industries/healthcare-life-sciences/cambridge-1/',
    description: 'NVIDIA-operated UK supercomputer dedicated to healthcare and life sciences research with 640 A100 GPUs',
    
    // Rating metrics
    performance: 9.5,
    pricingScore: 9.0, // Mix of free academic and paid enterprise access
    availability: 8.0,
    easeOfUse: 8.5,
    
    // Hardware specifications
    hardware: {
      gpus: [
        {
          category: 'NVIDIA DGX A100 Systems',
          models: [
            { name: 'NVIDIA A100 40GB', instances: ['80 DGX A100 systems'], performance: '640 A100 40GB GPUs in dedicated DGX systems' }
          ]
        }
      ],
      customChips: [
        {
          name: 'NVIDIA DGX Architecture',
          purpose: 'AI Research',
          instances: ['DGX A100 systems'],
          performance: 'Purpose-built DGX systems optimized for AI training and inference',
          details: 'Complete DGX stack with NVLink, NVSwitch, and optimized AI software'
        },
        {
          name: 'BlueField-2 DPUs',
          purpose: 'Data Processing',
          instances: ['Integrated in each DGX'],
          performance: 'Data processing units for intelligent data offload and acceleration',
          details: 'SmartNICs with ARM cores for data center infrastructure acceleration'
        }
      ],
      cpus: [
        {
          name: 'AMD EPYC (in DGX)',
          generations: ['Milan'],
          performance: 'High-performance CPUs integrated within DGX A100 systems'
        }
      ]
    },

    // AI Applications and use cases
    aiApplications: {
      largeScale: [
        {
          name: 'Drug Discovery and Development',
          instances: ['DGX clusters'],
          description: 'Large-scale molecular modeling, drug screening, and pharmaceutical research',
          useCase: 'New drug discovery, clinical trial optimization, and pharmaceutical AI'
        },
        {
          name: 'Medical Imaging AI',
          instances: ['A100 systems'],
          description: 'Advanced medical imaging analysis, radiology AI, and diagnostic models',
          useCase: 'Medical image analysis, diagnostic AI, and healthcare imaging research'
        }
      ],
      generalPurpose: [
        {
          name: 'Genomics and Bioinformatics',
          instances: ['DGX systems'],
          description: 'Large-scale genomic analysis, protein folding, and computational biology',
          useCase: 'Genomic research, personalized medicine, and biological data analysis'
        },
        {
          name: 'Healthcare AI Research',
          instances: ['A100 clusters'],
          description: 'General healthcare AI research and life sciences applications',
          useCase: 'Healthcare innovation, medical AI development, and life sciences research'
        }
      ],
      managedServices: [
        {
          name: 'NVIDIA Cambridge-1 Platform',
          description: 'Complete AI platform optimized for healthcare and life sciences research',
          features: ['NVIDIA AI software stack', 'Healthcare-specific tools', 'Research collaboration platform']
        },
        {
          name: 'Healthcare AI Frameworks',
          description: 'Specialized AI frameworks and tools for medical and life sciences applications',
          features: ['NVIDIA Clara', 'Modulus for digital biology', 'RAPIDS for genomics', 'Medical imaging tools']
        },
        {
          name: 'UK Research Network',
          description: 'Dedicated network connectivity for UK healthcare and academic institutions',
          features: ['NHS connectivity', 'Academic partnerships', 'Secure data handling', 'Compliance support']
        }
      ]
    },

    // Pricing structure
    pricing: {
      summary: 'Mixed access model with free academic use and paid enterprise partnerships, focused on UK research',
      models: [
        {
          type: 'Academic Research Access',
          description: 'Free access for approved UK academic and healthcare research projects',
          examples: [
            { instance: 'University research', price: 'Free', savings: 'Full DGX system access for approved projects' },
            { instance: 'NHS research', price: 'No cost', savings: 'Healthcare research collaboration' }
          ]
        },
        {
          type: 'Enterprise Partnerships',
          description: 'Paid access for pharmaceutical and healthcare companies',
          examples: [
            { instance: 'Pharma partnerships', price: 'Custom pricing', savings: 'Priority access with dedicated resources' },
            { instance: 'Healthcare enterprises', price: 'Partnership-based', savings: 'Collaborative research agreements' }
          ]
        },
        {
          type: 'Startup and Innovation',
          description: 'Special access programs for UK startups and innovation projects',
          examples: [
            { instance: 'Healthcare startups', price: 'Subsidized rates', savings: 'Access to world-class AI infrastructure' }
          ],
          note: 'Focus on fostering UK AI innovation in healthcare sector'
        }
      ],
      recentChanges: {
        announcement: 'First external research supercomputer operated by NVIDIA',
        details: [
          'Designed specifically for external research access',
          'Focus on UK healthcare and life sciences ecosystem',
          'Partnerships with major UK institutions and NHS',
          'Balance of academic access and commercial collaboration'
        ]
      }
    },

    // Unique features
    uniqueFeatures: {
      networking: [
        {
          name: 'HDR InfiniBand Interconnect',
          description: 'High-speed InfiniBand networking optimized for AI workloads',
          benefit: 'Ultra-low latency for distributed training and large-scale AI models',
          capability: 'Optimized for multi-node AI training and inference'
        },
        {
          name: 'UK Healthcare Network Integration',
          description: 'Specialized connectivity to UK healthcare and research institutions',
          benefit: 'Secure, compliant access for sensitive healthcare data and research'
        }
      ],
      dataStorage: [
        {
          name: 'Healthcare-Compliant Storage',
          description: 'Secure storage infrastructure meeting healthcare and medical research requirements',
          integration: 'Compliant with UK healthcare data regulations and security standards'
        },
        {
          name: 'Research Data Management',
          description: 'Specialized data management for collaborative healthcare research',
          performance: 'High-performance storage optimized for medical imaging and genomics data'
        }
      ],
      orchestration: [
        {
          name: 'NVIDIA AI Enterprise Stack',
          description: 'Complete enterprise-grade AI software stack optimized for research',
          features: ['NVIDIA Base Command', 'AI frameworks', 'Container orchestration']
        },
        {
          name: 'Healthcare Research Workflows',
          description: 'Specialized workflow management for healthcare and life sciences research',
          capabilities: ['Medical data pipelines', 'Regulatory compliance', 'Multi-institutional collaboration']
        }
      ],
      aiTools: [
        {
          name: 'NVIDIA Clara Platform',
          description: 'Comprehensive AI platform for healthcare and medical imaging applications',
          frameworks: ['Clara Train', 'Clara Deploy', 'Clara Discovery', 'Medical imaging AI']
        },
        {
          name: 'Life Sciences AI Suite',
          description: 'Specialized tools for drug discovery, genomics, and biological research',
          features: ['Molecular modeling', 'Protein folding', 'Drug screening', 'Genomics analysis']
        },
        {
          name: 'Research Collaboration Platform',
          description: 'Tools and platforms for collaborative healthcare AI research',
          features: ['Multi-institutional access', 'Secure data sharing', 'Research project management']
        }
      ]
    },

    // Global presence
    globalFootprint: {
      regions: 1,
      availabilityZones: 1,
      edge: 'Cambridge, UK',
      gpuRegions: ['United Kingdom']
    },

    // Strengths and considerations
    strengths: [
      'World\'s first external research supercomputer operated by NVIDIA',
      'Dedicated focus on healthcare and life sciences with 640 A100 GPUs',
      'Direct access to latest NVIDIA AI software and hardware optimizations',
      'Strong partnerships with UK healthcare system and academic institutions',
      'Specialized for medical AI, drug discovery, and genomics research'
    ],
    considerations: [
      'Access primarily focused on UK-based research and healthcare projects',
      'Limited to healthcare and life sciences applications',
      'Competitive access for academic projects, partnership requirements for commercial use',
      'Specialized use case may not suit general-purpose AI development'
    ]
  }
];

export const metrics = {
  totalProviders: computeProviders.length,
  averagePerformance: Math.round((computeProviders.reduce((sum, provider) => sum + provider.performance, 0) / computeProviders.length) * 10) / 10,
  averagePricing: Math.round((computeProviders.reduce((sum, provider) => sum + provider.pricingScore, 0) / computeProviders.length) * 10) / 10,
  averageAvailability: Math.round((computeProviders.reduce((sum, provider) => sum + provider.availability, 0) / computeProviders.length) * 10) / 10,
  averageEaseOfUse: Math.round((computeProviders.reduce((sum, provider) => sum + provider.easeOfUse, 0) / computeProviders.length) * 10) / 10
};

export const insights = [
  {
    id: 1,
    title: 'Cloud Giants Lead AI Infrastructure Market',
    description: 'Four major cloud providers offer comprehensive AI/ML platforms with distinct specializations',
    impact: 'High',
    projects: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform', 'IBM Cloud'],
    details: 'Each provider brings unique strengths: AWS scale, Azure enterprise integration, Google TPUs, IBM security'
  },
  {
    id: 2,
    title: 'Specialized AI Hardware Innovation',
    description: 'Beyond traditional GPUs, cloud providers invest in custom AI accelerators for competitive advantage',
    impact: 'High',
    projects: ['Google Cloud Platform', 'Amazon Web Services', 'IBM Cloud'],
    details: 'Google TPUs, AWS Inferentia/Trainium, and IBM POWER processors offer alternatives to NVIDIA GPUs'
  },
  {
    id: 3,
    title: 'Enterprise Security and Compliance Focus',
    description: 'Cloud providers emphasize security, compliance, and hybrid capabilities for enterprise AI adoption',
    impact: 'Medium',
    projects: ['IBM Cloud', 'Microsoft Azure', 'Amazon Web Services'],
    details: 'IBM leads in regulated industries, Azure offers Microsoft integration, AWS provides comprehensive enterprise tools'
  }
];