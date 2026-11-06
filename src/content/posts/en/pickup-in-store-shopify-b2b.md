---
pair: "recogida-tienda-shopify-b2b"
title: "Pickup missing in Shopify B2B checkout: what to check"
seoTitle: "Shopify B2B Pickup in Store: Why It May Be Missing"
description: "Retail buyers can collect but wholesale buyers cannot see pickup. Check B2B activation, locations, basket and segmentation before creating a free shipping rate."
keyword: "shopify b2b pickup in store"
date: "2026-11-06"
tags: ["Shopify B2B","Shipping","Checkout"]
related: ["direccion-envio-puntual-shopify-b2b","shopify-b2b-b2c-misma-tienda"]
faq: [{"q":"Is pickup in store enabled by default for B2B?","a":"Shopify’s help says it is initially disabled and the owner must request activation from support. Check this before blaming the theme."},{"q":"Is a shipping rate named pickup equivalent to the pickup feature?","a":"Do not assume equivalence. Inspect the recorded delivery method and fulfillment data, in addition to the visible label and price."},{"q":"Does a successful retail pickup test validate wholesale pickup?","a":"No. Compare both profiles using the same product and collection location. B2B activation and buying context need their own checks."}]
cta: {"heading":"Do wholesale buyers call to arrange collection instead of ordering online?","text":"Tell me your plan, collection locations and warehouse process. I can assess the B2B journey and its fulfillment and integration requirements.","label":"Tell me how customers collect orders"}
---

If a retail buyer can select pickup in store but a B2B buyer cannot, check company-buyer activation first. Then inspect collection location, basket and rules controlling options by profile.

A free shipping rate named pickup can conceal the symptom without correctly representing the operation. Define buyer expectations and fulfillment data before changing checkout.

> Documentation checked in November 2026. Scenarios are diagnostic and acceptance examples, not tests performed on a client store.

## B2B activation is a separate check

Shopify’s [B2B shipping guide](https://help.shopify.com/en/manual/b2b/checkout-and-orders/shipping-methods) says company-buyer pickup is disabled by default and the store or organization owner must request activation from support. The guide also distinguishes pickup from local delivery.

A retail checkout screenshot therefore does not establish wholesale availability. Record buying context and confirm that requirement before investigating apps or editing the theme.

If an old forum answer says B2B cannot offer pickup, compare it with current documentation. Discussions identify problems; they are not a current feature inventory.

## Separate services your team calls pickup

| Commercial service | Question to resolve |
| --- | --- |
| Collection from your store or warehouse | Which location prepares and hands over the order? |
| Local delivery to the buyer | Which journey and coverage are configured? |
| Delivery to a carrier collection point | Which integration selects and retains that point? |
| Conventional free shipping | Is this still a shipment to an address? |

This table proposes business distinctions, not features guaranteed on every plan or app. Avoid one label for services needing different preparation and data.

Buyer collection and delivery to their branch require different communications. A warehouse receiving only a shipping address needs a way to recognize the operation before creating labels.

## Inspect location and example products

Shopify documents [pickup configuration by location](https://help.shopify.com/en/manual/fulfillment/setup/delivery-methods/pickup-in-store), including a location fulfilling online orders and current checkout requirements. The guide also covers availability and stock transfers.

Begin diagnosis with one collection point and a variant whose inventory situation you can explain. Record where stock is held and how fulfillment should work. Do not change every product merely to make an option appear without understanding the change.

Then add the typical wholesale basket: several SKUs, business quantities and relevant destinations or locations. A minimal example establishes one part, rather than validating the entire operation.

## Compare B2B and B2C under equivalent conditions

Use the same product and collection point for a retail profile and a test company buyer. Record the latter’s selected commercial location and the step where options differ.

I propose this record:

| Detail | Purpose |
| --- | --- |
| Profile and company location | Establish buying context |
| Variant and quantity | Repeat the same basket |
| Intended pickup point | Avoid comparing different warehouses |
| Displayed options | Locate the difference |
| Active apps or rules | Investigate relevant restrictions |
| Resulting order | Verify recorded delivery method |

Do not blame a carrier rate solely because its presence coincides with the problem. Isolate the condition in a controlled environment and retain evidence for support.

## Review blended-store segmentation

The B2B guide says enabling pickup in a blended store makes it available to both customer types. It also states shipping profiles cannot restrict pickup exclusively to B2B. Assess compatible tools if separation is required.

Write down the locations each buyer should see. An industrial warehouse may serve distributors while a retail branch serves consumers; test that policy explicitly.

The [blended-store guide](/en/blog/shopify-b2b-b2c-same-store/) helps distinguish shared and separate conditions. Before installing an app, confirm its plan requirements and which option types it can hide.

## Why a rate label does not validate the operation

Older discussions suggest a zero-price rate. If considering that approach, inspect the method recorded on the order, communications and how the warehouse knows it should not ship.

A visible label does not prove native pickup was created. It also does not resolve a buyer selecting it expecting free delivery. Remove ambiguity before accepting the order.

I would not define success only as a shipping charge disappearing. The order must be prepared and handed over as agreed.

## Test communication and ERP handling too

Adapt this acceptance matrix to your business. Results are proposed rather than observed:

| Case | Required evidence |
| --- | --- |
| B2B with service enabled | Intended pickup point selectable |
| Retail buyer in blended store | Authorized options preserved |
| Point excluded for a profile | Not offered as a valid alternative |
| Typical multiline basket | Consistent availability and preparation |
| Buyer confirmation | Clear collection instructions |
| Fulfillment record | Identifies location; prevents accidental shipping |
| ERP receipt | Correct method and order reference retained |
| Cancellation or change request | Defined support process |

An address change is different from changing delivery service. The [one-time B2B address guide](/en/blog/one-time-shipping-address-shopify-b2b/) covers that complementary requirement.

## What to bring before rebuilding anything

Prepare your plan, activation confirmation, one variant, one pickup location and a test buyer’s exact journey. Include the equivalent retail result and relevant rules.

That supports assessment of a [Shopify B2B portal](/en/shopify-b2b-developer/) reflecting how delivery actually works. Checkout visibility is the starting point; acceptance ends when buyer and warehouse understand the same order.
