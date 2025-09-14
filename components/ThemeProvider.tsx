"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  border: string;
}

interface FontSettings {
  family: string;
  size: string;
}

interface ThemeContextType {
  colors: ThemeColors;
  fonts: FontSettings;
  updateColor: (key: keyof ThemeColors, value: string) => void;
  updateFont: (key: keyof FontSettings, value: string) => void;
  resetColors: () => void;
  resetFonts: () => void;
}

const defaultColors: ThemeColors = {
  primary: '#00D4FF',
  secondary: '#00FF88',
  accent: '#FF6B6B',
  background: '#0F0F23',
  text: '#FFFFFF',
  border: '#00D4FF',
};

const defaultFonts: FontSettings = {
  family: 'Inter',
  size: '16px',
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colors, setColors] = useState<ThemeColors>(defaultColors);
  const [fonts, setFonts] = useState<FontSettings>(defaultFonts);

  // Apply font changes to document root
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--font-family', fonts.family);
    root.style.setProperty('--font-size', fonts.size);
  }, [fonts]);

  const updateColor = (key: keyof ThemeColors, value: string) => {
    setColors(prev => ({ ...prev, [key]: value }));
  };

  const updateFont = (key: keyof FontSettings, value: string) => {
    setFonts(prev => ({ ...prev, [key]: value }));
  };
  const resetColors = () => {
    setColors(defaultColors);
  };

  const resetFonts = () => {
    setFonts(defaultFonts);
  };
  return (
    <ThemeContext.Provider value={{ colors, fonts, updateColor, updateFont, resetColors, resetFonts }}>
      <div 
        style={{
          '--color-primary': colors.primary,
          '--color-secondary': colors.secondary,
          '--color-accent': colors.accent,
          '--color-background': colors.background,
          '--color-text': colors.text,
          '--color-border': colors.border,
          '--font-family': fonts.family,
          '--font-size': fonts.size,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}