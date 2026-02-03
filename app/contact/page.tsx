"use client";

import React from 'react';
import Contact from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Adhiseem Pandey | Get In Touch',
  description: 'Contact Adhiseem Pandey for Web3 development projects, blockchain consulting, or collaboration opportunities. Available for freelance work.',
  openGraph: {
    title: 'Contact - Adhiseem Pandey | Get In Touch',
    description: 'Contact Adhiseem Pandey for Web3 development projects, blockchain consulting, or collaboration opportunities.',
  },
};
export default function ContactPage() {
  return <Contact />;
}