---
pair: auditar-javascript-apps-shopify
title: "An app can inject JavaScript that isn't in your theme: how to audit it"
seoTitle: 'Shopify Fake Checkout: Auditing the JavaScript Apps Inject'
description: "The JavaScript behind October's fake checkout wasn't in the theme: an app loaded it at runtime. The 4 ways code gets in, and how to audit each one."
keyword: 'shopify fake checkout'
date: '2026-10-28'
tags: ['Security', 'Apps', 'Themes', 'Checkout']
faq:
  - q: 'Has Shopify checkout been hacked?'
    a: "Nothing published points to Shopify's checkout. What the analyses of the October 2026 incident describe is code injected from third-party apps that intercepted the click on the checkout button and sent the buyer to a fake payment page on another domain before they reached the real checkout."
  - q: 'How do I check whether my Shopify store runs JavaScript I did not add?'
    a: 'Open a new private window with DevTools and the Network tab open, go through a product page and the cart, and check which domains serve JavaScript. In the console, `performance.getEntriesByType("resource")` filtered by scripts gives you the list of hosts, including the ones injected at runtime that do not appear in the HTML.'
  - q: 'Does uninstalling an app remove its code from the theme?'
    a: "Not always. Shopify's documentation warns that code an app injects into theme files can stay behind after you uninstall it, usually in `layout/theme.liquid` or in a snippet named after the app. You have to find it and remove it by hand."
  - q: 'Can a Shopify pixel hijack the checkout button?'
    a: 'No. Web pixels run isolated, in an iframe with the sandbox attribute or in a web worker, and the documentation says they cannot render UI or pull data by reading the DOM. The entry points that do run code on the page are the theme, app embeds and legacy script tags.'
  - q: 'What happens to script tags on 1 March 2027?'
    a: 'Shopify stops injecting them into the storefront, so any JavaScript an app loads that way will stop running. Since 1 October 2026 they can no longer be created or modified. If one of your apps depends on a script tag, it has to move its code to an app embed or a pixel before that date.'
cta:
  heading: 'Want to know what your store actually loads?'
  text: "I audit what apps run on a Shopify store: which domain serves each script, what's left over from uninstalled apps and what can be removed without breaking anything. You get a report on what loads today, what isn't needed and how much speed you gain by removing it."
  label: 'Tell me about your store'
---

Start with the app embeds in your theme, before the theme files. The JavaScript that sent buyers on several Shopify stores to a fake payment page in October 2026 was not in the theme code: a legitimate app loaded it at runtime, inside its own API response, which is why no review of the files could find it.

If you're here to find out whether it happened to you, the check is in the next section and takes 5 minutes. The rest is what you only need to learn once: how many ways third-party JavaScript gets into a Shopify store, and which of them can touch the checkout button.

> The platform facts in this article were checked against Shopify's documentation in October 2026. What I say about the incident comes from the technical analysis by [c/side](https://cside.com/blog/hulkapps-shopify-checkout-hijack) and a [developer forum thread](https://community.shopify.dev/t/the-october-shopify-checkout-hijack-made-affected-orders-look-completely-normal-worth-a-quick-check/39038) from 26 October, not from a Shopify statement.

## Check your store in 5 minutes

There are 7 steps, and you don't need to install anything:

1. Open a **new private window**. It has to be new: the code described in the analysis fired only once per browser session, so repeating the test in the same tab comes back clean even when it isn't.
2. Open DevTools, go to the **Network** tab and tick **Preserve log** so requests aren't cleared when the page changes.
3. Add a product to the cart and click the **regular checkout button**. Skip Shop Pay, PayPal and Apple Pay: express buttons take a different path and are no use for this test.
4. Look at the address bar as soon as the payment page loads. This test is worth twice as much if you run it today on a healthy store: write down the URL you see, with its domain and path, and you have a baseline to compare against on any day something looks off.
5. Go back to Network and look for domains you don't recognise, especially ones ending in `.top`, the extension the fake pages used.
6. In the **Console** tab, paste this. It returns every domain that has served JavaScript, including the ones injected at runtime that don't appear in the HTML:

```js
[...new Set(performance.getEntriesByType('resource')
  .filter(r => r.initiatorType === 'script')
  .map(r => new URL(r.name).host))].sort()
```

7. Then check the browser storage, where the incident's code left its mark:

```js
Object.keys(sessionStorage).concat(Object.keys(localStorage))
```

According to c/side's analysis, any key starting with `__ctf_` is a sign the code was there. If nothing shows up and the payment URL is yours, repeat step 1 in another private window and consider the test passed.

## Why it didn't show up in the theme

Because the file the store loaded was the right one. In the case analysed, the app's extension served its `hulkcode.js` from `cdn.shopify.com`, unmodified, and that file requested its configuration from the app's API. The response carried a custom JavaScript field with about 22 KB of code, which the app injected into the page on load.

That is what changes how you audit a store: the code was **data**, delivered in an API response. A hash, an integrity check or a diff of the theme against the repository saw nothing, because the file had not changed. In DevTools it appeared as an anonymous script with no source, the kind that is easy to accept without a second look.

And the effect on the store is what makes this hard to notice from the admin. The code intercepted the click on the checkout button, sent the buyer to a copy of the checkout on another domain, collected the card details and returned the buyer to the real checkout. The order came in as normal. There was nothing odd to see in the orders.

## The 4 ways JavaScript gets in

In a Shopify store, third-party JavaScript gets in through 4 places, and only 3 of them can run code on the page:

| Entry point | Where you see it | Does it touch the page? |
| --- | --- | --- |
| Theme code | Theme files (`layout/theme.liquid`, `snippets/`) | Yes |
| App embeds and app blocks | Theme editor, app embeds icon | Yes |
| Legacy script tags | Nowhere in the admin | Yes, until March 2027 |
| Web pixels | Settings > Customer events | No |

**Theme code.** This is the one everyone looks at, and the only one you can read in full. Shopify's [official guide to auditing third-party scripts](https://shopify.dev/docs/storefronts/themes/best-practices/performance/audit-remove-third-party-scripts) warns about something that applies to security as much as to speed: uninstalling an app doesn't always remove the code it added to the theme, and you'll usually find it in `theme.liquid` or in a snippet named after the app.

**App embeds.** These are the visible part of a [theme app extension](/en/glossary/theme-app-extension/), and you turn them on with a toggle in the theme editor, under the app embeds icon. This is the main way in today: Shopify is pushing apps towards it, the code is served from Shopify's CDN and, as October showed, what that code does depends on the configuration the app fetches from its own server at that moment.

**Legacy script tags.** The old route, being retired in stages: since [1 October 2026](https://shopify.dev/changelog/posts/online-store-script-tags-deprecation) they can't be created or modified, and on 1 March 2027 Shopify stops injecting them into the storefront. The awkward part is that the admin doesn't list them anywhere, and the [migration documentation](https://shopify.dev/docs/apps/build/online-store/script-tag-deprecation/storefront) says the `scriptTags` query returns *your app's* script tags. In practice, a custom app of yours won't show you anyone else's. Only the browser gives you the full list of what runs in your store.

**Web pixels.** You manage them in Settings > [Customer events](https://help.shopify.com/en/manual/promoting-marketing/pixels/managing-pixels), and here is what almost no checklist tells you: a pixel cannot hijack a button. App pixels run in a web worker and custom pixels in an iframe with the `sandbox` attribute, and the documentation says they cannot render UI or pull data by reading the DOM. Review them in case there's one you don't recognise, but a fake checkout doesn't get in this way.

That gives you the order for the audit: app embeds first, then the theme, script tags while they still exist, and pixels last.

## Apps can't touch the checkout, so the copy was elsewhere

This is the reassuring part, and it explains the shape of the attack. An app cannot put JavaScript inside Shopify's checkout: according to the [API documentation](https://shopify.dev/docs/api/checkout-ui-extensions), checkout extensions run in a web worker with no access to `window` or the DOM, and they can't see the HTML of the payment page.

That is why the fake payment page had to be on another domain. Nobody can add a card field to your checkout, so the only way to reach card details is to take the buyer out first, from the storefront, which is the part that does run third-party code.

What you can change in checkout, and on which plan, is in [can I customise Shopify checkout?](/en/questions/can-i-customise-shopify-checkout/).

## The 20-minute audit, every quarter

Everything above is the urgent part. This is what I leave set up in a store, and it's worth repeating every few months.

First, the domains that serve something on a product page, straight from the HTML Shopify delivers:

```bash
curl -s https://yourstore.com/products/a-product \
  | grep -oE 'src="https?://[^"]+"' \
  | sed -E 's|src="https?://([^/"]+).*|\1|' \
  | sort -u
```

That list is only the starting point: whatever is injected at runtime isn't in the HTML, and that is what the `performance.getEntriesByType` from earlier is for. Run both and save them with the date. Next time, compare the new lists against the old ones. The difference is what you're looking for.

Then the entry points, in order:

- **Active app embeds.** Turn off the ones from apps you no longer use. Every toggle left on is an app allowed to run whatever it wants on your storefront.
- **Theme files.** Search for the name of each app and each external domain that came up in the previous list.
- **Script tags.** If you have a custom app, `{ scriptTags(first: 50) { nodes { id src displayScope } } }` in the [Admin GraphQL API](/en/glossary/admin-graphql-api/) gives you its own. For everyone else's, use the browser.
- **Pixels.** Settings > Customer events: remove any whose owner you don't know.

And send one written question to every app vendor, the one that tells you which ones are serious: does your code fetch JavaScript from your API, or does my store only load what is in your extension? If it's the first, your store runs whatever they decide each morning.

It's the same audit I do when a store comes to me for speed: almost always, [what costs seconds](/en/services/core-web-vitals/) and what opens a security hole are the same app scripts nobody uses any more.

## If you find something

In this order, and without destroying evidence:

1. **Capture what you see.** The full URL of the fake page, the time, and the Network tab open. Without that, the app developer will ask you to reproduce it.
2. **Cut it off at the app and leave the theme alone**: disable its embed or uninstall it. If you touch the theme, you lose the evidence.
3. **Write to the developer and open a case with Shopify Support**, with the screenshots.
4. **Tell your payment provider.** If someone typed their card into a copy of your checkout, that person is your customer, and the odd charge will show up with your name next to it.
5. **Count the days.** If buyers' personal data was captured, that is a security breach, and when it puts those people at risk the GDPR gives you 72 hours to notify the supervisory authority (in Spain, the AEPD). Look into it on day 1, not day 4.

What doesn't help: switching themes, reinstalling the app to get a clean copy, or waiting to see whether orders keep coming in normally. Orders kept coming in normally. That was exactly why nobody noticed.
