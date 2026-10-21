---
pair: 'customise-checkout'
question: 'Can I customise the Shopify checkout?'
category: 'checkout'
seoTitle: 'Can You Customise the Shopify Checkout?'
description: 'Yes, within Checkout Extensibility: logo, colours, fields and extensions at allowed points. You cannot reorder the steps or lay it out freely.'
keyword: 'customise shopify checkout'
answer: 'Yes, but within specific limits. You can change the logo, colours, fonts and block order from the editor, add content and fields with extensions at the allowed points, and change discounts, shipping and payments with Functions. What you cannot do is freely reorder the checkout steps or lay it out like a normal page.'
related: ['functions-without-plus', 'b2b-portal-cost']
terms: ['checkout-extensibility', 'shopify-plus', 'shopify-functions']
updated: '2026-10-21'
verified: '2026-10-21'
---

## What you can do, in order of difficulty

**No code and no Plus.** Logo, colours, fonts and block order from the checkout editor. It is more than people assume, and it covers what most brands mean when they say "we want the checkout to feel like ours".

**With a public app.** Notices, upsells, extra fields, tracking. There are App Store apps for nearly all of this and they work on plans without Plus.

**With custom development, and this is where Plus comes in.** Your own UI extension or a [Function](/en/glossary/shopify-functions/) written for your store ship inside a custom app, and that can only be installed with [Shopify Plus](/en/glossary/shopify-plus/).

## What you cannot do, and it is worth saying early

- Reorder or merge the checkout steps.
- Inject arbitrary JavaScript into the payment page.
- Lay the checkout out freely, as if it were a theme template.
- Edit `checkout.liquid`. That stopped being the route; what lived there gets rebuilt with extensions and Functions.

If a quote or a mockup assumes any of those four, the quote is wrong. Better to know that before showing it upstairs than after.

## What actually moves conversion in B2B

On a wholesale portal, the two changes that make the biggest difference are not visual. The first is stating the **payment terms** where the buyer sees them: if they pay in 60 days, saying so in the cart and at checkout cuts abandonment more than any trust badge. The second is letting them enter a **purchase order number** and having that reference reach the order, the invoice and the ERP.

Both fit in an extension, and both are the kind of thing buyers thank you for out loud.
