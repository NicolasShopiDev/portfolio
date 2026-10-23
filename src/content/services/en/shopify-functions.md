---
pair: 'functions-development'
label: 'Shopify Functions'
h1: 'Shopify Functions development'
lead: 'I write discount, cart validation, line transformation, shipping and payment Functions in JavaScript or Rust, with a tight input query and tests. If your business rule does not fit an App Store app, it fits here.'
serviceName: 'Shopify Functions development'
serviceType: 'Ecommerce software development'
seoTitle: 'Shopify Functions Development | Nicolás Mateos'
description: 'Custom Shopify Functions: discounts, cart validations, line transformation, shipping and payments. In JavaScript or Rust, with tests and readable code.'
keyword: 'shopify functions developer'
cases: []
faq:
  - q: 'Do I need Shopify Plus for a custom Function?'
    a: 'Yes. Only stores on Shopify Plus can install custom apps containing Shopify Functions. On Basic, Grow and Advanced you can use functions that ship inside a public App Store app, but not one written for your store.'
  - q: 'JavaScript or Rust?'
    a: 'JavaScript for most cases: it reads, it tests and anybody can maintain it. Rust when the function walks very large carts and the instruction budget gets tight. I decide with the case in front of me, not by default.'
  - q: 'Can a Function query my ERP?'
    a: 'No. A Function makes no network calls: it only sees the data its input query asks for. If the rule depends on external data, that data has to be in a metafield first, and that is integration work.'
  - q: 'What exactly do you deliver?'
    a: 'The custom app with the Function, its input query, its unit tests, the admin configuration and a short document saying what it does, what data it needs and how to change it. The code is yours and it is reviewable.'
related: ['scripts-to-functions', 'checkout-development']
terms: ['shopify-functions', 'input-query', 'shopify-plus']
updated: '2026-10-23'
verified: '2026-10-23'
---

## When a Function is the answer

When the rule is yours. The three cases that reach me most:

- **Validations that block checkout.** Full cases, a minimum per company, not mixing price tiers, a product that requires another. The platform ships per-variant minimums and, since April 2026, a single order value minimum in Checkout Blocks; nothing that changes with the company or with what is in the cart.
- **Discounts no app calculates the same way.** Tiered by product family, by company location, mutually exclusive combinations.
- **Conditional shipping and payments.** Hiding cash on delivery above a value, reordering methods by weight, hiding a carrier for one zone.

If what you need is one of the standard discounts, an App Store app is cheaper and somebody else maintains it. I will tell you if that is the case.

## How I write them

What separates a Function that holds up from one that fails on the first large order is not the logic: it is the input.

A Function has an execution budget on the order of 11 million instructions and a 128 kB cap on its input. On a ten-line cart that is invisible. On a 200-line wholesale order pad, every extra field you ask for is multiplied by 200. So the input query asks for exactly the fields the code reads, with aliases so metafields arrive under a readable name.

The second detail, the one that costs two days of support when forgotten: `buyerJourney`. A validation that blocks at every step stops the buyer from typing 7 on the way to 12. You block at checkout, not while the cart is being edited.

## What you can see before hiring me

A complete validation Function, with its input query and its tests, is published in [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab), and on the [home page](/en/) there is a Checkout Lab where you can change its configuration and watch what stops working. It is the same file that ships to a store.

## How we work

First you describe the rule in words, with a real case and an edge case. If the rule can be solved without code (a [catalog](/en/glossary/b2b-catalog/), some [quantity rules](/en/glossary/quantity-rules/)), I say so and you save the development. If not, I write the Function with its tests, we deploy it to a development store and we try it against your ugliest cart before touching production.
