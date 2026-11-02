/**
 * ============================================================
 * PLANOS RENDERER
 * Renders plans and modules from data/plans.json
 * ============================================================
 */
import { $ } from '../utils/dom.js';

export async function initPlanosRenderer() {
  const grid = $('#planosGrid');
  const modulosRow = $('#modulosRow');
  const combosText = $('#combosText');
  const planosNote = $('#planosNote');

  if (!grid) return;

  try {
    const response = await fetch('./data/plans.json');
    if (!response.ok) throw new Error('Failed to load plans');
    const data = await response.json();

    // Render plans
    grid.innerHTML = data.plans.map(plan => `
      <article class="plan ${plan.featured ? 'plan--featured' : ''}" data-fade>
        ${plan.featured && plan.badge ? `<span class="plan__badge">${plan.badge}</span>` : ''}
        <h3>${plan.name}</h3>
        <p class="plan__for">${plan.description}</p>
        <p class="plan__price">${plan.price}<small>${plan.period}</small></p>
        <ul class="plan__list">
          ${plan.features.map(feature => `
            <li class="${!feature.included ? 'muted' : ''}">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12.5 9.5 18 20 6.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              ${feature.text}
            </li>
          `).join('')}
        </ul>
        <button class="btn ${plan.featured ? 'btn--volt' : 'btn--ink'}" data-plan="${plan.name}" data-cursor="Escolher" ${plan.featured ? 'data-magnetic' : ''}>${plan.ctaText}</button>
      </article>
    `).join('');

    // Render modules
    if (modulosRow) {
      modulosRow.innerHTML = data.modules.map(module => `
        <span class="modulo"><b>${module.name}</b><i>${module.price}</i></span>
      `).join('');
    }

    // Render combos
    if (combosText) {
      combosText.innerHTML = `Combinações que costumam funcionar: ${data.combos.map(c => `<b>${c}</b>`).join(' · ')}`;
    }

    // Render note
    if (planosNote) {
      planosNote.textContent = data.note;
    }
  } catch (e) {
    console.warn('Planos renderer failed:', e);
  }
}