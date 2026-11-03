/**
 * ============================================================
 * DIAGNÓSTICO FORM
 * Validation, WhatsApp submission, success state
 * ============================================================
 */
import { $, $$ } from '../utils/dom.js';
import { CONFIG } from '../config/config.js';

export function initForm() {
  const form = $('#diagForm');
  if (!form) return;

  const wppInput = $('#f-wpp');
  const submitBtn = $('#formSubmit');
  const successEl = $('#formSuccess');
  const againBtn = $('#formAgain');

  // Phone mask: (00) 00000-0000
  if (wppInput) {
    wppInput.addEventListener('input', () => {
      let v = wppInput.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 6) v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
      else if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
      else if (v.length > 0) v = `(${v}`;
      wppInput.value = v;
    });
  }

  const setError = (input, hasError) => {
    const field = input.closest('.field');
    if (!field) return;
    field.classList.toggle('has-error', hasError);
    input.setAttribute('aria-invalid', String(hasError));
  };

  const validate = () => {
    let ok = true;

    const nome = $('#f-nome');
    const empresa = $('#f-empresa');
    const interesse = $('#f-interesse');
    const invest = $('#f-invest');

    if (nome.value.trim().length < 2) { setError(nome, true); ok = false; } else setError(nome, false);
    if (empresa.value.trim().length < 2) { setError(empresa, true); ok = false; } else setError(empresa, false);
    if (wppInput.value.replace(/\D/g, '').length < 10) { setError(wppInput, true); ok = false; } else setError(wppInput, false);
    if (!interesse.value) { setError(interesse, true); ok = false; } else setError(interesse, false);
    if (!invest.value) { setError(invest, true); ok = false; } else setError(invest, false);

    return ok;
  };

  // Clear error on input
  form.addEventListener('input', e => {
    const field = e.target.closest('.field');
    if (field?.classList.contains('has-error')) setError(e.target, false);
  });

  // Reset form
  if (againBtn) {
    againBtn.addEventListener('click', () => {
      form.reset();
      successEl.classList.remove('is-on');
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Quero meu diagnóstico gratuito
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="18" height="18">
          <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    });
  }

  // Submit
  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (!validate()) {
      const firstErr = $('.field.has-error input, .field.has-error select', form);
      if (firstErr) firstErr.focus();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando…';

    const formData = {
      nome: $('#f-nome').value.trim(),
      empresa: $('#f-empresa').value.trim(),
      whatsapp: wppInput.value,
      instagram: $('#f-insta').value.trim() || null,
      interesse: $('#f-interesse').value,
      investimento: $('#f-invest').value
    };

    const msg =
      'Olá! Vim pelo site da Konexo e quero meu diagnóstico gratuito.\n\n' +
      'Nome: ' + formData.nome + '\n' +
      'Empresa: ' + formData.empresa + '\n' +
      'WhatsApp: ' + formData.whatsapp + '\n' +
      'Instagram/Site: ' + (formData.instagram || '—') + '\n' +
      'Interesse: ' + formData.interesse + '\n' +
      'Investimento mensal: ' + formData.investimento;

    // Open WhatsApp within user gesture (avoids popup blocker)
    window.open(
      `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener'
    );

    setTimeout(() => {
      successEl.classList.add('is-on');
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Quero meu diagnóstico gratuito
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="18" height="18">
          <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    }, 700);
  });
}