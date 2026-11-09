---
pair: shopify-agotado-con-stock
title: 'Shopify says sold out, but you have stock: where is that stock?'
seoTitle: 'Shopify Says Sold Out With Stock: What to Check'
description: 'Before adding units or changing the button, compare the exact variant, inventory state and location. Investigate why the customer cannot buy what you have.'
keyword: shopify sold out with stock
date: '2026-11-09'
tags: ['Shopify', 'Inventory', 'Catalog']
related: ['errores-sincronizacion-shopify-erp', 'envio-no-disponible-shopify-b2b']
faq:
  - q: 'Does inventory in admin establish that buyers can purchase it?'
    a: 'An isolated number is insufficient. Identify the variant, quantity state and location, then compare buying context and the relevant configuration.'
  - q: 'Should I continue selling out of stock to remove the warning?'
    a: 'Do not use that policy to conceal an unexplained cause. Accepting orders without stock is a commercial decision about what you sell and how you will deliver it, rather than an inventory check.'
  - q: 'Should one unavailable size trigger changes to the entire product?'
    a: 'Start with that variant and retain its case. Catalog-wide changes complicate comparison and can affect references already working.'
cta:
  heading: 'Does your catalog contain units customers cannot buy?'
  text: 'Send one example variant, the location holding its stock and the test context. We can assess the catalog and inventory journey.'
  label: 'Investigate my sold-out product'
---

If Shopify says “sold out” while admin shows units, check the exact variant, quantity state and location. An inventory total alone does not establish what that customer can purchase.

The goods exist. Your website disagrees.

Before adding a hundred test units to persuade the button... let’s locate the units you already have.

## Start with the variant the buyer wants

Keep the product address and selected size, colour or format. Locate that same combination in admin.

Do not compare a product total with one size’s availability. A shirt can have many units across combinations without any in the one the customer selected.

Hypothetical example: blue shirts in M exist, but a shared link selects L. The first check is matching the variant, rather than installing an inventory app.

Record whether the warning appears in a collection, on the product page or after choosing an option. This supports a reproducible review without assuming the underlying value is wrong.

## Read the quantity label, not just its number

Shopify’s [inventory states guide](https://help.shopify.com/en/manual/inventory-and-locations/fundamentals/inventory-states) distinguishes **On hand**, the physical total at a location, from **Available**, units available to sell. It also separates committed, unavailable and incoming quantities.

Record column names alongside numbers. “There are ten” is a rather short conversation for a value with several possible meanings.

Do not adjust a quantity to make screens agree without understanding what each represents. Different measures may be involved, rather than an incorrect balance.

## Does the stocked location fulfil online orders?

Shopify’s [out-of-stock selling guide](https://help.shopify.com/en/manual/inventory-and-locations/setup/selling-when-out-of-stock) documents an important case: stock at a location not fulfilling online orders can coexist with a sold-out item when the online-fulfilling location has none.

Check that possibility rather than treating it as an automatic diagnosis. Record which location holds the variant and which should fulfil the purchase in your operation.

If units physically sit in another shop, selling them may affect preparation and shipping. Do not enable any location merely to remove the warning; establish whether it can fulfil those orders.

## The buyer’s country is part of the test

Shopify’s [fulfillable inventory documentation](https://help.shopify.com/en/manual/inventory-and-locations/setup/fulfillable-inventory) connects availability to locations shipping to the customer’s zone. The legacy display setting is configurable only for stores created before April 2024; not every panel offers the same control.

Record the selected storefront country when reproducing the case. Availability on your computer does not establish that a customer’s observation is wrong.

The objective is not to pretend every destination receives the same service. Establish whether displayed availability matches what you can deliver.

## A record beats comparing from memory

I propose reviewing one variant:

| Detail | What to retain |
| --- | --- |
| Reference and options | Exact affected variant |
| Quantity | Value and inventory state label |
| Location | Where units are recorded |
| Fulfilment | Intended fulfilling location |
| Context | Buyer country and journey |
| Outcome | Visible warning and when it appears |

Add screenshots of the product page and relevant data without customer information. This is a proposed protocol, not an audit performed on your store.

Once these elements are known, repeat without changing several conditions together. Keep a working variant for comparison. A small, explainable difference beats “it happens sometimes”.

## Selling without stock does not repair stock

Accepting orders for goods you will replenish, manufacture or source later can fit a business. It requires a delivery promise and a process supporting it.

Changing that policy to hide a fault does not establish inventory accuracy. A customer might buy while staff later discover the units were not where they expected.

Choosing made-to-order selling and not understanding a sold-out warning are separate situations. Do not turn one into the other without a deliberate decision.

## When to investigate the ERP or theme

If inventory originates elsewhere and its value is already wrong in Shopify, the [Shopify and ERP diagnostic guide](/en/blog/shopify-erp-sync-errors/) helps trace it. This article first establishes the value’s meaning and location.

If the product page allows progress but shipping selection fails, use the [shipping unavailable guide](/en/blog/shipping-not-available-shopify-b2b/). That is a different stage.

When data and context appear correct but the warning disagrees, prepare the case for theme or integration review. Changing button text to simulate availability does not validate behaviour.

For help, see [Shopify theme development](/en/services/custom-shopify-themes/). Bring one variant, its data and expected outcome. That creates a specific issue to investigate rather than an entire catalog to blame.

Documentation checked in November 2026. Examples are hypothetical and the protocol is proposed; no client-store tests or results are claimed.
