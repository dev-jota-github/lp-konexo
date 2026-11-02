/**
 * ============================================================
 * MARQUEE COMPONENT
 * Duplicates content for infinite loop, reverses on scroll direction
 * ============================================================
 */
import { $ } from '../utils/dom.js';

export function initMarquee() {
  const track = $('[data-marquee]');
  if (!track) return;

  // Duplicate content for seamless loop
  track.innerHTML += track.innerHTML;
  track.classList.add('track');

  const wrap = track.closest('.marquee');
  if (!wrap) return;

  let prevY = window.scrollY;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (Math.abs(y - prevY) > 4) {
      wrap.classList.toggle('marquee--reverse', y < prevY);
    }
    prevY = y;
  }, { passive: true });
}