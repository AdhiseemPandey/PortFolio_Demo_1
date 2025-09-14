"use client";

import React, { useState } from 'react';
import { Settings, X, Palette, RotateCcw, Type } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ColorCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'colors' | 'fonts'>('colors');
  const { colors, fonts, updateColor, updateFont, resetColors, resetFonts } = useTheme();

  const colorOptions = [
    { key: 'primary', label: 'Primary Color', description: 'Main accent color' },
    { key: 'secondary', label: 'Secondary Color', description: 'Secondary accent color' },
    { key: 'accent', label: 'Accent Color', description: 'Highlight color' },
    { key: 'border', label: 'Border Color', description: 'Border and outline color' },
    { key: 'background', label: 'Background Color', description: 'Main background color' },
    { key: 'text', label: 'Text Color', description: 'Primary text color' },
  ];

  const fontFamilies = [
    { value: 'Inter', label: 'Inter (Modern Sans-serif)' },
    { value: 'Roboto', label: 'Roboto (Clean & Readable)' },
    { value: 'Poppins', label: 'Poppins (Rounded & Friendly)' },
    { value: 'Fira Code', label: 'Fira Code (Monospace)' },
  ];

  const fontSizes = [
    { value: '14px', label: 'Small (14px)' },
    { value: '16px', label: 'Medium (16px)' },
    { value: '18px', label: 'Large (18px)' },
    { value: '20px', label: 'Extra Large (20px)' },
  ];
  const presetThemes = [
    {
      name: 'Electric Blue',
      colors: {
        primary: '#00D4FF',
        secondary: '#00FF88',
        accent: '#FF6B6B',
        background: '#0F0F23',
        text: '#FFFFFF',
        border: '#00D4FF',
      }
    },
    {
      name: 'Neon Purple',
      colors: {
        primary: '#9D4EDD',
        secondary: '#F72585',
        accent: '#4ECDC4',
        background: '#1A1A2E',
        text: '#FFFFFF',
        border: '#9D4EDD',
      }
    },
    {
      name: 'Cyber Green',
      colors: {
        primary: '#39FF14',
        secondary: '#00FFFF',
        accent: '#FFD700',
        background: '#0D1117',
        text: '#FFFFFF',
        border: '#39FF14',
      }
    },
    {
      name: 'Sunset Orange',
      colors: {
        primary: '#FF6B35',
        secondary: '#F7931E',
        accent: '#FFE66D',
        background: '#2C1810',
        text: '#FFFFFF',
        border: '#FF6B35',
      }
    }
  ];

  const applyPreset = (preset: typeof presetThemes[0]) => {
    Object.entries(preset.colors).forEach(([key, value]) => {
      updateColor(key as keyof typeof colors, value);
    });
  };

  return (
    <>
      {/* Customizer Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Open color customizer"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Customizer Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div className="fixed right-0 top-0 h-full w-96 bg-slate-900 border-l border-gray-700 z-50 overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Customize Theme</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex mb-6 bg-slate-800 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('colors')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-colors ${
                    activeTab === 'colors'
                      ? 'bg-[var(--color-primary)] text-black font-semibold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Palette className="w-4 h-4" />
                  Colors
                </button>
                <button
                  onClick={() => setActiveTab('fonts')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-colors ${
                    activeTab === 'fonts'
                      ? 'bg-[var(--color-primary)] text-black font-semibold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Type className="w-4 h-4" />
                  Fonts
                </button>
              </div>
              {/* Colors Tab */}
              {activeTab === 'colors' && (
                <>
                  {/* Preset Themes */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
                      Preset Themes
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {presetThemes.map((preset) => (
                        <button
                          key={preset.name}
                          onClick={() => applyPreset(preset)}
                          className="p-3 bg-slate-800 rounded-lg border border-gray-700 hover:border-[var(--color-primary)] transition-colors text-left"
                        >
                          <div className="flex gap-1 mb-2">
                            {Object.values(preset.colors).slice(0, 3).map((color, idx) => (
                              <div
                                key={idx}
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <div className="text-xs text-white font-medium">{preset.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Controls */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                        Custom Colors
                      </h4>
                      <button
                        onClick={resetColors}
                        className="flex items-center gap-1 text-xs text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Reset
                      </button>
                    </div>

                    {colorOptions.map((option) => (
                      <div key={option.key} className="space-y-2">
                        <label className="flex items-center justify-between text-sm text-white">
                          <span>{option.label}</span>
                          <div
                            className="w-6 h-6 rounded border-2 border-gray-600"
                            style={{ backgroundColor: colors[option.key as keyof typeof colors] }}
                          />
                        </label>
                        <input
                          type="color"
                          value={colors[option.key as keyof typeof colors]}
                          onChange={(e) => updateColor(option.key as keyof typeof colors, e.target.value)}
                          className="w-full h-10 bg-slate-800 border border-gray-700 rounded cursor-pointer"
                        />
                        <p className="text-xs text-gray-400">{option.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Fonts Tab */}
              {activeTab === 'fonts' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                      Typography Settings
                    </h4>
                    <button
                      onClick={resetFonts}
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Reset
                    </button>
                  </div>

                  {/* Font Family */}
                  <div className="space-y-3">
                    <label className="text-sm text-white font-medium">Font Family</label>
                    <div className="space-y-2">
                      {fontFamilies.map((font) => (
                        <button
                          key={font.value}
                          onClick={() => updateFont('family', font.value)}
                          className={`w-full p-3 text-left rounded-lg border transition-colors ${
                            fonts.family === font.value
                              ? 'bg-[var(--color-primary)]/20 border-[var(--color-primary)] text-[var(--color-primary)]'
                              : 'bg-slate-800 border-gray-700 text-white hover:border-[var(--color-primary)]'
                          }`}
                          style={{ fontFamily: font.value }}
                        >
                          <div className="font-medium">{font.label}</div>
                          <div className="text-xs opacity-70 mt-1">The quick brown fox jumps over the lazy dog</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Font Size */}
                  <div className="space-y-3">
                    <label className="text-sm text-white font-medium">Base Font Size</label>
                    <div className="grid grid-cols-2 gap-2">
                      {fontSizes.map((size) => (
                        <button
                          key={size.value}
                          onClick={() => updateFont('size', size.value)}
                          className={`p-3 text-center rounded-lg border transition-colors ${
                            fonts.size === size.value
                              ? 'bg-[var(--color-primary)]/20 border-[var(--color-primary)] text-[var(--color-primary)]'
                              : 'bg-slate-800 border-gray-700 text-white hover:border-[var(--color-primary)]'
                          }`}
                        >
                          <div className="font-medium text-sm">{size.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="p-4 bg-slate-800 rounded-lg border border-gray-700">
                    <h5 className="text-sm text-gray-400 mb-3">Preview</h5>
                    <div 
                      className="text-white"
                      style={{ 
                        fontFamily: fonts.family,
                        fontSize: fonts.size
                      }}
                    >
                      <h3 className="text-xl font-bold mb-2">Sample Heading</h3>
                      <p className="leading-relaxed">
                        This is how your text will look with the selected font family and size. 
                        The typography affects the overall feel and readability of your portfolio.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Live Preview Note */}
              <div className="mt-8 p-4 bg-[var(--color-primary)]/10 rounded-lg border border-[var(--color-primary)]/30">
                <p className="text-sm text-[var(--color-primary)]">
                  ✨ Changes are applied in real-time! Explore different {activeTab} to create your perfect theme.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ColorCustomizer;