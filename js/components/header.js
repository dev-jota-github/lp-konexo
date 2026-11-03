/**
 * ============================================================
 * HEADER & MOBILE MENU COMPONENT
 * ============================================================
 */
import { $, $$ } from '../utils/dom.js';
import { SCROLL, ARIA } from '../utils/constants.js';

export function initHeader() {
  const header = $('#header');
  const burger = $('#burger');
  const menu = $('#menu');

  if (!header || !burger || !menu) return;

  // Header scroll behavior
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > SCROLL.HEADER_SCROLLED_THRESHOLD);

    if (y > SCROLL.HEADER_HIDE_THRESHOLD && y > lastY + SCROLL.HEADER_HIDE_DELTA) {
      header.classList.add('is-hidden');
    } else if (y < lastY - SCROLL.HEADER_HIDE_DELTA) {
      header.classList.remove('is-hidden');
    }
    lastY = y;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  function closeMenu() {
    if (!menu.classList.contains('is-open')) return;
    menu.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', ARIA.EXPANDED_FALSE);
    burger.setAttribute('aria-label', ARIA.LABEL_OPEN_MENU);
    if (window.lenis) window.lenis.start();
  }

  const onBurgerClick = () => {
    const open = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? ARIA.LABEL_CLOSE_MENU : ARIA.LABEL_OPEN_MENU);
    if (open) header.classList.remove('is-hidden');
    if (window.lenis) open ? window.lenis.stop() : window.lenis.start();
  };

  burger.addEventListener('click', onBurgerClick);

  // Close on Escape
  const onKeyDown = e => {
    if (e.key === 'Escape') closeMenu();
  };
  document.addEventListener('keydown', onKeyDown);

  // Close menu on anchor click (handled in smooth scroll)
  // but ensure menu closes when navigating
  const menuLinks = $$('.menu__links a');
  menuLinks.forEach(a => a.addEventListener('click', closeMenu));

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', onScroll);
    burger.removeEventListener('click', onBurgerClick);
    document.removeEventListener('keydown', onKeyDown);
    menuLinks.forEach(a => a.removeEventListener('click', closeMenu));
  };
}