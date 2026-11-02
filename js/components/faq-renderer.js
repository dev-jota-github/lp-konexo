/**
 * ============================================================
 * FAQ RENDERER
 * Renders FAQ from data/faq.json
 * ============================================================
 */
import { $ } from '../utils/dom.js';

export async function initFAQRenderer() {
  const list = $('#faqList');
  if (!list) return;

  try {
    const response = await fetch('./data/faq.json');
    if (!response.ok) throw new Error('Failed to load FAQ');
    const data = await response.json();

    list.innerHTML = data.faq.map((item, index) => `
      <div class="faq__item">
        <button class="faq__q" aria-expanded="false" aria-controls="faq-a${index}" id="faq-q${index}">
          ${item.question}
          <span class="faq__icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>
        </button>
        <div class="faq__a" id="faq-a${index}" role="region" aria-labelledby="faq-q${index}">
          <div><p>${item.answer}</p></div>
        </div>
      </div>
    `).join('');

    // Re-initialize FAQ accordion after rendering
    initFAQ();
  } catch (e) {
    console.warn('FAQ renderer failed:', e);
  }
}

// FAQ accordion logic (duplicated here to avoid circular dependency)
function initFAQ() {
  document.querySelectorAll('.faq__item').forEach(item => {
    const btn = item.querySelector('.faq__q');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      document.querySelectorAll('.faq__item.is-open').forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          const otherBtn = other.querySelector('.faq__q');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}