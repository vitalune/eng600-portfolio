'use client';

import { useEffect } from 'react';
import { useScrollAnimation } from './animations/useScrollAnimation';

export default function About() {
  useScrollAnimation('#about', { translateY: 60, stagger: 150 });

  const cards = [
    {
      icon: '🎓',
      title: 'Field of Study',
      description: 'Computer Science',
      detail: 'University of Pittsburgh, 4.0 GPA',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '🤖',
      title: 'Professional Focus',
      description: 'AI & Machine Learning',
      detail: 'LLMs, Data Distillation, Advanced ML Research',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💪',
      title: 'Powerlifting',
      description: 'Commitment to Excellence',
      detail: 'Discipline, strength, and continuous improvement',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '🍜',
      title: 'Culinary Appreciation',
      description: 'Food Enthusiast',
      detail: 'Exploring flavors and late-night snack adventures',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: '🔬',
      title: 'AI Experimentation',
      description: 'Cutting-Edge Innovation',
      detail: 'Building and exploring next-gen AI systems',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '🏆',
      title: 'Achievements',
      description: 'Claude Builder Hackathon',
      detail: 'Winner - Anthropic Competition',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="about" className="relative py-20 sm:py-32 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-96 h-96 top-0 right-0 bg-cyan-500/30 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-0 left-0 bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A driven computer science student building the future of AI, one breakthrough at a time.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="animate-on-scroll group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 card-hover overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300 font-[family-name:var(--font-space-grotesk)]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-300 mb-3 font-semibold">
                  {card.description}
                </p>

                {/* Detail */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.detail}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
