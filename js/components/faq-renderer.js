/**
 * ============================================================
 * FAQ RENDERER
 * Renders FAQ from data/faq.json
 * ============================================================
 */
import { $ } from '../utils/dom.js';
import { initFAQ } from './faq.js';
import { fetchFAQ } from '../utils/data-fetcher.js';

export async function initFAQRenderer() {
  const list = $('#faqList');
  if (!list) return;

  try {
    const data = await fetchFAQ();

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