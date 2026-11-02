/**
 * ============================================================
 * SPOTLIGHT / MOUSE FOLLOWER COMPONENT
 * ============================================================
 */
import { $$, hasFinePointer } from '../utils/dom.js';

export function initSpotlight() {
  if (!hasFinePointer()) return;

  $$('.bento__card, [data-spotlight]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    }, { passive: true });
  });
}