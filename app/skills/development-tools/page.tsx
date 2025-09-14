"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe, ExternalLink, BookOpen } from 'lucide-react';
const DevelopmentToolsPage = () => {
  const technologies = [
    {
      name: "Git",
      description: "Distributed version control system for tracking changes in source code during software development.",
      experience: "Expert",
      useCases: ["Version control", "Collaboration", "Branch management", "Code history"],
      documentation: "https://git-scm.com/docs",
      projects: ["All development projects", "Open source contributions", "Team collaborations"],
      keyFeatures: ["Distributed VCS", "Branching", "Merging", "Remote repositories"],
      webThreeIntegration: "Essential for managing smart contract code, dApp development, and collaborative Web3 projects."
    },
    {
      name: "GitHub",
      description: "Web-based hosting service for Git repositories with collaboration features, issue tracking, and CI/CD integration.",
      experience: "Expert",
      useCases: ["Code hosting", "Collaboration", "Issue tracking", "CI/CD pipelines"],
      documentation: "https://docs.github.com/",
      projects: ["Portfolio hosting", "Open source projects", "Team repositories"],
      keyFeatures: ["Pull requests", "Issues", "Actions", "Pages"],
      webThreeIntegration: "Hosting Web3 projects, smart contract repositories, and collaborative blockchain development."
    },
    {
      name: "Vite",
      description: "Next-generation frontend build tool providing fast development server and optimized production builds.",
      experience: "Advanced",
      useCases: ["Fast development", "Hot module replacement", "Build optimization", "Plugin ecosystem"],
      documentation: "https://vitejs.dev/",
      projects: ["React applications", "Web3 frontends", "Component libraries"],
      keyFeatures: ["Lightning fast HMR", "ES modules", "Plugin architecture", "Optimized builds"],
      webThreeIntegration: "Ideal for building fast Web3 applications with instant feedback during smart contract integration."
    },
    {
      name: "Docker",
      description: "Containerization platform for packaging applications with their dependencies into portable containers.",
      experience: "Intermediate",
      useCases: ["Application containerization", "Development environments", "Deployment", "Microservices"],
      documentation: "https://docs.docker.com/",
      projects: ["Backend services", "Blockchain nodes", "Development environments"],
      keyFeatures: ["Containerization", "Image management", "Multi-stage builds", "Orchestration"],
      webThreeIntegration: "Containerizing blockchain nodes, Web3 backends, and ensuring consistent development environments."
    },
    {
      name: "Vercel",
      description: "Cloud platform for static sites and serverless functions, optimized for frontend frameworks like Next.js.",
      experience: "Advanced",
      useCases: ["Static site hosting", "Serverless functions", "Edge computing", "Preview deployments"],
      documentation: "https://vercel.com/docs",
      projects: ["Portfolio sites", "Web3 frontends", "Landing pages"],
      keyFeatures: ["Zero-config deployment", "Edge network", "Preview URLs", "Analytics"],
      webThreeIntegration: "Perfect for deploying Web3 frontends with fast global CDN and serverless API routes."
    },
    {
      name: "Remix IDE",
      description: "Web-based IDE for developing, testing, and deploying Ethereum smart contracts with built-in compiler and debugger.",
      experience: "Advanced",
      useCases: ["Smart contract development", "Contract testing", "Deployment", "Debugging"],
      documentation: "https://remix-ide.readthedocs.io/",
      projects: ["Smart contract prototyping", "Contract auditing", "Educational projects"],
      keyFeatures: ["Web-based IDE", "Solidity compiler", "Debugger", "Plugin system"],
      webThreeIntegration: "Primary tool for rapid smart contract development, testing, and deployment to various networks."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
            <div className="mb-12">
              <Link 
                href="/skills"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Skills
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                    Development Tools
                  </h1>
                  <p className="text-xl text-gray-300">
                    Essential development and deployment tools for Web3 projects
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-[var(--color-border)] transition-all duration-500 hover:shadow-xl hover:shadow-[var(--color-primary)]/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">
                          {tech.name}
                        </h3>
                        <span className="px-3 py-1 text-sm bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full border border-[var(--color-primary)]/30">
                          {tech.experience}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {tech.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {tech.keyFeatures.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Web3 Integration</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {tech.webThreeIntegration}
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={tech.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/30 text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)]/30 transition-colors duration-300"
                        >
                          <BookOpen className="w-4 h-4" />
                          Documentation
                        </a>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                        <div className="space-y-2">
                          {tech.useCases.map((useCase) => (
                            <div key={useCase} className="p-3 bg-slate-700/50 rounded-lg border border-gray-600">
                              <span className="text-gray-300 text-sm">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Projects Using {tech.name}</h4>
                        <div className="space-y-2">
                          {tech.projects.map((project) => (
                            <div key={project} className="p-3 bg-slate-700/50 rounded-lg border border-gray-600">
                              <span className="text-gray-300 text-sm">{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  );
};

export default DevelopmentToolsPage;