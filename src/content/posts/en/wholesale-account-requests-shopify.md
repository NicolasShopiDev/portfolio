---
pair: "solicitud-alta-mayorista-shopify"
title: "Shopify wholesale account requests: application, approval and first order"
seoTitle: "Shopify Wholesale Signup: Requests and Approval"
description: "Receive Shopify B2B applications without granting prices on form submission. What Shopify Forms handles and how to design review, permissions and first order."
keyword: "shopify wholesale account requests"
date: "2026-11-04"
tags: ["Shopify B2B","Customer accounts","Shopify Forms"]
related: ["shopify-b2b-b2c-misma-tienda","precio-incorrecto-shopify-b2b"]
faq: [{"q":"Does submitting an application automatically grant wholesale access?","a":"The documented company-request flow keeps access pending approval by default. Check that no automation grants it before the review your business requires."},{"q":"Does this form add employees to an existing company?","a":"That is not the purpose of native company account requests. Design a separate reviewed path for recognizing an employee and assigning the correct company and location."},{"q":"What should I check after approving a buyer?","a":"Verify access to the authorized location, agreed pricing and a valid complete order. Administrative approval does not replace testing the buying journey."}]
cta: {"heading":"Are wholesale applications scattered across forms and emails?","text":"Tell me who reviews applications, which data they need and how you assign pricing. I can assess the journey from request to first B2B order.","label":"Tell me how you approve buyers"}
---

You can receive wholesale account requests through Shopify Forms and review access before the buyer uses B2B conditions. Treat application, approval and first purchase as separate steps: submitting details should not grant a price list you have yet to authorize.

Community questions often describe replacing emails and manual account creation. The starting point is deciding what your team checks and how a buyer knows they can order.

> Documentation checked in November 2026. The tables and scenarios below are design proposals, not an implementation tested on a client's store.

## What native company requests support

Shopify's [company account request guide](https://help.shopify.com/en/manual/b2b/companies-and-customers/company-account-requests) describes a Shopify Forms flow creating a company, location and customer with approval pending by default. It does not add people to an existing company. A fully gated B2B storefront also prevents applicants without access from reaching that form.

These conditions determine the starting point. For a closed store, map how a prospect reaches the application. For an employee of an existing customer, prepare a reviewed invitation or association process rather than creating another company per employee.

Do not infer current capabilities from an old forum reply. Some search results still describe entirely manual setup; others advertise apps. Check the documented flow, then assess what your operation needs to add.

## Define the decision each field supports

Do not request fields merely because another wholesale website does. Record who uses each value and which decision it changes. A long form nobody reviews does not improve approval.

This is a working proposal, not Shopify's required-field list:

| Requested detail | Decision it should support |
| --- | --- |
| Company and activity | Fit for the wholesale channel |
| Contact person | Who can clarify the application |
| Country and delivery area | Relevant commercial operation |
| Necessary commercial identifier | Relationship with finance or ERP |
| Number of branches | Whether several locations need review |

If additional documentation is required, define its reviewer and handling. A form declaration is not tax verification or authorization to grant credit.

## Store information where the reviewer can find it

The [Shopify Forms field model](https://help.shopify.com/en/manual/b2b/companies-and-customers/company-account-requests#adding-custom-input-fields-to-your-form) distinguishes local form data from customer or company metafields. Choose the destination around review and reuse.

Before building automation, ask the reviewer to retrieve a complete fictional application. If they need three screens and an email lookup in a spreadsheet, there is still process work to do.

Specify second submissions: corrected information, another location or duplicate requests. Do not promise automatic merging merely because company names resemble each other.

## Separate notifying the team from approving the buyer

Shopify documents [B2B Flow templates](https://help.shopify.com/en/manual/b2b/reports-and-automations/automations) for new-request notifications as well as automatic authorization of form-created companies. Those are different business decisions.

If commercial review matters, begin with notification and an assigned owner. Do not enable approval simply to send a faster email.

Here is my proposed state table:

| Internal state | What the applicant knows | Next action |
| --- | --- | --- |
| Received | Request has arrived | Assign reviewer |
| Information missing | Specific clarification needed | Request correction |
| Approved | Authorized conditions are accessible | Check first purchase |
| Not accepted | Clear commercial outcome | Close or handle enquiry |

These are organizational names, not statuses you should expect to find verbatim in the admin.

## Approval also needs permissions and pricing

Review should produce an operational answer: which person may buy, for which location, and on which terms. An approved email does not establish those relationships by itself.

Use an equivalent test buyer to verify permissions, then check expected products and prices. For a discrepancy, follow the [B2B pricing diagnostic guide](/en/blog/wrong-price-shopify-b2b/) before painting a different number into the theme.

In a blended store, compare a retail profile in the same country too. The [B2B and B2C store guide](/en/blog/shopify-b2b-b2c-same-store/) explains why separation needs checking outside the wholesale account.

## Test the whole application and its exceptions

Prepare this matrix before launching, adapting expected results to your commercial policy:

| Fictional scenario | Acceptance evidence |
| --- | --- |
| Valid new prospect | Visible request and assigned owner |
| Missing details | Clear correction instructions |
| Pending request | No conditions granted before authorization |
| Completed approval | Expected access and pricing in an order |
| Repeat submission | Duplicate review without a wrong commercial account |
| Existing company's employee | Routed to the appropriate process |
| Retail buyer in blended store | Retains intended purchasing conditions |

Check access emails and the mobile journey. A button leading to a closed page turns correctly stored information into another support conversation.

## What to measure after launch

Track incoming requests, age of pending requests, approvals and first completed purchases. Establish your own baseline before promising a better conversion rate.

Look particularly at approved applicants without an order. Communication, a price list or an ordering condition may be missing; the prospect may simply not be ready. The metric points to investigation, rather than proving the cause.

For a development assessment, bring an anonymized request and explain each decision owner. That supports a [Shopify B2B portal](/en/shopify-b2b-developer/) turning commercial interest into usable access with a review process the team can maintain.
