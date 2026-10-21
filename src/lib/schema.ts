import { SITE, absolute, type Lang } from '../i18n/routes';

const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;

const personText = {
  es: {
    jobTitle: 'Desarrollador Shopify Plus y B2B freelance',
    description:
      'Desarrollador front-end freelance especializado en Shopify Plus, español y con base en Madrid. Construye tiendas mayoristas B2B, Shopify Functions en JavaScript y Rust, extensiones de checkout y de cuenta de cliente, y apps embebidas a medida. Trabaja con Shopify desde 2021 y como freelance desde 2022.',
  },
  en: {
    jobTitle: 'Freelance Shopify Plus & B2B Developer',
    description:
      'Spanish freelance Shopify Plus front-end developer based in Madrid. Builds B2B wholesale storefronts, Shopify Functions in JavaScript and Rust, checkout and customer account extensions, and custom embedded apps. Working with Shopify since 2021 and freelancing since 2022.',
  },
};

export const person = (lang: Lang) => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Nicolás Mateos',
  alternateName: ['Nicolas Mateos', 'NicolasShopiDev'],
  givenName: 'Nicolás',
  familyName: 'Mateos',
  url: `${SITE}/`,
  jobTitle: personText[lang].jobTitle,
  description: personText[lang].description,
  email: 'nicolasmhbusiness@gmail.com',
  nationality: { '@type': 'Country', name: 'Spain' },
  address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
  knowsLanguage: ['es', 'en'],
  knowsAbout: [
    'Shopify', 'Shopify Plus', 'Shopify B2B', 'Liquid', 'Shopify Functions', 'Rust',
    'JavaScript', 'TypeScript', 'Checkout Extensibility', 'Customer account extensions',
    'Metafields', 'Metaobjects', 'App Bridge', 'Node.js', 'React',
    'GraphQL Admin API', 'Storefront API', 'Core Web Vitals',
  ],
  sameAs: [
    'https://www.linkedin.com/in/nicolas-mateos-shopify/',
    'https://www.upwork.com/freelancers/~0167007dc504c9b9ab',
    'https://github.com/NicolasShopiDev',
  ],
});

export const website = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE}/`,
  name: 'Nicolás Mateos',
  inLanguage: ['es', 'en'],
  publisher: { '@id': PERSON_ID },
});

export const webPage = (opts: {
  type: 'WebPage' | 'CollectionPage' | 'ProfilePage' | 'ContactPage';
  path: string;
  name: string;
  description: string;
  lang: Lang;
  dateModified: string;
}) => {
  const url = absolute(opts.path);
  return {
    '@type': opts.type,
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: opts.lang,
    isPartOf: { '@id': WEBSITE_ID },
    dateModified: opts.dateModified,
    ...(opts.type === 'ProfilePage' ? { mainEntity: { '@id': PERSON_ID } } : { about: { '@id': PERSON_ID } }),
  };
};

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absolute(item.path),
  })),
});

export const creativeWorks = (
  pagePath: string,
  projects: { slug: string; name: string; client: string; url?: string; year: string; description: string; keywords: string[] }[],
) => ({
  '@type': 'ItemList',
  itemListElement: projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      '@id': `${absolute(pagePath)}#${p.slug}`,
      url: `${absolute(pagePath)}#${p.slug}`,
      name: p.name,
      description: p.description,
      dateCreated: p.year.slice(0, 4),
      keywords: p.keywords.join(', '),
      creator: { '@id': PERSON_ID },
      about: { '@type': 'Organization', name: p.client, ...(p.url ? { url: p.url } : {}) },
    },
  })),
});

export const graph = (...nodes: object[]) => JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });

export const blog = (opts: {
  path: string;
  name: string;
  description: string;
  lang: Lang;
  posts: { path: string; title: string; description: string; date: string; modified: string }[];
}) => {
  const url = absolute(opts.path);
  return {
    '@type': 'Blog',
    '@id': `${url}#blog`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: opts.lang,
    isPartOf: { '@id': WEBSITE_ID },
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    blogPost: opts.posts.map((p) => ({
      '@type': 'BlogPosting',
      '@id': `${absolute(p.path)}#article`,
      url: absolute(p.path),
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      dateModified: p.modified,
      author: { '@id': PERSON_ID },
    })),
  };
};

export const blogPosting = (opts: {
  path: string;
  blogPath: string;
  headline: string;
  description: string;
  lang: Lang;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  image: string;
  wordCount: number;
  translationPath?: string;
}) => {
  const url = absolute(opts.path);
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    headline: opts.headline,
    description: opts.description,
    inLanguage: opts.lang,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    keywords: opts.keywords.join(', '),
    wordCount: opts.wordCount,
    image: absolute(opts.image),
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    isPartOf: { '@id': `${absolute(opts.blogPath)}#blog` },
    ...(opts.translationPath ? { workTranslation: { '@id': `${absolute(opts.translationPath)}#article` } } : {}),
  };
};

export const faqPage = (path: string, items: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  '@id': `${absolute(path)}#faq`,
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
});
