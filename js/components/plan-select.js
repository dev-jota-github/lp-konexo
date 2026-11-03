/**
 * ============================================================
 * PLAN SELECTION - Pre-selects plan in form
 * ============================================================
 */
import { $, $$, scrollToTarget } from '../utils/dom.js';

export function initPlanSelect() {
  const buttons = $$('[data-plan]');

  const handlers = buttons.map(btn => {
    const onClick = () => {
      const select = $('#f-interesse');
      if (select) select.value = btn.getAttribute('data-plan');

      scrollToTarget('#diagnostico');

      setTimeout(() => {
        const nomeInput = $('#f-nome');
        if (nomeInput) nomeInput.focus({ preventScroll: true });
      }, 900);
    };
    btn.addEventListener('click', onClick);
    return () => btn.removeEventListener('click', onClick);
  });

  return () => handlers.forEach(cleanup => cleanup());
}