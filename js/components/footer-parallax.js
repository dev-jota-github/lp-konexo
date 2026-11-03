/**
 * ============================================================
 * FOOTER WORDMARK PARALLAX
 * ============================================================
 */
import { $, prefersReducedMotion } from '../utils/dom.js';

export function initFooterParallax() {
  if (prefersReducedMotion() || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const footerWord = $('#footerWord');
  const footer = $('#footer');

  if (!footerWord || !footer) return;

  gsap.registerPlugin(ScrollTrigger);

  const st = gsap.fromTo(footerWord,
    { yPercent: 34 },
    {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: footer,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true
      }
    }
  );

  return () => {
    if (st?.scrollTrigger) st.scrollTrigger.kill();
  };
}