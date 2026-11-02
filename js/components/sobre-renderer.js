/**
 * ============================================================
 * SOBRE / TIME RENDERER
 * Renders team and values from data/team.json
 * ============================================================
 */
import { $ } from '../utils/dom.js';

export async function initSobreRenderer() {
  const teamContainer = $('#sobreTeam');
  const valoresGrid = $('#valoresGrid');

  if (!teamContainer || !valoresGrid) return;

  try {
    const response = await fetch('./data/team.json');
    if (!response.ok) throw new Error('Failed to load team data');
    const data = await response.json();

    // Render team
    teamContainer.innerHTML = data.team.map(member => `
      <div class="person" data-fade>
        <span class="person__photo" data-slot="${member.photoSlot}">FOTO</span>
        <div>
          <b>${member.name}</b>
          <span>${member.role}</span>
          <p>${member.quote}</p>
        </div>
      </div>
    `).join('');

    // Render values
    valoresGrid.innerHTML = data.values.map(valor => `
      <div class="valor" data-fade>
        <b>${valor.title}</b>
        <p>${valor.description}</p>
      </div>
    `).join('');
  } catch (e) {
    console.warn('Sobre renderer failed:', e);
  }
}