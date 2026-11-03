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

  const triggers = [];

  // Word-by-word reveal for [data-split] elements
  $$('[data-split]').forEach(heading => {
    const words = heading.querySelectorAll('.wi');
    if (words.length) {
      const anim = gsap.to(words, {
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
      if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
    }
  });

  // Fade-in for [data-fade] elements
  $$('[data-fade]').forEach(el => {
    const anim = gsap.to(el, {
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
    if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
  });

  return () => {
    triggers.forEach(st => st.kill());
  };
}