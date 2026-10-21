---
pair: 'cart-transform'
term: 'Cart Transform'
aliases: ['Cart Transform API', 'Shopify bundles', 'expand and merge']
category: 'functions'
seoTitle: 'Cart Transform in Shopify: Bundles and Cart Lines'
description: 'Cart Transform is the Function that changes cart lines: split one into several, merge several into one, or adjust price. It is how bundles are built.'
keyword: 'shopify cart transform'
answer: 'Cart Transform is the Shopify Functions API that modifies cart lines before checkout: it can expand one line into several, merge several into a single one, or update a line’s price and title. It is the technical basis for bundles and product kits.'
related: ['shopify-functions', 'volume-pricing', 'input-query']
updated: '2026-10-22'
---

This is the least known Function and it solves a very specific problem: selling something the buyer sees as **one** product and the warehouse needs as **several**, or the other way round.

## The three operations

- **Expand.** One line becomes several. The buyer adds a "starter pack" and the cart, the order and the warehouse see the three SKUs that make it up, each drawing down its own stock.
- **Merge.** Several lines display as one. The buyer sees "complete set" instead of four loose lines.
- **Update.** Change a line's price or title.

## Why it matters in B2B

The case I meet most is boxes. The catalog holds the unit, but the warehouse only moves boxes of six. There are two ways to solve it and it is worth choosing deliberately:

1. **[Quantity rules](/en/glossary/quantity-rules/)** with an increment of six. No code, works on any plan with B2B, and the buyer orders in sixes.
2. **Cart Transform** to sell the box as a product and expand it into six units for stock and the delivery note.

The first is almost always right: it is free and adds nothing to maintain. The second only wins when the warehouse genuinely needs to see the units separately.

## The plan requirement

Cart Transform is a [Shopify Function](/en/glossary/shopify-functions/), so writing one for your store requires Shopify Plus. And like every Function, it only sees what its [input query](/en/glossary/input-query/) hands it.

Documentation: [Cart Transform API](https://shopify.dev/docs/api/functions/latest/cart-transform).
