import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import AnimatedBackground from '@/components/AnimatedBackground';
import ColorCustomizer from '@/components/ColorCustomizer';

export const metadata: Metadata = {
  title: 'Adhiseem Pandey - Web3 Developer',
  description: 'Expert Web3 Developer specializing in React, Next.js, Solidity, DeFi protocols, and Ethereum ecosystem. Building the future of decentralized applications.',
  keywords: 'Web3 Developer, Blockchain Developer, React Developer, Next.js, Solidity, DeFi, Ethereum, Smart Contracts, dApp Development, NFT, DAO',
  authors: [{ name: 'Adhiseem Pandey' }],
  creator: 'Adhiseem Pandey',
  publisher: 'Adhiseem Pandey',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adhiseem-portfolio.vercel.app',
    title: 'Adhiseem Pandey - Web3 Developer',
    description: 'Expert Web3 Developer specializing in React, Next.js, Solidity, DeFi protocols, and Ethereum ecosystem.',
    siteName: 'Adhiseem Pandey Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adhiseem Pandey - Web3 Developer',
    description: 'Expert Web3 Developer specializing in React, Next.js, Solidity, DeFi protocols, and Ethereum ecosystem.',
    creator: '@adhiseem',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#00D4FF',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00D4FF" />
        <link rel="canonical" href="https://adhiseem-portfolio.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Poppins:wght@300;400;500;600;700&family=Fira+Code:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
        <link rel="preload" href="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800" as="image" />
      </head>
      <body>
        <ThemeProvider>
          <div className="min-h-screen relative">
            <AnimatedBackground />
            <Header />
            <main className="pt-16">
              {children}
            </main>
            <ColorCustomizer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}