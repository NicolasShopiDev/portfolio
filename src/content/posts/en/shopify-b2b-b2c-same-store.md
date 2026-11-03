---
pair: shopify-b2b-b2c-misma-tienda
title: 'B2B and B2C in the same Shopify store: when to combine or separate'
seoTitle: 'Shopify B2B and B2C in One Store: How to Decide'
description: 'Sell to retail and wholesale customers in one Shopify store. How to separate pricing and access, what to test before launch, and when two stores make sense.'
keyword: 'shopify b2b and b2c same store'
date: '2026-11-03'
tags: ['Shopify B2B', 'Catalogs', 'Markets']
related: ['shopify-b2b-sin-plus']
faq:
  - q: 'Do I need Shopify Plus to sell B2B and B2C in the same store?'
    a: 'No. Shopify B2B is available on Basic, Grow, Advanced and Plus. Check whether your pricing structure, markets and customizations fit the features available on your plan.'
  - q: 'Is tagging a customer as wholesale enough?'
    a: 'A customer tag does not replace native B2B configuration. The buyer must be linked to a company and purchase for a company location covered by the relevant catalog, after signing in through customer accounts.'
  - q: 'Does a wholesale catalog automatically hide its products from retail customers?'
    a: 'No. Adding a product to a B2B catalog does not automatically make it exclusive to businesses. Review its availability to retail customers too, and test both buying journeys.'
  - q: 'Can I reserve stock for wholesale customers in a blended store?'
    a: 'A blended store shares inventory between B2B and B2C. Shopify does not natively reserve stock by customer type. Channel allocations need a specific solution and checks against your warehouse or ERP integration.'
cta:
  heading: 'Adding wholesale to your existing Shopify store?'
  text: 'Tell me what you sell, how many price lists you use, and whether both channels share stock and an ERP. I can assess whether a blended store fits and what your B2B portal needs.'
  label: 'Tell me how you sell'
---

Yes, you can sell to retail and wholesale customers in the same Shopify store, including without Plus. The decision depends on how much the two channels share and which conditions you need to separate: pricing, access, products, orders and operations.

If you already sell to consumers, opening a second store should not be an automatic first step. Map how each customer buys and check what can coexist in your current setup.

> Features and limits checked against Shopify's official documentation in November 2026. The examples and test matrix in this guide are proposed working tools, not results from a specific implementation.

## What is a blended Shopify store?

Shopify calls a store serving both businesses and consumers from one admin a *blended store*. It shares a storefront, theme and inventory. A dedicated B2B store has its own admin and configuration. Shopify describes both options in its [store type comparison](https://help.shopify.com/en/manual/b2b/getting-started/store-type).

Start with these four questions:

| Question | If yes | If no |
| --- | --- | --- |
| Do you sell the same SKUs? | A shared product base makes sense | Check how much of the range is exclusive to each channel |
| Do orders draw from the same stock? | Shared inventory may simplify operations | Define stock reservations and who controls availability |
| Does the same team manage orders? | One admin may avoid duplicate work | Check permissions and responsibilities |
| Are the branding and presentation similar? | You can start from the same theme | Estimate the work of maintaining two experiences within it |

This is not a scorecard where three answers outweigh one. A single requirement, such as reserving goods for distributors, may matter more than the other three combined.

## Do you need Plus to combine B2B and B2C?

No. [Shopify's B2B documentation](https://help.shopify.com/en/manual/b2b) includes Basic, Grow, Advanced and Plus, and excludes Starter and Retail. Serving consumers as well as businesses does not, by itself, require Plus.

Your plan does affect how you organize pricing. On Basic, Grow and Advanced, the limit is **three active catalog assignments across active B2B markets**. Assigning the same catalog to two markets uses two assignments. Plus also supports direct catalog assignment to company locations. See Shopify's [catalog setup with Markets](https://help.shopify.com/en/manual/b2b/markets/catalogs).

Before comparing subscription costs, list the price lists you actually use and who receives each one. “I have thirty customers” tells you little; “I have thirty individually negotiated price lists” changes the scope. For a closer look at plan capabilities, read [Shopify B2B without Plus](/en/blog/shopify-b2b-without-plus/).

## How do wholesale buyers receive their prices without changing retail prices?

With native B2B, the buyer signs in and purchases for a company location covered by the catalog. A customer tag does not replace that relationship.

The sensitive part is the market: **a market defined only by region can also include retail customers**. To restrict pricing to B2B, use the *Company locations* condition, or direct assignment on Plus. Shopify explains the distinction in its [Markets and catalogs documentation](https://help.shopify.com/en/manual/b2b/markets/catalogs).

Here is an illustrative example, with prices before tax: you sell a notebook for €10 and want approved businesses to pay €6. Seeing €6 in your test account does not finish the job. Check that a signed-out visitor and a signed-in retail customer in the same country still see €10.

That comparison matters more than the catalog's name. Calling a market “Wholesale Spain” does not prove its conditions exclude consumers.

## What needs configuring besides prices?

At a minimum: companies and locations, authorized buyers, catalogs and customer account access. Shopify's [blended store setup checklist](https://help.shopify.com/en/manual/b2b/getting-started/blended-store-checklist) also covers payments, shipping and final checks.

I would prepare a short specification for each buying journey:

- Who can buy and who approves access.
- Which SKUs they can order and which prices apply.
- Which quantities are allowed for each SKU.
- How they pay and when the order is fulfilled.
- Which details the finance team needs to issue an invoice.

This prevents “enable B2B” from becoming a single checkbox in a quote. A buyer ordering five SKUs by card and another emailing two hundred order lines need different experiences, even though both buy wholesale.

I would also check product availability. Including a product in a B2B catalog does not automatically remove it from retail sales. Shopify flags this in its [pricing and catalog guide](https://help.shopify.com/en/manual/b2b/catalogs/creating-catalogs). Hiding a menu link is not proof that a product is exclusive either.

## Which mistakes should you look for before launch?

The first is confusing commercial pricing with tax presentation. Your team may understand that a price list excludes VAT, but you still need to check what the product page shows and what checkout charges. Record the expected product price, tax and total separately, so the comparison is unambiguous.

The second is testing only a single unit. If you sell by the case, place test orders with valid and invalid quantities. Treat a minimum order value as a separate requirement: an amount threshold and a per-variant quantity rule answer different questions. Define both before choosing how to enforce them.

The third is reviewing the portal without the apps running in the real store. A clean demo does not tell you what your installed search app, cart drawer or order export system will do. Include those components in your acceptance checks.

## A test matrix for a blended store

Before launch, I would keep a table like this. Copy it into a spreadsheet and fill in the outcomes your business expects.

| Profile or situation | Check | Evidence to keep |
| --- | --- | --- |
| Signed-out visitor | Browses and buys on retail terms | SKU, price and total |
| Signed-in retail customer | Signing in does not grant wholesale pricing | Same product before and after login |
| Approved wholesale buyer | Receives the selected location's prices | Company, location and price |
| Contact without approved access | Does not receive an authorized company's terms | Login and purchase attempt results |
| Buyer with several company locations | Each selection gives the expected conditions | Location and corresponding order |
| B2B-only product | Retail customer cannot buy through a direct link | Product URL and purchase attempt result |
| Wholesale order with a promotion | Result matches the commercial policy | Discount, subtotal and total |
| Order reaching the ERP | Retains SKUs and required details | Order identifier in both systems |

You do not need twenty invented scenarios to begin. Choose one shared SKU, one exclusive product and the two price lists with the biggest differences. Add the exceptions your sales team already recognizes as troublesome.

This table is an acceptance specification: it defines what should happen. It does not mean those outcomes have been verified in your store until you run the checks.

## When should you separate the stores?

I would consider separate stores when keeping one requires too many exceptions: very different buying journeys, independent teams or commercial presentation that is difficult to share.

Inventory deserves particular attention. Shopify states that a blended store shares stock and cannot natively allocate it by customer type. Opening two stores does not, on its own, solve synchronization with a shared warehouse. You still need to design who controls stock and how each channel receives updates.

Before deciding, I would compare two scopes side by side: adapting the existing store, and maintaining a second store with its integrations. Include recurring work on products, themes and processes as well as the launch.

If both channels share products, stock and a team, I would start by evaluating a blended store. If you separate them, tie that decision to an identified operational requirement. In a [Shopify B2B project](/en/shopify-b2b-developer/), that decision comes before building the portal, with real price lists and orders on the table.
