---
pair: 'shopify-b2b'
term: 'Shopify B2B'
aliases: ['native B2B', 'Shopify wholesale', 'B2B on Shopify']
category: 'b2b'
seoTitle: 'What Shopify B2B Is and Which Plans Include It'
description: 'Shopify B2B is wholesale selling built into the store: companies, locations and catalogs with their own prices. It ships on Basic, Grow, Advanced and Plus.'
keyword: 'what is shopify b2b'
answer: 'Shopify B2B is the set of wholesale features built into the store itself: the customer stops being a person and becomes a company with its locations, and prices come from catalogs assigned to those companies. It is not an app or a separate theme, it is a data model inside the store you already have.'
related: ['company', 'b2b-catalog', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

What separates native B2B from the workarounds people used before it (customer tags, automatic discounts, a second store running in parallel) is that the wholesale price **arrives at the theme already resolved**. The front-end calculates nothing: it asks for the variant price and gets the one that belongs to the company of whoever is logged in.

## Which plans have it

Shopify's documentation lists B2B on **Basic, Grow, Advanced and Shopify Plus**, and excludes it only from Starter and Retail. The difference between plans is not whether you can sell wholesale, it is how many active [catalogs](/en/glossary/b2b-catalog/) you can have: three in total on the plans without Plus, unlimited on Plus.

## What the theme has to do

One thing, and it is the one most often done wrong: decide who sees prices. The condition is `customer.b2b?`, and the rule is that if the visitor is not B2B the price **must not reach the HTML** — hiding it with CSS is not enough.

```liquid
{% if customer.b2b? %}
  <span class="price">{{ product.selected_or_first_available_variant.price | money }}</span>
{% else %}
  <a href="/account/login">Log in to see prices</a>
{% endif %}
```

The rest of the work in a wholesale portal depends on neither the plan nor B2B: it is order flow. A size table with live stock, SKU search, reordering last month's order. That is front-end work, and it is where the buyer notices the difference.

The model is documented under [B2B on Shopify](https://help.shopify.com/en/manual/b2b).
