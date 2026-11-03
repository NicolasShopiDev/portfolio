---
pair: "pedidos-excel-portal-shopify"
title: "From Excel and email orders to a Shopify wholesale portal"
seoTitle: "Excel and Email Orders to a Shopify B2B Portal"
description: "Move wholesale orders from Excel and email into Shopify B2B. Prepare the data, choose the buying flow and define checks before inviting your customers."
keyword: "wholesale order portal shopify"
date: "2026-11-03"
tags: ["Shopify B2B","Orders","Integrations"]
related: ["vender-por-cajas-shopify","precio-incorrecto-shopify-b2b","pedido-rapido-referencia-shopify"]
faq: [{"q":"Must I stop accepting email orders on launch day?","a":"No. Start with a customer group and keep an assisted route for exceptions. Define order identification so an email and a portal submission cannot accidentally become duplicate orders."},{"q":"Is importing an Excel file the same as having a B2B portal?","a":"No. Importing introduces data. The portal must also resolve access, pricing, availability, quantities and confirmation for the buyer. These are different parts of the project."},{"q":"Can orders be reviewed before acceptance?","a":"Shopify documents B2B draft-order workflows. If review is required, check the entire journey, including price changes, acceptance and transfer to the ERP."}]
cta: {"heading":"Do your wholesale buyers still email order sheets?","text":"Tell me how many lines a typical order contains, how you assign prices and which ERP receives sales. I can assess the workflow your portal needs.","label":"Tell me how orders arrive"}
---

You can move Excel and email orders into a Shopify B2B portal, but the work starts by translating spreadsheet rules into a buying journey. Uploading products does not, by itself, establish who may order, which price list applies or what the warehouse does with an incomplete SKU.

The operational goal is an order you can process without typing its lines again. Before commissioning a new store, identify today's corrections and decide which ones the portal should remove.

> Implementation proposal based on documentation reviewed on 3 November 2026. The example order is fictional; no savings or results are attributed to a client.

## Start with three orders, not the home page

Choose a simple order, a long one and one with exceptions. Keep anonymized copies and record every intervention: looking up SKUs, changing quantities, correcting prices, asking for an address or confirming availability.

If sales spends time negotiating a payment deadline, you may want to preserve that conversation. If the time goes into deciphering a size abbreviation, the portal should remove the ambiguity. Separating those tasks avoids automating a useful commercial relationship while leaving repetitive work untouched.

For each intervention, record its owner and reason. Not every error originates with the buyer: the order sheet may contain old prices or SKUs that do not match the warehouse.

## Turn each spreadsheet line into an unambiguous choice

This is a proposed working table, not a Shopify import format:

| Received line | Question you resolve today | Required portal data |
| --- | --- | --- |
| TEE-BL, 12 | Which size? | Exact variant |
| BTL-500, 7 | Can we split a case? | Sales unit and multiple |
| Deliver to new branch | Which address and terms? | Authorized company location |
| Usual price | Which list and effective date? | Applicable price list and validity |

Do not move ambiguity into the new system. Let the buyer select an identifiable variant and see which unit they are ordering. For cases, define [pieces, cases and multiples](/en/blog/sell-case-packs-shopify/) first.

## Choose direct purchase or review before acceptance

Direct purchase fits settled conditions. Review may fit orders requiring confirmation of transport, availability or negotiated terms before acceptance.

Shopify supports [B2B draft orders for purchases received by email or phone](https://help.shopify.com/en/manual/b2b/checkout-and-orders/draft-orders). Associating a buyer and company location brings in the relevant B2B configuration. This helps organize a transition; it does not automatically turn every email into an order.

Write down what each status means to the team: requested, awaiting review, accepted, shipped and paid. Avoid telling a customer that an order is confirmed while finance still considers it a proposal.

## Design access before sending invitations

Prepare companies, authorized people and locations. Establish who may buy for each branch and who receives order communications. Do not reuse one generic contact across unrelated customers for convenience.

Assign prices and run a controlled order for each profile. Include retail buyers if the store is blended. My published [Émolo project](/en/projects/emolo-b2b/) provides a reference for my B2B work; this article's example remains an independent design.

Access also needs a recovery route. If a buyer cannot sign in, who helps? Can they use an assisted channel without the same purchase being submitted again through the portal later?

## Match order entry to the way customers buy

A visual catalog can support discovery. A buyer replenishing thirty familiar SKUs needs another pace: SKU search, visible variants or a quick order list.

Before adding CSV upload, establish whether a clear table handles most orders. If uploads are necessary, define line-level errors and a confirmation stage. Do not silently replace an unknown SKU with the closest-looking product.

In the scope, separate launch essentials from later shortcuts such as repeat ordering, favorites or bulk uploads. That lets you validate the basic journey before building every extra.

## Keep an identifier all the way to the ERP

Shopify's [B2B integration documentation](https://help.shopify.com/en/manual/b2b/reports-and-automations/external-integrations) warns that not every connector correctly handles companies and catalogs. Test representative orders and customers even when a provider advertises Shopify compatibility.

My specification would include a reference for tracing each order into the ERP. If delivery fails, distinguish “not delivered” from “delivered, but the response was lost”. Resending without checking can duplicate a sale.

A synchronized label is not enough. Inspect the resulting company, address, variant, quantity, tax and terms in the destination system.

## Launch with a small group and acceptance criteria

Choose buyers with different ordering patterns and explain what the portal supports. There is no need to pretend every exception is covered on day one.

| Test | Proposed acceptance criterion |
| --- | --- |
| Typical order | Buyer completes it using agreed prices |
| Unknown SKU | Identified before submission |
| Incomplete case | Valid quantity is explained |
| Commercial review | Both sides understand the status |
| Integration retry | Does not create another order |
| Warehouse receipt | Lines do not need retyping |

Record the questions the team receives during the initial phase. They identify missing explanations, rules and data. Compare manual work against your own baseline instead of promising an unmeasured saving.

## What to prepare for a project quote

Bring three anonymized orders, your actual price lists, quantity rules and the system receiving sales. Add exceptions that currently live only in a salesperson's memory.

That is enough to scope a [Shopify B2B portal](/en/shopify-b2b-developer/) around your operation. The home page follows the decision about which order must arrive correctly and who accepts it.
