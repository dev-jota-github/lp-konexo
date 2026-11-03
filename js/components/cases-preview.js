/**
 * ============================================================
 * CASES FLOATING PREVIEW
 * ============================================================
 */
import { $, $$, hasFinePointer, prefersReducedMotion } from '../utils/dom.js';
import { ANIMATION } from '../utils/constants.js';

export function initCasesPreview() {
  if (!hasFinePointer() || prefersReducedMotion() || typeof gsap === 'undefined') return;

  const list = $('#casesList');
  const preview = $('#casePreview');

  if (!list || !preview) return;

  const slides = $$('.case-preview__slide', preview);

  gsap.set(preview, { xPercent: -50, yPercent: -118 });

  const moveX = gsap.quickTo(preview, 'x', { duration: ANIMATION.CASES_PREVIEW_EASE, ease: 'power3' });
  const moveY = gsap.quickTo(preview, 'y', { duration: ANIMATION.CASES_PREVIEW_EASE, ease: 'power3' });

  list.addEventListener('mousemove', e => {
    moveX(e.clientX);
    moveY(e.clientY);
  }, { passive: true });

  $$('.case-row', list).forEach(row => {
    row.addEventListener('mouseenter', () => {
      slides.forEach((slide, i) => slide.classList.toggle('is-on', i === +row.dataset.case));
      gsap.to(preview, { opacity: 1, scale: 1, duration: 0.35, ease: 'power3.out' });
    });
  });

  list.addEventListener('mouseleave', () => {
    gsap.to(preview, { opacity: 0, scale: 0.9, duration: 0.3 });
  });
}