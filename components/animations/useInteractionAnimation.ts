import anime from 'animejs';

export const cardHoverAnimation = (target: string | HTMLElement) => {
  anime({
    targets: target,
    scale: 1.05,
    boxShadow: '0 20px 60px rgba(0, 212, 255, 0.4)',
    duration: 300,
    easing: 'easeOutCubic'
  });
};

export const cardLeaveAnimation = (target: string | HTMLElement) => {
  anime({
    targets: target,
    scale: 1,
    boxShadow: '0 10px 30px rgba(0, 212, 255, 0.2)',
    duration: 300,
    easing: 'easeOutCubic'
  });
};

export const buttonClickAnimation = (target: string | HTMLElement) => {
  anime({
    targets: target,
    scale: [1, 0.95, 1],
    duration: 300,
    easing: 'easeInOutQuad'
  });
};

export const iconRotateAnimation = (target: string | HTMLElement) => {
  anime({
    targets: target,
    rotate: 360,
    duration: 600,
    easing: 'easeInOutCubic'
  });
};

export const borderGlowAnimation = (target: string | HTMLElement) => {
  anime({
    targets: target,
    borderColor: ['#00d4ff', '#7b2ff7', '#f107a3', '#00d4ff'],
    duration: 3000,
    easing: 'linear',
    loop: true
  });
};

export const inputFocusAnimation = (target: string | HTMLElement, labelTarget?: string | HTMLElement) => {
  anime.timeline({ loop: false })
    .add({
      targets: target,
      borderColor: '#00d4ff',
      boxShadow: '0 0 0 2px rgba(0, 212, 255, 0.3)',
      duration: 300,
      easing: 'easeOutCubic'
    })
    .add({
      targets: labelTarget,
      translateY: -8,
      scale: 0.85,
      color: '#00d4ff',
      duration: 300,
      easing: 'easeOutCubic'
    }, '-=300');
};

export const inputBlurAnimation = (target: string | HTMLElement, labelTarget?: string | HTMLElement, hasValue?: boolean) => {
  anime.timeline({ loop: false })
    .add({
      targets: target,
      borderColor: '#374151',
      boxShadow: '0 0 0 0px rgba(0, 212, 255, 0)',
      duration: 300,
      easing: 'easeOutCubic'
    })
    .add({
      targets: labelTarget,
      translateY: hasValue ? -8 : 0,
      scale: hasValue ? 0.85 : 1,
      color: hasValue ? '#9ca3af' : '#6b7280',
      duration: 300,
      easing: 'easeOutCubic'
    }, '-=300');
};

export const loadingSpinnerAnimation = (target: string | HTMLElement) => {
  anime({
    targets: target,
    rotate: 360,
    duration: 1000,
    easing: 'linear',
    loop: true
  });
};

export const successToastAnimation = (target: string | HTMLElement) => {
  anime.timeline({ loop: false })
    .add({
      targets: target,
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutElastic(1, .6)'
    })
    .add({
      targets: target,
      translateY: [0, 100],
      opacity: [1, 0],
      duration: 400,
      easing: 'easeInCubic',
      delay: 3000
    });
};
