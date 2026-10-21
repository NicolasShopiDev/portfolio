import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { routes, absolute, updated, casePath, taxonomyPath } from '../i18n/routes';
import { allPosts } from '../lib/posts';
import { allDocs, type DocCollection } from '../lib/docs';
import { taxonomies } from '../data/taxonomies';

// Plain factual summary for tools that read /llms.txt. Generated from the same data as the pages.
export const GET: APIRoute = async () => {
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  const order = Object.fromEntries(projects.map((p) => [p.id, p.data.order]));
  const cases = (await getCollection('cases', (c) => c.id.startsWith('en/')))
    .sort((a, b) => order[a.data.project.id] - order[b.data.project.id]);
  const lastCase = cases.map((c) => c.data.updated).sort().at(-1) ?? '';
  const posts = (await allPosts()).filter((post) => !post.entry.data.draft);

  // The generated silos. English is the primary line and the Spanish URL goes in brackets, the
  // same shape the Pages section uses. `line` decides what reads best for each kind of page:
  // a glossary entry is worth quoting by its definition, a question by its answer.
  const published = async (name: DocCollection) =>
    (await allDocs(name)).filter((doc) => !(doc.entry.data as { draft: boolean }).draft);
  const pairUp = async (name: DocCollection, line: (data: any, url: string, es?: string) => string) => {
    const docs = await published(name);
    return docs
      .filter((doc) => doc.lang === 'en')
      .map((doc) => {
        const twin = docs.find((d) => d.pair === doc.pair && d.lang === 'es');
        return line(doc.entry.data, absolute(doc.path), twin && absolute(twin.path));
      });
  };
  const spanish = (es?: string) => (es ? ` (Spanish: ${es})` : '');

  const serviceLines = await pairUp('services', (d, url, es) => `- [${d.h1}](${url})${spanish(es)}: ${d.lead}`);
  const termLines = await pairUp('terms', (d, url, es) => `- [${d.term}](${url})${spanish(es)}: ${d.answer}`);
  const questionLines = await pairUp('questions', (d, url, es) => `- [${d.question}](${url})${spanish(es)}: ${d.answer}`);
  const compareLines = await pairUp('compare', (d, url, es) => `- [${d.a} vs ${d.b}](${url})${spanish(es)}: ${d.verdict}`);
  const groupingLines = (['sector', 'type'] as const).flatMap((kind) =>
    taxonomies(kind).map(
      (tax) =>
        `- [${tax.h1.en}](${absolute(taxonomyPath(kind, tax.slug.en, 'en'))}) (Spanish: ${absolute(taxonomyPath(kind, tax.slug.es, 'es'))}): ${tax.description.en}`,
    ),
  );
  const articles = (lang: 'es' | 'en') =>
    posts
      .filter((post) => post.lang === lang)
      .map((post) => `- [${post.entry.data.title}](${absolute(post.path)}) (${post.entry.data.date}): ${post.entry.data.description}`);
  const lines = [
    '# Nicolás Mateos',
    '',
    '> Freelance Shopify Plus developer based in Madrid, Spain. Specialist in B2B, Shopify Functions and Checkout Extensibility. On Shopify since 2021 and freelancing since 2022. Since October 2024 also the sole front-end developer at a B2B-focused Shopify Plus agency whose client storefronts add up to over €36M in annual GMV. Works remotely in Spanish and English with brands and agencies in Spain and the rest of Europe.',
    '',
    'Specialties: B2B wholesale storefronts (Companies, catalogs, price lists), Shopify Functions in JavaScript and Rust, Checkout Extensibility and customer account extensions, custom embedded apps (Node.js, Express, Shopify CLI), GraphQL integrations, Core Web Vitals.',
    '',
    'Contact: nicolasmhbusiness@gmail.com',
    '',
    `Last updated: ${[...Object.values(updated), lastCase].sort().at(-1)}`,
    '',
    `Full text of the reference pages, in one file: ${absolute('/llms-full.txt')}`,
    '',
    '## Pages',
    '',
    `- [Home (Spanish)](${absolute(routes.home.es)}): desarrollador Shopify freelance en España`,
    `- [Home (English)](${absolute(routes.home.en)}): freelance Shopify Plus and B2B developer in Spain`,
    `- [Shopify B2B development](${absolute(routes.b2b.en)}): wholesale portals with or without Shopify Plus, B2B features by plan (Spanish: ${absolute(routes.b2b.es)})`,
    `- [Shopify Plus development, Spanish](${absolute(routes.plus.es)}): Shopify Functions, Checkout Extensibility, Shopify Scripts migration FAQ`,
    `- [Services](${absolute(routes.services.en)}): every kind of work, what it includes and how long it takes (Spanish: ${absolute(routes.services.es)})`,
    `- [Glossary](${absolute(routes.glossary.en)}): Shopify Plus and B2B terms defined, with the platform limit and the date it was checked (Spanish: ${absolute(routes.glossary.es)})`,
    `- [Questions](${absolute(routes.questions.en)}): short answers on plans, limits and pricing (Spanish: ${absolute(routes.questions.es)})`,
    `- [Comparisons](${absolute(routes.compare.en)}): plan and platform decisions, with a recommendation (Spanish: ${absolute(routes.compare.es)})`,
    `- [Projects](${absolute(routes.projects.en)}): every project with client, year, scope and stack (Spanish: ${absolute(routes.projects.es)})`,
    `- [Code](${absolute(routes.code.en)}): public repositories, three annotated B2B patterns and how this site is built (Spanish: ${absolute(routes.code.es)})`,
    `- [About](${absolute(routes.about.en)}): facts and work history (Spanish: ${absolute(routes.about.es)})`,
    `- [Blog](${absolute(routes.blog.en)}): articles on Shopify Plus, B2B, Functions and checkout (Spanish: ${absolute(routes.blog.es)})`,
    `- [Contact](${absolute(routes.contact.en)}) (Spanish: ${absolute(routes.contact.es)})`,
    '',
    '## Case studies',
    '',
    ...cases.map((c) => `- [${c.data.h1}](${absolute(casePath(c.data.project.id, 'en'))}): ${c.data.summary} (Spanish: ${absolute(casePath(c.data.project.id, 'es'))})`),
    '',
    '## Projects',
    '',
    ...projects.map((p) => `- [${p.data.name}](${absolute(routes.projects.en)}#${p.id}) (${p.data.year}, ${p.data.badge}): ${p.data.role.en}`),
    '',
    ...(articles('en').length ? ['## Articles (English)', '', ...articles('en'), ''] : []),
    ...(articles('es').length ? ['## Artículos (español)', '', ...articles('es'), ''] : []),
    ...(serviceLines.length ? ['## Services', '', ...serviceLines, ''] : []),
    ...(groupingLines.length ? ['## Projects by sector and type', '', ...groupingLines, ''] : []),
    ...(questionLines.length ? ['## Questions and answers', '', ...questionLines, ''] : []),
    ...(compareLines.length ? ['## Comparisons', '', ...compareLines, ''] : []),
    ...(termLines.length ? ['## Glossary', '', ...termLines, ''] : []),
    '## Profiles',
    '',
    '- [LinkedIn](https://www.linkedin.com/in/nicolas-mateos-shopify/)',
    '- [GitHub](https://github.com/NicolasShopiDev)',
    '- [Upwork](https://www.upwork.com/freelancers/~0167007dc504c9b9ab)',
    '',
    '## Public repositories',
    '',
    '- [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab): the Shopify Function that runs in the Checkout Lab on the home page, with its input query and tests',
    '- [shopify-b2b-order-portal](https://github.com/NicolasShopiDev/shopify-b2b-order-portal): a wholesale order form for Shopify B2B that runs without Shopify Plus, built on Dawn',
    '- [portfolio](https://github.com/NicolasShopiDev/portfolio): the source of this site (Astro, two languages, build-time image pipeline)',
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
