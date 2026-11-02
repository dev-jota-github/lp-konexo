/**
 * ============================================================
 * SCROLLTRIGGER REFRESH
 * Refresh ScrollTrigger after fonts load and on window load
 * ============================================================
 */
export function initScrollTriggerRefresh() {
  if (typeof ScrollTrigger === 'undefined') return;

  // Refresh after fonts load
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }

  // Refresh on window load
  window.addEventListener('load', () => ScrollTrigger.refresh());

  // Extra refresh after a delay
  setTimeout(() => ScrollTrigger.refresh(), 1500);
}