"use client";

import React from 'react';
import { Award, Coffee, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: "Years in Web3", value: "3+" },
    { icon: Coffee, label: "dApps Built", value: "25+" },
    { icon: Users, label: "Smart Contracts", value: "50+" },
    { icon: Zap, label: "Blockchains", value: "8+" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-slate-800/50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm Adhiseem Pandey, a third-year Electronics and Communication Engineering student at Bhagwan Parshuram Institute of Technology 
                with a CGPA of 9.108. I'm deeply passionate about Web3 development and have developed expertise in smart contract design, 
                dApp development, and responsive web applications.
              </p>
              
              <p>
                I have proficiency in Solidity, Ethereum, Web3.js, Hardhat, Truffle, React.js, Next.js, Node.js, and MongoDB, 
                with experience in ERC-20/ERC-721 token standards, wallet integration, secure transaction flows, and REST/GraphQL APIs. 
                My knowledge extends to scalability, layer-2 solutions, and decentralized storage (IPFS, Filecoin).
              </p>
              
              <p>
                I've demonstrated competitive problem-solving skills through 400+ coding challenges, achieving Codeforces Pupil 
                (CR 1236, Max 1246) and LeetCode Top 9.77% (Contest Rating 1751). I'm currently a Senior Tech Member at 
                namespace Community and have practical experience as an intern at JCB India LTD.
              </p>
              
              <p>
                Also exploring machine learning with hands-on experience in TensorFlow.js and scikit-learn for AI-powered security models and data classification tasks.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:adhiseem.atwork@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Contact Me
              </a>
              <div className="flex gap-3">
                <a
                  href="/00000_WEB3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[var(--color-border)] text-white font-semibold rounded-full hover:bg-[var(--color-border)]/10 transition-all duration-300"
                >
                  View Resume
                </a>
                <a
                  href="https://github.com/AdhiseemPandey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-full transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-[var(--color-border)] transition-all duration-500 hover:scale-105 text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-[var(--color-primary)]/20 rounded-lg border border-[var(--color-primary)]/30">
                    <stat.icon className="w-8 h-8 text-[var(--color-primary)]" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;