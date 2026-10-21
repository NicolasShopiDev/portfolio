---
pair: 'theme-app-extension'
term: 'Theme app extension'
aliases: ['app block', 'app embed', 'theme extension']
category: 'theme'
seoTitle: 'Theme App Extension: Apps Without Touching Theme Code'
description: 'A theme app extension lets an app add blocks from the editor without injecting code. That is why uninstalling one no longer leaves leftovers loading.'
keyword: 'shopify theme app extension'
answer: 'A theme app extension is how an app adds functionality to a theme without modifying its files: it contributes blocks the merchant places from the editor, or an embed enabled across the store. When the app is uninstalled, its blocks leave with it.'
related: ['sections-and-blocks', 'liquid']
updated: '2026-10-22'
---

This solves the most expensive problem in maintaining a Shopify store: apps that leave things behind.

## The old model, and why it hurt

Apps used to install by putting their code into your theme: a script tag, a snippet pasted into `theme.liquid`, sometimes a whole template. Uninstalling the app removed the app, but **the code stayed**, loading its script on every page with nobody remembering where it came from.

Those leftovers are, by a distance, the first thing I find when auditing a slow store: two or three scripts from apps that are no longer installed. And when such an app uninstalls badly, the theme is left with broken snippets that blow up on the next update.

## The current model

With a theme app extension, the app's code lives in the app, not in your theme. The merchant places the block where they want from the editor, exactly like a [section](/en/glossary/sections-and-blocks/), and the app updates without touching your theme.

Practical consequences worth using in your favour:

- **Uninstalling leaves nothing.** No more archaeology hunting orphan scripts.
- **Your theme stays updatable**, because the app never edited it.
- **If an app still asks you to paste code into `theme.liquid`**, that tells you something about how it is maintained. Not disqualifying, but worth knowing before installing it.

Documentation: [theme app extensions](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions).
