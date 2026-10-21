#!/usr/bin/env node
// Genera las variantes optimizadas (AVIF + WebP) de las imágenes que usan los
// proyectos y escribe src/data/image-manifest.json.
//
// Se ejecuta a mano, fuera del build:  npm run images
//   --force   regenera todo aunque la salida esté al día
//   --clean   borra de public/img los ficheros que ya no corresponden a ningún origen
//
// Entrada:  src/content/projects/*.json  ->  images.grid, images.banner, images.highlights[].file
//           assets/Img/<images.dir>/<file>   (los originales no se tocan)
// Salida:   public/img/<dir-slug>/<file-slug>-<ancho>.{avif,webp}
//           src/data/image-manifest.json

import { readdir, readFile, writeFile, mkdir, stat, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PROJECTS_DIR = path.join(ROOT, 'src', 'content', 'projects');
const SOURCE_DIR = path.join(ROOT, 'assets', 'Img');
const OUT_DIR = path.join(ROOT, 'public', 'img');
const MANIFEST_PATH = path.join(ROOT, 'src', 'data', 'image-manifest.json');
const PUBLIC_BASE = '/img';

// Imágenes que no pertenecen a ningún proyecto (el retrato de Sobre mí). Son
// opcionales: si el original no está, se avisa y el build sigue sin ellas.
const SITE_IMAGES = [{ dir: 'Perfil', file: 'nicolas.jpg' }];

const STATIC_WIDTHS = [400, 800, 1200];
const ANIMATED_WIDTHS = [400, 800];
const AVIF_OPTIONS = { quality: 50, effort: 4 };
const WEBP_OPTIONS = { quality: 75, effort: 4 };

const args = new Set(process.argv.slice(2));
const FORCE = args.has('--force');
const CLEAN = args.has('--clean');

sharp.cache(false);

// Minúsculas ASCII, sin espacios ni paréntesis; todo lo que no sea [a-z0-9] pasa a guion
// y los guiones repetidos o en los extremos se colapsan.
function slugify(value) {
  return value
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');
}

// Nunca amplía: cada ancho se limita al original y se eliminan duplicados.
// Un original de 350 px da [350]; uno de 1000 px da [400, 800, 1000].
function targetWidths(candidates, originalWidth) {
  return [...new Set(candidates.map((w) => Math.min(w, originalWidth)))].sort((a, b) => a - b);
}

const toMB = (bytes) => (bytes / 1024 / 1024).toFixed(2);

async function mtimeMs(file) {
  try {
    return (await stat(file)).mtimeMs;
  } catch {
    return null;
  }
}

async function collectSources() {
  const files = (await readdir(PROJECTS_DIR)).filter((f) => f.endsWith('.json')).sort();
  const sources = new Map();
  for (const file of files) {
    const project = JSON.parse(await readFile(path.join(PROJECTS_DIR, file), 'utf8'));
    const images = project.images;
    if (!images?.dir) throw new Error(`${file}: falta images.dir`);
    const refs = [images.grid, images.banner, ...(images.highlights ?? []).map((h) => h.file)].filter(Boolean);
    for (const name of refs) {
      const key = `${images.dir}/${name}`;
      if (sources.has(key)) continue;
      const abs = path.join(SOURCE_DIR, images.dir, name);
      if (!existsSync(abs)) throw new Error(`${file}: no existe ${path.relative(ROOT, abs)}`);
      sources.set(key, {
        key,
        abs,
        dirSlug: slugify(images.dir),
        fileSlug: slugify(path.parse(name).name),
        project: file,
      });
    }
  }
  for (const { dir, file } of SITE_IMAGES) {
    const key = `${dir}/${file}`;
    const abs = path.join(SOURCE_DIR, dir, file);
    if (!existsSync(abs)) {
      console.warn(`  Aviso: falta ${path.relative(ROOT, abs)}; la página que lo use seguirá sin imagen.`);
      continue;
    }
    sources.set(key, {
      key,
      abs,
      dirSlug: slugify(dir),
      fileSlug: slugify(path.parse(file).name),
      project: '(sitio)',
    });
  }

  return { projectCount: files.length, sources: [...sources.values()] };
}

function assertNoSlugCollisions(sources) {
  const seen = new Map();
  for (const s of sources) {
    const id = `${s.dirSlug}/${s.fileSlug}`;
    if (seen.has(id)) throw new Error(`Colisión de slug "${id}": ${seen.get(id)} y ${s.key}`);
    seen.set(id, s.key);
  }
}

async function describe(source) {
  const meta = await sharp(source.abs, { animated: true }).metadata();
  const animated = (meta.pages ?? 1) > 1;
  let width = meta.width;
  let height = animated ? (meta.pageHeight ?? meta.height) : meta.height;
  // EXIF 5-8 implica rotación de 90 grados: el ancho real es el alto almacenado.
  if ((meta.orientation ?? 1) >= 5) [width, height] = [height, width];
  const widths = targetWidths(animated ? ANIMATED_WIDTHS : STATIC_WIDTHS, width);
  const formats = animated ? ['webp'] : ['avif', 'webp'];
  const baseName = `${source.dirSlug}/${source.fileSlug}`;
  const outputs = [];
  for (const w of widths) {
    for (const format of formats) {
      outputs.push({ width: w, format, abs: path.join(OUT_DIR, source.dirSlug, `${source.fileSlug}-${w}.${format}`) });
    }
  }
  return {
    ...source,
    width,
    height,
    animated,
    widths,
    formats,
    outputs,
    entry: { width, height, animated, base: `${PUBLIC_BASE}/${baseName}`, widths, formats },
  };
}

async function isUpToDate(item) {
  if (FORCE) return false;
  const srcTime = await mtimeMs(item.abs);
  for (const out of item.outputs) {
    const outTime = await mtimeMs(out.abs);
    if (outTime === null || outTime < srcTime) return false;
  }
  return true;
}

async function encode(item) {
  await mkdir(path.dirname(item.outputs[0].abs), { recursive: true });
  if (item.animated) {
    for (const out of item.outputs) {
      await sharp(item.abs, { animated: true })
        .resize({ width: out.width, withoutEnlargement: true })
        .webp(WEBP_OPTIONS)
        .toFile(out.abs);
    }
    return;
  }
  let base = sharp(item.abs).rotate();
  // Las capturas PNG suelen llevar canal alfa totalmente opaco: quitarlo ahorra bytes.
  const { isOpaque } = await sharp(item.abs).stats();
  if (isOpaque) base = base.removeAlpha();
  for (const out of item.outputs) {
    const pipeline = base.clone().resize({ width: out.width, withoutEnlargement: true });
    if (out.format === 'avif') await pipeline.avif(AVIF_OPTIONS).toFile(out.abs);
    else await pipeline.webp(WEBP_OPTIONS).toFile(out.abs);
  }
}

async function runPool(items, limit, worker) {
  let next = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const index = next++;
      await worker(items[index], index);
    }
  });
  await Promise.all(runners);
}

async function listFiles(dir) {
  if (!existsSync(dir)) return [];
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries.filter((e) => e.isFile()).map((e) => path.join(e.parentPath ?? e.path, e.name));
}

async function main() {
  const started = Date.now();
  const { projectCount, sources } = await collectSources();
  assertNoSlugCollisions(sources);
  const items = await Promise.all(sources.map(describe));

  const concurrency = Math.max(1, Math.min(4, Math.floor((os.availableParallelism?.() ?? os.cpus().length) / 2)));
  let processed = 0;
  let skipped = 0;
  let written = 0;
  await runPool(items, concurrency, async (item) => {
    if (await isUpToDate(item)) {
      skipped++;
      return;
    }
    const t0 = Date.now();
    await encode(item);
    processed++;
    written += item.outputs.length;
    console.log(`  ok  ${item.key}  ->  ${item.outputs.length} ficheros (${((Date.now() - t0) / 1000).toFixed(1)} s)`);
  });

  const manifest = {};
  for (const item of [...items].sort((a, b) => a.key.localeCompare(b.key, 'en'))) manifest[item.key] = item.entry;
  const json = `${JSON.stringify(manifest, null, 2)}\n`;
  await mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  const previous = existsSync(MANIFEST_PATH) ? await readFile(MANIFEST_PATH, 'utf8') : null;
  if (previous !== json) await writeFile(MANIFEST_PATH, json);

  const expected = new Set(items.flatMap((i) => i.outputs.map((o) => path.resolve(o.abs))));
  const orphans = (await listFiles(OUT_DIR)).filter((f) => !expected.has(path.resolve(f)));
  if (orphans.length) {
    if (CLEAN) {
      await Promise.all(orphans.map((f) => unlink(f)));
      console.log(`  Borrados ${orphans.length} ficheros huérfanos de public/img.`);
    } else {
      console.warn(`  Aviso: ${orphans.length} ficheros en public/img no corresponden a ningún origen (usa --clean para borrarlos).`);
    }
  }

  let bytesBefore = 0;
  let bytesAfter = 0;
  for (const item of items) {
    bytesBefore += (await stat(item.abs)).size;
    for (const out of item.outputs) bytesAfter += (await stat(out.abs)).size;
  }

  const outputCount = items.reduce((n, i) => n + i.outputs.length, 0);
  const animatedCount = items.filter((i) => i.animated).length;
  console.log('');
  console.log(`Proyectos leídos:     ${projectCount}`);
  console.log(`Imágenes origen:      ${items.length} (${animatedCount} animadas)`);
  console.log(`Procesadas / saltadas: ${processed} / ${skipped}`);
  console.log(`Ficheros generados:   ${written} en esta ejecución, ${outputCount} en total`);
  console.log(`Peso originales:      ${toMB(bytesBefore)} MB`);
  console.log(`Peso optimizadas:     ${toMB(bytesAfter)} MB (todas las variantes)`);
  console.log(`Manifest:             ${path.relative(ROOT, MANIFEST_PATH)}${previous === json ? ' (sin cambios)' : ''}`);
  console.log(`Tiempo:               ${((Date.now() - started) / 1000).toFixed(1)} s`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
