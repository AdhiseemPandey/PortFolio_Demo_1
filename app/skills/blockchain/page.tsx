"use client";

import { ArrowLeft, Database, BookOpen } from "lucide-react";
import Link from "next/link";

const Web3FrontendPage = () => {
  const technologies = [
    {
      name: "Solidity",
      description: "Object-oriented programming language for writing smart contracts on Ethereum and EVM-compatible blockchains",
      experience: "Expert",
      useCases: ["Smart contract development", "DeFi protocols", "NFT contracts", "DAO governance"],
      documentation: "https://docs.soliditylang.org/",
      projects: ["Multi-sig wallets", "DeFi lending", "NFT marketplaces", "Governance tokens"]
    },
    {
      name: "Ethereum",
      description: "Decentralized blockchain platform enabling smart contracts and decentralized applications",
      experience: "Expert",
      useCases: ["dApp deployment", "Gas optimization", "Network interaction", "Transaction management"],
      documentation: "https://ethereum.org/developers/",
      projects: ["All Web3 projects", "DeFi protocols", "NFT platforms"]
    },
    {
      name: "Hardhat",
      description: "Ethereum development environment for compiling, deploying, testing, and debugging smart contracts",
      experience: "Advanced",
      useCases: ["Contract compilation", "Testing", "Deployment scripts", "Network forking"],
      documentation: "https://hardhat.org/docs",
      projects: ["Smart contract testing", "Local development", "Deployment automation"]
    },
    {
      name: "OpenZeppelin",
      description: "Library of secure smart contract templates and security tools for Ethereum development",
      experience: "Advanced",
      useCases: ["Secure contracts", "Token standards", "Access control", "Upgradeable contracts"],
      documentation: "https://docs.openzeppelin.com/",
      projects: ["ERC-20 tokens", "NFT contracts", "Governance systems"]
    },
    {
      name: "IPFS",
      description: "Distributed file system for storing and sharing data in a decentralized manner",
      experience: "Intermediate",
      useCases: ["NFT metadata", "dApp assets", "Decentralized storage", "Content addressing"],
      documentation: "https://docs.ipfs.tech/",
      projects: ["NFT marketplaces", "Decentralized websites", "File sharing dApps"]
    },
    {
      name: "Truffle",
      description: "Development framework for Ethereum with built-in testing, deployment, and asset pipeline",
      experience: "Intermediate",
      useCases: ["Contract migration", "Testing framework", "Asset compilation", "Network management"],
      documentation: "https://trufflesuite.com/docs/",
      projects: ["Legacy smart contracts", "Migration scripts", "Testing suites"]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div>
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-[var(--color-primary)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Skills
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
            <Database className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Blockchain & Smart Contracts
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive guide to blockchain development tools and technologies
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {technologies.map((tech) => (
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
                    <h4 className="text-lg font-semibold text-white mb-3">Use Cases & Applications</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tech.useCases.map((useCase) => (
                        <div key={useCase} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></div>
                          <span className="text-gray-300 text-sm">{useCase}</span>
                        </div>
                      ))}
                    </div>
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

export default Web3FrontendPage;