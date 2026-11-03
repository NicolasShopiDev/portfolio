---
pair: cuentas-de-cliente-heredadas-shopify
title: 'Shopify legacy customer accounts: what breaks when you upgrade and how to prepare'
seoTitle: 'Shopify Legacy Customer Accounts: What Breaks When You Upgrade'
description: 'Shopify deprecated legacy customer accounts in February 2026. What breaks on upgrade, how to find it in your theme, and the theme switch that upgrades you silently.'
keyword: 'shopify legacy customer accounts'
date: '2026-11-03'
tags: ['Customer accounts', 'Themes', 'Apps']
related: ['shopify-b2b-sin-plus', 'scripts-adicionales-shopify']
faq:
  - q: 'Is Shopify removing legacy customer accounts?'
    a: 'Yes. They have been deprecated since 26 February 2026: they cannot be turned on in new stores, they get no new features and Shopify no longer provides technical support for them. Shopify said it would announce the final sunset date during 2026, and as of 3 November 2026 it has not published it.'
  - q: 'Will my customers lose their account or their orders when I upgrade?'
    a: 'No. With the new customer accounts, any customer with a profile in the admin already has an account: they sign in with their email and a 6-digit code and see their orders. What you lose is whatever you built in the legacy account Liquid templates, which stop being used.'
  - q: 'What happens to my customers passwords?'
    a: 'They stop being used. The new customer accounts have no passwords: the customer gets a one-time code by email, and can also sign in with Shop, Google or Facebook if you turn them on. If someone signs in with an email you did not have, Shopify creates their profile automatically.'
  - q: 'Can I go back to legacy customer accounts if something goes wrong?'
    a: 'For 30 days. Shopify lets you revert the change within that period, but that restores the setting, not whatever customers did in the meantime. The safe route is to test the new configuration before publishing it, which the upgrade process itself allows.'
  - q: 'Do I need Shopify Plus to customize the new customer accounts?'
    a: 'For most things, no: public apps with customer account extensions work from the Basic plan. Plus is needed to connect your own identity provider, keep Multipass and show profile blocks only to B2B customers.'
cta:
  heading: 'Is your customer area built in Liquid?'
  text: 'I review themes still on legacy accounts before the upgrade: which templates, forms, apps and automations depend on them, and what rebuilds each one on the new accounts. Tell me what your customer area does today and I will tell you what moves on its own and what needs rebuilding.'
  label: 'Tell me about your store'
---

Yes, you have to move, although there is no date yet. Shopify deprecated legacy customer accounts on 26 February 2026, stopped supporting them and said it would announce the final date during the year. As of 3 November 2026 that date has not been published, so you choose when to switch, which beats doing it in a rush.

What breaks on upgrade is everything built on the account's Liquid templates: a custom customer area, your own sign-up form, an app that injected its button into the orders page. Customers, their orders and their addresses carry over without you doing anything.

And there is a way to upgrade without meaning to, which is worth knowing before you change themes.

> The facts in this article were checked against Shopify's help center and changelog in November 2026. Admin paths come from Shopify's help center, not from walking through a live admin: if a label does not match what you see, trust what you see.

## How to tell if you are on legacy accounts

In **Settings > Customer accounts**. If your store is still on legacy accounts, you will see a banner saying so, with a **Help me upgrade** button that opens Sidekick's upgrade assistant.

Another clue without opening the admin: if the "My account" link leads to a page on your store with an email and password form, you are on legacy accounts. The new accounts have no password. According to Shopify's [developer notice](https://shopify.dev/changelog/posts/legacy-customer-accounts-are-deprecated) from February, more than 70% of stores already use the new ones.

## The theme switch trap

It is in that same Shopify notice: a store on legacy customer accounts that **moves to a theme without the legacy account files is upgraded automatically** to the new accounts. Shopify also asks theme developers to stop including those files.

In practice: if you are preparing a redesign on a new theme, the account upgrade arrives the day you publish the theme, mixed in with everything else. If something fails that day, you will not know whether it is the theme or the accounts.

Before publishing a new theme, check whether it has a `templates/customers/` folder. If it does not, do the account upgrade first, on your current theme, and leave the redesign for later.

## What happens to your customers

Nothing you need to migrate. [Shopify's help](https://help.shopify.com/en/manual/customers/customer-accounts) sums it up in one sentence: if the customer has a profile in the admin, they already have an account.

- **They sign in with a code.** They enter their email and receive a 6-digit one-time code. There is no password, so there is nothing to reset.
- **Or with Shop, Google or Facebook**, if you turn them on.
- **Sessions last up to 365 days.** Returning customers do not have to sign in again.
- **A new email creates a new profile.** If someone signs in with an address you did not have, Shopify creates their profile on the spot. There is no "sign-up" separate from signing in.

That last point changes the most for stores that approved sign-ups by hand, for example trade customers: there is no longer a registration form that creates an account pending review. Whoever wants to sign in, signs in.

## What breaks

The [upgrade guide](https://help.shopify.com/en/manual/customers/customer-accounts/upgrade) and the Shopify Community leave this list of what changes:

| What you have today | What happens on upgrade |
| --- | --- |
| Customized `customers/*` templates | No longer used: `/account` redirects to the new accounts |
| Sign-in or sign-up in a modal | Has to be removed from the theme before upgrading |
| Sign-up form using `create_customer` | Can return an error instead of creating the account |
| App that injects its block into the account page | Does not appear unless the app has a customer account extension |
| Flow workflow with *Customer account enabled* | Fires on first sign-in, not when the account is created |
| Flow workflow with *Customer account disabled* | Not supported on the new accounts |
| Segments by `DISABLED`, `INVITED` or `DECLINED` state | Those customers become `ENABLED` when they sign in |
| One domain per market | Accounts use a single domain for every market |
| Multipass, on Plus | Keeps working |
| Headless store using `customerAccessTokenCreate` | That mutation is for legacy accounts only |

Redirects happen on their own: Shopify sends `/account/login` and the other legacy account routes to the new accounts, including links hard-coded in the theme. What does not redirect is anything you built outside those routes, such as a sign-in modal or a separate sign-up page, and the guide asks you to remove them first.

The sign-up form causes the most trouble. In the Shopify Community there are [stores that, after upgrading, get the error *Customer account creation has been disabled*](https://community.shopify.com/t/customer-account-creation-has-been-disabled/591109) because the theme was still submitting the old registration form.

## How to find all of it in your theme

Sidekick scans the published theme and installed apps, but Shopify's own help says it does not check Shopify Flow workflows or customer segments, and that it may leave files unscanned. Before upgrading, I prefer to have the list myself. With [Shopify CLI](https://shopify.dev/docs/api/shopify-cli/theme/theme-pull):

```bash
shopify theme pull --store yourstore.myshopify.com --live --path live-theme
cd live-theme

# Legacy account templates in the theme
ls templates/customers/

# Everything outside that folder that depends on them
grep -rnE \
  -e "create_customer|customer_login|recover_customer_password" \
  -e "customer_address|account_register_url|customer\.has_account" \
  -e "/account/(login|register)" \
  --include=*.liquid --include=*.json .
```

Every line it returns is a decision: delete it, the new account covers it, or it needs rebuilding. A recent theme should return the templates and little else. An older one can return sign-in modals, sign-up forms with extra fields in `customer[note]` and "create your account" prompts that depended on `customer.has_account`.

## The 28 October change

A change from last week affects exactly the stores that are upgrading. Since [28 October 2026](https://shopify.dev/changelog/posts/first-sign-ins-to-new-customer-accounts-now-set-customer-state-and-send-customers-enable), a customer's first sign-in to the new accounts marks them as `ENABLED` and sends the `customers/enable` and `customers/update` webhooks, just like activation in legacy accounts. Until then it did not.

It has two consequences for the store:

- **`customer.has_account` changes.** It used to return `false` for these customers; now it returns `true` after their first sign-in. If your theme shows a "create your account" prompt based on that condition, it will stop appearing for people who used to see it.
- **Welcome messages.** An app that sends a welcome email or awards points when it receives `customers/enable` will do so on first sign-in. Someone who bought as a guest never activated a legacy account, so they are still `DISABLED`: if they bought three years ago and sign in today to check an order, they may get a "welcome to the store". Check it with the app before upgrading.

## What rebuilds what used to be in Liquid

The new accounts have no templates to edit. Pages are extended with customer account UI extensions: on the orders page, on an order's status, on the profile or as a full page. They come inside apps, are placed from the checkout and accounts editor, and take the colors and fonts you configure there.

By plan, according to Shopify's help:

- **From Basic**, public apps with extensions for every account page.
- **Advanced and Plus** to customize accounts by market.
- **Plus only**: connecting your own identity provider, Multipass and profile blocks shown only to B2B customers.

If what you need is your own (a reorder button with your rules, invoices from your invoicing software), it is a custom-built extension, and the documentation does not make clear what a custom app allows outside Plus. Before quoting one without Plus, test it on a development store. This is the work I do on [customer areas](/en/services/customer-accounts/), mostly for wholesale portals.

And if you plan to sell wholesale, there is no choice: Shopify B2B does not work with legacy accounts. What each plan includes is in [Shopify B2B without Plus](/en/blog/shopify-b2b-without-plus/).

## How to switch without surprises

Shopify's guide has nine steps. These are the ones I never skip:

1. **Build the list above** (theme, apps, Flow and segments) and decide what gets rebuilt.
2. **Duplicate the checkout and accounts configuration** and work on the copy. That way you test without touching what is live.
3. **Connect a subdomain for accounts**, such as `account.yourstore.com`. It affects tracking: if accounts are not on a subdomain of your domain, pixels and cookie consent do not work on the Order status page. I covered it in the article on [additional scripts and conversions](/en/blog/shopify-additional-scripts/).
4. **Check the sender email**, which is the one that sends sign-in codes.
5. **Preview and test** with a real store customer: they sign in with their code, see their orders, and every app shows up where it should.
6. **Upgrade.** You can revert for 30 days. Treat it as a safety net, not a plan.

What I do not recommend is waiting for the final date. When Shopify publishes it, half the remaining stores will move at once, and the other half will do it the day they change themes without noticing.

Shopify sources: the [deprecation notice](https://shopify.dev/changelog/posts/legacy-customer-accounts-are-deprecated), the [upgrade guide](https://help.shopify.com/en/manual/customers/customer-accounts/upgrade), [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts), the [28 October change](https://shopify.dev/changelog/posts/first-sign-ins-to-new-customer-accounts-now-set-customer-state-and-send-customers-enable) and the [B2B documentation on accounts](https://help.shopify.com/en/manual/b2b/customer-login-and-accounts).
