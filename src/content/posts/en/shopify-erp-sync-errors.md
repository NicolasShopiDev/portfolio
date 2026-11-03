---
pair: "errores-sincronizacion-shopify-erp"
title: "Shopify and ERP disagree: diagnosing stock and order sync errors"
seoTitle: "Shopify ERP Sync Errors: Stock, Orders and Retries"
description: "Find why Shopify and your ERP disagree on stock, miss orders or create duplicates. A practical guide to ownership, traceability, retries and reconciliation."
keyword: "shopify erp sync errors"
date: "2026-11-03"
tags: ["Integrations","Shopify B2B","Orders"]
related: ["importar-tarifas-shopify-b2b","pago-aplazado-shopify-b2b"]
faq: [{"q":"Should I resend every order marked as an error?","a":"Not before checking the destination. A response can fail after the ERP creates the order. Look up its identifier before retrying to avoid duplicates."},{"q":"Will faster synchronization fix stock discrepancies?","a":"Not necessarily. If identifiers, reservations or ownership are wrong, faster updates can repeat the error. Define what each quantity represents first."},{"q":"What information helps diagnose a missing order?","a":"The Shopify identifier, time, external reference, connector response and destination lookup. Share anonymized examples and retain records without exposing credentials."}]
cta: {"heading":"Is your team manually correcting data that should synchronize?","text":"Tell me your ERP and connector, the failing field and a dated anonymized example. I can assess diagnosis and recovery.","label":"Tell me what does not match"}
---

If Shopify and your ERP disagree, start with one SKU or order and trace it between both systems. Before increasing synchronization frequency, decide who owns the field and what the compared values actually mean.

Ten available pieces and ten physical pieces are not necessarily the same measure. An order with a delivery error is not necessarily absent from the destination.

> Proposed diagnostic method dated 3 November 2026. Logs and quantities are illustrative, not records of a client incident.

## Choose one failure and preserve its sequence

Do not begin with “the integration sometimes fails”. Pick an affected order or variant, record the time and collect source and destination identifiers. Keep the state before manually correcting it.

Here is a proposed incident record:

| Field | Fictional example |
| --- | --- |
| Object | Test order 1042 |
| Expected action | Create one ERP sale |
| Send time | 10:05, with time zone recorded |
| Transport result | Response not received |
| ERP state found | Sale created at 10:05 |
| Next safe action | Recover reference and reconcile |

This explains why a resend button needs context. If the sale already exists, creating it again adds another problem.

## Define field-level ownership

“The ERP is in charge” is not enough. It may own physical inventory while Shopify records a new sale and the warehouse system confirms picking. Document responsibility by field and stage.

| Field | Decision to document |
| --- | --- |
| SKU | Stable identifier and mappings |
| Stock | Physical, reserved, available and location |
| Price | List, currency, effective date and exceptions |
| Order | Creator and reference preventing duplication |
| Payment | System confirming receipt and reflecting balance |

If both systems can overwrite the same field, define priority and retained audit information. A loop in which each side restores its old value will not improve with more retries.

## Check the connector's B2B model

Shopify documents [external integrations](https://help.shopify.com/en/manual/b2b/reports-and-automations/external-integrations) and warns that some apps do not correctly represent companies and catalogs. Connecting Shopify does not establish support for your wholesale structure.

Ask for a test order with buyer, company, location, pricing and terms. Inspect the ERP result. If only a name and email arrive, the key finance uses to identify the customer may be missing.

Do not treat free-text notes as a permanent mapping without deciding how they are maintained and validated. Notes may help investigation but do not replace stable entity relationships.

## Separate delay, bad mapping and incomplete operations

A delay involves correct data that has not yet arrived. A mapping error delivers data to the wrong object. An incomplete operation fails the agreed completion criterion.

They need different responses. Track queue age for delays. Correct transformation and inspect already affected objects for mapping errors. Confirm destination state before repeating incomplete operations.

A warning that labels everything an error does not support prioritization. A missing sale is more urgent than a description change waiting three minutes.

## Design retries that do not duplicate

As an architectural recommendation, use a stable external key and a result record. Processing the same event twice should not create two sales.

Do not assume an event is new because it arrives again. Do not identify orders by rounded time or amount either: legitimate orders can share both.

Recovery must cover the awkward case where the ERP accepts an operation and the connection fails before returning a response. Query or reconcile the outcome rather than treating every silence as permission to create again.

## For stock, reproduce a sale and a cancellation

Choose a low-activity variant during the test and record relevant quantities. In a controlled environment, exercise reservation, sale, cancellation and warehouse adjustment according to your model.

Do not compare screenshots without timestamps. One taken before a sale and another after it may correctly differ. Record location and unit too: pieces versus cases can make comparisons meaningless.

For packs, define component deduction. The [case-pack guide](/en/blog/sell-case-packs-shopify/) helps clarify the sales unit before blaming the connector.

## Add reconciliation as well as alerts

An alert identifies a failure; reconciliation compares what should exist with what exists. I would propose reports of orders missing destination references, duplicates, differing totals and excessively stale updates.

Give the report an owner and a possible action. “37 errors” without detail forces the team to investigate from scratch. Include identifier, latest attempt, known cause and destination state when available.

Keep useful logs without unnecessary sensitive data. Investigating SKUs and quantities rarely needs complete buyer information or access credentials.

## What resolution means

Repeat the original case, a duplicate update and a failed response. Verify that the correction survives the next synchronization and reconcile previously affected objects.

Document ownership and recovery afterwards. If the only fix requires someone pressing a button every morning, you have created a manual task rather than a maintainable integration.

To assess a [Shopify ERP integration](/en/services/erp-integrations/), I need the journey and one reproducible example. That distinguishes a configuration correction from a workflow requiring redesign.
