---
pair: 'sections-and-blocks'
term: 'Sections and blocks'
aliases: ['sections', 'blocks', 'theme sections', 'Online Store 2.0']
category: 'theme'
seoTitle: 'Sections and Blocks in Shopify: a Theme That Survives'
description: 'Sections and blocks are the pieces a client uses to build pages in Shopify without touching code. They are the real deliverable of a custom theme.'
keyword: 'shopify sections and blocks'
answer: 'Sections are the modules of a Shopify template that a client can add, reorder and configure from the editor; blocks are the pieces that go inside a section. Since Online Store 2.0 they work on any template, and they are what makes a theme maintainable without a developer.'
related: ['liquid', 'metaobjects']
updated: '2026-10-21'
verified: '2026-10-21'
---

This is the part of theme work that does not show in the mockup and decides whether the project ages well. Two themes can look identical on delivery day: on one the client builds a landing page in twenty minutes, on the other they ask for a quote every time.

## How to split sections

One section per **page intention**, not per row of the design. If the design has three text-and-image bands that differ only in which side the photo is on, that is not three sections: it is one with a position setting.

The opposite mistake is just as common: one giant section with forty settings. If the client needs a manual to use it, the section is split wrong.

## What makes a section actually useful

- **Sensible defaults.** A freshly added section has to look right before anything is configured.
- **Capped blocks.** A carousel that accepts 30 blocks will end up with 30 blocks.
- **Copy in settings, not in code.** Everything the client might one day want to change.
- **Names in their language.** "Featured band", not "hero_section_2".

## Where they meet content

When the data a section shows repeats across pages, it does not belong in the settings: it belongs in [metaobjects](/en/glossary/metaobjects/), with the section referencing them. The client edits the data once and it changes everywhere it appears.

Documentation: [theme sections](https://shopify.dev/docs/storefronts/themes/architecture/sections).
