import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { routes, absolute, updated } from '../i18n/routes';
import { allPosts } from '../lib/posts';

// Plain factual summary for tools that read /llms.txt. Generated from the same data as the pages.
export const GET: APIRoute = async () => {
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  const posts = (await allPosts()).filter((post) => !post.entry.data.draft);
  const articles = (lang: 'es' | 'en') =>
    posts
      .filter((post) => post.lang === lang)
      .map((post) => `- [${post.entry.data.title}](${absolute(post.path)}) (${post.entry.data.date}): ${post.entry.data.description}`);
  const lines = [
    '# Nicolás Mateos',
    '',
    '> Spanish freelance Shopify Plus and B2B front-end developer based in Madrid, Spain, working remotely. On Shopify since 2021 and freelancing since 2022. Since October 2024 also the sole front-end developer at a B2B-focused Shopify Plus agency whose client storefronts add up to over €36M in annual GMV. Works in Spanish and English with brands and agencies in Spain and the rest of Europe.',
    '',
    'Specialties: B2B wholesale storefronts (Companies, catalogs, price lists), Shopify Functions in JavaScript and Rust, Checkout Extensibility and customer account extensions, custom embedded apps (Node.js, Express, Shopify CLI), GraphQL integrations, Core Web Vitals.',
    '',
    'Contact: nicolasmhbusiness@gmail.com',
    '',
    `Last updated: ${Object.values(updated).sort().at(-1)}`,
    '',
    '## Pages',
    '',
    `- [Home (Spanish)](${absolute(routes.home.es)}): desarrollador Shopify freelance en España`,
    `- [Home (English)](${absolute(routes.home.en)}): freelance Shopify Plus and B2B developer in Spain`,
    `- [Projects](${absolute(routes.projects.en)}): every project with client, year, scope and stack (Spanish: ${absolute(routes.projects.es)})`,
    `- [Code](${absolute(routes.code.en)}): public repositories, three annotated B2B patterns and how this site is built (Spanish: ${absolute(routes.code.es)})`,
    `- [About](${absolute(routes.about.en)}): facts and work history (Spanish: ${absolute(routes.about.es)})`,
    `- [Blog](${absolute(routes.blog.en)}): articles on Shopify Plus, B2B, Functions and checkout (Spanish: ${absolute(routes.blog.es)})`,
    `- [Contact](${absolute(routes.contact.en)}) (Spanish: ${absolute(routes.contact.es)})`,
    '',
    '## Projects',
    '',
    ...projects.map((p) => `- [${p.data.name}](${absolute(routes.projects.en)}#${p.id}) (${p.data.year}, ${p.data.badge}): ${p.data.role.en}`),
    '',
    ...(articles('en').length ? ['## Articles (English)', '', ...articles('en'), ''] : []),
    ...(articles('es').length ? ['## Artículos (español)', '', ...articles('es'), ''] : []),
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
