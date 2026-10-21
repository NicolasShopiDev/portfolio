---
pair: 'shopify-markets'
term: 'Shopify Markets'
aliases: ['Markets', 'international selling', 'multi-market']
category: 'plan'
seoTitle: 'Shopify Markets: Selling in Several Countries'
description: 'Shopify Markets groups countries with their currency, language, taxes and pricing. In B2B it is also how catalogs get assigned without Shopify Plus.'
keyword: 'shopify markets'
answer: 'Shopify Markets is how one store sells in several countries from a single admin: each market has its countries, its currency, its languages, its taxes and its price adjustments. In B2B it has an extra role, because without Shopify Plus catalogs are assigned through B2B markets.'
related: ['b2b-catalog', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

For a B2C store, Markets is what saves you from running four stores to sell in four countries. For a B2B store it is more than that: it is the piece your whole price structure depends on if you are not on Plus.

## The B2B overlap you have to draw first

Without Shopify Plus a [catalog](/en/glossary/b2b-catalog/) is not assigned to a company: it is assigned to a B2B market, and the companies in that market inherit it. Since you can only have three active catalogs, your price segmentation and your geographic segmentation have to fit in the same scheme.

What that looks like in a real meeting: if the tiers are "wholesale Spain", "wholesale Portugal" and "distributor", all three are spent and there is no room left for key accounts. Drawing it on a whiteboard before choosing a plan saves the conversation.

## What it changes in the front-end

- **The country and language picker** has to exist and must not reset the cart.
- **Rounded prices** per market change what the product page shows; if the theme caches prices in JavaScript, they have to be invalidated when the market changes.
- **International SEO** is decided here: each market with its domain or subfolder and its `hreflang`. A store with four markets and a single `hreflang` competes with itself.

Documentation: [Shopify Markets](https://help.shopify.com/en/manual/markets).
