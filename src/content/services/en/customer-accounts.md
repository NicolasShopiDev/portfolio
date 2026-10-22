---
pair: 'customer-accounts'
label: 'Customer accounts'
h1: 'Customer account area and extensions in Shopify'
pitch: 'Customers who reorder and manage their account without calling you'
topic: 'b2b'
glance:
  problem: 'Trade buyers who call to repeat an order, ask for an invoice or check what they still owe.'
  forWho: 'B2B brands whose customers order every week or every month through the store.'
  notFor: 'If you sell mostly to consumers: their account page gets opened once per order.'
  outcome: 'Your customers reorder, download invoices and check due dates on their own, without going through your team.'
  effort: 'Most of it is built in the theme and works without Plus. Custom customer account extensions do need Shopify Plus.'
lead: 'The account area is where a wholesale buyer lives: their history, their outstanding orders, their price tier, their location. I build that area with customer account extensions and the front-end that makes it useful instead of decorative.'
serviceName: 'Shopify customer account development'
serviceType: 'Ecommerce front-end development'
seoTitle: 'Shopify Customer Account Area | Nicolás Mateos'
description: 'Shopify customer accounts for B2B: order history, reordering, location picker, payment terms and customer account extensions on Plus stores.'
keyword: 'shopify b2b customer account'
cases: []
faq:
  - q: 'What does a B2B buyer actually want in their account?'
    a: 'Four things, in order: reorder the last order, see what is outstanding and when it is due, download invoices, and switch location. The rest is decoration.'
  - q: 'Do I need Plus for customer account extensions?'
    a: 'An extension written specifically for your store ships inside a custom app, and that requires Shopify Plus. A good share of the value, though, is achieved in the theme and without Plus.'
  - q: 'Can prices be hidden until the buyer logs in?'
    a: 'Yes, and it is the right thing to do: with the customer.b2b? condition the price never reaches the HTML of someone without a session. Hiding it with CSS does not count, because it is still in the page source.'
related: ['checkout-development', 'functions-development']
terms: ['checkout-extensibility', 'company', 'shopify-plus']
updated: '2026-10-21'
verified: '2026-10-21'
---

## Why it matters more in B2B than in B2C

A B2C customer visits their account once, to see where the parcel is. A wholesale buyer logs in every week: it is a work tool. If they cannot find what they are looking for, they do not go to a competitor, they phone — and your team pays for that call.

## What I build, in order of how much it gets used

1. **Reorder the last order.** The most used feature of any wholesale portal. A button that recreates the order in the cart, with its quantities, and flags whatever is no longer available.
2. **Outstanding balance and due dates.** If the company is on [payment terms](/en/glossary/payment-terms/), this is the first thing they check. It has to be there, and it has to match the invoice.
3. **Downloadable invoices**, where the buyer looks for them rather than in an email from two months ago.
4. **A [location picker](/en/glossary/company-location/)**, if they buy for several branches — and in the header, not buried in here: switching location can change every price in the cart.

## The detail about prices

The rule I repeat on every project: if the visitor is not B2B, the price **must not reach the HTML**. The Liquid condition on `customer.b2b?` is the right way; hiding it with CSS leaves the price in the page source, visible to anyone who looks and to any crawler.

## What does not depend on the plan

Almost everything above is built in the theme and works without Plus. What needs [Shopify Plus](/en/glossary/shopify-plus/) is custom-written account extensions, because they ship inside a custom app. It is worth knowing which part of the budget depends on the plan before promising it.
