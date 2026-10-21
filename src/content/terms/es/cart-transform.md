---
pair: 'cart-transform'
term: 'Cart Transform'
aliases: ['Cart Transform API', 'bundles en Shopify', 'expand y merge']
category: 'functions'
seoTitle: 'Cart Transform en Shopify: packs y líneas de carrito'
description: 'Cart Transform es la Function que cambia las líneas del carrito: parte una en varias, junta varias en una o ajusta su precio. Es como se montan los packs.'
keyword: 'cart transform shopify'
answer: 'Cart Transform es la API de Shopify Functions que modifica las líneas del carrito antes del checkout: puede expandir una línea en varias, fusionar varias en una sola o actualizar el precio y el título de una línea. Es la base técnica de los packs y de los lotes de producto.'
related: ['shopify-functions', 'volume-pricing', 'input-query']
updated: '2026-10-22'
---

Es la Function que menos se conoce y la que resuelve un problema muy concreto: vender algo que el comprador ve como **un** producto y el almacén necesita como **varios**, o al revés.

## Las tres operaciones

- **Expandir.** Una línea se convierte en varias. El comprador añade "pack de inicio" y el carrito, el pedido y el almacén ven las tres referencias que lo componen, cada una descontando su propio stock.
- **Fusionar.** Varias líneas se muestran como una. El comprador ve "conjunto completo" en lugar de cuatro líneas sueltas.
- **Actualizar.** Cambiar el precio o el título de una línea.

## Por qué importa en B2B

El caso que más me he encontrado es el de las cajas. El catálogo tiene la unidad, pero el almacén solo mueve cajas de seis. Hay dos formas de resolverlo y conviene elegir a conciencia:

1. **[Reglas de cantidad](/glosario/reglas-de-cantidad/)** con incremento de seis. Sin código, funciona en cualquier plan con B2B, y el comprador pide en unidades de seis en seis.
2. **Cart Transform** para vender la caja como producto y expandirla en seis unidades de cara al stock y al albarán.

La primera es casi siempre la correcta: es gratis y no añade nada que mantener. La segunda solo gana cuando el almacén necesita ver las unidades por separado de verdad.

## El requisito de plan

Cart Transform es una [Shopify Function](/glosario/shopify-functions/), así que escribirla a medida para tu tienda exige Shopify Plus. Y como toda Function, solo ve lo que su [input query](/glosario/input-query/) le pasa.

Documentación: [Cart Transform API](https://shopify.dev/docs/api/functions/latest/cart-transform).
