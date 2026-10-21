---
pair: 'draft-order'
term: 'Draft order'
aliases: ['quote', 'manual order', 'draft']
category: 'b2b'
seoTitle: 'Draft Order in Shopify: Quotes and B2B Orders'
description: 'A draft order is an order created from the admin or the API before any payment exists. It is the piece quotes and phone orders are built on in B2B.'
keyword: 'shopify draft order'
answer: 'A draft order is an order created from the admin or the API before a payment exists, with its lines, its customer and its prices already set. In B2B it is the usual way to turn a quote into an order and to enter an order taken over the phone or by email.'
related: ['payment-terms', 'company', 'admin-graphql-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

In wholesale the order does not always start on the website. It starts on a call, in a spreadsheet the sales rep sends, or in an email with fifteen SKUs in it. The draft order is where all of that lands without breaking the store's model.

## What it is actually used for

Three things, in order of frequency:

1. **A quote.** Build the order with prices and shipping, send it to the buyer, and convert it to an order when they accept. Nothing gets retyped.
2. **An order taken off the website.** The rep enters it through the admin with the right company and location, and the price comes from the catalog that applies.
3. **Exceptions.** A one-off special price or a negotiated shipping cost that does not justify touching the catalog.

## What to know before automating it

If drafts are created over the [API](/en/glossary/admin-graphql-api/) from an ERP or a configurator, it is worth being clear that a draft does not reserve stock and that prices written by hand do not recalculate themselves. A draft created in January with a January price still carries that price in March.

The other point: sending the draft to the buyer sends a payment link. If the company is on deferred [payment terms](/en/glossary/payment-terms/), that link is not the right flow — converting it to an order with its due date is.

Detail in the [draft orders documentation](https://help.shopify.com/en/manual/fulfillment/managing-orders/create-orders).
