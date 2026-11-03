/**
 * ============================================================
 * SPOTLIGHT / MOUSE FOLLOWER COMPONENT
 * ============================================================
 */
import { $$, hasFinePointer } from '../utils/dom.js';

export function initSpotlight() {
  if (!hasFinePointer()) return;

  const cards = $$('.bento__card, [data-spotlight]');

  const handlers = cards.map(card => {
    const onMouseMove = e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    card.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => card.removeEventListener('mousemove', onMouseMove);
  });

  return () => handlers.forEach(cleanup => cleanup());
}