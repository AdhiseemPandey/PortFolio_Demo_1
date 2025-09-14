import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import AnimatedBackground from '@/components/AnimatedBackground';
import ColorCustomizer from '@/components/ColorCustomizer';

export const metadata: Metadata = {
  title: 'Adhiseem Pandey - Web3 Developer',
  description: 'Web3 Developer specializing in React, Next.js, JavaScript, and Ethereum ecosystem',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Poppins:wght@300;400;500;600;700&family=Fira+Code:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
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