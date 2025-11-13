import { useEffect } from 'react';
import anime from 'animejs';

export const useHeroAnimation = () => {
  useEffect(() => {
    // Animate hero title letters
    anime.timeline({ loop: false })
      .add({
        targets: '.hero-title .letter',
        translateY: [-100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: (el, i) => 50 * i
      })
      .add({
        targets: '.hero-subtitle',
        translateY: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000
      }, '-=600')
      .add({
        targets: '.hero-cta',
        scale: [0.8, 1],
        opacity: [0, 1],
        easing: 'easeOutElastic(1, .8)',
        duration: 1200
      }, '-=400')
      .add({
        targets: '.scroll-indicator',
        translateY: [20, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 800
      }, '-=600');

    // Continuous pulsing animation for scroll indicator
    anime({
      targets: '.scroll-indicator',
      translateY: [0, 10, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      loop: true
    });
  }, []);
};
