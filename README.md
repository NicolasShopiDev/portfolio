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
| `npm run metrics` | Measure the live site with Lighthouse and rewrite `src/data/site-metrics.json` |
| `npm run post -- es <slug> "<Title>"` | Create a new article with today's date and the frontmatter filled in |
| `npm run publish -- <slug>` | Take an article out of draft and date it today, ready to merge |
| `npx wrangler dev` | Serve `dist/` the way Cloudflare does, with `_redirects`, `_headers` and the 404 page |

## Structure

```
src/
  content/projects/*.json   one file per project (ES + EN text, images, year, URL); the order field sets the order
  content/posts/<lang>/*.md  one Markdown file per article; the folder sets the language, the file name the URL
  content/cases/<lang>/*.md case studies, one file per language, named after the project
  content.config.ts          schema: the build fails if a field or a translation is missing
  i18n/routes.ts             URL of every page in each language, and its last-updated date
  i18n/ui.ts                 interface text, titles and meta descriptions in both languages
  views/                     page layouts shared by the ES and EN routes
  pages/                     routes: index, shopify-b2b, shopify-plus, proyectos (and proyectos/[slug]), codigo, sobre-mi, blog, contacto, and their en/ versions
  lib/posts.ts               reads the articles: language, URL, reading time, translation, related
  components/                hero, cards, project entries, Checkout Lab, nav, footer...
  snippets/                  the code shown on /codigo/, as real files (imported with ?raw)
  data/site-metrics.json     Lighthouse scores published on /codigo/ (npm run metrics)
  lib/schema.ts              JSON-LD (Person, WebSite, page, breadcrumbs, projects)
  styles/, scripts/main.js   CSS and the small client script (modal, nav, form)
public/
  img/                       generated image variants (committed)
  assets/js/lab.js           Checkout Lab, served unbundled because it loads the Function by relative URL
  assets/lab/                Function files copied from shopify-checkout-lab (scripts/sync-lab.ps1)
  _redirects, _headers       Cloudflare redirects and cache rules
  robots.txt
assets/Img/                  original screenshots (not published, only used by npm run images)
assets/Img/Perfil/nicolas.jpg  the About portrait; optional, the page drops it if missing
```

`sitemap.xml`, `llms.txt` and both RSS feeds are generated at build time from `src/i18n/routes.ts`, the project files and the articles.

## Add or edit a project

1. Put the screenshots in `assets/Img/<Folder>/`: a grid image, a banner and the highlights.
2. Create `src/content/projects/<slug>.json` (copy an existing one). Fill both `es` and `en` for type, tags, role, detail and every highlight `alt`.
3. Run `npm run images` to generate the AVIF/WebP variants and update `src/data/image-manifest.json`.
4. `npm run build`. The build fails with a clear message if an image or a translation is missing.
5. When page content changes, update its date in `src/i18n/routes.ts` (`updated`), used by the sitemap and the structured data.

## The numbers on /codigo/

The code page publishes real Lighthouse scores, never hand-written ones.

1. Deploy first: the numbers have to describe what is live.
2. `npm run metrics` (needs Chrome; it fetches Lighthouse with npx, it is not a dependency).
   Pass a URL to measure something else: `npm run metrics -- http://localhost:4321/`.
3. It rewrites `src/data/site-metrics.json`. Update `updated.code` in `src/i18n/routes.ts` and push.

A score below 100 prints the note written for it in `src/views/CodeView.astro` (`scoreNotes`);
the note disappears on its own once the score reaches 100, so stale excuses cannot stay up.

## Add a page

Add the route to `routes` in `src/i18n/routes.ts`, its title and description to `seo` in `src/i18n/ui.ts`, a view in `src/views/` and a file per language in `src/pages/`. A page can exist in Spanish only (leave out `en`, like `/shopify-plus/`): it then gets no hreflang tags and the language switch leads to the English home. The sitemap, hreflang tags and language switch pick it up automatically.

Service pages (`/shopify-b2b/`, `/shopify-plus/`) share `src/views/ServiceView.astro`; their copy lives in `B2bView.astro` and `PlusView.astro`.

## Add a case study

1. The project must exist in `src/content/projects/`. Write `src/content/cases/es/<slug>.md` and `src/content/cases/en/<slug>.md` (copy an existing one). The build fails if one language is missing.
2. The frontmatter holds the facts, stack, results, lessons and testimonial; the Markdown body holds the problem and the solution, with `##` headings phrased as questions.
3. A fact left out of the frontmatter shows as pending. Set it to `false` when it is confirmed that there is nothing to say (the row or section disappears). Set `resultsDone: true` once the business metrics are in `results` or confirmed unavailable.
4. The page appears at `/proyectos/<slug>/` and `/en/projects/<slug>/`, and the home cards, the projects page, the sitemap and `llms.txt` link to it.

## Pending content

`<Pending>` (`src/components/Pending.astro`) marks text that still needs real data: it shows as a yellow box on branch previews. The build fails on `master` while any page still has one (`src/integrations/pending-guard.mjs`, which reads `WORKERS_CI_BRANCH`), so a draft never reaches production. Run `PENDING_GUARD=strict npm run build` to check locally.

## Add an article

1. `npm run post -- es <slug> "<Title>"`. Add `--pair <key>` on the English version to link it to the Spanish one, which is what hreflang, the language switch and the related links read.
2. Write it, and fill in `seoTitle`, `description`, `keyword`, `tags`, `faq` and `cta`.
3. `npm run build`. It fails if the title tag is over 65 characters, the meta description is outside 70 to 165, or a date is not `YYYY-MM-DD`.
4. The URL, the sitemap entry and its alternates, the feed, the JSON-LD (`BlogPosting`, `FAQPage`, breadcrumbs), the table of contents, the reading time and the author box all follow from the file. Nothing else to update.

`draft: true` keeps an article out of the listing, the sitemap and the feed and marks it `noindex`, but still builds its page, which is enough to read it on a branch before it goes out. A scheduled task writes one draft every morning on its own branch and never publishes; `npm run publish -- <slug>` is the other half, after the draft has been read and corrected. What to write, the editorial standard and that routine are in [BLOG.md](BLOG.md); the questions it finds are logged in [BLOG-RADAR.md](BLOG-RADAR.md).

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

The lab runs the real Shopify Functions from the `shopify-checkout-lab` repo, one per ticket: `cod-guard` (01), `b2b-case-packs` (02) and `wholesale-tiers` (03). After changing a Function there, run `./scripts/sync-lab.ps1` to copy them into `public/assets/lab/<handle>/`. Interface text for both languages is in `public/assets/js/lab.js` and `src/components/Lab.astro`; the products of tickets 02 and 03 (price, title, case size) live only in `Lab.astro`, as data attributes the script reads.

## License

Two licenses, one repository. See [LICENSE](LICENSE).

- **The code is MIT.** The components, views, scripts, styles and build
  configuration. Fork it, read it, build your own site with it.
- **The content and the brand are not.** The articles and project files under
  `src/content/`, the copy in `src/i18n/`, the published metrics, every image in
  `assets/` and `public/img/`, the name and the client work shown on the site are
  all rights reserved.

Write your own words and use your own images.
