/**
 * ============================================================
 * HERO FLOATING CARDS
 * ============================================================
 */
import { $, $$, prefersReducedMotion } from '../utils/dom.js';
import { ANIMATION } from '../utils/constants.js';

export function initHeroFloat() {
  if (prefersReducedMotion() || typeof gsap === 'undefined') return;

  try {
    // Float animation for cards
    $$('.fcard').forEach((card, i) => {
      gsap.to(card, {
        y: '+=14',
        duration: 6 + i,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: i * 0.6
      });
    });

    // Parallax for hero stage
    const heroStage = $('#heroStage');
    if (heroStage && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(heroStage, {
        y: ANIMATION.HERO_FLOAT_Y,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  } catch (e) {
    console.warn('Hero float failed:', e);
  }
}