import React, { useState } from 'react';
import { 
  BarChart3, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Code, 
  Database, 
  Globe, 
  Settings,
  FileText,
  TrendingUp,
  Shield,
  Zap,
  ChevronDown,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

// Report data structure
const reportData = {
  executiveSummary: {
    title: "Longest Tail Check-in System",
    subtitle: "Development Progress Report",
    overview: "Longest Tail is a check-in system designed to help teams track progress, manage tasks, and maintain accountability through regular check-ins and status updates.",
    keyMetrics: {
      components: 3,
      features: 8,
      technologies: 5,
      integrations: 2
    }
  },
  
  architecture: {
    components: [
      {
        name: "Frontend Application",
        technology: "React + Tailwind CSS",
        database: "Local State Management",
        features: ["Check-in Interface", "Progress Tracking", "Status Dashboard"],
        status: "in-progress"
      },
      {
        name: "Backend API",
        technology: "Node.js + Express",
        database: "JSON File Storage",
        features: ["Check-in Storage", "User Management", "Data Persistence"],
        status: "pending"
      },
      {
        name: "Database Layer",
        technology: "SQLite or PostgreSQL",
        database: "Relational Database",
        features: ["User Data", "Check-in History", "Team Management"],
        status: "pending"
      }
    ]
  },

  features: {
    completed: [
      "Basic React application structure",
      "Tailwind CSS styling setup",
      "Component architecture planning",
      "Git repository initialization"
    ],
    inProgress: [
      "Check-in form interface",
      "User authentication system",
      "Data persistence layer",
      "Progress tracking dashboard"
    ],
    planned: [
      "Team management features",
      "Notification system",
      "Reporting and analytics",
      "Mobile responsiveness"
    ]
  },

  codingMetrics: {
    overview: {
      totalFiles: 63707,
      sourceFiles: 591,
      totalLOC: 60338,
      averageLinesPerFile: 203.8,
      functions: 8170,
      exports: 1263,
      imports: 2685,
      typeDefinitions: 1449,
      technicalDebt: 5
    },
    
    fileTypes: {
      typescript: { count: 322, percentage: 54.5 },
      tsx: { count: 259, percentage: 43.8 },
      javascript: { count: 10, percentage: 1.7 }
    },
    
    largestFiles: [
      { name: "openapi.d.ts", lines: 3447, description: "Auto-generated API types" },
      { name: "admin.ts", lines: 1365, description: "Admin routes" },
      { name: "client.controller.ts", lines: 919, description: "Client management" },
      { name: "sidebar.tsx", lines: 763, description: "UI component" },
      { name: "vercel-api/types.ts", lines: 747, description: "API types" }
    ],
    
    dependencies: {
      production: 189,
      development: 79,
      total: 268,
      byComponent: [
        { name: "API Server", prod: 59, dev: 28, total: 87 },
        { name: "Agency Portal", prod: 44, dev: 11, total: 55 },
        { name: "Admin Portal", prod: 42, dev: 15, total: 57 },
        { name: "Site Template", prod: 25, dev: 21, total: 46 },
        { name: "Project Status Site", prod: 16, dev: 0, total: 16 },
        { name: "Site Deployment Server", prod: 3, dev: 4, total: 7 }
      ]
    },
    
    patterns: {
      asyncFunctions: 732,
      awaitUsage: 1363,
      reactHooks: 328,
      consoleStatements: 518,
      testFiles: 16
    },
    
    quality: {
      typescriptAdoption: 98.3,
      averageFileSize: 203.8,
      functionDensity: 13.5,
      importExportRatio: 2.13
    }
  },

  recommendations: {
    immediate: [
      "Build check-in form component",
      "Implement user authentication",
      "Set up data persistence",
      "Create basic dashboard layout"
    ],
    mediumTerm: [
      "Add team management features",
      "Implement notification system",
      "Build reporting functionality",
      "Add mobile responsiveness"
    ],
    longTerm: [
      "Advanced analytics and insights",
      "Integration with external tools",
      "Real-time collaboration features",
      "Advanced user management"
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
    warning: { class: "status-warning", icon: AlertTriangle, text: "Needs Attention" },
    pending: { class: "status-pending", icon: Clock, text: "Pending" }
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
                  <Code className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {reportData.executiveSummary.keyMetrics.components}
                    </div>
                    <div className="text-sm text-primary-700">Components</div>
                  </div>
                </div>
              </div>
              
              <div className="metric-card">
                <div className="flex items-center">
                  <Database className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {reportData.executiveSummary.keyMetrics.endpoints}+
                    </div>
                    <div className="text-sm text-primary-700">API Endpoints</div>
                  </div>
                </div>
              </div>
              
              <div className="metric-card">
                <div className="flex items-center">
                  <Settings className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {reportData.executiveSummary.keyMetrics.technologies}
                    </div>
                    <div className="text-sm text-primary-700">Technologies</div>
                  </div>
                </div>
              </div>
              
              <div className="metric-card">
                <div className="flex items-center">
                  <ExternalLink className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-primary-900">
                      {reportData.executiveSummary.keyMetrics.integrations}
                    </div>
                    <div className="text-sm text-primary-700">Integrations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="mb-8">
          <ExpandableSection title="Project Architecture Overview" defaultOpen={true}>
            <div className="space-y-4">
              {reportData.architecture.components.map((component, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {component.name}
                    </h4>
                    <StatusBadge status={component.status} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Technology Stack</div>
                      <div className="text-sm text-gray-600">{component.technology}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Database</div>
                      <div className="text-sm text-gray-600">{component.database}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Key Features</div>
                    <div className="flex flex-wrap gap-2">
                      {component.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary-100 text-primary-800"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ExpandableSection>
        </section>

        {/* Features Status */}
        <section className="mb-8">
          <ExpandableSection title="Feature Implementation Status" defaultOpen={true}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  Completed Features
                </h4>
                <ul className="space-y-2">
                  {reportData.features.completed.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  In Progress
                </h4>
                <ul className="space-y-2">
                  {reportData.features.inProgress.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Clock className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                  Planned Features
                </h4>
                <ul className="space-y-2">
                  {reportData.features.planned.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ExpandableSection>
        </section>

        {/* Coding Metrics */}
        <section className="mb-8">
          <ExpandableSection title="Repository Coding Metrics" defaultOpen={true}>
            <div className="space-y-6">
              {/* Overview Metrics */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Database className="h-5 w-5 mr-2 text-blue-600" />
                  Codebase Overview
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-900">
                      {reportData.codingMetrics.overview.totalLOC.toLocaleString()}
                    </div>
                    <div className="text-sm text-blue-700">Lines of Code</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-900">
                      {reportData.codingMetrics.overview.sourceFiles}
                    </div>
                    <div className="text-sm text-green-700">Source Files</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-900">
                      {reportData.codingMetrics.overview.functions.toLocaleString()}
                    </div>
                    <div className="text-sm text-purple-700">Functions</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-900">
                      {reportData.codingMetrics.overview.technicalDebt}
                    </div>
                    <div className="text-sm text-orange-700">Technical Debt</div>
                  </div>
                </div>
              </div>

              {/* File Type Distribution */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-green-600" />
                  File Type Distribution
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">TypeScript (.ts)</span>
                      <span className="text-sm text-gray-600">{reportData.codingMetrics.fileTypes.typescript.percentage}%</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {reportData.codingMetrics.fileTypes.typescript.count}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">React (.tsx)</span>
                      <span className="text-sm text-gray-600">{reportData.codingMetrics.fileTypes.tsx.percentage}%</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {reportData.codingMetrics.fileTypes.tsx.count}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">JavaScript (.js)</span>
                      <span className="text-sm text-gray-600">{reportData.codingMetrics.fileTypes.javascript.percentage}%</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {reportData.codingMetrics.fileTypes.javascript.count}
                    </div>
                  </div>
                </div>
              </div>

              {/* Largest Files */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-red-600" />
                  Largest Files
                </h4>
                <div className="space-y-2">
                  {reportData.codingMetrics.largestFiles.map((file, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">{file.name}</div>
                          <div className="text-sm text-gray-600">{file.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">{file.lines.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">lines</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dependencies by Component */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-indigo-600" />
                  Dependencies by Component
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reportData.codingMetrics.dependencies.byComponent.map((component, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-gray-900">{component.name}</h5>
                        <span className="text-sm font-medium text-gray-600">{component.total} total</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-600">Production:</span>
                          <span className="ml-1 font-medium">{component.prod}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Development:</span>
                          <span className="ml-1 font-medium">{component.dev}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Quality Metrics */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Code Quality Metrics
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {reportData.codingMetrics.quality.typescriptAdoption}%
                    </div>
                    <div className="text-sm text-gray-700">TypeScript Adoption</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {reportData.codingMetrics.quality.averageFileSize}
                    </div>
                    <div className="text-sm text-gray-700">Avg Lines/File</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {reportData.codingMetrics.patterns.asyncFunctions}
                    </div>
                    <div className="text-sm text-gray-700">Async Functions</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {reportData.codingMetrics.patterns.reactHooks}
                    </div>
                    <div className="text-sm text-gray-700">React Hooks</div>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableSection>
        </section>

        {/* Integrations */}
        <section className="mb-8">
          <ExpandableSection title="External Integrations" defaultOpen={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reportData.integrations.map((integration, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-gray-900">{integration.name}</h5>
                    <StatusBadge status={integration.status} />
                  </div>
                  <p className="text-sm text-gray-600">{integration.purpose}</p>
                </div>
              ))}
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
                The Longest Tail Check-in System represents a substantial codebase with {reportData.codingMetrics.overview.totalLOC.toLocaleString()} lines of code 
                across {reportData.codingMetrics.overview.sourceFiles} source files. The repository demonstrates excellent software engineering practices 
                with {reportData.codingMetrics.quality.typescriptAdoption}% TypeScript adoption and extremely low technical debt 
                (only {reportData.codingMetrics.overview.technicalDebt} TODO/FIXME comments).
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The codebase features a modern technology stack with React 18, Next.js 15, and comprehensive TypeScript usage. 
                With {reportData.codingMetrics.overview.functions.toLocaleString()} functions and {reportData.codingMetrics.overview.typeDefinitions} type definitions, 
                the project shows strong architectural patterns and maintainable code structure.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                While the core check-in functionality is still in development, the underlying infrastructure demonstrates 
                production-ready quality with proper separation of concerns, extensive API coverage, and modern development practices.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-500">
            Longest Tail Check-in System • Development Progress Report • {new Date().toLocaleDateString()}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

