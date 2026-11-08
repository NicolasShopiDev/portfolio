---
pair: envio-no-disponible-shopify-b2b
title: 'Shipping not available in Shopify B2B: stop guessing at addresses'
seoTitle: 'Shipping Not Available in Shopify B2B: What to Check'
description: 'A wholesale buyer reaches checkout but cannot choose shipping. Compare market, basket and conditions with a small repeatable test before replacing apps or rates.'
keyword: shipping not available shopify b2b
date: '2026-11-08'
tags: ['Shopify B2B', 'Shipping', 'Checkout']
related: ['direccion-envio-puntual-shopify-b2b', 'recogida-tienda-shopify-b2b']
faq:
  - q: 'Does this message mean the address is wrong?'
    a: 'Not necessarily. It is the outcome buyers see, rather than a sufficient explanation. Retain the test address and compare basket, business context and shipping configuration.'
  - q: 'Does a successful small order validate wholesale shipping?'
    a: 'No. Test representative quantities and combinations too. The small case provides a baseline for identifying which change introduces the failure.'
  - q: 'Should I add free shipping to let the buyer finish?'
    a: 'Not as an unexplained workaround. Establish the intended rate and the cost you are accepting. An unlocked checkout does not demonstrate the order can be delivered under those terms.'
cta:
  heading: 'Can wholesale buyers shop but not select shipping?'
  text: 'Send the journey, an example basket and an anonymised destination. We can assess shipping diagnosis and the delivery rules your B2B portal needs.'
  label: 'Tell me which order cannot ship'
---

When wholesale buyers see “shipping not available” in Shopify, do not start changing addresses until the warning disappears. Reproduce the basket, destination and company context, then establish which shipping option should apply.

The buyer wants to order. The basket is full. Checkout refuses to cooperate.

A good time to investigate... a bad time to change five settings at once.

## The message is not the diagnosis

Record the full message and where it appears. A missing rate, rejected form detail and an option disappearing after a change are different observations.

Shopify’s [rate troubleshooting guide](https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates/troubleshooting) connects availability to checkout conditions and product, market and shipping configuration. It also describes a gradual transition to shipping options by market, so administrative layouts can differ.

Identify your store’s setup before following a tutorial. Copying clicks from a different panel may not help locate the problem.

## Keep a case you can repeat

I propose a simple record: product and variant, quantities, selected company location, test destination, expected option and actual outcome. Add the time and whether you used a test account or reproduced a customer report.

Sharing a personal address is unnecessary when seeking help. Prepare an anonymised case preserving the relevant conditions and explain why that destination should be covered.

A consumer test and a company test are not equivalent. Neither are one unit and twenty cases.

## Start small and introduce one difference at a time

Hypothetical example: a company can order one case but not twenty. Keep account and destination fixed and change quantity only. Then add a second product.

This does not prove weight caused the issue. It identifies a reproducible difference. Changing products, country and company together merely creates a different purchase.

I would use this sequence:

| Proposed test | What it compares |
| --- | --- |
| One reference, small quantity | Minimal starting case |
| Same reference, typical quantity | Order scale |
| Add another reference | Basket composition |
| Same order, another authorised destination | Coverage |
| Same basket and destination with recorded B2B context | Reproducibility of the business case |

This is a diagnostic matrix, not a store test already performed. Record actual outcomes before drawing conclusions.

## Review the rule meant to accept the order

For a profile-based setup, establish the products’ profile, origin and zone. Official guidance also calls for checking manual-rate boundaries and inputs required for carrier-calculated rates. A rate existing in admin does not establish coverage for every basket.

The [B2B shipping guide](https://help.shopify.com/en/manual/b2b/checkout-and-orders/shipping-methods) says B2B markets need shipping zones configured in the relevant profiles. That is a concrete check, not a diagnosis of your store.

Write the expected rule plainly: “This destination and basket should offer this service.” Compare it with actual data. If nobody can explain the intended outcome, a commercial decision is missing before configuration changes begin.

## An installed app does not establish a returned rate

When an app is involved, record its name and request the specific case log if the tool provides one. Separate a received request, a response and the option buyers ultimately see.

Do not blame an app merely because it is installed, or declare success because a different order worked. Evidence needs to relate to the basket under investigation.

And for fuck’s sake, do not add a zero-price rate just to clear the warning. It can unlock a purchase the warehouse cannot fulfil at that cost. A commercial exception needs clear terms and an owner.

## Separate shipping, destination and pickup

If the problem begins with a different address, consult the [one-time B2B destination guide](/en/blog/one-time-shipping-address-shopify-b2b/). Missing warehouse collection is covered separately in the [pickup diagnostic guide](/en/blog/pickup-in-store-shopify-b2b/).

Appearing near the same checkout step does not make them the same feature. Define the promised delivery service before investigating how to display it.

## What you can prepare today

Choose one successful order and one failing case. Compare relevant details side by side and identify the first difference. If everything appears equal, retain both outcomes and exact journeys; that comparison is evidence too.

This supports assessment of a [Shopify B2B portal](/en/shopify-b2b-developer/) reflecting your delivery rules. The goal is an order you can fulfil, rather than simply removing a warning.

Documentation checked in November 2026. Scenarios and protocol are proposals; no client-store tests, faults or results are claimed.
