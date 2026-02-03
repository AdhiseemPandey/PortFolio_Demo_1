"use client";

import { ArrowLeft, Code, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const FrontendProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "React Trading Dashboard",
      description: "Real-time cryptocurrency trading dashboard with advanced charting, portfolio tracking, and market analysis tools built with React and TypeScript.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "TypeScript", "Chart.js", "WebSocket", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Next.js E-commerce UI",
      description: "Modern e-commerce frontend with product catalog, shopping cart, checkout flow, and responsive design using Next.js and Tailwind CSS.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Web3 Wallet Interface",
      description: "Clean and intuitive wallet interface for managing multiple cryptocurrencies with transaction history and portfolio overview.",
      image: "https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Web3.js", "Ethers.js", "CSS Modules", "JavaScript"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "DeFi Analytics Dashboard",
      description: "Comprehensive DeFi analytics platform showing yield farming opportunities, liquidity pools, and protocol statistics.",
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "D3.js", "JavaScript", "Styled Components", "Web3.js"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "NFT Gallery Interface",
      description: "Beautiful NFT gallery with filtering, search, and detailed view capabilities. Supports multiple blockchain networks.",
      image: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Next.js", "IPFS", "Ethers.js", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 6,
      title: "Crypto Portfolio Tracker",
      description: "Personal portfolio tracking application with real-time price updates, profit/loss calculations, and performance analytics.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "JavaScript", "Chart.js", "CoinGecko API", "CSS Grid"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="mb-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[var(--color-primary)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Categories
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
            <Code className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Frontend Projects
            </h1>
            <p className="text-xl text-gray-300">
              User interfaces and client-side applications built with React, Next.js, and modern JavaScript
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-8">Featured Frontend Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-[var(--color-border)] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[var(--color-primary)]/20"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
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

      {/* Other Projects */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-8">Other Frontend Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-[var(--color-border)] transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[var(--color-primary)]/20"
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
    </div>
  );
};

export default FrontendProjectsPage;