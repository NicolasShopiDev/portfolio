---
pair: 'quantity-rules'
term: 'Quantity rules'
aliases: ['minimum order quantity', 'increments', 'case pack', 'MOQ']
category: 'b2b'
seoTitle: 'Quantity Rules in Shopify B2B: Minimums and Increments'
description: 'Quantity rules set a minimum, maximum and increment per variant inside a B2B catalog. They are what forces full-case ordering without writing any code.'
keyword: 'shopify b2b quantity rules'
answer: 'Quantity rules are the minimum, maximum and increment a variant can be ordered in inside a B2B catalog. They are the native way to force full-case ordering or a minimum order, and they work on every plan that supports B2B.'
related: ['volume-pricing', 'b2b-catalog', 'shopify-functions']
updated: '2026-10-21'
verified: '2026-10-21'
---

Three numbers per variant: minimum, maximum, increment. That covers most of what gets described in a meeting as "they can't order loose units".

## Where they apply and where they do not

The rules live in the catalog, so the same product can have different minimums for the wholesaler and for the distributor. The theme receives them and should use them on the `input` itself: `min`, `max` and `step` on the quantity field. That is the difference between telling the buyer before they type and telling them once they have already tried to pay.

What they do not do: validate combinations across lines. "€300 minimum per order" or "tier A and tier B cannot be mixed in one order" are not quantity rules. That is a validation [Shopify Function](/en/glossary/shopify-functions/), and a custom-written Function needs Plus.

## The full-case case

The example I repeat most: a product that leaves the warehouse in boxes of 6. With an increment of 6 in the quantity rule, the field will not accept 7 and the problem disappears at the source.

If for any reason the rule cannot apply (an imported order, a line created from the admin), the fallback is a validation Function that blocks checkout and says exactly what to change. That Function is published with its tests in [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab).

Setup in the [catalogs documentation](https://help.shopify.com/en/manual/b2b/catalogs).
