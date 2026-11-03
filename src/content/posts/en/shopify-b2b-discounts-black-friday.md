---
pair: descuentos-b2b-black-friday-shopify
title: 'Black Friday with wholesale buyers on Shopify: how to stop your discounts stacking on B2B prices'
seoTitle: 'Shopify B2B Discounts: Keep Black Friday Off Wholesale Prices'
description: 'With B2B on, a discount for all customers stacks on the wholesale catalog price. How to limit it by market, what does not fit, and how to test it first.'
keyword: 'shopify b2b discounts'
date: '2026-11-03'
tags: ['Shopify B2B', 'Discounts', 'Markets']
related: ['shopify-b2b-b2c-misma-tienda', 'precio-incorrecto-shopify-b2b', 'shopify-b2b-sin-plus']
faq:
  - q: 'Do Shopify discounts apply to B2B customers?'
    a: 'Yes, if discounts for B2B are active in your store. A discount eligible for All customers, Specific customers or Customer segments applies to consumers and wholesale buyers by default, on top of their catalog price. Since 23 June 2026 those discounts are turned on automatically for new B2B stores and many existing ones.'
  - q: 'How do I make a discount consumer-only?'
    a: 'In the discount eligibility, choose Markets and select your region market (your country, the EU or whichever you use) instead of All customers. A discount assigned to a region market does not pass to B2B markets. It works from the Basic plan on the new version of Markets.'
  - q: 'Can I limit a discount to a customer segment and a market at the same time?'
    a: 'No. Eligibility is by markets or by customer segments, not both. If you need both conditions, the native route is a code you only send to that segment, with market eligibility; finer rules need a discount app or, on Plus, your own Function.'
  - q: 'Can a wholesale buyer use an influencer discount code?'
    a: 'Yes, if the code is for all customers and B2B discounts are active: it applies on top of the catalog price. Assign the code to the consumer market and nobody with a company account can use it.'
cta:
  heading: 'Selling to consumers and wholesale in the same store?'
  text: 'I review Shopify stores with B2B before campaigns: which discounts reach whom, what wholesale buyers see in the theme, and what needs separating with an app or with Plus. Tell me what you are launching for Black Friday and I will tell you whether your wholesale prices are safe.'
  label: 'Tell me about your store'
---

If your store also sells wholesale with Shopify B2B, a discount created for *All customers* applies to your wholesale buyers too, on top of their catalog price. You avoid it in the discount eligibility: instead of *All customers*, you choose the consumer market. Since May 2026 that works on every plan from Basic on the new version of Markets.

This year the question matters more than ever, because of two dates: B2B reached Basic, Grow and Advanced in April 2026, and on 23 June Shopify turned on B2B discounts automatically for new stores and many existing ones. For quite a few stores, this will be the first Black Friday with both at once.

> The facts in this article were checked against Shopify's help center and changelog on 3 November 2026. Admin paths come from Shopify's help center, not from walking through a live admin: if a label does not match what you see, trust what you see.

## What happens, in numbers

The [B2B discounts documentation](https://help.shopify.com/en/manual/b2b/catalogs/discounts) is blunt about it: automatic discounts and discount codes apply as additional discounts on top of catalog prices, and in a blended store the ones eligible for *All customers*, *Specific customers* or *Customer segments* apply to both B2B and D2C customers by default.

A product with a €100 retail price, a [B2B catalog](/en/glossary/b2b-catalog/) at 40% off and a 20% automatic discount for all customers:

| Buyer | Starting price | With the discount |
| --- | --- | --- |
| Consumer | €100 | €80 |
| Wholesale | €60 | €48 |

If the product costs you €50, the consumer sale keeps a margin and the wholesale sale loses €2 per unit. And wholesale buyers order by the case: with [volume pricing](/en/glossary/volume-pricing/) in the catalog, the top tier is lower still before the discount.

The same goes for codes. The 15% code you give an influencer, if it is for all customers, can be typed in by any buyer with a company account.

If the odd price you see does not come from a discount, the step-by-step diagnosis (session, location, catalog, fixed prices, theme) is in [my wholesale buyer sees the wrong price in Shopify](/en/blog/wrong-price-shopify-b2b/).

## Why this year

Two 2026 changes meet in November:

- **2 April.** B2B reaches Basic, Grow and Advanced. Many stores that had no wholesale on Shopify before now have it, in the same store as consumers; what that means in general is in [B2B and B2C in the same Shopify store](/en/blog/shopify-b2b-b2c-same-store/).
- **23 June.** According to the [changelog](https://changelog.shopify.com/posts/b2b-discounts-are-now-available-by-default-on-new-stores), B2B discounts are on by default for new B2B stores and for existing ones with no active or scheduled discounts. Before, you had to ask support. The same notice points out that from then on, any discount for *All customers*, *Specific customers* or *Customer segments* applies to everyone, B2B included, unless you assign markets to it.

In other words: in a store that turned on B2B this summer, nobody decided that the Black Friday discount should reach wholesale buyers. It reaches them because that is the default.

## How to limit a discount by market

Market eligibility shipped on [7 May 2026](https://changelog.shopify.com/posts/assign-discounts-to-specific-markets) and is available from the Basic plan in stores on the new version of Markets. It works for automatic discounts and codes: amount off, percentage, buy X get Y and free shipping.

In each discount, in the eligibility section:

- **Consumers only:** choose *Markets* and select your region market (your country, the EU, whichever you have).
- **Wholesale only:** choose *Markets* and select the B2B market.

The detail that makes it work is in the [developer note](https://shopify.dev/changelog/posts/target-discounts-to-specific-markets): discounts do not inherit across market types. One assigned to a region market applies to its region sub-markets (from "Europe" to "Spain"), but never passes to a B2B market or a retail market. If you have a physical shop on Shopify POS, the same selector lets you run an online-only sale.

Before creating anything, filter the discounts list by market and by customer: the ones still on *All customers*, *Specific customers* or *Customer segments* are the ones that also reach wholesale buyers. Each market's page shows the discounts assigned to that market, and Markets has a preview to see how they resolve in context.

## What does not fit in one discount

Eligibility is **by markets or by customer segments, not both**. Shopify's note says so explicitly. So "20% for my VIP segment, but consumers only" does not fit in a single automatic discount.

Three ways out, from least to most work:

1. **A code instead of an automatic discount.** You send it only to the segment (by email, from your email tool) and assign it the consumer market. The segment controls who receives the code; the market controls who can use it.
2. **Two discounts.** One for the consumer market and a different one for the B2B market, if you want wholesale buyers to have their own campaign.
3. **A discount app or your own Function.** If the rule depends on the company (an extra 5% only for distributors, for example), it is custom discount logic. Public apps with functions inside work on any plan; a Function written for your store [can only be installed on Plus](/en/questions/can-i-use-shopify-functions-without-plus/).

## If your store had discounts in June

The automatic activation on 23 June did not reach B2B stores that had active or scheduled discounts at the time. In those stores, B2B discounts may still be off, and then the opposite happens: no discount reaches wholesale buyers, including the one you want to give them. [Shopify's help](https://help.shopify.com/en/manual/b2b/catalogs/discounts) says that if they are not available, the store owner can ask support to turn them on.

If you are not sure which case you are in, the test below tells you in ten minutes.

## How to test it before Friday

1. **Filter your discounts.** Any discount with no market assigned reaches everyone, wholesale buyers included.
2. **Set up a test buyer.** A test company, with a location in your B2B market and a contact using your own email with an alias (`you+wholesale@yourdomain.com`), so you do not touch real customers.
3. **Sign in as that contact and fill a cart.** Check that the automatic discount does not appear and that consumer codes are rejected.
4. **Do the same signed out.** The discount should be there.
5. **Complete the B2B order without paying.** If the test location has payment terms or submits orders as drafts for review, the order goes through without a charge and you cancel it afterwards.

Repeat the test on the day the campaign goes live, not only when you schedule it. A discount duplicated at the last minute with *All customers* undoes the work.

## What wholesale buyers see in the store

The discount does not apply, but the "20% off everything" bar is still in the header, and a wholesale buyer reads it as a promise. In the theme you remove it with the same condition that separates the rest of the B2B experience:

```liquid
{%- unless customer.b2b? -%}
  <div class="promo-bar" role="region" aria-label="Promotion">
    {{ section.settings.promo_text }}
  </div>
{%- endunless -%}
```

The same condition works for the campaign pop-up, countdown timers and "Black Friday" badges on product pages. If wholesale buyers have their own promotion, the `else` branch of that condition is where it goes.

## Apps that cannot see these discounts

A warning if you have apps that read discounts: according to the same developer note, API versions before 2026-07 **filter out discounts with market eligibility**, because they cannot represent them. An app that paints discount badges in the theme, syncs promotions with Google or your email tool, or reports on discounts may stop seeing your sale as soon as you give it a market.

Before launching the campaign, ask each one which API version it uses. If it is older than 2026-07, the discount exists and applies at checkout, but the app does not see it.

## This week's checklist

1. Open **Discounts** and review the eligibility of every active and scheduled discount.
2. Move the ones that should not reach wholesale buyers to the consumer market, influencer codes included.
3. If you want a wholesale promotion, create it separately for the B2B market.
4. Run the test with the company contact, signed in and signed out.
5. Hide campaign messaging from B2B customers in the theme.
6. Ask your discount and marketing apps which API version they use.

Shopify sources: [B2B discounts](https://help.shopify.com/en/manual/b2b/catalogs/discounts), [B2B discounts on by default](https://changelog.shopify.com/posts/b2b-discounts-are-now-available-by-default-on-new-stores), [discounts by market](https://changelog.shopify.com/posts/assign-discounts-to-specific-markets), the [developer note on markets](https://shopify.dev/changelog/posts/target-discounts-to-specific-markets) and [B2B on non-Plus plans](https://changelog.shopify.com/posts/key-b2b-features-now-available-on-non-plus-plans).
