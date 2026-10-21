import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.object({ es: z.string().min(1), en: z.string().min(1) });
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD');

const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: z.object({
    order: z.number().int(),
    name: z.string(),
    client: z.string(),
    year: z.string(),
    url: z.url().optional(),
    platform: z.enum(['shopify', 'shopify-plus']),
    badge: z.string(),
    // A plain string is the brand's own (English) slogan; use { es, en } when the brand has both.
    slogan: z.union([z.string(), localized]).optional(),
    tags: z.object({ es: z.array(z.string()).min(1), en: z.array(z.string()).min(1) }),
    type: localized,
    role: localized,
    detail: localized,
    images: z.object({
      dir: z.string(),
      grid: z.string(),
      banner: z.string(),
      highlights: z.array(z.object({ file: z.string(), alt: localized })),
    }),
  }),
});

// One Markdown file per article, under src/content/posts/<lang>/<slug>.md.
// The folder sets the language and the file name sets the URL, so neither is repeated here.
const posts = defineCollection({
  loader: glob({ pattern: '{es,en}/*.md', base: './src/content/posts' }),
  schema: z.object({
    // Same value in the Spanish and English version of an article: it pairs them for
    // hreflang, the language switch and `related`. Unique per article otherwise.
    pair: z.string().min(1),
    title: z.string().min(1),
    // Title tag (no suffix is added) and meta description. The caps are the point:
    // the build fails instead of letting Google truncate them.
    seoTitle: z.string().min(1).max(65),
    description: z.string().min(70).max(165),
    // Target search term, used in the article's keywords and to keep the brief honest.
    keyword: z.string().min(1),
    date: isoDate,
    updated: isoDate.optional(),
    tags: z.array(z.string()).min(1).max(4),
    // Rendered as a FAQ section and as FAQPage structured data.
    faq: z.array(z.object({ q: z.string().min(1), a: z.string().min(1) })).min(2).max(6).optional(),
    // Closing call to action. Falls back to the generic one in i18n/ui.ts.
    cta: z.object({ heading: z.string(), text: z.string(), label: z.string() }).optional(),
    // `pair` values of up to three articles to link at the end.
    related: z.array(z.string()).max(3).optional(),
    // Drafts build (so they can be read on a preview branch) but stay out of the
    // listing, the sitemap and the feed, and are marked noindex.
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
