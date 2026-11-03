---
pair: precio-incorrecto-shopify-b2b
title: 'My wholesale customer sees the wrong Shopify price: what to check'
seoTitle: 'Wrong Shopify B2B Price: How to Find the Cause'
description: 'A wholesale buyer sees the wrong price or pays an unexpected amount. Check login, company location, catalogs, fixed prices, discounts and theme in order.'
keyword: 'wrong price shopify b2b'
date: '2026-11-03'
tags: ['Shopify B2B', 'Catalogs', 'Markets']
related: ['shopify-b2b-b2c-misma-tienda', 'shopify-b2b-sin-plus']
faq:
  - q: 'Why does my wholesale customer still see retail prices?'
    a: 'First confirm that they are signed in and purchasing for the correct company location. Then check that the catalog and its market are active and cover that location. A customer tag does not prove that they are buying in a B2B context.'
  - q: 'Does the lowest catalog price always apply?'
    a: 'No. Priority depends on catalog assignment. A direct company-location assignment takes precedence over a market assignment; market specificity matters between markets. Do not compare only the amounts.'
  - q: 'Why does changing the catalog adjustment leave one variant unchanged?'
    a: 'Check whether that variant has a fixed price. Fixed prices override the overall percentage adjustment in the catalog. Also check volume pricing if the problem appears when quantities change.'
  - q: 'Can a promotion reduce my wholesale catalog price further?'
    a: 'Yes. Eligible discount codes and automatic discounts can apply on top of catalog-adjusted pricing. Check eligibility, conditions and combinations before concluding that the price list is wrong.'
cta:
  heading: 'Cannot work out where that price comes from?'
  text: 'Tell me your Shopify plan and share an anonymized example: variant, quantity, expected price and displayed price. I can assess the investigation your catalogs and B2B buying journey need.'
  label: 'Tell me which price is wrong'
---

If a wholesale customer sees the wrong Shopify price, check their login and company location first, then the applicable catalog, followed by quantities, discounts and theme presentation. Editing a price list before finding where the difference starts can fix one order while breaking others.

Make the question specific: **which variant, for which company location, at what quantity, and on which screen shows an unexpected amount**. Those four details give you a starting point for isolating the problem.

> Official documentation reviewed in November 2026. The amounts and procedure below are diagnostic examples, not findings from an audit of a particular store. This guide focuses on native B2B in the online store.

## Write down the expected price before changing anything

“The discount does not work for this customer” is not a reproducible case. Choose one failing order and complete a record like this:

| Detail | Illustrative example |
| --- | --- |
| Product and variant | Blue T-shirt, size M, SKU TEE-BL-M |
| Buying context | Test company, Madrid location |
| Quantity | 12 units of that variant |
| Expected price | €8 per unit before tax |
| Screen and result | Product page: €8; cart: €10 per unit |
| Currency and destination | EUR, shipping to Spain |
| Promotion | No code entered; automatic discounts still need checking |

Keep the time and a note of recent changes too. A screenshot without a variant or quantity can look like complete evidence while hiding two different orders.

Do not compare a tax-inclusive line with a net price list, or the total for twelve units with a unit price. Make the conditions comparable first. If tax presentation is involved, record the expected product price, tax and final total separately rather than treating them as one number.

## If they see retail pricing, check who is buying

In native B2B, the buyer must sign in and purchase for a company location covered by the catalog. Shopify describes that relationship in its [B2B setup with Markets](https://help.shopify.com/en/manual/b2b/markets/catalogs).

To reproduce the issue, use a test buyer with the same commercial setup and record the selected location. Opening the storefront from your admin session or checking that a contact has a wholesale tag is not enough.

If someone can buy for several locations, compare using the one involved in the reported problem. “It is the same email address” does not establish that you are checking the same buying conditions.

My next check would be opening the product as a retail customer and as a B2B buyer. If both show retail pricing, I would follow the catalog assignment chain before blaming the theme. If only one screen fails, I would keep that detail for the buying journey investigation.

## If the catalog looks right, check its status and assignments

A saved catalog is not necessarily an applied catalog. Confirm that both the catalog and its corresponding B2B market are active, as described in Shopify's [catalog creation guide](https://help.shopify.com/en/manual/b2b/catalogs/creating-catalogs).

Then draw a simple chain: company location, matching market, catalog and variant. Write down the actual names in your setup. If you cannot explain one of those connections, you have a check still to perform.

Avoid creating a new market simply to test an idea. Review existing markets and their conditions first. When changing assignments, check the retail journey too: a wholesale fix is not complete without that regression check. The guide to [B2B and B2C in the same Shopify store](/en/blog/shopify-b2b-b2c-same-store/) explains that separation.

## With several catalogs, do not assume the cheapest always wins

Shopify distinguishes direct company-location assignments from market assignments. A direct assignment takes precedence over a market one. Between markets, the more specific market wins; equally specific markets use the lower price. See Shopify's [catalog priority rules](https://help.shopify.com/en/manual/b2b/markets/catalogs).

Here is a hypothetical example: a market catalog offers a variant for €7 and a catalog assigned directly to the location offers it for €9. Expecting €7 simply because it is lower does not reflect the configured priority. Before editing amounts, decide which assignment represents the commercial agreement.

I would inventory the catalogs that could affect the order and identify which one I expect to control it. If your team considers two competing price lists equally valid, clarify the commercial rule before adjusting the store.

## If only one variant is wrong, look for a fixed price

A fixed product or variant price overrides the catalog's overall percentage adjustment. Shopify explains this in its [price adjustment guide](https://help.shopify.com/en/manual/b2b/catalogs/creating-catalogs).

Suppose the base price is €20 and the catalog reduces it by 30%. You expect €14, but the variant retains a fixed price of €15. Changing the adjustment to 35% does not remove that exception. First decide whether €15 remains a valid negotiated condition.

Compare an affected variant with a working one. If they share the same market and buyer but behave differently, inspect differences in their data before rebuilding the whole B2B access setup. If prices change back after correction, record when it happens and investigate which import or integration writes them.

## If quantity changes the price, check the threshold per variant

Volume pricing requires the qualifying quantity for each variant; do not assume sizes or colors are pooled. Shopify also states that volume pricing becomes fixed and does not receive the catalog's overall adjustment. See its [volume pricing documentation](https://help.shopify.com/en/manual/b2b/catalogs/quantity-pricing).

Record the result immediately below a threshold and at the threshold. For a break at 12 units, I would compare 11 and 12 of the same variant, then 6 of one variant and 6 of another. This is a proposed test: fill in expected prices from your actual agreement before running it.

If sales promised a discount for mixed cases while the configuration works per variant, you have not necessarily found a calculation bug. You have found a difference between the offer and its implementation.

## If they pay less than expected, check promotions

Automatic discounts and codes can reduce catalog pricing further. Eligibility matters in blended stores too. Shopify documents this behavior in its [B2B discount guide](https://help.shopify.com/en/manual/b2b/catalogs/discounts).

For example, a wholesale price list sets the unit price to €8 and an eligible additional promotion takes off another 10%. A result of €7.20 does not, by itself, show that the catalog calculated incorrectly.

Record the discounts shown on the order and which campaign that buyer was supposed to receive. Do not disable every live promotion to investigate a suspicion. Prepare a controlled case and change one condition at a time, so you can explain which change produces the result.

## If product page, cart and checkout disagree, trace the whole journey

A correct price on one screen does not validate the others. Check variant selection, quantity, cart drawer, cart page and checkout using the same case. Record unit price, discounts and total separately.

If you suspect custom code, compare against a copy of the theme and document which component changes the presentation. Shopify publishes a [guide to displaying quantity rules and volume prices in themes](https://help.shopify.com/en/manual/b2b/store-customization/quantity-pricing), which helps identify information that needs updating when a different variant is selected.

I would not fix a discrepancy by painting the expected price onto the page with JavaScript. First understand what the order actually calculates. If an app controls pricing, record which app and consult its documentation: do not assume it follows native B2B rules.

## How to confirm the problem is resolved

Repeat the original case and at least one control: a retail customer, another location or a variant without an exception. If discounts were involved, also check an order with a promotion and one without it.

Keep a record of the failure, the change and the final result. If pricing should come from an ERP, include the next synchronization in your checks. A manual correction that disappears overnight has not resolved the source.

When asking for help, share an anonymized example containing the fields in the first table. That context makes it much easier to assess a [Shopify B2B portal investigation](/en/shopify-b2b-developer/) than a screenshot labeled only “wrong price”.
