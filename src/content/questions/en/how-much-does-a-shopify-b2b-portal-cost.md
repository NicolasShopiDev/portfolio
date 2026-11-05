---
pair: 'b2b-portal-cost'
question: 'How much does a Shopify B2B portal cost?'
category: 'cost'
seoTitle: 'What a Shopify B2B Portal Costs, and What Decides It'
description: 'What drives Shopify B2B portal costs: three scope examples, recurring expenses and the information you need to compare development quotes.'
keyword: 'shopify b2b portal cost'
answer: 'The cost of a Shopify B2B portal depends on the plan, customer pricing, order flow and ERP integration. To compare quotes, separate the initial development from recurring fees and ask for a list of deliverables, exclusions and acceptance tests.'
related: ['what-to-ask-developer', 'need-app-for-b2b']
terms: ['b2b-catalog', 'shopify-plus', 'quick-order']
updated: '2026-11-05'
verified: '2026-11-05'
---

## The four things that move the price

**1. The plan, which is a separate cost.** Basic, Grow and Advanced allow up to three active catalog assignments across active B2B markets. One catalog assigned to two markets counts twice; counting price lists alone is not enough. Plus removes this limit and supports direct catalog assignments to company locations, according to [Shopify's B2B catalog documentation](https://help.shopify.com/en/manual/b2b/catalogs/index), checked in November 2026.

**2. How many price lists and how they are assigned.** Setting up [catalogs](/en/glossary/b2b-catalog/) with clean data differs from correcting SKUs, importing prices and handling customer exceptions. If you need [Functions](/en/glossary/shopify-functions/) in a custom app, Shopify requires Plus; public apps containing Functions can be used on any plan, with restrictions depending on the function. Source: [Shopify Functions availability](https://shopify.dev/docs/apps/build/functions), checked in November 2026.

**3. The order flow.** This is where most of the real work sits and it is what is almost never in the initial quote: a per-variant [order table](/en/glossary/quick-order/) with stock, SKU search, quantity rules on the field itself, reordering the last order, a location picker. Each of those can be dropped, and dropping them changes the price more than the plan does.

**4. Whether the ERP is involved.** A portal that reads inventory and prices from the ERP is a second project on top of the first. If nobody asks about the ERP on the first call, half the scope is missing.

## Three scopes with different costs

These are examples for comparing proposals, not packages with fixed prices or timelines:

| Scope | Deliverables to include in the quote | Excluded unless agreed |
| --- | --- | --- |
| Adapt the current theme | Wholesale access, price display and a purchase test with sample customers | New design, ERP sync and a custom order table |
| Portal with quick ordering | The above, plus a variant order table, SKU search and quantity validation | ERP integration, historical migration and unspecified rules |
| ERP-connected portal | Agreed order flow, data mapping, defined sync and error handling | Third-party connectors, licences and ongoing maintenance unless included |

Agree on a test order before accepting the work: which customer signs in, which price they see, which quantities they can buy and where the order should appear. For an integration, also define how a failure is detected and recovered.

## Initial development and recurring expenses

The quote should separate implementation and testing from the Shopify subscription, apps, connectors and support. I do not publish my own price range because the scope still needs defining; comparing a proposal with integration against one that only adapts the theme will not give you a useful price comparison.

## How to compare two quotes

Check that both describe the same plan, markets, price lists, screens, integrations and tests. Also ask for code and documentation deliverables, included support and how changes are quoted.

To scope your [Shopify B2B portal](/en/shopify-b2b-developer/), prepare your current plan, markets, an anonymised price list and order example, your ERP and the essential features. [Tell me about that scope](/en/contact/) so we can separate configuration, development and integration before quoting.
