/**
 * ============================================================
 * DOM UTILITIES
 * ============================================================
 */

/**
 * Query selector shortcut
 */
export const $ = (selector, context = document) => context.querySelector(selector);

/**
 * Query selector all shortcut
 */
export const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

/**
 * Check if reduced motion is preferred
 */
export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Check if fine pointer (mouse) is available
 */
export const hasFinePointer = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/**
 * Smooth scroll to target element
 */
export function scrollToTarget(target, offset = -88, duration = 1.2) {
  const el = typeof target === 'string' ? $(target) : target;
  if (!el) return;

  // Try Lenis first if available
  if (window.lenis) {
    window.lenis.scrollTo(el, { offset, duration });
  } else {
    el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  }
}

/**
 * Set WhatsApp links from config
 */
export function setupWhatsAppLinks(config) {
  const waURL = (msg = config.whatsappMessage) =>
    `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(msg)}`;

  $$('[data-wpp-link]').forEach(a => a.href = waURL());
  $$('a[href^="mailto:"]').forEach(a => a.href = `mailto:${config.email}`);
  $$('a[href*="instagram.com"]').forEach(a => a.href = config.instagram);

  if (!config.showPrices) {
    $$('.plan__price').forEach(p => p.innerHTML = 'Sob consulta<small>proposta após o diagnóstico</small>');
  }
}

/**
 * Toggle class with optional callback
 */
export function toggleClass(element, className, force) {
  if (!element) return;
  const shouldAdd = force !== undefined ? force : !element.classList.contains(className);
  element.classList.toggle(className, shouldAdd);
  return shouldAdd;
}

/**
 * Debounce function
 */
export function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Throttle function
 */
export function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}