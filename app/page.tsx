"use client";

import React from 'react';
import Hero from '@/components/Hero';
import { Metadata } from 'next';

// This will be handled by layout.tsx for the home page
export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}