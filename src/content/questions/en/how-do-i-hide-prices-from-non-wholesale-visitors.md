---
pair: 'hide-prices'
question: 'How do I hide prices from visitors who are not wholesale customers?'
category: 'b2b'
seoTitle: 'Hide Prices From Non-Wholesale Visitors in Shopify'
description: 'A Liquid condition on customer.b2b? keeps the price out of the HTML for visitors without a session. Hiding it with CSS does not work: it stays in the source.'
keyword: 'shopify hide prices b2b'
answer: 'With a Liquid condition on customer.b2b? around every price, stock badge and buy button. The rule is that if the visitor is not a logged-in B2B customer, the price must not reach the HTML: hiding it with CSS or JavaScript does not count, because the price is still in the page source.'
related: ['price-per-customer', 'new-theme-for-b2b']
terms: ['shopify-b2b', 'liquid', 'company']
updated: '2026-10-21'
verified: '2026-10-21'
---

## The condition, and where it goes

```liquid
{% if customer.b2b? %}
  <span class="price">{{ product.selected_or_first_available_variant.price | money }}</span>
  <button name="add" type="submit">Add to order</button>
{% else %}
  <a class="btn" href="/account/login">Log in to see prices</a>
{% endif %}
```

What matters is that this condition does not only belong on the product page. It has to be in **every** place a price reaches the HTML, and in a Shopify theme there are more of those than you would think: the collection card, search results, related products, the cart, the cart draft some themes print as JSON, the product structured data, and the Google Shopping feed if it is enabled.

The failure I find most often in audits is exactly that: the product page is properly protected and the collection listing still shows the wholesale price to anyone.

## Why CSS is not enough

If the price is printed and then covered with `display: none`, it is in the page source. Anyone can see it with "view source", any extension can read it, and a search engine can index it. On a wholesale portal that means a competitor can pull your entire price list in ten minutes without an account.

The same goes for JavaScript solutions that delete the price on load: between the HTML arriving and the script running, the price is there — and in the source it is there permanently.

## The case of one company with several locations

If the buyer can purchase for several [locations](/en/glossary/company-location/), knowing they are B2B is not enough: you have to know **which location** they are buying from, because the price tier can change. `customer.current_location` tells you, and the location picker is best kept visible in the header: switching location can recalculate the whole cart, and the buyer needs to notice.

## One extra that buyers ask for

A button to hide their own prices on screen. It sounds odd until a buyer explains they are standing in the warehouse with their phone out and a retail customer next to them. It is solved with a preference in `localStorage` applied in the `head`, before the page paints.
