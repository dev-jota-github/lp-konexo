/**
 * ============================================================
 * PLAN SELECTION - Pre-selects plan in form
 * ============================================================
 */
import { $, $$, scrollToTarget } from '../utils/dom.js';

export function initPlanSelect() {
  $$('[data-plan]').forEach(btn => {
    btn.addEventListener('click', () => {
      const select = $('#f-interesse');
      if (select) select.value = btn.getAttribute('data-plan');

      scrollToTarget('#diagnostico');

      setTimeout(() => {
        const nomeInput = $('#f-nome');
        if (nomeInput) nomeInput.focus({ preventScroll: true });
      }, 900);
    });
  });
}