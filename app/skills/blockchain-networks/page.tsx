"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap, ExternalLink, BookOpen } from 'lucide-react';

const BlockchainNetworksPage = () => {
  const technologies = [
    {
      name: "Ethereum Mainnet",
      description: "The original and most secure Ethereum network where smart contracts and dApps run with full decentralization and security.",
      experience: "Expert",
      useCases: ["DeFi protocols", "High-value NFTs", "Governance tokens", "Enterprise dApps"],
      documentation: "https://ethereum.org/developers/",
      projects: ["DeFi lending", "NFT marketplaces", "DAO platforms"],
      keyFeatures: ["Proof of Stake", "EVM compatibility", "High security", "Large ecosystem"],
      webThreeIntegration: "Primary network for production Web3 applications requiring maximum security and decentralization."
    },
    {
      name: "Polygon",
      description: "Layer 2 scaling solution for Ethereum providing faster transactions and lower fees while maintaining security.",
      experience: "Advanced",
      useCases: ["Gaming dApps", "Micro-transactions", "NFT minting", "DeFi protocols"],
      documentation: "https://docs.polygon.technology/",
      projects: ["Gaming platforms", "NFT collections", "DeFi forks"],
      keyFeatures: ["Low fees", "Fast transactions", "Ethereum compatibility", "PoS consensus"],
      webThreeIntegration: "Ideal for consumer-facing Web3 apps requiring fast, cheap transactions with Ethereum security."
    },
    {
      name: "Arbitrum",
      description: "Optimistic rollup Layer 2 solution that reduces costs and increases throughput while inheriting Ethereum's security.",
      experience: "Intermediate",
      useCases: ["DeFi protocols", "Trading platforms", "Complex dApps", "Enterprise solutions"],
      documentation: "https://docs.arbitrum.io/",
      projects: ["DEX platforms", "Lending protocols", "Cross-chain bridges"],
      keyFeatures: ["Optimistic rollups", "EVM compatibility", "Lower fees", "Ethereum security"],
      webThreeIntegration: "Perfect for complex DeFi applications requiring Ethereum security with improved performance."
    },
    {
      name: "Optimism",
      description: "Optimistic rollup scaling solution focused on simplicity and Ethereum equivalence for seamless migration.",
      experience: "Intermediate",
      useCases: ["DeFi migration", "NFT platforms", "Social dApps", "Payment systems"],
      documentation: "https://docs.optimism.io/",
      projects: ["DeFi forks", "Social platforms", "Payment apps"],
      keyFeatures: ["Ethereum equivalence", "Simple migration", "Retroactive funding", "Optimistic execution"],
      webThreeIntegration: "Excellent for migrating existing Ethereum dApps with minimal code changes and better UX."
    },
    {
      name: "Binance Smart Chain",
      description: "EVM-compatible blockchain with fast block times and low transaction fees, popular for DeFi and gaming applications.",
      experience: "Intermediate",
      useCases: ["DeFi protocols", "Gaming dApps", "Token launches", "Cross-chain bridges"],
      documentation: "https://docs.bnbchain.org/",
      projects: ["DeFi forks", "Gaming tokens", "Yield farming"],
      keyFeatures: ["Fast transactions", "Low fees", "EVM compatibility", "Large user base"],
      webThreeIntegration: "Popular choice for DeFi applications targeting users seeking low-cost transactions."
    },
    {
      name: "Avalanche",
      description: "High-performance blockchain platform with sub-second finality and support for custom blockchain networks.",
      experience: "Beginner",
      useCases: ["Enterprise blockchains", "DeFi protocols", "Custom subnets", "Cross-chain applications"],
      documentation: "https://docs.avax.network/",
      projects: ["Custom networks", "DeFi protocols", "Enterprise solutions"],
      keyFeatures: ["Sub-second finality", "Custom subnets", "Avalanche consensus", "Interoperability"],
      webThreeIntegration: "Ideal for enterprise Web3 applications requiring custom blockchain networks and high performance."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
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
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                Blockchain Networks
              </h1>
              <p className="text-xl text-gray-300">
                Multi-chain development expertise across major blockchain networks
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
                    <span className="px-3 py-1 text-sm bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full border border-[var(--color-accent)]/30">
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
                          <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
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
                    <h4 className="text-lg font-semibold text-white mb-3">Projects on {tech.name}</h4>
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

export default BlockchainNetworksPage;