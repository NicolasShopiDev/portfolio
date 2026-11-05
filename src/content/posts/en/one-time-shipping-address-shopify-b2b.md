---
pair: "direccion-envio-puntual-shopify-b2b"
title: "Another shipping address in Shopify B2B: one-time delivery or new location"
seoTitle: "Shopify B2B One-Time Shipping Addresses: What to Check"
description: "Allow exceptional wholesale deliveries without confusing them with permanent company locations. What Shopify saves, shipping checks and ERP order handling."
keyword: "shopify b2b one time shipping address"
date: "2026-11-05"
tags: ["Shopify B2B","Shipping","Integrations"]
related: ["errores-sincronizacion-shopify-erp","shopify-b2b-b2c-misma-tienda"]
faq: [{"q":"Is a one-time address saved for future B2B orders?","a":"Shopify documents one-time addresses as applying only to that order, without storage for future use. Do not present the feature as a reusable destination address book."},{"q":"Should every third-party delivery become a company location?","a":"Decide according to the commercial relationship. An exceptional delivery and a branch with its own buyers and terms are different needs. Permanent records created for convenience can complicate maintenance."},{"q":"Does allowing another address guarantee shipping availability?","a":"No. Verify destination coverage and rates using the actual product and quantity. An editable address does not establish that checkout can offer a valid delivery method."}]
cta: {"heading":"Do distributors need delivery to different branches or job sites?","text":"Tell me whether destinations are exceptional or recurring, who authorizes them and what your ERP needs. I can assess address handling for your wholesale portal.","label":"Tell me where orders need to go"}
---

Shopify B2B can allow a one-time shipping address different from the company location. Before enabling it, decide whether the requirement is an exceptional delivery or a recurring branch. Those are different models whose data must remain meaningful to the warehouse and ERP.

The setting can remove address-change emails, but does not replace a commercial destination policy. Define who buys, where the goods go and which details identify the invoiced customer.

> Documentation reviewed in November 2026. Scenarios and tables are proposed acceptance criteria, without attributing tests or results to a real store.

## What a one-time address does and preserves

Shopify's [B2B checkout settings guide](https://help.shopify.com/en/manual/b2b/checkout-and-orders/checkout-settings) explains that the location address is fixed by default and another destination can be enabled for an order. One-time addresses are not saved for future purchases; a location has one saved shipping address. Buyers cannot edit an order's destination after placing it.

If your requirement is selecting among fifty stores every week, do not treat the one-time-address permission as complete coverage. Compare the expected journey with what the feature retains first.

Follow the official guide to the ship-to-address section of company or location checkout settings. Start with one controlled profile before extending the behavior across accounts.

## Separate recipient, buyer and invoiced customer

A distributor may purchase for delivery to a customer's job site. That destination does not necessarily become your commercial customer or replace billing information without review.

These are proposed design questions:

| Order detail | Question to resolve |
| --- | --- |
| Buyer | Which person may order? |
| Company location | Which commercial account owns the purchase? |
| Delivery destination | Where should this specific order arrive? |
| Invoiced customer | Which entity receives the invoice? |
| Delivery contact | Who coordinates with the carrier? |

Do not use recipient name as a unique company identifier in the integration. Two purchases by one distributor may have different recipients without creating two new customers.

## When to assess a permanent location

For recurring destinations with their own buyers, terms or responsibilities, assess a stable location model. For exceptional deliveries, examine whether order-level destination data suffices.

Do not create another company per delivery merely to make an address selectable. That shortcut can multiply records requiring pricing, permissions and reconciliation.

Document the criterion for the team managing accounts. A new employee, branch opening and third-party delivery should be distinguishable without interpreting ambiguous sales notes.

## An editable destination does not create shipping coverage

Shopify's [B2B shipping guide](https://help.shopify.com/en/manual/b2b/checkout-and-orders/shipping-methods) states that shipping profiles need zones covering B2B markets; without them, checkout does not display shipping options for those buyers.

Test a new destination with representative products and quantities. Another address in the same country may have different operational costs or restrictions. A visible input field does not establish coverage.

Define behavior when no rate exists: a clear explanation, commercial review or another agreed policy. Avoid returning buyers to the cart without explaining the destination or coverage problem.

## Inspect what the ERP and warehouse receive

The order destination and account master address should not overwrite each other accidentally. As an integration recommendation, maintain an explicit distinction and verify destination data.

Prepare a fictional Madrid company location shipping one order to Valencia. Check where Valencia appears and which Madrid details must still identify the account under your agreed model.

If the ERP only accepts existing addresses, decide how destinations are created or reviewed before fulfillment. A transfer ending in an invisible error queue is not a completed solution.

## Define correction of a wrong destination

Because the feature does not let buyers edit an order address after placing it, operations need an assisted correction route. Explain how to request a change and who checks whether picking has started.

A correction should not remain only in Shopify when the warehouse uses an earlier export. Verify propagation, cutoff times and treatment of an existing carrier label.

The [Shopify ERP diagnostic guide](/en/blog/shopify-erp-sync-errors/) helps define identity, traceability and recovery. Updating an address should not create another sale when synchronization repeats.

## An acceptance matrix for exceptional destinations

Fill in expected details and run cases relevant to your store. These are proposed tests, not observed results:

| Case | Check |
| --- | --- |
| Location without editing permission | Retains authorized destination |
| Location with permission | Buyer completes an allowed one-time destination |
| Second purchase | No promise of a stored one-time address |
| Covered destination | Expected delivery method and cost |
| Destination outside coverage | Clear explanation or review path |
| Exported order | Warehouse receives this order's address |
| Account master data | Not overwritten by exceptional delivery |
| Later correction | Managed before agreed cutoff |

Include a buyer with multiple locations and record which one was selected before entering another destination. Keep anonymized evidence of the same case in both systems to compare equivalent data.

## What to prepare for scoping

Bring a normal order, a third-party delivery and a recurring destination. Identify the invoicing system, fulfillment system and person authorizing changes.

For blended stores, include a retail journey. The [blended-store guide](/en/blog/shopify-b2b-b2c-same-store/) helps distinguish shared conditions from those requiring separation.

Those examples support a [Shopify ERP integration](/en/services/erp-integrations/) preserving each address's meaning. The result should reach the right destination without turning every delivery into a master-data problem.
