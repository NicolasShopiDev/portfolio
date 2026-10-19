import type { APIRoute } from 'astro';
import { routes, updated, absolute, LANGS, type RouteKey } from '../i18n/routes';

// Hand-built so ES and EN pages with different slugs (/proyectos/ vs /en/projects/) are paired as alternates.
export const GET: APIRoute = () => {
  const urls = (Object.keys(routes) as RouteKey[]).flatMap((key) =>
    LANGS.map((lang) => {
      const alternates = LANGS.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${absolute(routes[key][l])}"/>`,
      ).join('\n');
      return [
        '  <url>',
        `    <loc>${absolute(routes[key][lang])}</loc>`,
        `    <lastmod>${updated[key]}</lastmod>`,
        alternates,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(routes[key].en)}"/>`,
        '  </url>',
      ].join('\n');
    }),
  );
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
