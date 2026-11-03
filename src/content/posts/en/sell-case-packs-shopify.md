---
pair: vender-por-cajas-shopify
title: 'Selling case packs on Shopify: multiples, minimums and mixed variants'
seoTitle: 'Sell Case Packs and Quantity Multiples on Shopify B2B'
description: 'Set up full cases on Shopify B2B and distinguish per-variant multiples from mixed cases. What catalogs handle and how to test invalid order quantities.'
keyword: 'sell case packs shopify'
date: '2026-11-03'
tags: ['Shopify B2B', 'Catalogs', 'Shopify Functions']
related: ['precio-incorrecto-shopify-b2b', 'shopify-b2b-b2c-misma-tienda']
faq:
  - q: 'Can I sell in multiples of six on Shopify B2B?'
    a: 'Yes. Catalog quantity rules support increments per variant. Before configuring them, confirm that order quantities represent individual pieces and that a case contains six of the same variant.'
  - q: 'Does a minimum of six force customers to buy full cases?'
    a: 'No. A minimum and an increment express different conditions. With cases of six, seven units exceed the minimum but do not make a full case. Define the multiple as well and test that example.'
  - q: 'Can native rules fill a case by mixing sizes or colors?'
    a: 'Native catalog rules apply per variant without pooling different sizes or colors. A mixed case needs a pack model or validation that groups items according to your commercial rule.'
  - q: 'Do I need Plus for custom mixed-case validation?'
    a: 'Yes, if you implement it through a custom app containing Shopify Functions. Without Plus, assess a public app that uses Functions and supports your grouping rule. Verify its actual scope in your buying journey.'
cta:
  heading: 'Do your cases mix SKUs or vary by customer?'
  text: 'Tell me what goes into a case, what one unit means in Shopify, and which orders your warehouse should accept. I can assess whether catalog rules are enough or your B2B portal needs specific validation.'
  label: 'Tell me how you pack your cases'
---

To sell full cases of the same variant on Shopify B2B, configure catalog quantity rules with the appropriate increment and minimum. If a case mixes sizes, colors or SKUs, per-variant rules are not enough: first define how the units should be grouped.

The starting question is not which app to install. It is **what one unit means in your store and what your warehouse considers a full case**. Different answers produce orders that look right on screen but cannot be fulfilled as promised.

> Features checked against official documentation on 3 November 2026. The examples and acceptance matrix are design proposals. They do not represent tests performed on a client's store.

## A case can mean three different things

Before configuring anything, write down one valid and one invalid order using real SKUs. This table separates the models:

| Commercial model | Illustrative valid order | What needs checking |
| --- | --- | --- |
| Case of the same variant | 6 identical 500 ml bottles of one fragrance | Each variant fills its own cases |
| Mixed case | 3 bottles of one fragrance and 3 of another | The total for an allowed group fills a case |
| Fixed-composition pack | 2 small, 2 medium and 2 large items | The composition is respected, not just the total |

All three contain six pieces, but they are not interchangeable. A check that only totals six would accept six small items even when the agreement requires two of each size.

Also decide whether multiple cases, loose samples or sales-approved exceptions are allowed. Those answers belong in the scope, rather than appearing after development is finished.

## Decide whether Shopify counts pieces or cases

There are two possible models: quantity 1 means one piece, or it means one case. The choice affects prices, stock, fulfillment and the data reaching your ERP.

Consider this design example: a case contains six bottles and costs €48. If you sell pieces, quantity 6 at €8 represents that case. If you sell the case as an item, quantity 1 at €48 represents the same commercial purchase, but the order data differs.

Before choosing, ask the warehouse which SKU it expects and how bottle inventory is deducted. Calling a product “Case of six” does not establish component inventory handling. The name describes an offer; the relationship with stock still needs designing and verifying.

In the interface, I would show both measures when useful: “2 cases, 12 bottles”. Buyers should not have to guess whether the quantity selector counts cases or pieces.

## When native catalog rules are enough

Shopify includes quantity rules among its [B2B features](https://help.shopify.com/en/manual/b2b/getting-started/features). Start there when selling quantities of the same variant; a custom Function need not be the first step.

Under **Markets > Catalogs**, open the catalog and its product and pricing management. Add quantity rules for the product or variant: increment, minimum and, where needed, maximum. Save. Shopify's [configuration guide](https://help.shopify.com/en/manual/b2b/catalogs/quantity-pricing) documents the fields and workflow.

For six identical bottles, I would first write the requirement “accept 6, 12 and 18; reject 7”. Then configure and check that result with the appropriate B2B buyer. You are validating a commercial decision, not merely confirming that three fields have been filled in.

Work with a controlled catalog and set of SKUs before extending the change. Keep a list of modified items so the team can review what has been enabled.

## A minimum does not replace a multiple

A minimum answers “how many pieces must this order contain?”. An increment answers “in which steps can the buyer order them?”. Liquid exposes these as `min`, `max` and `increment` on the [quantity_rule object](https://shopify.dev/docs/api/liquid/objects/quantity_rule).

In your specification, minimum six with increment six expresses a different intention from minimum six with increment one. The second design allows seven, eight or nine pieces; the first calls for full cases.

If the opening order requires two cases, the example becomes a minimum of twelve pieces and an increment of six. Document accepted quantities: 12, 18, 24. Do not leave the interpretation in an ambiguous phrase such as “minimum order two”.

A minimum order value is a separate condition. If you also require €300 per order, specify and validate that threshold independently. Do not translate it into an approximate number of cases, because prices can change.

## What changes when buyers mix variants?

Native quantity rules work per variant. Shopify explains that different variants cannot be combined to satisfy their minimums or increments. See the [quantity rule documentation](https://help.shopify.com/en/manual/b2b/catalogs/quantity-pricing).

For a mixed case, I would prepare a different specification: which products can combine, the size of each group, which units are excluded, and whether a fixed composition is required.

One example of commercial logic would be “total the bottles in the fragrance group and require a quantity divisible by six”. This is a proposal, not a ready-to-install Function. Define how products are identified, how removed items are handled, and what happens with samples or packs that already contain multiple pieces.

If the group contains eleven bottles, the message could say “Add one bottle from this group to complete two cases”. That is more useful than “invalid quantity”: it explains what the buyer must change without changing their order automatically.

## Where a custom rule should be validated

A selector that moves in steps of six helps buyers, but does not replace order validation. For custom rules, the [Cart and Checkout Validation API](https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation) supports server-side errors and includes express checkouts.

Availability matters too: custom apps containing Shopify Functions require Plus. Other plans can use public App Store apps containing Functions. Check these conditions in the [Shopify Functions documentation](https://shopify.dev/docs/apps/build/functions).

Before selecting an app, ask it to demonstrate your valid and invalid examples, including mixed variants. “Supports minimums” does not establish whether it can total only the SKUs belonging to your case.

My [Checkout Lab](/en/code/) includes a B2B case-pack example you can explore. It is a site demonstration rather than a client case study: it illustrates per-line case validation and does not demonstrate a rule pooling different variants.

## Explain the rule before the buyer hits an error

Show the pack format close to the price and selector, before add-to-cart. For a piece-based model, wording such as “Ships in cases of 6. Price shown per bottle” removes two ambiguities at once.

Then check what happens on variant changes: another variant may have a different case size. Shopify provides a [guide to displaying quantity rules in themes](https://help.shopify.com/en/manual/b2b/store-customization/quantity-pricing), including updating variant information.

I would check the product page, quick order form, cart drawer and full cart. Do not assume they behave identically because they share a theme. Each entry point needs to communicate the rule and explain errors clearly.

## A small acceptance matrix for full cases

Fill in expected results before running the tests. These reflect the example of cases containing six pieces of the same variant, without exceptions:

| Case | Expected result in this example |
| --- | --- |
| 6 units of A | Accept one case |
| 7 units of A | Prevent completion of the invalid order and explain the required change |
| 12 units of A | Accept two cases |
| 3 of A and 3 of B | Reject if each variant needs its own full case |
| Quantity changed in cart | Preserve the full-case requirement |
| Another variant with cases of 4 | Apply its pack size and update the message |
| Retail buyer | Respect the intended B2C conditions for that store |
| Order received by ERP | Preserve expected quantities, sales unit and SKU |

For mixed cases, explicitly change the expectation in the fourth row and add an unauthorized combination. Include the purchasing methods your business uses. Testing online checkout does not establish behavior in POS or an external order-creation process.

Treat the implementation as complete when buyer, sales team and warehouse understand the same thing by a case. That agreement, the checks and the integration are part of [building a Shopify B2B portal](/en/shopify-b2b-developer/), just as much as the quantity selector.
