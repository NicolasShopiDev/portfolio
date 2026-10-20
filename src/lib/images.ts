import manifest from '../data/image-manifest.json';

type Entry = { width: number; height: number; animated: boolean; base: string; widths: number[]; formats: string[] };
const images = manifest as Record<string, Entry>;

// Single URL for images the modal builds in JS: the widest WebP up to `max` px.
export function webpUrl(image: string, max = 1200): string {
  const entry = images[image];
  if (!entry) throw new Error(`Image missing from src/data/image-manifest.json: ${image}. Run npm run images.`);
  const fits = entry.widths.filter((w) => w <= max);
  const w = fits.length ? fits[fits.length - 1] : entry.widths[0];
  return `${entry.base}-${w}.webp`;
}

export const imageKey = (dir: string, file: string) => `${dir}/${file}`;
