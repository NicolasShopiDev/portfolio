---
pair: buscador-shopify-no-encuentra-sku
title: 'Shopify search cannot find a SKU: where to start'
seoTitle: 'Shopify Search Not Finding a SKU: A Diagnostic Guide'
description: 'A reference exists but customers cannot find it. Compare suggestions and results, verify the exact code and locate the problem before replacing your search app.'
keyword: shopify search not finding sku
date: '2026-11-07'
tags: ['Shopify', 'Search', 'B2B']
related: ['pedido-rapido-referencia-shopify', 'errores-sincronizacion-shopify-erp']
faq:
  - q: 'Does a missing suggestion mean the product cannot be searched?'
    a: 'No. Compare the dropdown shown while typing with the results page after submitting. They are different journeys and suggestions have limited space.'
  - q: 'Does finding a product establish that the right variant was selected?'
    a: 'No. Check the selected variant and what reaches the cart. Search results and the purchasable selection need separate validation.'
  - q: 'Does this apply to a third-party search app?'
    a: 'The comparison still helps describe the problem, but native Shopify rules do not necessarily explain another app. Identify which system handles the query first.'
cta:
  heading: 'Do wholesale customers call because they cannot find references?'
  text: 'Send three example codes, the page used to search and the product or variant expected. We can assess search and its connection to ordering.'
  label: 'Review search by reference'
---

If customers cannot find a reference in Shopify, start with the full SKU and compare suggestions with the results page. Then identify whether native search or an app handles the query: their rules need not match.

The product exists. Sales can find it. The customer cannot.

So the order arrives by email... exactly what your storefront was meant to avoid.

Before replacing search, let’s locate where the reference gets lost.

## “It does not appear” is not yet a diagnosis

Ask for the exact text entered and where it was entered. Admin search, storefront search and a quick-order table are different interfaces.

Shopify’s [search help](https://help.shopify.com/en/manual/online-store/storefront-search/search-behavior) distinguishes predictive suggestions while typing from results after submitting. It also explains that an external app can control search and change its behaviour.

Turn “it does not work” into something testable: “This code is missing from the header dropdown but appears after pressing Enter.” That sentence supports investigation. The first invites guesswork.

## Start with the complete code copied from the actual data

Choose a known variant and compare its saved SKU with the code customers use. Are they copying an old sales reference, supplier code or ERP identifier?

Do not assume these are interchangeable because staff call all of them “the reference”. Document which identifiers the store must accept and where each comes from.

Shopify documents full-SKU search and specific rules for code fragments. An arbitrary middle section is not equivalent to a complete search. Check the linked conditions before assuming every partial match should work.

Begin diagnosis with the full value, then add abbreviations customers actually use and decide which the business needs to support.

## Check suggestions, then press Enter

The dropdown is not the whole catalog. Shopify’s [predictive search documentation](https://help.shopify.com/en/manual/online-store/storefront-search/predictive-search) explains that suggestions show a limited set and depend on theme compatibility.

Hypothetical example: a complete boot code is missing from visible suggestions, but submitting the query finds the product. You have identified a difference between two journeys, not established that the catalog lacks the SKU.

Record both outcomes before changing products. If only suggestions fail, investigate that journey. If submitted search also fails, retain that evidence and review the search system, product and relevant configuration.

Do not stuff titles with random terms to force a match. Understand which data search uses first. Customers do not need product names that read like a warehouse inventory.

## Finding the product is not finding the variant

Suppose a SKU identifies a black boot in a particular size. Search opens the model, but the product page defaults to another size. The customer found the product and can still order the wrong variant.

This is fictional, not a claim about every theme. It separates three checks: the product found, the variant displayed and the variant added to the cart.

That distinction matters for wholesale buyers working from code lists. “Something similar” may be insufficient. Before commissioning development, decide whether the journey supports browsing or entering references to order them. The [SKU quick-order guide](/en/blog/sku-quick-order-shopify-b2b/) explores the latter.

## Build a small repeatable matrix

This is a proposed test, not one performed on your store:

| Case | What to observe |
| --- | --- |
| Copied full SKU | Expected product in suggestions and submitted results separately |
| Familiar abbreviated code | Actual matches and whether they meet requirements |
| Old reference | Whether a defined mapping exists |
| Another variant of the product | Displayed selection and cart variant |
| Same query on mobile | Ease of viewing, opening and buying |
| External search | Responsible tool and documented behaviour |

Add actual outcome, expected outcome and a screenshot. Results existing does not mean the test passed: they may be different products.

If codes originate elsewhere, compare a sample at source and destination before changing the whole import. The [Shopify and ERP diagnostic guide](/en/blog/shopify-erp-sync-errors/) helps organise that check without labelling every search issue a synchronisation fault.

## What you can do today without installing anything

Choose three references customers genuinely use. Verify the saved values and repeat the matrix. Identify missing code relationships, a particular failing interface or a result that does not support selecting the right variant.

You can now write a useful requirement: “These codes must lead to these variants in this journey.” Better than “I want AI search”... which sounds impressive and says little about what it must find.

For help adapting the experience, see [Shopify theme development](/en/services/custom-shopify-themes/). The work starts with those examples and required outcomes, rather than another tool installed blindly.

Documentation checked in November 2026. Matrix and scenarios are proposals; no client-store tests were performed for this article.
