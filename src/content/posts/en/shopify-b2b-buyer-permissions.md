---
pair: permisos-compradores-shopify-b2b
title: 'Two buyers at the same company need not see the same orders'
seoTitle: 'Shopify B2B Buyer Permissions: Orders and Locations'
description: 'One buyer sees personal orders while another needs a location-wide view. Define B2B buyer access without confusing customer accounts with your store admin.'
keyword: shopify b2b buyer permissions
date: '2026-11-09'
tags: ['Shopify B2B', 'Customer accounts', 'Orders']
related: ['solicitud-alta-mayorista-shopify', 'direccion-envio-puntual-shopify-b2b']
faq:
  - q: 'Does a customer company manager need my store admin?'
    a: 'Separate buying tasks from store administration. Define the B2B account journey first; internal access does not replace designing that experience.'
  - q: 'Can job titles determine access on their own?'
    a: 'Translate titles into actions such as ordering, reviewing history or managing location details. Compare those needs with documented functionality and test appropriate profiles.'
  - q: 'Does hiding a visible section establish correct access?'
    a: 'No. Review permissions and journeys, rather than one screenshot. This guide proposes acceptance checks without certifying your configuration or customisations.'
cta:
  heading: 'Do several people need to buy for each customer company?'
  text: 'Tell me who is involved, the locations they buy for and the history each needs. We can assess account structure and the scope of your B2B portal.'
  label: 'Organise buyer access'
---

If two company buyers see different order histories in Shopify B2B, review assigned locations and contact permissions before investigating missing orders. Company membership alone does not describe each person’s tasks.

One person orders. Another reviews. A third calls because an order is missing.

You may be hunting an order that was never lost... while discussing different access scopes.

## Start with tasks rather than titles

“Accounts”, “purchasing” and “store manager” mean different things across businesses. Ask what the person must do and for which location.

Do they place personal orders, reconcile colleagues’ purchases or correct address details? Those answers support access decisions. An organisation chart does not configure anything by itself.

Hypothetical example: a distributor has two branches. Buyers order for their branch while one manager reviews both. Before giving everyone identical access for convenience, record individual needs.

## What Shopify distinguishes natively

The [B2B contact guide](https://help.shopify.com/en/manual/b2b/companies-and-customers/adding-customers) distinguishes **Ordering only**, for ordering and viewing personal order history at assigned locations, from **Location admin**, which adds other buyers’ orders at that location and editing billing and shipping addresses.

This is a specific distinction. It does not make a customer company manager your store administrator or establish support for every internal approval workflow.

Shopify’s [B2B plan table](https://help.shopify.com/en/manual/b2b/getting-started/plan-features) includes these location permissions on Basic, Grow, Advanced and Plus. Additional apps and extensions need their own availability checks.

## Separate the person from the buying location

Shopify’s [B2B account guidance](https://help.shopify.com/en/manual/b2b/customer-login-and-accounts) associates buyers with company locations; buyers assigned several choose which location to order for. Retain that context when investigating differences.

When someone says “I can see it”, ask which location they selected. Comparing screens without that detail may mean comparing different valid contexts.

A commercial location is also different from a one-time delivery destination. The [one-time B2B address guide](/en/blog/one-time-shipping-address-shopify-b2b/) handles that decision separately.

## Draw a matrix before changing permissions

For the fictional distributor, I would start with requirements. This is neither an approved assignment nor an executed test:

| Example profile | Question to resolve |
| --- | --- |
| Branch A buyer | Should they review only their personal purchases? |
| Branch A manager | Must they review colleagues’ orders for A? |
| Manager for both branches | Which tasks are needed in A and B? |
| Person changing jobs | Which assignments no longer make sense? |

Record who authorises each need at the customer company. A complete company directory is unnecessary; the relevant actions and scope are enough.

And for fuck’s sake, do not solve a missing order complaint by expanding everyone’s permissions without asking. A minor inconvenience may conceal a much larger access decision.

## Test what should not be possible too

Prepare test profiles and fictional orders. Check intended tasks and the journey for a buyer who should have a narrower scope. Avoid improvising with real employees’ shared credentials.

I propose five fields per case: profile, location, attempted action, expected outcome and observed outcome. A menu screenshot cannot replace following the journey.

Include customisations in the review scope. Removing a visible link does not establish what controls access to information. This article certifies no implementation and supplies no untested code workaround.

## When two permissions are not enough

“Can review orders” and “must approve orders before purchasing” are different requirements. Do not sell the former as the latter.

For hierarchies, spending thresholds or authorisation workflows, describe an order end to end and establish which parts your configuration covers. Another workflow or development may be needed; renaming a role cannot establish that it works.

The [wholesale account request article](/en/blog/wholesale-account-requests-shopify/) covers admitting a new company. This guide addresses people already buying for one.

## What you can clarify today

Choose an example company, two buyers and one location. Write each person’s required actions, then compare their current assignments without changing anything until you understand the difference.

This supports a [Shopify B2B portal](/en/shopify-b2b-developer/) matching the customer’s operation. Twenty impressive role names are unnecessary. People need appropriate, verified capabilities to do their work.

Sources checked in November 2026. Examples and matrix are proposals; no client-store access tests were performed.
