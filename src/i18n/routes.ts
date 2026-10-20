export const SITE = 'https://nicolasmateos.com';

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];

// Every page exists in both languages; hreflang, the language switch and the sitemap read this map.
export const routes = {
  home: { es: '/', en: '/en/' },
  projects: { es: '/proyectos/', en: '/en/projects/' },
  about: { es: '/sobre-mi/', en: '/en/about/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
} as const;

export type RouteKey = keyof typeof routes;

// Date of the last real content change per page (sitemap lastmod, dateModified). Update by hand.
export const updated: Record<RouteKey, string> = {
  home: '2026-10-19',
  projects: '2026-10-19',
  about: '2026-10-19',
  contact: '2026-10-19',
};

export const path = (key: RouteKey, lang: Lang) => routes[key][lang];
export const absolute = (p: string) => new URL(p, SITE).href;
