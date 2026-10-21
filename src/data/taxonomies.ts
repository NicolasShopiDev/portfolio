import type { Lang } from '../i18n/routes';

// The project taxonomies (SEO.md). These pages group projects that already exist, so there is no
// new content to invent — but the introduction of each one is written by hand, because a grouping
// page whose text is generated from its own title is a page with nothing in it.
//
// Rules this file keeps:
//  - Two projects minimum. With one, the group page and the project page compete for the same
//    search and the group loses. `taxonomies()` drops them.
//  - The slug is translated too: /proyectos/sector/joyeria/ and /en/projects/sector/jewelry/.
//  - A project may sit in several groups. A sector is the client's market; a type is the work.

export interface Taxonomy {
  slug: Record<Lang, string>;
  label: Record<Lang, string>;
  h1: Record<Lang, string>;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  intro: Record<Lang, string>;
  /** Project slugs, in the order they should be read. */
  projects: string[];
}

export const sectors: Taxonomy[] = [
  {
    slug: { es: 'joyeria', en: 'jewelry' },
    label: { es: 'Joyería', en: 'Jewelry' },
    h1: { es: 'Proyectos Shopify para marcas de joyería', en: 'Shopify projects for jewelry brands' },
    title: { es: 'Shopify para joyería: proyectos B2B y DTC | Nicolás Mateos', en: 'Shopify for Jewelry: B2B and DTC Projects | Nicolás Mateos' },
    description: {
      es: 'Tres proyectos Shopify de joyería: dos portales mayoristas con pedido por tallas y una tienda con configurador. Qué tienen en común las tiendas de joyería.',
      en: 'Three Shopify jewelry projects: two wholesale portals with size-by-size ordering and one store with a configurator. What jewelry stores have in common.',
    },
    intro: {
      es: 'La joyería es el sector donde más he repetido el mismo patrón: muchas referencias que se diferencian solo por la talla, pedidos mayoristas de pocas unidades por talla y muchas tallas, y un comprador que no quiere entrar seis veces en la ficha de producto. De ahí salen las tablas de pedido por variante de Émolo y Vidal & Vidal. En DTC el problema es el opuesto: pocas unidades, mucho detalle de producto y fotografía que manda sobre el texto.',
      en: 'Jewelry is where I have repeated the same pattern most often: a lot of SKUs that differ only by size, wholesale orders of a few units per size across many sizes, and a buyer who will not open the product page six times. That is where the per-variant order tables for Émolo and Vidal & Vidal come from. In DTC the problem is the opposite: few units, a lot of product detail, and photography that outranks the copy.',
    },
    projects: ['emolo-b2b', 'vidal-vidal-b2b', 'adamina'],
  },
  {
    slug: { es: 'moda', en: 'fashion' },
    label: { es: 'Moda', en: 'Fashion' },
    h1: { es: 'Proyectos Shopify para marcas de moda', en: 'Shopify projects for fashion brands' },
    title: { es: 'Shopify para moda: temas y proyectos a medida | Nicolás Mateos', en: 'Shopify for Fashion: Custom Themes & Projects | Nicolás Mateos' },
    description: {
      es: 'Cinco proyectos Shopify de moda: temas a medida, promociones, selectores de talla y color, y las decisiones de front-end que cambian la conversión.',
      en: 'Five Shopify fashion projects: custom themes, promotions, size and colour pickers, and the front-end decisions that actually move conversion.',
    },
    intro: {
      es: 'En moda el front-end es el producto. La variante manda en todo: el selector de talla y color decide la ficha, el listado, el carrito y la mitad de las incidencias de soporte. Estos cinco proyectos son temas a medida y personalizaciones sobre temas de pago, con el mismo hilo: que elegir una talla no recargue la página y que la imagen correcta aparezca antes de que el usuario se pregunte si ha fallado.',
      en: 'In fashion the front-end is the product. The variant drives everything: the size and colour picker decides the product page, the listing, the cart and half the support tickets. These five projects are custom themes and customisations on top of paid themes, with the same thread running through them: picking a size should not reload the page, and the right image should appear before the shopper wonders whether something broke.',
    },
    projects: ['fernando-de-carcer', 'coastbcn', 'el-capote', 'born-living-yoga', 'name-the-brand'],
  },
  {
    slug: { es: 'belleza-y-cosmetica', en: 'beauty-and-cosmetics' },
    label: { es: 'Belleza y cosmética', en: 'Beauty and cosmetics' },
    h1: { es: 'Proyectos Shopify para marcas de belleza y cosmética', en: 'Shopify projects for beauty and cosmetics brands' },
    title: { es: 'Shopify para cosmética: rendimiento y catálogo | Nicolás Mateos', en: 'Shopify for Cosmetics: Performance and Catalog | Nicolás Mateos' },
    description: {
      es: 'Tres proyectos Shopify de cosmética y belleza, entre ellos una plataforma Plus: catálogos grandes, rendimiento y mantenimiento continuo.',
      en: 'Three Shopify beauty and cosmetics projects, one of them a Plus platform: large catalogs, performance work and ongoing maintenance.',
    },
    intro: {
      es: 'La cosmética trae catálogos grandes, mucha rotación de promociones y páginas que acumulan apps hasta que dejan de cargar. Los tres proyectos de aquí son de ese tipo de trabajo: una plataforma Shopify Plus con catálogo y rendimiento, y dos tiendas de mantenimiento continuo donde lo que se hace cada mes es quitar peso y arreglar lo que una app rompió.',
      en: 'Cosmetics brings large catalogs, promotions that rotate constantly, and pages that accumulate apps until they stop loading. The three projects here are that kind of work: a Shopify Plus platform with catalog and performance work, and two stores on ongoing maintenance where the monthly job is removing weight and fixing what an app broke.',
    },
    projects: ['cosmeticos24h', 'hd-cosmetics', 'moncho-moreno'],
  },
  {
    slug: { es: 'salud-y-suplementos', en: 'health-and-supplements' },
    label: { es: 'Salud y suplementos', en: 'Health and supplements' },
    h1: { es: 'Proyectos Shopify B2B para salud y suplementos', en: 'Shopify B2B projects for health and supplements' },
    title: { es: 'Shopify B2B para suplementos y farmacia | Nicolás Mateos', en: 'Shopify B2B for Supplements and Pharmacy | Nicolás Mateos' },
    description: {
      es: 'Dos portales B2B del sector salud: venta a farmacias con precios por tramos y un ecommerce B2B de suplementos con tema a medida.',
      en: 'Two B2B portals in the health sector: selling to pharmacies with tiered pricing, and a B2B supplements store on a custom theme.',
    },
    intro: {
      es: 'Vender suplementos al por mayor es vender a un comprador profesional que repite pedido: farmacia, herbolario o distribuidor. Eso cambia el front-end entero. El precio depende del tramo de cantidad, el pedido se repite cada mes y el comprador quiere ver su histórico, no descubrir la marca. Los dos proyectos de aquí resuelven lo mismo con planes distintos de Shopify.',
      en: 'Selling supplements wholesale means selling to a professional buyer who reorders: a pharmacy, a health shop or a distributor. That changes the whole front-end. Price depends on the quantity break, the order repeats every month, and the buyer wants to see their history rather than discover the brand. The two projects here solve the same thing on different Shopify plans.',
    },
    projects: ['ivb-wellness-b2b', 'hifas-da-terra'],
  },
];

export const types: Taxonomy[] = [
  {
    slug: { es: 'portales-b2b', en: 'b2b-portals' },
    label: { es: 'Portales B2B', en: 'B2B portals' },
    h1: { es: 'Portales y tiendas mayoristas B2B en Shopify', en: 'B2B portals and wholesale stores on Shopify' },
    title: { es: 'Portales B2B en Shopify: 7 proyectos reales | Nicolás Mateos', en: 'Shopify B2B Portals: 7 Real Projects | Nicolás Mateos' },
    description: {
      es: 'Siete portales mayoristas en Shopify y Shopify Plus: empresas, catálogos, listas de precios, pedido rápido y precios por tramos. Con y sin Plus.',
      en: 'Seven wholesale portals on Shopify and Shopify Plus: companies, catalogs, price lists, quick ordering and tiered pricing. With and without Plus.',
    },
    intro: {
      es: 'Es el grueso de lo que hago. Siete portales mayoristas, unos sobre Shopify Plus y otros sobre planes sin Plus, con el mismo problema de fondo: un comprador que sabe lo que quiere, pide muchas líneas de una vez y no debería ver nunca un precio que no es el suyo. Lo que cambia entre ellos es el plan, y con él cuántos catálogos caben y si se puede escribir una Function.',
      en: 'This is the bulk of what I do. Seven wholesale portals, some on Shopify Plus and some on plans without it, all with the same underlying problem: a buyer who knows what they want, orders many lines at once, and should never see a price that is not theirs. What changes between them is the plan, and with it how many catalogs fit and whether you can write a Function.',
    },
    projects: ['emolo-b2b', 'vidal-vidal-b2b', 'ivb-wellness-b2b', 'mt-helmets-b2b', 'vini-trading-b2b', 'ewheel-b2b', 'hifas-da-terra'],
  },
  {
    slug: { es: 'shopify-plus', en: 'shopify-plus' },
    label: { es: 'Shopify Plus', en: 'Shopify Plus' },
    h1: { es: 'Proyectos en Shopify Plus', en: 'Shopify Plus projects' },
    title: { es: 'Proyectos Shopify Plus: B2B, catálogo y checkout | Nicolás Mateos', en: 'Shopify Plus Projects: B2B, Catalog, Checkout | Nicolás Mateos' },
    description: {
      es: 'Cuatro proyectos en Shopify Plus: portales B2B con catálogos ilimitados, una plataforma de catálogo internacional y temas a medida.',
      en: 'Four Shopify Plus projects: B2B portals with unlimited catalogs, an international catalog platform and custom themes.',
    },
    intro: {
      es: 'Lo que justifica Plus en un proyecto no es el checkout personalizado del folleto: son los catálogos sin límite por empresa, las Functions propias y los entornos de desarrollo. Estos cuatro proyectos están en Plus por razones concretas, y en cada ficha está escrita cuál.',
      en: 'What justifies Plus on a project is not the custom checkout from the brochure: it is unlimited catalogs per company, your own Functions and the development stores. These four projects are on Plus for specific reasons, and each entry says which one.',
    },
    projects: ['vidal-vidal-b2b', 'mt-helmets-b2b', 'cosmeticos24h', 'fernando-de-carcer'],
  },
  {
    slug: { es: 'temas-a-medida', en: 'custom-themes' },
    label: { es: 'Temas a medida', en: 'Custom themes' },
    h1: { es: 'Temas Shopify a medida', en: 'Custom Shopify themes' },
    title: { es: 'Temas Shopify a medida: 3 proyectos | Nicolás Mateos', en: 'Custom Shopify Themes: 3 Projects | Nicolás Mateos' },
    description: {
      es: 'Tres temas Shopify hechos desde cero o reescritos: secciones editables, rendimiento y un front-end que el cliente puede mantener sin tocar código.',
      en: 'Three Shopify themes built from scratch or rewritten: editable sections, performance, and a front-end the client can maintain without touching code.',
    },
    intro: {
      es: 'Un tema a medida se justifica cuando el de pago ya se ha tocado tanto que actualizarlo es imposible, o cuando la marca necesita algo que ningún tema del catálogo hace. Los tres de aquí son eso, y en los tres el entregable real no es el diseño: son las secciones y los bloques con los que el cliente monta páginas nuevas él solo.',
      en: 'A custom theme earns its place when the paid one has been modified so much that updating it is impossible, or when the brand needs something no theme in the store does. The three here are that, and in all three the real deliverable is not the design: it is the sections and blocks the client uses to build new pages without me.',
    },
    projects: ['fernando-de-carcer', 'qurado', 'hifas-da-terra'],
  },
  {
    slug: { es: 'funcionalidades-a-medida', en: 'custom-features' },
    label: { es: 'Funcionalidades a medida', en: 'Custom features' },
    h1: { es: 'Funcionalidades Shopify a medida', en: 'Custom Shopify features' },
    title: { es: 'Funcionalidades Shopify a medida: 6 proyectos | Nicolás Mateos', en: 'Custom Shopify Features: 6 Projects | Nicolás Mateos' },
    description: {
      es: 'Seis desarrollos a medida sobre Shopify: precios por volumen, configuradores, WebSockets, selectores de variante y lo que ninguna app resolvía.',
      en: 'Six custom developments on Shopify: volume pricing, configurators, WebSockets, variant pickers and whatever no app solved properly.',
    },
    intro: {
      es: 'Lo que llega cuando ya se han probado tres apps y ninguna hace exactamente eso. Aquí hay precios por volumen en un plan sin Plus, stock en tiempo real por WebSockets, y selectores de variante reescritos porque el del tema recargaba la página entera. Seis encargos que entraron como "una cosa pequeña" y acabaron siendo el motivo por el que la tienda funciona.',
      en: 'The work that arrives after three apps have been tried and none does exactly that. Here there is volume pricing on a plan without Plus, live stock over WebSockets, and variant pickers rewritten because the theme reloaded the whole page. Six jobs that came in as "a small thing" and ended up being the reason the store works.',
    },
    projects: ['ewheel-b2b', 'hagen', 'coastbcn', 'adamina', 'born-living-yoga', 'name-the-brand'],
  },
  {
    slug: { es: 'mantenimiento', en: 'maintenance' },
    label: { es: 'Mantenimiento', en: 'Maintenance' },
    h1: { es: 'Mantenimiento y optimización de tiendas Shopify', en: 'Shopify store maintenance and optimisation' },
    title: { es: 'Mantenimiento Shopify: rendimiento y arreglos | Nicolás Mateos', en: 'Shopify Maintenance: Performance and Fixes | Nicolás Mateos' },
    description: {
      es: 'Tres tiendas Shopify en mantenimiento continuo: quitar apps que sobran, recuperar velocidad y arreglar lo que una actualización rompió.',
      en: 'Three Shopify stores on ongoing maintenance: removing apps that are not earning their weight, recovering speed and fixing what an update broke.',
    },
    intro: {
      es: 'Mantenimiento no es esperar a que algo se rompa. En estas tres tiendas el trabajo de cada mes ha sido el mismo: medir qué está costando velocidad, quitar la app que ya no se usa pero sigue cargando su script, y arreglar lo que se rompió al actualizar el tema. No da titulares y es lo que mantiene la tienda vendiendo.',
      en: 'Maintenance is not waiting for something to break. On these three stores the monthly job has been the same: measure what is costing speed, remove the app nobody uses that still loads its script, and fix whatever broke when the theme was updated. It makes no headlines and it is what keeps the store selling.',
    },
    projects: ['hd-cosmetics', 'moncho-moreno', 'the-villa-concept'],
  },
];

/** Published groups of a kind: the ones with at least two projects. */
export const taxonomies = (kind: 'sector' | 'type') =>
  (kind === 'sector' ? sectors : types).filter((tax) => tax.projects.length >= 2);
