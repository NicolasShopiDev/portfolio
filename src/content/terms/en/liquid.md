---
pair: 'liquid'
term: 'Liquid'
aliases: ['Liquid language', 'Liquid templates', 'Shopify Liquid']
category: 'theme'
seoTitle: 'Liquid in Shopify: What It Can and Cannot Do'
description: 'Liquid is the template language of Shopify themes. It runs on the server before the HTML is sent, and that decides what a theme can actually do.'
keyword: 'what is shopify liquid'
answer: 'Liquid is the template language Shopify themes are built in. It runs on Shopify’s server before the HTML is sent to the browser, so it can read products, collections, the customer or the cart, but it cannot react to anything that happens on the page afterwards.'
related: ['sections-and-blocks', 'shopify-b2b', 'ajax-cart-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

Understanding where Liquid runs answers 90% of the questions about what a theme can do. Liquid runs **once**, on the server. By the time the HTML reaches the browser, Liquid has finished: from there on, everything is JavaScript.

## What that means in practice

- A price that depends on the customer can be decided in Liquid, because the session already exists when the page renders. That is why `customer.b2b?` is the right way to make sure a wholesale price **never reaches the HTML** of a visitor without a session.
- A quantity change in the cart cannot be handled by Liquid: that is the [Cart API](/en/glossary/ajax-cart-api/). What you can do is ask Shopify to re-render a section and hand back its HTML.
- A collection filter with 20 combinations is not built with Liquid loops: it is built with the store's native filters.

## The cost of a loop

Liquid has execution limits per page, and slow themes almost always have the same cause: nested loops over large collections. Walking every variant of every product in a collection to calculate something is the fastest way to make a page take seconds.

The alternative is usually a [metafield](/en/glossary/metafields/) holding the value already calculated. Moving the calculation from render time to save time is the optimisation I have applied most often.

Reference: [Liquid](https://shopify.dev/docs/api/liquid).
