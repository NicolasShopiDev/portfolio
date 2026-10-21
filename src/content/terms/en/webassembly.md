---
pair: 'webassembly'
term: 'WebAssembly (Wasm)'
aliases: ['Wasm', 'WebAssembly', 'wasm32']
category: 'functions'
seoTitle: 'WebAssembly in Shopify: Why Functions Work That Way'
description: 'Shopify Functions compile to WebAssembly. That is where their three rules come from: no network, an instruction budget, and freedom of language.'
keyword: 'shopify functions webassembly'
answer: 'WebAssembly is the format Shopify Functions are compiled to before they are uploaded. Shopify does not run your JavaScript or your Rust as written: it runs the resulting Wasm module, in a sandbox, with no network access and an instruction budget.'
related: ['shopify-functions', 'input-query']
updated: '2026-10-22'
---

This is not an implementation detail you can ignore: it explains the three [Functions](/en/glossary/shopify-functions/) rules that confuse people most at the start.

## Where the limits come from

**There are no network calls.** A Wasm module only sees what is handed to it as input. That is why a Function cannot query your ERP or an external API, and why any custom data has to arrive in [metafields](/en/glossary/metafields/) through the [input query](/en/glossary/input-query/).

**There is an instruction budget.** Shopify runs your module inside its checkout, for every buyer of every store, so it caps it. That is why walking the whole catalog inside a Function is not an option.

**It is fast and isolated.** A Wasm module starts in microseconds and cannot touch anything outside its box. That is what lets Shopify run third-party code on the critical path of a payment.

## What it means for choosing a language

Shopify officially supports JavaScript and Rust, but underneath **any language that compiles to Wasm works**. In practice I pick JavaScript unless the budget gets tight: it reads, it tests with ordinary tooling, and anyone on the team can maintain it. Rust comes in when the function walks very large carts and instructions have to be squeezed.

The decision is rarely technical, it is about maintenance: who is going to touch this in a year?

Documentation: [Functions programming languages](https://shopify.dev/docs/apps/build/functions/programming-languages).
