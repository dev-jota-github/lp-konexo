/**
 * ============================================================
 * HEADER & MOBILE MENU COMPONENT
 * ============================================================
 */
import { $, $$ } from '../utils/dom.js';

export function initHeader() {
  const header = $('#header');
  const burger = $('#burger');
  const menu = $('#menu');

  if (!header || !burger || !menu) return;

  // Header scroll behavior
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 40);

    if (y > 300 && y > lastY + 6) {
      header.classList.add('is-hidden');
    } else if (y < lastY - 6) {
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
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menu');
    if (window.lenis) window.lenis.start();
  }

  burger.addEventListener('click', () => {
    const open = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    if (open) header.classList.remove('is-hidden');
    if (window.lenis) open ? window.lenis.stop() : window.lenis.start();
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close menu on anchor click (handled in smooth scroll)
  // but ensure menu closes when navigating
  $$('.menu__links a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });
}