/**
 * ============================================================
 * PRELOADER COMPONENT
 * ============================================================
 */
import { $, prefersReducedMotion } from '../utils/dom.js';
import { STORAGE_KEYS, ANIMATION } from '../utils/constants.js';

/**
 * Safe sessionStorage getter
 */
function getStorageItem(key) {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Safe sessionStorage setter
 */
function setStorageItem(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // Ignore storage errors (private browsing, quota exceeded, etc.)
  }
}

export function initPreloader(config) {
  if (!config.enablePreloader) return;

  const preloader = $('#preloader');
  const count = $('#preCount');

  if (!preloader || !count) return;

  // Check if already seen this session
  const seen = getStorageItem(STORAGE_KEYS.PRELOADER_SEEN) === '1';

  // Skip preloader if reduced motion, already seen, or no GSAP
  if (prefersReducedMotion() || seen || typeof gsap === 'undefined') {
    preloader.remove();
    setStorageItem(STORAGE_KEYS.PRELOADER_SEEN, '1');
    return;
  }

  // GSAP animation for preloader
  document.body.style.overflow = 'hidden';

  const state = { v: 0 };
  const tl = gsap.timeline({
    onComplete: () => {
      preloader.remove();
      document.body.style.overflow = '';
      setStorageItem(STORAGE_KEYS.PRELOADER_SEEN, '1');
    }
  });

  tl.to('.preloader__logo .draw', {
    strokeDashoffset: 0,
    duration: ANIMATION.PRELOADER_DURATION,
    ease: 'power2.inOut',
    stagger: ANIMATION.PRELOADER_STAGGER
  })
  .to(state, {
    v: 100,
    duration: ANIMATION.PRELOADER_COUNTER_DURATION,
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