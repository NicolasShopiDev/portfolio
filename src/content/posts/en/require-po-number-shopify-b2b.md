---
pair: "numero-pedido-compra-obligatorio-shopify-b2b"
title: "Require a purchase order number in Shopify B2B: validation and limits"
seoTitle: "Require a PO Number in Shopify B2B Checkout"
description: "Require a purchase reference in Shopify B2B without confusing it with a cart note. Native PO validation, plan requirements and practical acceptance checks."
keyword: "require po number shopify b2b"
date: "2026-11-04"
tags: ["Shopify B2B","Checkout","Shopify Functions"]
related: ["pago-aplazado-shopify-b2b","errores-sincronizacion-shopify-erp"]
faq: [{"q":"Can Shopify validate the native purchase order number field?","a":"Yes. Since API version 2026-04, Cart and Checkout Validation can read poNumber and target an error at the native field. The rule still needs implementation and testing."},{"q":"Does a custom validation Function require Plus?","a":"Custom apps containing Shopify Functions require Plus. Other plans can evaluate a public App Store app supporting this validation."},{"q":"Does a correctly formatted number prove purchasing authorization?","a":"No. Presence and structure do not establish that the customer purchasing team issued that reference or that it has available budget. Authorization needs its own process or integration."}]
cta: {"heading":"Does finance send orders back because the purchase reference is missing?","text":"Tell me who must provide the number, which formats you accept and where the ERP receives it. I can assess B2B validation fitting that process.","label":"Tell me which reference you need"}
---

You can require a purchase order number in B2B checkout by validating the native field. First define who must provide it, what counts as valid and how it reaches your ERP: a populated field does not prove an authorized purchase.

This guide concerns the buyer-provided PO number. It is separate from the Shopify order number and the invoice number issued by your accounting system.

> Features checked in November 2026. Examples are a proposed specification, not a deployed Function or verified customer procurement workflow.

## What changed since older forum answers

Shopify's [official changelog](https://shopify.dev/changelog/posts/cart-and-checkout-validation-adds-billing-address-and-po-number-error-targets) documents native PO input and field-targeted errors in Cart and Checkout Validation from API version 2026-04. Older answers saying the field is inaccessible need revisiting.

That supports a rule on the native value rather than asking buyers to duplicate it in a cart note. It does not provide one universal rule fitting every company, or establish that a particular app implements it.

Ask providers to show which field they validate and where the final value is stored. A screenshot with a PO label does not answer either question.

## Decide which reference you actually need

Write the policy with examples before choosing a regular expression. Some customers need a nonempty reference; others require a prefix, length or separate approval process.

| Value | Origin | Purpose |
| --- | --- | --- |
| Purchase reference / PO | Buyer or purchasing team | Link their authorization to your sale |
| Shopify order number | Sales system | Identify your order |
| Invoice number | Invoicing system | Identify the issued document |
| ERP reference | Integration or ERP | Trace the internal record |

Do not automatically fill a missing PO with your sales order number just to make validation pass. That satisfies a text check while defeating the commercial requirement.

## Define scope by buyer and transaction

A rule covering every B2B buyer may be excessive if only one distributor requires a PO. Decide whether it depends on company, location, order type or another approved condition.

Write exceptions too: samples, sales-assisted orders or corrections to an earlier purchase. An exception should be recognizable and reviewable, rather than a secret word any buyer can enter to bypass the control.

For credit purchases, coordinate with [B2B payment terms](/en/blog/payment-terms-shopify-b2b/). Due dates and purchase references solve different finance needs.

## What validation checks and what it cannot establish

The [Cart and Checkout Validation API](https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation) documents poNumber and the error target <code>$.cart.poNumber</code>. Use that technical reference when directing a correction to the relevant buyer field.

I would separate four checks: whether a value is required, content after trimming outer whitespace, permitted structure and a clear correction message. Avoid calling every problem an invalid order when the missing detail can be identified.

Accepting <code>PO-4821</code> because it matches your format does not confirm existence in the buyer's system. If existence, budget or authorization must be checked, design that process explicitly. Do not attach those guarantees to a text-format check.

## What depends on the Shopify plan

Shopify states that [custom apps containing Functions require Plus](https://shopify.dev/docs/apps/build/functions). Other plans can use public App Store apps with Functions within each app's supported scope.

Ask for a demonstration using the native field, your buyer profiles and invalid examples. Do not choose solely from a required-fields listing: it may concern another value or a theme-only interface condition.

Include configuration ownership in the assessment. If each company needs a different format, avoid a setup requiring a code edit for every new buyer.

## A matrix for presence, format and scope

This table describes a fictional rule requiring certain buyers to provide a PO-prefixed numeric reference. It is not a universal format recommendation.

| Case | Expected result for the example |
| --- | --- |
| Required buyer, empty field | Stop with a field-level explanation |
| Whitespace only | Treat as absent |
| Accepted structure | Continue if the rest of the order is valid |
| Unsupported text | Explain the required structure |
| Exempt buyer | Do not require unnecessary information |
| Retail buyer in blended store | Preserve intended journey |
| Correction after an error | Continue without losing the basket |
| Order received in ERP | Preserve value and sale relationship |

Run checks through purchasing methods you actually offer. Online checkout results do not automatically establish behavior in an external process creating orders through a different route.

## Preserve the value through to finance

Inspect the record used for invoicing or order management rather than leaving the reference buried in free-text notes. If the ERP has a specific field, agree a stable mapping.

For failures, retain source and destination identifiers. The [Shopify ERP diagnostic guide](/en/blog/shopify-erp-sync-errors/) explains why blindly resending before checking destination state can duplicate a sale.

Define post-acceptance corrections too. Editing the text should preserve traceability of what the buyer originally submitted.

## What to prepare for an implementation assessment

Bring two or three fictional valid references, invalid examples, required profiles and a sample of the ERP destination. Identify who authorizes exceptions.

That supports a [Shopify Function assessment](/en/services/shopify-functions/) and acceptance criteria. The desired result is a usable order reaching finance with the correct reference while avoiding unnecessary barriers for other buyers.
