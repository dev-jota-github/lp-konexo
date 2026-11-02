/**
 * ============================================================
 * NÚMEROS RENDERER
 * Renders numbers from data/numeros.json
 * ============================================================
 */
import { $ } from '../utils/dom.js';

export async function initNumerosRenderer() {
  const grid = $('.numeros__grid');
  if (!grid) return;

  try {
    const response = await fetch('./data/numeros.json');
    if (!response.ok) throw new Error('Failed to load numeros');
    const data = await response.json();

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