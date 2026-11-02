/**
 * ============================================================
 * TITLE SPLIT BY WORD (preserves <em> elements)
 * ============================================================
 */
import { $$ } from '../utils/dom.js';

export function initSplitTitles() {
  function splitTitle(el) {
    const nodes = Array.from(el.childNodes);
    el.textContent = '';

    nodes.forEach(node => {
      if (node.nodeType === 3) { // Text node
        node.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            el.appendChild(document.createTextNode(' '));
            return;
          }
          // Punctuation attaches to previous word
          if (/^[.,;:!?…)]/.test(part) && el.lastElementChild?.classList.contains('w')) {
            el.lastElementChild.firstChild.appendChild(document.createTextNode(part));
            return;
          }
          const w = document.createElement('span');
          w.className = 'w';
          const wi = document.createElement('span');
          wi.className = 'wi';
          wi.textContent = part;
          w.appendChild(wi);
          el.appendChild(w);
        });
      } else if (node.nodeType === 1) { // Element node (like <em>)
        const w = document.createElement('span');
        w.className = 'w';
        const wi = document.createElement('span');
        wi.className = 'wi';
        wi.appendChild(node);
        w.appendChild(wi);
        el.appendChild(w);
      }
    });
  }

  try {
    $$('[data-split]').forEach(splitTitle);
  } catch (e) {
    console.warn('Split titles failed:', e);
  }
}