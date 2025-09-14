"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Smartphone, ExternalLink, BookOpen } from 'lucide-react';
const BackendAPIsPage = () => {
  const technologies = [
    {
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 engine for building scalable server-side applications and Web3 backends.",
      experience: "Expert",
      useCases: ["Server development", "API creation", "Blockchain integration", "Real-time applications"],
      documentation: "https://nodejs.org/docs/",
      projects: ["DeFi backends", "NFT APIs", "Blockchain indexers"],
      keyFeatures: ["Event-driven", "Non-blocking I/O", "NPM ecosystem", "Cross-platform"],
      webThreeIntegration: "Perfect for building Web3 backends that interact with smart contracts and handle blockchain data."
    },
    {
      name: "Express.js",
      description: "Fast, unopinionated web framework for Node.js, ideal for building RESTful APIs and Web3 backend services.",
      experience: "Expert",
      useCases: ["REST APIs", "Middleware", "Route handling", "Web3 endpoints"],
      documentation: "https://expressjs.com/",
      projects: ["API gateways", "DeFi backends", "NFT services"],
      keyFeatures: ["Minimal framework", "Middleware support", "Routing", "Template engines"],
      webThreeIntegration: "Building robust APIs for Web3 applications with blockchain data endpoints and wallet integrations."
    },
    {
      name: "GraphQL",
      description: "Query language and runtime for APIs that allows clients to request exactly the data they need.",
      experience: "Advanced",
      useCases: ["Flexible APIs", "Data fetching", "Real-time subscriptions", "Schema definition"],
      documentation: "https://graphql.org/learn/",
      projects: ["DeFi dashboards", "NFT platforms", "Blockchain explorers"],
      keyFeatures: ["Type system", "Single endpoint", "Real-time subscriptions", "Introspection"],
      webThreeIntegration: "Excellent for complex Web3 applications requiring flexible blockchain data queries and real-time updates."
    },
    {
      name: "MongoDB",
      description: "NoSQL document database perfect for storing blockchain data, user profiles, and application metadata.",
      experience: "Advanced",
      useCases: ["Document storage", "User data", "Transaction logs", "Metadata storage"],
      documentation: "https://docs.mongodb.com/",
      projects: ["User management", "Transaction history", "NFT metadata"],
      keyFeatures: ["Document-based", "Flexible schema", "Horizontal scaling", "Rich queries"],
      webThreeIntegration: "Storing off-chain data for Web3 applications including user profiles, transaction history, and NFT metadata."
    },
    {
      name: "PostgreSQL",
      description: "Advanced open-source relational database with excellent performance and reliability for Web3 applications.",
      experience: "Advanced",
      useCases: ["Relational data", "Complex queries", "ACID compliance", "Analytics"],
      documentation: "https://www.postgresql.org/docs/",
      projects: ["DeFi analytics", "Trading platforms", "Financial data"],
      keyFeatures: ["ACID compliance", "Complex queries", "JSON support", "Extensibility"],
      webThreeIntegration: "Ideal for financial Web3 applications requiring complex queries, analytics, and reliable transaction data."
    },
    {
      name: "The Graph",
      description: "Decentralized protocol for indexing and querying blockchain data, enabling efficient data access for dApps.",
      experience: "Intermediate",
      useCases: ["Blockchain indexing", "Data querying", "Subgraph development", "Real-time updates"],
      documentation: "https://thegraph.com/docs/",
      projects: ["DeFi protocols", "NFT platforms", "DAO dashboards"],
      keyFeatures: ["Decentralized indexing", "GraphQL queries", "Real-time data", "Multi-chain support"],
      webThreeIntegration: "Core infrastructure for Web3 applications requiring fast, reliable access to blockchain data."
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
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                    Backend & APIs
                  </h1>
                  <p className="text-xl text-gray-300">
                    Server-side development and API integration for Web3 applications
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
                        <span className="px-3 py-1 text-sm bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] rounded-full border border-[var(--color-secondary)]/30">
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
                              <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></div>
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
                          className="flex items-center gap-2 px-4 py-2 bg-[var(--color-secondary)]/20 border border-[var(--color-secondary)]/30 text-[var(--color-secondary)] rounded-lg hover:bg-[var(--color-secondary)]/30 transition-colors duration-300"
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

export default BackendAPIsPage;