import { useEffect } from 'react';
import anime from 'animejs';

export const useScrollAnimation = (selector: string, options?: {
  translateY?: number;
  translateX?: number;
  scale?: number;
  rotate?: number;
  delay?: number;
  stagger?: number;
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const defaults = {
              translateY: options?.translateY ?? 50,
              translateX: options?.translateX ?? 0,
              scale: options?.scale ?? 1,
              rotate: options?.rotate ?? 0,
              delay: options?.delay ?? 0,
              stagger: options?.stagger ?? 100,
            };

            anime({
              targets: entry.target.querySelectorAll('.animate-on-scroll'),
              translateY: [defaults.translateY, 0],
              translateX: [defaults.translateX, 0],
              scale: [0.95, defaults.scale],
              rotate: [defaults.rotate, 0],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 1200,
              delay: anime.stagger(defaults.stagger, { start: defaults.delay })
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(selector);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [selector, options]);
};
