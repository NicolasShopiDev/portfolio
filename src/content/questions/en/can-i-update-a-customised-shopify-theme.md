---
pair: 'update-customised-theme'
question: 'Can I update a Shopify theme that has been customised?'
category: 'theme'
seoTitle: 'Updating a Customised Shopify Theme: How It Works'
description: 'It depends where the changes live. In new sections and your own files, yes. Scattered through the theme’s original files, it is a rewrite.'
keyword: 'update customised shopify theme'
answer: 'It depends where the changes live. If they are in new sections and files of their own, the update is viable and only the contact points need reviewing. If they are scattered inside the theme’s original files, updating means redoing each change one by one, and that is a project rather than an update.'
related: ['new-theme-for-b2b', 'b2b-portal-cost']
terms: ['sections-and-blocks', 'liquid']
updated: '2026-10-21'
verified: '2026-10-21'
---

## Why some themes can be updated and others cannot

Shopify does not apply updates on top of a theme you have edited: what happens is that the new version gets installed and the changes get carried over. So the real question is not technical, it is archaeological: **where are your changes**.

Two stores with the same amount of customisation can be in opposite situations. In one, everything custom lives in three new sections, a `custom.css` and a `custom.js`; updating means installing, moving those files and reviewing four touch points. In the other, there are stray conditions inside ten of the original theme files and nobody remembers which; there, updating means redoing it.

## How to tell which one you are in

Without looking at the code, three fairly reliable signals:

- **Is there a stylesheet of your own**, or was the CSS edited directly in the theme's?
- **Are the new features sections** that can be added and removed from the editor, or are they embedded in the templates?
- **Is it in version control?** If the repository exists, you can see exactly what was touched. If the only place the theme lives is the admin, the answer is that nobody knows.

## How I leave it so this does not happen

When I customise, everything of mine goes into new files and new [sections](/en/glossary/sections-and-blocks/), and the places where an original file has to be touched get written down. It is not about elegance: it is so the next update costs an afternoon instead of a quote.

And where an original file genuinely has to be touched, the change is kept as small as possible: one line calling something of mine, rather than twenty of my lines inside their file.

## If you are already in the bad case

You do not have to rebuild the whole theme at once. What works is extracting the changes into your own files gradually, starting with the ones that get touched most. A few months later the theme is updatable again, and the store never stopped.
