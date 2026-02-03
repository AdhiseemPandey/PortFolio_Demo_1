"use client";

import React, { useMemo } from 'react';
import { useTheme } from './ThemeProvider';

const AnimatedBackground = () => {
  const themeContext = useTheme();
  const colors = themeContext?.colors || {
    primary: '#00D4FF',
    secondary: '#FF6B6B',
    accent: '#00FF88',
    background: '#0A0A0A'
  };

  // Generate random positions and delays for sparkles
  const sparkles = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 2 + Math.random() * 3,
    size: 2 + Math.random() * 4,
  })), []);

  // Generate random positions and properties for 3D shapes
  const shapes = useMemo(() => Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 20,
    size: 20 + Math.random() * 60,
    type: ['cube', 'sphere', 'pyramid', 'torus'][Math.floor(Math.random() * 4)],
    rotationSpeed: 10 + Math.random() * 20,
  })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.background}, ${colors.background}dd, ${colors.background}aa)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/5 via-transparent to-[var(--color-secondary)]/5 animate-pulse"></div>
      </div>

      {/* Moving Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          <div
            className="bg-white rounded-full opacity-70 animate-twinkle"
            style={{
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              backgroundColor: colors.primary,
              boxShadow: `0 0 ${sparkle.size * 2}px ${colors.primary}80`,
            }}
          />
        </div>
      ))}

      {/* Moving 3D Shapes */}
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute animate-float-3d shape-${shape.type}`}
          style={{
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
        >
          <div
            className={`w-full h-full animate-rotate-3d opacity-20 hover:opacity-40 transition-opacity duration-1000`}
            style={{
              animationDuration: `${shape.rotationSpeed}s`,
              background: shape.type === 'cube' 
                ? `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`
                : shape.type === 'sphere'
                ? `radial-gradient(circle, ${colors.accent}, ${colors.primary})`
                : shape.type === 'pyramid'
                ? `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`
                : `conic-gradient(${colors.primary}, ${colors.secondary}, ${colors.accent}, ${colors.primary})`,
              borderRadius: shape.type === 'sphere' ? '50%' : shape.type === 'torus' ? '50%' : '8px',
              clipPath: shape.type === 'pyramid' 
                ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
                : shape.type === 'torus'
                ? 'circle(50% at 50% 50%)'
                : 'none',
              border: shape.type === 'torus' ? `${shape.size * 0.2}px solid transparent` : 'none',
              boxShadow: `0 0 ${shape.size}px ${colors.primary}30`,
            }}
          />
        </div>
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float-particle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              backgroundColor: colors.primary,
            }}
          />
        ))}
      </div>

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          style={{ backgroundColor: colors.primary }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
          style={{ backgroundColor: colors.secondary }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
          style={{ backgroundColor: colors.accent }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;