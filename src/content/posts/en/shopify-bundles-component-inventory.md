---
pair: stock-packs-shopify-bundles
title: 'You sold a bundle... who deducts the pieces inside?'
seoTitle: 'Shopify Bundles Inventory: Components and Limits'
description: 'A commercial bundle and a preassembled box are not the same inventory model. Review components, quantities and what your ERP receives before manual corrections.'
keyword: shopify bundles component inventory
date: '2026-11-27'
tags: ['Shopify', 'Inventory', 'Integrations']
faq:
  - q: 'Can I calculate bundles by adding all available pieces?'
    a: 'No. Every composition must be complete. Required quantities matter; an extra piece cannot replace a different missing component.'
  - q: 'Do all bundle apps represent orders identically?'
    a: 'Do not assume so. Identify the app and check which references and quantities each system receives before designing the integration.'
  - q: 'Is a virtual bundle equivalent to preassembled box inventory?'
    a: 'Not necessarily. Define whether you sell a composition of loose units or prepared goods the warehouse tracks separately.'
cta:
  heading: 'Are bundles forcing manual inventory corrections?'
  text: 'Send one composition, its app and what your ERP expects. We can assess who calculates availability and who deducts each component.'
  label: 'Review my bundle inventory'
---

Before correcting a Shopify bundle's inventory, identify how its composition is represented and which system deducts its components. Calling a product “kit” does not establish an inventory relationship with its contents.

You sold a lovely set.

Now establish whether the warehouse sold one set, three pieces... or both simultaneously.

The bundle photograph cannot answer that question.

## Define what you physically sell

Is it assembled from units also sold individually? A prepared box with its own stock? Can buyers choose its composition?

Those answers define the working model. Where a warehouse reserves finished boxes separately, loose component totals do not automatically describe what can ship.

Hypothetical example: a kit contains two notebooks and one pencil case. Each item is also sold separately. Before choosing tools, decide whether kits are assembled after purchase or already exist as prepared goods.

## Count complete compositions, not a sum of units

The [bundle inventory and compatibility guide](https://help.shopify.com/en/manual/products/bundles/eligibility-and-considerations) explains availability through components and their required quantities. Components without tracking or configured to continue selling without stock are excluded from the documented calculation.

For our fictional kit, twelve notebooks and four pencil cases allow four complete kits, assuming those units are usable for that composition. Not sixteen kits or six: the fifth lacks a pencil case.

This illustrates composition, not verified location, reservation or actual store availability. Record exact variants and quantities per kit. “Blue notebook” and “any notebook” are different rules.

## Identify the app before following a recipe

The official [Shopify Bundles app](https://help.shopify.com/en/manual/products/bundles/shopify-bundles) supports fixed bundles and multipacks across all plans. Its help specifies overall inventory rather than location tracking, and component SKUs in orders. Do not generalise that behaviour to every app using “bundle” in its name.

Define what each team needs. Sales may need to recognise the kit sold; fulfillment needs to know what to prepare. If your ERP expects one reference, check what actually arrives before treating the connection as validated.

Writing the same SKU in three places cannot resolve the model. Participating systems need an understood mapping, rather than a visual match in a spreadsheet.

## Watch for two systems deducting the same stock

I suggest drawing the journey from purchase to preparation and marking who changes each quantity. If two systems claim responsibility for the same deduction, investigate that hypothesis before compensating with manual adjustments.

And for heaven’s sake, “I fix it every Friday” is not an integration. It is an exceptionally punctual unresolved task.

This does not establish a duplicate deduction in your store. Check records: intended composition, observed movement and the system producing it. If loose products show the same symptom, use the [ERP synchronisation diagnosis](/en/blog/shopify-erp-sync-errors/).

## Test what happens when something stops fitting

For the example, I would propose this matrix using an appropriate environment and procedure:

| Case | What to check |
| --- | --- |
| Sale of one loose item | Intended effect on available compositions |
| Kit purchase | References and quantities received for preparation |
| Insufficient component | Visible outcome and ability to purchase |
| Variant change | Composition still represents the agreed kit |
| Later correction | Records and quantities requiring review |

These are acceptance criteria, not executed tests. One successful purchase cannot validate modifications, returns or every channel.

Check official incompatibilities before offering the bundle through another journey. Do not assume support for preorders, subscriptions or quotes because a page allows adding to cart. This guide certifies no particular B2B workflow.

## Bring one composition to the review

Prepare its commercial name, components, variants, quantities, linking app and an example of what reaches the external system. Include who maintains composition when products change.

If you sell quantities of a single reference by case, the [case pack guide](/en/blog/sell-case-packs-shopify/) addresses a different decision. Here we address the pieces composing an offer and their inventory.

To assess a [Shopify ERP integration](/en/services/erp-integrations/), start with one kit and its expected journey. That is enough to locate undefined responsibilities without changing the whole warehouse.

Sources checked in November 2026. Example and matrix are hypothetical; no bundles were purchased and no client inventory movements were tested.
