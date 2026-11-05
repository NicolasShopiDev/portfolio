---
pair: "transferencia-solo-mayoristas-shopify"
title: "Bank transfer for wholesale buyers only in Shopify: separating payment methods"
seoTitle: "Bank Transfer for Wholesale Buyers Only on Shopify"
description: "Offer bank transfer to wholesale buyers and cards to retail customers on Shopify. Checkout Blocks requirements, alternatives and checks for correct separation."
keyword: "shopify bank transfer wholesale only"
date: "2026-11-05"
tags: ["Shopify B2B","Checkout","Payments"]
related: ["shopify-b2b-b2c-misma-tienda","pago-aplazado-shopify-b2b"]
faq: [{"q":"Does enabling bank transfer automatically reserve it for wholesale buyers?","a":"Enabling a method and restricting who can use it are separate decisions. Check availability by buyer profile in checkout instead of relying on its name or a theme notice."},{"q":"Can Checkout Blocks hide payment methods without Plus?","a":"The current documentation restricts Checkout Blocks payment method customizations to Plus. Do not infer availability from other features in the same app."},{"q":"Does selecting bank transfer mean the order has been paid?","a":"No. Choosing a manual method does not confirm receipt of funds. Define who verifies the payment and when it is recorded before goods are prepared."}]
cta: {"heading":"Does checkout offer the same payment options to consumers and distributors?","text":"Tell me your plan, buying profiles and which methods each should see. I can assess a payment setup matching your B2B operation.","label":"Tell me how buyers should pay"}
---

To offer bank transfer only to wholesale buyers and cards to consumers in one Shopify store, configure the method and control its checkout availability. A business-only notice does not prevent another buyer selecting it.

First write down the payment policy by profile. Then choose a tool compatible with your plan and verify it with test buyers rather than changing the whole store's conditions without a baseline.

> Documentation checked in November 2026. Profiles and tests in this guide are proposed acceptance criteria, not a setup already performed on a client store.

## Define what each buyer should see

Start with a table adapted to your agreements. This is a fictional example, not a recommendation about which methods to offer:

| Buying profile | Intended options | Decision to resolve |
| --- | --- | --- |
| Consumer | Cards and approved consumer methods | Behavior before login |
| Approved company, payment before shipment | Transfer and cards if agreed | When fulfillment may start |
| Company on agreed terms | Agreed conditions | Who tracks the due date |
| Applicant awaiting approval | Store's permitted journey | Avoid granting unapproved conditions |

Do not equate a registered customer with a wholesale buyer. An account holder may purchase as a consumer. The rule needs the intended commercial context.

Include distributor exceptions from the start. A broad B2B rule may hide an option one company needs even when it works for everyone else.

## Enabling transfer and restricting it are separate tasks

Shopify documents [manual payment methods](https://help.shopify.com/en/manual/payments/manual-payments), including bank transfer, buyer instructions and recording received payment. An order using a manual method does not establish that funds have arrived.

Before publishing instructions, confirm which reference buyers should use and who reconciles receipts. Keep instructions aligned with finance rather than inventing a collection process to fill the checkout text.

Then check availability for the profiles in your table. That requires a customization or tool representing your condition, rather than a visible label change.

## What Checkout Blocks supports and which plan it needs

The [Checkout Blocks payment-method guide](https://help.shopify.com/en/manual/checkout-settings/checkout-blocks/customizations/payment-methods) requires Shopify Plus for these customizations. It documents B2B and customer rules for hiding methods and notes that draft customizations must be activated.

Do not extrapolate from another feature. Being able to install Checkout Blocks or use an order-value limit does not prove payment customizations are available on your plan.

On Plus, inspect the buyer condition and method to hide. If the goal is company-only transfer, the decisive check includes entering as a consumer and confirming it is absent.

## What to assess without Plus

Shopify's [checkout compatibility table](https://help.shopify.com/en/manual/checkout-settings/checkout-customization) distinguishes public Function apps from custom apps. [Custom apps containing Functions require Plus](https://shopify.dev/docs/apps/build/functions), while public apps containing Functions can run on other plans within their supported scope.

Assess a public app handling your exact case before commissioning custom development. Ask for a demonstration using your B2B context, installed manual method and excluded buyer journeys.

A hide-payments-by-customer listing does not prove it understands your company model. If it uses tags, document maintenance and prevent unrelated tagging automation activating unintended terms.

## Separate bank transfer, payment terms and credit

Transfer defines how funds arrive. Terms define when payment is due. Credit control defines permitted business exposure. One company can combine those decisions in different ways.

For Net 30, agree who collects and what happens at maturity. The [Shopify B2B payment-terms guide](/en/blog/payment-terms-shopify-b2b/) covers that process. Hiding cards does not implement the financial agreement by itself.

Specify whether each profile's order may be prepared unpaid, requires review or needs another system's authorization to ship. Warehouse staff must understand that decision.

## Check the full checkout, including alternative entry points

A screenshot of the normal payment-method list is insufficient. Follow the payment buttons and entry points actually offered by the store and compare availability in each.

Checkout Blocks documents limitations for express options and Shop Pay. Do not promise that a normal-method rule controls every surface identically. Define supported methods and test those enabled in the store.

If availability changes after login or company selection, preserve that sequence. Starting with the final profile already selected can conceal a context-switch problem.

## An acceptance matrix for the payment policy

These proposed cases relate to the fictional table above. Fill in expected methods before execution:

| Case | What to verify |
| --- | --- |
| Signed-out consumer | No method reserved for companies |
| Registered consumer | Intended retail conditions retained |
| Authorized company | Agreed methods shown; buyer can proceed |
| Company with exception | General rule preserves its required option |
| Context switch | No incorrect availability retained |
| Enabled express entry | Behavior matches documentation and scope |
| Inactive customization | Test reveals policy is not applied yet |
| Transfer order | Finance recognizes payment still needs verification |

Complete a valid order for each profile after activation. Avoid hiding every method through a combination of rules that looked reasonable individually.

## When custom development makes sense

If conditions rely on data or exceptions a compatible tool cannot represent, define scope before building a Function. Prepare profiles, methods, rules and expected outcomes.

Payment separation forms part of a [Shopify B2B portal's checkout](/en/shopify-b2b-developer/). Each buyer should pay according to the agreement while finance recognizes order state, through a configuration you can review when commercial conditions change.
