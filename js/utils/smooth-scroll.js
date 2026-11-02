/**
 * ============================================================
 * SMOOTH SCROLL & ANCHOR NAVIGATION
 * ============================================================
 */
import { $, $$, scrollToTarget } from './dom.js';

export function initSmoothScroll() {
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (href.length < 2) {
      e.preventDefault();
      return;
    }

    const target = $(href);
    if (!target) return;

    e.preventDefault();

    // Close mobile menu if open
    const menu = $('#menu');
    const burger = $('#burger');
    if (menu?.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      burger?.classList.remove('is-open');
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Abrir menu');
      if (window.lenis) window.lenis.start();
    }

    scrollToTarget(target);
    history.replaceState(null, '', href);
  });
}