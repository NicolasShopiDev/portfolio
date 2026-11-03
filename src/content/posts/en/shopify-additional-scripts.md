---
pair: scripts-adicionales-shopify
title: 'Shopify additional scripts: why your conversions dropped and how to get them back'
seoTitle: 'Shopify Additional Scripts: Get Your Conversions Back (2026)'
description: 'Since 26 August 2026, additional scripts no longer run on the Shopify Thank you page. How to move each one to a pixel, with code, and why you see fewer purchases.'
keyword: 'shopify additional scripts'
date: '2026-11-03'
tags: ['Checkout', 'Pixels', 'Analytics']
related: ['auditar-javascript-apps-shopify', 'cuentas-de-cliente-heredadas-shopify']
faq:
  - q: 'Why does Shopify no longer run my additional scripts?'
    a: 'Because the Thank you and Order status pages have been replaced by a new version that does not support them. The deadline for non-Plus stores was 26 August 2026, and the additional scripts section has been view-only since 28 August 2025. Tracking moves to pixels and visible content moves to blocks in the checkout editor.'
  - q: 'What replaces additional scripts for purchase tracking?'
    a: 'A pixel. If the platform has an official app with a pixel, such as Google & YouTube or Facebook & Instagram, you connect it from the app. If not, you write a custom pixel in Settings > Customer events that listens for the checkout_completed event and sends the purchase to the platform.'
  - q: 'Why do pixels report fewer purchases than my old scripts?'
    a: 'In markets that require consent, such as the European Economic Area and the UK, pixels only run when the visitor has accepted the permissions in their configuration, and additional scripts usually did not check. Shopify warns about this drop in its own help center. Part of the difference is purchases that used to be measured without permission.'
  - q: 'Does checkout_completed fire every time the customer opens the order page?'
    a: 'No. It fires once per checkout, usually on the Thank you page, so the first_time_accessed trick is no longer needed to avoid double counting. If you run post-purchase offers, it fires on the first offer page instead of the Thank you page.'
  - q: 'Can I reactivate an additional script?'
    a: 'Not once the pages have been upgraded. Shopify says a script can only be reactivated while the upgrade has not been completed. What you can do is take its content and rebuild it as a pixel.'
cta:
  heading: 'Did your conversions drop in late August?'
  text: 'I review Shopify tracking after the upgrade: what each script did, which pixel replaces it, what is counted twice and which number is the real one. Tell me which platforms you use and I will tell you what can be recovered.'
  label: 'Tell me about your store'
---

Because since 26 August 2026, stores without Shopify Plus run the new Thank you and Order status pages, and the code in **Additional scripts** no longer runs there. If your Google Ads, Meta or affiliate conversions dropped suddenly in late August, this is the most likely reason.

The fix is script by script: whatever measured purchases moves to a pixel, from an app or custom, and whatever displayed something on the page moves to a block in the checkout editor. And you should know from the start that, even if you do it right, a store selling in Europe will see fewer purchases than before. That is expected, and the reason is below.

> The facts in this article were checked against Shopify's help center and developer documentation in November 2026. Admin paths come from Shopify's help center, not from walking through a live admin: if a label does not match what you see, trust what you see.

## What changed and when

Shopify has been replacing `checkout.liquid` and everything attached to it with [Checkout Extensibility](/en/glossary/checkout-extensibility/). The last piece was the pages the buyer sees after paying, with two dates:

| Date | What happened |
| --- | --- |
| 28 August 2025 | Additional scripts becomes view-only, on every plan |
| 28 August 2025 | Upgrade deadline for Plus stores |
| 26 August 2026 | Upgrade deadline for non-Plus stores |

What broke is whatever lived in Additional scripts: the Google Ads conversion tag pasted by hand, the `fbq('track', 'Purchase')`, the affiliate pixel, the "how did you hear about us?" survey. The new page does not load any of it.

To see what was there, Shopify generated an **upgrade guide** for each store, under **Settings > Checkout**. It groups scripts by purpose (tracking and analytics, page customizations), suggests an app to replace each one when it finds a match, and lets you open each script with **View script**. What you cannot do is reactivate it: Shopify says a script can only be reactivated while the pages have not completed the upgrade.

I could not find in Shopify's help whether the content can still be read once the store has upgraded. If you no longer see it, the original snippet lives in each platform's account (Google Ads, the affiliate network's dashboard), which is where it came from.

## What each script did and what replaces it

Before writing any code, copy each script into a document and note what it did. There are usually four kinds:

| What the script did | What replaces it |
| --- | --- |
| Google Ads or GA4 conversion | Google & YouTube app pixel |
| Meta `fbq('track', 'Purchase')` | Facebook & Instagram app pixel |
| Affiliate, CRM or a platform without an app | Custom pixel |
| Text, survey or link shown on the page | App block in the checkout editor |

The first two rows are the most common and the least work: the official app already listens for the purchase and sends it with its pixel. If you had the app and the script, you were probably counting every purchase twice; Shopify warns about those duplicates.

Check the custom pixels tab before creating a new one, too. In February 2025, Shopify [converted into custom pixels](https://help.shopify.com/en/manual/promoting-marketing/pixels/pixel-migration) the Meta and Google Analytics tags that sat in the online store preferences without going through their app. In many stores they are still there, connected, next to the app pixel.

The third row is the one that takes work. It is the affiliate network that gave you an HTML snippet with `{{ checkout.order_id }}` inside, or the Google Ads account an agency manages with its own conversion action that nobody wanted to move to the app.

## The custom pixel that replaces a conversion script

A custom pixel is created in **Settings > Customer events**, on the custom pixels tab. You name it, click **Add pixel**, paste the code and connect it. It takes no HTML and no Liquid: only JavaScript, and the purchase data arrives in the event.

This is the equivalent of the Google Ads conversion tag that used to sit in Additional scripts:

```js
// Google Ads purchase conversion, in a Shopify custom pixel.
const AW_ID = 'AW-123456789';        // your account's conversion ID
const AW_LABEL = 'AbCdEfGhIjKlMnOp'; // label of the purchase action

const script = document.createElement('script');
script.src = `https://www.googletagmanager.com/gtag/js?id=${AW_ID}`;
script.async = true;
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', AW_ID);

analytics.subscribe('checkout_completed', (event) => {
  const checkout = event.data.checkout;
  gtag('event', 'conversion', {
    send_to: `${AW_ID}/${AW_LABEL}`,
    value: Number(checkout.subtotalPrice?.amount ?? 0),
    currency: checkout.currencyCode,
    transaction_id: checkout.order?.id ?? checkout.token,
  });
});
```

Three things in that code are easy to miss and decide whether the numbers match:

- **The amount.** I use `subtotalPrice`, without shipping or taxes, because that is what many of those scripts sent (`checkout.subtotal_price`). If yours sent the total, switch to `totalPrice`. It has to be **the same** as before: if you move from subtotal to total on migration day, conversion value goes up and the campaign looks better than it is.
- **The transaction ID.** `checkout.order.id` is the order's internal identifier, not the number you see in the admin (#1001). It stops Google from counting the same purchase twice. If your affiliate network needs the order number, the event does not carry it and you will have to talk to them.
- **`first_time_accessed` is no longer needed.** It was the Liquid trick to avoid firing the conversion every time the customer reopened their order page. `checkout_completed` fires **once per checkout**, according to the [event documentation](https://shopify.dev/docs/api/web-pixels-api/standard-events/checkout_completed). With one exception: if you run post-purchase offers, it fires on the first offer page, not on the Thank you page.

## What the sandbox does not allow

Custom pixels run isolated, in an iframe Shopify calls the *Lax sandbox*. That is why a pixel cannot hijack a button, as I explained in [how to audit the JavaScript apps inject](/en/blog/audit-shopify-app-javascript/). For conversion tracking it has three consequences:

- **It cannot see the page.** It cannot read the DOM, so anything the old script took from the page has to come from `event.data`.
- **It cannot render anything.** No banners, surveys or buttons. That goes in blocks.
- **The URL is not yours.** [Shopify's help](https://help.shopify.com/en/manual/promoting-marketing/pixels/overview) warns that the URL detected by scripts inside the sandbox is the sandbox's own. If an analytics tool records the page by itself, it stores an odd address. The real URL comes in the event, in `event.context.document.location.href`, and you have to pass it in yourself.

## Why you see fewer purchases even when everything works

There are two reasons, and neither shows up in the code.

**Consent.** In markets that require consent, which are the European Economic Area and the UK, a pixel only runs when the visitor has given the permissions its configuration asks for. By default, a new custom pixel asks for marketing and analytics. Shopify's own [help on the migration](https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/upgrade-thank-you-order-status/additional-scripts) warns that you will see fewer events, because consent was often not set up correctly in additional scripts.

For a European store, that means part of the "drop" is purchases from people who rejected cookies and were measured anyway. If your banner shows the reject button clearly, that part can be large. Do not fix it by removing the pixel's permission: talk to whoever handles your compliance and, if needed, use the platform's consent mode to model what is missing.

**The Order status page domain.** That page lives with customer accounts, and Shopify's help says that if your store uses its own domain, customer accounts must be on a subdomain of that same domain (for example, `account.yourstore.com`). Otherwise pixels and cookie consent do not work on that page, because consent was stored on a different domain.

## How to check it before calling it done

1. In **Settings > Customer events**, open the pixel and click **Test**. Your store opens with the *Shopify Pixel Helper*, which shows the events the pixel receives in real time. If it says the pixel is awaiting consent, accept cookies in the banner or use the button to give test consent.
2. Place a full test order and look for `checkout_completed` in the Pixel Helper.
3. Check on the platform that the conversion arrived, with its amount and currency. Google Ads takes a few hours to show it.
4. Repeat the purchase in a private window **rejecting cookies**. Nothing should arrive. If it does, the pixel is not respecting consent and the problem is a different one.

For debugging, a pixel that only logs what it receives saves a lot of time:

```js
analytics.subscribe('checkout_completed', (event) => {
  console.log('checkout_completed', event.data.checkout);
});
```

## Whatever displayed something on the page

If the script showed a message, a survey or a link, the replacement is a block in the checkout and accounts editor. According to [Shopify's documentation](https://shopify.dev/docs/apps/build/checkout/technologies), Thank you and Order status page extensions are available on every plan except Starter, unlike extensions on the information, shipping and payment steps, which are Plus only. The upgrade guide recommends an app for each customization it recognizes.

If what you need is very specific, such as a link to the invoice from your invoicing software, it is a checkout extension. The difference between buying one and having one written for your store is in [can I customise Shopify checkout?](/en/questions/can-i-customise-shopify-checkout/).

## Where to start

1. Open the upgrade guide and copy each script into a document, with one line on what it did.
2. For every platform with an official app, connect the app pixel and nothing else.
3. For the rest, one custom pixel per platform listening for `checkout_completed`, sending the same amount the script sent.
4. Test with the Pixel Helper, with cookies accepted and with cookies rejected.
5. Check your customer accounts domain.
6. Write down the date of the change: when someone compares September with July, it explains the difference.

Shopify sources: the [non-Plus upgrade guide](https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/upgrade-thank-you-order-status/upgrade-guide), [replacing additional scripts](https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/upgrade-thank-you-order-status/additional-scripts), [custom pixel code](https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels/code), [testing with the Pixel Helper](https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels/testing) and the [checkout_completed event](https://shopify.dev/docs/api/web-pixels-api/standard-events/checkout_completed).
