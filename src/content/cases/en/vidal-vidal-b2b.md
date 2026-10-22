---
project: vidal-vidal-b2b
title: 'Vidal & Vidal: Shopify Plus Wholesale Store | Nicolás Mateos'
description: 'B2B store on Shopify Plus for a Menorcan jewelry house: cleaning up a theme exported from the consumer store (29 templates, −75%) and a quick-order table on Sleek.'
h1: 'Vidal & Vidal: from an exported consumer theme to a Shopify Plus wholesale store'
summary: "Vidal & Vidal is a jewelry house from Menorca, Spain. Its Shopify Plus wholesale store started as an export of the consumer store's Sleek theme with no B2B logic in it: first 29 orphaned templates were removed, 75% of the templates folder, and then Émolo's order table was ported to the theme."
glance:
  problem: 'Turning an exported B2C theme, with no B2B logic and 29 templates that broke local development, into a wholesale store.'
  forWho: 'Your B2B store starts as a copy of the consumer store''s theme and you want to keep what already works.'
  notFor: 'You want a wholesale portal with its own design, different from your consumer store.'
  outcome: 'A theme with 75% fewer templates and Émolo''s order table reused instead of written again.'
  effort: '4 weeks of front-end, just me, on Shopify Plus and through an agency.'
published: '2026-10-20'
updated: '2026-10-20'
facts:
  sector: 'Jewelry'
  country: 'Spain (Menorca)'
  plan: 'Shopify Plus'
  theme: 'Sleek, exported from the consumer store'
  engagement: 'Through an agency'
  duration: '4 weeks'
  team: 'Me alone, on front-end'
stack:
  - 'Shopify Plus and Shopify B2B'
  - 'Liquid on the Sleek theme'
  - "JavaScript: Sleek's pub/sub and section bundling"
  - 'Ajax Cart API (/cart/update.js)'
  - 'Money metafields and metaobjects'
  - 'Shopify CLI (shopify theme dev)'
results:
  - '29 orphaned templates removed: the B2B theme templates folder shrank by 75%.'
  - 'shopify theme dev ran again on the B2B theme once the seven templates pointing at consumer-store videos were gone.'
resultsDone: true
lessons: false
testimonial: false
pending: []
---

## Where did Vidal & Vidal's wholesale store start?

Vidal & Vidal's B2B theme started as a straight export of the consumer store's Sleek theme, with no wholesale logic in it. The export brought 29 orphaned templates the wholesale store did not use. Seven of them referenced videos that only exist on the consumer store, and that broke `shopify theme dev`: nobody could work on the theme locally until it was cleaned up.

## How did the consumer theme become a wholesale store?

The theme was cleaned up first, and then it got the wholesale ordering logic, reusing the order table built for Émolo.

### Cleaning up the exported theme

Removing the 29 orphaned templates cut the B2B theme's `templates` folder by 75% and gave `shopify theme dev` a theme that starts without errors. That step is what made local work on the rest of the project possible.

### Émolo's order table, ported to Sleek

Vidal & Vidal's order table is Émolo's ported to a different theme: same logic, with an adapter layer that swaps Prestige's cart events for Sleek's pub/sub and section bundling. It also keeps the same network contract as Sleek's native quick order list, so the cart drawer and header update with no extra code.

### Wholesale price next to the retail price

Each row shows stock, the wholesale price and, next to it, the retail price from a variant-level money metafield. Each row's colour swatch is resolved from a metaobject.

### Only changed rows are sent

Only the rows that changed are sent to `/cart/update.js`, as absolute quantities, in a request flagged as XHR so Shopify validates inventory. The running total is formatted from a Liquid money sample, so it matches the session currency in every market.

### Checkout closed to non-wholesale customers

Purchase is closed to anyone who is not a Vidal & Vidal wholesale customer.
