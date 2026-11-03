/**
 * ============================================================
 * FAQ SCHEMA GENERATOR
 * Generates JSON-LD structured data for FAQPage from data/faq.json
 * ============================================================
 */
import { fetchFAQ } from '../utils/data-fetcher.js';

export async function initFAQSchema() {
  const schemaEl = document.getElementById('faqSchema');
  if (!schemaEl) return;

  try {
    const data = await fetchFAQ();

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    };

    schemaEl.textContent = JSON.stringify(schema, null, 2);
  } catch (e) {
    console.warn('FAQ schema generation failed:', e);
  }
}