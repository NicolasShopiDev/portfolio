/* The home page, and only the home page, looks at the browser's language.
 *
 * A Cloudflare Pages middleware runs ahead of the static file, so a visitor who reads English
 * lands on /en/ without ever seeing the Spanish page flash by. Everything else on the site is
 * served straight from disk: deep links keep the language they were shared in, which is what
 * hreflang already tells search engines.
 *
 * It has to be a _middleware: in Pages a static file wins over functions/index.js, so the home
 * page would never reach it. The flip side is that this runs on every request, which is why the
 * first two lines drop everything that is not a GET of "/" before doing any work.
 *
 * Three ways out of the redirect, in order: crawlers (they should see both versions), a visitor
 * who has picked a language with the ES/EN switch (main.js writes the cookie), and anything
 * unexpected, which falls through to the page itself.
 */

const BOTS = /bot|crawl|spider|slurp|lighthouse|pagespeed|facebookexternalhit|whatsapp|telegram|embedly|preview/i;

export async function onRequest(context) {
  const { request, next } = context;

  const url = new URL(request.url);
  if (request.method !== 'GET' || url.pathname !== '/') return next();

  try {
    if (wantsEnglish(request)) {
      url.pathname = '/en/';
      return Response.redirect(url.toString(), 302);
    }
  } catch {
    // A surprise in here must never take the home page down.
  }

  const res = await next();
  const marcado = new Response(res.body, res);
  marcado.headers.set('x-lang-mw', '1');  // diagnóstico temporal
  return marcado;
}

function wantsEnglish(request) {
  const headers = request.headers;
  if (BOTS.test(headers.get('user-agent') || '')) return false;
  if (/(^|;\s*)lang=/.test(headers.get('cookie') || '')) return false;
  return topLanguage(headers.get('accept-language')) !== 'es';
}

/** "fr-CH, fr;q=0.9, en;q=0.8" -> "fr". Spanish on anything we cannot read, since this is the default site. */
function topLanguage(header) {
  if (!header) return 'es';

  let best = null;
  for (const entry of header.split(',')) {
    const [tag, ...params] = entry.trim().split(';');
    if (!tag || tag === '*') continue;
    const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
    const weight = q ? Number.parseFloat(q.slice(2)) : 1;
    if (!Number.isFinite(weight) || weight <= 0) continue;
    if (!best || weight > best.weight) best = { lang: tag.toLowerCase().split('-')[0], weight };
  }

  return best ? best.lang : 'es';
}
