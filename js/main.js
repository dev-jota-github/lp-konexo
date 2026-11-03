/**
 * ============================================================
   MAIN JS ENTRY POINT
   Initializes all components in the correct order
   ============================================================
 */

// Config
import { CONFIG } from './config/config.js';

// Utils
import { $, $$, prefersReducedMotion, hasFinePointer, setupWhatsAppLinks } from './utils/dom.js';
import { initSmoothScroll } from './utils/smooth-scroll.js';
import { initScrollTriggerRefresh } from './utils/scroll-trigger-refresh.js';
import { loadComponents } from './utils/component-loader.js';
import { SCROLL } from './utils/constants.js';

// Components
import { initPreloader } from './components/preloader.js';
import { initHeader } from './components/header.js';
import { initCursor } from './components/cursor.js';
import { initMagneticButtons } from './components/magnetic.js';
import { initSpotlight } from './components/spotlight.js';
import { initSplitTitles } from './components/split-titles.js';
import { initReveals } from './components/reveals.js';
import { initMarquee } from './components/marquee.js';
import { initHeroFloat } from './components/hero-float.js';
import { initMetodoCarousel } from './components/metodo-carousel.js';
import { initCounters } from './components/counters.js';
import { initCasesPreview } from './components/cases-preview.js';
import { initDepoimentos } from './components/depoimentos.js';
import { initFAQ } from './components/faq.js';
import { initWppFloat } from './components/wpp-float.js';
import { initFooterParallax } from './components/footer-parallax.js';
import { initPlanSelect } from './components/plan-select.js';
import { initForm } from './components/form.js';

// Data renderers
import { initCasesRenderer } from './components/cases-renderer.js';
import { initNumerosRenderer } from './components/numeros-renderer.js';
import { initPlanosRenderer } from './components/planos-renderer.js';
import { initDepoimentosRenderer } from './components/depoimentos-renderer.js';
import { initSobreRenderer } from './components/sobre-renderer.js';
import { initFAQRenderer } from './components/faq-renderer.js';
import { initFAQSchema } from './components/faq-schema.js';

// Initialize Lenis smooth scroll if available
async function initLenis() {
  if (prefersReducedMotion() || typeof Lenis === 'undefined') return;

  try {
    const { default: Lenis } = await import('https://cdn.jsdelivr.net/npm/lenis@1.1.13/+esm');
    window.lenis = new Lenis({ lerp: 0.11, smoothWheel: true });

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      window.lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(t => window.lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = t => { window.lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  } catch (e) {
    console.warn('Lenis failed to load:', e);
  }
}

// Load HTML components
async function loadHTMLComponents() {
  await loadComponents([
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
    { path: './components/footer.html', target: 'footer' }
  ]);
}

// Render data-driven components
async function renderDataComponents() {
  await Promise.all([
    initCasesRenderer(),
    initNumerosRenderer(),
    initPlanosRenderer(),
    initDepoimentosRenderer(),
    initSobreRenderer(),
    initFAQRenderer(),
    initFAQSchema()
  ]);
}

// Main initialization
async function init() {
  // Mark JS as available
  document.documentElement.classList.replace('no-js', 'js');

  // Setup WhatsApp links from config
  setupWhatsAppLinks(CONFIG);

  // Load HTML components first
  await loadHTMLComponents();

  // Initialize Lenis (affects scroll behavior)
  await initLenis();

  // Render data-driven components
  await renderDataComponents();

  // Initialize all interactive components
  initPreloader(CONFIG);
  initHeader();
  initSmoothScroll();
  initCursor(CONFIG);
  initMagneticButtons();
  initSpotlight();
  initSplitTitles();
  initReveals();
  initMarquee();
  initHeroFloat();
  initMetodoCarousel();
  initCounters();
  initCasesPreview();
  initDepoimentos();
  initFAQ();
  initWppFloat();
  initFooterParallax();
  initPlanSelect();
  initForm();
  initScrollTriggerRefresh();

  // Scroll margin for fixed header (uses centralized constant)
  const style = document.createElement('style');
  style.textContent = `[id]{scroll-margin-top:${SCROLL.SCROLL_MARGIN_TOP}px}`;
  document.head.appendChild(style);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}