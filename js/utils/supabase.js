/**
 * ============================================================
 * SUPABASE CLIENT
 * Initializes Supabase client for form submissions
 * ============================================================
 */

// Supabase configuration - replaced at build time via Vite env vars
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabaseClient = null;

/**
 * Initialize Supabase client (lazy)
 */
function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY env vars');
    return null;
  }

  try {
    // Normalize URL: remove trailing /rest/v1/ if present to avoid double path
    const normalizedUrl = SUPABASE_URL.replace(/\/rest\/v1\/?$/, '');

    // Using native fetch to avoid bundling the full Supabase JS client
    // We only need a simple insert, so a minimal wrapper is enough
    supabaseClient = {
      from(table) {
        const baseUrl = `${normalizedUrl}/rest/v1/${table}`;

        return {
          async insert(data) {
            const response = await fetch(baseUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Prefer': 'return=minimal'
              },
              body: JSON.stringify(data)
            });

            if (!response.ok) {
              const error = await response.json().catch(() => ({ message: 'Unknown error' }));
              throw new Error(`Supabase error: ${error.message || response.statusText}`);
            }

            return { data: null, error: null };
          }
        };
      }
    };

    return supabaseClient;
  } catch (e) {
    console.error('[Supabase] Failed to initialize:', e);
    return null;
  }
}

/**
 * Submit diagnostic form data to Supabase
 * @param {Object} formData - Form data object
 * @returns {Promise<{success: boolean, error?: string, skipped?: boolean}>}
 */
export async function submitDiagnostic(formData) {
  const client = getSupabaseClient();

  if (!client) {
    // Silently fail if Supabase not configured - don't block WhatsApp flow
    console.log('[Supabase] Not configured, skipping database save');
    return { success: true, skipped: true };
  }

  try {
    const { error } = await client.from('diagnosticos').insert({
      nome: formData.nome,
      empresa: formData.empresa,
      whatsapp: formData.whatsapp,
      instagram: formData.instagram || null,
      interesse: formData.interesse,
      investimento: formData.investimento,
      created_at: new Date().toISOString()
    });

    if (error) throw error;

    console.log('[Supabase] Diagnostic saved successfully');
    return { success: true };
  } catch (e) {
    console.error('[Supabase] Failed to save diagnostic:', e);
    // Don't throw - we don't want to block the WhatsApp flow
    return { success: false, error: e.message };
  }
}