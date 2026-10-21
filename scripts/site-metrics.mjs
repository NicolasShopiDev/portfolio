#!/usr/bin/env node
// Mide la web con Lighthouse y escribe src/data/site-metrics.json, que es lo que
// publica la página /codigo/. Los números del sitio no se escriben a mano: se miden.
//
//   npm run metrics                      -> mide https://nicolasmateos.com/
//   npm run metrics -- http://localhost:4321/   -> mide una build local
//
// Necesita Chrome instalado. Lighthouse se descarga con npx, no es una dependencia
// del proyecto: esto se ejecuta a mano después de publicar, nunca en el build.

import { execSync } from 'node:child_process';
import { readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'src', 'data', 'site-metrics.json');
const DEFAULT_URL = 'https://nicolasmateos.com/';
const LIGHTHOUSE = 'lighthouse@12';

const url = process.argv[2] ?? DEFAULT_URL;
const report = path.join(tmpdir(), `site-metrics-${Date.now()}.json`);

// A través del shell: en Windows, Node no deja lanzar npx.cmd directamente.
const command = [
  'npx --yes', LIGHTHOUSE, `"${url}"`,
  '--only-categories=performance,accessibility,best-practices,seo',
  '--form-factor=mobile',
  '--screenEmulation.mobile',
  '--chrome-flags="--headless=new --no-sandbox"',
  '--output=json',
  `--output-path="${report}"`,
  '--quiet',
].join(' ');

console.log(`Midiendo ${url} (móvil)…`);
execSync(command, { stdio: 'inherit' });

const lh = JSON.parse(await readFile(report, 'utf8'));
await rm(report, { force: true });

const score = (key) => Math.round(lh.categories[key].score * 100);
const value = (id) => lh.audits[id]?.numericValue ?? 0;
const requests = lh.audits['network-requests']?.details?.items?.length ?? 0;

const metrics = {
  measured: lh.fetchTime.slice(0, 10),
  url: lh.finalDisplayedUrl,
  tool: `Lighthouse ${lh.lighthouseVersion.split('.')[0]}`,
  formFactor: lh.configSettings.formFactor,
  scores: {
    performance: score('performance'),
    accessibility: score('accessibility'),
    bestPractices: score('best-practices'),
    seo: score('seo'),
  },
  metrics: {
    // Redondeado a la décima de segundo: publicar 1783 ms sería fingir precisión.
    lcpMs: Math.round(value('largest-contentful-paint') / 100) * 100,
    cls: Number(value('cumulative-layout-shift').toFixed(2)),
    tbtMs: Math.round(value('total-blocking-time')),
    transferBytes: Math.round(value('total-byte-weight')),
    requests,
  },
};

await writeFile(OUT, `${JSON.stringify(metrics, null, 2)}\n`);

console.log('');
console.log(`Rendimiento ${metrics.scores.performance}  ·  Accesibilidad ${metrics.scores.accessibility}  ·  Prácticas ${metrics.scores.bestPractices}  ·  SEO ${metrics.scores.seo}`);
console.log(`LCP ${metrics.metrics.lcpMs} ms  ·  CLS ${metrics.metrics.cls}  ·  TBT ${metrics.metrics.tbtMs} ms  ·  ${Math.round(metrics.metrics.transferBytes / 1024)} KiB en ${metrics.metrics.requests} peticiones`);
console.log(`Escrito en ${path.relative(ROOT, OUT)}. Acuérdate de actualizar updated.code en src/i18n/routes.ts.`);
