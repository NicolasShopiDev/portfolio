---
pair: 'input-query'
term: 'Input query'
aliases: ['run.graphql', 'Function input', 'input GraphQL']
category: 'functions'
seoTitle: 'A Shopify Function’s Input Query, and Why It Matters'
description: 'The input query declares in GraphQL what data a Shopify Function receives. With the input capped at 128 kB, it is half the work of writing the function.'
keyword: 'shopify function input query'
answer: 'The input query is the GraphQL file that declares what data a Shopify Function receives at run time. A Function only sees what its input query asks for, and because the input is capped at 128 kB, deciding which fields go in is as much work as the logic itself.'
related: ['shopify-functions', 'admin-graphql-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

This is the most underestimated file when writing a Function. The logic is usually short; what decides whether the Function works on a large cart is what you asked for.

## The 128 kB limit is not theoretical

With a 10-line cart there is room for everything. With a 200-line wholesale order pad, every extra field is multiplied by 200. Asking for every variant's title, description and images "just in case" is the fastest way to make a Function that passed its tests fail on a customer's real order.

The rule I follow: the input query asks for **exactly** the fields the code reads, and when I add a field to the code I add it here too, in the same commit.

## Aliases are part of the design

A [metafield](/en/glossary/metafields/) arrives with its `namespace` and `key`, which makes for ugly code. With an alias it arrives under the name that makes sense to the logic:

```graphql
query RunInput {
  cart {
    lines {
      quantity
      merchandise {
        __typename
        ... on ProductVariant {
          id
          title
          casePack: metafield(namespace: "b2b", key: "case_pack") { value }
        }
      }
    }
  }
}
```

That `casePack` is the same metafield under a name that reads. And `__typename` is there because a cart line is not always a product variant, and discarding what is not one before touching it avoids the most common error.

A complete example with its function and its tests is in [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab).
