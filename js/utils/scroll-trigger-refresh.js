/**
 * ============================================================
 * SCROLLTRIGGER REFRESH
 * Refresh ScrollTrigger after fonts load and on window load
 * ============================================================
 */
import { ANIMATION } from './constants.js';

export function initScrollTriggerRefresh() {
  if (typeof ScrollTrigger === 'undefined') return;

  // Refresh after fonts load
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }

  // Refresh on window load
  window.addEventListener('load', () => ScrollTrigger.refresh());

  // Extra refresh after a delay (centralized constant)
  setTimeout(() => ScrollTrigger.refresh(), ANIMATION.SCROLL_TRIGGER_REFRESH_DELAY);
}