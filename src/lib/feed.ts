import { routes, absolute, type Lang } from '../i18n/routes';
import { seo } from '../i18n/ui';
import { publishedPosts } from './posts';

const escape = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Midday UTC: the posts carry a date, not a time, and this keeps the day right in every timezone.
const rfc822 = (iso: string) => new Date(`${iso}T12:00:00Z`).toUTCString();

/** RSS 2.0 feed of the published articles in one language. */
export const feed = async (lang: Lang) => {
  const posts = await publishedPosts(lang);
  const meta = seo.blog[lang];
  const self = `${absolute(routes.blog[lang])}rss.xml`;
  const items = posts.map((post) => {
    const d = post.entry.data;
    const url = absolute(post.path);
    return [
      '    <item>',
      `      <title>${escape(d.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <description>${escape(d.description)}</description>`,
      `      <pubDate>${rfc822(d.date)}</pubDate>`,
      ...d.tags.map((tag) => `      <category>${escape(tag)}</category>`),
      '    </item>',
    ].join('\n');
  });
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${escape(meta.title)}</title>`,
    `    <link>${absolute(routes.blog[lang])}</link>`,
    `    <description>${escape(meta.description)}</description>`,
    `    <language>${lang === 'es' ? 'es-ES' : 'en'}</language>`,
    '    <managingEditor>nicolasmhbusiness@gmail.com (Nicolás Mateos)</managingEditor>',
    `    <atom:link href="${self}" rel="self" type="application/rss+xml" />`,
    ...(posts[0] ? [`    <lastBuildDate>${rfc822(posts[0].modified)}</lastBuildDate>`] : []),
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
