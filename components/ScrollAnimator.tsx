'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Mounts an IntersectionObserver that adds .is-visible to any element
 * with class .animate-on-scroll once it enters the viewport.
 * Re-runs on every client-side route change so new page elements are observed.
 */
export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay so the new page's DOM has rendered before we observe
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target); // only animate once
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      document
        .querySelectorAll('.animate-on-scroll')
        .forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
