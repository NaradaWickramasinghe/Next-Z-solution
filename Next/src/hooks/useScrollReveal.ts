import { useEffect } from 'react';

/**
 * Adds `.reveal` to targets, then `.in` when they scroll into view.
 * Fully compatible with React 19 / StrictMode remounts.
 */
export function useScrollReveal(selector: string) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const targets = document.querySelectorAll(selector);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    targets.forEach((t) => {
      // If it hasn't animated in yet, ensure it has the reveal base class
      if (!t.classList.contains('in')) {
        t.classList.add('reveal');
      }
      io.observe(t);
    });

    return () => {
      io.disconnect();
    };
  }, [selector]);
}
