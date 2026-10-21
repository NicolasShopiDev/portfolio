export const SITE = 'https://nicolasmateos.com';

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];

export type Alternates = Partial<Record<Lang, string>>;

// URL of every fixed page in each language it exists in. hreflang, the language switch and the
// sitemap read this map; a page without `en` has no English version yet (plan 1.3, batch 2).
export const routes = {
  home: { es: '/', en: '/en/' },
  b2b: { es: '/shopify-b2b/', en: '/en/shopify-b2b-developer/' },
  plus: { es: '/shopify-plus/' },
  projects: { es: '/proyectos/', en: '/en/projects/' },
  code: { es: '/codigo/', en: '/en/code/' },
  about: { es: '/sobre-mi/', en: '/en/about/' },
  blog: { es: '/blog/', en: '/en/blog/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
} satisfies Record<string, Alternates & { es: string }>;

export type RouteKey = keyof typeof routes;

// Date of the last real content change per page (sitemap lastmod, dateModified). Update by hand.
// The blog index moves on its own: the newest article's date wins, see lib/posts.ts.
export const updated: Record<RouteKey, string> = {
  home: '2026-10-21',
  b2b: '2026-10-21',
  plus: '2026-10-21',
  projects: '2026-10-21',
  code: '2026-10-21',
  about: '2026-10-21',
  blog: '2026-10-21',
  contact: '2026-10-19',
};

// Case studies live under the projects page, with the same slug in both languages.
export const casePath = (slug: string, lang: Lang) => `${routes.projects[lang]}${slug}/`;
export const caseAlternates = (slug: string): Alternates => ({ es: casePath(slug, 'es'), en: casePath(slug, 'en') });

export const alternatesOf = (key: RouteKey): Alternates => routes[key];
export const absolute = (p: string) => new URL(p, SITE).href;
