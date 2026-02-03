"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Palette,
  ExternalLink,
  BookOpen
} from "lucide-react";

const DeFiWeb3ToolsPage = () => {
  const technologies = [
    {
      name: "MetaMask",
      description:
        "Browser extension wallet for Ethereum and EVM-compatible networks. Essential tool for Web3 development and user onboarding.",
      experience: "Expert",
      useCases: [
        "Wallet connection",
        "Transaction signing",
        "Network switching",
        "Account management"
      ],
      documentation: "https://docs.metamask.io/",
      projects: ["All Web3 dApps", "Payment systems", "DeFi platforms"],
      keyFeatures: [
        "Browser integration",
        "Multiple networks",
        "Hardware wallet support",
        "Developer APIs"
      ],
      webThreeIntegration:
        "Primary wallet for Ethereum ecosystem, enabling seamless user authentication and transaction signing."
    },
    {
      name: "WalletConnect",
      description:
        "Open protocol for connecting decentralized applications to mobile wallets using QR code scanning or deep linking.",
      experience: "Advanced",
      useCases: [
        "Mobile wallet integration",
        "Cross-platform compatibility",
        "QR code connections",
        "Deep linking"
      ],
      documentation: "https://docs.walletconnect.com/",
      projects: [
        "Multi-platform dApps",
        "Mobile-first Web3 apps",
        "Cross-wallet support"
      ],
      keyFeatures: [
        "Protocol standardization",
        "Mobile optimization",
        "Multi-wallet support",
        "Secure connections"
      ],
      webThreeIntegration:
        "Enables dApps to connect with 100+ wallets including Trust Wallet, Rainbow, and Coinbase Wallet."
    },
    {
      name: "DeFi Protocols",
      description:
        "Decentralized Finance protocols including Uniswap, Aave, Compound, and Curve for building financial applications.",
      experience: "Advanced",
      useCases: [
        "Liquidity provision",
        "Yield farming",
        "Lending/borrowing",
        "Token swapping"
      ],
      documentation: "https://docs.uniswap.org/",
      projects: [
        "DeFi aggregators",
        "Yield farming platforms",
        "Trading interfaces"
      ],
      keyFeatures: [
        "Automated market makers",
        "Liquidity pools",
        "Flash loans",
        "Governance tokens"
      ],
      webThreeIntegration:
        "Building blocks for creating sophisticated DeFi applications with lending, trading, and yield generation."
    },
    {
      name: "NFTs (ERC-721 / ERC-1155)",
      description:
        "Non-Fungible Token standards for creating unique digital assets and collectibles on Ethereum.",
      experience: "Advanced",
      useCases: [
        "Digital collectibles",
        "Gaming assets",
        "Art marketplaces",
        "Utility tokens"
      ],
      documentation: "https://eips.ethereum.org/EIPS/eip-721",
      projects: [
        "NFT marketplaces",
        "Gaming platforms",
        "Art collections"
      ],
      keyFeatures: [
        "Unique ownership",
        "Metadata standards",
        "Royalty mechanisms",
        "Batch operations"
      ],
      webThreeIntegration:
        "Creating and managing NFT ecosystems with minting, trading, and marketplace functionality."
    },
    {
      name: "ERC-20 Tokens",
      description:
        "Fungible token standard for creating cryptocurrencies and utility tokens.",
      experience: "Expert",
      useCases: [
        "Utility tokens",
        "Governance tokens",
        "Stablecoins",
        "Reward systems"
      ],
      documentation: "https://eips.ethereum.org/EIPS/eip-20",
      projects: ["Token launches", "DeFi protocols", "DAO governance"],
      keyFeatures: [
        "Standardized interface",
        "Transfer mechanisms",
        "Allowance system",
        "Event logging"
      ],
      webThreeIntegration:
        "Foundation for DeFi apps enabling staking, transfers, and governance."
    },
    {
      name: "Uniswap",
      description:
        "Decentralized exchange protocol for automated token trading using AMM design.",
      experience: "Advanced",
      useCases: [
        "Token swapping",
        "Liquidity provision",
        "Price discovery",
        "Arbitrage"
      ],
      documentation: "https://docs.uniswap.org/",
      projects: [
        "DEX integrations",
        "Trading bots",
        "Liquidity mining"
      ],
      keyFeatures: [
        "Automated market making",
        "Liquidity pools",
        "Flash swaps",
        "Concentrated liquidity"
      ],
      webThreeIntegration:
        "Core infrastructure for token swaps and liquidity management."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Skills
        </Link>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Palette className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              DeFi & Web3 Tools
            </h1>
            <p className="text-xl text-gray-300">
              Essential tools and protocols for Web3 development
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-8">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="p-8 bg-slate-800/50 rounded-2xl border border-gray-700 hover:border-[var(--color-border)] transition"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {tech.name}
                  </h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                    {tech.experience}
                  </span>
                </div>

                <p className="text-gray-300 mb-6">
                  {tech.description}
                </p>

                <h4 className="text-lg font-semibold text-white mb-3">
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {tech.keyFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full" />
                      {f}
                    </div>
                  ))}
                </div>

                <h4 className="text-lg font-semibold text-white mb-3">
                  Web3 Integration
                </h4>
                <p className="text-gray-300 text-sm">
                  {tech.webThreeIntegration}
                </p>
              </div>

              {/* Right */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Resources
                  </h4>
                  <a
                    href={tech.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/30 transition"
                  >
                    <BookOpen className="w-4 h-4" />
                    Docs
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Use Cases
                  </h4>
                  {tech.useCases.map((u) => (
                    <div key={u} className="p-3 mb-2 bg-slate-700/50 rounded-lg text-sm text-gray-300">
                      {u}
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Projects
                  </h4>
                  {tech.projects.map((p) => (
                    <div key={p} className="p-3 mb-2 bg-slate-700/50 rounded-lg text-sm text-gray-300">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeFiWeb3ToolsPage;
