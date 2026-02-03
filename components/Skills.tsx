"use client";

import React from 'react';
import Link from 'next/link';
import { Code, Database, Palette, Globe, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Web3 Frontend",
      href: "/skills/web3-frontend",
      skills: ["React", "Next.js", "TypeScript", "Web3.js", "Ethers.js", "JavaScript ES6+", "Tailwind CSS"],
      color: "var(--color-primary)"
    },
    {
      icon: Database,
      title: "Blockchain & Smart Contracts",
      href: "/skills/blockchain",
      skills: ["Solidity", "Ethereum", "Smart Contracts", "Hardhat", "Truffle", "OpenZeppelin", "IPFS"],
      color: "var(--color-secondary)"
    },
    {
      icon: Palette,
      title: "DeFi & Web3 Tools",
      href: "/skills/defi-web3-tools",
      skills: ["MetaMask", "WalletConnect", "DeFi Protocols", "NFTs", "ERC-20", "ERC-721", "Uniswap"],
      color: "var(--color-accent)"
    },
    {
      icon: Globe,
      title: "Development Tools",
      href: "/skills/development-tools",
      skills: ["Git", "GitHub", "Webpack", "Vite", "Docker", "Vercel", "Netlify", "Remix IDE"],
      color: "var(--color-primary)"
    },
    {
      icon: Smartphone,
      title: "Backend & APIs",
      href: "/skills/backend-apis",
      skills: ["Node.js", "Express.js", "GraphQL", "REST APIs", "MongoDB", "PostgreSQL", "The Graph"],
      color: "var(--color-secondary)"
    },
    {
      icon: Zap,
      title: "Blockchain Networks",
      href: "/skills/blockchain-networks",
      skills: ["Ethereum Mainnet", "Polygon", "Arbitrum", "Optimism", "Binance Smart Chain", "Avalanche"],
      color: "var(--color-accent)"
    },
    {
      icon: Zap,
      title: "GenAI & Machine Learning",
      href: "/skills/genai-machine-learning",
      skills: ["TensorFlow.js", "Scikit-learn", "OpenAI API", "Random Forest", "TF-IDF", "Data Classification", "AI Security Models"],
      color: "var(--color-primary)"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-slate-800/50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            Web3 & Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expertise in blockchain development, DeFi protocols, and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-[var(--color-border)] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="p-3 rounded-lg mr-4"
                  style={{ backgroundColor: `${category.color}20`, border: `1px solid ${category.color}` }}
                >
                  <category.icon 
                    className="w-6 h-6" 
                    style={{ color: category.color }} 
                  />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full border border-gray-600 hover:border-[var(--color-border)] hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;