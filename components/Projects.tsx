"use client";

import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Code, Database, Globe, Blocks, Coins } from 'lucide-react';

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'blockchain' | 'web3';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories = [
    { id: 'all' as ProjectCategory, label: 'All Projects', icon: Globe },
    { id: 'frontend' as ProjectCategory, label: 'Frontend Projects', icon: Code },
    { id: 'backend' as ProjectCategory, label: 'Backend Projects', icon: Database },
    { id: 'fullstack' as ProjectCategory, label: 'Full Stack Projects', icon: Globe },
    { id: 'blockchain' as ProjectCategory, label: 'Blockchain Projects', icon: Blocks },
    { id: 'web3' as ProjectCategory, label: 'Web3 Projects', icon: Coins }
  ];

  const projects = [
    {
      id: 1,
      title: "DeFi Trading Platform",
      description: "Decentralized trading platform built with React and Web3.js. Features include token swapping, liquidity pools, yield farming, and real-time price feeds.",
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Next.js", "Solidity", "Web3.js", "Ethereum"],
      github: "#",
      live: "#",
      category: 'web3' as ProjectCategory,
      featured: true
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description: "Full-featured NFT marketplace with minting, trading, and auction capabilities. Built with smart contracts and IPFS for decentralized storage.",
      image: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Solidity", "IPFS", "Ethers.js", "OpenZeppelin"],
      github: "#",
      live: "#",
      category: 'blockchain' as ProjectCategory,
      featured: true
    },
    {
      id: 3,
      title: "DAO Governance Platform",
      description: "Decentralized governance platform for DAOs with proposal creation, voting mechanisms, and treasury management features.",
      image: "https://images.pexels.com/photos/7567521/pexels-photo-7567521.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Solidity", "The Graph", "MetaMask", "Hardhat"],
      github: "#",
      live: "#",
      category: 'web3' as ProjectCategory,
      featured: false
    },
    {
      id: 4,
      title: "Multi-Chain Wallet",
      description: "Cross-chain wallet application supporting multiple blockchain networks with portfolio tracking, transaction history, and DeFi integration.",
      image: "https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Web3.js", "WalletConnect", "Polygon", "Arbitrum"],
      github: "#",
      live: "#",
      category: 'fullstack' as ProjectCategory,
      featured: true
    },
    {
      id: 5,
      title: "React Dashboard",
      description: "Modern admin dashboard built with React and TypeScript. Features responsive design, data visualization, and real-time updates.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      github: "#",
      live: "#",
      category: 'frontend' as ProjectCategory,
      featured: false
    },
    {
      id: 6,
      title: "API Gateway Service",
      description: "Scalable Node.js API gateway with authentication, rate limiting, and microservices integration. Built with Express and MongoDB.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
      github: "#",
      live: "#",
      category: 'backend' as ProjectCategory,
      featured: false
    },
    {
      id: 7,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Next.js"],
      github: "#",
      live: "#",
      category: 'fullstack' as ProjectCategory,
      featured: false
    },
    {
      id: 8,
      title: "Smart Contract Auditor",
      description: "Automated smart contract security analysis tool. Scans Solidity code for vulnerabilities and provides detailed security reports.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Solidity", "Python", "Web3.py", "Slither", "Mythril"],
      github: "#",
      live: "#",
      category: 'blockchain' as ProjectCategory,
      featured: false
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-800/50 to-transparent relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing expertise across frontend, backend, full-stack, blockchain, and Web3 development
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                if (category.id === 'all') {
                  setActiveCategory(category.id);
                } else {
                  window.location.href = `/projects/${category.id}`;
                }
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black scale-105'
                  : 'bg-slate-800/50 border border-gray-600 text-gray-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-[var(--color-border)] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[var(--color-primary)]/20"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full border border-[var(--color-primary)]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-[var(--color-border)] transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[var(--color-primary)]/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-400">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors duration-300"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold text-sm rounded-lg hover:scale-105 transition-transform duration-300"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No projects found in this category</p>
              <p className="text-sm">Try selecting a different category</p>
            </div>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <button className="group flex items-center gap-2 mx-auto px-8 py-3 border-2 border-[var(--color-border)] text-white font-semibold rounded-full hover:bg-[var(--color-border)]/10 transition-all duration-300">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;