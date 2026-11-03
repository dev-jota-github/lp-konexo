/**
 * ============================================================
 * DEPOIMENTOS RENDERER
 * Renders testimonials from data/depoimentos.json
 * ============================================================
 */
import { $ } from '../utils/dom.js';
import { fetchDepoimentos } from '../utils/data-fetcher.js';

export async function initDepoimentosRenderer() {
  const track = $('#depoTrack');
  if (!track) return;

  try {
    const data = await fetchDepoimentos();

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