/**
 * ============================================================
 * PRELOADER COMPONENT
 * ============================================================
 */
import { $, prefersReducedMotion } from '../utils/dom.js';

export function initPreloader(config) {
  if (!config.enablePreloader) return;

  const preloader = $('#preloader');
  const count = $('#preCount');

  if (!preloader || !count) return;

  // Check if already seen this session
  let seen = false;
  try {
    seen = sessionStorage.getItem('konexo_seen') === '1';
  } catch (e) {}

  // Skip preloader if reduced motion, already seen, or no GSAP
  if (prefersReducedMotion() || seen || typeof gsap === 'undefined') {
    preloader.remove();
    try { sessionStorage.setItem('konexo_seen', '1'); } catch (e) {}
    return;
  }

  // GSAP animation for preloader
  document.body.style.overflow = 'hidden';

  const state = { v: 0 };
  const tl = gsap.timeline({
    onComplete: () => {
      preloader.remove();
      document.body.style.overflow = '';
      try { sessionStorage.setItem('konexo_seen', '1'); } catch (e) {}
    }
  });

  tl.to('.preloader__logo .draw', {
    strokeDashoffset: 0,
    duration: 0.9,
    ease: 'power2.inOut',
    stagger: 0.08
  })
  .to(state, {
    v: 100,
    duration: 1.1,
    ease: 'power2.inOut',
    onUpdate: () => { count.textContent = Math.round(state.v); }
  }, '<')
  .to(preloader, {
    yPercent: -100,
    duration: 0.7,
    ease: 'power3.inOut',
    delay: 0.15
  });
}