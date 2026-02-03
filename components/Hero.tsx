"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden backdrop-blur-enhanced" role="banner">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] via-white to-[var(--color-secondary)] bg-clip-text text-transparent animate-fade-in" role="heading" aria-level="1">
            Web3 Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed" role="text">
            Building decentralized applications with{' '}
            <span className="text-[var(--color-primary)] font-semibold">React</span>,{' '}
            <span className="text-[var(--color-secondary)] font-semibold">Next.js</span>, and{' '}
            <span className="text-[var(--color-accent)] font-semibold">Ethereum</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[var(--color-primary)]/25"
              aria-label="View my Web3 development projects"
            >
              View My Work
            </Link>
            <div className="flex gap-3">
              <a
                href="/00000_WEB3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[var(--color-border)] text-white font-semibold rounded-full hover:bg-[var(--color-border)]/10 transition-all duration-300"
                aria-label="Preview Adhiseem Pandey's resume"
              >
                Preview Resume
              </a>
              <a
                href="/00000_WEB3.pdf"
                download="Adhiseem_Pandey_Resume.pdf"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-full transition-all duration-300"
                aria-label="Download Adhiseem Pandey's resume"
              >
                Download
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "https://github.com/AdhiseemPandey", label: "GitHub" },
              { icon: Linkedin, href: "http://www.linkedin.com/in/adhiseem-pandey-90a2362a5/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:adhiseem.atwork@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 border border-gray-600 rounded-full hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-gray-400 group-hover:text-[var(--color-primary)] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;