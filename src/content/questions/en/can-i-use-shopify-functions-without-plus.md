---
pair: 'functions-without-plus'
question: 'Can I use Shopify Functions without Shopify Plus?'
category: 'functions'
seoTitle: 'Can You Use Shopify Functions Without Plus?'
description: 'Only the ones that ship inside a public App Store app. A Function written for your store lives in a custom app, and that requires Shopify Plus.'
keyword: 'shopify functions without plus'
answer: 'Only the ones that ship inside a public App Store app. A Function written specifically for your store lives inside a custom app, and only stores on Shopify Plus can install custom apps containing Shopify Functions.'
related: ['need-app-for-b2b', 'customise-checkout']
terms: ['shopify-functions', 'shopify-plus', 'quantity-rules']
updated: '2026-10-23'
verified: '2026-10-23'
---

## The difference that matters when quoting

It is a detail almost nobody mentions and it decides entire projects: with a public app you adapt to **its** data model, with your own [Function](/en/glossary/shopify-functions/) you set the model.

If your rule is "10% off above €500", there are App Store apps that do it and somebody else maintains them. If your rule is "10% off above €500, except on product family X, and only for the Spanish locations, and not stacking with volume pricing", no public app is going to model it the same way — and that is where Plus stops being a preference.

## What you can do without Plus

Rather more than it looks, and it is worth exhausting before changing plan:

- **[Quantity rules](/en/glossary/quantity-rules/)** in the catalog: minimum, maximum and increment per variant. That is what forces full-case ordering, without a line of code.
- **[Volume pricing](/en/glossary/volume-pricing/)**: price breaks by quantity inside the catalog.
- **Native automatic discounts** for standard promotions.
- **Public apps** that carry Functions inside them, for discounts the above cannot hold.

Of the B2B projects that reach me asking for a Function, a good number are solved by the first two.

## When there is no alternative

When the rule looks at the **whole cart** and changes with who is buying or what is in it. Quantity rules are per variant: they do not know whether you are mixing two price tiers, whether one product requires another, or whether this particular company reaches its own minimum. A single order value minimum for every B2B buyer has been a no-code setting in Checkout Blocks on every plan since April 2026. Everything else needs your own validation, which means a Function, which means Plus.

If you want to see what one of those validations looks like from the inside before deciding, there is one published with its tests in [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab) and you can poke at it on [the home page](/en/).
