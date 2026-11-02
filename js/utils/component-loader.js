/**
 * ============================================================
 * COMPONENT LOADER
 * Dynamically loads HTML components into placeholder elements
 * ============================================================
 */

/**
 * Load an HTML component into a target element
 */
export async function loadComponent(componentPath, targetSelector) {
  try {
    const response = await fetch(componentPath);
    if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
    const html = await response.text();

    const target = document.querySelector(targetSelector);
    if (target) {
      target.outerHTML = html;
    }
  } catch (e) {
    console.warn(`Component loader failed for ${componentPath}:`, e);
  }
}

/**
 * Load multiple components in parallel
 */
export async function loadComponents(components) {
  await Promise.all(
    components.map(({ path, target }) => loadComponent(path, target))
  );
}