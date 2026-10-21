---
pair: 'metafields'
term: 'Metafields'
aliases: ['metafield', 'custom fields', 'custom data']
category: 'theme'
seoTitle: 'Metafields in Shopify: What They Are and When to Use Them'
description: 'Metafields store your own data on products, variants, customers or orders. They are the right way for the theme and for Functions to read custom information.'
keyword: 'shopify metafields'
answer: 'Metafields are custom fields added to a Shopify object — product, variant, customer, order, company — to store data the platform does not ship with. They are typed and validated, and they are readable from the theme in Liquid, from the API, and from inside a Shopify Function.'
related: ['metaobjects', 'input-query', 'admin-graphql-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

This is the first tool to reach for when a piece of data appears that Shopify does not have: a variant's case pack, a product's technical sheet, a customer code from the ERP. Before installing an app or inventing a convention inside tags, the answer is almost always a metafield.

## Typed, and that matters

A metafield is not free text: it has a type (integer, decimal, date, product reference, file, list) and Shopify validates what goes in. That avoids the classic of reading `"6 pcs"` where the code expected `6`.

And the type decides how it reads in the theme. A product reference arrives as the product object, not as an ID you have to resolve by hand.

## Variant versus product

The decision people get wrong most often. If the data changes by size or colour, it belongs on the **variant**. The case pack is a clear example: not every size ships in boxes of 6. A product-level metafield forces an approximation, and the approximation shows up in the warehouse.

## Why they matter to Functions

A [Shopify Function](/en/glossary/shopify-functions/) cannot call anything: all it sees is what its [input query](/en/glossary/input-query/) hands it. So any business rule that depends on your own data needs that data in a metafield, with its alias in the query. If the data lives in an app or in an external system, the Function cannot use it.

Documentation: [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields).
