---
pair: precios-sin-iva-shopify-b2b
title: 'Prices without VAT for wholesale buyers on Shopify: why your exempt customer still sees them with VAT'
seoTitle: "Shopify B2B Prices Without VAT: Why They Don't Apply (2026)"
description: "A company's tax setting acts at checkout, not on the storefront. With VAT-inclusive prices, your exempt wholesale buyer pays full price. How to show net prices."
keyword: 'shopify b2b prices without vat'
date: '2026-10-27'
tags: ['Shopify B2B', 'Taxes', 'Catalogs']
related: ['shopify-b2b-sin-plus', 'pedido-minimo-shopify']
faq:
  - q: 'Can I show prices without VAT only to B2B customers on Shopify?'
    a: 'Not with a per-customer switch. Shopify decides whether prices show with or without VAT by market, not by who is signed in, and the tax setting on the company location only acts at checkout. The native way for a wholesale buyer to see the net price is a B2B catalog with fixed net prices.'
  - q: 'I set "Don''t collect tax" on the company and prices still show with VAT. Is that a bug?'
    a: "No, that's how it works. The location's tax setting is a rule for charging, not for display: the storefront doesn't read it, and Liquid can't read it either because the company_location object doesn't expose that value. You'll only see the change at checkout, and not always in the amount."
  - q: 'If I mark a customer as exempt and my store has VAT included in prices, do they pay less?'
    a: "No. Shopify's documentation says so explicitly: with VAT-inclusive prices, an exempt customer still pays the full list price. The tax line disappears; the amount stays the same. That's why an exempt customer needs a real net price, and the exemption alone isn't enough."
  - q: 'How many B2B catalogs can I have to separate net prices?'
    a: 'On Basic, Grow and Advanced, up to 3 active catalogs across all your B2B markets combined. Shopify Plus makes them unlimited and is the only plan that lets you assign a catalog directly to a company or to a location.'
  - q: "Does Shopify validate my European customers' VAT numbers?"
    a: "If you use Shopify Tax and the company location has an address in the European Union or the United Kingdom, the field shows as a VAT number and Shopify Tax validates it when you save. Whether the sale is exempt is a tax decision, not a store setting: that's for your tax advisor."
cta:
  heading: 'Do your wholesale buyers see the price that applies to them?'
  text: "I build B2B portals on Shopify where the price the buyer sees is the price they're charged: net catalogs, exemptions, volume tiers and a theme that shows them properly. Tell me how your store invoices and I'll tell you whether catalogs are enough or the theme needs work."
  label: 'Tell me about your store'
---

Because in Shopify a company's tax setting acts at checkout, not on the storefront: whether a price shows with or without VAT depends on the visitor's market, not on the customer who is signed in. And if your store's prices include VAT, the problem shows up in the money as well as on the screen: Shopify's documentation says that a customer marked as exempt, on VAT-inclusive prices, still pays the full list price.

The native, reliable way to show a wholesale buyer net prices is to put the net price in a B2B catalog as a fixed price. Everything else (metafields, theme conditions, dual-price apps) changes the number on screen without changing what gets charged, and the cart gives it away.

> The platform facts in this article were checked against Shopify's documentation on 27 October 2026. Plans and tax settings change every few months: if you're going to decide anything based on this, check again.

## Why "Don't collect tax" doesn't change the price on screen

Because it's a rule for charging tax. On the company location, under **Manage tax settings**, the **Tax settings** dropdown gives you 3 options: *Collect tax*, *Don't collect tax* and *Collect tax unless exemptions apply*. All 3 describe what Shopify does when it charges, not what the product page prints.

The storefront is decided somewhere else. Whether the displayed price includes VAT is set per market, and the option to adjust it automatically (**Dynamic tax display**, in the market's tax settings) works by region: Shopify compares the tax rate at your store address with the rate in the visitor's country. It doesn't check whether the visitor is a company.

Liquid itself proves it. `shop.taxes_included` is deprecated, and the reason the documentation gives is exactly this: whether prices include taxes is "dependent on the customer's country". Its replacement is `cart.taxes_included`, which doesn't know anything about companies either.

And even if you wanted to code around it, the data isn't there. The Liquid `company_location` object exposes `tax_registration_id`, `metafields`, `shipping_address`, `store_credit_account` and not much else. No property says whether that location collects tax. That's why every theme solution ends up needing a metafield that flags the location by hand.

## The warning that costs money

This is the paragraph I wrote the article for. Shopify's documentation on exemptions warns that if you mark a customer as exempt but use VAT-inclusive prices, the customer will still pay the full price of the product.

Here is what that means for a store in Spain with VAT included: a product at €121 with 21% VAT, sold to an exempt company, doesn't drop to €100. The tax line goes to zero and the total stays at €121. Your wholesale buyer pays 21% more than you think you're charging them, and the invoice shows no VAT to explain the difference.

That's why an exemption doesn't fix this case. An exemption removes the tax; it doesn't turn a gross price into a net price. For that you need a different price.

## The 4 ways to show a wholesale buyer the net price

Each mechanism changes something different, and the usual mistake is picking the one that only changes the screen.

| Mechanism | What it changes | Plans | Risk |
| --- | --- | --- | --- |
| B2B catalog with fixed net prices | The real price | All with B2B | Catalog limit |
| B2B market with its own taxes | The real price | All with B2B | Can't separate customers within the same country |
| Metafield and theme condition | Only the number on screen | All | Drifts out of sync with the cart |
| Dual-price app | Only the number, and sometimes a discount | All | You depend on the app at checkout |

"All with B2B" means Basic, Grow, Advanced and Plus, the plans where [Shopify B2B works without moving to Plus](/en/blog/shopify-b2b-without-plus/). The first 2 rows change what gets charged; the last 2 don't.

## How to set up the catalog with net prices

A [B2B catalog](/en/glossary/b2b-catalog/) takes 2 kinds of pricing: a percentage adjustment across all products, or a fixed price product by product. And there's one rule to be clear on before you start: once a fixed price is assigned, the catalog's overall adjustments stop applying.

That's exactly what you want here. The percentage adjustment won't do, because a 17.355% discount to take VAT out of a VAT-inclusive price leaves odd cents across half the store. What you want is the exact net: divide your selling price by 1.21 and enter the result as the fixed price.

The company location still needs its tax setting (*Don't collect tax*, or *Collect tax unless exemptions apply* with the right exemption), so checkout doesn't treat that net price as a gross one again. The 2 settings work together: the catalog sets the amount, and the location stops tax from being taken out of it.

Don't call the job done without a test order. Place one as the company's buyer and check 2 numbers at checkout: the subtotal should be the net price and the tax line should be zero. If the subtotal is net but VAT appears on top, the location setting isn't where you think it is.

Your plan's limits decide how far this goes. On Basic, Grow and Advanced you can have "up to 3 active catalog assignments across active B2B markets", and catalogs are assigned to B2B markets, not to companies. Shopify Plus is the only plan with unlimited catalogs and direct assignment to a company or a location. If crossing your VAT rates with your distributor price lists gives you more than 3 combinations, you'll hit the limit before you hit the budget.

And one trap people find late: if a company has several catalogs with the same product at different prices, Shopify shows the lowest. A net catalog sitting next to a wholesale price list catalog means the net price wins for everyone who has both.

## If your wholesale buyer is in your own country

This is where the native options run out, and it's worth saying plainly. A separate B2B market handles a foreign distributor well, because the market already changes taxes and currency. But if your store is in Spain and your exempt wholesale buyer is too, the visitor is in your local market and taxes display the same way for them as for a consumer.

I'm not the only one reading it this way. Shopify's developer forum has a thread from July 2026, [an Italian store on the Grow plan](https://community.shopify.dev/t/title-b2b-company-location-with-dont-collect-tax-still-sees-tax-inclusive-prices-on-storefront-same-country-exemption-only-applied-at-checkout/35868), with this exact case: a company location set to *Don't collect tax*, same country, and VAT-inclusive prices on the product page and in the cart. The answer was that there's no native setting, that Liquid doesn't expose the location's tax setting, and that the reliable route is a catalog with fixed net prices. It's still open as a product request.

## The theme workaround, and why I don't use it on its own

If you also want the product page to say "VAT not included" next to the net price, that part does go in the theme. Flag the location with a metafield and read it:

```liquid
{% assign net = false %}
{% if customer.b2b? and cart.taxes_included %}
  {% if customer.current_location.metafields.custom.no_vat.value %}
    {% assign net = true %}
  {% endif %}
{% endif %}

{% if net %}
  {{ variant.price | times: 100 | divided_by: 121 | money }} <span class="price__note">+ VAT</span>
{% else %}
  {{ variant.price | money }}
{% endif %}
```

It works, which is why it's tempting to stop there. Don't: that number exists only on the screen. The cart, checkout, the product page's JSON-LD and the product feed all keep the gross price, and the buyer sees one figure on the product page and another at checkout. If you sell with [different prices per customer](/en/questions/different-price-per-customer-in-shopify/), that mismatch is the first reason they'll email you.

Use it for what it's good at: the label next to a price that is already genuinely net. It's the same rule I follow in the [Émolo B2B portal](/en/projects/emolo-b2b/), where the price isn't hidden with CSS: the server doesn't send it unless the visitor is a company buyer.

## What no catalog fixes

This leaves 2 things out, and it's better to know them before you promise anything.

VAT number validation you do get: with Shopify Tax, a company location with an address in the European Union or the United Kingdom shows the field as a VAT number, and Shopify validates it when you save. What Shopify doesn't decide is whether the sale is exempt. That's a tax decision, made by your tax advisor, not by a dropdown.

And catalogs don't solve the recargo de equivalencia, a surcharge Spain adds on top of VAT for some retailers. A catalog sets amounts; the surcharge is a rate that goes on the invoice. If you sell to customers under the surcharge, check how your store invoices first, and then decide what price to show them.
