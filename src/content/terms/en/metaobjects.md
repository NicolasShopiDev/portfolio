---
pair: 'metaobjects'
term: 'Metaobjects'
aliases: ['metaobject', 'structured content', 'custom content types']
category: 'theme'
seoTitle: 'Metaobjects in Shopify: Custom Content Without Apps'
description: 'Metaobjects are your own content types in Shopify: size guides, materials, store locations, authors. Referenced from products and rendered in the theme.'
keyword: 'shopify metaobjects'
answer: 'Metaobjects are content types you define inside Shopify, with their own fields: a size guide, a material, a store location, an author. They exist in their own right, are referenced from products or pages through a metafield, and the theme renders them like any other object.'
related: ['metafields', 'sections-and-blocks', 'admin-graphql-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

The difference from a [metafield](/en/glossary/metafields/) is ownership. A metafield describes an object that already exists. A metaobject **is** an object: it stands alone, it is edited once, and many products use it.

## When it is worth it

The test is simple: does this data repeat across several products, and when it changes do you have to change it in all of them? If yes, it is a metaobject.

The cases I meet most:

- **A size guide** shared by a whole product family.
- **Materials or compositions**, with a name, a description and an icon.
- **Store locations**, with address and opening hours, for a stockists page.
- **Certifications**, which carry a logo and legal text.

The real benefit is not technical: the client edits it once and it updates on 200 product pages, without touching the theme.

## What to plan for

Two things. First, a metaobject can have its own URL if you give it one, at which point it becomes indexable content; decide that on purpose rather than by accident. Second, the theme has to render it: a metaobject with no section to display it is data nobody sees.

And the usual warning: metaobjects are not a database. If what you want is a 50,000-row catalog with search, this is not it.

Documentation: [metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects).
