import { getCollection, type CollectionEntry } from 'astro:content';
import { LANGS, docPath, type Alternates, type DocHub, type Lang } from '../i18n/routes';

// The four generated silos share one shape (see content.config.ts), so they share one loader.
// Everything a view needs about a page — its language, its URL, the same page in the other
// language, its siblings — is derived here instead of in each view.
export type DocCollection = 'services' | 'terms' | 'questions' | 'compare';

const HUB: Record<DocCollection, DocHub> = {
  services: 'services',
  terms: 'glossary',
  questions: 'questions',
  compare: 'compare',
};

/** The fields every paired collection has. Lets this module work without knowing which one it has. */
interface PairedData {
  pair: string;
  seoTitle: string;
  description: string;
  keyword: string;
  related: string[];
  terms: string[];
  updated: string;
  verified?: string;
  draft: boolean;
}

export interface Doc<N extends DocCollection = DocCollection> {
  entry: CollectionEntry<N>;
  lang: Lang;
  /** File name without the extension; it is the last URL segment and may differ per language. */
  slug: string;
  /** Site path, always with a trailing slash. */
  path: string;
  pair: string;
}

const paired = (entry: CollectionEntry<DocCollection>) => entry.data as unknown as PairedData;

const describe = <N extends DocCollection>(collection: N, entry: CollectionEntry<N>): Doc<N> => {
  const [folder, ...rest] = entry.id.split('/');
  const lang = folder as Lang;
  const slug = rest.join('/');
  if (!LANGS.includes(lang) || !slug) {
    throw new Error(`"${collection}/${entry.id}" must live in src/content/${collection}/es/ or /en/`);
  }
  return { entry, lang, slug, path: docPath(HUB[collection], slug, lang), pair: paired(entry).pair };
};

/** Every page of a collection, in both languages, drafts included. */
export const allDocs = async <N extends DocCollection>(collection: N): Promise<Doc<N>[]> =>
  (await getCollection(collection)).map((entry) => describe(collection, entry as CollectionEntry<N>));

/**
 * The published pages of one language, alphabetical by title-ish key. Both languages must exist:
 * hreflang and the language switch assume it, so a missing translation fails the build here
 * rather than shipping a page that points at a 404.
 */
export const publishedDocs = async <N extends DocCollection>(collection: N, lang: Lang): Promise<Doc<N>[]> => {
  const docs = await allDocs(collection);
  const pairs = new Map<Lang, Set<string>>(LANGS.map((l) => [l, new Set<string>()]));
  for (const doc of docs) pairs.get(doc.lang)!.add(doc.pair);
  for (const doc of docs) {
    const other: Lang = doc.lang === 'es' ? 'en' : 'es';
    if (!pairs.get(other)!.has(doc.pair)) {
      throw new Error(
        `"${collection}/${doc.entry.id}" has no ${other.toUpperCase()} version. ` +
          `Add src/content/${collection}/${other}/<slug>.md with pair: "${doc.pair}".`,
      );
    }
  }
  return docs.filter((doc) => doc.lang === lang && !paired(doc.entry).draft);
};

/** This page's URL in each language, for hreflang and the language switch. */
export const docAlternates = (doc: Doc, docs: Doc[]): Alternates =>
  Object.fromEntries(docs.filter((d) => d.pair === doc.pair).map((d) => [d.lang, d.path])) as Alternates;

/**
 * Up to three siblings to read next: the ones listed in `related`, in that order. A `related`
 * that points at a pair nobody wrote is a broken internal link, so it fails the build.
 */
export const relatedDocs = <N extends DocCollection>(doc: Doc<N>, docs: Doc<N>[]): Doc<N>[] => {
  const pool = docs.filter((d) => d.lang === doc.lang && d.pair !== doc.pair && !paired(d.entry).draft);
  return paired(doc.entry).related.map((pair) => {
    const found = pool.find((d) => d.pair === pair);
    if (!found) throw new Error(`"${doc.entry.id}" relates to "${pair}", which has no published ${doc.lang.toUpperCase()} page.`);
    return found;
  });
};

/** The glossary entries a page points at with `terms`. Same contract: a bad slug fails the build. */
export const linkedTerms = async (doc: Doc, lang: Lang): Promise<Doc<'terms'>[]> => {
  const wanted = paired(doc.entry).terms;
  if (!wanted.length) return [];
  const all = await allDocs('terms');
  return wanted.map((pair) => {
    const found = all.find((t) => t.pair === pair && t.lang === lang && !t.entry.data.draft);
    if (!found) throw new Error(`"${doc.entry.id}" links to the term "${pair}", which has no published ${lang.toUpperCase()} page.`);
    return found;
  });
};

/** Newest `updated` across a set of pages: what a hub uses as its own lastmod. */
export const newestDate = (docs: Doc[], fallback: string) =>
  docs.map((d) => paired(d.entry).updated).sort().at(-1) ?? fallback;

export const docDate = (doc: Doc) => paired(doc.entry).updated;
export const docMeta = (doc: Doc) => {
  const d = paired(doc.entry);
  return { title: d.seoTitle, description: d.description, verified: d.verified };
};
