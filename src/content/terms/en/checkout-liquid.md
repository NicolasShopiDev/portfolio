---
pair: 'checkout-liquid'
term: 'checkout.liquid'
aliases: ['checkout liquid', 'checkout template', 'legacy checkout']
category: 'checkout'
seoTitle: 'checkout.liquid: What It Was and Why It Is Gone'
description: 'checkout.liquid was the template that let Plus stores edit the checkout. Checkout Extensibility replaces it, and half of what lived there is no longer needed.'
keyword: 'shopify checkout.liquid'
answer: 'checkout.liquid was the template that let Shopify Plus stores edit the checkout like any other page of the theme. Shopify has retired it in favour of Checkout Extensibility, where the checkout is no longer edited: it is extended with extensions and Functions at allowed points.'
related: ['checkout-extensibility', 'shopify-scripts']
updated: '2026-10-22'
---

If somebody on your team still talks about "touching checkout.liquid", what they are describing is a model that no longer exists. And migrating is not copying that code somewhere else.

## Why Shopify closed it

An editable template meant every Plus store had a different checkout, and that Shopify could not improve its own without risking thousands of customisations. The new model reverses the deal: you lose freedom, and in exchange a Shopify update stops being a risk to your store.

## What to do with what was inside

The order that costs least:

1. **Inventory it.** What it actually did, not what the internal documentation says it did.
2. **Cull it.** This is the surprising part: in the projects I have seen, close to half the customisations were workarounds the platform now covers natively. Shipping notices, extra fields, reordering payment methods.
3. **Rebuild what survives.** The visual side from the editor. Content and fields with extensions. Behaviour with [Functions](/en/glossary/shopify-functions/).

## What does not come back

Reordering the checkout steps, laying it out freely, or injecting arbitrary JavaScript. If the migration was quoted assuming all of that can be replicated, the quote is wrong — and better to know before starting than halfway through.

The same thing happened to [Shopify Scripts](/en/glossary/shopify-scripts/): it was closed, and whatever was still needed got rewritten as a Function.

Shopify documents the upgrade path in the [checkout documentation](https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade).
