/**
 * ============================================================
 * REVEAL ANIMATIONS (GSAP + ScrollTrigger)
 * ============================================================
 */
import { $$, prefersReducedMotion } from '../utils/dom.js';

export function initReveals() {
  if (prefersReducedMotion() || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    // Fallback: show all elements immediately
    $$('[data-split] .wi').forEach(el => el.style.transform = 'none');
    $$('[data-fade]').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    return;
  }

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Word-by-word reveal for [data-split] elements
  $$('[data-split]').forEach(heading => {
    const words = heading.querySelectorAll('.wi');
    if (words.length) {
      gsap.to(words, {
        y: 0,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          once: true
        }
      });
    }
  });

  // Fade-in for [data-fade] elements
  $$('[data-fade]').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true
      }
    });
  });
}