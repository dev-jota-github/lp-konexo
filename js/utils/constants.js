/**
 * ============================================================
 * CENTRALIZED CONSTANTS
 * Single source of truth for magic numbers and config
 * ============================================================
 */

// Scroll & Navigation
export const SCROLL = {
  HEADER_SCROLLED_THRESHOLD: 40,
  HEADER_HIDE_THRESHOLD: 300,
  HEADER_HIDE_DELTA: 6,
  ANCHOR_OFFSET: -88,
  ANCHOR_DURATION: 1.2,
  SCROLL_MARGIN_TOP: 96,
};

// Animation & Timing
export const ANIMATION = {
  LENIS_LERP: 0.11,
  LENIS_SMOOTH_WHEEL: true,
  CURSOR_EASE: 0.2,
  PRELOADER_SEEN_KEY: 'konexo_seen',
  PRELOADER_STAGGER: 0.08,
  PRELOADER_DURATION: 1.1,
  PRELOADER_COUNTER_DURATION: 1.1,
  SCROLL_TRIGGER_REFRESH_DELAY: 1500,
  FORM_SUCCESS_DELAY: 700,
  MAGNETIC_EASE_DURATION: 0.4,
  MAGNETIC_RETURN_DURATION: 0.6,
  CASES_PREVIEW_EASE: 0.5,
  DEPOIMENTOS_DRAG_EASE: 0.4,
  HERO_FLOAT_Y: -60,
  COUNTER_DURATION: 1.8,
};

// Breakpoints & Media Queries
export const BREAKPOINTS = {
  REDUCED_MOTION: '(prefers-reduced-motion: reduce)',
  FINE_POINTER: '(hover: hover) and (pointer: fine)',
};

// Supabase
export const SUPABASE = {
  REST_PATH: '/rest/v1/',
  TABLE_DIAGNOSTICOS: 'diagnosticos',
};

// Storage Keys
export const STORAGE_KEYS = {
  PRELOADER_SEEN: 'konexo_seen',
};

// Selectors
export const SELECTORS = {
  PRELOADER: '#preloader',
  PRELOADER_COUNT: '#preCount',
  HEADER: '#header',
  BURGER: '#burger',
  MENU: '#menu',
  MENU_LINKS: '.menu__links a',
  CURSOR: '.cursor',
  CURSOR_LABEL: '.cursor__label',
  WPP_LINKS: '[data-wpp-link]',
  MAILTO_LINKS: 'a[href^="mailto:"]',
  INSTAGRAM_LINKS: 'a[href*="instagram.com"]',
  ANCHOR_LINKS: 'a[href^="#"]',
  FIELD: '.field',
  FORM: '#diagForm',
  WHATSAPP_INPUT: '#f-wpp',
  SUBMIT_BTN: '#formSubmit',
  SUCCESS_EL: '#formSuccess',
  AGAIN_BTN: '#formAgain',
};

// ARIA
export const ARIA = {
  EXPANDED_TRUE: 'true',
  EXPANDED_FALSE: 'false',
  LABEL_OPEN_MENU: 'Abrir menu',
  LABEL_CLOSE_MENU: 'Fechar menu',
};

// Data Paths
export const DATA_PATHS = {
  CASES: './data/cases.json',
  DEPOIMENTOS: './data/depoimentos.json',
  FAQ: './data/faq.json',
  NUMEROS: './data/numeros.json',
  PLANS: './data/plans.json',
  TEAM: './data/team.json',
};

// Component Paths
export const COMPONENT_PATHS = [
  { path: './components/header.html', target: 'header' },
  { path: './components/hero.html', target: '#hero' },
  { path: './components/prova.html', target: '#prova' },
  { path: './components/cenario.html', target: '#cenario' },
  { path: './components/servicos.html', target: '#servicos' },
  { path: './components/metodo.html', target: '#metodo' },
  { path: './components/cases.html', target: '#cases' },
  { path: './components/numeros.html', target: '#numeros' },
  { path: './components/planos.html', target: '#planos' },
  { path: './components/oferta.html', target: '#oferta' },
  { path: './components/depoimentos.html', target: '#depoimentos' },
  { path: './components/sobre.html', target: '#sobre' },
  { path: './components/faq.html', target: '#faq' },
  { path: './components/diagnostico.html', target: '#diagnostico' },
  { path: './components/footer.html', target: 'footer' },
];