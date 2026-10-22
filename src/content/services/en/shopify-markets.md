---
pair: 'markets'
label: 'International'
h1: 'Shopify Markets and international selling'
pitch: 'Sell in several countries, currencies and languages from one store'
topic: 'other'
glance:
  problem: 'Selling in several countries without duplicate stores, and without your versions competing with each other on Google.'
  forWho: 'Stores that sell, or will sell, in other countries, currencies or languages, B2B included.'
  notFor: 'If you sell in one country and one language: Markets gives you nothing.'
  outcome: 'Each market with its own currency, language and prices, a picker that keeps the cart, and hreflang Google understands.'
  effort: 'Setup is the easy part. What takes time is crossing markets with prices, especially B2B without Plus, with three catalogs.'
lead: 'Selling in several countries from one store: markets with their currency, language and taxes, a picker that does not break the cart, and hreflang set up so your versions stop competing with each other.'
serviceName: 'Shopify Markets setup and development'
serviceType: 'International ecommerce development'
seoTitle: 'Shopify Markets & International Selling | Nicolás Mateos'
description: 'Shopify Markets: several countries, currencies and languages in one store, with a country picker, per-market pricing and correct hreflang. Plus the B2B overlap.'
keyword: 'shopify markets international'
cases: []
faq:
  - q: 'One store per country or Markets?'
    a: 'Markets, unless each country has a different catalog, tax setup and team. Several stores mean several themes to maintain and several inventories to reconcile; most projects that start that way end up consolidating.'
  - q: 'How does Markets affect a B2B portal?'
    a: 'Far more than it looks. Without Shopify Plus, B2B catalogs are assigned through B2B markets, so your price segmentation has to fit inside your geographic segmentation, with a cap of three active catalogs.'
  - q: 'Subfolder or a domain per country?'
    a: 'Subfolder in almost every case: it concentrates domain authority and it is less infrastructure. A country domain earns its place when the brand needs to be perceived as local and that is worth more than the accumulated authority.'
related: ['custom-themes', 'erp-integrations']
terms: ['shopify-markets', 'b2b-catalog']
updated: '2026-10-21'
verified: '2026-10-21'
---

## What gets decided before anything is built

[Shopify Markets](/en/glossary/shopify-markets/) groups countries with their currency, languages, taxes and price adjustments. The configuration is the easy part. What really has to be drawn first is the overlap with pricing, and in B2B that is critical: without Plus, a [catalog](/en/glossary/b2b-catalog/) is assigned to a B2B market, not to a company, and you only get three active ones.

The example that comes up in almost every meeting: if the tiers are "wholesale Spain", "wholesale Portugal" and "distributor", all three are spent and there is no room for key accounts. Half an hour at a whiteboard saves the redesign.

## The front-end work

- **The country and language picker** has to be visible and must not reset the cart when it changes.
- **Per-market rounded prices** change what the product page shows. If the theme caches prices in JavaScript, they have to be invalidated on a market change, or the buyer sees one price and pays another.
- **Translated strings** that live in the theme rather than the content: shipping notices, form labels, error messages.

## International SEO, where the traffic gets lost

Each version needs its `hreflang`, pointing at its equivalents and at itself, with an `x-default`. A store with four markets and a single `hreflang` competes with itself, and Google picks for you — usually badly.

The second common mistake: redirecting by IP. If a German buyer cannot see the Spanish version, and Google's crawler is not allowed to see every version either, only one gets indexed. You detect the country and **offer** the switch, you do not force it.
