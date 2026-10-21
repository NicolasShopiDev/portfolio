---
pair: 'shopify-functions'
term: 'Shopify Functions'
aliases: ['Functions', 'function extension']
category: 'functions'
seoTitle: 'Shopify Functions: What They Are and Their Limits'
description: 'Shopify Functions are your own code running inside Shopify’s back end for discounts, validations, shipping and payments. Custom ones require Plus.'
keyword: 'what are shopify functions'
answer: 'Shopify Functions are your own code executed inside Shopify’s back end at specific points of the cart and checkout: discounts, validations, line transformation, shipping and payment methods. They are written in JavaScript or Rust, compiled to WebAssembly, and a custom Function can only be installed on stores with Shopify Plus.'
related: ['shopify-scripts', 'input-query', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

Functions are Shopify's answer to "I need a business rule the platform does not ship". They replaced [Shopify Scripts](/en/glossary/shopify-scripts/) and differ in something important: they do not run in the browser or on a server of yours, they run inside Shopify, before the checkout is drawn.

## The budget, which is the part that surprises people

A Function is not an ordinary function. It has an execution budget — on the order of **11 million instructions** — and a **128 kB cap on its input**. That changes how you write one:

- The [input query](/en/glossary/input-query/) is half the work: a Function only sees what it asks for, and an order pad with 200 lines cannot afford stray fields.
- There are no network calls. You cannot query your ERP from inside a Function.
- Data the Function needs that is not native goes in [metafields](/en/glossary/metafields/), which is what does arrive in the input.

## The plan limit

This is the point that breaks the most quotes: **only stores on Shopify Plus can install custom apps containing Functions**. On Basic, Grow and Advanced you can use functions that ship inside a public App Store app, but not one written for your store. The practical difference: with a public app you adapt to its data model, with your own Function you set the model.

## A complete example

A validation Function that blocks checkout when a line is not a multiple of the warehouse case pack, with its input query and its tests, is published in [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab) and can be poked at live in the Checkout Lab on [the home page](/en/).

Official documentation: [Shopify Functions](https://shopify.dev/docs/api/functions).
