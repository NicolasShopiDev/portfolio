---
pair: 'company'
term: 'Company'
aliases: ['company account', 'B2B customer', 'organisation']
category: 'b2b'
seoTitle: 'Company in Shopify B2B: What It Is and Its Limits'
description: 'The company is the customer in Shopify B2B: it groups locations and buyers, and carries the catalog and payment terms. Up to 10,000 locations per company.'
keyword: 'shopify b2b company'
answer: 'A company is the customer in Shopify B2B: instead of a person, the buyer is an organisation with its locations and its associated buyers. The catalog it sees, its payment terms and who is allowed to order on its behalf all hang off the company.'
related: ['company-location', 'shopify-b2b', 'payment-terms']
updated: '2026-10-21'
verified: '2026-10-21'
---

This change of model is what breaks the most assumptions in a theme. In B2C there is a customer and an address; in B2B there is a company, several locations, and people who buy for one or for many of them. A `customer` object alone no longer tells you which price applies.

## The numbers

Shopify does not limit how many companies a store can have, on any plan. What is capped is what hangs off each one: up to **10,000 locations** and **10,000 customers** per company. Those are ceilings nobody reaches in practice; the limit that hurts is the one on [active catalogs](/en/glossary/b2b-catalog/), which depends on the plan.

## What to watch when building the portal

A company with several locations is not an administrative detail: it changes shipping, taxes, minimums and sometimes the catalog itself. In Liquid, `customer.current_location` tells you which location is buying, and that is enough to change messages, minimums or delivery notices without duplicating templates.

The usual mistake is assuming a buyer belongs to one location. If they belong to three and the picker is hidden in the account page, the cart fills up with the wrong location's prices and the complaint arrives two days later, already invoiced.

The limits are in the [companies documentation](https://help.shopify.com/en/manual/b2b/companies).
