---
pair: 'performance'
label: 'Performance'
h1: 'Shopify speed and Core Web Vitals optimisation'
pitch: 'A store that loads fast on your customers'' phones'
topic: 'other'
glance:
  problem: 'A store that''s slow on phones, with Core Web Vitals in the red in real-user data.'
  forWho: 'Stores on any plan with heavy mobile traffic and apps piled up over the years.'
  notFor: 'If all you care about is the Lighthouse score: what counts for Google is field data.'
  outcome: 'A faster store for your customers, with the before and after measured the same way.'
  effort: 'It starts with an audit on real-user data. The best-value fix, removing scripts from apps you no longer use, carries no design risk.'
lead: 'I measure the store with real-user data, not just Lighthouse, and fix what actually costs seconds: app scripts nobody uses any more, unsized images, and theme JavaScript that blocks interaction.'
serviceName: 'Shopify performance optimisation'
serviceType: 'Web performance optimisation'
seoTitle: 'Shopify Speed Optimisation | Nicolás Mateos'
description: 'Core Web Vitals optimisation on Shopify: LCP, INP and CLS. An audit on real-user data, app cleanup and theme fixes, with a measured before and after.'
keyword: 'shopify speed optimisation'
cases: []
faq:
  - q: 'Can I get to 100 in Lighthouse?'
    a: 'On a real store with apps, almost never, and that is not the goal. What is achievable is passing all three Core Web Vitals on real-user data, which is what Google looks at and what the shopper notices.'
  - q: 'What is usually the problem?'
    a: 'By frequency: scripts from uninstalled apps that keep loading, images without width and height, the main image inside a carousel that boots with JavaScript, and the cart rebuilt by hand on every change.'
  - q: 'Do I need to change theme?'
    a: 'Almost never. In the audits I have run, most of the lost time is not in the theme: it is in what has been added on top of it.'
related: ['custom-themes', 'migration-to-shopify']
terms: ['core-web-vitals', 'liquid']
updated: '2026-10-21'
verified: '2026-10-21'
---

## Measure first, and measure what counts

Lighthouse is useful for comparing before and after under identical conditions. What decides your ranking is field data from real users: a store can score 95 in Lighthouse and still fail [Core Web Vitals](/en/glossary/core-web-vitals/) if 70% of its visits arrive on a phone with a poor connection.

So the audit starts with the real data and with knowing where your visits come from. Optimising desktop on a store whose traffic is 80% mobile is wasted work.

## The order I fix in

1. **Ghost apps.** The app is removed from the dashboard and its script keeps loading. It is the first thing I look at and there are almost always two or three. It is also the most profitable fix: removing weight carries no design risk.
2. **Images.** Declared dimensions, modern formats, the main one loaded early and outside any carousel that needs JavaScript to paint its first frame.
3. **Theme JavaScript.** Usually the cart: rebuilding it by hand on every change when you can ask Shopify for the rendered section instead.
4. **Expensive [Liquid](/en/glossary/liquid/).** Nested loops over large collections. The fix is almost always moving the calculation into a metafield.

## What I deliver

The before and after measured with the same method, the list of what was changed and why, and what I did not touch because the risk was not worth it. On [the code page](/en/code/) you can see this site's own numbers, measured against the deployed site rather than locally.
