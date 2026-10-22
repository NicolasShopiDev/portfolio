---
pair: 'erp-integrations'
label: 'Integrations'
h1: 'Shopify integrations with ERPs and external systems'
pitch: 'Inventory, prices and orders in sync with your ERP, no copy and paste'
topic: 'integration'
glance:
  problem: 'Inventory, prices, customers and orders copied by hand between Shopify and the ERP, with errors and delays.'
  forWho: 'Stores with an ERP, warehouse or PIM that already owns the catalog or the orders.'
  notFor: 'If there''s already a connector for your ERP that covers what you need: it''s cheaper than a custom one.'
  outcome: 'Every record correct on both sides, with retries and a log of what fails instead of orders lost in silence.'
  effort: 'The long part isn''t the code: it''s deciding who owns each field and how references match. That comes first.'
lead: 'I connect Shopify to the ERP, warehouse or PIM you already run: inventory, prices, customers, orders and invoices. The hard part is never GraphQL, it is deciding who wins when both sides change the same field.'
serviceName: 'Shopify integration with external systems'
serviceType: 'Systems integration'
seoTitle: 'Shopify ERP Integration | Nicolás Mateos'
description: 'Shopify integrations with an ERP, warehouse or PIM: inventory, prices, orders and customers over the Admin GraphQL API, with retries and error logging.'
keyword: 'shopify erp integration'
cases: []
faq:
  - q: 'Custom app or an off-the-shelf connector?'
    a: 'If your ERP is one of the big ones and your data model is standard, an off-the-shelf connector is cheaper and somebody else maintains it. A custom integration earns its place when the model is not standard: B2B pricing per company, inventory per warehouse, SKUs that do not match.'
  - q: 'Can a Shopify Function query the ERP?'
    a: 'No. A Function makes no network calls. If a cart rule depends on ERP data, that data is synced into a metafield first and the Function reads it from there.'
  - q: 'How often does it sync?'
    a: 'It depends on the field. Inventory, as close to real time as the ERP can stand, with webhooks in the Shopify-to-ERP direction. Prices and catalog, in batches overnight, which is when you can retry without rushing.'
related: ['custom-apps', 'migration-to-shopify']
terms: ['admin-graphql-api', 'metafields', 'draft-order']
updated: '2026-10-21'
verified: '2026-10-21'
---

## The three decisions to make before any code

None of them is technical, and all three are expensive if left undecided:

**Which system owns each field.** If the ERP and Shopify can both modify inventory, you have to decide the direction and write it down. Almost every integration I have seen break had left this half-decided.

**What happens to what fails.** A rejected line cannot fail silently. You need retries, a log and somebody who looks at it. Without that, the failure shows up three weeks later as "we're missing an order".

**How things are identified.** The ERP's reference and Shopify's catalog SKU almost never match. That mapping has to live somewhere, and the usual home is a [metafield](/en/glossary/metafields/).

## What the platform brings

The [Admin GraphQL API](/en/glossary/admin-graphql-api/) has a budget per query and per time window: a sync that walks 20,000 variants one at a time eats it, and the same sync in batches does not. For large loads there are bulk operations, which take longer to write and are the difference between a nightly sync that finishes and one that stops halfway.

And in the other direction, webhooks: Shopify tells you about a new order instead of you asking every five minutes.

## In B2B there is one more field

A wholesale portal adds companies, their locations and their price tier. If the ERP decides which tier a customer belongs to, that assignment gets synced too — and it is worth deciding who may change it from Shopify: usually, nobody.
