---
pair: orden-productos-coleccion-shopify
title: 'You arranged the collection... but your customer sees another order'
seoTitle: 'Shopify Collection Product Order: What to Check First'
description: 'Separate saved positions, the visitor’s selected sorting and the prices being compared. Diagnose the difference before dragging the entire catalog around again.'
keyword: shopify collection product order
date: '2026-11-25'
tags: ['Shopify', 'Catalog', 'B2B']
faq:
  - q: 'Does a manual collection mean products are sorted manually?'
    a: 'Do not confuse membership with presentation. Check which products belong to the collection separately from its default sort order.'
  - q: 'Does price sorting use the buyer’s B2B price?'
    a: 'Current Shopify help specifies base prices, not B2B or market catalog prices. An unexpected sequence does not establish an incorrect price.'
  - q: 'Do I need an app when the order differs?'
    a: 'Reproduce and locate the difference first: admin, URL, selector or listing. Choosing a tool before diagnosis can introduce another rule to investigate.'
cta:
  heading: 'Does your wholesale catalog need a different presentation?'
  text: 'Tell me what each buyer should see first and send one representative collection. We can assess navigation, commercial rules and the theme.'
  label: 'Review my catalog presentation'
---

If a Shopify collection appears in an unexpected order, compare its saved sorting with the address and selection the visitor uses. For wholesale price sorting, also check which price determines the sequence: visible amounts alone are insufficient.

You spent a while arranging products carefully.

Open the store... and somebody appears to have shuffled the deck.

Before doing the work again, establish which order you are comparing.

## Membership and position answer different questions

“This collection is manual” may describe how you choose its members, rather than their presentation. Write two separate answers: which references belong and which should appear first.

The [collection layout guide](https://help.shopify.com/en/manual/products/collections/collection-layout) documents default sorting and manual movement through dragging or positions. Check current controls rather than treating an old pagination discussion as evidence of an ongoing limitation.

Record three references in their expected sequence, then check whether it remains saved when reopening the collection. This small observation distinguishes “I cannot save it” from “the storefront displays it differently”.

## Open the exact address, not a similar collection

A campaign link, a menu and an old browser tab can lead to different experiences. Copy the full address of the mismatching visit and inspect the selected sorting option.

The technical [collection documentation](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) explains that the `sort_by` URL parameter selects sorting. Finding it is a clue to investigate a visit's selection, not permission to strip parameters from every link.

I suggest comparing entry through the menu with entry through the problematic link, keeping context consistent. Record the initial sequence and displayed selection. A difference gives you something more precise than “it ignores sorting”.

This does not measure conversion or establish app interference. It makes the symptom reproducible.

## B2B price sorting can look surprising without a pricing fault

The same official help warns that price sorting uses base prices, rather than B2B or market catalog prices. The amounts a buyer sees therefore need not form an ascending sequence even with ascending sorting selected.

Hypothetical example: two references have different commercial conditions for one company. If their displayed prices reverse the relationship between their base prices, do not immediately conclude a discount was lost.

Determine the actual issue: an incorrect amount, or a sequence inconsistent with the buyer's expected criterion? For the former, use the [B2B price diagnosis](/en/blog/wrong-price-shopify-b2b/). For the latter, define the required rule and verify supported behaviour before promising customisation.

## If saved sorting changes by itself, record when

Stop repositioning the same item without recording anything. Note the time, saved selection and other people or processes that could edit the collection. This is a hypothesis to investigate, not an accusation against yesterday's app installation.

And for heaven’s sake, do not ask three people to fix it simultaneously. If each restores their own correct order, you have built a remarkably annoying human automation.

Before uninstalling tools or changing code, identify what maintains presentation and what it should preserve. A list of suspects cannot replace reproducing the change.

## Define what correct means

For a fictional collection, I would propose this record:

| Review | Evidence |
| --- | --- |
| Usual entry | Address from menu or campaign |
| Commercial criterion | What should appear first and why |
| Saved setting | Sorting selected in admin |
| Visible selection | Option and first references on the storefront |
| Price context | Buyer and catalog used |
| Maintenance | Person or process responsible for the rule |

Repeat the review on mobile and another listing page where available. Check what happens when a new reference arrives too: an attractive first page today does not establish who maintains it tomorrow.

The aim is a listing that helps buyers choose, rather than one resembling an admin screenshot. To assess a [Shopify B2B portal](/en/shopify-b2b-developer/), bring a collection and a specific commercial rule. “Make it look better” starts a conversation; “these buyers need these references first” gives us something to design.

Sources checked in November 2026. Example and record are hypothetical; no client collection was changed and no custom sorting implementation was validated.
