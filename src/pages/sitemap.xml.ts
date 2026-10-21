import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { routes, updated, absolute, alternatesOf, caseAlternates, LANGS, type Lang, type RouteKey } from '../i18n/routes';
import { allPosts, latestDate } from '../lib/posts';

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

export const GET: APIRoute = async () => {
  const posts = (await allPosts()).filter((post) => !post.entry.data.draft);

  // Pages without an English version yet (/shopify-plus/) get only their Spanish URL.
  const pages = (Object.keys(routes) as RouteKey[]).flatMap((key) => {
    const alternates = alternatesOf(key);
    return LANGS.filter((lang) => alternates[lang]).map((lang) => {
      // The blog index moves every time an article is published.
      const lastmod =
        key === 'blog'
          ? latestDate(posts.filter((p) => p.lang === lang), updated.blog)
          : updated[key];
      return url(alternates[lang]!, lastmod, alternates);
    });
  });

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
    ...caseUrls,
    ...articles,
    '</urlset>',
    '',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
