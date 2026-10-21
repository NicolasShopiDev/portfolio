---
pair: 'headless-commerce'
term: 'Headless commerce'
aliases: ['headless', 'decoupled storefront']
category: 'api'
seoTitle: 'Headless Commerce on Shopify: What You Gain and Lose'
description: 'Headless means building the storefront yourself and asking Shopify only for data. Total front-end control, minus the theme editor and part of the app ecosystem.'
keyword: 'shopify headless'
answer: 'Headless means building the storefront yourself and asking Shopify only for the data, through the Storefront API, instead of letting Shopify render pages from a theme. You gain complete control of the front-end and you lose the theme editor, part of the app ecosystem, and maintenance that used to be somebody else’s.'
related: ['hydrogen', 'storefront-api', 'liquid']
updated: '2026-10-22'
---

Of all the decisions people bring me, this is the one with the worst ratio between what it promises and what it costs. Not because it is wrong, but because it is almost always asked for the wrong reason.

## The wrong reason: "we want it to be fast"

A well-built theme on Shopify is fast. When a store is slow, the cause is almost never [Liquid](/en/glossary/liquid/): it is app scripts nobody uses, unsized images, and a cart rebuilt by hand on every change. Going headless with those habits produces a slow headless store, and now the server is yours too.

## The good reasons

- **The storefront is not a store.** A large content site, an application, an unusual point of sale, where buying is one part of it.
- **Several brands or channels** sharing one front-end.
- **A front-end that already exists** and works, which now needs to sell.

## What you give up, best written down before starting

The theme editor: your client stops building pages alone and goes back to depending on development. Apps that install as theme blocks stop being useful. Checkout is still Shopify's, so the freedom is not total. And hosting, deployment and updates become yours.

In B2B there is an extra toll: the company context, the catalog and the buyer's price have to be carried by hand over the [Storefront API](/en/glossary/storefront-api/), when a theme hands them to you resolved.

If after all that you are still a yes, [Hydrogen](/en/glossary/hydrogen/) is the short road.
