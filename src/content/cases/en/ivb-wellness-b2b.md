---
project: ivb-wellness-b2b
title: 'IVB Wellness: Shopify B2B Portal for Pharmacies | Nicolás Mateos'
description: 'B2B ordering portal for a supplements lab: volume tiers configured from a metafield, a multi-variant order table and purchase locked to company accounts.'
h1: 'IVB Wellness Lab: a Shopify B2B portal for pharmacies with volume-tier pricing'
summary: "IVB Wellness Lab is a Spanish supplements lab stocked in more than 3,000 pharmacies. Its B2B ordering portal was built in 2026 on the Enterprise theme from the brand's Figma designs: pharmacies buy on volume tiers, see their tier across the store, and the client changes the thresholds from the admin."
published: '2026-10-20'
updated: '2026-10-20'
facts:
  sector: 'Supplements and health'
  country: 'Spain'
  theme: 'Enterprise, from Figma designs'
stack:
  - 'Shopify B2B (company accounts)'
  - 'Liquid on the Enterprise theme'
  - 'Shop, product and variant metafields'
  - 'Metaobjects (badges and colour schemes)'
  - 'JavaScript'
pending:
  - 'Confirmar "más de 3000 farmacias" y, si existe, cuántas compran por el portal o qué parte de los pedidos entra por ahí.'
  - 'Capturas del portal con sesión de empresa (las de ahora son de la tienda B2C).'
---

## What did IVB Wellness Lab need?

Pharmacies buy from IVB Wellness Lab on volume tiers: the more they order, the better the price. IVB's B2B portal had to show that tier throughout the purchase, not only in the cart, and the client needed to change each tier's thresholds without asking for a new theme release. It also wanted to manage product badges and colours from the admin.

## How does IVB's B2B portal work?

Tier logic, the order table and merchandising all come from data the client edits in the Shopify admin, not from values written into the theme code.

### Volume tiers worked out in Liquid from a metafield

Tier logic runs through the header, the product page and the cart. The buyer's current tier sits in the nav, and the next tier is worked out in Liquid from a configuration stored in a shop-level metafield. The client changes the tier thresholds without a theme release.

### A multi-variant order table with sibling products

IVB's product page carries a multi-variant order table. Its rows can be variants or sibling products linked through a metafield, with per-variant galleries and a totals footer. When a row changes variant, the table keeps the dependent sections of the page in sync.

### Badges and colour schemes as metaobjects

Product badges and colour schemes are metaobjects that the theme turns into markup and CSS classes, so merchandising stays in the admin without code changes.

### Company-only purchase and repeat orders

Purchase is locked to company accounts. Collections open in a list view built for reordering, discount badges round down the same way everywhere, the retail price comes from a metafield and the cart offers promotional material through a pop-up when the buyer goes to pay.
