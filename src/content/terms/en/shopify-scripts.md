---
pair: 'shopify-scripts'
term: 'Shopify Scripts'
aliases: ['Scripts', 'Ruby scripts', 'Script Editor']
category: 'functions'
seoTitle: 'Shopify Scripts: What They Were and Why They Are Gone'
description: 'Shopify Scripts was the Ruby system for cart and shipping rules on Plus stores. It stopped executing in June 2026 and Functions replace it.'
keyword: 'shopify scripts'
answer: 'Shopify Scripts was the system that came before Functions for applying your own discount, shipping and payment rules on Shopify Plus stores, written in Ruby from the Script Editor. It stopped executing in June 2026, and what replaces it is Shopify Functions.'
related: ['shopify-functions', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

If a store still has Scripts in its internal documentation, its wiki or its maintenance contract, what it has is a business rule that is no longer being applied.

## What changes when you migrate

It is not a translation from Ruby to JavaScript. The model differs in three places that force a redesign rather than a rewrite:

- **Scripts ran at checkout and saw the whole cart.** A [Function](/en/glossary/shopify-functions/) declares in its [input query](/en/glossary/input-query/) which fields it needs, and receives only those.
- **A Script had no visible instruction budget.** A Function does, and that rules out walking the entire catalog inside the code.
- **Functions deploy as an app**, with versions and configuration, not as text saved in the admin. That is better to maintain and more work the first time.

## What you actually find

The three most common Scripts were: a discount by customer tag, hiding shipping methods based on the cart, and reordering payment methods. All three have a Function equivalent today, and in B2B two of them are solved without code at all: a tier discount is a [catalog](/en/glossary/b2b-catalog/) and a case-pack minimum is [quantity rules](/en/glossary/quantity-rules/).

Before quoting a migration it is worth checking which of the old Scripts are no longer needed. In the projects I have seen, half of them.

Documentation for what replaces them: [Shopify Functions](https://shopify.dev/docs/api/functions).
