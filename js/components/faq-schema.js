/**
 * ============================================================
 * FAQ SCHEMA GENERATOR
 * Generates JSON-LD structured data for FAQPage from data/faq.json
 * ============================================================
 */

export async function initFAQSchema() {
  const schemaEl = document.getElementById('faqSchema');
  if (!schemaEl) return;

  try {
    const response = await fetch('./data/faq.json');
    if (!response.ok) throw new Error('Failed to load FAQ for schema');
    const data = await response.json();

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