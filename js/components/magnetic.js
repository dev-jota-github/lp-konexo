/**
 * ============================================================
 * MAGNETIC BUTTONS COMPONENT
 * ============================================================
 */
import { $$, hasFinePointer, prefersReducedMotion } from '../utils/dom.js';
import { ANIMATION } from '../utils/constants.js';

export function initMagneticButtons() {
  if (!hasFinePointer() || prefersReducedMotion() || typeof gsap === 'undefined') return;

  const magneticButtons = $$('[data-magnetic]');

  const handlers = magneticButtons.map(btn => {
    const onMouseMove = e => {
      const rect = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - rect.left - rect.width / 2) * 0.28,
        y: (e.clientY - rect.top - rect.height / 2) * 0.32,
        duration: ANIMATION.MAGNETIC_EASE_DURATION,
        ease: 'power3.out'
      });
    };

    const onMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: ANIMATION.MAGNETIC_RETURN_DURATION, ease: 'elastic.out(1, 0.4)' });
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  });

  // Return cleanup function
  return () => handlers.forEach(cleanup => cleanup());
}