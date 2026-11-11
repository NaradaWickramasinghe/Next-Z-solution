import { useEffect, useState } from 'react';

/**
 * Returns the `href` (e.g. `#services`) of the currently visible section.
 */
export function useScrollSpy(hrefs: readonly string[]) {
  const [active, setActive] = useState(hrefs[0] ?? '');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const sections = hrefs
      .map((h) => document.querySelector(h))
      .filter(Boolean) as Element[];

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setActive('#' + en.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, [hrefs]);

  return active;
}

