---
pair: 'core-web-vitals'
term: 'Core Web Vitals'
aliases: ['LCP', 'INP', 'CLS', 'page experience metrics']
category: 'theme'
seoTitle: 'Core Web Vitals on Shopify: What to Measure and Fix'
description: 'Core Web Vitals are LCP, INP and CLS: load, responsiveness and stability. On Shopify all three usually degrade for the same reason, and it is not the theme.'
keyword: 'shopify core web vitals'
answer: 'Core Web Vitals are the three metrics Google uses to measure page experience: LCP (how long the main element takes to paint), INP (how long the page takes to respond to an interaction) and CLS (how much content shifts while loading). On Shopify all three are almost always degraded by app scripts and unsized images.'
related: ['liquid', 'sections-and-blocks']
updated: '2026-10-21'
verified: '2026-10-21'
---

They matter for two separate reasons, and it is worth not mixing them up. The first is that they are a ranking signal, small but real. The second, the one that actually moves money, is that a product page taking four seconds on a buyer's phone loses sales.

## Where the problems come from on Shopify

By frequency, in the stores I have audited:

1. **App scripts nobody uses any more.** The app gets removed from the dashboard and its `script_tag` or block keeps loading. It is the first thing I look at and there are almost always two or three.
2. **Images without `width` and `height`.** Each one is a CLS jump, and the jump lands exactly when the user is about to tap.
3. **The main image loaded late**, inside a carousel that boots with JavaScript. LCP goes through the roof even when the server responds fast.
4. **Theme JavaScript that blocks interaction**, usually by rebuilding the whole cart on every change instead of asking for the rendered section.

## How I measure it

Lighthouse is useful for comparing before and after, but what counts for Google is field data from real users. A store can score 95 in Lighthouse and still have bad Core Web Vitals if 70% of its visits come from a phone on a slow connection.

That is why the numbers published on [the code page](/en/code/) are measured against the deployed site, not locally.
