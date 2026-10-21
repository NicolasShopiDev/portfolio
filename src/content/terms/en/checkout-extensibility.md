---
pair: 'checkout-extensibility'
term: 'Checkout Extensibility'
aliases: ['checkout extensions', 'UI extensions', 'checkout customisation']
category: 'checkout'
seoTitle: 'Checkout Extensibility in Shopify: What You Can Change'
description: 'Checkout Extensibility is the current model for customising Shopify checkout with extensions and Functions, instead of editing checkout.liquid.'
keyword: 'shopify checkout extensibility'
answer: 'Checkout Extensibility is how Shopify checkout is customised today: UI extensions placed at allowed points, Functions that change discounts, shipping or payments, and configuration in the editor. It replaces editing checkout.liquid, which is no longer an option.'
related: ['shopify-plus', 'shopify-functions']
updated: '2026-10-21'
verified: '2026-10-21'
---

The shift in thinking is this: checkout used to be a template you edited, and now it is an application you plug pieces into at specific places. You lose freedom and you gain the fact that a Shopify update does not break the store.

## The three pieces

- **UI extensions**, which add content at allowed points of the checkout and the thank-you page: a notice, a field, a delivery information block.
- **[Functions](/en/glossary/shopify-functions/)**, which change behaviour: discounts, validations that block payment, the order and availability of shipping and payment methods.
- **The editor**, for the visual side: logo, colours, fonts and block order, with no code.

## What you can and cannot do

You can: warn about a minimum, show a B2B company's payment terms, ask for a purchase order number, hide a shipping method, block checkout with a specific message.

You cannot: freely reorder checkout steps, inject arbitrary JavaScript into the page, or lay the checkout out like a normal page. If a quote assumes any of that, the quote is wrong.

## The plan limit

The visual side and public apps work on plans without Plus. An extension or a Function **written specifically for the store** needs [Shopify Plus](/en/glossary/shopify-plus/), because it ships inside a custom app.

Documentation: [Checkout Extensibility](https://shopify.dev/docs/apps/build/checkout).
