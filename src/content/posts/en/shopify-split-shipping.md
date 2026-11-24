---
pair: envios-divididos-shopify
title: 'One order, two shipments... and a customer puzzling over delivery'
seoTitle: 'Shopify Split Shipping: Understand Shipments and Costs'
description: 'Two shipments do not necessarily mean two orders or a duplicate charge. Review grouping, buyer communication and what your fulfillment team needs to receive.'
keyword: shopify split shipping
date: '2026-11-24'
tags: ['Shopify', 'Checkout', 'Logistics']
faq:
  - q: 'Do two shipments mean two orders?'
    a: 'Not necessarily. One order can contain multiple delivery groups and fulfillment orders. Check the records before interpreting them as duplicates.'
  - q: 'Should two packages always cost twice as much?'
    a: 'Do not use package count as a pricing formula. Review configuration and the actual amount presented to the buyer before concluding there is an error.'
  - q: 'Can I promise a particular checkout presentation?'
    a: 'Check the actual journey and what the configuration supports first. Define what buyers need to understand before commissioning an interface change.'
cta:
  heading: 'Are checkout and your warehouse telling different stories?'
  text: 'Describe a basket that splits, the expected charge and what logistics receives. We can assess the journey and integration requirements.'
  label: 'Review my split deliveries'
---

When Shopify presents multiple shipments in one purchase, identify the items in each group and the charge buyers see before changing rates. One purchase can produce several deliveries; that alone does not establish a duplicated order or incorrect charge.

You see a fairly sensible logistics operation.

The customer sees two shipping sections... and starts doing some distinctly unhappy arithmetic.

You should both be buying into the same story.

## Separate the order, the delivery and the physical box

Shopify’s [split cart documentation](https://shopify.dev/docs/apps/build/orders-fulfillment/split-carts) distinguishes delivery groups and fulfillment orders within a purchase. Causes include products from different locations or profiles and combinations involving preorders.

For diagnosis, draw three levels: what the person purchased, how delivery is organised and what the warehouse prepares. Do not assume “order”, “shipment” and “box” always describe equivalent things.

Hypothetical example: a store sells an available part and an accessory on preorder. Sales describes one purchase; buyers need to understand when each item will arrive. Agree that promise before debating a dropdown's design.

## Identify the configuration you are looking at

The [shipping profile guide](https://help.shopify.com/en/manual/fulfillment/setup/shipping-profiles) describes product and location rules and a gradual transition to shipping options by market. Two stores need not present identical settings.

Record market, products, quantities and journey. Capture the buyer's shipping detail, not just the final total. This gives you something concrete to discuss instead of “Shopify charges twice”.

If no rate appears, that is a different symptom: start with [shipping unavailable](/en/blog/shipping-not-available-shopify-b2b/). Here there is a shipping proposal; we need to understand and explain its division.

## Do not calculate charges by counting packages

The [split shipping guide](https://help.shopify.com/en/manual/checkout-settings/split-shipping) documents charging differences by configuration and rate type. It also excludes B2B checkouts submitted as drafts and certain cases involving one line across locations; app compatibility needs checking. This is not universal support for every workflow.

Stores upgraded to shipping options by market behave differently, and the previous activation toggle no longer applies. Read the section matching your store before following an old screenshot.

For the fictional example, I would not insert an invented price into a live rule. First, write down the business expectation: are two deliveries explained, what charge should appear and who can justify it? Then compare that expectation with the observed journey and applicable documentation.

And for heaven’s sake, do not display “free shipping” on a product page if you subsequently need three exceptions nobody has seen. Small print does not deliver trust.

## Write the promise before requesting another design

Try this working sentence: “This purchase includes ___; you will receive ___; the shipping charge shown covers ___”.

This is neither a default Shopify notification nor contractual wording. It is a clarity test for your team. Difficulty completing it suggests an unresolved commercial decision, rather than necessarily a missing visual component.

Review product page, cart and checkout using the same basket. Look for contradictions: one delivery date for items expected at different times, general messaging that misses the exception or terminology support interprets differently.

A more expanded interface might help one situation and solve nothing in another. Define what somebody should understand first, then verify supported presentation and whether development makes sense. Do not promise to rebuild checkout before assessing it.

## Make sure logistics understands the outcome too

For external systems, the official split cart model warns against assuming a one-to-one relationship between order and fulfillment. You do not need to read code to state the requirement: each group must reach its team with the information needed, without omissions or duplicates.

For the example basket, I would propose this acceptance record:

| Check | Evidence to save |
| --- | --- |
| Basket contents | References, quantities and context |
| Buyer promise | What they understand about deliveries and cost |
| Commercial result | Created order and identified groups |
| Warehouse work | What each team receives and should prepare |
| Later communication | What is communicated as each delivery progresses |

Include another basket that should stay together and compare. A purchase finishing without errors cannot validate the entire operation. This proposed protocol was not executed on a store for this article.

If another system handles deliveries, prepare an anonymised case before assessing an [ERP integration](/en/services/erp-integrations/). Basket, expectation and result: that gives us a concrete starting point.

Sources reviewed in November 2026. Examples and tests are hypothetical; no client rates or integrations were validated.
