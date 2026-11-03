/**
 * ============================================================
 * DATA FETCHER
 * Centralized data fetching with caching to avoid duplicate requests
 * ============================================================
 */
import { DATA_PATHS } from './constants.js';

// In-memory cache for data
const dataCache = new Map();

/**
 * Fetch JSON data with caching
 * @param {string} key - Cache key (from DATA_PATHS)
 * @param {string} url - URL to fetch
 * @returns {Promise<any>} Parsed JSON data
 */
export async function fetchData(key, url) {
  // Return cached data if available
  if (dataCache.has(key)) {
    return dataCache.get(key);
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.status}`);
    }
    const data = await response.json();
    dataCache.set(key, data);
    return data;
  } catch (error) {
    console.warn(`[DataFetcher] Failed to load ${key}:`, error);
    throw error;
  }
}

/**
 * Convenience functions for each data file
 */
export const fetchCases = () => fetchData('cases', DATA_PATHS.CASES);
export const fetchDepoimentos = () => fetchData('depoimentos', DATA_PATHS.DEPOIMENTOS);
export const fetchFAQ = () => fetchData('faq', DATA_PATHS.FAQ);
export const fetchNumeros = () => fetchData('numeros', DATA_PATHS.NUMEROS);
export const fetchPlans = () => fetchData('plans', DATA_PATHS.PLANS);
export const fetchTeam = () => fetchData('team', DATA_PATHS.TEAM);

/**
 * Fetch multiple data files in parallel
 * @param {string[]} keys - Array of data keys to fetch
 * @returns {Promise<Object>} Object with key-value pairs
 */
export async function fetchAll(...keys) {
  const fetchMap = {
    cases: fetchCases,
    depoimentos: fetchDepoimentos,
    faq: fetchFAQ,
    numeros: fetchNumeros,
    plans: fetchPlans,
    team: fetchTeam,
  };

  const results = await Promise.allSettled(
    keys.map(key => fetchMap[key]().then(data => ({ key, data })))
  );

  const data = {};
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      data[result.value.key] = result.value.data;
    } else {
      console.warn(`[DataFetcher] Failed to load ${keys[index]}:`, result.reason);
    }
  });

  return data;
}

/**
 * Clear cache (useful for testing or re-fetching)
 */
export function clearCache() {
  dataCache.clear();
}

/**
 * Preload all data (call early to warm cache)
 */
export async function preloadAllData() {
  await fetchAll('cases', 'depoimentos', 'faq', 'numeros', 'plans', 'team');
}