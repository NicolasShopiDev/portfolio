---
pair: shopify-b2b-sin-plus
title: 'Shopify B2B without Plus: what Basic, Grow and Advanced really give you'
seoTitle: 'Shopify B2B Without Plus: What You Can and Cannot Do'
description: 'Native B2B now runs on Basic, Grow and Advanced, capped at 3 active catalogs. What it actually covers, where it breaks, and when Plus is worth paying for.'
keyword: 'shopify b2b without plus'
date: '2026-10-21'
tags: ['Shopify B2B', 'Catalogs', 'Plans']
faq:
  - q: 'Does Shopify B2B work on the Basic plan?'
    a: "Yes. Shopify's documentation lists B2B on Basic, Grow, Advanced and Shopify Plus, and excludes only Starter and Retail. On Basic you get companies, locations and catalogs with their own prices, capped at 3 active catalogs."
  - q: 'How many B2B catalogs can I have without Shopify Plus?'
    a: 'Three active ones across all your B2B markets combined, not three per market. Shopify Plus removes that cap and also lets you assign a catalog directly to a company or to one of its locations.'
  - q: 'Can I give one customer a negotiated price without Plus?'
    a: 'Not natively. Without Plus, catalogs are assigned through B2B markets, so you can build shared price tiers (wholesale, distributor, key accounts) but not a per-account price list. Per-account pricing needs Plus or a public app that applies the discount.'
  - q: 'Do I need a new theme to sell B2B on Shopify?'
    a: 'No. A wholesale portal can be built on the theme you already run: catalog prices arrive resolved in the theme, and access is decided by a Liquid condition on customer.b2b?. What it usually takes is front-end work on that theme, not a rebuild.'
  - q: 'Can I use custom Shopify Functions on Advanced?'
    a: 'No. Only stores on a Shopify Plus plan can use custom apps that contain Shopify Functions. On Basic, Grow and Advanced you can use functions that ship inside a public App Store app, but not a Function written for your store.'
cta:
  heading: 'Run out of catalogs?'
  text: "I build wholesale portals on Shopify B2B, with and without Plus. Tell me how your price tiers and customer levels actually work and I'll tell you what fits your plan, what doesn't, and which route costs less a year from now."
  label: 'Tell me about your store'
---

For years, selling wholesale on Shopify meant one of two things: paying for Shopify Plus, or rigging something together with customer tags, automatic discounts and a second store. Not any more. Shopify's documentation now lists B2B on the **Basic, Grow, Advanced and Shopify Plus** plans, and excludes it only from Starter and Retail.

That changes the question. It is no longer "can I do B2B without Plus?", because you can. It is **where the wall is**. And the wall has a number: on Basic, Grow and Advanced you can assign *up to 3 active catalogs* across all your B2B markets combined. That number decides whether your project fits your plan, long before anything else does.

Here is what you get, what you don't, and what I do when it doesn't fit.

> The limits in this article were checked against Shopify's own documentation on 21 October 2026. Shopify moves them: check again before you commit to a plan.

## What "native B2B" actually means

B2B is not an app or a theme. It is a data model inside your store, with three pieces.

- **Companies.** The customer stops being a person and becomes a company with locations. Each location carries its own shipping address, taxes and terms.
- **Company customers.** The people who buy on behalf of that company, each tied to one or more locations.
- **Catalogs.** A set of products with their own prices, quantity rules and volume pricing. The equivalent of your wholesale price list.

What matters on the front end: when a buyer signs in with a company account, **the catalog price arrives in the theme already resolved**. You don't calculate anything. What you do have to decide is who sees prices at all:

```liquid
{% if customer.b2b? %}
  <span class="price">{{ product.selected_or_first_available_variant.price | money }}</span>
  <button name="add" type="submit">Add to order</button>
{% else %}
  <a class="btn" href="/account/login">Sign in to see pricing</a>
{% endif %}
```

Treat that condition as the rule: if the visitor is not B2B, the price should **never reach the HTML**, not merely be hidden with CSS. And when one company buys from several branches, `customer.current_location` lets you change shipping, minimums or messaging per location without duplicating templates.

## The limits, in one table

These are the numbers that shape the build. The first two depend on your plan; the rest are platform caps, identical on every plan that supports B2B.

| Limit | Basic / Grow / Advanced | Shopify Plus |
| --- | --- | --- |
| Active catalogs | 3 across all B2B markets | Unlimited |
| Catalog assignment | Through B2B markets | Direct to company and location |
| Companies | Unlimited | Unlimited |
| Locations per company | 10,000 | 10,000 |
| Customers per company | 10,000 | 10,000 |
| Catalogs per location | 25 | 25 |
| Customers per location | 50 | 50 |

Note the apparent contradiction between the first row and the sixth: a location accepts up to 25 catalogs, but without Plus you can only have 3 active in the whole store. The 25 is a platform cap; the 3 is your plan. The second one is the one that hurts.

## Three catalogs: what fits and what doesn't

Three catalogs are enough for a **tiered** price structure, which is how most brands actually work:

1. Wholesale (list price minus a percentage).
2. Distributor (one step down, with higher minimums).
3. Key accounts or export.

Inside each catalog you still have room. You can set fixed prices per variant or a percentage off the whole list, and add **quantity rules** (minimums, multiples, maximums) and **volume pricing** (price breaks past a given quantity). None of that is Plus-only. A catalog with well-built volume breaks covers plenty of cases that look at first like they need a per-customer list.

What does not fit in three catalogs:

- **Account-by-account negotiated pricing.** If every distributor has its own deal, you need a list per account, and that is where the plan ends.
- **A different catalog per branch of the same company.** Without Plus you cannot assign a catalog directly to a location.
- **More than three real price lists.** "Real" meaning actually used: I have seen eight-tier price lists that, once you look at a year of orders, were two.

## Assignment through markets changes the build

This is the part that gets skipped, and it drives the most decisions. Without Plus, a catalog is not attached to a company: it is attached to a **B2B market**, and the companies in that market inherit it. With Plus you can do the opposite, assigning a catalog straight to a company or to one of its locations, and assigning several catalogs to the same one.

What that means in practice on Advanced:

- Your price segmentation has to line up with your **geographic** segmentation. If your three tiers are "wholesale Spain", "wholesale Portugal" and "distributor", all three are spent.
- Moving a customer between tiers means moving them between markets, with everything that carries in language, currency and tax.
- Rollouts (scheduling a catalog's status change) only exist for catalogs created for a market. A catalog assigned directly to a company cannot use them.

If sketching this on a whiteboard produces more than three combinations, you already have your answer about the plan.

## How to solve it without moving to Plus

In order of how little technical debt it leaves behind:

**1. Use volume before you ask for another catalog.** Check whether the difference between two customers is *price* or *quantity*. If it is quantity, volume breaks inside one catalog handle it, and the buyer sees the incentive to order more.

**2. Organise by market, not by customer.** Build the three catalogs as three clean tiers and move each company into the market it belongs to. Boring, and it ages best.

**3. A public App Store app if you need per-account discounts.** Here is the detail almost nobody mentions, and it belongs in the quote before the work starts: *only stores on a Shopify Plus plan can use custom apps that contain Shopify Functions*. A Function written for your store, with your per-company discount rules, **is not an option on Basic, Grow or Advanced**. What you can use is a public app that ships functions inside. The difference matters: with a public app you fit into its data model; with your own Function you define the model. If you want to see what a custom Function looks like from the inside, I have one published with its tests in [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab).

**4. Front-end work on the theme.** Most of what people want from a wholesale portal is not pricing, it is the **ordering flow**: a size table with stock and quantity per row, SKU search, quick order, reorder, hiding prices on screen when the buyer is on the warehouse floor with a customer next to them. None of that depends on the plan. It is exactly the portal I built for [Émolo](/en/projects/#emolo-b2b), a handmade jewelry brand, on their existing theme and without Plus: one Liquid condition decides access, a Liquid-rendered order table handles quantities, and the whole order goes out in a single cart call. That pattern, rebuilt on Dawn with no client code in it, is published as [shopify-b2b-order-portal](https://github.com/NicolasShopiDev/shopify-b2b-order-portal): the access condition, the catalog's quantity rules applied to the input itself, and the single cart call.

## When Plus genuinely pays for itself

Not for being bigger. For one of these five reasons:

1. You need **more than three price lists** in real use.
2. You negotiate **per account**, not per tier.
3. One company needs **different catalogs per branch**.
4. You need **custom Functions**: cart rules, line transformations, payment or delivery customisations written for your business.
5. You need to change the **checkout** beyond what a public app allows.

Tick one and the conversation stops being technical and becomes arithmetic: the plan against the workaround plus its upkeep. Tick none, and staying on Advanced while spending that budget on the ordering flow will return more than the upgrade.

## Where to start

The order that produces the fewest surprises:

1. Write down your real price lists, with last year's orders in front of you. Not the ones in the sales PDF.
2. Count them. Three or fewer, and Advanced is enough.
3. Check those tiers don't clash with your markets (country, currency, language).
4. Decide how much of the value sits in price and how much in the ordering flow. It is nearly always the flow.
5. Only then pick a plan.

The catalog and company limits are in Shopify's documentation: [B2B on Shopify](https://help.shopify.com/en/manual/b2b), [catalogs](https://help.shopify.com/en/manual/b2b/catalogs) and [companies](https://help.shopify.com/en/manual/b2b/companies). The rule about custom apps containing Functions is in the [developer documentation](https://shopify.dev/docs/api/functions).
