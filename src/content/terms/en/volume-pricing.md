---
pair: 'volume-pricing'
term: 'Volume pricing'
aliases: ['quantity breaks', 'tiered pricing', 'price breaks']
category: 'b2b'
seoTitle: 'Volume Pricing in Shopify B2B: How It Works'
description: 'Volume pricing is a price break past a given quantity inside a B2B catalog. It works without Plus and solves many of the cases that look like a fourth catalog.'
keyword: 'shopify b2b volume pricing'
answer: 'Volume pricing is a set of price steps inside a B2B catalog: past X units of a variant, the unit price drops. It is configured per product within the catalog and is available on every plan that supports B2B, Shopify Plus included or not.'
related: ['b2b-catalog', 'quantity-rules', 'price-list']
updated: '2026-10-21'
verified: '2026-10-21'
---

This is the B2B feature that rescues the most projects and gets used the least. When somebody asks for a fourth catalog because "this customer buys much more", what they are describing is almost never a different price: it is a different quantity.

## A price break, not a discount

A volume break is not a discount applied at the end: it is the unit price of that variant from that quantity onwards. That has two practical consequences. The first is that the buyer sees the incentive while ordering, not while paying. The second is that the theme has to show it: if the price changes at 12 units and the product page does not say so, the buyer orders 10 and nobody wins.

## What the front-end has to show

On the portals I build, the break table sits next to the quantity stepper, and the active row is highlighted based on what is in the cart. Two details that matter:

- The break is calculated per **variant**, not per product. Twelve units spread across four sizes are not twelve of one size.
- If you use [quantity rules](/en/glossary/quantity-rules/) with increments, the breaks should land on valid multiples. A break that starts at 10 when the increment is 6 is a break nobody ever reaches.

## When it is not enough

When the difference between two customers really is price — a negotiated agreement, not a volume — a break will not solve it. That is when another catalog is needed or, if you already have three, [weighing up Plus](/en/compare/shopify-plus-or-advanced/).

The setup is in the [catalogs and pricing documentation](https://help.shopify.com/en/manual/b2b/catalogs).
