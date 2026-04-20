'use strict';

const PROJECTS = [
  {
    id: 1,
    name: 'Hifas Da Terra',
    badge: 'Shopify B2B',
    tags: ['Shopify B2B', 'Liquid', 'Custom Theme'],
    client: 'Hifas Da Terra',
    type: 'B2B Ecommerce',
    year: '2024',
    imgDir: 'Hifas Da Terra',
    imgKey: 'Hifas',
    bannerExt: 'webp',
    url: 'https://hifasdaterra.com/en',
    slogan: 'Improving Health Worldwide',
    highlights: [
      '696e8d5ecc348c6c4983b4e2_Hifas producto.png',
      '696e8d5e3af2eb460228ecd0_Coleccion hifas.png',
      '696e8d5e2a5402616a62ff62_Grid home Hifas.png',
    ],
    role: 'Architected a comprehensive B2B ecommerce platform for a leading biotech company specializing in medicinal mushroom supplements. Delivered a full-stack Shopify B2B solution with tiered wholesale pricing, a dedicated professional portal, and advanced product filtering tailored for healthcare practitioners.',
    detail: 'Custom Shopify B2B implementation: customer segment-based catalog visibility, performance-optimized product pages with lazy-loaded media, streamlined dual-flow checkout supporting both B2C and B2B transactions, and a clinical-grade product information architecture.'
  },
  {
    id: 2,
    name: 'MT Helmets B2B',
    badge: 'Shopify Plus',
    tags: ['Shopify Plus', 'B2B', 'International', 'Liquid'],
    client: 'MT Helmets',
    type: 'B2B Catalog Platform',
    year: '2024',
    imgDir: 'MT Helmets',
    imgKey: 'MT',
    url: 'https://mthelmets.com/es-es',
    highlights: [
      '696e87085a88f3f6b5e43c97_Home grid mt helmets b2b.png',
      '696e86b35aab58a8f483c87d_Product page MT HELMETS B2B.png',
      '696e86b213d3a33c62003fc6_Carrito b2b.png',
    ],
    slogan: 'A RIDING LEGACY',
    role: "Built an international B2B catalog platform for one of Europe's leading motorcycle helmet manufacturers, enabling dealer networks across multiple European markets through a custom Shopify Plus implementation.",
    detail: 'Dealer-specific authentication with volume-based pricing logic, PDF catalog export functionality, multilingual storefront via Shopify Markets integration, and a custom collection architecture supporting complex variant management.'
  },
  {
    id: 3,
    name: 'Cosmeticos24H',
    badge: 'Shopify Plus',
    tags: ['Shopify Plus', 'B2B', 'Performance', 'UX'],
    client: 'Cosmeticos24H',
    type: 'Ecommerce Platform',
    year: '2023',
    imgDir: 'Cosmeticos24H',
    imgKey: 'Cosmeticos',
    bannerExt: 'jpg',
    url: 'https://cosmeticos24h.com/',
    slogan: 'YOUR SKIN IS OUR UNIVERSE',
    highlights: [
      '696e81952e43857cb5eb4174_producto cosmeticos.png',
      '696e81c9de2a9a2ea9992987_Coleccion cosmeticos.png',
    ],
    role: 'Delivered a full Shopify Plus overhaul for a high-traffic beauty retailer, targeting measurable Core Web Vitals improvements alongside new B2B wholesale capabilities and a redesigned conversion funnel.',
    detail: 'Shopify Plus optimization: advanced faceted collection filtering, B2B customer portal with tiered pricing, optimized drawer cart with lazy-loading, and a redesigned product detail page that demonstrably improved conversion metrics.'
  },
  {
    id: 4,
    name: 'Ewheel B2B',
    badge: 'Shopify B2B',
    tags: ['Shopify B2B', 'WebSockets', 'Custom Features', 'Mobility'],
    client: 'Ewheel',
    type: 'B2B Ecommerce',
    year: '2024',
    imgDir: 'Ewheel B2B',
    imgKey: 'Ewheel',
    bannerExt: 'webp',
    url: 'https://ewheel.es/',
    slogan: 'MAKE LIFE ELECTRIC',
    highlights: [
      '69693eb898aeb2c388f0f4fc_Choose options.png',
      '69693f242e4056a82bfbad25_My account.png',
      '69693f24a70bb7eae9ad7aca_Cart ewheel.png',
      '69693f51819a7bf7695d2b82_Home.png',
    ],
    role: "Engineered a next-generation B2B ecommerce platform for Spain's leading electric mobility retailer, introducing real-time collaborative cart functionality via WebSockets — a first for the client's Shopify environment.",
    detail: 'Custom Shopify B2B features: real-time multi-user cart synchronization using WebSockets, high-performance responsive variant grid handling complex inventory logic (units vs. boxes), corporate account management, and a dealer portal with tiered pricing visibility.'
  },
  {
    id: 5,
    name: 'CoastBCN',
    badge: 'Shopify',
    tags: ['Shopify', 'Liquid', 'Custom Features', 'Fashion'],
    client: 'CoastBCN',
    type: 'Collaboration',
    year: '2023',
    imgDir: 'Coast Bcn',
    imgKey: 'Coast',
    bannerExt: 'webp',
    url: 'https://www.coastbcn.com/',
    slogan: 'PASSION AND LIFESTYLE',
    highlights: [
      '667055ca504ec69e9652c309_Home BCN.png',
      '667055cad1001f3f5ab2e061_Product BCN.png',
      '667055caa06afa3da2078019_Collections BCN.png',
    ],
    role: 'Collaborated with Reduncle agency on an ongoing Shopify development engagement for a Barcelona-based fashion brand, delivering high-impact UX improvements and custom storefront features.',
    detail: 'Shipped: configurable-speed announcement banner, quick-add with inline size selection from collection grids, custom drawer cart redesign, automated out-of-stock badge logic, and a bespoke password page experience.'
  },
  {
    id: 6,
    name: 'Fernando García',
    badge: 'Shopify Plus',
    tags: ['Shopify Plus', 'Fashion', 'Liquid', 'Custom Theme'],
    client: 'Fernando García',
    type: 'Custom Theme',
    year: '2024',
    imgDir: 'Fernando de carcer',
    imgKey: 'Fernando',
    bannerExt: 'jpg',
    url: 'https://fernandodecarcer.com/',
    slogan: 'Quality fashion',
    highlights: [
      '667060a9e86900a19539ec50_chrome-capture-2024-6-17.png',
      '667060a9ea32bb134c77a574_chrome-capture-2024-6-17 (2).png',
      '667060c4f2fe2e92094f8e6a_chrome-capture-2024-6-17 (3).png',
      '667060a8c2259e99e56a7e89_chrome-capture-2024-6-17 (1).png',
    ],
    role: 'End-to-end custom Shopify Plus theme development for a premium Spanish fashion brand — from architecture to launch — with a strong focus on performance scores and international market readiness.',
    detail: 'Custom theme with optimized LCP and CLS scores, live-update collection filtering, dynamic size guide modals, wishlist integration, and Shopify Markets configuration for multi-currency and multi-region support.'
  },
  {
    id: 7,
    name: 'El Capote',
    badge: 'Shopify',
    tags: ['Shopify', 'Liquid', 'Promotions', 'Fashion'],
    client: 'El Capote',
    type: 'Ecommerce',
    year: '2024',
    imgDir: 'El Capote',
    imgKey: 'Capote',
    bannerExt: 'jpg',
    url: 'https://poloselcapote.com/',
    slogan: 'Wear the tradition, carry the art',
    highlights: [
      '667057382a9768509250b039_Newsletter.png',
      '66705738438bba6bde64fad3_Collection grid.png',
      '66705738116d9b0cd63c7f4c_Product.png',
      '667057e1c00da3e9cfb1aebf_Casillas (1).png',
    ],
    role: 'Custom Shopify development for a storied Spanish menswear brand specializing in traditional equestrian fashion, focused on promotional campaign mechanics and rich product storytelling.',
    detail: 'Delivered: countdown timer components for seasonal campaigns, bundle discount messaging, multi-image hover product cards, and a configurable featured collection module for editorial-style layouts.'
  },
  {
    id: 8,
    name: 'Adamina',
    badge: 'Shopify',
    tags: ['Shopify', 'Liquid', 'UX', 'Jewelry'],
    client: 'Adamina',
    type: 'Shopify Customization',
    year: '2023',
    imgDir: 'Adamina',
    imgKey: 'Adamina',
    bannerExt: 'jpg',
    url: 'https://www.adaminajewelry.com/',
    slogan: 'Redefining Jewelry Brilliance',
    highlights: [
      '667028bd2dfdc5f7e21187e5_Adamina colecctions.png',
      '667028bd787e325a4664cda5_Adamina product.png',
      '667028bc3963a3304e3895d9_Product grid.png',
      '667028bc3d05ca5816996f31_Adamina home.png',
    ],
    role: 'Ongoing Shopify customization and UX enhancement for a contemporary jewelry brand through Reduncle agency, improving product discovery and post-purchase upsell performance.',
    detail: 'Implemented: horizontal scroll product grid for editorial collection layouts, customized product detail page with variant-specific media, in-cart upsell integration, and UX refinements to support conversion optimization.'
  },
  {
    id: 9,
    name: 'HD Cosmetics',
    badge: 'Shopify',
    tags: ['Shopify', 'Liquid', 'Performance', 'Beauty'],
    client: 'HD Cosmetics',
    type: 'Shopify Maintenance',
    year: '2023',
    imgDir: 'HD Cosmetics',
    imgKey: 'HD',
    bannerExt: 'webp',
    url: 'https://hddermocosmetics.com/',
    slogan: 'SENSE OF TOUCH',
    highlights: [
      '66714a5621c86e15d2caca64_Blog grid.png',
      '66714a552f4f40cc2c011d8a_Entrar.png',
      '66714a567564c9568e606d0c_Mas info.png',
      '66714a55e437391766d0dacf_Product.png',
    ],
    role: 'Provided targeted Shopify development and maintenance for an established dermocosmetics brand through Reduncle agency, delivering seasonal campaign features, app customizations, and ongoing site improvements.',
    detail: 'Seasonal Black Friday cart modifications, promotional offer management, app-level customization for brand-specific workflows, and responsive layout fixes ensuring consistency across all device types.'
  },
  {
    id: 10,
    name: 'Born Living Yoga',
    badge: 'Shopify',
    tags: ['Shopify', 'Liquid', 'Sustainability', 'Fashion'],
    client: 'Born Living Yoga',
    type: 'Shopify Customization',
    year: '2022',
    imgDir: 'Born Living Yoga',
    imgKey: 'BLY',
    bannerExt: 'jpg',
    url: 'https://bornlivingyoga.com',
    slogan: 'Uniting mind, body, and planet',
    highlights: [
      '66705368bf754ee70db1f1fc_BLY Colecctions.png',
      '667053671bb969becc00dccc_Completa tu look.png',
      '66705367a0f37ddd043158ce_Drawer cart.png',
      '66705367031d146cd5750504_Producto.png',
    ],
    role: 'Delivered feature enhancements and UX improvements for a sustainable yoga lifestyle brand through Shopigurus agency, streamlining the product discovery and purchase flow across key conversion touchpoints.',
    detail: 'Quick-add from collection grids, custom "Complete your look" cross-sell module, editable product tag customization, and drawer cart refinements to reduce friction in the purchase journey.'
  },
  {
    id: 11,
    name: 'Qurado',
    badge: 'Shopify',
    tags: ['Shopify', 'Liquid', 'Custom Theme', 'DTC'],
    client: 'Qurado',
    type: 'Custom Theme',
    year: '2023',
    imgDir: 'Qurado',
    imgKey: 'Qurado',
    bannerExt: 'jpg',
    url: 'https://qurado.es/',
    slogan: 'REAL PRODUCTS. NO MIDDLEMEN.',
    highlights: [
      '66673a740265050e492841d5_chrome-capture-2024-6-10.png',
      '666c17a9e8fc6ab713443aa1_Reviews.gif',
      '666c1c4496d47aba901e0165_93088f09-b651-43d6-a845-b505dcd635b7.gif',
    ],
    role: 'Developed a fully customized Shopify storefront for an emerging direct-to-consumer brand in collaboration with Shopigurus agency, following a provided design system and delivering a brand-coherent, conversion-optimized experience.',
    detail: 'Custom theme with pixel-accurate design execution, enhanced product discovery with custom filtering, brand-aligned typography and color system, and a streamlined mobile-first checkout flow.'
  },
  {
    id: 12,
    name: 'Name The Brand',
    badge: 'Shopify',
    tags: ['Shopify', 'Liquid', 'Custom Features', 'Fashion'],
    client: 'Name The Brand',
    type: 'Shopify Customization',
    year: '2023',
    imgDir: 'Name The Brand',
    imgKey: 'NTB',
    bannerExt: 'jpg',
    slogan: 'Sunlight birds',
    highlights: [
      '667d9d73777e3e1f2752dc09_Collections.png',
      '667d9d7320d47ee73e026da5_Home grid.png',
      '667d9d737e300ef925dad85c_Product.png',
      '667d9d73f534efba7f6a656d_Products home.png',
    ],
    role: 'Provided ongoing Shopify customization and app integration for a fashion retailer through Shopigurus agency, delivering targeted feature enhancements and a more conversion-optimized storefront.',
    detail: 'Custom product form modifications, automated discount badge tagging for sale items, smart search integration, cart upsell logic, and third-party app customizations to match precise brand requirements.'
  },
  {
    id: 13,
    name: 'Moncho Moreno',
    badge: 'Shopify',
    tags: ['Shopify', 'Liquid', 'Performance', 'Beauty'],
    client: 'Moncho Moreno',
    type: 'Shopify Maintenance',
    year: '2021 - 2022',
    imgDir: 'Moncho Moreno',
    imgKey: 'Moncho',
    bannerExt: 'jpg',
    url: 'https://monchomoreno.com/',
    slogan: 'Hair surgeons',
    highlights: [
      '66714778c5d9c74a14351cd3_Carrito.png',
      '66714778c5bbc6c2614e4388_Info.png',
      '667147788dd3319daa098bce_Ingredientes.png',
      '667147783a9c99d1e6b94ddd_Marcas.png',
    ],
    role: 'Led ongoing Shopify development and technical strategy for a premium Spanish haircare brand at VRANDED HAUS, serving as their primary development partner across a multi-year engagement.',
    detail: 'Weekly technical audits, custom user profile system with order history, complex app installations and integrations, promotional mechanics, and paid media oversight — consistent improvements delivered across a 12+ month retainer.'
  },
  {
    id: 14,
    name: 'The Villa Concept',
    badge: 'Shopify',
    tags: ['Shopify', 'Liquid', 'Optimization', 'Lifestyle'],
    client: 'The Villa Concept',
    type: 'Shopify Maintenance',
    year: '2021',
    imgDir: 'The villa concept',
    imgKey: 'TVC',
    bannerExt: 'jpg',
    url: 'https://www.thevillaconcept.com/',
    slogan: 'Timeless Elegance',
    highlights: [
      '667022d7280fd18ab14a344b_TVC grid de colecciones.png',
      '667022d7abfff397937dde1d_TVC product.png',
      '667022d7a680c63319ba31b5_TVC destacados.png',
      '667025e38a82ff6606a76844_TVC home.png',
    ],
    role: 'Provided ongoing Shopify development and maintenance for a high-end lifestyle brand at VRANDED HAUS, replacing costly third-party app subscriptions with lean, purpose-built internal solutions.',
    detail: 'Daily site maintenance, custom feature development, and an app replacement strategy that eliminated recurring SaaS costs — bespoke Liquid and JavaScript components for wishlist, recently viewed, and promotional logic.'
  },
  {
    id: 15,
    name: 'Quipu',
    badge: 'Webflow',
    tags: ['Webflow', 'SaaS', 'Multilingual', 'No-code'],
    client: 'Quipu',
    type: 'Webflow Site',
    year: '2023',
    imgDir: 'Quipu',
    imgKey: 'Quipu',
    bannerExt: 'png',
    url: 'https://getquipu.com',
    slogan: 'A new way to manage your business',
    highlights: [
      '66706244c64fcda6601f878a_Chat with us.png',
      '66706244f0ea0325ad25772f_Compare plans.png',
      '66706244e98377532e17a998_Home.png',
    ],
    role: "Built Quipu's current website from scratch in Webflow, supporting a multilingual SaaS product targeting freelancers and SMEs across Spain, France, and Catalonia.",
    detail: 'Full Webflow build with 4-language support (ES/FR/EN/CA), custom pricing page architecture, interactive product tour sections, academy video integration, and an SEO-optimized content structure for competitive SaaS markets.'
  },
  {
    id: 16,
    name: 'Ardevisual',
    badge: 'Webflow',
    tags: ['Webflow', 'Agency', 'Creative', 'UX'],
    client: 'Ardevisual',
    type: 'Webflow Site',
    year: '2023',
    imgDir: 'Ardevisual',
    imgKey: 'Ardevisual',
    bannerExt: 'webp',
    url: 'https://www.ardevisual.com/',
    slogan: '#Empowering you',
    highlights: [
      '667d94b9d2203b78da93d29c_chrome-capture-2024-6-27 (2).png',
      '667d94ba9af726c33abb92bf_HOME GRID.png',
      '667d94ba290fe29016c365ae_WORK.png',
      '667d94f976de3f48ba562c3f_fOOTER.png',
    ],
    role: 'Took full creative and technical ownership of a complete website rebuild for a Spanish audiovisual production agency, designing and developing the entire Webflow site from scratch without a provided design brief.',
    detail: 'Competitor-informed UI design, animated hero sections, custom portfolio filtering system, performance-optimized media delivery, and a contact-driven conversion architecture.'
  },
  {
    id: 17,
    name: 'Amagi Coach',
    badge: 'Webflow',
    tags: ['Webflow', 'Coaching', 'Animation', 'Brand'],
    client: 'Amagi Coach',
    type: 'Webflow Site',
    year: '2021',
    imgDir: 'Amagi Coach',
    imgKey: 'Amagi',
    bannerExt: 'jpg',
    gridExt: 'gif',
    url: 'https://amagi.coach/',
    slogan: 'Facilitating change',
    highlights: [
      '66704d9f278e2ad2f20b10fd_Home Amagi.gif',
      '66704e5a40f33573f312003e_Amagi valores.png',
      '66705043281b3c8a9550f783_Blog hover Amagi.gif',
      '6670508bc4d01481fef16b6a_Planes Amagi.png',
    ],
    role: 'Led end-to-end Webflow development for a coaching brand at VRANDED HAUS, bringing to life a highly creative and unconventional visual identity that challenged standard implementation patterns.',
    detail: 'Cookie-aware ambient audio player to avoid repeat intrusions on return visits, fluid animated page transitions, custom interactive components, and a performance-tuned CMS architecture for blog and coaching content.'
  },
  {
    id: 18,
    name: "Es Racó d'Artà",
    badge: 'Webflow',
    tags: ['Webflow', 'Hospitality', 'Interactive', 'UX'],
    client: "Es Racó d'Artà",
    type: 'Webflow Site',
    year: '2021',
    imgDir: 'Es Raco',
    imgKey: 'EsRaco',
    bannerExt: 'png',
    gridExt: 'gif',
    url: 'https://www.esracodarta.com/',
    slogan: "ES RACÓ D'ARTÁ IS NOT A HOTEL",
    highlights: [
      '66705c6e941944636d5cc16f_El camino de es raco.png',
      '66705c6e56320aff65c7ded6_Es raco pop up.png',
      '66705c7074c3c4942ef83ebd_Respira.png',
      '66705ce1f176eb1f35d91e5d_Mapa.png',
    ],
    role: "Co-developed an immersive Webflow experience for a boutique rural hotel in Mallorca at VRANDED HAUS, prioritizing experiential UX with interactive map features and a unique sound-based ambient brand experience.",
    detail: 'Cookie-aware ambient audio that avoids repeat intrusions, interactive property map showcasing areas and activities, immersive image galleries, and a UX-first booking flow that mirrors the serenity of the destination.'
  },
  {
    id: 19,
    name: 'Prrimital',
    badge: 'Webflow',
    tags: ['Webflow', 'Fashion', 'Animation', 'Brand'],
    client: 'Prrimital',
    type: 'Webflow Site',
    year: '2021',
    imgDir: 'Prrimital',
    imgKey: 'Prrimital',
    bannerExt: 'jpg',
    gridExt: 'gif',
    url: 'https://www.prrimital.com/',
    slogan: 'Back to the Origin.',
    highlights: [
      '66719d12ea1ebe57011232b3_Carta grid.png',
      '66719d121e159a02d5fdf2a8_Carta.png',
      '66719d12c254f9c50ddeb893_Prrenz.gif',
    ],
    role: 'Built the Prrimital brand website from scratch in Webflow alongside a creative designer at VRANDED HAUS, translating a bold and unconventional visual identity into a fully animated digital experience.',
    detail: 'Custom animated navigation interactions, editorial-style product showcase layouts, a brand-driven typography and color system, and iterative UX refinements including removal of an initial horizontal scroll menu based on user feedback.'
  },
];

/* ── Browser bar ────────────────────────────────────────────── */
function browserBar(p) {
  const urlHtml = p.url
    ? `<div class="bf-url bf-url--text" data-url="${p.url}" title="Copy URL">
         <span class="bf-url-text">${p.url}</span>
         <span class="bf-url-copied">Copied!</span>
       </div>`
    : `<div class="bf-url"></div>`;
  return `<div class="bf-bar">
    <span class="bf-dot r"></span>
    <span class="bf-dot y"></span>
    <span class="bf-dot g"></span>
    ${urlHtml}
  </div>`;
}

/* ── Image helpers ──────────────────────────────────────────── */
function imgPath(p, file) {
  return `assets/Img/${p.imgDir}/${file}`;
}

function gridImg(p) {
  if (!p.imgDir) return '<div class="screen-placeholder"></div>';
  const ext = p.gridExt || 'png';
  return `<img src="${imgPath(p, p.imgKey + ' Grid.' + ext)}" alt="${p.name}" class="screen-img" loading="lazy" />`;
}

function bannerImg(p) {
  if (!p.imgDir) return '<div class="screen-placeholder" style="aspect-ratio:16/7"></div>';
  const ext = p.bannerExt || 'png';
  return `<img src="${imgPath(p, p.imgKey + ' Banner.' + ext)}" alt="${p.name}" class="screen-img screen-img--banner" loading="lazy" />`;
}

function highlightsGrid(p) {
  if (!p.highlights || !p.highlights.length) return '';
  return `
    <div class="highlights-grid">
      ${p.highlights.map(file => `
        <div class="highlight-item">
          <img src="${imgPath(p, file)}" alt="${p.name} — project highlight" loading="lazy" />
        </div>
      `).join('')}
    </div>
  `;
}

/* ── Render project cards ───────────────────────────────────── */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = PROJECTS.map(p => `
    <article
      class="project-card"
      data-id="${p.id}"
      tabindex="0"
      role="button"
      aria-label="View project: ${p.name}"
    >
      <div class="card-mockup">
        <div class="browser-frame">
          ${browserBar(p)}
          <div class="bf-screen">
            ${gridImg(p)}
          </div>
        </div>
        <span class="card-badge">${p.badge}</span>
      </div>
      <div class="card-info">
        <div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <h3 class="card-name">${p.name}</h3>
        <span class="card-link">View project</span>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.project-card').forEach(card => {
    const id = parseInt(card.dataset.id, 10);
    card.addEventListener('click', () => openModal(id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(id); }
    });
  });
}

/* ── Modal ──────────────────────────────────────────────────── */
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-hero-frame browser-frame">
      ${browserBar(p)}
      <div class="bf-screen">
        <div class="banner-wrap">
          ${bannerImg(p)}
          <div class="banner-overlay"></div>
          <h2 class="banner-title" id="modal-title">${p.name}</h2>
          ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener" class="banner-visit">Visit project <span>↗</span></a>` : ''}
        </div>
      </div>
    </div>
    <div class="modal-meta">
      <div class="modal-meta-left">
        <div class="meta-item"><label>Client</label><span>${p.client}</span></div>
        <div class="meta-item"><label>Project Type</label><span>${p.type}</span></div>
        <div class="meta-item"><label>Year</label><span>${p.year}</span></div>
        <div class="card-tags" style="margin-top:8px">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
      <div class="modal-meta-right">
        ${p.slogan ? `<p class="modal-slogan">${p.slogan}</p>` : ''}
        <p>${p.role}</p>
        <p>${p.detail}</p>
      </div>
    </div>
    ${highlightsGrid(p)}
  `;

  const overlay = document.getElementById('modal-overlay');
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('open');
  document.body.classList.add('no-scroll');

  document.getElementById('modal-close').focus();
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

/* ── Nav scroll effect ──────────────────────────────────────── */
function onScroll() {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
}

/* ── Hero parallax ──────────────────────────────────────────── */
function initHeroParallax() {
  const hero = document.getElementById('hero');
  const mocks = Array.from(hero.querySelectorAll('.float-mock'));
  if (!mocks.length) return;

  // threshold: fraction of 1vh scroll to appear
  // spd: parallax px per px scrolled (neg = moves up faster, pos = slower)
  // freq: float oscillation Hz  amp: float amplitude px  phase: sine offset
  const CFG = [
    { threshold: 0.00, spd: -0.07, freq: 0.18, amp: 6, phase: 0             },
    { threshold: 0.00, spd:  0.11, freq: 0.22, amp: 7, phase: Math.PI * 0.7 },
    { threshold: 0.00, spd: -0.05, freq: 0.16, amp: 5, phase: Math.PI * 1.3 },
  ];

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    mocks.forEach(m => m.classList.add('is-visible'));
    return;
  }

  const moveEls = mocks.map(m => m.querySelector('.mock-move'));
  const hovering = new Set();
  let heroVisible = true;

  const observer = new IntersectionObserver(
    ([entry]) => { heroVisible = entry.isIntersecting; },
    { threshold: 0 }
  );
  observer.observe(hero);

  mocks.forEach((mock, i) => {
    mock.addEventListener('mouseenter', () => { hovering.add(i);    mock.classList.add('is-hovering'); });
    mock.addEventListener('mouseleave', () => { hovering.delete(i); mock.classList.remove('is-hovering'); });
  });

  function loop(ts) {
    requestAnimationFrame(loop);
    if (window.innerWidth <= 1024 || !heroVisible) return;

    const t = ts / 1000;
    const progress = Math.min(1, window.scrollY / window.innerHeight);

    mocks.forEach((mock, i) => {
      const { threshold, spd, freq, amp, phase } = CFG[i];
      mock.classList.toggle('is-visible', progress >= threshold);

      const floatY  = amp * Math.sin(2 * Math.PI * freq * t + phase);
      const scrollY = hovering.has(i) ? -10 : window.scrollY * spd;
      moveEls[i].style.transform = `translateY(${(floatY + scrollY).toFixed(2)}px)`;
    });
  }

  requestAnimationFrame(loop);
}

/* ── Scroll reveal ──────────────────────────────────────────── */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.project-card').forEach(c => c.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  const cols = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.transitionDelay = `${(i % cols) * 100}ms`;
    observer.observe(card);
  });
}

/* ── Contact form ───────────────────────────────────────────── */
function handleContactSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('[type="submit"]');
  btn.textContent = "Sent! I'll be in touch soon.";
  btn.disabled = true;
  btn.style.opacity = '0.65';
}

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initScrollReveal();

  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  initHeroParallax();

  document.getElementById('contact-form').addEventListener('submit', handleContactSubmit);

  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.addEventListener('click', e => {
    const bar = e.target.closest('.bf-url--text');
    if (!bar) return;
    e.stopPropagation();
    navigator.clipboard.writeText(bar.dataset.url).then(() => {
      bar.classList.add('copied');
      setTimeout(() => bar.classList.remove('copied'), 1800);
    });
  });
});
