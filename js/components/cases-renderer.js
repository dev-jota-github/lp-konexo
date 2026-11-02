/**
 * ============================================================
 * CASES RENDERER
 * Renders cases from data/cases.json
 * ============================================================
 */
import { $ } from '../utils/dom.js';

export async function initCasesRenderer() {
  const list = $('#casesList');
  const ctaText = $('#casesCtaText');
  const ctaBtn = $('#casesCtaBtn');

  if (!list) return;

  try {
    const response = await fetch('./data/cases.json');
    if (!response.ok) throw new Error('Failed to load cases');
    const data = await response.json();

    // Render cases
    list.innerHTML = data.cases.map(caseItem => `
      <a href="#diagnostico" class="case-row" data-case="${caseItem.id}" data-cursor="Ver case">
        <span class="case-row__name">${caseItem.name}</span>
        <span class="case-row__meta">${caseItem.category}</span>
        <span class="case-row__meta">${caseItem.services}</span>
        <span class="case-row__metric">${caseItem.metric}</span>
        <span class="case-row__go"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6m0 0H8m10 0v10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </a>
    `).join('');

    // Update CTA
    if (ctaText) ctaText.textContent = data.cta.text;
    if (ctaBtn) {
      ctaBtn.firstChild.textContent = data.cta.buttonText + ' ';
    }
  } catch (e) {
    console.warn('Cases renderer failed:', e);
  }
}