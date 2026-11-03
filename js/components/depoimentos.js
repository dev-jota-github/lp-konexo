/**
 * ============================================================
 * DEPOIMENTOS CAROUSEL
 * Native scroll + mouse drag + button navigation
 * ============================================================
 */
import { $, $$ } from '../utils/dom.js';
import { ANIMATION } from '../utils/constants.js';

export function initDepoimentos() {
  const track = $('#depoTrack');
  if (!track) return;

  // Mouse drag
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const onPointerDown = e => {
    if (e.pointerType !== 'mouse') return;
    isDragging = true;
    startX = e.clientX;
    scrollLeft = track.scrollLeft;
    track.classList.add('is-drag');
  };

  const onPointerMove = e => {
    if (isDragging) track.scrollLeft = scrollLeft - (e.clientX - startX);
  };

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('is-drag');
  };

  track.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);
  track.addEventListener('dragstart', e => e.preventDefault());

  // Navigation buttons
  $$('.depo__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = $('.depo__card', track);
      if (!card) return;
      const step = card.getBoundingClientRect().width + 22; // gap
      track.scrollBy({ left: step * Number(btn.dataset.dir), behavior: 'smooth' });
    });
  });

  // Return cleanup function for proper disposal
  return () => {
    track.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', endDrag);
    window.removeEventListener('pointercancel', endDrag);
  };
}