import React, { useState } from 'react';
import { 
  BarChart3, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Code, 
  Globe, 
  Settings,
  FileText,
  TrendingUp,
  Shield,
  Zap,
  ChevronDown,
  ChevronRight,
  Monitor,
  Server,
  Palette,
  BookOpen,
  Users
} from 'lucide-react';

// Comprehensive four-property progress report data
const reportData = {
  executiveSummary: {
    title: "Longest Tail Platform",
    subtitle: "Four-Property Development Progress Report",
    overview: "Comprehensive progress report covering Frontend, Backend, Marketing Template, and Documentation across the Longest Tail AI-powered platform ecosystem.",
    keyMetrics: {
      totalCommits: 201,
      activeContributors: 8,
      totalLOC: 36812,
      totalFiles: 326,
      repositories: 5,
      properties: 4,
      testCoverage: 80,
      typescriptAdoption: 100
    }
  },
  
  properties: {
    frontend: {
      name: "Frontend Application",
      status: "in-progress",
      completion: 75,
      technology: "Next.js 15.5.3 + React 19.1.0 + Clerk + Stripe",
      description: "Attorney marketing website creation platform with complete user management",
      features: {
        completed: [
          "Complete Clerk authentication system with JWT",
          "Stripe payment integration with checkout flow",
          "User dashboard with profile management",
          "Site creation workflow with comprehensive intake forms",
          "About Us content editing with Cloudflare R2 image upload",
          "Modern responsive UI with Tailwind CSS",
          "Type-safe API integration layer",
          "Subscription management interface",
          "Site listing and management capabilities"
        ],
        inProgress: [
          "Site editing workflow completion",
          "Practice Areas configuration",
          "Additional site sections implementation",
          "Content management enhancements"
        ],
        planned: [
          "Advanced site customization",
          "Analytics and reporting dashboard",
          "SEO optimization tools",
          "Mobile app development"
        ]
      },
      metrics: {
        commits: 19,
        contributors: 3,
        linesOfCode: 5653,
        files: 58,
        typescriptAdoption: 100,
        featuresCompleted: 7
      },
      recentActivity: "September-October 2024: Peak development activity with payment integration"
    },
    
    backend: {
      name: "Backend API Services",
      status: "completed", 
      completion: 95,
      technology: "NestJS 11.x + PostgreSQL + Prisma + Redis",
      description: "Production-ready NestJS API with comprehensive legal practice management",
      features: {
        completed: [
          "Complete NestJS architecture with modular design",
          "PostgreSQL database with Prisma ORM",
          "Clerk JWT authentication with clock skew tolerance",
          "Stripe webhook processing and subscription management",
          "Attorney workspace and site management",
          "Redis caching implementation for performance",
          "Comprehensive security (Helmet, CORS, rate limiting)",
          "Webhook retry mechanisms and error handling",
          "Health check endpoints and monitoring",
          "Swagger/OpenAPI documentation"
        ],
        inProgress: [
          "Performance monitoring enhancements",
          "Advanced analytics data collection",
          "Email notification system optimization"
        ],
        planned: [
          "Microservices architecture migration",
          "Multi-region deployment",
          "Advanced reporting APIs",
          "Real-time collaboration features"
        ]
      },
      metrics: {
        commits: 100,
        contributors: 4,
        linesOfCode: 15396,
        files: 116,
        testCoverage: 80,
        lintingErrors: 0
      },
      recentActivity: "Recent Redis caching implementation and Stripe API updates"
    },
    
    marketingTemplate: {
      name: "Marketing Site Templates",
      status: "completed",
      completion: 100,
      technology: "Next.js 15 + TypeScript + Radix UI + Tailwind CSS v4",
      description: "Production-ready multi-tenant marketing website template for law firms",
      features: {
        completed: [
          "Complete multi-tenant architecture with domain resolution",
          "50+ Radix UI components with accessibility compliance",
          "Dynamic blog/news system with content management",
          "Practice areas management with detailed pages",
          "Contact form with React Hook Form and Zod validation",
          "SEO-optimized structure with dynamic metadata",
          "Google Analytics and Vercel Analytics integration",
          "Professional law firm design with customizable themes",
          "Server-side rendering with performance optimization",
          "Complete component library and design system"
        ],
        inProgress: [
          "Environment configuration for production deployment",
          "API endpoint configuration setup"
        ],
        planned: [
          "Admin dashboard for content management",
          "A/B testing framework",
          "Advanced customization options",
          "Performance monitoring integration"
        ]
      },
      metrics: {
        commits: 2,
        contributors: 1,
        linesOfCode: 7963,
        files: 86,
        components: 50,
        pages: 8
      },
      recentActivity: "Single-day development completion on October 15, 2025"
    },
    
    documentation: {
      name: "Project Documentation",
      status: "in-progress",
      completion: 40,
      technology: "Markdown + Swagger + README + Contributing Guidelines",
      description: "Comprehensive documentation across all four properties",
      features: {
        completed: [
          "Comprehensive README files for all projects",
          "Swagger/OpenAPI documentation for Backend API",
          "Setup and installation guides",
          "Contributing guidelines and development standards",
          "Architecture documentation for Backend",
          "Component documentation for Frontend and Templates"
        ],
        inProgress: [
          "User guide development for Frontend",
          "API reference completion",
          "Deployment guides for all properties",
          "Troubleshooting guides"
        ],
        planned: [
          "Video tutorials for user onboarding",
          "Best practices guide for developers",
          "Integration documentation between properties",
          "Performance optimization guides"
        ]
      },
      metrics: {
        documentationFiles: 15,
        apiDocsCoverage: 90,
        userGuides: 3,
        videoTutorials: 0,
        contributingGuides: 4
      },
      recentActivity: "Ongoing documentation updates across all properties"
    }
  },

  overallMetrics: {
    developmentActivity: {
      totalCommits: 201,
      activeContributors: 8,
      developmentPeriod: "January 2024 - Present",
      peakActivity: "August-September 2025"
    },
    codebase: {
      totalFiles: 326,
      totalLOC: 36812,
      typescriptAdoption: 100,
      testCoverage: 80,
      technicalDebt: "Medium"
    },
    team: {
      contributors: [
        { name: "mason.monu", commits: 48, role: "Lead Backend Developer" },
        { name: "masonmonu-1", commits: 30, role: "Frontend Developer" },
        { name: "sheldon.sachin", commits: 19, role: "Full Stack Developer" },
        { name: "Shushank", commits: 13, role: "Lead Frontend Developer" },
        { name: "austin.ankur", commits: 3, role: "Backend Developer" }
      ]
    },
    platform: {
      repositories: 5,
      services: 4,
      integrations: 12,
      aiAgents: 2
    }
  },

  recommendations: {
    immediate: [
      "Fix critical queue system instability (Redis memory management)",
      "Complete site editing workflow in Frontend",
      "Deploy Bull Board monitoring for queue visibility",
      "Separate queue workers to dedicated processes"
    ],
    mediumTerm: [
      "Migrate database from Hetzner to Neon for auto-scaling",
      "Decouple AI services from core business logic",
      "Implement comprehensive testing infrastructure",
      "Add advanced analytics and reporting features"
    ],
    longTerm: [
      "Complete microservices architecture migration",
      "Consider modern stack migration (Bun + Hono)",
      "Develop AI-as-a-Service offerings",
      "Implement multi-region deployment strategy"
    ]
  }
};

// Component for expandable sections
const ExpandableSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronRight className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};

// Status badge component
const StatusBadge = ({ status }) => {
  const statusConfig = {
    completed: { class: "status-completed", icon: CheckCircle, text: "Completed" },
    "in-progress": { class: "status-warning", icon: Clock, text: "In Progress" },
    pending: { class: "status-pending", icon: AlertTriangle, text: "Pending" }
  };
  
  const config = statusConfig[status] || statusConfig.pending;
  const Icon = config.icon;
  
  return (
    <span className={`status-badge ${config.class}`}>
      <Icon className="h-3 w-3 mr-1" />
      {config.text}
    </span>
  );
};

// Progress bar component
const ProgressBar = ({ percentage }) => (
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div 
      className="bg-primary-600 h-2 rounded-full transition-all duration-300" 
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

// Property card component
const PropertyCard = ({ property, icon: Icon }) => (
  <div className="card">
    <div className="card-header">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon className="h-6 w-6 mr-3 text-primary-600" />
          <h3 className="text-xl font-bold text-gray-900">{property.name}</h3>
        </div>
        <StatusBadge status={property.status} />
      </div>
      <p className="text-gray-600 mt-2">{property.description}</p>
      <div className="mt-3">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{property.completion}%</span>
        </div>
        <ProgressBar percentage={property.completion} />
      </div>
    </div>
    
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Technology Stack</h4>
        <p className="text-sm text-gray-600">{property.technology}</p>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Recent Activity</h4>
        <p className="text-sm text-gray-600">{property.recentActivity}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(property.metrics).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="text-lg font-bold text-primary-900">{value}</div>
            <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Main App component
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {reportData.executiveSummary.title}
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                {reportData.executiveSummary.subtitle}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-500">Report Generated</div>
                <div className="text-sm font-medium text-gray-900">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Executive Summary */}
        <section className="mb-8">
          <div className="card">
            <div className="card-header">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <BarChart3 className="h-6 w-6 mr-3 text-primary-600" />
                Executive Summary
              </h2>
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              {reportData.executiveSummary.overview}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="metric-card">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {reportData.executiveSummary.keyMetrics.activeContributors}
                    </div>
                    <div className="text-sm text-primary-700">Active Contributors</div>
                  </div>
                </div>
              </div>
              
              <div className="metric-card">
                <div className="flex items-center">
                  <Code className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {reportData.executiveSummary.keyMetrics.totalCommits}
                    </div>
                    <div className="text-sm text-primary-700">Total Commits</div>
                  </div>
                </div>
              </div>
              
              <div className="metric-card">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {reportData.executiveSummary.keyMetrics.totalLOC.toLocaleString()}
                    </div>
                    <div className="text-sm text-primary-700">Lines of Code</div>
                  </div>
                </div>
              </div>
              
              <div className="metric-card">
                <div className="flex items-center">
                  <Settings className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {reportData.executiveSummary.keyMetrics.repositories}
                    </div>
                    <div className="text-sm text-primary-700">Repositories</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="metric-card">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {reportData.executiveSummary.keyMetrics.totalFiles}
                    </div>
                    <div className="text-sm text-primary-700">Total Files</div>
                  </div>
                </div>
              </div>
              
              <div className="metric-card">
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {reportData.executiveSummary.keyMetrics.testCoverage}%
                    </div>
                    <div className="text-sm text-primary-700">Test Coverage</div>
                  </div>
                </div>
              </div>
              
              <div className="metric-card">
                <div className="flex items-center">
                  <Code className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {reportData.executiveSummary.keyMetrics.typescriptAdoption}%
                    </div>
                    <div className="text-sm text-primary-700">TypeScript</div>
                  </div>
                </div>
              </div>
              
              <div className="metric-card">
                <div className="flex items-center">
                  <Globe className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {reportData.executiveSummary.keyMetrics.properties}
                    </div>
                    <div className="text-sm text-primary-700">Properties</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Properties Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="h-6 w-6 mr-3 text-primary-600" />
            Four Properties Progress Overview
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PropertyCard property={reportData.properties.frontend} icon={Monitor} />
            <PropertyCard property={reportData.properties.backend} icon={Server} />
            <PropertyCard property={reportData.properties.marketingTemplate} icon={Palette} />
            <PropertyCard property={reportData.properties.documentation} icon={BookOpen} />
          </div>
        </section>

        {/* Detailed Property Analysis */}
        <section className="mb-8">
          <ExpandableSection title="Detailed Property Analysis" defaultOpen={true}>
            <div className="space-y-6">
              {/* Frontend Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Monitor className="h-6 w-6 mr-3 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">Frontend Application</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Completed Features
                    </h4>
                    <ul className="space-y-2">
                      {reportData.properties.frontend.features.completed.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      In Progress
                    </h4>
                    <ul className="space-y-2">
                      {reportData.properties.frontend.features.inProgress.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Clock className="h-3 w-3 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-yellow-600" />
                      Planned
                    </h4>
                    <ul className="space-y-2">
                      {reportData.properties.frontend.features.planned.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <AlertTriangle className="h-3 w-3 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Backend Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Server className="h-6 w-6 mr-3 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">Backend API Services</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Completed Features
                    </h4>
                    <ul className="space-y-2">
                      {reportData.properties.backend.features.completed.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      In Progress
                    </h4>
                    <ul className="space-y-2">
                      {reportData.properties.backend.features.inProgress.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Clock className="h-3 w-3 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-yellow-600" />
                      Planned
                    </h4>
                    <ul className="space-y-2">
                      {reportData.properties.backend.features.planned.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <AlertTriangle className="h-3 w-3 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Marketing Template Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Palette className="h-6 w-6 mr-3 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">Marketing Site Templates</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Completed Features
                    </h4>
                    <ul className="space-y-2">
                      {reportData.properties.marketingTemplate.features.completed.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      In Progress
                    </h4>
                    <ul className="space-y-2">
                      {reportData.properties.marketingTemplate.features.inProgress.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Clock className="h-3 w-3 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-yellow-600" />
                      Planned
                    </h4>
                    <ul className="space-y-2">
                      {reportData.properties.marketingTemplate.features.planned.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <AlertTriangle className="h-3 w-3 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Documentation Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 mr-3 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">Project Documentation</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Completed Features
                    </h4>
                    <ul className="space-y-2">
                      {reportData.properties.documentation.features.completed.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      In Progress
                    </h4>
                    <ul className="space-y-2">
                      {reportData.properties.documentation.features.inProgress.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Clock className="h-3 w-3 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-yellow-600" />
                      Planned
                    </h4>
                    <ul className="space-y-2">
                      {reportData.properties.documentation.features.planned.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <AlertTriangle className="h-3 w-3 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableSection>
        </section>

        {/* Development Metrics */}
        <section className="mb-8">
          <ExpandableSection title="Development Metrics & Team Activity" defaultOpen={true}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-900">
                    {reportData.overallMetrics.developmentActivity.totalCommits}
                  </div>
                  <div className="text-sm text-blue-700">Total Commits</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-900">
                    {reportData.overallMetrics.developmentActivity.activeContributors}
                  </div>
                  <div className="text-sm text-green-700">Active Contributors</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-900">
                    {reportData.overallMetrics.codebase.totalLOC.toLocaleString()}
                  </div>
                  <div className="text-sm text-purple-700">Lines of Code</div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Team Contributors</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {reportData.overallMetrics.team.contributors.map((contributor, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-gray-900">{contributor.name}</h5>
                        <span className="text-sm font-medium text-gray-600">{contributor.commits} commits</span>
                      </div>
                      <div className="text-sm text-gray-600">{contributor.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ExpandableSection>
        </section>

        {/* Recommendations */}
        <section className="mb-8">
          <ExpandableSection title="Recommendations & Next Steps" defaultOpen={true}>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-red-600" />
                  Immediate Priorities
                </h4>
                <ul className="space-y-2">
                  {reportData.recommendations.immediate.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Clock className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Medium-term Goals
                </h4>
                <ul className="space-y-2">
                  {reportData.recommendations.mediumTerm.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <TrendingUp className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-purple-600" />
                  Long-term Vision
                </h4>
                <ul className="space-y-2">
                  {reportData.recommendations.longTerm.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Globe className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ExpandableSection>
        </section>

        {/* Conclusion */}
        <section className="mb-8">
          <div className="card">
            <div className="card-header">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-green-600" />
                Project Status Summary
              </h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The Longest Tail Platform represents a sophisticated AI-powered ecosystem with {reportData.overallMetrics.codebase.totalLOC.toLocaleString()} lines of code 
                across {reportData.overallMetrics.codebase.totalFiles} files spanning {reportData.overallMetrics.platform.repositories} repositories. The project demonstrates exceptional development momentum with {reportData.overallMetrics.developmentActivity.totalCommits} commits 
                from {reportData.overallMetrics.developmentActivity.activeContributors} active contributors, showing concentrated activity in August-September 2025.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The Backend API Services lead with 95% completion, featuring a production-ready NestJS architecture with comprehensive legal practice management, Redis caching, and robust security. 
                The Marketing Templates are 100% complete with a sophisticated multi-tenant architecture and 50+ Radix UI components. 
                The Frontend Application is at 75% completion with complete authentication, payment integration, and site creation workflows.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Documentation is at 40% completion with comprehensive API documentation and setup guides. 
                Critical infrastructure issues around queue management require immediate attention, but the platform demonstrates excellent technical execution with modern architecture, comprehensive TypeScript adoption, and strong market positioning in the AI-powered content generation space.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-500">
            Longest Tail Platform • Four-Property Progress Report • {new Date().toLocaleDateString()}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

