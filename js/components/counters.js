/**
 * ============================================================
 * COUNTER ANIMATIONS
 * ============================================================
 */
import { $$, prefersReducedMotion } from '../utils/dom.js';
import { ANIMATION } from '../utils/constants.js';

export function initCounters() {
  const counters = $$('[data-count]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const end = parseFloat(el.getAttribute('data-count'));
    if (!prefersReducedMotion() && typeof gsap !== 'undefined') {
      const obj = { v: 0 };
      gsap.to(obj, {
        v: end,
        duration: ANIMATION.COUNTER_DURATION,
        ease: 'power2.out',
        onUpdate: () => { el.textContent = Math.round(obj.v); }
      });
    } else {
      el.textContent = end;
    }
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => observer.observe(counter));
}