import { getCollection, type CollectionEntry } from 'astro:content';
import { LANGS, type Lang } from '../i18n/routes';

export type PostEntry = CollectionEntry<'posts'>;

export interface Post {
  entry: PostEntry;
  lang: Lang;
  slug: string;
  /** Site path, always with a trailing slash: /blog/<slug>/ or /en/blog/<slug>/ */
  path: string;
  /** updated when set, otherwise the publication date. */
  modified: string;
  minutes: number;
}

export const blogBase = (lang: Lang) => (lang === 'es' ? '/blog/' : '/en/blog/');
export const postPath = (lang: Lang, slug: string) => `${blogBase(lang)}${slug}/`;

// Words per minute, rounded up, minimum one minute.
const minutesOf = (body: string) => Math.max(1, Math.round(body.trim().split(/\s+/).length / 200));

const describe = (entry: PostEntry): Post => {
  const [folder, ...rest] = entry.id.split('/');
  const lang = folder as Lang;
  const slug = rest.join('/');
  if (!LANGS.includes(lang) || !slug) {
    throw new Error(`Post "${entry.id}" must live in src/content/posts/es/ or src/content/posts/en/`);
  }
  return {
    entry,
    lang,
    slug,
    path: postPath(lang, slug),
    modified: entry.data.updated ?? entry.data.date,
    minutes: minutesOf(entry.body ?? ''),
  };
};

const byNewest = (a: Post, b: Post) => (a.entry.data.date < b.entry.data.date ? 1 : -1);

/** Every post in both languages, drafts included. */
export const allPosts = async (): Promise<Post[]> => (await getCollection('posts')).map(describe).sort(byNewest);

/** Published posts of one language, newest first. What the listing, the feed and the sitemap use. */
export const publishedPosts = async (lang: Lang): Promise<Post[]> =>
  (await allPosts()).filter((p) => p.lang === lang && !p.entry.data.draft);

/** The same article in the other language, if it has been written. */
export const translationOf = (post: Post, posts: Post[]): Post | undefined =>
  posts.find((p) => p.entry.data.pair === post.entry.data.pair && p.lang !== post.lang);

/** Up to three articles to read next: the ones listed in `related`, then the newest. */
export const relatedTo = (post: Post, posts: Post[]): Post[] => {
  const pool = posts.filter((p) => p.lang === post.lang && p.slug !== post.slug && !p.entry.data.draft);
  const picked = (post.entry.data.related ?? [])
    .map((pair) => pool.find((p) => p.entry.data.pair === pair))
    .filter((p): p is Post => Boolean(p));
  const rest = pool.filter((p) => !picked.includes(p));
  return [...picked, ...rest].slice(0, 3);
};

/** Newest publication date, used as the blog index lastmod. */
export const latestDate = (posts: Post[], fallback: string) => posts[0]?.modified ?? fallback;

export const formatDate = (iso: string, lang: Lang) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
