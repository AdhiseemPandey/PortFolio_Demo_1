"use client";

import React from 'react';
import About from '@/components/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Adhiseem Pandey | Web3 Developer',
  description: 'Learn about Adhiseem Pandey, a passionate Web3 developer with expertise in blockchain technology, smart contracts, and decentralized applications.',
  openGraph: {
    title: 'About - Adhiseem Pandey | Web3 Developer',
    description: 'Learn about Adhiseem Pandey, a passionate Web3 developer with expertise in blockchain technology, smart contracts, and decentralized applications.',
  },
};
export default function AboutPage() {
  return <About />;
}