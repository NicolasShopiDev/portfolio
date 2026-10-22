import { defineCollection, reference } from 'astro:content';
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


// Case studies (plan 2.3), one Markdown file per language: src/content/cases/<es|en>/<project slug>.md.
// The body holds the problem and the solution; the facts and the parts that need data from the
// client are in the frontmatter. A field left out shows as pending on previews (and blocks master);
// `false` means "confirmed: none", and the row or section is left out.
const optional = z.union([z.string(), z.literal(false)]).optional();
const cases = defineCollection({
  loader: glob({ pattern: '{es,en}/*.md', base: './src/content/cases' }),
  schema: z.object({
    project: reference('projects'),
    title: z.string().max(70),
    description: z.string().max(170),
    h1: z.string(),
    summary: z.string(),
    published: isoDate,
    updated: isoDate,
    facts: z.object({
      sector: z.string(),
      country: z.string(),
      theme: z.string(),
      plan: optional,
      engagement: optional, // direct client or through an agency
      duration: optional,
      team: optional,
    }),
    stack: z.array(z.string()).min(1),
    results: z.array(z.string()).optional(),
    resultsDone: z.boolean().default(false), // true once business metrics are in `results` or confirmed unavailable
    lessons: optional,
    testimonial: z.union([
      z.object({ quote: z.string(), name: z.string(), role: z.string(), company: z.string(), date: isoDate }),
      z.literal(false),
    ]).optional(),
    pending: z.array(z.string()).default([]), // open items that do not fit a field above
  }),
});

// The four generated silos (SEO.md). All four share the same shape: one Markdown file per
// language under <collection>/<es|en>/<slug>.md, the folder sets the language, the file name sets
// the URL, and `pair` is what ties the two languages together. Everything below is enforced at
// build time: a missing translation, a title Google would truncate or a `related` pointing at
// nothing all fail the build instead of shipping.
const paired = {
  // Same value in both languages: pairs them for hreflang, the language switch and `related`.
  pair: z.string().min(1),
  // Title tag (no suffix is added) and meta description, capped so Google cannot truncate them.
  seoTitle: z.string().min(1).max(65),
  description: z.string().min(70).max(165),
  // Target search term. One intention per URL: if two files share it, one of them is redundant.
  keyword: z.string().min(1),
  // `pair` values of up to three siblings in the same collection, linked at the end of the page.
  related: z.array(z.string()).max(3).default([]),
  // `pair` values of glossary terms this page mentions, linked in a "see also" block.
  terms: z.array(z.string()).max(6).default([]),
  updated: isoDate,
  // The day the platform facts on the page were last checked against Shopify's documentation.
  verified: isoDate.optional(),
  draft: z.boolean().default(false),
};

const pairedLoader = (base: string) => glob({ pattern: '{es,en}/*.md', base });

// Glossary: one platform concept per URL. `answer` is the definition, in one or two sentences,
// and it is what ends up in the DefinedTerm schema and in the first paragraph. It is the sentence
// an assistant quotes, so it has to stand on its own without the rest of the page.
const terms = defineCollection({
  loader: pairedLoader('./src/content/terms'),
  schema: z.object({
    ...paired,
    term: z.string().min(1),
    // Other names the same thing goes by, including the English one on Spanish pages.
    aliases: z.array(z.string()).max(6).default([]),
    category: z.enum(['b2b', 'functions', 'checkout', 'theme', 'api', 'plan']),
    answer: z.string().min(80).max(400),
  }),
});

// Questions: a real question per URL, from BLOG-RADAR. `answer` is the two sentences that go
// above everything else. If the answer needs more than ~600 words it is an article, not a question.
const questions = defineCollection({
  loader: pairedLoader('./src/content/questions'),
  schema: z.object({
    ...paired,
    question: z.string().min(1),
    category: z.enum(['b2b', 'functions', 'checkout', 'plan', 'cost', 'hiring', 'theme']),
    answer: z.string().min(80).max(500),
  }),
});

// Comparisons: two options, a table of real differences, and a recommendation that commits.
const compare = defineCollection({
  loader: pairedLoader('./src/content/compare'),
  schema: z.object({
    ...paired,
    a: z.string().min(1),
    b: z.string().min(1),
    // The recommendation, in one or two sentences. "It depends on your needs" is not an answer.
    verdict: z.string().min(80).max(500),
    rows: z
      .array(z.object({ criterion: z.string().min(1), a: z.string().min(1), b: z.string().min(1) }))
      .min(3),
  }),
});

// Service pages, long tail. The two flagship ones (/shopify-b2b/, /shopify-plus/) are hand-built
// views instead, because they carry their own layout; these share ServiceDocView.
const services = defineCollection({
  loader: pairedLoader('./src/content/services'),
  schema: z.object({
    ...paired,
    label: z.string().min(1),
    h1: z.string().min(1),
    // What the service does for the business, in the buyer's words. The hub and the home lead
    // with it; the h1 keeps the term people search for.
    pitch: z.string().min(20).max(90),
    // What the contact form preselects when the reader comes from this page.
    topic: z.enum(['b2b', 'plus', 'theme', 'integration', 'other']),
    lead: z.string().min(80).max(500),
    serviceName: z.string().min(1),
    serviceType: z.string().min(1),
    // Project slugs with a case study, shown as cards. Validated against the projects collection.
    cases: z.array(z.string()).max(3).default([]),
    faq: z.array(z.object({ q: z.string().min(1), a: z.string().min(1) })).min(2).max(6),
  }),
});

export const collections = { projects, posts, cases, terms, questions, compare, services };
