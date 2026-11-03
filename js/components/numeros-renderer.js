/**
 * ============================================================
 * NÚMEROS RENDERER
 * Renders numbers from data/numeros.json
 * ============================================================
 */
import { $ } from '../utils/dom.js';
import { fetchNumeros } from '../utils/data-fetcher.js';

export async function initNumerosRenderer() {
  const grid = $('.numeros__grid');
  if (!grid) return;

  try {
    const data = await fetchNumeros();

    grid.innerHTML = data.numeros.map(num => `
      <div class="num" data-fade>
        <b><span data-count="${num.count}">0</span>${num.suffix || ''}</b>
        <span>${num.label}</span>
      </div>
    `).join('');
  } catch (e) {
    console.warn('Numeros renderer failed:', e);
  }
}