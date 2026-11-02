/**
 * ============================================================
 * MAGNETIC BUTTONS COMPONENT
 * ============================================================
 */
import { $$, hasFinePointer, prefersReducedMotion } from '../utils/dom.js';

export function initMagneticButtons() {
  if (!hasFinePointer() || prefersReducedMotion() || typeof gsap === 'undefined') return;

  $$('[data-magnetic]').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - rect.left - rect.width / 2) * 0.28,
        y: (e.clientY - rect.top - rect.height / 2) * 0.32,
        duration: 0.4,
        ease: 'power3.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}