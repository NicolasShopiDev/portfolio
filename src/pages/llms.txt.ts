import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { routes, absolute, updated } from '../i18n/routes';

// Plain factual summary for tools that read /llms.txt. Generated from the same data as the pages.
export const GET: APIRoute = async () => {
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  const lines = [
    '# Nicolás Mateos',
    '',
    '> Spanish freelance Shopify Plus and B2B front-end developer based in Madrid, Spain, working remotely. On Shopify since 2021 and freelancing since 2022. Works in Spanish and English with brands and agencies in Spain and the rest of Europe.',
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
    `- [About](${absolute(routes.about.en)}): facts and work history (Spanish: ${absolute(routes.about.es)})`,
    `- [Contact](${absolute(routes.contact.en)}) (Spanish: ${absolute(routes.contact.es)})`,
    '',
    '## Projects',
    '',
    ...projects.map((p) => `- [${p.data.name}](${absolute(routes.projects.en)}#${p.id}) (${p.data.year}, ${p.data.badge}): ${p.data.role.en}`),
    '',
    '## Profiles',
    '',
    '- [LinkedIn](https://www.linkedin.com/in/nicolas-mateos-shopify/)',
    '- [GitHub](https://github.com/NicolasShopiDev)',
    '- [Upwork](https://www.upwork.com/freelancers/~0167007dc504c9b9ab)',
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
