---
project: emolo-b2b
title: 'Émolo: Shopify B2B Wholesale Portal for Jewelry | Nicolás Mateos'
description: 'Wholesale portal on the Prestige theme: prices for company buyers only, a size-by-size order table kept in sync with the cart, and SKU search.'
h1: 'Émolo: a Shopify B2B wholesale portal for a jewelry brand'
summary: 'Émolo is a handmade jewelry brand from Murcia, Spain. Its wholesale portal was built in 2026 on the Prestige theme the store already used: only company buyers see prices and can buy, and they order every size of a piece from one table that stays in sync with the cart.'
published: '2026-10-20'
updated: '2026-10-20'
facts:
  sector: 'Handmade jewelry'
  country: 'Spain (Murcia)'
  theme: 'Prestige'
stack:
  - 'Shopify B2B (Companies and buyers)'
  - 'Liquid on the Prestige theme'
  - 'JavaScript custom elements'
  - 'Ajax Cart API (/cart.js and /cart/update.js)'
  - 'Metafields'
pending:
  - 'Fragmento de código de la llamada a /cart/update.js (reescrito, no el del cliente), si das el OK.'
  - '¿Es la misma tienda que la B2C de Émolo o una tienda aparte solo para mayoristas?'
---

## What did Émolo need?

Émolo wanted to sell wholesale from Shopify without replacing its Prestige theme. Émolo's B2B portal had two requirements. First, nobody without a company account could see prices, not even in the page source. Second, a buyer had to be able to order several sizes of the same piece in one go, from the product page, from collections or from search.

## How does Émolo's B2B portal work?

The portal runs on Shopify B2B company accounts and on a custom order table that shares its state with the cart across the whole store.

### Prices for company buyers only

Access is decided by a single Liquid predicate on `customer.b2b?`, which every price, stock badge and buy button reads. A guest or a customer without a company never receives a price in the HTML: the price is not hidden with CSS, it is never sent. Buyers can also hide their own prices on screen. That preference lives in localStorage and is applied in the `head`, before first paint, so the price never flashes.

### A variant-by-variant order table

Émolo's order table is rendered in Liquid and driven by a custom element, one row per variant with live stock. Its steppers are seeded once from `/cart.js` and kept in step through the theme's `cart:change` event, so a variant shows the same quantity on the product page, in every collection card and in search results.

### One request to /cart/update.js with absolute quantities

Submitting sends a single `/cart/update.js` call with absolute quantities. With that contract a first order, a top-up and a reduction are the same request, and if Shopify rejects a line the cart stays untouched instead of ending up half-updated.

### SKU search, views and per-variant galleries

Around the table: SKU search that marks the matching row, a grid and list view switch, per-variant galleries from a metafield and stock status on each cart line. A `pageshow` handler re-reads the cart when the browser restores the page from the bfcache, so quantities stay correct after going back.
