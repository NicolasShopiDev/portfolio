# nicolasmateos.com

Portfolio of Nicolás Mateos, freelance Shopify Plus and B2B developer. Static site built with [Astro](https://astro.build) and served by Cloudflare Workers (static assets). Spanish lives at `/`, English at `/en/`.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (Node 22.12 or newer, see `.node-version`) |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run images` | Regenerate the optimized images in `public/img/` (see below) |
| `npm run post -- es <slug> "<Title>"` | Create a new article with today's date and the frontmatter filled in |
| `npx wrangler dev` | Serve `dist/` the way Cloudflare does, with `_redirects`, `_headers` and the 404 page |

## Structure

```
src/
  content/projects/*.json   one file per project (ES + EN text, images, year, URL); the order field sets the order
  content/posts/<lang>/*.md  one Markdown file per article; the folder sets the language, the file name the URL
  content.config.ts          schema: the build fails if a field or a translation is missing
  i18n/routes.ts             URL of every page in each language, and its last-updated date
  i18n/ui.ts                 interface text, titles and meta descriptions in both languages
  views/                     page layouts shared by the ES and EN routes
  pages/                     routes: index, proyectos, sobre-mi, blog, contacto and the same under en/
  lib/posts.ts               reads the articles: language, URL, reading time, translation, related
  components/                hero, cards, project entries, Checkout Lab, nav, footer...
  lib/schema.ts              JSON-LD (Person, WebSite, page, breadcrumbs, projects)
  styles/, scripts/main.js   CSS and the small client script (modal, nav, form)
public/
  img/                       generated image variants (committed)
  assets/js/lab.js           Checkout Lab, served unbundled because it loads the Function by relative URL
  assets/lab/                Function files copied from shopify-checkout-lab (scripts/sync-lab.ps1)
  _redirects, _headers       Cloudflare redirects and cache rules
  robots.txt
assets/Img/                  original screenshots (not published, only used by npm run images)
```

`sitemap.xml`, `llms.txt` and both RSS feeds are generated at build time from `src/i18n/routes.ts`, the project files and the articles.

## Add or edit a project

1. Put the screenshots in `assets/Img/<Folder>/`: a grid image, a banner and the highlights.
2. Create `src/content/projects/<slug>.json` (copy an existing one). Fill both `es` and `en` for type, tags, role, detail and every highlight `alt`.
3. Run `npm run images` to generate the AVIF/WebP variants and update `src/data/image-manifest.json`.
4. `npm run build`. The build fails with a clear message if an image or a translation is missing.
5. When page content changes, update its date in `src/i18n/routes.ts` (`updated`), used by the sitemap and the structured data.

## Add a page

Add the route to `routes` in `src/i18n/routes.ts` (both languages), its title and description to `seo` in `src/i18n/ui.ts`, a view in `src/views/` and the two files in `src/pages/`. The sitemap, hreflang tags and language switch pick it up automatically.

## Add an article

1. `npm run post -- es <slug> "<Title>"`. Add `--pair <key>` on the English version to link it to the Spanish one, which is what hreflang, the language switch and the related links read.
2. Write it, and fill in `seoTitle`, `description`, `keyword`, `tags`, `faq` and `cta`.
3. `npm run build`. It fails if the title tag is over 65 characters, the meta description is outside 70 to 165, or a date is not `YYYY-MM-DD`.
4. The URL, the sitemap entry and its alternates, the feed, the JSON-LD (`BlogPosting`, `FAQPage`, breadcrumbs), the table of contents, the reading time and the author box all follow from the file. Nothing else to update.

`draft: true` keeps an article out of the listing, the sitemap and the feed and marks it `noindex`, but still builds its page, which is enough to read it on a preview branch. What to write and the editorial standard are in [BLOG.md](BLOG.md).

## Deploy

Cloudflare Workers Builds deploys on every push:

- `master` goes to production (nicolasmateos.com).
- Any other branch gets a preview at `<branch>-portfolio.nicolasmhbusiness.workers.dev`.

Build settings in the Cloudflare dashboard (Workers & Pages, portfolio, Settings, Build):

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (default)
- Dependencies install automatically; the Node version comes from `.node-version`.

`wrangler.jsonc` publishes `./dist` and serves `dist/404.html` with a 404 status for unknown URLs.

To roll back, open Deployments in the Cloudflare dashboard and promote the previous version, or run `npx wrangler rollback`.

## Checkout Lab

The lab runs the real Shopify Function from the `shopify-checkout-lab` repo. After changing the Function there, run `./scripts/sync-lab.ps1` to copy it into `public/assets/lab/`. Interface text for both languages is in `public/assets/js/lab.js` and `src/components/Lab.astro`.
