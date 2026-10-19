import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.object({ es: z.string().min(1), en: z.string().min(1) });

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

export const collections = { projects };
