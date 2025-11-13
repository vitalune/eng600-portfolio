'use client';

import { useEffect } from 'react';
import { useHeroAnimation } from './animations/useHeroAnimation';

export default function Hero() {
  useHeroAnimation();

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main title with letter animation */}
        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          {'Amir Valizadeh'.split('').map((letter, index) => (
            <span
              key={index}
              className="letter inline-block opacity-0"
              style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>

        {/* Animated subtitle */}
        <p className="hero-subtitle text-xl sm:text-2xl md:text-3xl mb-12 opacity-0">
          <span className="gradient-text font-semibold">
            AI Engineer • ML Researcher • Building Intelligent Systems
          </span>
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToPortfolio}
          className="hero-cta opacity-0 group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
        >
          <span className="relative z-10">Explore My Work</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400 uppercase tracking-wider">Scroll Down</span>
            <svg
              className="w-6 h-6 text-cyan-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
