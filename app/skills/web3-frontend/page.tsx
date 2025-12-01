"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Code } from 'lucide-react';

const Web3FrontendPage = () => {
  const technologies = [
    {
      name: "React",
      description: "JavaScript library for building user interfaces with component-based architecture. Essential for creating interactive Web3 applications with real-time blockchain data.",
      experience: "Expert",
      useCases: ["Component development", "State management", "Hooks", "Context API"],
      documentation: "https://react.dev/",
      projects: ["DeFi Trading Platform", "NFT Marketplace", "DAO Governance"],
      keyFeatures: ["Virtual DOM", "Component lifecycle", "JSX syntax", "Unidirectional data flow"],
      webThreeIntegration: "Perfect for building dApp frontends with wallet connections, transaction handling, and real-time blockchain data display."
    },
    {
      name: "Next.js",
      description: "React framework with server-side rendering, routing, and optimization features. Ideal for SEO-friendly Web3 applications and static site generation.",
      experience: "Expert",
      useCases: ["SSR/SSG", "API routes", "Performance optimization", "SEO"],
      documentation: "https://nextjs.org/docs",
      projects: ["Multi-Chain Wallet", "DeFi Analytics", "NFT Launchpad"],
      keyFeatures: ["Server-side rendering", "Static generation", "API routes", "Image optimization"],
      webThreeIntegration: "Excellent for Web3 apps requiring SEO, fast loading times, and server-side blockchain data fetching."
    },
    {
      name: "TypeScript",
      description: "Typed superset of JavaScript providing better development experience and error prevention. Critical for large-scale Web3 applications with complex smart contract interactions.",
      experience: "Advanced",
      useCases: ["Type safety", "Interface definitions", "Generic programming", "Error prevention"],
      documentation: "https://www.typescriptlang.org/docs/",
      projects: ["All Web3 projects", "Smart contract interfaces", "API type definitions"],
      keyFeatures: ["Static typing", "Interface definitions", "Generics", "Compile-time error checking"],
      webThreeIntegration: "Essential for type-safe smart contract interactions, wallet integrations, and complex DeFi calculations."
    },
    {
      name: "Web3.js",
      description: "Ethereum JavaScript API for interacting with blockchain networks and smart contracts. The foundation for most Web3 frontend applications.",
      experience: "Expert",
      useCases: ["Blockchain interaction", "Smart contract calls", "Transaction signing", "Event listening"],
      documentation: "https://web3js.readthedocs.io/",
      projects: ["DeFi protocols", "Wallet integrations", "dApp frontends"],
      keyFeatures: ["Contract interaction", "Account management", "Transaction handling", "Event subscriptions"],
      webThreeIntegration: "Core library for all Ethereum-based dApp development, enabling direct blockchain communication."
    },
    {
      name: "Ethers.js",
      description: "Complete Ethereum library with utilities for wallet management and blockchain interaction. More modern and modular alternative to Web3.js.",
      experience: "Expert",
      useCases: ["Wallet connections", "Contract deployment", "Provider management", "Signer operations"],
      documentation: "https://docs.ethers.org/",
      projects: ["Payment systems", "Multi-sig wallets", "DeFi applications"],
      keyFeatures: ["Provider abstraction", "Wallet management", "Contract factories", "ENS support"],
      webThreeIntegration: "Preferred library for modern Web3 apps with better TypeScript support and cleaner API design."
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development with responsive design. Perfect for creating beautiful Web3 interfaces quickly.",
      experience: "Expert",
      useCases: ["Responsive design", "Component styling", "Custom themes", "Animation"],
      documentation: "https://tailwindcss.com/docs",
      projects: ["All frontend projects", "Component libraries", "Design systems"],
      keyFeatures: ["Utility classes", "Responsive design", "Custom themes", "JIT compilation"],
      webThreeIntegration: "Ideal for creating modern, responsive Web3 interfaces with consistent design systems and dark themes."
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
          <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
            <Code className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Web3 Frontend Technologies
            </h1>
            <p className="text-xl text-gray-300">
              Modern frontend tools for building decentralized applications
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
  );
};

export default Web3FrontendPage;