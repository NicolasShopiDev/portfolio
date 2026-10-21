---
pair: 'hydrogen'
term: 'Hydrogen'
aliases: ['Shopify Hydrogen', 'Oxygen', 'React on Shopify']
category: 'theme'
seoTitle: 'Hydrogen: Shopify’s Headless Framework, Explained'
description: 'Hydrogen is Shopify’s React framework for building headless storefronts, with Oxygen as its hosting. When it beats a normal theme, and when it does not.'
keyword: 'shopify hydrogen'
answer: 'Hydrogen is Shopify’s React-based framework for building headless storefronts that read their data from the Storefront API. Shopify pairs it with Oxygen, its own hosting, so the path from development to production is covered by the platform instead of assembled by you.'
related: ['headless-commerce', 'storefront-api', 'liquid']
updated: '2026-10-22'
---

If you have already decided to go [headless](/en/glossary/headless-commerce/), Hydrogen is the road with the fewest loose parts: it ships the [Storefront API](/en/glossary/storefront-api/) queries, cart handling and product components already solved, and it deploys to Oxygen without you building infrastructure.

The real question is not "Hydrogen or another framework?", it is "headless or theme?". If the answer is theme, Hydrogen never enters the conversation.

## When I would recommend it

When the team that will maintain the store **already works in React** and the storefront has interface logic a theme would make awkward. In that case, what would be weeks of fighting the editor in Liquid becomes ordinary code for them.

## When I would not

When the reason is speed. A well-built theme competes easily, and the weight of a slow store is almost never in server rendering: it is in what has been piled on top of it.

And when the client builds their own pages. That is the cost that shows up later: with Hydrogen, every new landing page goes back through development, while with [sections and blocks](/en/glossary/sections-and-blocks/) the marketing team builds it in an afternoon.

## In B2B, a warning

Hydrogen does not hand you the company context for free. The catalog, the buyer's price and the location have to be requested and propagated by you, when a theme delivers them resolved. That is work the demo does not show.

Documentation: [Hydrogen](https://shopify.dev/docs/storefronts/headless/hydrogen).
