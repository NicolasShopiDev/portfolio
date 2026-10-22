---
pair: 'scripts-to-functions'
label: 'Migration'
h1: 'Shopify Scripts to Functions migration'
pitch: 'Keep your discounts and rules working now that Scripts is gone'
topic: 'plus'
lead: 'Shopify Scripts stopped executing in June 2026. If your store had discounts, shipping or payment methods driven by a Script, that rule is not being applied today. I audit what each Script did, what is still needed, and rewrite it as a Function.'
serviceName: 'Shopify Scripts to Shopify Functions migration'
serviceType: 'Ecommerce software migration'
seoTitle: 'Migrate Shopify Scripts to Functions | Nicolás Mateos'
description: 'Shopify Scripts to Functions migration: an audit of what each Script did, what is still needed, and a rewrite with tests. Scripts stopped running in 2026.'
keyword: 'migrate shopify scripts to functions'
cases: []
faq:
  - q: 'What happens if I do not migrate?'
    a: 'Nothing visible, and that is the problem. Scripts stopped executing in June 2026: there is no error, the rule simply is not applied. A customer-tier discount that quietly stopped applying shows up in your margin, not in your dashboard.'
  - q: 'Is it just translating Ruby to JavaScript?'
    a: 'No. The model is different: a Function declares in its input query what data it needs and receives only that, it has an instruction budget, and it deploys as an app with versions. It is a short redesign, not a translation.'
  - q: 'How many of my Scripts will I actually need?'
    a: 'In the projects I have seen, half. Several of the most common rules are solved without code today: a tier discount is a B2B catalog and a case-pack minimum is quantity rules. That comes out of the audit before anything is written.'
related: ['functions-development', 'checkout-development']
terms: ['shopify-scripts', 'shopify-functions', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

## The order I work in

**1. Inventory.** Which Scripts existed, what each did and when it was last touched. On stores with a few years behind them there is usually one Script nobody remembers asking for.

**2. Culling.** For each rule, the question is whether it is still needed and whether the platform now covers it. The three most common Scripts were a discount by customer tag, hiding shipping based on the cart, and reordering payment methods. In B2B, two of those are solved without code today: a tier discount is a [catalog](/en/glossary/b2b-catalog/) and a case-pack minimum is [quantity rules](/en/glossary/quantity-rules/).

**3. Rewrite.** What survives gets written as a [Function](/en/services/shopify-functions/), with a tight input query and tests.

**4. Verification.** It deploys to a development store and runs against the carts that actually matter: the big order, the one mixing tiers, the one sitting right on the minimum.

## What changes versus a Script

Three things, and they are what force a redesign rather than a translation. A Script saw the whole cart; a Function receives only the fields its input query asks for. A Script had no visible budget; a Function does, and that rules out walking the catalog inside the code. And a Function deploys as an app, with versions and configuration, instead of being text saved in the admin: more work the first time, far less risk afterwards.

## The plan requirement

A custom-written Function ships inside a custom app, and that can only be installed on stores with [Shopify Plus](/en/glossary/shopify-plus/). If you had Scripts you already have Plus, so this point rarely blocks this particular migration.
