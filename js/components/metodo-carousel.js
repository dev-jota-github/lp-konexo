/**
 * ============================================================
 * MÉTODO CAROUSEL
 * Touch, trackpad, mouse drag, and button navigation
 * ============================================================
 */
import { $, $$ } from '../utils/dom.js';

export function initMetodoCarousel() {
  const viewport = $('#metodoViewport');
  const railDraw = $('#metodoRailDraw');

  if (!viewport) return;

  // Update rail progress
  const updateRail = () => {
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    if (railDraw && maxScroll > 0) {
      railDraw.style.transform = `scaleX(${viewport.scrollLeft / maxScroll})`;
    }
  };

  viewport.addEventListener('scroll', updateRail, { passive: true });
  window.addEventListener('resize', updateRail);
  updateRail();

  // Mouse drag
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  viewport.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse') return;
    isDragging = true;
    startX = e.clientX;
    scrollLeft = viewport.scrollLeft;
    viewport.classList.add('is-drag');
  });

  window.addEventListener('pointermove', e => {
    if (!isDragging) return;
    viewport.scrollLeft = scrollLeft - (e.clientX - startX);
  });

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove('is-drag');
  };

  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);
  viewport.addEventListener('dragstart', e => e.preventDefault());

  // Navigation buttons
  $$('[data-mdir]').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = $('.step', viewport);
      if (!step) return;
      const stepWidth = step.getBoundingClientRect().width + 24; // gap
      viewport.scrollBy({ left: stepWidth * Number(btn.dataset.mdir), behavior: 'smooth' });
    });
  });
}