---
pair: pedido-minimo-shopify
title: 'Shopify minimum order: how to require one on any plan without losing sales'
seoTitle: 'Shopify Minimum Order: How to Set One on Any Plan (2026)'
description: "Since April 2026 you can set a minimum order value on Basic, Grow and Advanced without code. How to set it up, what it doesn't cover and when you need a Function."
keyword: 'shopify minimum order'
date: '2026-10-23'
tags: ['Checkout', 'Shopify B2B', 'Shopify Functions']
related: ['shopify-b2b-sin-plus']
faq:
  - q: 'Can you set a minimum order on Shopify without Plus?'
    a: "Yes. Since 13 April 2026, the Checkout Blocks order limit validation works on Basic, Grow, Advanced and Plus. You set a minimum subtotal, and a maximum if you want one, for all customers or only for B2B companies, and checkout won't accept payment outside that range."
  - q: 'Can I set a different minimum order for each wholesale customer?'
    a: 'Not with Checkout Blocks, because its settings only distinguish between all customers and B2B companies. A per-company minimum needs a validation Function that reads the amount from a company metafield, and a custom Function requires Shopify Plus. Without Plus, the alternative is a public app that validates at checkout.'
  - q: 'Does the Shopify minimum order count units or order value?'
    a: "It depends on the mechanism. Checkout Blocks checks the subtotal amount. Quantity rules in B2B catalogs check units per variant (minimum, maximum and multiple) and don't add up different variants to reach the minimum."
  - q: 'Do Shop Pay or express checkout skip the minimum order?'
    a: 'The Checkout Blocks validation applies to every payment method, including Shop Pay and accelerated checkouts. What they do skip is a block built only in the theme, because the express checkout button on the product page goes straight to checkout without passing through the cart.'
  - q: 'Is it better to set a minimum order or to charge more shipping on small orders?'
    a: 'In B2B the minimum is usually part of the trading terms, and blocking payment makes sense. In B2C, a higher shipping rate below a certain amount covers the cost of the small order without losing the sale, and you can set it up on every plan with price conditions on your shipping rates.'
cta:
  heading: 'Does your minimum change by customer?'
  text: "I write cart and checkout validations for B2B stores: minimums per company, per market or per piece count across mixed sizes. Tell me how you calculate your minimums and I'll tell you whether Checkout Blocks is enough or you need a Function."
  label: 'Tell me about your store'
---

Yes, and since 13 April 2026 without Shopify Plus and without writing code. Checkout Blocks, Shopify's own checkout app, has an **order limit** validation that blocks payment when the subtotal is below a set amount, and it works on Basic, Grow, Advanced and Plus.

If you looked this up last year and the answer was "only with Plus or a third-party app", that was true: the feature launched in April 2025 for Plus only. Now it reaches every plan that has B2B.

It has one limit: Checkout Blocks gives you one minimum for everyone or one for B2B companies, and that's where the options end. If your minimum changes by distributor, by country or by what's in the cart, you need something else, and what that is depends on your plan.

> The facts in this article were checked against Shopify's documentation and changelog on 23 October 2026. Shopify changes its plans every few months: if you're going to make a decision based on this, check again.

## The four ways to set a minimum in Shopify

There are four mechanisms, and each one controls something different. The most common mistake is asking for "a minimum order" and setting up the wrong one.

| Mechanism | What it controls | Plans | Express checkout |
| --- | --- | --- | --- |
| Checkout Blocks | Order value | All with B2B | Blocked |
| Quantity rules | Units per variant | All with B2B | Blocked |
| Validation Function | Whatever you code | Plus, or public app | Blocked |
| Theme script | Only the cart | All | Skips it |

"All with B2B" means Basic, Grow, Advanced and Plus. The last row is the easiest to build and the only one that doesn't stop anything: a script in the cart that disables the checkout button until you reach the minimum. It works as a warning. The express checkout button on the product page (Shop Pay, Apple Pay, Google Pay) goes straight to checkout without passing through the cart, and so does a saved or shared checkout link.

## How to set it up in Checkout Blocks

Six steps in the admin:

1. Go to **Apps > Checkout Blocks**. If you don't have it, install it from the App Store.
2. Open **Functions** and click **Create function**.
3. Under **Validation**, choose **Order limit validation**.
4. Under **Assign to**, choose all customers or only B2B companies.
5. Under **Set order limits**, enter the minimum subtotal and, if you want, the maximum.
6. Save.

The seventh step is the one people forget: the function saves as **inactive**. Until you change the status to *Active* and save again, it doesn't block a single order. Place a test order below the minimum before you call the job done.

Three details from the documentation that change how you explain it to the sales team:

- The limit is measured on the **subtotal before gift cards and store credit**. A customer with a €300 subtotal and a €50 gift card pays €250 and, as far as Shopify is concerned, meets a €300 minimum.
- It applies to **every payment method**, including Shop Pay, accelerated checkouts and Shop Cash.
- You enter the amount in the store's currency and Shopify **converts** it to the buyer's local currency. There's no field per market, so €300 for Spain and €1,000 for export can't both live here.

## What Checkout Blocks doesn't cover

The settings have two scope options: all customers or B2B companies. That leaves out the minimums people ask for most in a wholesale portal:

- **A minimum per company.** The distributor at €1,000 and the corner shop at €300.
- **A minimum per market or per location.** Higher for export, for example, because freight costs more.
- **A minimum that only counts certain products.** So samples or the display stand don't count towards it.
- **A minimum piece count across variants.** "Minimum 12 pieces, mixing sizes and colours."

The last one is the most common in fashion and accessories, and the one that catches people out most. Catalog [quantity rules](/en/glossary/quantity-rules/) look built for it, but the documentation is clear: a rule set on one variant doesn't apply to the others, and the buyer can't combine variants to reach a minimum or a multiple. 12 T-shirts in 3 sizes are 3 lines of 4, and none of them reaches 12.

## When the minimum depends on the customer

With Plus, it's a cart and checkout validation Function written for your store. Each company's amount lives in a company metafield (`custom.minimum_order`), and the Function reads it and compares it with the subtotal. The input query asks for nothing else:

```graphql
query CartValidationsGenerateRunInput {
  buyerJourney {
    step
  }
  cart {
    cost {
      subtotalAmount {
        amount
      }
    }
    buyerIdentity {
      purchasingCompany {
        company {
          metafield(namespace: "custom", key: "minimum_order") {
            value
          }
        }
      }
    }
  }
}
```

And the function is 20 lines:

```js
const NO_CHANGES = { operations: [] };

export function cartValidationsGenerateRun(input) {
  // Checkout only: on add to cart, the first line is always below the minimum.
  const step = input.buyerJourney.step;
  if (step !== "CHECKOUT_INTERACTION" && step !== "CHECKOUT_COMPLETION") return NO_CHANGES;

  const company = input.cart.buyerIdentity?.purchasingCompany?.company;
  const minimum = Number(company?.metafield?.value);
  if (!minimum) return NO_CHANGES; // No company or no minimum: don't block.

  const subtotal = Number(input.cart.cost.subtotalAmount.amount);
  if (subtotal >= minimum) return NO_CHANGES;

  const remaining = (minimum - subtotal).toFixed(2);
  return {
    operations: [{
      validationAdd: {
        errors: [{ message: `Your minimum order is €${minimum}. You need €${remaining} more.`, target: "$.cart" }],
      },
    }],
  };
}
```

Two decisions in that function worth understanding before you copy it:

- **The `step` filter.** The validation also runs when the buyer adds products to the cart, and an error at that moment rejects the action. Without the filter, the first product someone tries to add is below the minimum and never gets in. The case-pack validation in the [Checkout Lab](/en/#lab) on the home page has the same filter for the same reason, with a fixed minimum for B2B; the code, with its tests, is in [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab).
- **The currency.** `subtotalAmount` arrives in the cart's currency and the metafield is a number with no currency. If a company buys in pounds, its minimum is stored in pounds.

Without Plus, you can't install this Function. It's the same rule I explained in [Shopify B2B without Plus](/en/blog/shopify-b2b-without-plus/): only Plus stores can use custom apps that contain Functions. What does work on any plan is a public App Store app that ships functions inside. Before you install one, ask one thing: does it validate at checkout, or does it only hide the cart button? If it's the second, it's the fourth row of the table.

## Warn in the cart before checkout blocks the order

The validation stops the order, but it comes late: the buyer is already trying to pay. To keep the sale, the cart has to say how much is missing before they try:

```liquid
{%- assign minimum = settings.minimum_order | times: 100 -%}
{%- if customer.b2b? and minimum > 0 and cart.items_subtotal_price < minimum -%}
  {%- assign remaining = minimum | minus: cart.items_subtotal_price -%}
  <p class="cart-minimum" role="status">
    Minimum order: {{ minimum | money }}. You need {{ remaining | money }} more.
  </p>
{%- endif -%}
```

`settings.minimum_order` is a `number` setting in `settings_schema.json`, in euros; Liquid works in cents, hence the `times: 100`. If the minimum is for all customers, remove `customer.b2b?`. And three details decide whether the warning is reliable:

- **The right subtotal.** Use `cart.items_subtotal_price`, which subtracts line-item discounts but not order discounts, the same as the `subtotalAmount` a Function reads. `cart.total_price` already subtracts order discounts: with a €300 minimum, a €310 cart and a 10% code, the cart would say €21 is missing on an order the checkout lets through. The Checkout Blocks documentation says "subtotal" with no further detail, so if you use order discount codes, place a test order with one.
- **Inside the section that already re-renders.** In Dawn and most current themes, the cart drawer is re-rendered with the Section Rendering API every time a quantity changes. If the warning sits inside that section, it updates on its own and you don't need JavaScript.
- **The amount lives in two places.** I haven't found a way to read the amount you set in Checkout Blocks from Liquid, so it ends up duplicated in the app and in the theme setting. Write it down wherever you document your price lists, because the day the minimum goes up someone will change one and not the other.

If you want, disable the checkout button until the minimum is reached, with the warning next to it. A grey button with no explanation ends in a call to the sales rep asking why they can't pay.

A warning in euros is no use if the buyer sees another currency: the `money` filter formats the number and doesn't convert it. In a B2B portal that only sells in euros there's nothing to do; in a multi-currency one, the theme threshold has to be converted or limited to the main market.

## In B2C, think twice

A hard minimum in a consumer store sends away anyone who wanted to spend €18. If the reason is what it costs you to ship a small order, there's a native option on every plan: shipping rates with a price condition. Orders under €40 pay €5.95 for shipping, and from €40 it's free. The buyer decides whether to add something or pay for shipping, and you keep the sale.

What you should remove is the old workaround: offering shipping rates only above the minimum. Below it, checkout finds no shipping method and the buyer assumes you don't ship to their address. With the Checkout Blocks validation available on every plan, that workaround has no reason to stay.

## Where to start

1. Write your rule the way you'd say it on the phone: "€300 for all wholesale customers", "12 pieces mixing sizes", "€1,000 for export distributors".
2. If it's one amount for everyone or for all of B2B: Checkout Blocks, on any plan. It takes minutes to set up; the testing is what takes time.
3. If it's units of a single variant: quantity rules in the catalog.
4. If it depends on the company, the market or which products are in the cart: a custom Function with Plus, or a public app that validates at checkout without Plus.
5. In every case, the cart warning that shows what's missing.

Shopify sources: [order value limits in Checkout Blocks](https://help.shopify.com/en/manual/checkout-settings/checkout-blocks/order-value-limits), the [13 April 2026 announcement](https://changelog.shopify.com/posts/checkout-blocks-order-value-limits-available-on-all-plans), [catalog quantity rules](https://help.shopify.com/en/manual/b2b/catalogs/quantity-pricing), the [cart and checkout validation API](https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation) and [Functions availability by plan](https://shopify.dev/docs/apps/build/functions).
