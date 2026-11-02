/**
 * ============================================================
 * WHATSAPP FLOATING BUTTON
 * Shows when hero section is not visible
 * ============================================================
 */
import { $ } from '../utils/dom.js';

export function initWppFloat() {
  const wpp = $('#wppFloat');
  const hero = $('#hero');

  if (!wpp || !hero) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      wpp.classList.toggle('is-on', !entry.isIntersecting);
    });
  }, { threshold: 0.2 });

  observer.observe(hero);
}