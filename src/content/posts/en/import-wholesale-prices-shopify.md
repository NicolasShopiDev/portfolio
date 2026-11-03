---
pair: "importar-tarifas-shopify-b2b"
title: "Import wholesale prices into Shopify: prepare and verify the CSV"
seoTitle: "Import Shopify B2B Prices: CSV Preparation and Checks"
description: "Prepare a Shopify B2B price import without mixing up variants, currencies or price lists. A practical process for samples, validation and recovery."
keyword: "import wholesale prices shopify"
date: "2026-11-03"
tags: ["Shopify B2B","Catalogs","Integrations"]
related: ["precio-incorrecto-shopify-b2b","errores-sincronizacion-shopify-erp"]
faq: [{"q":"Can I upload my supplier price sheet directly?","a":"Only after mapping it to the destination catalog format and SKUs. Check columns, variants, currency and price meaning first. Use a current export or the official sample as the format reference."},{"q":"Does a valid CSV guarantee the customer sees the right price?","a":"No. Review catalog assignment and run the buying journey with the right profile after importing. Saving a price and applying it are separate checks."},{"q":"How can I recover the previous price list?","a":"Keep a prior export, identify changed rows and rehearse restoration in a controlled catalog. Do not promise to reverse a whole import without knowing which fields it changed."}]
cta: {"heading":"Are prices spread across your ERP and several spreadsheets?","text":"Tell me where prices originate, how many variants you manage and how often they change. I can assess a controlled import or a maintainable integration.","label":"Tell me how you update prices"}
---

To import wholesale prices into Shopify, start with a current catalog export or the official sample, transform your data and test a few variants first. Verification finishes when the intended buyer receives the expected price, rather than when the importer accepts the file.

A price list combines product identity, amount, currency and recipient. Checking only that the price column contains numbers can leave a perfectly valid import assigning the wrong amount to a real variant.

> Proposed procedure based on documentation reviewed in November 2026. The tables illustrate preparation; they are not records of an import performed on a live store.

## Separate the working sheet from the import file

A sales spreadsheet may contain comments, negotiated adjustments and formulas. The platform import needs an exact structure. Keep both versions with their date and owner so each amount can be explained.

Shopify's [catalog and CSV guide](https://help.shopify.com/en/manual/b2b/catalogs/creating-catalogs) provides a sample and field descriptions. Use it instead of an old blog template. Check how blank cells are interpreted before editing an export.

Do not treat a general product CSV as a B2B price list. Two files containing SKU and price do not necessarily update the same data.

## Map identifiers before converting values

This is a proposed internal review table, not an import schema:

| Source reference | Destination variant | Source price | Expected price | Decision |
| --- | --- | --- | --- | --- |
| BTL-A-500 | Bottle A, 500 ml | 8.00 EUR | 8.00 EUR | Include |
| BTL-A-1000 | Bottle A, 1 l | 13.50 EUR | 13.50 EUR | Include |
| SAMPLE | Unresolved | 0.00 EUR | Pending | Do not import |

Check duplicates, missing references and variants sharing a display name. A commercial name does not replace stable identity. Document historical ERP mappings rather than making manual substitutions nobody can reproduce.

Decide how to handle unknown references. A controlled process should normally stop that row and report it. Silently creating a product can introduce unreviewed stock, images and selling conditions.

## Define what the price means before calculating it

Confirm currency, sales unit, tax inclusion, rounding and effective date. Two identical amounts can mean one bottle and one case. The CSV will not identify that business mismatch for you.

If a price derives from another list, preserve the formula in the preparation process. Avoid chains of manual currency conversions and discounts across different sheets. The result should be reproducible from the source value and approved rules.

Fixed catalog prices override its overall percentage adjustment, as the official documentation explains. Mark exceptions clearly: importing fixed values may change how a variant responds to later catalog-wide adjustments.

## Choose a sample capable of revealing errors

Do not select ten nearly identical SKUs. Include different price levels, an exception, an unknown reference and a different sales unit.

If the source uses decimal commas and your process expects decimal points, verify the conversion explicitly. Opening and resaving the file is not a meaningful test without inspecting final values. Check encoding, delimiter and headers against the current official sample too.

Write down expected results before importing. Comparing only against whatever ended up on the platform gives you no independent reference.

## Check the result as the intended buyer

After loading the sample, review the catalog, its application and the buying journey. Choose a company location that should receive it and another that should not. Check product page, quantity, cart and checkout.

| Check | Evidence to retain |
| --- | --- |
| Correct variant | Identifier and SKU |
| Correct amount | Expected and saved values |
| Correct profile | Company and location used |
| Relevant quantity | Price for a typical order |
| Excluded profile | Does not receive the new list |
| Invalid data | Rejected or quarantined rows |

If prices differ, do not reload everything immediately. Follow the [B2B price diagnostic guide](/en/blog/wrong-price-shopify-b2b/) to separate data, assignment and presentation.

## Design recovery before the full import

Keep the previous state and a change record. Define who authorizes the load, when it runs and what conditions require stopping it.

Recovery must cover affected fields. Restoring amounts alone will not reverse an accidental change to product availability or quantity rules. Rehearse in a controlled area and inspect values as well as scope.

If another system writes prices during the import, agree on a window or priority. Otherwise a manual correction can be replaced with the old price during the next synchronization.

## When a manual load stops making sense

A documented manual process may be enough for infrequent, reviewed changes. Daily files, multiple currencies or an ERP that owns pricing may justify an integration.

Shopify's [B2B integration guide](https://help.shopify.com/en/manual/b2b/reports-and-automations/external-integrations) distinguishes connectors, middleware and API-based development. Choose around your data and error recovery, as well as installation cost.

Ask for a demonstration containing a valid SKU, an unknown one and a repeated update. The integration should report changes and failures. A completed label without detail is difficult to maintain.

## What to bring before asking for help

Prepare an anonymized source sample, a current export and the assignment rule for each price list. Establish which system owns prices and when changes become effective.

That supports a realistic assessment of a [Shopify ERP integration](/en/services/erp-integrations/) or a one-off import. The goal is a process you can explain and repeat, rather than a file that worked once and cannot be regenerated.
