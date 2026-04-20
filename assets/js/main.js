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
    role: 'Built a comprehensive B2B ecommerce platform for a biotech company specializing in medicinal mushroom supplements. The project included custom pricing tiers, a wholesale portal, and advanced product filtering tailored for health professionals.',
    detail: 'Custom Shopify B2B implementation featuring tiered wholesale pricing, customer segment-based catalog visibility, performance-optimized product pages, and a streamlined checkout experience supporting both B2C and B2B flows.'
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
    role: "Built an international B2B platform for one of Europe's leading motorcycle helmet manufacturers. The platform supports dealer authentication, custom pricing tiers, and a multi-language product catalog spanning European markets.",
    detail: 'Custom Shopify Plus development with advanced B2B features: dealer-specific login, volume-based pricing logic, PDF catalog export, and multilingual support with Shopify Markets integration.'
  },
  {
    id: 3,
    name: 'Cosmeticos24H',
    badge: 'Shopify Plus',
    tags: ['Shopify Plus', 'B2B', 'Performance', 'UX'],
    client: 'Cosmeticos24H',
    type: 'Ecommerce Platform',
    year: '2023',
    role: 'Upgraded and optimized a high-traffic beauty ecommerce store with advanced faceted filtering, B2B wholesale features, and measurable Core Web Vitals improvements.',
    detail: 'Delivered a full Shopify Plus overhaul including custom collection filtering, B2B customer portal, drawer cart optimization, lazy-loading improvements, and a redesigned product detail page for higher conversion.'
  },
  {
    id: 4,
    name: 'CoastBCN',
    badge: 'Shopify',
    tags: ['Shopify', 'Liquid', 'Custom Features', 'Fashion'],
    client: 'CoastBCN',
    type: 'Collaboration',
    year: '2023',
    role: "As a developer collaborating with Reduncle for CoastBCN, I maintained their Shopify storefront and shipped several custom features — including a fully customizable scrolling banner and a quick-add-to-cart flow that lets customers select size directly from the product grid.",
    detail: 'Custom Shopify features delivered: adjustable-speed announcement banner, quick-add with size picker from collection grids, custom drawer cart redesign, out-of-stock badge system, and password page customization.'
  },
  {
    id: 5,
    name: 'Fernando García',
    badge: 'Shopify Plus',
    tags: ['Shopify Plus', 'Fashion', 'Liquid', 'Custom Theme'],
    client: 'Fernando García',
    type: 'Custom Theme',
    year: '2024',
    role: 'Custom Shopify Plus theme development for a premium Spanish fashion brand. Delivered an elegant, performance-focused storefront with tailored UI components and international market support.',
    detail: 'End-to-end theme build: optimized LCP and layout shift scores, custom collection filtering with live updates, dynamic size guide modals, wishlist integration, and Shopify Markets configuration for multi-currency.'
  },
  {
    id: 6,
    name: 'El Capote',
    badge: 'Shopify',
    tags: ['Shopify', 'Liquid', 'Promotions', 'Fashion'],
    client: 'El Capote',
    type: 'Ecommerce',
    year: '2024',
    role: 'Custom Shopify development for a Spanish menswear brand, focusing on promotional mechanics and specialized product showcases for their seasonal collections.',
    detail: 'Built custom promo campaign components: countdown timers, bundle-based discount messaging, specialized product cards with multi-image hover, and a configurable featured collection module.'
  }
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
  return `<img src="${imgPath(p, p.imgKey + ' Grid.png')}" alt="${p.name}" class="screen-img" loading="lazy" />`;
}

function bannerImg(p) {
  if (!p.imgDir) return '<div class="screen-placeholder" style="aspect-ratio:16/7"></div>';
  return `<img src="${imgPath(p, p.imgKey + ' Banner.png')}" alt="${p.name}" class="screen-img screen-img--banner" loading="lazy" />`;
}

function highlightsGrid(p) {
  if (!p.highlights || !p.highlights.length) return '';
  return `
    <div class="highlights-grid">
      ${p.highlights.map(file => `
        <div class="highlight-item">
          <img src="${imgPath(p, file)}" alt="" loading="lazy" />
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
  document.body.style.overflow = 'hidden';

  document.getElementById('modal-close').focus();
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ── Nav scroll effect ──────────────────────────────────────── */
function onScroll() {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
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

  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.getElementById('contact-form').addEventListener('submit', handleContactSubmit);

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
