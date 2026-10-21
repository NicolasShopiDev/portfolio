---
pair: 'storefront-api'
term: 'Storefront API'
aliases: ['Storefront GraphQL API', 'buyer-side API']
category: 'api'
seoTitle: 'Shopify Storefront API: What It Is Actually For'
description: 'The Storefront API gives public read access to the catalog and the cart. It is the foundation of a headless store, and it also works inside a normal theme.'
keyword: 'shopify storefront api'
answer: 'The Storefront API is the GraphQL interface meant for the buyer side: it reads products, collections and content, and creates and updates carts. It is designed to be used from the browser or an app with a public token, and it is what a headless store is built on.'
related: ['admin-graphql-api', 'headless-commerce', 'hydrogen']
updated: '2026-10-22'
---

The usual confusion is thinking it is "the other API" and that it does not matter which one you use. It does: the [Admin API](/en/glossary/admin-graphql-api/) is private and manages the store, the Storefront one is public and is for buying.

## Public means public

The Storefront API token travels to the browser, so anybody can read it and use it. That is normal and intended, but it has a consequence worth understanding: **whatever you expose through it is visible to everyone**.

On a B2C store that rarely matters, because the catalog is public anyway. On a wholesale portal it matters a great deal: if you build a component with the Storefront API that returns B2B catalog prices, you are publishing your price list. That is why on the portals I build the wholesale price is decided in [Liquid](/en/glossary/liquid/), on the server, and never requested from the browser.

## You do not have to go headless to use it

It is associated with [headless](/en/glossary/headless-commerce/) and it works perfectly well inside a normal theme, for one specific piece: a fast search, a complex product picker, a configurator. It is a decision per component, not per store.

Documentation: [Storefront API](https://shopify.dev/docs/api/storefront).
