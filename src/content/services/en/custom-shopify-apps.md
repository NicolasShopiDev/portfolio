---
pair: 'custom-apps'
label: 'Apps'
h1: 'Custom Shopify apps'
lead: 'Apps embedded in the Shopify admin with Node.js, Express and the CLI, for what no App Store app does: configurators, internal dashboards, catalog logic, or the container for your Shopify Functions.'
serviceName: 'Custom Shopify app development'
serviceType: 'Software development'
seoTitle: 'Custom Shopify App Development | Nicolás Mateos'
description: 'Custom Shopify apps embedded in the admin with Node.js and App Bridge: product configurators, catalog dashboards, automations and Function containers.'
keyword: 'custom shopify app development'
cases: []
faq:
  - q: 'When does a custom app make sense?'
    a: 'When the flow is yours and no App Store app fits without bending it: a product configurator with your own rules, a dashboard so the team can manage something Shopify does not model, or the container for a Function written for your store.'
  - q: 'Does a custom app need Plus?'
    a: 'The app itself, no. If it contains Shopify Functions, yes: only stores on Shopify Plus can install custom apps that carry Functions inside them.'
  - q: 'Where is it hosted?'
    a: 'Wherever suits you to maintain. For most cases a serverless function or a small container is enough. Hosting an internal app usually costs a few euros a month, and that is worth knowing before starting.'
related: ['erp-integrations', 'functions-development']
terms: ['admin-graphql-api', 'shopify-plus', 'metafields']
updated: '2026-10-21'
verified: '2026-10-21'
---

## The first thing I will ask

If what you need fits in a [metafield](/en/glossary/metafields/), a metaobject or an App Store app, you do not need a custom app. Your own app is code somebody has to maintain, update when the API version changes, and host somewhere. It earns its place when there is no alternative, not by default.

## What I usually build

- **Product configurators** with rules no generic app models: compatibility, measurements, mutually exclusive combinations.
- **Internal dashboards** embedded in the admin, so the team manages their own data where they already work instead of in a separate spreadsheet.
- **Automations** that read and write over the [Admin API](/en/glossary/admin-graphql-api/): recalculating, reclassifying, cleaning up.
- **The container for a [Function](/en/services/shopify-functions/)**, when the Function needs configuration and somebody has to be able to change it without touching code.

## How I build them

Embedded in the admin with App Bridge, so the app lives inside Shopify instead of being a separate tab with a separate session. Authentication by session token, the API over GraphQL, and the API version pinned — never "latest": an unpinned API version is an app that one day stops working without anybody having touched it.

And one thing I always say: a custom app needs an update plan. Shopify ships API versions every quarter and retires the old ones. If nobody is going to look at that app for two years, the project is better off not depending on it.
