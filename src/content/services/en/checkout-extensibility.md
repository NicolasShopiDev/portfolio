---
pair: 'checkout-development'
label: 'Checkout'
h1: 'Shopify checkout customisation'
pitch: 'A checkout that asks for the data you need and enforces your rules'
topic: 'plus'
lead: 'UI extensions, validations that block payment, custom fields and shipping and payment rules, inside Checkout Extensibility. What can be done, I do; what cannot, I tell you before quoting.'
serviceName: 'Shopify checkout customisation'
serviceType: 'Ecommerce software development'
seoTitle: 'Shopify Checkout Customisation | Nicolás Mateos'
description: 'Shopify checkout customisation with Checkout Extensibility: UI extensions, validations, custom fields and shipping and payment rules on Plus stores.'
keyword: 'shopify plus checkout customisation'
cases: []
faq:
  - q: 'Can the checkout be laid out like a normal page?'
    a: 'No. Checkout Extensibility places extensions at allowed points and lets you change logo, colours, fonts and block order from the editor, but not freely reorder the steps or inject arbitrary JavaScript. If a quote assumes that, the quote is wrong.'
  - q: 'Do I need Plus to touch the checkout?'
    a: 'For the visual side and for public apps, no. For an extension or a Function written specifically for your store, yes: they ship inside a custom app, and that requires Shopify Plus.'
  - q: 'What happened to checkout.liquid?'
    a: 'It stopped being the route. What lived in checkout.liquid gets rebuilt with extensions and Functions, and in most cases half of what was there is no longer needed: they were workarounds the platform now covers.'
  - q: 'Can I ask for a purchase order number at checkout?'
    a: 'Yes, with a field in an extension, and it can be stored on the order so it reaches the invoice and the ERP. It is one of the things a B2B buyer asks for most.'
related: ['functions-development', 'customer-accounts']
terms: ['checkout-extensibility', 'shopify-plus', 'shopify-functions']
updated: '2026-10-21'
verified: '2026-10-21'
---

## What people actually ask for

It is almost never a redesign. In the projects that reach me, checkout gets touched for four reasons:

1. **To warn about something before paying.** A minimum that is not met, a product with a three-week lead time, payment terms the company already has.
2. **To ask for a piece of data.** Purchase order number, VAT number, the buyer's internal reference, a requested delivery date.
3. **To block.** So a cart the warehouse cannot fulfil cannot be paid for.
4. **To order methods.** Hiding or reordering shipping and payment options by cart, country or company.

All four fit inside Checkout Extensibility. What does not fit is moving the checkout steps or laying it out freely, and that is worth knowing before promising it upstairs.

## The pieces, and which one applies

- **The editor** for the visual side: logo, colours, fonts, block order. No code and no Plus.
- **UI extensions** to add content or fields at the allowed points of the checkout and the thank-you page.
- **[Functions](/en/services/shopify-functions/)** for behaviour: validations that block, discounts, availability and order of shipping and payment methods.

The difference that matters most when quoting: an extension that shows a notice is an afternoon; a validation that decides whether a cart can be paid for touches business rules, and the edge cases get written down before the code does.

## In B2B, two specific things

A wholesale portal's checkout is won on two details. The first is stating the payment terms where the buyer sees them: if they pay in 60 days, saying so in the cart and at checkout cuts abandonment more than any badge. The second is the purchase order: a professional buyer has to be able to enter their reference, and that reference has to reach the order.

## What I deliver

The extension or the Function with its configuration, tested on a development store against the carts that really cause trouble, and a written note on what can be changed from the admin without calling me again.
