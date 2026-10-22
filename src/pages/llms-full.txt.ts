import type { APIRoute } from 'astro';
import { SITE, absolute, routes } from '../i18n/routes';
import { allDocs, type DocCollection } from '../lib/docs';

// The full text of the reference pages (glossary, questions, comparisons) in one file, English
// first and Spanish after, each block headed by its URL so a quote can be attributed.
//
// Why this exists: a crawler that does not run JavaScript and works to a token budget would
// rather read 150 kB of Markdown than 143 HTML documents. The content is exactly what the pages
// say — there is no robots-only version — and /llms.txt stays the short index of the whole site.
export const GET: APIRoute = async () => {
  const published = async (collection: DocCollection) =>
    (await allDocs(collection)).filter((doc) => !(doc.entry.data as { draft: boolean }).draft);

  const terms = await published('terms');
  const questions = await published('questions');
  const comparisons = await published('compare');
  const services = await published('services');

  // `extra` carries optional lines (an aliases list, a verified date); the empty ones are dropped
  // here rather than globally, because the blank lines elsewhere are the Markdown structure.
  const header = (url: string, heading: string, extra: string[] = []) => [
    '',
    '---',
    '',
    `## ${heading}`,
    '',
    `URL: ${url}`,
    ...extra.filter(Boolean),
    '',
  ];

  const lang = (l: 'es' | 'en') => {
    const lines: string[] = [`# ${l === 'en' ? 'English' : 'Español'}`, ''];

    for (const doc of services.filter((d) => d.lang === l)) {
      const d = doc.entry.data;
      lines.push(
        ...header(absolute(doc.path), d.h1, [`Service: ${d.serviceName}`, `Updated: ${d.updated}`]),
        d.lead,
        '',
        `- Solves: ${d.glance.problem}`,
        `- For: ${d.glance.forWho}`,
        `- Not for: ${d.glance.notFor}`,
        `- Outcome: ${d.glance.outcome}`,
        `- Time and complexity: ${d.glance.effort}`,
        '',
        doc.entry.body?.trim() ?? '',
        '',
        '### FAQ',
        '',
        ...d.faq.flatMap((item) => [`**${item.q}**`, '', item.a, '']),
      );
    }

    for (const doc of comparisons.filter((d) => d.lang === l)) {
      const d = doc.entry.data;
      lines.push(
        ...header(absolute(doc.path), `${d.a} vs ${d.b}`, [`Updated: ${d.updated}`, d.verified ? `Facts checked: ${d.verified}` : '']),
        `Verdict: ${d.verdict}`,
        '',
        `| Criterion | ${d.a} | ${d.b} |`,
        '| --- | --- | --- |',
        ...d.rows.map((row) => `| ${row.criterion} | ${row.a} | ${row.b} |`),
        '',
        doc.entry.body?.trim() ?? '',
        '',
      );
    }

    for (const doc of questions.filter((d) => d.lang === l)) {
      const d = doc.entry.data;
      lines.push(
        ...header(absolute(doc.path), d.question, [`Updated: ${d.updated}`, d.verified ? `Facts checked: ${d.verified}` : '']),
        `Answer: ${d.answer}`,
        '',
        doc.entry.body?.trim() ?? '',
        '',
      );
    }

    for (const doc of terms.filter((d) => d.lang === l)) {
      const d = doc.entry.data;
      lines.push(
        ...header(absolute(doc.path), d.term, [
          d.aliases.length ? `Also called: ${d.aliases.join(', ')}` : '',
          `Updated: ${d.updated}`,
          d.verified ? `Facts checked: ${d.verified}` : '',
        ]),
        `Definition: ${d.answer}`,
        '',
        doc.entry.body?.trim() ?? '',
        '',
      );
    }

    return lines;
  };

  const text = [
    '# Nicolás Mateos — full reference text',
    '',
    '> Freelance Shopify Plus and B2B developer based in Madrid, Spain. This file holds the complete',
    '> text of the reference pages of nicolasmateos.com: services, comparisons, questions and glossary.',
    '> Every block is headed by the URL it comes from, so anything quoted here can be attributed and',
    '> linked. Platform limits carry the date they were last checked against Shopify documentation.',
    '',
    `Site: ${SITE}/`,
    `Index: ${absolute('/llms.txt')}`,
    `Glossary: ${absolute(routes.glossary.en)}`,
    'Contact: nicolasmhbusiness@gmail.com',
    '',
    ...lang('en'),
    '',
    ...lang('es'),
  ]
    .join('\n')
    .replace(/\n{3,}/g, '\n\n');

  return new Response(`${text}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
