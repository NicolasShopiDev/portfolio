---
pair: 'webhooks'
term: 'Webhooks'
aliases: ['webhook', 'webhook subscription', 'Shopify events']
category: 'api'
seoTitle: 'Shopify Webhooks: What They Are and How Not to Lose Orders'
description: 'A webhook is a notice Shopify sends your server when something happens in the store. What decides whether it works is not receiving it: it is handling failure.'
keyword: 'shopify webhooks'
answer: 'A webhook is an HTTP request Shopify sends to a URL of yours when something happens in the store: a new order, an updated product, a customer created. It is the right way to find out about changes, instead of asking the API every few minutes.'
related: ['admin-graphql-api', 'storefront-api']
updated: '2026-10-22'
---

The difference from a sync that polls every five minutes is twofold: you find out immediately, and you stop spending API budget asking about things that have not changed.

## What you have to do, without exception

**Verify the signature.** Every delivery carries an HMAC header computed with your app's secret. An endpoint that does not check it will accept orders invented by anyone who knows the URL. It is the security hole I have seen most often in integrations built in a hurry.

**Answer fast, work afterwards.** Shopify expects a response within a few seconds. If your endpoint starts writing to the ERP before answering, you end up timing out even though the work was done. The right shape is to store the notice, return 200, and process it from a queue.

**Assume duplicates.** The same event can reach you twice. If every notice creates an order in your system, you will end up with duplicates. Store the event id and discard what you have already processed.

## What happens when your server is down

Shopify retries for a while and, if it keeps failing, eventually removes the subscription. That is the scenario to design for: not "what if one notice fails?" but "how do I recover what I missed while I was down?". The answer is usually a sweep over the [Admin API](/en/glossary/admin-graphql-api/) covering the outage window.

The exact retry conditions are in the [webhooks documentation](https://shopify.dev/docs/apps/build/webhooks).
