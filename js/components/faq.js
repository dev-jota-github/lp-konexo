/**
 * ============================================================
 * FAQ ACCORDION
 * ============================================================
 */
import { $, $$ } from '../utils/dom.js';

export function initFAQ() {
  $$('.faq__item').forEach(item => {
    const btn = $('.faq__q', item);
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all other items
      $$('.faq__item.is-open').forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          const otherBtn = $('.faq__q', other);
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}