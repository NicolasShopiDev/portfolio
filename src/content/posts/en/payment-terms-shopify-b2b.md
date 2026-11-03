---
pair: "pago-aplazado-shopify-b2b"
title: "Net 30 or Net 60 on Shopify B2B: due dates, collection and risk"
seoTitle: "Net 30 and Net 60 on Shopify B2B: What to Check"
description: "Set up B2B payment terms with a clear process for due dates, collection, overdue orders and reconciliation before offering customers Net 30 or Net 60."
keyword: "net 30 shopify b2b"
date: "2026-11-03"
tags: ["Shopify B2B","Payments","Orders"]
related: ["pedidos-excel-portal-shopify","errores-sincronizacion-shopify-erp"]
faq: [{"q":"Does Net 30 automatically charge the buyer after 30 days?","a":"No. Terms establish the due date; they do not guarantee automatic collection. Define the collection method, who acts at maturity and how the result is recorded."},{"q":"When do net payment periods start?","a":"Shopify documents net terms from the date the order is placed. If your agreement starts at delivery or specifies a fixed date, verify that the chosen workflow reflects it."},{"q":"Is a due date the same as a credit limit?","a":"No. Payment timing and accumulated customer exposure are different rules. Decide which system calculates exposure and what should happen when the limit is exceeded."}]
cta: {"heading":"Offering trade credit without losing control of orders?","text":"Tell me the terms you offer, how you collect payment and where you track debt. I can assess the workflow between your portal, finance team and ERP.","label":"Tell me your payment terms"}
---

To sell on Net 30 or Net 60 through Shopify B2B, configure payment terms and separately define collection and risk control. A due date is neither an automatic charge nor a credit limit.

Before enabling terms for every wholesale customer, trace an order from creation to reconciliation. Checkout is only one part. The work ends when finance knows what is owed, what has been collected and whether the buyer may order again.

> Documentation reviewed in November 2026. The scenarios are proposed acceptance checks, not tests performed in your store or advice about how much credit to grant.

## Define the agreement you need to represent

“Thirty-day payment” can mean different things inside a business: thirty days from order, invoice, shipment or an agreed calendar date. Write down the starting point and what happens with partial fulfillment.

Decide who may change the terms and whether an exception applies to one purchase or future purchases too. An apparently administrative change may affect future orders when saved in the wrong place.

Build the test around a finance-approved expected date rather than the label of a dropdown option. Then compare that expectation with the resulting order.

## What Shopify payment terms represent

Shopify supports company-location terms and documents net periods, payment due on fulfillment and fixed dates for draft orders. Net periods start on the order date. See [B2B payment terms](https://help.shopify.com/en/manual/b2b/checkout-and-orders/payment-terms).

Verify extra capabilities before including them in scope: documented deposit requirements need Plus. Offering time to pay and requiring a deposit are separate features.

I would begin with one test location and simple terms. Record the due date and buyer communication, then check exceptions before extending the setup across companies.

## A due date does not perform collection

The official documentation says payment is not automatically captured when terms expire. Define who collects it, with which authorization, and how the outstanding amount is checked first.

For bank transfers, someone or a process must match the receipt to the order. With other methods, distinguish authorization, capture and recorded payment. Do not mark an order paid just because someone sends an unverified transfer receipt.

Assign an owner and a substitute. A due-date list reviewed by only one person stops working when that person is away, even if the store configuration is correct.

## Separate overdue debt from total exposure

Consider a fictional buyer with an €800 order due tomorrow and a €700 order due next month. Overdue debt may be zero today, while the proposed internal exposure measure is €1,500.

Decide which items your policy includes: unfulfilled orders, taxes, shipping, pending credits and currency. That is a business definition for the implementation to respect, rather than a number the developer should invent.

If the ERP owns risk control, specify what Shopify may use and what happens when data is stale. Does a new purchase stop, enter review or proceed under different conditions? Do not leave the outcome to synchronization timing.

## Build a shared state table

This is an organizational proposal, not an exhaustive list of Shopify statuses:

| Situation | Expected action | Proposed owner |
| --- | --- | --- |
| Order accepted on terms | Record amount and due date | Integration / finance |
| Due date approaching | Review communication and balance | Finance |
| Payment received | Reconcile without duplication | Finance |
| Overdue | Apply agreed policy | Sales and finance owners |
| Credit or return | Recalculate balance with traceability | Finance / ERP |

Buyer messages should agree with those states. An email claiming payment is complete while the ERP still shows debt creates calls and corrections that reminder automation cannot resolve.

## Test changes as well as the happy path

One successful order is not enough. I would propose these scenarios:

- A normal purchase with the expected due date.
- A buyer paying early.
- A partial or unmatched receipt, where relevant to the payment methods.
- An order canceled before collection.
- A credit issued after invoicing.
- A repeated ERP update.
- Another purchase attempted with an outstanding balance.

For each, write what the buyer should see and finance should receive. Where behavior depends on plan or payment method, verify it in the intended environment before promising it.

## Do not turn an integration failure into extra credit

An order missing from the ERP may look nonexistent to risk control. The [portal integration](/en/services/erp-integrations/) therefore needs visible delays and failures as well as data delivery.

I would prefer a clear “balance has not updated since yesterday” message to a reassuring but incorrect zero. Define a policy for unknown information, not just valid values.

The [ERP synchronization diagnostic guide](/en/blog/shopify-erp-sync-errors/) complements this workflow when delivery or duplication fails. A correct due date cannot compensate for a lost order.

## When is it ready for customers?

When sales, finance and development can explain the same journey: who gets terms, where the date comes from, how payment is collected, where it is reconciled and how incidents are handled.

If orders still arrive by email, plan the transition to a [wholesale portal](/en/blog/email-excel-orders-shopify-b2b/) without changing every commercial condition at once. Start with one demonstrable rule and expand when the order and money can both be traced to completion.
