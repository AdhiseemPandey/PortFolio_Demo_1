"use client";

import React from 'react';
import Projects from '@/components/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Adhiseem Pandey | Web3 Developer Portfolio',
  description: 'Explore Web3 projects by Adhiseem Pandey including DeFi protocols, NFT marketplaces, smart contracts, and blockchain applications.',
  openGraph: {
    title: 'Projects - Adhiseem Pandey | Web3 Developer Portfolio',
    description: 'Explore Web3 projects by Adhiseem Pandey including DeFi protocols, NFT marketplaces, smart contracts, and blockchain applications.',
  },
};
export default function ProjectsPage() {
  return <Projects />;
}