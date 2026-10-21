---
pair: 'admin-graphql-api'
term: 'Admin GraphQL API'
aliases: ['Admin API', 'GraphQL Admin API']
category: 'api'
seoTitle: 'Shopify Admin GraphQL API: What It Is Used For'
description: 'The Admin GraphQL API reads and writes store data: products, orders, B2B companies and metafields. It is the door ERP integrations come through.'
keyword: 'shopify admin graphql api'
answer: 'The Admin GraphQL API is the interface an app or an external system uses to read and write a Shopify store’s data: products, variants, inventory, orders, customers, B2B companies and metafields. It is the route ERP integrations and automations come in through.'
related: ['draft-order', 'ajax-cart-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

This is the API that matters when a project stops being "a store" and becomes "a store connected to what the company already had". It almost always arrives the same way: inventory and prices live in the ERP, and somebody has to get them into Shopify without typing.

## What to plan before writing code

Three things, and none of them is GraphQL:

- **The cost of queries.** The API has a budget per query and per time window. A sync that walks 20,000 variants one at a time eats the budget; the same sync done in batches does not.
- **Who wins when both sides change.** If the ERP and Shopify can both modify inventory, you have to decide the direction and write it down. Almost every integration I have seen break had left that undecided.
- **What happens to what fails.** A rejected line cannot fail silently. You need retries and somewhere to look.

## Bulk operations

For importing or exporting a lot, the API has bulk operations: you start the query, wait, and collect a file with the result. It takes longer to write and it is the difference between a nightly sync that finishes and one that stops halfway.

## What it does not do

It is not for reading a shopper's cart in the storefront: that is the [Cart API](/en/glossary/ajax-cart-api/). And it cannot be called from inside a Shopify Function.

Documentation: [Admin GraphQL API](https://shopify.dev/docs/api/admin-graphql).
