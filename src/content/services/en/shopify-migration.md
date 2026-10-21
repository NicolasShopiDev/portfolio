---
pair: 'migration-to-shopify'
label: 'Migration'
h1: 'Migrating to Shopify from another platform'
lead: 'Migrations to Shopify from WooCommerce, PrestaShop, Magento or a custom build, with the front-end rebuilt and — the part that hurts most when skipped — the URLs redirected one by one.'
serviceName: 'Migration to Shopify'
serviceType: 'Ecommerce platform migration'
seoTitle: 'Migrate to Shopify From Another Platform | Nicolás Mateos'
description: 'Migration to Shopify from WooCommerce, PrestaShop or Magento: data, front-end, one-to-one 301 redirects and a check that you keep your rankings.'
keyword: 'migrate to shopify'
cases: []
faq:
  - q: 'Will I lose rankings?'
    a: 'Not if the redirects are done properly. Traffic loss in a migration almost always comes from the same thing: old URLs landing on a 404 or all redirected to the home page. Every URL with traffic or links has to go to its specific equivalent.'
  - q: 'Can old orders be migrated?'
    a: 'They can be imported as history, without real payment or fulfilment state. That is enough for the buyer to see what they bought and for reporting; it is not enough to process returns on those orders.'
  - q: 'How long does it take?'
    a: 'It depends on the catalog and on how many custom features existed. What is never fast is the URL inventory and the redirect map, and that is exactly the part you cannot cut.'
related: ['custom-themes', 'erp-integrations']
terms: ['liquid', 'metafields', 'sections-and-blocks']
updated: '2026-10-21'
verified: '2026-10-21'
---

## The order that causes fewest surprises

**1. URL inventory before anything else.** Before design comes up, I pull the list of URLs with traffic and with inbound links. That list decides the new store's structure, not the other way round.

**2. Data model.** What was a product, what was a variant and what was a custom field on the old platform. Whatever does not map onto Shopify natively goes into [metafields](/en/glossary/metafields/) or metaobjects, and that is decided before importing, not after.

**3. Catalog and history.** Products, variants, images, customers and orders as history.

**4. Front-end.** On a paid theme or a [custom one](/en/services/custom-shopify-themes/), with the sections your team will actually use.

**5. Redirects, one by one.** Every URL with value to its equivalent. Not to the home page: to its equivalent.

**6. Verification after launch.** A crawl of the new site looking for 404s and redirect chains, plus tracking rankings over the following weeks.

## What gets forgotten and then costs

The old platform's custom features. A PrestaShop module or a WooCommerce plugin that spent years doing something nobody remembers asking for. If it is not inventoried before the migration, it shows up the day after launch, usually phrased as "but we used to be able to...".

How I reduce that: list the features with the team that deals with customers, not only with whoever manages the website. The things that really matter are known by whoever takes the calls.
