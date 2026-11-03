---
pair: "migrar-prestashop-shopify-b2b"
title: "Migrating PrestaShop wholesale to Shopify: what to verify"
seoTitle: "PrestaShop to Shopify B2B Migration: What to Check"
description: "Plan a wholesale migration from PrestaShop to Shopify: prices, variants, companies, orders, ERP and URLs. What to rehearse before switching the domain."
keyword: "migrate prestashop shopify b2b"
date: "2026-11-03"
tags: ["Migration","Shopify B2B","Integrations"]
related: ["importar-tarifas-shopify-b2b","pedidos-excel-portal-shopify"]
faq: [{"q":"Is importing products enough to migrate wholesale?","a":"No. You also need to represent buyers, companies, prices, quantities, payments and external systems. Acceptance should cover complete orders."},{"q":"Can I copy PrestaShop customer groups directly?","a":"First define what each group controls: pricing, access, tax or permissions. Then design the equivalent. A tag with the same name does not guarantee the same behavior."},{"q":"When should I switch the domain?","a":"After rehearsing catalog, access, orders, integrations and redirects, and deciding how changes are controlled during cutover. Use verifiable criteria to choose the date."}]
cta: {"heading":"Has your wholesale PrestaShop setup stopped fitting the business?","text":"Tell me your SKU and price-list counts, the modules supporting B2B and the connected ERP. I can assess the migration scope.","label":"Tell me what needs migrating"}
---

For a wholesale migration from PrestaShop to Shopify, inventory commercial rules before moving data. Product transfer is one task; correct pricing, access and orders define success.

The key question is what every buyer can still do the day after cutover. A finished home page does not establish whether a distributor can repeat an order on agreed terms.

> Proposed acceptance plan based on documentation reviewed in November 2026. No example migration has been executed, and no search-ranking retention is promised.

## Inventory rules currently hidden in modules

List installed modules and ask which operation depends on each. One group may control discounts, another access, and a custom process may export orders into the ERP.

Do not dismiss a module because it has no visible design effect. It may populate a warehouse field or prevent buyers from seeing internal prices.

For each rule, record one valid example and one that must fail. A group named wholesale is too broad. “This buyer may order for these two branches at this price” describes behavior you can verify.

## Map behavior instead of copying labels

| Source feature to inventory | Destination question |
| --- | --- |
| Customer group | Pricing, access or both? |
| Combination-specific price | Which variant and recipient? |
| Minimum or pack size | Per variant, product or order? |
| Payment terms | From which date, and who collects? |
| Alternative address | Authorized location or free text? |
| Tax module | What does it calculate and export? |

A mapping may split one source rule into several destination components. That is normal. Reusing the name without checking behavior is the risky shortcut.

Shopify's [general migration guide](https://help.shopify.com/en/manual/migrating-to-shopify) describes CSV, apps and API options alongside catalog, payment and domain checks. Choosing a transfer method does not replace designing equivalences.

## Rehearse difficult product variants

Choose products representing sizes, colors, similar SKUs, images, case formats and discontinued items. Inspect what buyers see and what reaches the ERP.

Matching product counts do not prove a complete import. Count variants and compare identifiers, availability and sales units. A product may exist with the wrong combinations attached.

Document excluded data and where it can be consulted. Finance and support need a route for historical questions rather than hidden migration limitations.

## Verify pricing with representative baskets

Choose buyers from different groups and prepare an expected basket for each. Include quantities triggering special conditions, promotions and known exceptions.

For catalogs, run a [controlled wholesale price import](/en/blog/import-wholesale-prices-shopify/). A catalog screenshot is not a substitute for checking which price reaches the buyer's order.

If one business serves B2B and B2C, test both journeys. Separation errors can be invisible in an admin session yet affect a consumer in the same country.

## Resolve access and customer communication

Define how the destination recognizes each person, which company they buy for and which locations they may use. Verify the chosen authentication route rather than promising every access detail transfers unchanged.

Prepare clear communication: where to sign in, what buyers should review and how they obtain help. Do not invite customers while their prices and addresses are still changing.

Review duplicated contacts before migrating their company relationships. Untangling duplicates after launch can mix permissions, order associations and communications.

## Map real URLs and content

Export URLs requiring a destination and assign a new page to every important intent. Include products, categories, informational content and pages with incoming links.

Avoid redirecting everything to the home page for convenience. Check whether the destination answers the visitor's expectation and avoid unnecessary redirect chains.

Then test internal navigation, email links and old product access. Loading redirects alone does not guarantee SEO outcomes: coverage, content and post-launch performance still need review.

## Rehearse cutover and concurrent changes

Decide which system accepts orders during transition, which data freezes and how new accounts or sales are transferred. A rehearsal with no concurrent changes does not represent a trading business.

Assign owners for catalog, payments, ERP and domain. Define stop conditions and what rollback means without losing orders.

| Before switching | Proposed evidence |
| --- | --- |
| Order for every profile | Expected price, quantity and total |
| ERP transfer | One sale with correct data |
| Buyer access recovery | Journey completed without technical assistance |
| Priority old URL | Relevant working destination |
| Integration failure | Logged and rehearsed recovery |

## What to check after launch

Compare orders, login issues, missing references and pending data. Initially, someone should be available to assist buyers while another person can inspect the ERP destination.

Record the difference between an incident and an unplanned commercial exception. That distinction supports prioritization without blindly expanding the scope.

A [Shopify migration](/en/services/shopify-migration/) can be scoped more accurately when it includes these checks and an inventory of rules. Operational continuity is the expected outcome, beyond a catalog resembling the old one.
