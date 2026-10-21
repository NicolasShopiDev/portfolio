---
pair: 'ajax-cart-api'
term: 'Ajax Cart API'
aliases: ['Cart API', 'cart.js', 'cart/update.js']
category: 'api'
seoTitle: 'Shopify Ajax Cart API: update.js and Section Rendering'
description: 'The Cart API changes the cart from the theme without a reload. It takes several lines in one call and returns the HTML of the sections to repaint.'
keyword: 'shopify ajax cart api'
answer: 'The Ajax Cart API is the set of routes (/cart.js, /cart/add.js, /cart/update.js, /cart/change.js) a theme uses to read and change the cart without reloading the page. It accepts several lines in a single call and can return the rendered HTML of the sections that need updating.'
related: ['quick-order', 'admin-graphql-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

This is the API the whole order flow of a B2B portal rides on, and the one most often used wrong.

## update.js versus add.js

`add.js` adds. `update.js` sets absolute quantities. For a wholesale order pad, `update.js` is the right one, and not as a matter of taste: with absolute quantities, the first order, the top-up and the correction are the same request. With `add.js` you have to know what was there before, and that is where the mismatches start.

```js
await fetch('/cart/update.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ updates: { 4631: 12, 4632: 6 }, sections: 'cart-drawer,cart-icon-bubble' }),
});
```

## The `sections` parameter

This is the one that saves half the JavaScript. Instead of receiving the cart as JSON and redrawing it by hand, you ask for the theme's sections and get their HTML already rendered by Shopify, with prices formatted and strings translated. One `innerHTML` and you are done.

## Two details that cause tickets

- **Response order.** Several parallel calls can land out of order: the last response is not necessarily the last state. One call per action, with the lines batched together.
- **The bfcache.** If the user comes back with the browser's back button, the page can be restored with the old cart. Re-reading the cart on the `pageshow` event fixes it.

Documentation: [Ajax Cart API](https://shopify.dev/docs/api/ajax/reference/cart).
