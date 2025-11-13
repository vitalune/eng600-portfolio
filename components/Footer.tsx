'use client';

import { useState } from 'react';
import anime from 'animejs';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      href: '#github-link',
      color: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: '#linkedin-link',
      color: 'hover:text-cyan-400'
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: '#email-link',
      color: 'hover:text-pink-400'
    }
  ];

  const handleIconHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const icon = e.currentTarget.querySelector('svg');
    if (icon) {
      anime({
        targets: icon,
        rotate: 360,
        scale: [1, 1.2, 1],
        duration: 600,
        easing: 'easeInOutCubic'
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand/Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
              <span className="gradient-text">Amir Valizadeh</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Building the future of AI, one innovation at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={handleIconHover}
                className={`text-gray-400 ${link.color} transition-colors duration-300 transform hover:scale-110`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                About
              </a>
              <a href="#portfolio" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Portfolio
              </a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Amir Valizadeh. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with Next.js, TypeScript, Tailwind CSS, and Anime.js
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50"></div>
      </div>
    </footer>
  );
}
