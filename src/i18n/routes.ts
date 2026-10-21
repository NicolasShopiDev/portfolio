export const SITE = 'https://nicolasmateos.com';

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];

export type Alternates = Partial<Record<Lang, string>>;

// URL of every fixed page in each language it exists in. hreflang, the language switch and the
// sitemap read this map; a page without `en` has no English version yet (plan 1.3, batch 2).
// The hubs (services, glossary, questions, compare) are the parents of the generated pages:
// their children live in src/content/ and get their URL from the helpers below.
export const routes = {
  home: { es: '/', en: '/en/' },
  services: { es: '/servicios/', en: '/en/services/' },
  b2b: { es: '/shopify-b2b/', en: '/en/shopify-b2b-developer/' },
  plus: { es: '/shopify-plus/' },
  projects: { es: '/proyectos/', en: '/en/projects/' },
  glossary: { es: '/glosario/', en: '/en/glossary/' },
  questions: { es: '/preguntas/', en: '/en/questions/' },
  compare: { es: '/comparativas/', en: '/en/compare/' },
  code: { es: '/codigo/', en: '/en/code/' },
  about: { es: '/sobre-mi/', en: '/en/about/' },
  blog: { es: '/blog/', en: '/en/blog/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
} satisfies Record<string, Alternates & { es: string }>;

export type RouteKey = keyof typeof routes;

// Date of the last real content change per page (sitemap lastmod, dateModified). Update by hand.
// The hubs that list generated pages move on their own: the newest child's date wins, see lib/docs.ts.
export const updated: Record<RouteKey, string> = {
  home: '2026-10-21',
  services: '2026-10-21',
  b2b: '2026-10-21',
  plus: '2026-10-21',
  projects: '2026-10-21',
  glossary: '2026-10-21',
  questions: '2026-10-21',
  compare: '2026-10-21',
  code: '2026-10-21',
  about: '2026-10-21',
  blog: '2026-10-21',
  contact: '2026-10-19',
};

// Case studies live under the projects page, with the same slug in both languages.
export const casePath = (slug: string, lang: Lang) => `${routes.projects[lang]}${slug}/`;
export const caseAlternates = (slug: string): Alternates => ({ es: casePath(slug, 'es'), en: casePath(slug, 'en') });

// The generated silos. The slug comes from the file name, so it can differ per language
// (/servicios/apps-shopify-a-medida/ and /en/services/custom-shopify-apps/ are the same page).
export type DocHub = 'services' | 'glossary' | 'questions' | 'compare';
export const docPath = (hub: DocHub, slug: string, lang: Lang) => `${routes[hub][lang]}${slug}/`;

// Taxonomies: they group what already exists, so the segment is translated but the slug is not.
const TAXONOMY = {
  topic: { es: '/blog/tema/', en: '/en/blog/topic/' },
  sector: { es: '/proyectos/sector/', en: '/en/projects/sector/' },
  type: { es: '/proyectos/tipo/', en: '/en/projects/type/' },
} as const;

export type TaxonomyKind = keyof typeof TAXONOMY;
export const taxonomyBase = (kind: TaxonomyKind, lang: Lang) => TAXONOMY[kind][lang];
export const taxonomyPath = (kind: TaxonomyKind, slug: string, lang: Lang) => `${taxonomyBase(kind, lang)}${slug}/`;
// The segment is translated and so is the slug (/sector/joyeria/ and /sector/jewelry/), so both
// have to be passed in: they come from src/data/taxonomies.ts.
export const taxonomyAlternates = (kind: TaxonomyKind, slug: Record<Lang, string>): Alternates => ({
  es: taxonomyPath(kind, slug.es, 'es'),
  en: taxonomyPath(kind, slug.en, 'en'),
});

export const alternatesOf = (key: RouteKey): Alternates => routes[key];
export const absolute = (p: string) => new URL(p, SITE).href;
