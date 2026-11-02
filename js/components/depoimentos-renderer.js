/**
 * ============================================================
 * DEPOIMENTOS RENDERER
 * Renders testimonials from data/depoimentos.json
 * ============================================================
 */
import { $ } from '../utils/dom.js';

export async function initDepoimentosRenderer() {
  const track = $('#depoTrack');
  if (!track) return;

  try {
    const response = await fetch('./data/depoimentos.json');
    if (!response.ok) throw new Error('Failed to load depoimentos');
    const data = await response.json();

    track.innerHTML = data.depoimentos.map(depo => `
      <article class="depo__card" data-cursor="Arraste">
        <p class="depo__quote">${depo.quote}</p>
        <div class="depo__who">
          <span class="depo__photo" data-slot="${depo.photoSlot}">FOTO</span>
          <div><b>${depo.author}</b><span>${depo.company}</span></div>
        </div>
      </article>
    `).join('');
  } catch (e) {
    console.warn('Depoimentos renderer failed:', e);
  }
}