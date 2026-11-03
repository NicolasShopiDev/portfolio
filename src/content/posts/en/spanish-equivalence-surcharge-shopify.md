---
pair: "recargo-de-equivalencia-shopify"
title: "Spanish equivalence surcharge on Shopify B2B: order, payment and invoice"
seoTitle: "Spanish Equivalence Surcharge on Shopify B2B"
description: "Design a Shopify B2B workflow for Spain’s equivalence surcharge: customer status, calculation, payment, invoice and ERP checks before automating the process."
keyword: "spanish equivalence surcharge shopify"
date: "2026-11-03"
tags: ["Shopify B2B","Tax","Integrations"]
related: ["pedidos-excel-portal-shopify","errores-sincronizacion-shopify-erp"]
faq: [{"q":"Does a B2B catalog prove the surcharge is correctly invoiced?","a":"No. The catalog sets prices. Separately verify tax treatment, the collected amount and the issued document breakdown."},{"q":"Can I apply one global percentage to every buyer?","a":"Do not do so without validating tax scope. Establish when it applies and to whom. A global change can affect transactions outside the regime."},{"q":"Is this an already tested automation I can install?","a":"No. This guide defines integration decisions and acceptance checks. Automatic calculations and order modifications need testing with your invoicing system and transaction-specific tax rules."}]
cta: {"heading":"Selling to Spanish retailers subject to the equivalence surcharge?","text":"Tell me how you identify these buyers, which system invoices them and how orders arrive. I can assess a technical workflow to validate alongside your tax adviser.","label":"Tell me how you invoice today"}
---

Handling Spain's equivalence surcharge in Shopify B2B requires buyer classification, approved calculation, the requested payment and final invoice to agree. Editing a price or adding a line does not, by itself, establish a correct end-to-end process.

The first technical decision is which system owns tax treatment and how it is preserved through collection and accounting. Gather an approved example order and invoice for your business before automating anything.

> Documentation consulted in November 2026. This guide defines an integration and its acceptance, not a surcharge workflow tested in a store. Your tax professional should validate the treatment of specific transactions. The topic concerns Spain, even though this version is in English.

## What needs checking on the invoice

Spain's Tax Agency explains that suppliers charge the surcharge alongside VAT, on the same base and separately on the invoice, where applicable. It also describes communication of regime status and a census lookup. See its [application guide](https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-iva-2025/capitulo-06-regimenes-especiales-iva/regimen-especial-recargo-equivalencia/aplicacion-recargo-equivalencia.html).

Acceptance must therefore include the issued document, not only checkout. A correct total can hide a breakdown interpreted differently by accounting software.

Do not infer regime status from a buyer's name or the word retailer. Prepare a validated classification and retain the information required to keep it current.

## Define the data representing treatment

I propose an internal record with validated tax status, date, owner and source system. These are not mandatory Shopify fields or a universal legal schema; they prevent an important decision living in a loose note.

Decide whether the ERP, invoicing software or another register maintains the information. If mirrored in Shopify, specify updates and behavior when missing.

An unchecked checkbox can automate an error for months. Set a policy for uncertain information: visible review before accepting the amount rather than silent assignment.

## Separate commercial price, tax and requested total

| Layer | Design question |
| --- | --- |
| Commercial price | Which price list and discounts apply? |
| Calculation base | Which concepts enter the approved rule? |
| VAT and surcharge | Which amounts must the tax system distinguish? |
| Collection | Which total does the buyer accept and pay? |
| Invoice | Does it represent the same transaction? |
| Accounting | Are codes and amounts reconcilable? |

Do not reuse a discount to represent a tax without checking the complete effect. Combining percentages in a price-list name does not resolve invoicing either.

Use figures calculated by your tax adviser or fiscal software as acceptance references. This guide does not set rates or determine which products are covered, avoiding a numerical example becoming a universal tax instruction.

## Choose a journey allowing review before payment

For unresolved conditions, assess order review. Shopify documents [B2B draft orders](https://help.shopify.com/en/manual/b2b/checkout-and-orders/draft-orders) and company-order review. That capability does not certify correct surcharge calculation or invoice presentation.

The specification should show where the final amount originates, what the buyer accepts and how later updates avoid unexpected balances.

If an app modifies the draft, define retry behavior. Reprocessing should not add another surcharge. Specify how previous calculations are recognized and what happens when quantities or discounts change.

## Check changes, credits and repeated processing

One straightforward purchase is insufficient. Prepare this matrix using business-approved expected values:

| Scenario | Evidence to inspect |
| --- | --- |
| Covered customer | Classification and expected amounts |
| Customer outside scope | No surcharge on order or invoice |
| Discount before confirmation | Base recalculated under approved rule |
| Quantity change | One calculation matching the final order |
| Integration retry | No duplicated concepts or documents |
| Credit or return | Consistent document and balance |
| Missing tax data | Visible review before finalization |

Keep order, payment and invoice for comparison. If several treatments apply, cover them in the test set. One SKU does not validate the whole catalog.

## Decide how the ERP receives it

A line named surcharge may arrive as a product, expense or unclassified concept. Do not assume the visible label is enough for fiscal recognition.

Ask the integrator to show resulting codes and documents. If Shopify captures a request and the ERP determines its final total, specify how that amount returns to the buyer before collection.

The [synchronization diagnostic guide](/en/blog/shopify-erp-sync-errors/) helps define identity, retries and reconciliation. Fiscal documents matter too: a duplicated sale can become two invoices requiring correction.

## What I would not present as a finished solution

I would not advertise a global percentage, an unchecked line item or a code fragment as universal. Nor would I promise that moving to Plus resolves the fiscal requirement by itself.

Technical scope should identify each system's responsibility and demonstrate the chosen journey. Without that evidence there may be a valid integration design, but not a verified finished implementation.

## What to prepare for an assessment

Bring an anonymized correct invoice, representative order, buyer classification and document-issuing software. Add returns, shipping and discounts requiring coverage.

That supports a [Shopify invoicing or ERP integration](/en/services/erp-integrations/) with acceptance agreed by finance. The result should be traceable from buyer to invoice, without a manual adjustment understood by only one person.
