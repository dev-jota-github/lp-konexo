/**
 * ============================================================
 * CUSTOM CURSOR COMPONENT
 * ============================================================
 */
import { $, $$, hasFinePointer, prefersReducedMotion } from '../utils/dom.js';
import { ANIMATION } from '../utils/constants.js';

export function initCursor(config) {
  if (!config.enableCursor) return;
  if (!hasFinePointer() || prefersReducedMotion()) return;

  const cursor = $('.cursor');
  const label = $('.cursor__label');

  if (!cursor || !label) return;

  let cx = innerWidth / 2;
  let cy = innerHeight / 2;
  let tx = cx;
  let ty = cy;

  window.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
  }, { passive: true });

  function loop() {
    cx += (tx - cx) * ANIMATION.CURSOR_EASE;
    cy += (ty - cy) * ANIMATION.CURSOR_EASE;
    cursor.style.transform = `translate(${cx - cursor.offsetWidth / 2}px, ${cy - cursor.offsetHeight / 2}px)`;
    requestAnimationFrame(loop);
  }

  loop();

  document.addEventListener('mouseover', e => {
    const target = e.target.closest('[data-cursor]');
    if (target) {
      cursor.classList.add('is-active');
      label.textContent = target.getAttribute('data-cursor');
    } else if (e.target.closest('a, button, select, input')) {
      cursor.classList.add('is-active');
      label.textContent = '';
    } else {
      cursor.classList.remove('is-active');
    }
  }, { passive: true });
}