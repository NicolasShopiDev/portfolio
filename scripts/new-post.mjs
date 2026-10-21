// Creates the Markdown file for a new article, with today's date and the
// frontmatter already filled in, so writing one a day is just writing.
//
//   npm run post -- es shopify-precios-por-volumen "Precios por volumen en Shopify B2B"
//   npm run post -- en shopify-volume-pricing "Volume pricing in Shopify B2B" --pair shopify-precios-por-volumen
//
// --pair links this article to its version in the other language (hreflang and
// the language switch). Without it, the slug is used as the pair key.
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const args = process.argv.slice(2);
const flagIndex = args.indexOf('--pair');
const pairFlag = flagIndex === -1 ? null : args[flagIndex + 1];
const [lang, slug, ...titleParts] = flagIndex === -1 ? args : args.slice(0, flagIndex);
const title = titleParts.join(' ');

if (!['es', 'en'].includes(lang) || !slug || !title) {
  console.error('Usage: npm run post -- <es|en> <slug> "<Title>" [--pair <key>]');
  process.exit(1);
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error(`Slug "${slug}" must be lowercase words separated by hyphens, no accents.`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const file = join('src', 'content', 'posts', lang, `${slug}.md`);
const es = lang === 'es';

const template = `---
pair: ${pairFlag ?? slug}
title: '${title.replace(/'/g, "''")}'
seoTitle: 'TODO ${es ? 'título de 55-65 caracteres con la palabra clave al principio' : '55-65 character title tag, keyword first'}'
description: 'TODO ${es ? 'meta descripción de 110-160 caracteres: la respuesta y un motivo para hacer clic' : '110-160 character meta description: the answer plus a reason to click'}'
keyword: 'TODO ${es ? 'palabra clave principal' : 'primary keyword'}'
date: '${today}'
tags: ['TODO']
faq:
  - q: 'TODO'
    a: 'TODO'
  - q: 'TODO'
    a: 'TODO'
cta:
  heading: 'TODO'
  text: 'TODO'
  label: '${es ? 'Cuéntame tu caso' : 'Tell me about your store'}'
---

${es ? 'TODO: primer párrafo. Responde la pregunta en las dos primeras frases, con la palabra clave dentro. Nada de introducción larga.' : 'TODO: first paragraph. Answer the question in the first two sentences, keyword included. No long preamble.'}

## TODO ${es ? 'primer apartado' : 'first section'}
`;

await mkdir(dirname(file), { recursive: true });
try {
  await access(file);
  console.error(`${file} already exists.`);
  process.exit(1);
} catch {
  // Does not exist yet, which is what we want.
}
await writeFile(file, template, 'utf8');
console.log(`Created ${file}

Next:
  1. Write it. Every claim about the platform, checked against Shopify's docs today.
  2. npm run build   (fails if the title tag, the description or a date is off)
  3. npm run dev     and read it on a phone-sized window
  4. git add -A && git commit && git push`);
