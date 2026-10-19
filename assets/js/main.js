'use strict';

/* ── Browser bar ────────────────────────────────────────────── */
function browserBar(url) {
  const urlHtml = url
    ? `<div class="bf-url bf-url--text" data-url="${url}" title="Copy URL">
         <span class="bf-url-text">${url}</span>
         <span class="bf-url-copied" aria-hidden="true">Copied!</span>
       </div>`
    : `<div class="bf-url"></div>`;
  return `<div class="bf-bar">
    <span class="bf-dot r"></span>
    <span class="bf-dot y"></span>
    <span class="bf-dot g"></span>
    ${urlHtml}
  </div>`;
}

/* ── Project cards ──────────────────────────────────────────── */
// Cards and their detail text are plain HTML in index.html, so crawlers that
// don't run JavaScript still read every project. JS only wires up the modal.
function initProjectCards() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card); }
    });
  });
}

/* ── Modal ──────────────────────────────────────────────────── */
function openModal(card) {
  const name = card.querySelector('.card-name').textContent;
  const { url, banner, highlights } = card.dataset;
  const files = highlights ? highlights.split('|') : [];

  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <div class="modal-hero-frame browser-frame">
      ${browserBar(url)}
      <div class="bf-screen">
        <div class="banner-wrap">
          ${banner
            ? `<img src="${banner}" alt="" class="screen-img screen-img--banner" loading="lazy" />`
            : '<div class="screen-placeholder" style="aspect-ratio:16/7"></div>'}
          <div class="banner-overlay"></div>
          <h2 class="banner-title" id="modal-title"></h2>
          ${url ? `<a href="${url}" target="_blank" rel="noopener" class="banner-visit">Visit project <span>↗</span></a>` : ''}
        </div>
      </div>
    </div>
  `;
  body.querySelector('#modal-title').textContent = name;

  // The static markup avoids "meta"/"modal" class names, which text extractors
  // (Readability, trafilatura) drop as page chrome; the modal keeps its own classes.
  const meta = card.querySelector('.project-detail .project-facts').cloneNode(true);
  meta.className = 'modal-meta';
  meta.querySelector('.project-facts-left').className = 'modal-meta-left';
  meta.querySelector('.project-facts-right').className = 'modal-meta-right';
  meta.querySelectorAll('.fact-item').forEach(el => { el.className = 'meta-item'; });
  const slogan = meta.querySelector('.project-slogan');
  if (slogan) slogan.className = 'modal-slogan';
  const tags = card.querySelector('.card-info .card-tags').cloneNode(true);
  tags.style.marginTop = '8px';
  meta.querySelector('.modal-meta-left').appendChild(tags);
  body.appendChild(meta);

  if (files.length) {
    const grid = document.createElement('div');
    grid.className = 'highlights-grid';
    files.forEach((file, i) => {
      const item = document.createElement('div');
      item.className = 'highlight-item';
      const img = document.createElement('img');
      img.src = file;
      img.alt = `${name}: screenshot ${i + 1}`;
      img.loading = 'lazy';
      item.appendChild(img);
      grid.appendChild(item);
    });
    body.appendChild(grid);
  }

  const overlay = document.getElementById('modal-overlay');
  overlay.querySelector('.modal-scroll').scrollTop = 0;
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
  const wasVisible = new Array(mocks.length).fill(false);
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

    const sy = window.scrollY;
    mocks.forEach((mock, i) => {
      const { threshold, spd, freq, amp, phase } = CFG[i];
      const visible = progress >= threshold;
      if (visible !== wasVisible[i]) {
        mock.classList.toggle('is-visible', visible);
        wasVisible[i] = visible;
      }
      const floatY  = amp * Math.sin(2 * Math.PI * freq * t + phase);
      const scrollY = hovering.has(i) ? -10 : sy * spd;
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

/* ── Scroll hint ────────────────────────────────────────────── */
function initScrollHint() {
  const hint = document.getElementById('scroll-hint');
  if (!hint) return;
  hint.addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });
  window.addEventListener('scroll', () => {
    hint.classList.toggle('is-hidden', window.scrollY > 80);
  }, { passive: true });
}

/* ── Contact form ───────────────────────────────────────────── */
async function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('[type="submit"]');
  const original = btn.textContent;

  btn.textContent = 'Sending…';
  btn.disabled = true;

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      btn.textContent = "Sent! I'll be in touch soon.";
      btn.style.opacity = '0.65';
      form.reset();
    } else {
      btn.textContent = 'Something went wrong — try again.';
      btn.disabled = false;
      setTimeout(() => { btn.textContent = original; }, 3000);
    }
  } catch {
    btn.textContent = 'Something went wrong — try again.';
    btn.disabled = false;
    setTimeout(() => { btn.textContent = original; }, 3000);
  }
}

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initProjectCards();
  initScrollReveal();

  // re-anchor to the #hash in case layout moved after the browser's first jump
  const hashTarget = location.hash && document.getElementById(location.hash.slice(1));
  if (hashTarget) hashTarget.scrollIntoView({ behavior: 'instant' });

  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  initHeroParallax();
  initScrollHint();

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
