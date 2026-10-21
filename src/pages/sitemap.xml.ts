import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import {
  routes,
  updated,
  absolute,
  alternatesOf,
  caseAlternates,
  taxonomyAlternates,
  LANGS,
  type Lang,
  type RouteKey,
} from '../i18n/routes';
import { allPosts, latestDate } from '../lib/posts';
import { allDocs, type DocCollection } from '../lib/docs';
import { taxonomies } from '../data/taxonomies';

// Hand-built so ES and EN pages with different slugs (/proyectos/ vs /en/projects/) are paired as alternates.
const url = (loc: string, lastmod: string, alternates: Partial<Record<Lang, string>>) => {
  const links = LANGS.filter((l) => alternates[l]).map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${absolute(alternates[l]!)}"/>`,
  );
  const xDefault = alternates.en ?? loc;
  return [
    '  <url>',
    `    <loc>${absolute(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    ...links,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(xDefault)}"/>`,
    '  </url>',
  ].join('\n');
};

// Which collection hangs off which hub, so a hub's lastmod can follow its newest child.
const HUB_COLLECTION: Partial<Record<RouteKey, DocCollection>> = {
  services: 'services',
  glossary: 'terms',
  questions: 'questions',
  compare: 'compare',
};

export const GET: APIRoute = async () => {
  const posts = (await allPosts()).filter((post) => !post.entry.data.draft);

  // The generated silos. Drafts stay out of the sitemap, the hub and the feeds, but keep a URL.
  const docs = Object.fromEntries(
    await Promise.all(
      (['services', 'terms', 'questions', 'compare'] as DocCollection[]).map(async (name) => [
        name,
        (await allDocs(name)).filter((doc) => !(doc.entry.data as { draft: boolean }).draft),
      ]),
    ),
  ) as Record<DocCollection, Awaited<ReturnType<typeof allDocs>>>;

  const docDate = (doc: (typeof docs)['terms'][number]) => (doc.entry.data as { updated: string }).updated;
  const newest = (name: DocCollection, lang: Lang, fallback: string) =>
    docs[name].filter((d) => d.lang === lang).map(docDate).sort().at(-1) ?? fallback;

  // Pages without an English version yet (/shopify-plus/) get only their Spanish URL.
  const pages = (Object.keys(routes) as RouteKey[]).flatMap((key) => {
    const alternates = alternatesOf(key);
    return LANGS.filter((lang) => alternates[lang]).map((lang) => {
      // A hub moves every time one of its pages is published or edited.
      const collection = HUB_COLLECTION[key];
      const lastmod =
        key === 'blog'
          ? latestDate(posts.filter((p) => p.lang === lang), updated.blog)
          : collection
            ? newest(collection, lang, updated[key])
            : updated[key];
      return url(alternates[lang]!, lastmod, alternates);
    });
  });

  // One entry per generated page, paired with its twin in the other language.
  const docUrls = (['services', 'terms', 'questions', 'compare'] as DocCollection[]).flatMap((name) =>
    docs[name].map((doc) => {
      const alternates = Object.fromEntries(
        docs[name].filter((d) => d.pair === doc.pair).map((d) => [d.lang, d.path]),
      ) as Partial<Record<Lang, string>>;
      return url(doc.path, docDate(doc), alternates);
    }),
  );

  // Project groupings: they change when the projects they list change, so they share that date.
  const taxonomyUrls = (['sector', 'type'] as const).flatMap((kind) =>
    taxonomies(kind).flatMap((tax) => {
      const alternates = taxonomyAlternates(kind, tax.slug);
      return LANGS.map((lang) => url(alternates[lang]!, updated.projects, alternates));
    }),
  );

  // Case studies: both languages share one lastmod, the later of the two files.
  const cases = await getCollection('cases');
  const caseUpdated = (slug: string) =>
    cases.filter((c) => c.data.project.id === slug).map((c) => c.data.updated).sort().at(-1)!;
  const caseUrls = [...new Set(cases.map((c) => c.data.project.id))].flatMap((slug) => {
    const alternates = caseAlternates(slug);
    return LANGS.map((lang) => url(alternates[lang]!, caseUpdated(slug), alternates));
  });

  const articles = posts.map((post) => {
    const alternates = Object.fromEntries(
      posts
        .filter((p) => p.entry.data.pair === post.entry.data.pair)
        .map((p) => [p.lang, p.path]),
    ) as Partial<Record<Lang, string>>;
    return url(post.path, post.modified, alternates);
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...pages,
    ...docUrls,
    ...taxonomyUrls,
    ...caseUrls,
    ...articles,
    '</urlset>',
    '',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
