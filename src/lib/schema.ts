import { SITE, absolute, routes, type Lang } from '../i18n/routes';

const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;

const personText = {
  es: {
    jobTitle: 'Desarrollador Shopify Plus y B2B freelance',
    description:
      'Desarrollador Shopify Plus freelance en Madrid, España. Especialista en B2B, Shopify Functions y Checkout Extensibility. Trabaja con Shopify desde 2021 y como freelance desde 2022.',
  },
  en: {
    jobTitle: 'Freelance Shopify Plus & B2B Developer',
    description:
      'Freelance Shopify Plus developer based in Madrid, Spain. Specialist in B2B, Shopify Functions and Checkout Extensibility. Working with Shopify since 2021 and freelancing since 2022.',
  },
};

export const person = (lang: Lang, image?: string) => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Nicolás Mateos',
  alternateName: ['Nicolas Mateos', 'Nicolás Mateos Henrich', 'NicolasShopiDev'],
  givenName: 'Nicolás',
  familyName: 'Mateos',
  url: `${SITE}/`,
  jobTitle: personText[lang].jobTitle,
  description: personText[lang].description,
  email: 'nicolasmhbusiness@gmail.com',
  ...(image ? { image: absolute(image) } : {}),
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
  mainEntity?: string; // @id of the node the page is about (a service, a case study)
}) => {
  const url = absolute(opts.path);
  const subject = opts.mainEntity
    ? { mainEntity: { '@id': opts.mainEntity } }
    : opts.type === 'ProfilePage' ? { mainEntity: { '@id': PERSON_ID } } : { about: { '@id': PERSON_ID } };
  return {
    '@type': opts.type,
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: opts.lang,
    isPartOf: { '@id': WEBSITE_ID },
    dateModified: opts.dateModified,
    ...subject,
  };
};

const AREA_SERVED = [
  { '@type': 'Country', name: 'Spain' },
  { '@type': 'Place', name: 'European Union' },
];

// A service page (plan 1.5). The Offer gets a priceSpecification once prices are published.
export const service = (opts: { path: string; lang: Lang; name: string; serviceType: string; description: string }) => {
  const url = absolute(opts.path);
  const id = `${url}#service`;
  return {
    '@type': 'Service',
    '@id': id,
    url,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    provider: { '@id': PERSON_ID },
    areaServed: AREA_SERVED,
    offers: {
      '@type': 'Offer',
      url: absolute(routes.contact[opts.lang]),
      itemOffered: { '@id': id },
      offeredBy: { '@id': PERSON_ID },
      areaServed: AREA_SERVED,
    },
  };
};

// A case study page: the work itself, credited to the person and about the client.
export const caseStudy = (opts: {
  path: string;
  lang: Lang;
  headline: string;
  description: string;
  client: string;
  clientUrl?: string;
  year: string;
  keywords: string[];
  image?: string;
  datePublished: string;
  dateModified: string;
}) => {
  const url = absolute(opts.path);
  return {
    '@type': 'CreativeWork',
    '@id': `${url}#case`,
    url,
    headline: opts.headline,
    abstract: opts.description,
    inLanguage: opts.lang,
    dateCreated: opts.year.slice(0, 4),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    keywords: opts.keywords.join(', '),
    ...(opts.image ? { image: absolute(opts.image) } : {}),
    author: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID },
    about: { '@type': 'Organization', name: opts.client, ...(opts.clientUrl ? { url: opts.clientUrl } : {}) },
    isPartOf: { '@id': `${url}#webpage` },
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
  projects: { slug: string; name: string; client: string; url?: string; year: string; description: string; keywords: string[]; caseUrl?: string }[],
) => ({
  '@type': 'ItemList',
  itemListElement: projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      '@id': `${absolute(pagePath)}#${p.slug}`,
      url: p.caseUrl ? absolute(p.caseUrl) : `${absolute(pagePath)}#${p.slug}`,
      name: p.name,
      description: p.description,
      dateCreated: p.year.slice(0, 4),
      keywords: p.keywords.join(', '),
      creator: { '@id': PERSON_ID },
      about: { '@type': 'Organization', name: p.client, ...(p.url ? { url: p.url } : {}) },
    },
  })),
});

export const sourceCode = (
  pagePath: string,
  items: { id: string; name: string; description: string; language: string }[],
) => ({
  '@type': 'ItemList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'SoftwareSourceCode',
      '@id': `${absolute(pagePath)}#${item.id}`,
      url: `${absolute(pagePath)}#${item.id}`,
      name: item.name,
      description: item.description,
      programmingLanguage: item.language,
      runtimePlatform: 'Shopify',
      author: { '@id': PERSON_ID },
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
