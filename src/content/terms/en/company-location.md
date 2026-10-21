---
pair: 'company-location'
term: 'Company location'
aliases: ['location', 'company branch', 'B2B location']
category: 'b2b'
seoTitle: 'Company Location in Shopify B2B: Prices and Shipping'
description: 'The location is the real buying unit in Shopify B2B: it decides address, taxes, payment terms and, on Plus, the catalog. Up to 25 catalogs per location.'
keyword: 'shopify b2b company location'
answer: 'A company location is the specific address a company buys from, and it is the unit that actually decides the order: its shipping address, its taxes, its payment terms and, on Shopify Plus, its own catalog. A company with three branches can buy at three different prices.'
related: ['company', 'b2b-catalog', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

The location is the object most often underestimated when quoting a B2B portal. It sounds like a billing detail and it is in fact the piece that decides what the buyer sees.

## What changes between plans

On Shopify Plus a catalog can be assigned **directly to a location**. Without Plus it cannot: the catalog is assigned to a B2B market and the companies in that market inherit it, the same for all their locations. That is why "a different price list per branch" is one of the real reasons to move to Plus.

The platform ceiling is **25 catalogs per location** and **50 customers per location**, the same on every plan. That 25 sits next to the 3-active-catalog limit of the non-Plus plans: the first is a platform cap, the second is your plan, and the second is the one that stops you.

## The location picker

If a buyer has several locations, switching location has to live where the buying happens, not buried in the account pages. Changing location can change the price of every line in the cart, so the change should be visible and the cart should say it has been recalculated.

In practice I solve it with a picker in the header that reads `customer.current_location` and reloads the cart when it changes. It is the pattern written out on [the code page](/en/code/).

More detail in the [locations documentation](https://help.shopify.com/en/manual/b2b/companies).
