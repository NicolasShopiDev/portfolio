---
pair: 'input-query'
term: 'Input query'
aliases: ['run.graphql', 'consulta de entrada', 'Function input']
category: 'functions'
seoTitle: 'Input query de una Shopify Function: por qué importa'
description: 'La input query declara en GraphQL qué datos recibe una Shopify Function. Con un input limitado a 128 kB, es la mitad del trabajo de escribir la función.'
keyword: 'shopify function input query'
answer: 'La input query es el archivo GraphQL que declara qué datos recibe una Shopify Function en tiempo de ejecución. Una Function solo ve lo que su input query pide, y como el input está limitado a 128 kB, decidir qué campos entran es tanto trabajo como la lógica.'
related: ['shopify-functions', 'admin-graphql-api']
updated: '2026-10-21'
verified: '2026-10-21'
---

Es el archivo que más se subestima al escribir una Function. La lógica suele ser corta; lo que decide si la Function funciona en un carrito grande es lo que pediste.

## El límite de 128 kB no es teórico

Con un carrito de 10 líneas sobra espacio para todo. Con un bloc de pedido mayorista de 200 líneas, cada campo de más se multiplica por 200. Pedir el título, la descripción y las imágenes de cada variante "por si acaso" es la forma más rápida de que una Function que pasaba las pruebas falle en el pedido real de un cliente.

La regla que sigo: la input query pide **exactamente** los campos que el código lee, y cuando añado un campo al código, lo añado también aquí, en el mismo commit.

## Los alias son parte del diseño

Un [metacampo](/glosario/metacampos/) llega con su `namespace` y su `key`, lo que produce un código feo. Con un alias llega con el nombre que tiene sentido para la lógica:

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

Ese `casePack` es el mismo metacampo, con un nombre que se lee. Y `__typename` está ahí porque una línea de carrito no siempre es una variante de producto, y descartar lo que no lo es antes de tocarlo evita el error más común.

Un ejemplo completo con su función y sus pruebas está en [shopify-checkout-lab](https://github.com/NicolasShopiDev/shopify-checkout-lab).
