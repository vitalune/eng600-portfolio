'use client';

import { useEffect, useState } from 'react';
import { useScrollAnimation } from './animations/useScrollAnimation';

export default function Portfolio() {
  useScrollAnimation('#portfolio', { translateY: 70, stagger: 120 });

  const projects = [
    {
      id: 1,
      title: 'Proposal',
      description: 'A comprehensive project proposal demonstrating research methodology, planning, and strategic thinking in AI/ML domain.',
      tags: ['Research', 'Planning', 'Documentation'],
      linkPlaceholder: '#proposal-link',
      icon: '📋',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 2,
      title: 'Safety Document',
      description: 'In-depth analysis of AI safety protocols, ethical considerations, and responsible development practices.',
      tags: ['AI Safety', 'Ethics', 'Documentation'],
      linkPlaceholder: '#safety-doc-link',
      icon: '🛡️',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Infographic',
      description: 'Visual representation of complex AI/ML concepts, making cutting-edge technology accessible and understandable.',
      tags: ['Design', 'Visualization', 'Communication'],
      linkPlaceholder: '#infographic-link',
      icon: '📊',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Project',
      description: 'Hands-on implementation of advanced ML algorithms, showcasing practical application of theoretical concepts.',
      tags: ['Development', 'Implementation', 'ML'],
      linkPlaceholder: '#project-link',
      icon: '💻',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Usability Study (CatBot)',
      description: 'Comprehensive user experience research on CatBot, analyzing interaction patterns and optimizing conversational AI.',
      tags: ['UX Research', 'Analysis', 'AI Interface'],
      linkPlaceholder: '#catbot-study-link',
      icon: '🐱',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Oral Presentation',
      description: 'Professional presentation demonstrating communication skills and ability to convey complex technical concepts.',
      tags: ['Communication', 'Presentation', 'Public Speaking'],
      linkPlaceholder: '#presentation-link',
      icon: '🎤',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="portfolio" className="relative py-20 sm:py-32 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-96 h-96 top-1/4 left-0 bg-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-1/4 right-0 bg-cyan-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing academic excellence and innovative projects in AI, ML, and computer science.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="animate-on-scroll group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-transparent transition-all duration-500"
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              <div className="absolute inset-[2px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl"></div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {project.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300 font-[family-name:var(--font-space-grotesk)]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-semibold bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link overlay - appears on hover */}
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.linkPlaceholder}
                    className={`block w-full text-center py-3 px-6 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300`}
                  >
                    View Project →
                  </a>
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Note about placeholders */}
        <div className="mt-12 text-center animate-on-scroll">
          <p className="text-sm text-gray-500 italic">
            💡 Project links are currently placeholders and can be updated in the Portfolio component
          </p>
        </div>
      </div>
    </section>
  );
}
