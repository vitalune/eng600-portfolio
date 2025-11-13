'use client';

import { useState, useRef, FormEvent } from 'react';
import { useScrollAnimation } from './animations/useScrollAnimation';
import anime from 'animejs';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  useScrollAnimation('#contact', { translateY: 60, stagger: 100 });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const toastRef = useRef<HTMLDivElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Shake animation for errors
      anime({
        targets: '.form-container',
        translateX: [-10, 10, -10, 10, 0],
        duration: 400,
        easing: 'easeInOutQuad'
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Animate success toast
      if (toastRef.current) {
        anime.timeline({ loop: false })
          .add({
            targets: toastRef.current,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutElastic(1, .6)'
          })
          .add({
            targets: toastRef.current,
            translateY: [0, 100],
            opacity: [1, 0],
            duration: 400,
            easing: 'easeInCubic',
            delay: 3000
          });
      }

      setTimeout(() => setSubmitStatus('idle'), 4000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-96 h-96 top-0 left-1/2 transform -translate-x-1/2 bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form-container animate-on-scroll">
          <div className="space-y-6">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-900/50 border ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                Email <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-900/50 border ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Subject field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                Subject <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-900/50 border ${
                  errors.subject ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300`}
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
              )}
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                Message <span className="text-cyan-400">*</span>
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-900/50 border ${
                  errors.message ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none`}
                placeholder="Your message here..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </form>
      </div>

      {/* Success/Error Toast */}
      {submitStatus !== 'idle' && (
        <div
          ref={toastRef}
          className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-lg shadow-2xl ${
            submitStatus === 'success'
              ? 'bg-gradient-to-r from-green-500 to-teal-500'
              : 'bg-gradient-to-r from-red-500 to-pink-500'
          } text-white font-semibold z-50`}
          style={{ opacity: 0 }}
        >
          {submitStatus === 'success' ? '✓ Message sent successfully!' : '✗ Something went wrong. Please try again.'}
        </div>
      )}
    </section>
  );
}
